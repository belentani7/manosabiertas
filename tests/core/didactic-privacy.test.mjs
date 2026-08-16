import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { registerHooks } from 'node:module';
import { fromRoot } from './helpers.mjs';

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (context.parentURL?.endsWith('.ts') && specifier.startsWith('.') && !extname(specifier)) {
      const candidate = new URL(`${specifier}.ts`, context.parentURL);
      if (existsSync(fileURLToPath(candidate))) return nextResolve(candidate.href, context);
    }
    return nextResolve(specifier, context);
  },
});

const { RECOVERED_COURSES } = await import('../../src/data/recovered-courses.ts');

test('recovered didactic sources remain non-actionable until review', () => {
  assert.ok(RECOVERED_COURSES.length > 0);
  for (const source of RECOVERED_COURSES) {
    assert.equal(source.url, null, `${source.id}: pending source must not expose a link`);
    assert.equal(source.certification, false, `${source.id}: certification needs verified evidence`);
    assert.match(source.reviewStatus, /^pending-(editorial|license|source)$/);
    assert.ok(source.sourceLabel?.trim(), `${source.id}: public provenance label is required`);
  }
});

test('public didactic data and tracked provenance do not expose Windows user paths', () => {
  const files = [
    'src/data/recovered-courses.ts',
    'src/data/downloads-vault.ts',
    'docs/from-downloads/README.md',
    'docs/from-downloads/catalogo-didactico-global.md',
    'docs/from-downloads/downloads-vault.md',
  ];
  const windowsUserPath = /[A-Za-z]:[\\/]Users[\\/]/i;
  for (const path of files) {
    const source = readFileSync(fromRoot(...path.split('/')), 'utf8');
    assert.doesNotMatch(source, windowsUserPath, `${path}: absolute user path must stay in ignored local inventory`);
  }
});

test('didactic simulators have no network or navigation transport', () => {
  const source = readFileSync(fromRoot('src', 'components', 'manos-abiertas', 'tool-simulators.tsx'), 'utf8');
  const forbiddenTransports = [
    /\bfetch\s*\(/,
    /\bXMLHttpRequest\b/,
    /\bWebSocket\b/,
    /\bnavigator\.sendBeacon\b/,
    /\bwindow\.(?:open|location)\b/,
    /<form\b/i,
  ];
  for (const pattern of forbiddenTransports) {
    assert.doesNotMatch(source, pattern, `tool simulator transport detected: ${pattern}`);
  }
  assert.match(source, /Envío simulado\. No salió ningún dato del navegador\./);
});
