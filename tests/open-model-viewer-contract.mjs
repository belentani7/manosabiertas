import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

const fixture = new URL('./fixtures/triangle.obj', import.meta.url);
const source = await readFile(fixture, 'utf8');
const model = new OBJLoader().parse(source);

let meshCount = 0;
model.traverse((child) => {
  if (child.isMesh) meshCount += 1;
});

assert.equal(meshCount, 1, 'El visor debe convertir una maqueta OBJ mínima en una malla visible.');
console.log('✓ Contrato del visor 3D: una exportación OBJ mínima se interpreta como malla.');
