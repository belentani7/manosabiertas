import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { registerHooks } from 'node:module';
import { extname } from 'node:path';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { fromRoot } from './helpers.mjs';

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (context.parentURL?.endsWith('.ts') && specifier.startsWith('.') && !extname(specifier)) {
      const candidate = new URL(`${specifier}.ts`, context.parentURL);
      if (existsSync(fileURLToPath(candidate))) return nextResolve(candidate.href, context);
    }
    return nextResolve(specifier, context);
  },
});

const { OFFICE_LOCATIONS, haversineDistanceKm } = await import(
  '../../src/data/office-locations.ts'
);

test('catalog uses unique city records with approximate, plausible coordinates', () => {
  assert.equal(OFFICE_LOCATIONS.length, 18);
  assert.equal(new Set(OFFICE_LOCATIONS.map(({ id }) => id)).size, OFFICE_LOCATIONS.length);

  for (const location of OFFICE_LOCATIONS) {
    const { latitude, longitude, precision } = location.cityCenter;
    assert.equal(precision, 'approximate-city-centre', `${location.id}: precision must be explicit`);
    assert.ok(latitude >= 27 && latitude <= 44.5, `${location.id}: latitude outside Spain`);
    assert.ok(longitude >= -18.5 && longitude <= 4.5, `${location.id}: longitude outside Spain`);
  }
});

test('every city exposes dated official provenance and unverified contact stays pending', () => {
  for (const location of OFFICE_LOCATIONS) {
    const sourceUrl = new URL(location.officialSource.url);
    assert.equal(sourceUrl.protocol, 'https:');
    assert.equal(sourceUrl.hostname, 'administracion.gob.es');
    assert.match(location.officialSource.reviewedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(Date.parse(`${location.officialSource.reviewedAt}T00:00:00Z`) <= Date.now());
    assert.equal(location.contact.address, null);
    assert.equal(location.contact.addressStatus, 'pending');
    assert.equal(location.contact.phone, null);
    assert.equal(location.contact.phoneStatus, 'pending');
  }
});

test('Haversine distance is symmetric and geographically plausible', () => {
  const madrid = OFFICE_LOCATIONS.find(({ id }) => id === 'madrid').cityCenter;
  const barcelona = OFFICE_LOCATIONS.find(({ id }) => id === 'barcelona').cityCenter;
  const outward = haversineDistanceKm(madrid, barcelona);
  const returnTrip = haversineDistanceKm(barcelona, madrid);

  assert.equal(haversineDistanceKm(madrid, madrid), 0);
  assert.ok(outward > 500 && outward < 510, `Madrid–Barcelona was ${outward.toFixed(1)} km`);
  assert.ok(Math.abs(outward - returnTrip) < 0.000001);
});

test('map remains local, requests location only from an action, and has an accessible list', () => {
  const mapSource = readFileSync(
    fromRoot('src', 'components', 'manos-abiertas', 'office-map.tsx'),
    'utf8',
  );
  const rightsSource = readFileSync(
    fromRoot('src', 'components', 'manos-abiertas', 'rights-section.tsx'),
    'utf8',
  );

  assert.match(mapSource, /function requestUserLocation\(\)/);
  assert.match(mapSource, /navigator\.geolocation\.getCurrentPosition/);
  assert.doesNotMatch(mapSource, /useEffect\s*\([^)]*geolocation/s);
  assert.doesNotMatch(mapSource, /fetch\s*\(|<iframe|tileLayer|google\.maps/i);
  assert.match(mapSource, /<ol/);
  assert.match(mapSource, /aria-live="polite"/);
  assert.match(mapSource, /min-h-11/);
  assert.match(mapSource, /motion-reduce:transition-none/);
  assert.match(rightsSource, /<OfficeMap\s*\/>/);
});
