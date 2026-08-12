import { readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const PROJECT_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
export const NETWORK_GUARD = pathToFileURL(join(PROJECT_ROOT, 'tests', 'core', 'deny-network.mjs')).href;

export const VERIFY_TARGETS = [
  ['world-class backlog', 'scripts/generate-world-class-backlog.mjs', 'docs/world-class/improvements-3000.jsonl'],
  ['GitHub research catalog', 'scripts/collect-github-repos.mjs', 'docs/world-class/github-repositories-200.json'],
  ['global data registry', 'scripts/generate-data-registry.mjs', 'docs/world-class/global-data-sources.json'],
  ['platform tool guides', 'scripts/generate-platform-tools.mjs', 'public/tool-guides/manifest.json'],
  ['one-page guides', 'scripts/generate-one-page-guides.mjs', 'public/one-page-guides/manifest.json'],
].map(([name, script, output]) => ({ name, script, output }));

export function runVerifyTarget(target) {
  return spawnSync(
    process.execPath,
    ['--import', NETWORK_GUARD, join(PROJECT_ROOT, target.script), '--check'],
    {
      cwd: PROJECT_ROOT,
      encoding: 'utf8',
      env: { ...process.env, NODE_NO_WARNINGS: '1' },
      timeout: 120_000,
    },
  );
}

export function runCoreTests() {
  const testDir = join(PROJECT_ROOT, 'tests', 'core');
  const files = readdirSync(testDir)
    .filter((name) => name.endsWith('.test.mjs'))
    .sort()
    .map((name) => join(testDir, name));
  return spawnSync(process.execPath, ['--test', ...files], {
    cwd: PROJECT_ROOT,
    stdio: 'inherit',
    env: { ...process.env, NODE_NO_WARNINGS: '1' },
  });
}

const invokedPath = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : '';
if (invokedPath === import.meta.url) {
  const result = runCoreTests();
  process.exitCode = result.status ?? 1;
}
