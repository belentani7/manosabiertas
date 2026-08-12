import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');
const dataDir = path.join(rootDir, 'src', 'data');
const cache = new Map();

function loadTypeScriptModule(filePath) {
  if (cache.has(filePath)) return cache.get(filePath).exports;

  const source = fs.readFileSync(filePath, 'utf8');
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
    fileName: filePath,
  }).outputText;
  const loadedModule = { exports: {} };
  cache.set(filePath, loadedModule);

  function localRequire(specifier) {
    if (!specifier.startsWith('.')) {
      throw new Error(`Importación no permitida durante auditoría: ${specifier}`);
    }
    const resolved = path.resolve(path.dirname(filePath), `${specifier}.ts`);
    if (!resolved.startsWith(`${dataDir}${path.sep}`)) {
      throw new Error(`Importación fuera de src/data: ${specifier}`);
    }
    return loadTypeScriptModule(resolved);
  }

  const execute = new Function('exports', 'require', 'module', '__filename', '__dirname', 'console', output);
  execute(loadedModule.exports, localRequire, loadedModule, filePath, path.dirname(filePath), { ...console, log() {} });
  return loadedModule.exports;
}

function validIsoDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function validHttpUrl(value) {
  try {
    const url = new URL(value);
    return (url.protocol === 'https:' || url.protocol === 'http:') && Boolean(url.hostname);
  } catch {
    return false;
  }
}

const {
  RESOURCES,
  RESOURCE_REVIEW_MAX_AGE_DAYS,
  getResourceTrust,
} = loadTypeScriptModule(path.join(dataDir, 'resources.ts'));
const blocking = [];
const warnings = [];
const ids = new Map();
const metrics = {
  total: Array.isArray(RESOURCES) ? RESOURCES.length : 0,
  verified: 0,
  currentReviewDue: 0,
  pending: 0,
  missingSource: 0,
  missingDate: 0,
  invalidVerifiedAt: 0,
  futureVerifiedAt: 0,
  explicitExpiration: 0,
  invalidExpiresAt: 0,
  expiresBeforeVerification: 0,
  expiresWithoutVerification: 0,
  withEvidence: 0,
  invalidEvidenceUrl: 0,
  withReviewer: 0,
  invalidReviewer: 0,
  invalidResourceUrl: 0,
  duplicateId: 0,
};

if (!Array.isArray(RESOURCES)) {
  blocking.push('RESOURCES no es un array.');
} else {
  const today = new Date();
  const todayIso = today.toISOString().slice(0, 10);

  RESOURCES.forEach((resource, index) => {
    if (!resource || typeof resource !== 'object' || Array.isArray(resource)) {
      blocking.push(`Índice ${index}: el recurso no es un objeto.`);
      return;
    }

    const ref = typeof resource.id === 'string' && resource.id.trim() ? resource.id : `índice ${index}`;
    for (const field of ['id', 'title', 'description', 'url', 'category', 'region']) {
      if (typeof resource[field] !== 'string' || !resource[field].trim()) {
        blocking.push(`${ref}: campo obligatorio "${field}" ausente o vacío.`);
      }
    }

    if (typeof resource.id === 'string' && resource.id.trim()) {
      const firstIndex = ids.get(resource.id);
      if (firstIndex !== undefined) {
        metrics.duplicateId += 1;
        blocking.push(`${ref}: ID duplicado (índices ${firstIndex} y ${index}).`);
      } else {
        ids.set(resource.id, index);
      }
    }

    if (typeof resource.url === 'string' && resource.url.trim() && !validHttpUrl(resource.url)) {
      metrics.invalidResourceUrl += 1;
      blocking.push(`${ref}: URL HTTP(S) no válida: ${resource.url}`);
    }

    const source = typeof resource.source === 'string' ? resource.source.trim() : '';
    const hasDate = resource.verifiedAt !== undefined && resource.verifiedAt !== '';
    const dateIsValid = hasDate && validIsoDate(resource.verifiedAt);
    const dateIsFuture = dateIsValid
      && new Date(`${resource.verifiedAt}T00:00:00.000Z`).getTime() > today.getTime();
    const hasExpiration = resource.expiresAt !== undefined;
    const expirationIsValid = hasExpiration && validIsoDate(resource.expiresAt);
    const expirationPrecedesReview = expirationIsValid && dateIsValid
      && resource.expiresAt < resource.verifiedAt;
    const hasEvidence = resource.evidenceUrl !== undefined;
    const evidenceIsValid = hasEvidence
      && typeof resource.evidenceUrl === 'string'
      && validHttpUrl(resource.evidenceUrl);
    const hasReviewer = resource.reviewedBy !== undefined;
    const reviewerIsValid = hasReviewer
      && typeof resource.reviewedBy === 'string'
      && Boolean(resource.reviewedBy.trim());

    if (!source) metrics.missingSource += 1;
    if (!hasDate) metrics.missingDate += 1;
    if (hasDate && !dateIsValid) {
      metrics.invalidVerifiedAt += 1;
      blocking.push(`${ref}: verifiedAt debe ser una fecha ISO real YYYY-MM-DD.`);
    }
    if (dateIsFuture) {
      metrics.futureVerifiedAt += 1;
      blocking.push(`${ref}: verifiedAt no puede estar en el futuro.`);
    }
    if (hasExpiration) {
      metrics.explicitExpiration += 1;
      if (!expirationIsValid) {
        metrics.invalidExpiresAt += 1;
        blocking.push(`${ref}: expiresAt debe ser una fecha ISO real YYYY-MM-DD.`);
      } else if (!dateIsValid) {
        metrics.expiresWithoutVerification += 1;
        blocking.push(`${ref}: expiresAt requiere verifiedAt válido.`);
      } else if (expirationPrecedesReview) {
        metrics.expiresBeforeVerification += 1;
        blocking.push(`${ref}: expiresAt no puede preceder verifiedAt.`);
      }
    }
    if (hasEvidence) {
      if (evidenceIsValid) {
        metrics.withEvidence += 1;
      } else {
        metrics.invalidEvidenceUrl += 1;
        blocking.push(`${ref}: evidenceUrl debe ser una URL HTTP(S) absoluta válida.`);
      }
    }
    if (hasReviewer) {
      if (reviewerIsValid) {
        metrics.withReviewer += 1;
      } else {
        metrics.invalidReviewer += 1;
        blocking.push(`${ref}: reviewedBy debe ser texto no vacío.`);
      }
    }

    const trust = getResourceTrust(resource, today);
    metrics[trust.status === 'current-review-due' ? 'currentReviewDue' : trust.status] += 1;
    if (trust.status === 'pending') {
      warnings.push(`${ref}: pendiente de revisión (${trust.reason || 'metadatos insuficientes'}).`);
    }
  });

  console.log(`Fecha de evaluación: ${todayIso}`);
}

console.log('Auditoría de confianza de recursos (local, sin red)');
console.log(`Política: revisión vigente durante un máximo de ${RESOURCE_REVIEW_MAX_AGE_DAYS} días.`);
console.log('Frescura en red: no evaluada.');
console.log(`Total: ${metrics.total}`);
console.log(`Vigentes según fecha registrada: ${metrics.verified}`);
console.log(`Con revisión vencida: ${metrics.currentReviewDue}`);
console.log(`Pendientes de revisión: ${metrics.pending}`);
console.log(`Sin fuente: ${metrics.missingSource}`);
console.log(`Sin fecha: ${metrics.missingDate}`);
console.log(`verifiedAt inválidos: ${metrics.invalidVerifiedAt}`);
console.log(`verifiedAt futuros: ${metrics.futureVerifiedAt}`);
console.log(`Con expiresAt explícito: ${metrics.explicitExpiration}`);
console.log(`expiresAt inválidos: ${metrics.invalidExpiresAt}`);
console.log(`expiresAt anteriores a verifiedAt: ${metrics.expiresBeforeVerification}`);
console.log(`expiresAt sin verifiedAt válido: ${metrics.expiresWithoutVerification}`);
console.log(`Con evidencia: ${metrics.withEvidence}`);
console.log(`evidenceUrl inválidas: ${metrics.invalidEvidenceUrl}`);
console.log(`Con responsable: ${metrics.withReviewer}`);
console.log(`reviewedBy inválidos: ${metrics.invalidReviewer}`);
console.log(`URLs de recurso inválidas: ${metrics.invalidResourceUrl}`);
console.log(`IDs duplicados: ${metrics.duplicateId}`);
console.log(`Advertencias no bloqueantes: ${warnings.length}`);

if (blocking.length > 0) {
  console.error(`Errores estructurales bloqueantes: ${blocking.length}`);
  blocking.slice(0, 20).forEach((error) => console.error(`- ${error}`));
  if (blocking.length > 20) console.error(`- ... y ${blocking.length - 20} más`);
  process.exitCode = 1;
} else {
  console.log('Lifecycle, estructura, URLs e IDs: OK');
}
