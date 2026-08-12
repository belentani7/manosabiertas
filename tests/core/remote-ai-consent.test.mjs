import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  parseRemoteAIConsent,
  readRemoteAIConsent,
  withRemoteAIConsent,
  writeRemoteAIConsent,
} from '../../src/lib/remote-ai-consent.ts';

test('remote AI consent is denied unless the stored value is exactly granted', () => {
  assert.equal(parseRemoteAIConsent('granted'), true);
  assert.equal(parseRemoteAIConsent('denied'), false);
  assert.equal(parseRemoteAIConsent('true'), false);
  assert.equal(parseRemoteAIConsent(null), false);
});

test('remote AI consent storage records only granted or denied', () => {
  const values = new Map();
  const storage = {
    getItem(key) { return values.get(key) ?? null; },
    setItem(key, value) { values.set(key, value); },
  };

  assert.equal(readRemoteAIConsent(storage), false);
  writeRemoteAIConsent(storage, true);
  assert.equal(readRemoteAIConsent(storage), true);
  writeRemoteAIConsent(storage, false);
  assert.equal(readRemoteAIConsent(storage), false);
});

test('every remote-capable payload carries an explicit consent boolean', () => {
  assert.deepEqual(withRemoteAIConsent({ prompt: 'hola' }, false), {
    prompt: 'hola',
    consentToRemoteAI: false,
  });
  assert.deepEqual(withRemoteAIConsent({ prompt: 'hola' }, true), {
    prompt: 'hola',
    consentToRemoteAI: true,
  });
});

test('all remote-capable UI consumers use the shared consent contract', () => {
  const consumers = [
    'ai-assistant.tsx',
    'ai-playground.tsx',
    'ai-study-tools.tsx',
    'cv-section.tsx',
    'cover-letter-builder.tsx',
    'ats-analyzer.tsx',
  ];

  for (const file of consumers) {
    const source = readFileSync(new URL(`../../src/components/manos-abiertas/${file}`, import.meta.url), 'utf8');
    assert.match(source, /withRemoteAIConsent\s*\(/, `${file} must attach explicit consent`);
  }
});
