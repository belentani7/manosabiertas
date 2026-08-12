import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { dirname, isAbsolute, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

export function fromRoot(...parts) {
  return join(ROOT, ...parts);
}

export function readJson(...parts) {
  return JSON.parse(readFileSync(fromRoot(...parts), 'utf8'));
}

export function sha256(path) {
  return createHash('sha256').update(readFileSync(path)).digest('hex');
}

export function assertSafeRelativePath(base, candidate) {
  assert.equal(typeof candidate, 'string');
  assert.ok(candidate.length > 0, 'path must not be empty');
  assert.equal(isAbsolute(candidate), false, `${candidate} must be relative`);
  const destination = resolve(base, candidate);
  const boundary = relative(resolve(base), destination);
  assert.ok(boundary !== '..' && !boundary.startsWith(`..${process.platform === 'win32' ? '\\' : '/'}`), `${candidate} escapes ${base}`);
  return destination;
}
