/**
 * Protocolo de Soberanía Local — Manos Abiertas
 * Autor: Pedro Belentani
 * Garantiza que todo el banco de datos didáctico, recursos, derechos y guías operen 100% localmente.
 */

import masterManifest from '@/data/curriculum-master-es/manifest.json';

export interface LocalSovereignConfig {
  version: string;
  author: string;
  mode: 'sovereign-offline-first';
  totalCurriculumPoints: number;
}

export const SOVEREIGN_CONFIG: LocalSovereignConfig = {
  version: 'Ω-MAX-SOVEREIGN-1.0',
  author: 'Pedro Belentani (Manos Abiertas)',
  mode: 'sovereign-offline-first',
  totalCurriculumPoints: 1000,
};

export function getSovereignManifest() {
  return masterManifest;
}
