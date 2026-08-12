import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { registerHooks } from 'node:module';

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (context.parentURL?.endsWith('.ts') && specifier.startsWith('.') && !extname(specifier)) {
      const candidate = new URL(`${specifier}.ts`, context.parentURL);
      if (existsSync(fileURLToPath(candidate))) return nextResolve(candidate.href, context);
    }
    return nextResolve(specifier, context);
  },
});

const originalLog = console.log;
console.log = () => {};
const resourceModule = await import('../../src/data/resources.ts');
console.log = originalLog;

const {
  REGIONS,
  RESOURCE_CATEGORIES,
  RESOURCE_REVIEW_MAX_AGE_DAYS,
  RESOURCES,
  getResourceTrust,
  searchResources,
} = resourceModule;

test('resource catalog preserves identity, taxonomy and required metadata', () => {
  const ids = RESOURCES.map((resource) => resource.id);
  const categories = new Set(RESOURCE_CATEGORIES.map((category) => category.value));
  const regions = new Set(REGIONS.map((region) => region.value));
  assert.equal(RESOURCES.length, 3686, 'resource catalog size changed unexpectedly');
  assert.equal(new Set(ids).size, ids.length, 'resource IDs must be unique');
  for (const resource of RESOURCES) {
    for (const field of ['id', 'title', 'description', 'url', 'category', 'region', 'source']) {
      assert.equal(typeof resource[field], 'string', `${resource.id || '<missing-id>'}: ${field} must be text`);
      assert.ok(resource[field].trim(), `${resource.id || '<missing-id>'}: ${field} must not be empty`);
    }
    assert.ok(categories.has(resource.category), `${resource.id}: unknown category ${resource.category}`);
    assert.ok(regions.has(resource.region), `${resource.id}: unknown region ${resource.region}`);
    const parsed = new URL(resource.url);
    assert.ok(['http:', 'https:'].includes(parsed.protocol), `${resource.id}: unsupported URL protocol`);
  }
});

test('resource verification dates are valid and global curated records remain dated', (t) => {
  const dated = RESOURCES.filter((resource) => resource.verifiedAt);
  const global = RESOURCES.filter((resource) => resource.id.startsWith('global-'));
  for (const resource of dated) {
    assert.match(resource.verifiedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(Number.isFinite(Date.parse(`${resource.verifiedAt}T00:00:00Z`)), `${resource.id}: invalid verifiedAt`);
  }
  assert.ok(global.length > 0);
  assert.ok(global.every((resource) => resource.verifiedAt), 'all global curated resources must have verifiedAt');
  t.diagnostic(`${dated.length}/${RESOURCES.length} resources expose verifiedAt metadata`);
});

test('optional trust lifecycle metadata is structurally valid', () => {
  for (const resource of RESOURCES) {
    if (resource.expiresAt !== undefined) {
      assert.match(resource.expiresAt, /^\d{4}-\d{2}-\d{2}$/);
      assert.equal(new Date(`${resource.expiresAt}T00:00:00Z`).toISOString().slice(0, 10), resource.expiresAt);
      assert.ok(resource.verifiedAt, `${resource.id}: expiresAt requires verifiedAt`);
      assert.ok(resource.expiresAt >= resource.verifiedAt, `${resource.id}: expiresAt precedes verifiedAt`);
    }
    if (resource.evidenceUrl !== undefined) {
      const evidenceUrl = new URL(resource.evidenceUrl);
      assert.ok(['http:', 'https:'].includes(evidenceUrl.protocol), `${resource.id}: invalid evidenceUrl protocol`);
      assert.ok(evidenceUrl.hostname, `${resource.id}: evidenceUrl requires a hostname`);
    }
    if (resource.reviewedBy !== undefined) {
      assert.equal(typeof resource.reviewedBy, 'string', `${resource.id}: reviewedBy must be text`);
      assert.ok(resource.reviewedBy.trim(), `${resource.id}: reviewedBy must not be empty`);
    }
  }
});

test('trust lifecycle expires old reviews without asserting live freshness', () => {
  const resource = {
    id: 'trust-test',
    title: 'Trust test',
    description: 'Synthetic lifecycle fixture',
    url: 'https://example.org/resource',
    category: 'education',
    region: 'national',
    source: 'Example source',
    verifiedAt: '2026-01-01',
    evidenceUrl: 'https://example.org/evidence',
    reviewedBy: 'Equipo editorial',
  };

  assert.equal(RESOURCE_REVIEW_MAX_AGE_DAYS, 365);
  assert.deepEqual(getResourceTrust(resource, new Date('2026-06-01T12:00:00Z')), {
    status: 'verified',
    source: 'Example source',
    verifiedAt: '2026-01-01',
    expiresAt: undefined,
    reviewDueAt: '2027-01-01',
    evidenceUrl: 'https://example.org/evidence',
    reviewedBy: 'Equipo editorial',
  });
  assert.equal(
    getResourceTrust(resource, new Date('2027-01-01T00:00:00Z')).status,
    'current-review-due',
  );

  const explicitExpiry = { ...resource, expiresAt: '2026-03-01' };
  const expired = getResourceTrust(explicitExpiry, new Date('2026-03-01T00:00:00Z'));
  assert.equal(expired.status, 'current-review-due');
  assert.equal(expired.reviewDueAt, '2026-03-01');

  const cannotExtendMaximum = { ...resource, expiresAt: '2028-01-01' };
  assert.equal(
    getResourceTrust(cannotExtendMaximum, new Date('2026-06-01T12:00:00Z')).reviewDueAt,
    '2027-01-01',
  );
});

test('invalid or insufficient lifecycle evidence remains pending', () => {
  const resource = {
    id: 'trust-test',
    title: 'Trust test',
    description: 'Synthetic lifecycle fixture',
    url: 'https://example.org/resource',
    category: 'education',
    region: 'national',
    source: 'Example source',
  };
  const now = new Date('2026-08-12T12:00:00Z');

  assert.equal(getResourceTrust(resource, now).reason, 'missing-date');
  assert.equal(getResourceTrust({ ...resource, verifiedAt: '2027-01-01' }, now).reason, 'future-date');
  assert.equal(getResourceTrust({ ...resource, verifiedAt: 'not-a-date' }, now).reason, 'invalid-date');
  assert.equal(getResourceTrust({ ...resource, verifiedAt: '2026-01-01', expiresAt: '2025-12-31' }, now).reason, 'expiry-before-verification');
  assert.equal(getResourceTrust({ ...resource, verifiedAt: '2026-01-01', expiresAt: 'invalid' }, now).reason, 'invalid-expiry');
  assert.equal(getResourceTrust({ ...resource, verifiedAt: '2026-01-01', evidenceUrl: 'javascript:alert(1)' }, now).reason, 'invalid-evidence-url');
  assert.equal(getResourceTrust({ ...resource, verifiedAt: '2026-01-01', reviewedBy: '   ' }, now).reason, 'invalid-reviewer');
});

test('catalog lifecycle baseline remains deterministic at the audit date', (t) => {
  const auditDate = new Date('2026-08-12T12:00:00Z');
  const counts = RESOURCES.reduce((result, resource) => {
    result[getResourceTrust(resource, auditDate).status] += 1;
    return result;
  }, { verified: 0, 'current-review-due': 0, pending: 0 });

  assert.deepEqual(counts, { verified: 39, 'current-review-due': 0, pending: 3647 });
  t.diagnostic(`lifecycle baseline: ${JSON.stringify(counts)}`);
});

test('insecure resource URLs are bounded and cannot silently increase', (t) => {
  const insecure = RESOURCES.filter((resource) => new URL(resource.url).protocol !== 'https:');
  assert.ok(insecure.length <= 1, `insecure URL count grew to ${insecure.length}`);
  if (insecure.length) {
    assert.equal(insecure[0].id, 'emg-21');
    t.diagnostic(`known HTTP-only catalog entry: ${insecure[0].id} ${insecure[0].url}`);
  }
});

test('resource search is deterministic and respects category and region filters', () => {
  assert.deepEqual(searchResources(''), RESOURCES);
  const legalNational = searchResources('', { category: 'legal', region: 'national' });
  assert.ok(legalNational.length > 0);
  assert.ok(legalNational.every((resource) => resource.category === 'legal' && resource.region === 'national'));
  const first = RESOURCES.find((resource) => resource.tags?.length);
  assert.ok(first);
  const resultIds = searchResources(first.tags[0]).map((resource) => resource.id);
  assert.ok(resultIds.includes(first.id));
  assert.deepEqual(searchResources('__no_resource_can_match_this__'), []);
});
