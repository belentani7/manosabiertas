import test from 'node:test';
import assert from 'node:assert/strict';
import { registerHooks } from 'node:module';

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier === 'next/server') return nextResolve('next/server.js', context);
    return nextResolve(specifier, context);
  },
});

const {
  communityContentRisk,
  enforceRateLimit,
  hasRemoteAIConsent,
  readJsonBody,
} = await import('../../src/lib/api-security.ts');

test('remote AI consent requires an explicit true boolean', () => {
  assert.equal(hasRemoteAIConsent({ consentToRemoteAI: true }), true);
  assert.equal(hasRemoteAIConsent({ consentToRemoteAI: false }), false);
  assert.equal(hasRemoteAIConsent({ consentToRemoteAI: 'true' }), false);
  assert.equal(hasRemoteAIConsent(null), false);
});

test('JSON reader enforces media type, syntax and byte limits', async () => {
  const valid = await readJsonBody(new Request('http://local.test', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value: 'ok' }),
  }), 100);
  assert.equal(valid.ok, true);

  const wrongType = await readJsonBody(new Request('http://local.test', {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: '{}',
  }), 100);
  assert.equal(wrongType.ok, false);
  assert.equal(wrongType.response.status, 415);

  const invalid = await readJsonBody(new Request('http://local.test', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{',
  }), 100);
  assert.equal(invalid.ok, false);
  assert.equal(invalid.response.status, 400);

  const oversized = await readJsonBody(new Request('http://local.test', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value: 'demasiado largo' }),
  }), 8);
  assert.equal(oversized.ok, false);
  assert.equal(oversized.response.status, 413);
});

test('rate limiter isolates endpoint scopes and returns Retry-After', async () => {
  const request = new Request('http://local.test', {
    headers: { 'x-forwarded-for': '203.0.113.42' },
  });
  const scope = `test-${crypto.randomUUID()}`;
  assert.equal(await enforceRateLimit(request, scope, { limit: 1, windowMs: 60_000 }), null);
  const blocked = await enforceRateLimit(request, scope, { limit: 1, windowMs: 60_000 });
  assert.ok(blocked);
  assert.equal(blocked.status, 429);
  assert.ok(Number(blocked.headers.get('retry-after')) >= 1);
  assert.equal(await enforceRateLimit(request, `${scope}-other`, { limit: 1, windowMs: 60_000 }), null);
});

test('community filter blocks direct PII, links and active markup', () => {
  assert.equal(communityContentRisk('Busco grupo de estudio', 'Ana'), null);
  assert.equal(communityContentRisk('Escríbeme a ana@example.com', 'Ana'), 'personal-data');
  assert.equal(communityContentRisk('Mira https://example.com', 'Ana'), 'external-link');
  assert.equal(communityContentRisk('<script>alert(1)</script>', 'Ana'), 'active-markup');
});
