import { existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ledgerPath = resolve(root, 'docs', 'world-class', 'applied-improvements.jsonl');
const requiredKeys = ['id', 'descripcion', 'categoria', 'archivos', 'evidencia', 'estado'];
const allowedCategories = new Set([
  'accessibility',
  'architecture',
  'content-integrity',
  'data-trust',
  'i18n',
  'localization',
  'privacy',
  'quality',
  'responsive',
  'security',
  'tooling',
]);
const allowedEvidenceTypes = new Set(['command', 'test', 'inspection']);
const nonCountableFiles = new Set([
  'scripts/verify-applied-improvements.mjs',
  'docs/world-class/applied-improvements.jsonl',
  'docs/world-class/APPLIED-IMPROVEMENTS.md',
]);
const stopWords = new Set([
  'a', 'al', 'anade', 'aplica', 'con', 'como', 'de', 'del', 'el', 'en', 'entre',
  'e', 'implementa', 'la', 'las', 'los', 'para', 'por', 'que', 'se', 'sin', 'un',
  'una', 'y',
]);

function fail(message) {
  console.error(`APPLIED_IMPROVEMENTS_INVALID: ${message}`);
  process.exit(1);
}

function normalizePath(value) {
  return value.replaceAll('\\', '/');
}

function safeProjectPath(value) {
  if (typeof value !== 'string' || !value.trim()) return null;
  const normalized = normalizePath(value.trim());
  if (normalized.startsWith('/') || /^[A-Za-z]:\//.test(normalized)) return null;
  const destination = resolve(root, normalized);
  const fromRoot = normalizePath(relative(root, destination));
  if (!fromRoot || fromRoot === '..' || fromRoot.startsWith('../')) return null;
  return { normalized, destination };
}

function changedPaths() {
  const output = execFileSync(
    'git',
    ['status', '--porcelain=v1', '-z', '--untracked-files=all'],
    { cwd: root, encoding: 'utf8' },
  );
  const records = output.split('\0').filter(Boolean);
  const paths = new Set();
  for (let index = 0; index < records.length; index += 1) {
    const record = records[index];
    const status = record.slice(0, 2);
    const path = normalizePath(record.slice(3));
    paths.add(path);
    if (status.includes('R') || status.includes('C')) {
      index += 1;
      if (records[index]) paths.add(normalizePath(records[index]));
    }
  }
  return paths;
}

function semanticTokens(value) {
  return new Set(
    value
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .trim()
      .split(/\s+/)
      .filter((token) => token.length > 2 && !stopWords.has(token)),
  );
}

function jaccard(left, right) {
  const intersection = [...left].filter((token) => right.has(token)).length;
  const union = new Set([...left, ...right]).size;
  return union === 0 ? 1 : intersection / union;
}

if (!existsSync(ledgerPath)) fail('missing docs/world-class/applied-improvements.jsonl');

const source = readFileSync(ledgerPath, 'utf8').trim();
if (!source) fail('ledger is empty');

const lines = source.split(/\r?\n/);
const entries = lines.map((line, index) => {
  try {
    return JSON.parse(line);
  } catch (error) {
    fail(`line ${index + 1} is not valid JSON: ${error.message}`);
  }
});

const ids = new Set();
const descriptions = new Set();
const diffPaths = changedPaths();
const semantic = [];

for (const [index, entry] of entries.entries()) {
  const label = `line ${index + 1}`;
  if (!entry || typeof entry !== 'object' || Array.isArray(entry)) fail(`${label} must be an object`);

  const keys = Object.keys(entry).sort();
  if (keys.join('|') !== [...requiredKeys].sort().join('|')) {
    fail(`${label} must contain exactly: ${requiredKeys.join(', ')}`);
  }

  const expectedId = `MA-APPLIED-${String(index + 1).padStart(3, '0')}`;
  if (entry.id !== expectedId) fail(`${label} expected id ${expectedId}, found ${entry.id}`);
  if (ids.has(entry.id)) fail(`${label} duplicates id ${entry.id}`);
  ids.add(entry.id);

  if (typeof entry.descripcion !== 'string' || entry.descripcion.trim().length < 24) {
    fail(`${entry.id}: descripcion must contain at least 24 characters`);
  }
  const normalizedDescription = entry.descripcion
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
  if (descriptions.has(normalizedDescription)) fail(`${entry.id}: duplicate descripcion`);
  descriptions.add(normalizedDescription);

  if (!allowedCategories.has(entry.categoria)) fail(`${entry.id}: unknown categoria ${entry.categoria}`);
  if (!['applied', 'verified'].includes(entry.estado)) fail(`${entry.id}: invalid estado ${entry.estado}`);

  if (!Array.isArray(entry.archivos) || entry.archivos.length === 0) fail(`${entry.id}: archivos must be non-empty`);
  const uniqueFiles = new Set();
  for (const value of entry.archivos) {
    const projectPath = safeProjectPath(value);
    if (!projectPath) fail(`${entry.id}: unsafe project path ${String(value)}`);
    if (uniqueFiles.has(projectPath.normalized)) fail(`${entry.id}: duplicate file ${projectPath.normalized}`);
    uniqueFiles.add(projectPath.normalized);
    if (!existsSync(projectPath.destination)) fail(`${entry.id}: missing file ${projectPath.normalized}`);
    if (!diffPaths.has(projectPath.normalized)) fail(`${entry.id}: file is not part of the current diff: ${projectPath.normalized}`);
  }
  if ([...uniqueFiles].every((path) => nonCountableFiles.has(path))) {
    fail(`${entry.id}: the ledger cannot count itself as an applied improvement`);
  }

  if (!Array.isArray(entry.evidencia) || entry.evidencia.length === 0) fail(`${entry.id}: evidencia must be non-empty`);
  let hasExecutableProof = false;
  for (const evidence of entry.evidencia) {
    if (!evidence || typeof evidence !== 'object' || Array.isArray(evidence)) fail(`${entry.id}: invalid evidence item`);
    if (!allowedEvidenceTypes.has(evidence.tipo)) fail(`${entry.id}: invalid evidence type ${evidence.tipo}`);
    if (typeof evidence.detalle !== 'string' || evidence.detalle.trim().length < 8) fail(`${entry.id}: empty evidence detail`);
    if (typeof evidence.resultado !== 'string' || evidence.resultado.trim().length < 3) fail(`${entry.id}: empty evidence result`);
    if (evidence.tipo !== 'inspection' && /(?:exit 0|\bOK\b|\bpass(?:ed)?\b|\bverified\b)/i.test(evidence.resultado)) {
      hasExecutableProof = true;
    }
  }
  if (entry.estado === 'verified' && !hasExecutableProof) {
    fail(`${entry.id}: verified entries require successful command or test evidence`);
  }

  semantic.push({ id: entry.id, tokens: semanticTokens(entry.descripcion) });
}

for (let left = 0; left < semantic.length; left += 1) {
  for (let right = left + 1; right < semantic.length; right += 1) {
    const leftTokens = semantic[left].tokens;
    const rightTokens = semantic[right].tokens;
    if (Math.min(leftTokens.size, rightTokens.size) < 5) continue;
    const similarity = jaccard(leftTokens, rightTokens);
    if (similarity >= 0.86) {
      fail(`${semantic[left].id} and ${semantic[right].id} look semantically duplicated (${similarity.toFixed(2)})`);
    }
  }
}

const verified = entries.filter((entry) => entry.estado === 'verified').length;
const applied = entries.length - verified;
console.log(`APPLIED_IMPROVEMENTS_OK total=${entries.length} verified=${verified} applied=${applied}`);
