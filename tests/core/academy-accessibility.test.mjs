import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fromRoot } from './helpers.mjs';

function luminance(hex) {
  const channels = [1, 3, 5]
    .map((index) => Number.parseInt(hex.slice(index, index + 2), 16) / 255)
    .map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrast(left, right) {
  const values = [luminance(left), luminance(right)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

test('academy focus indicator meets non-text contrast on light and dark surfaces', () => {
  const css = readFileSync(fromRoot('src', 'components', 'academy', 'academy-platform.module.css'), 'utf8');
  const focus = css.match(/--academy-focus:\s*(#[0-9a-f]{6})/i)?.[1];
  assert.ok(focus, 'academy focus token is missing');
  for (const surface of ['#ffffff', '#f7f9f8', '#111b20']) {
    assert.ok(contrast(focus, surface) >= 3, `${focus} needs 3:1 contrast against ${surface}`);
  }
  assert.match(css, /outline:\s*3px solid var\(--academy-focus\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
});
