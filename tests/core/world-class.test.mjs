import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { VERIFY_TARGETS, PROJECT_ROOT, runVerifyTarget } from '../../scripts/test-core.mjs';
import { assertSafeRelativePath, fromRoot, readJson, sha256 } from './helpers.mjs';

test('existing world-class checks pass offline and do not mutate generated outputs', async (t) => {
  for (const target of VERIFY_TARGETS) {
    await t.test(target.name, () => {
      const outputPath = fromRoot(...target.output.split('/'));
      assert.ok(existsSync(outputPath), `${target.output} is missing`);
      const before = sha256(outputPath);
      const result = runVerifyTarget(target);
      assert.equal(result.error, undefined, result.error?.message);
      assert.equal(result.status, 0, `${target.script} --check failed\n${result.stderr || result.stdout}`);
      assert.equal(sha256(outputPath), before, `${target.script} --check mutated ${target.output}`);
      assert.match(result.stdout, /verified/i);
    });
  }
});

test('backlog is a complete 30 x 10 x 10 matrix with safe project paths', () => {
  const path = fromRoot('docs', 'world-class', 'improvements-3000.jsonl');
  const items = readFileSync(path, 'utf8').trim().split(/\r?\n/).map((line) => JSON.parse(line));
  const surfaces = new Set(items.map((item) => item.surface));
  const contexts = new Set(items.map((item) => item.userContext));
  const lenses = new Set(items.map((item) => item.qualityLens));
  assert.equal(surfaces.size, 30);
  assert.equal(contexts.size, 10);
  assert.equal(lenses.size, 10);
  assert.equal(items.length, surfaces.size * contexts.size * lenses.size);
  assert.equal(new Set(items.map((item) => `${item.surface}\0${item.userContext}\0${item.qualityLens}`)).size, items.length);
  assert.ok(items.every((item) => ['P0', 'P1', 'P2'].includes(item.priority)));
  assert.ok(items.every((item) => item.status === 'proposed'));
  for (const item of items) {
    const destination = assertSafeRelativePath(PROJECT_ROOT, item.path);
    assert.ok(existsSync(destination), `${item.id}: missing project path ${item.path}`);
  }
});

test('research catalogs retain provenance, review boundaries and safe URLs', () => {
  const github = readJson('docs', 'world-class', 'github-repositories-200.json');
  assert.equal(new Set(github.repositories.map((repo) => repo.id)).size, github.repositories.length);
  for (const repo of github.repositories) {
    const url = new URL(repo.url);
    assert.equal(url.protocol, 'https:');
    assert.equal(url.hostname, 'github.com');
    assert.equal(repo.source, 'GitHub Search API');
    assert.ok(['normal-review', 'review-license', 'review-maintenance'].includes(repo.adoptionRisk));
  }

  const registry = readJson('docs', 'world-class', 'global-data-sources.json');
  assert.match(registry.claimBoundary, /not every database/i);
  assert.match(registry.publicationPolicy, /human approval/i);
  assert.ok(registry.pipeline.includes('licence-review'));
  assert.ok(registry.pipeline.includes('monitor-expiry'));
  assert.ok(registry.sources.every((source) => source.status === 'candidate'));
  assert.ok(registry.sources.every((source) => new URL(source.url).protocol === 'https:'));
});

test('generated guide manifests cannot escape their output roots', () => {
  const toolRoot = fromRoot('public', 'tool-guides');
  const tools = readJson('public', 'tool-guides', 'manifest.json');
  assert.equal(new Set(tools.pages.map((page) => page.id)).size, tools.pages.length);
  assert.equal(new Set(tools.pages.map((page) => page.path)).size, tools.pages.length);
  for (const page of tools.pages) {
    const destination = assertSafeRelativePath(toolRoot, page.path);
    assert.equal(dirname(destination).startsWith(toolRoot), true);
    assert.ok(existsSync(destination), `${page.id}: missing ${page.path}`);
    assert.match(page.path, /\.html$/);
  }

  const onePageRoot = fromRoot('public', 'one-page-guides');
  const onePage = readJson('public', 'one-page-guides', 'manifest.json');
  assert.deepEqual(onePage.pages.map((page) => page.id).sort(), ['copilot', 'deepseek', 'gemini', 'office', 'qwen', 'whatsapp']);
  for (const page of onePage.pages) {
    const destination = assertSafeRelativePath(onePageRoot, page.path);
    assert.ok(existsSync(destination), `${page.id}: missing ${page.path}`);
    const html = readFileSync(destination, 'utf8');
    assert.match(html, /<meta name="viewport"/);
    assert.match(html, /data-print/);
    assert.match(html, /Seguridad:/);
  }
});
