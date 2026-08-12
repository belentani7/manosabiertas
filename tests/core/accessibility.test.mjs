import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fromRoot } from './helpers.mjs';

test('static accessibility gate passes for app and Manos Abiertas components', () => {
  const result = spawnSync(process.execPath, [fromRoot('scripts', 'verify-accessibility-static.mjs'), '--json'], {
    cwd: fromRoot(),
    encoding: 'utf8',
    env: { ...process.env, NODE_NO_WARNINGS: '1' },
    timeout: 120_000,
  });

  assert.equal(result.error, undefined, result.error?.message);
  assert.equal(result.signal, null, `accessibility gate terminated by ${result.signal}`);
  assert.equal(result.status, 0, `Static accessibility violations:\n${result.stdout || result.stderr}`);

  const audit = JSON.parse(result.stdout);
  assert.equal(audit.filesScanned > 0, true);
  assert.deepEqual(audit.roots, ['src/app', 'src/components/manos-abiertas']);
  assert.equal(audit.findings.length, 0);
});
