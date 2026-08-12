import { readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const PROJECT_ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const SOURCE_ROOTS = [
  join(PROJECT_ROOT, 'src', 'app'),
  join(PROJECT_ROOT, 'src', 'components', 'manos-abiertas'),
];
const SOURCE_EXTENSIONS = new Set(['.js', '.jsx', '.ts', '.tsx']);
const FORMAT = process.argv.includes('--json') ? 'json' : 'text';

const RULES = {
  'button-type-in-form': {
    priority: 'P1',
    wcag: '3.2.2 On Input (AA)',
    message: 'Native button inside a form has no explicit type.',
    remediation: 'Set type="button" for actions or type="submit" for submission.',
  },
  'image-alt': {
    priority: 'P0',
    wcag: '1.1.1 Non-text Content (A)',
    message: 'Image has no alt attribute.',
    remediation: 'Provide meaningful alt text or alt="" for a decorative image.',
  },
  'form-control-label': {
    priority: 'P0',
    wcag: '1.3.1 Info and Relationships (A); 3.3.2 Labels or Instructions (A)',
    message: 'Native form control has no statically associated accessible label.',
    remediation: 'Wrap it in a label, associate a label with htmlFor/id, or add aria-label/aria-labelledby.',
  },
  'target-size-44': {
    priority: 'P1',
    wcag: '2.5.5 Target Size (AAA)',
    message: 'Interactive target has an explicit dimension below 44 CSS pixels.',
    remediation: 'Use a minimum width and height of 44px, or document a valid WCAG exception.',
  },
  'dialog-semantics': {
    priority: 'P0',
    wcag: '4.1.2 Name, Role, Value (A)',
    message: 'Dialog semantics or accessible naming are incomplete.',
    remediation: 'Expose dialog/alertdialog semantics and provide aria-label or aria-labelledby.',
  },
};

function walk(directory) {
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walk(path));
    else if (entry.isFile() && SOURCE_EXTENSIONS.has(extname(entry.name))) files.push(path);
  }
  return files;
}

function lineNumberAt(source, index) {
  let line = 1;
  for (let cursor = 0; cursor < index; cursor += 1) {
    if (source.charCodeAt(cursor) === 10) line += 1;
  }
  return line;
}

function skipQuoted(source, index, quote) {
  let cursor = index + 1;
  while (cursor < source.length) {
    if (source[cursor] === '\\') cursor += 2;
    else if (source[cursor] === quote) return cursor + 1;
    else cursor += 1;
  }
  return source.length;
}

function skipLineComment(source, index) {
  const end = source.indexOf('\n', index + 2);
  return end === -1 ? source.length : end + 1;
}

function skipBlockComment(source, index) {
  const end = source.indexOf('*/', index + 2);
  return end === -1 ? source.length : end + 2;
}

function findTagEnd(source, start) {
  let braceDepth = 0;
  let cursor = start;
  while (cursor < source.length) {
    const char = source[cursor];
    const next = source[cursor + 1];
    if (char === '"' || char === "'" || char === '`') {
      cursor = skipQuoted(source, cursor, char);
      continue;
    }
    if (char === '/' && next === '/') {
      cursor = skipLineComment(source, cursor);
      continue;
    }
    if (char === '/' && next === '*') {
      cursor = skipBlockComment(source, cursor);
      continue;
    }
    if (char === '{') braceDepth += 1;
    else if (char === '}') braceDepth = Math.max(0, braceDepth - 1);
    else if (char === '>' && braceDepth === 0) return cursor;
    cursor += 1;
  }
  return -1;
}

function scanJsxTags(source) {
  const tags = [];
  let cursor = 0;
  while (cursor < source.length) {
    const char = source[cursor];
    const next = source[cursor + 1];
    if (char === '"' || char === "'" || char === '`') {
      cursor = skipQuoted(source, cursor, char);
      continue;
    }
    if (char === '/' && next === '/') {
      cursor = skipLineComment(source, cursor);
      continue;
    }
    if (char === '/' && next === '*') {
      cursor = skipBlockComment(source, cursor);
      continue;
    }
    if (char !== '<') {
      cursor += 1;
      continue;
    }

    const match = source.slice(cursor).match(/^<\s*(\/?)\s*([A-Za-z][\w.-]*)\b/);
    if (!match) {
      cursor += 1;
      continue;
    }
    const end = findTagEnd(source, cursor + match[0].length);
    if (end === -1) break;
    const raw = source.slice(cursor, end + 1);
    tags.push({
      name: match[2],
      closing: match[1] === '/',
      selfClosing: /\/\s*>$/.test(raw),
      raw,
      start: cursor,
      end,
      line: lineNumberAt(source, cursor),
    });
    cursor = end + 1;
  }
  return tags;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function hasAttribute(tag, name) {
  const pattern = new RegExp(`(?:^|\\s)${escapeRegExp(name)}(?:\\s*=|\\s|/?>)`, 'm');
  return pattern.test(tag.raw.slice(tag.raw.indexOf(tag.name) + tag.name.length));
}

function staticAttribute(tag, name) {
  const pattern = new RegExp(
    `(?:^|\\s)${escapeRegExp(name)}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|\\{\\s*"([^"]*)"\\s*\\}|\\{\\s*'([^']*)'\\s*\\})`,
    'm',
  );
  const match = tag.raw.slice(tag.raw.indexOf(tag.name) + tag.name.length).match(pattern);
  return match ? match.slice(1).find((value) => value !== undefined) : null;
}

function expressionAttribute(tag, name) {
  const pattern = new RegExp(
    `(?:^|\\s)${escapeRegExp(name)}\\s*=\\s*\\{\\s*([A-Za-z_$][\\w$]*(?:\\.[A-Za-z_$][\\w$]*)*)\\s*\\}`,
    'm',
  );
  return tag.raw.slice(tag.raw.indexOf(tag.name) + tag.name.length).match(pattern)?.[1] ?? null;
}

function hasSpreadAttributes(tag) {
  return /\{\s*\.\.\./.test(tag.raw);
}

function rendersHtmlElement(tag, name) {
  return tag.name === name || tag.name === `motion.${name}`;
}

function extractClassTokens(tag) {
  const classIndex = tag.raw.search(/\bclassName\s*=/);
  if (classIndex === -1) return { tokens: [], dynamic: false };
  const assignment = tag.raw.slice(classIndex).match(/^className\s*=\s*/);
  let cursor = classIndex + assignment[0].length;
  const char = tag.raw[cursor];
  if (char === '"' || char === "'") {
    const end = skipQuoted(tag.raw, cursor, char);
    return { tokens: tag.raw.slice(cursor + 1, end - 1).split(/\s+/).filter(Boolean), dynamic: false };
  }
  if (char !== '{') return { tokens: [], dynamic: true };

  let depth = 1;
  let end = cursor + 1;
  while (end < tag.raw.length && depth > 0) {
    const current = tag.raw[end];
    if (current === '"' || current === "'" || current === '`') {
      end = skipQuoted(tag.raw, end, current);
      continue;
    }
    if (current === '{') depth += 1;
    else if (current === '}') depth -= 1;
    end += 1;
  }
  const expression = tag.raw.slice(cursor + 1, end - 1);
  const tokens = [];
  const literalPattern = /(["'`])([^"'`$]*)\1/g;
  for (const match of expression.matchAll(literalPattern)) tokens.push(...match[2].split(/\s+/).filter(Boolean));
  return { tokens, dynamic: /\$\{|\b(?:className|classes|styles?)\b/.test(expression) };
}

function dimensionFromToken(token) {
  const normalized = token.replace(/^!/, '');
  const segments = normalized.split(':');
  const utility = segments.pop().replace(/^!/, '');
  const variant = segments.join(':') || 'base';
  const match = utility.match(/^(min-)?(size|w|h)-(\[(.+)\]|\d+(?:\.\d+)?|px)$/);
  if (!match) return null;
  const minimum = Boolean(match[1]);
  const axis = match[2];
  const rawValue = match[4] ?? match[3];
  let pixels = null;
  if (rawValue === 'px') pixels = 1;
  else if (/^\d+(?:\.\d+)?$/.test(rawValue)) pixels = Number(rawValue) * 4;
  else {
    const arbitrary = rawValue.match(/^(-?\d+(?:\.\d+)?)(px|rem)$/);
    if (arbitrary) pixels = Number(arbitrary[1]) * (arbitrary[2] === 'rem' ? 16 : 1);
  }
  if (!Number.isFinite(pixels)) return null;
  return { axis, minimum, pixels, token, variant };
}

function undersizedDimensions(tokens) {
  const dimensions = tokens.map(dimensionFromToken).filter(Boolean);
  const globalMinimums = new Map();
  for (const dimension of dimensions) {
    if (!dimension.minimum || dimension.variant !== 'base') continue;
    const axes = dimension.axis === 'size' ? ['w', 'h'] : [dimension.axis];
    for (const axis of axes) globalMinimums.set(axis, Math.max(globalMinimums.get(axis) ?? 0, dimension.pixels));
  }

  const undersized = [];
  for (const dimension of dimensions) {
    if (dimension.minimum || dimension.pixels >= 44) continue;
    const axes = dimension.axis === 'size' ? ['w', 'h'] : [dimension.axis];
    const uncovered = axes.some((axis) => (globalMinimums.get(axis) ?? 0) < 44);
    if (uncovered) undersized.push(`${dimension.token} (${dimension.pixels}px)`);
  }
  return [...new Set(undersized)];
}

function parseExceptions(source) {
  const exceptions = [];
  const pattern = /a11y-static-ignore\s+([a-z0-9-]+)\s+--\s*([^\r\n*}]+)/gi;
  for (const match of source.matchAll(pattern)) {
    exceptions.push({
      rule: match[1],
      reason: match[2].trim(),
      line: lineNumberAt(source, match.index),
      used: false,
    });
  }
  return exceptions;
}

function applyException(finding, exceptions) {
  const exception = exceptions.find((candidate) => (
    !candidate.used
    && candidate.rule === finding.rule
    && candidate.reason.length >= 12
    && candidate.line <= finding.line
    && finding.line - candidate.line <= 2
  ));
  if (!exception) return false;
  exception.used = true;
  finding.exception = exception.reason;
  return true;
}

function analyzeFile(path) {
  const source = readFileSync(path, 'utf8');
  const projectPath = relative(PROJECT_ROOT, path).split(sep).join('/');
  const tags = scanJsxTags(source);
  const exceptions = parseExceptions(source);
  const labelTargets = new Set(
    tags
      .filter((tag) => !tag.closing && rendersHtmlElement(tag, 'label'))
      .map((tag) => staticAttribute(tag, 'htmlFor') ?? expressionAttribute(tag, 'htmlFor'))
      .filter(Boolean),
  );
  const findings = [];
  const uncertainties = [];
  let formDepth = 0;
  let labelDepth = 0;

  function addFinding(rule, tag, detail = '') {
    const definition = RULES[rule];
    const finding = { rule, path: projectPath, line: tag.line, ...definition, detail };
    if (!applyException(finding, exceptions)) findings.push(finding);
  }

  for (const tag of tags) {
    if (tag.closing) {
      if (rendersHtmlElement(tag, 'form')) formDepth = Math.max(0, formDepth - 1);
      if (rendersHtmlElement(tag, 'label')) labelDepth = Math.max(0, labelDepth - 1);
      continue;
    }

    const spread = hasSpreadAttributes(tag);
    if (rendersHtmlElement(tag, 'button') && formDepth > 0 && !hasAttribute(tag, 'type')) {
      if (spread) uncertainties.push({ path: projectPath, line: tag.line, check: 'button type supplied through spread props' });
      else addFinding('button-type-in-form', tag);
    }

    if (rendersHtmlElement(tag, 'img') || tag.name === 'Image') {
      if (!hasAttribute(tag, 'alt')) {
        if (spread) uncertainties.push({ path: projectPath, line: tag.line, check: 'image alt supplied through spread props' });
        else addFinding('image-alt', tag);
      }
    }

    if (rendersHtmlElement(tag, 'input') || rendersHtmlElement(tag, 'textarea')) {
      const type = staticAttribute(tag, 'type');
      const id = staticAttribute(tag, 'id') ?? expressionAttribute(tag, 'id');
      const classTokens = extractClassTokens(tag).tokens;
      const visuallyRemoved = classTokens.includes('hidden')
        || staticAttribute(tag, 'aria-hidden') === 'true';
      const labelled = labelDepth > 0
        || hasAttribute(tag, 'aria-label')
        || hasAttribute(tag, 'aria-labelledby')
        || (id && labelTargets.has(id));
      if (type !== 'hidden' && !visuallyRemoved && !labelled) {
        if (spread) uncertainties.push({ path: projectPath, line: tag.line, check: 'form label supplied through spread props' });
        else addFinding('form-control-label', tag);
      }
    }

    const role = staticAttribute(tag, 'role');
    const ariaModal = staticAttribute(tag, 'aria-modal');
    const hasDialogName = hasAttribute(tag, 'aria-label') || hasAttribute(tag, 'aria-labelledby');
    if (rendersHtmlElement(tag, 'dialog') && !hasDialogName) {
      addFinding('dialog-semantics', tag, 'Native dialog lacks an accessible name.');
    } else if ((role === 'dialog' || role === 'alertdialog') && !hasDialogName) {
      addFinding('dialog-semantics', tag, `${role} lacks aria-label or aria-labelledby.`);
    } else if (ariaModal === 'true' && role !== 'dialog' && role !== 'alertdialog' && !rendersHtmlElement(tag, 'dialog')) {
      addFinding('dialog-semantics', tag, 'aria-modal="true" is present without dialog or alertdialog semantics.');
    }

    const inputType = staticAttribute(tag, 'type');
    const interactive = rendersHtmlElement(tag, 'button')
      || tag.name === 'Button'
      || rendersHtmlElement(tag, 'a')
      || tag.name === 'Link'
      || role === 'button'
      || role === 'link'
      || (rendersHtmlElement(tag, 'input') && ['button', 'submit', 'reset', 'image'].includes(inputType));
    if (interactive) {
      const classData = extractClassTokens(tag);
      const undersized = undersizedDimensions(classData.tokens);
      if (undersized.length > 0) addFinding('target-size-44', tag, `Explicit classes: ${undersized.join(', ')}.`);
      else if (classData.dynamic && classData.tokens.length === 0) {
        uncertainties.push({ path: projectPath, line: tag.line, check: 'interactive target size uses dynamic classes' });
      }
    }

    if (tag.name === 'Dialog' || tag.name === 'DialogContent') {
      uncertainties.push({ path: projectPath, line: tag.line, check: `${tag.name} semantics depend on the UI component implementation` });
    }

    if (rendersHtmlElement(tag, 'form') && !tag.selfClosing) formDepth += 1;
    if (rendersHtmlElement(tag, 'label') && !tag.selfClosing) labelDepth += 1;
  }

  for (const exception of exceptions) {
    if (!RULES[exception.rule]) {
      findings.push({
        rule: 'invalid-exception',
        path: projectPath,
        line: exception.line,
        priority: 'P1',
        wcag: 'Audit integrity',
        message: `Exception references unknown rule "${exception.rule}".`,
        remediation: `Use one of: ${Object.keys(RULES).join(', ')}.`,
        detail: '',
      });
    } else if (exception.reason.length < 12) {
      findings.push({
        rule: 'invalid-exception',
        path: projectPath,
        line: exception.line,
        priority: 'P1',
        wcag: 'Audit integrity',
        message: 'Exception justification is too short.',
        remediation: 'Provide a concrete justification of at least 12 characters after "--".',
        detail: '',
      });
    } else if (!exception.used) {
      findings.push({
        rule: 'unused-exception',
        path: projectPath,
        line: exception.line,
        priority: 'P2',
        wcag: 'Audit integrity',
        message: `Exception for ${exception.rule} does not suppress a finding on this or the next two lines.`,
        remediation: 'Remove the stale exception or place it immediately before the justified element.',
        detail: '',
      });
    }
  }

  return { findings, uncertainties, tagCount: tags.length };
}

export function runAudit() {
  const files = SOURCE_ROOTS.flatMap(walk).sort();
  const result = {
    standard: 'WCAG 2.1 AA plus project target-size gate based on 2.5.5 AAA',
    roots: SOURCE_ROOTS.map((path) => relative(PROJECT_ROOT, path).split(sep).join('/')),
    filesScanned: files.length,
    tagsScanned: 0,
    findings: [],
    uncertainties: [],
  };
  for (const file of files) {
    const analysis = analyzeFile(file);
    result.tagsScanned += analysis.tagCount;
    result.findings.push(...analysis.findings);
    result.uncertainties.push(...analysis.uncertainties);
  }
  result.findings.sort((a, b) => a.path.localeCompare(b.path) || a.line - b.line || a.rule.localeCompare(b.rule));
  result.uncertainties.sort((a, b) => a.path.localeCompare(b.path) || a.line - b.line);
  return result;
}

function printText(result) {
  console.log(`Accessibility static gate: ${result.findings.length === 0 ? 'PASS' : 'FAIL'}`);
  console.log(`Scope: ${result.filesScanned} files, ${result.tagsScanned} JSX tags`);
  console.log(`Standard: ${result.standard}`);
  console.log(`Findings: ${result.findings.length}; manual-review signals: ${result.uncertainties.length}`);
  for (const finding of result.findings) {
    const detail = finding.detail ? ` ${finding.detail}` : '';
    console.log(`${finding.priority} ${finding.rule} ${finding.path}:${finding.line} [${finding.wcag}] ${finding.message}${detail}`);
  }
  if (result.uncertainties.length > 0) {
    console.log('Manual review (not gate failures):');
    for (const item of result.uncertainties) console.log(`MANUAL ${item.path}:${item.line} ${item.check}`);
  }
  console.log('Exception syntax: a11y-static-ignore <rule> -- <specific justification of at least 12 characters>');
}

const result = runAudit();
if (FORMAT === 'json') console.log(JSON.stringify(result, null, 2));
else printText(result);
process.exitCode = result.findings.length === 0 ? 0 : 1;
