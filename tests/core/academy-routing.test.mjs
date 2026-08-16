import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { getAcademyDestination, getAcademyPath } from '../../src/lib/academy-navigation.ts';
import { LANGUAGES } from '../../src/i18n/languages.ts';
import { fromRoot } from './helpers.mjs';

test('academy navigation preserves every supported locale', () => {
  for (const { code } of LANGUAGES) {
    assert.equal(getAcademyPath(code), `/${code}/academy`);
    assert.equal(getAcademyDestination(code, 'home'), `/${code}`);
    assert.equal(getAcademyDestination(code, 'cv'), `/${code}#/cv`);
    assert.equal(getAcademyDestination(code, 'ia'), `/${code}#/learn-ai`);
    assert.equal(getAcademyDestination(code, 'office'), `/${code}#/office`);
  }
});

test('localized academy route exists and shared platform has no fixed Spanish destination', () => {
  assert.ok(existsSync(fromRoot('src', 'app', '[locale]', 'academy', 'page.tsx')));
  const platform = readFileSync(fromRoot('src', 'components', 'academy', 'academy-platform.tsx'), 'utf8');
  assert.doesNotMatch(platform, /["']\/es(?:\/|#)/);
  assert.match(platform, /getAcademyDestination\(locale,/);
});
