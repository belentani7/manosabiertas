import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DIDACTIC_LOCAL_STATE_VERSION,
  parseCourseProgress,
  parseSimulatorProgress,
  parseWordDraft,
  serializeCourseProgress,
  serializeSimulatorProgress,
  serializeWordDraft,
} from '../../src/lib/didactic-local-storage.ts';

test('course progress validates shape, ids and legacy state before versioning', () => {
  const ids = new Set(['course-a', 'course-b']);
  assert.deepEqual(parseCourseProgress(null, ids), {});
  assert.deepEqual(parseCourseProgress('null', ids), {});
  assert.deepEqual(parseCourseProgress('[]', ids), {});
  assert.deepEqual(parseCourseProgress('{broken', ids), {});
  assert.deepEqual(
    parseCourseProgress('{"course-a":"started","course-b":"invalid","unknown":"completed"}', ids),
    { 'course-a': 'started' },
  );
  const saved = serializeCourseProgress({ 'course-b': 'completed' });
  assert.equal(JSON.parse(saved).version, DIDACTIC_LOCAL_STATE_VERSION);
  assert.deepEqual(parseCourseProgress(saved, ids), { 'course-b': 'completed' });
});

test('simulator progress migrates legacy arrays and rejects invalid state', () => {
  const ids = new Set(['word', 'terminal']);
  assert.deepEqual(parseSimulatorProgress('["word","word","unknown",7]', ids), ['word']);
  assert.deepEqual(parseSimulatorProgress('{"version":1,"completed":"word"}', ids), []);
  const saved = serializeSimulatorProgress(['terminal']);
  assert.deepEqual(parseSimulatorProgress(saved, ids), ['terminal']);
});

test('word draft is bounded, versioned and preserves legacy plain text', () => {
  assert.equal(parseWordDraft(null), '');
  assert.equal(parseWordDraft('texto anterior'), 'texto anterior');
  const saved = serializeWordDraft('dato local', 20);
  assert.equal(JSON.parse(saved).version, DIDACTIC_LOCAL_STATE_VERSION);
  assert.equal(parseWordDraft(saved, 20), 'dato local');
  assert.equal(parseWordDraft(serializeWordDraft('123456', 4), 4), '1234');
});
