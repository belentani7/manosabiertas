import test from 'node:test';
import assert from 'node:assert/strict';
import { LANGUAGES, LANGUAGE_COUNT } from '../../src/i18n/languages.ts';
import { getTranslation, translations } from '../../src/i18n/translations.ts';

test('locale registry has unique, internally consistent language metadata', () => {
  const codes = LANGUAGES.map((language) => language.code);
  assert.equal(LANGUAGE_COUNT, LANGUAGES.length);
  assert.equal(new Set(codes).size, codes.length);
  assert.equal(codes[0], 'es');
  for (const language of LANGUAGES) {
    assert.match(language.code, /^[a-z]{2,3}(?:-[A-Z]{2})?$/);
    assert.ok(language.name.trim());
    assert.ok(language.englishName.trim());
    assert.ok(language.flag.trim());
  }
  assert.deepEqual(LANGUAGES.filter((language) => language.rtl).map((language) => language.code), ['ar', 'ur', 'fa']);
});

test('translation dictionaries only use registered locales and share the Spanish key contract', () => {
  const registered = new Set(LANGUAGES.map((language) => language.code));
  const spanishKeys = Object.keys(translations.es).sort();
  assert.ok(spanishKeys.length > 0);
  for (const [code, dictionary] of Object.entries(translations)) {
    assert.ok(registered.has(code), `translation locale ${code} is not registered`);
    assert.deepEqual(Object.keys(dictionary).sort(), spanishKeys, `${code} does not implement the complete UI key contract`);
    assert.ok(Object.values(dictionary).every((value) => typeof value === 'string' && value.trim().length > 0));
  }
});

test('all registered locales resolve safely and the current fallback gap cannot grow', (t) => {
  const direct = new Set(Object.keys(translations));
  const fallbackLocales = LANGUAGES.map((language) => language.code).filter((code) => !direct.has(code));
  assert.ok(direct.size >= 26, `direct translation coverage regressed to ${direct.size}`);
  assert.ok(fallbackLocales.length <= 13, `fallback-only locale count grew to ${fallbackLocales.length}`);
  for (const { code } of LANGUAGES) {
    const resolved = getTranslation(code);
    assert.ok(resolved);
    assert.deepEqual(Object.keys(resolved).sort(), Object.keys(translations.es).sort());
  }
  t.diagnostic(`${direct.size}/${LANGUAGE_COUNT} locales have direct dictionaries; fallback-only: ${fallbackLocales.join(', ') || 'none'}`);
});
