// Manos Abiertas - Resources Database
// Resource catalogue for immigrants in Spain.
// Trust is derived from explicit provenance; catalogue inclusion is not verification.

export type ResourceCategory =
  | 'legal' | 'health' | 'housing' | 'work' | 'education'
  | 'emergency' | 'banking' | 'documentation' | 'ai-tools'
  | 'office-learning' | 'cv-tools' | 'ngos' | 'government'
  | 'github-learning' | 'transport' | 'family' | 'language-learning';

export type ResourceRegion =
  | 'worldwide' | 'europe' | 'africa' | 'americas' | 'asia-pacific' | 'middle-east'
  | 'national' | 'andalucia' | 'aragon' | 'asturias' | 'balears'
  | 'canarias' | 'cantabria' | 'castilla-la-mancha' | 'castilla-y-leon'
  | 'cataluna' | 'comunidad-valenciana' | 'extremadura' | 'galicia'
  | 'la-rioja' | 'madrid' | 'murcia' | 'navarra' | 'pais-vasco';

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: ResourceCategory;
  region: ResourceRegion;
  source?: string;
  language?: string;
  tags?: string[];
  free?: boolean;
  license?: string;
  format?: string;
  audience?: string;
  verifiedAt?: string;
  expiresAt?: string;
  evidenceUrl?: string;
  reviewedBy?: string;
}

export type ResourceTrustStatus = 'verified' | 'current-review-due' | 'pending';

export type ResourceTrustReason =
  | 'missing-source'
  | 'missing-date'
  | 'invalid-date'
  | 'future-date'
  | 'invalid-expiry'
  | 'expiry-before-verification'
  | 'invalid-evidence-url'
  | 'invalid-reviewer'
  | 'review-expired';

export interface ResourceTrust {
  status: ResourceTrustStatus;
  source?: string;
  verifiedAt?: string;
  expiresAt?: string;
  reviewDueAt?: string;
  evidenceUrl?: string;
  reviewedBy?: string;
  reason?: ResourceTrustReason;
}

const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const DAY_IN_MS = 24 * 60 * 60 * 1000;

// A recorded review is current for at most 365 days. An earlier explicit
// expiresAt shortens this window; it can never extend an old review.
export const RESOURCE_REVIEW_MAX_AGE_DAYS = 365;

function getValidIsoDate(value: string | undefined): string | undefined {
  if (!value || !ISO_DATE_PATTERN.test(value)) return undefined;
  const date = new Date(`${value}T00:00:00.000Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) return undefined;
  return value;
}

function getValidEvidenceUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol) && url.hostname ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

function addDays(value: string, days: number): string {
  const date = new Date(`${value}T00:00:00.000Z`);
  return new Date(date.getTime() + days * DAY_IN_MS).toISOString().slice(0, 10);
}

export function getResourceTrust(resource: Resource, now = new Date()): ResourceTrust {
  const source = resource.source?.trim() || undefined;
  const verifiedAt = getValidIsoDate(resource.verifiedAt);
  const expiresAt = getValidIsoDate(resource.expiresAt);
  const evidenceUrl = getValidEvidenceUrl(resource.evidenceUrl);
  const reviewedBy = resource.reviewedBy?.trim() || undefined;

  if (!source) {
    return { status: 'pending', verifiedAt, expiresAt, evidenceUrl, reviewedBy, reason: 'missing-source' };
  }
  if (!resource.verifiedAt) {
    return { status: 'pending', source, expiresAt, evidenceUrl, reviewedBy, reason: 'missing-date' };
  }
  if (!verifiedAt) {
    return { status: 'pending', source, expiresAt, evidenceUrl, reviewedBy, reason: 'invalid-date' };
  }
  if (new Date(`${verifiedAt}T00:00:00.000Z`).getTime() > now.getTime()) {
    return { status: 'pending', source, verifiedAt, expiresAt, evidenceUrl, reviewedBy, reason: 'future-date' };
  }
  if (resource.expiresAt && !expiresAt) {
    return { status: 'pending', source, verifiedAt, evidenceUrl, reviewedBy, reason: 'invalid-expiry' };
  }
  if (expiresAt && expiresAt < verifiedAt) {
    return { status: 'pending', source, verifiedAt, expiresAt, evidenceUrl, reviewedBy, reason: 'expiry-before-verification' };
  }
  if (resource.evidenceUrl && !evidenceUrl) {
    return { status: 'pending', source, verifiedAt, expiresAt, reviewedBy, reason: 'invalid-evidence-url' };
  }
  if (resource.reviewedBy !== undefined && !reviewedBy) {
    return { status: 'pending', source, verifiedAt, expiresAt, evidenceUrl, reason: 'invalid-reviewer' };
  }

  const maxAgeDueAt = addDays(verifiedAt, RESOURCE_REVIEW_MAX_AGE_DAYS);
  const reviewDueAt = expiresAt && expiresAt < maxAgeDueAt ? expiresAt : maxAgeDueAt;
  const trust = { source, verifiedAt, expiresAt, reviewDueAt, evidenceUrl, reviewedBy };

  if (now.getTime() >= new Date(`${reviewDueAt}T00:00:00.000Z`).getTime()) {
    return { status: 'current-review-due', ...trust, reason: 'review-expired' };
  }

  return { status: 'verified', ...trust };
}

export const RESOURCE_CATEGORIES: { value: ResourceCategory; label: string; icon: string }[] = [
  { value: 'legal', label: 'Legal y Derechos', icon: '⚖️' },
  { value: 'documentation', label: 'Documentación y NIE', icon: '📄' },
  { value: 'health', label: 'Salud', icon: '🏥' },
  { value: 'housing', label: 'Vivienda', icon: '🏠' },
  { value: 'work', label: 'Empleo', icon: '💼' },
  { value: 'education', label: 'Educación', icon: '🎓' },
  { value: 'emergency', label: 'Emergencias', icon: '🚨' },
  { value: 'banking', label: 'Banca', icon: '🏦' },
  { value: 'ai-tools', label: 'Herramientas IA', icon: '🤖' },
  { value: 'office-learning', label: 'Aprende Office', icon: '📊' },
  { value: 'cv-tools', label: 'Herramientas CV', icon: '📝' },
  { value: 'ngos', label: 'ONGs y Ayuda', icon: '🤝' },
  { value: 'government', label: 'Gobierno', icon: '🏛️' },
  { value: 'github-learning', label: 'Recursos GitHub', icon: '💻' },
  { value: 'transport', label: 'Transporte', icon: '🚌' },
  { value: 'family', label: 'Familia', icon: '👨‍👩‍👧' },
  { value: 'language-learning', label: 'Idiomas', icon: '🗣️' },
];

export const REGIONS: { value: ResourceRegion; label: string }[] = [
  { value: 'worldwide', label: 'Mundo' },
  { value: 'europe', label: 'Europa' },
  { value: 'africa', label: 'África' },
  { value: 'americas', label: 'Américas' },
  { value: 'asia-pacific', label: 'Asia-Pacífico' },
  { value: 'middle-east', label: 'Oriente Medio' },
  { value: 'national', label: 'Nacional' },
  { value: 'andalucia', label: 'Andalucía' },
  { value: 'aragon', label: 'Aragón' },
  { value: 'asturias', label: 'Asturias' },
  { value: 'balears', label: 'Illes Balears' },
  { value: 'canarias', label: 'Canarias' },
  { value: 'cantabria', label: 'Cantabria' },
  { value: 'castilla-la-mancha', label: 'Castilla-La Mancha' },
  { value: 'castilla-y-leon', label: 'Castilla y León' },
  { value: 'cataluna', label: 'Catalunya' },
  { value: 'comunidad-valenciana', label: 'Comunitat Valenciana' },
  { value: 'extremadura', label: 'Extremadura' },
  { value: 'galicia', label: 'Galicia' },
  { value: 'la-rioja', label: 'La Rioja' },
  { value: 'madrid', label: 'Comunidad de Madrid' },
  { value: 'murcia', label: 'Región de Murcia' },
  { value: 'navarra', label: 'Comunidad Foral de Navarra' },
  { value: 'pais-vasco', label: 'Euskadi' },
];

import { GLOBAL_RESOURCES } from './global-resources';

// ============================================================
// NATIONAL GOVERNMENT RESOURCES (~120)
// ============================================================
const nationalGov: Resource[] = [
  { id: 'nat-1', title: 'Portal de Inmigración - Gobierno de España', description: 'Portal oficial con toda la información sobre extranjería e inmigración.', url: 'https://www.exteriores.gob.es/Portal/es/ExtranjerosYVisados/', category: 'government', region: 'national', source: 'Ministerio de Asuntos Exteriores', tags: ['inmigración','extranjería'], free: true },
  { id: 'nat-2', title: 'Sede Electrónica - Administración Pública', description: 'Trámites electrónicos con todas las administraciones públicas.', url: 'https://sede.administracionpublica.gob.es/', category: 'government', region: 'national', source: 'Administración General del Estado', tags: ['trámites','electrónico'], free: true },
  { id: 'nat-3', title: 'Cita Previa Extranjería', description: 'Solicitar cita previa para trámites de extranjería en las oficinas.', url: 'https://sede.administracionpublica.gob.es/icpplus/index.html', category: 'documentation', region: 'national', source: 'Administración General del Estado', tags: ['cita previa','extranjería'], free: true },
  { id: 'nat-4', title: 'Portal de Inmigración - Ministry of Inclusion', description: 'Información sobre integración de inmigrantes y servicios sociales.', url: 'https://www.inclusion.gob.es/web/migraciones/', category: 'government', region: 'national', source: 'Ministerio de Inclusión, Seguridad Social y Migraciones', tags: ['inclusión','migraciones'], free: true },
  { id: 'nat-5', title: 'SEPE - Servicio Público de Empleo Estatal', description: 'Inscripción como demandante de empleo, prestaciones y cursos gratuitos.', url: 'https://www.sepe.es/', category: 'work', region: 'national', source: 'SEPE', tags: ['empleo','paro','cursos'], free: true },
  { id: 'nat-6', title: 'Seguridad Social - Sede Electrónica', description: 'Todos los trámites con la Seguridad Social: afiliación, prestaciones, salud.', url: 'https://sede.seg-social.es/', category: 'government', region: 'national', source: 'Seguridad Social', tags: ['seguridad social','prestaciones'], free: true },
  { id: 'nat-7', title: 'Cita Previa Seguridad Social', description: 'Pedir cita para atención presencial en oficinas de la Seguridad Social.', url: 'https://sede.seg-social.es/SSWps1/SolicitarCitaPrevia.action', category: 'documentation', region: 'national', source: 'Seguridad Social', tags: ['cita previa'], free: true },
  { id: 'nat-8', title: 'Asistencia Sanitaria - Seguridad Social', description: 'Información sobre tarjeta sanitaria y asistencia sanitaria universal.', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/Ciudadanos/70037', category: 'health', region: 'national', source: 'Seguridad Social', tags: ['tarjeta sanitaria','salud'], free: true },
  { id: 'nat-9', title: 'Ministerio de Sanidad', description: 'Información sanitaria oficial, vacunación y salud pública.', url: 'https://www.sanidad.gob.es/', category: 'health', region: 'national', source: 'Ministerio de Sanidad', tags: ['sanidad','salud pública'], free: true },
  { id: 'nat-10', title: 'Ministerio de Educación y FP', description: 'Sistema educativo, becas, FP y reconocimiento de títulos.', url: 'https://www.educacion.gob.es/', category: 'education', region: 'national', source: 'Ministerio de Educación', tags: ['educación','becas','FP'], free: true },
  { id: 'nat-11', title: 'Becas y Ayudas MEC', description: 'Becas del Ministerio de Educación para todos los niveles.', url: 'https://www.educacion.gob.es/servicios-al-ciudadano/catalogo/becas-ayudas/subvenciones.html', category: 'education', region: 'national', source: 'MEC', tags: ['becas','ayudas'], free: true },
  { id: 'nat-12', title: 'Cita Previa Policía Nacional', description: 'Cita para NIE, pasaporte, extranjería y otros trámites policiales.', url: 'https://www.citapreviaexterior.es/', category: 'documentation', region: 'national', source: 'Policía Nacional', tags: ['cita previa','NIE','pasaporte'], free: true },
  { id: 'nat-13', title: 'Cita Previa Policía - Extranjería', description: 'Cita para huellas y autorizaciones de residencia.', url: 'https://www.policia.es/comisarias/', category: 'documentation', region: 'national', source: 'Policía Nacional', tags: ['huellas','residencia'], free: true },
  { id: 'nat-14', title: 'OFICIAL - Solicitud de Asilo', description: 'Información oficial sobre protección internacional y asilo.', url: 'https://www.interior.gob.es/opencms/es/asuntos-migratorios/extranjeria/proteccion-internacional/', category: 'legal', region: 'national', source: 'Ministerio del Interior', tags: ['asilo','refugio','protección'], free: true },
  { id: 'nat-15', title: 'OAR - Oficina de Asilo y Refugio', description: 'Oficina de Asilo y Refugio: dónde y cómo solicitar protección internacional.', url: 'https://www.interior.gob.es/opencms/es/asuntos-migratorios/extranjeria/proteccion-internacional/oficina-de-asilo-y-refugio/', category: 'legal', region: 'national', source: 'Ministerio del Interior', tags: ['asilo'], free: true },
  { id: 'nat-16', title: 'Defensor del Pueblo', description: 'Defensa de tus derechos frente a la administración pública.', url: 'https://www.defensordelpueblo.es/', category: 'legal', region: 'national', source: 'Defensor del Pueblo', tags: ['derechos','quejas'], free: true },
  { id: 'nat-17', title: 'CERMI - Comité Español de Representantes', description: 'Plataforma de representación de personas con discapacidad.', url: 'https://www.cermi.es/', category: 'ngos', region: 'national', source: 'CERMI', tags: ['discapacidad'], free: true },
  { id: 'nat-18', title: 'Padrón Municipal - Información', description: 'Información oficial sobre el empadronamiento y su importancia.', url: 'https://www.administracionpublica.gob.es/pagina?pidiendo=Empadronamiento', category: 'documentation', region: 'national', source: 'AGE', tags: ['padrón','empadronamiento'], free: true },
  { id: 'nat-19', title: 'Certificado Digital - FNMT', description: 'Obtén tu certificado digital para trámites online.', url: 'https://www.sede.fnmt.gob.es/certificados/persona-fisica/obtener-certificado-software', category: 'documentation', region: 'national', source: 'FNMT-RCM', tags: ['certificado digital','Cl@ve'], free: true },
  { id: 'nat-20', title: 'Cl@ve - Sistema de Identificación', description: 'Sistema de identificación común para las AAPP.', url: 'https://clave.gob.es/clave_Home/clave.html', category: 'documentation', region: 'national', source: 'AGE', tags: ['Cl@ve','identificación'], free: true },
  { id: 'nat-21', title: 'Agencia Tributaria - AEAT', description: 'Trámites fiscales: IRPF, IVA, modelos tributarios.', url: 'https://www.agenciatributaria.es/', category: 'government', region: 'national', source: 'AEAT', tags: ['Hacienda','IRPF','impuestos'], free: true },
  { id: 'nat-22', title: 'Renta Web - Campaña IRPF', description: 'Declaración de la renta anual online.', url: 'https://www.agenciatributaria.es/AEAT.internet/Inicio/Renta/Y_obten_tu_Renta_WEB_/Y_obten_tu_Renta_WEB_.shtml', category: 'government', region: 'national', source: 'AEAT', tags: ['renta','IRPF'], free: true },
  { id: 'nat-23', title: 'Instituto Nacional de Estadística (INE)', description: 'Datos del padrón, censo electoral y estadísticas oficiales.', url: 'https://www.ine.es/', category: 'government', region: 'national', source: 'INE', tags: ['estadística','padrón'], free: true },
  { id: 'nat-24', title: 'Observatorio Permanente de la Inmigración', description: 'Estadísticas e informes sobre inmigración en España.', url: 'https://www.inclusion.gob.es/web/migraciones/observatorio-permanente-de-la-inmigracion', category: 'government', region: 'national', source: 'MITESMI', tags: ['estadísticas','inmigración'], free: true },
  { id: 'nat-25', title: 'Centro Nacional de Inmigración (CENI)', description: 'Centro nacional de información sobre inmigración.', url: 'https://www.inclusion.gob.es/web/migraciones/extranjeria/', category: 'government', region: 'national', source: 'MITESMI', tags: ['información'], free: true },
  { id: 'nat-26', title: 'Plan Estatal de Vivienda 2022-2025', description: 'Ayudas al alquiler y vivienda del Estado.', url: 'https://www.mivau.gob.es/vivienda/planes/plan-estatal-vivienda.html', category: 'housing', region: 'national', source: 'Ministerio de Vivienda', tags: ['alquiler','ayudas'], free: true },
  { id: 'nat-27', title: 'Bono Social Eléctrico', description: 'Descuento en la factura de la luz para hogares vulnerables.', url: 'https://www.miteco.gob.es/es/industria/temas/energia-y-minas/bono-social-electrico.html', category: 'housing', region: 'national', source: 'MITERD', tags: ['energía','descuento'], free: true },
  { id: 'nat-28', title: 'Bono Térmico', description: 'Ayuda para calefacción para perceptores del bono social.', url: 'https://www.miteco.gob.es/es/industria/temas/energia-y-minas/bono-termico.html', category: 'housing', region: 'national', source: 'MITERD', tags: ['calefacción','ayuda'], free: true },
  { id: 'nat-29', title: 'Renta Mínima de Inserción / IMV', description: 'Ingreso Mínimo Vital: ayuda económica para hogares vulnerables.', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/109772', category: 'work', region: 'national', source: 'Seguridad Social', tags: ['IMV','ayuda','vulnerable'], free: true },
  { id: 'nat-30', title: 'Prestación por Hijo a Cargo', description: 'Ayuda económica por hijo a cargo sin límite de ingresos.', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/109764', category: 'family', region: 'national', source: 'Seguridad Social', tags: ['hijos','ayuda'], free: true },
  { id: 'nat-31', title: 'Prestación por Maternidad', description: 'Permiso de maternidad de 16 semanas con prestación económica.', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/109761', category: 'family', region: 'national', source: 'Seguridad Social', tags: ['maternidad'], free: true },
  { id: 'nat-32', title: 'Prestación por Paternidad', description: 'Permiso de paternidad de 16 semanas remunerado.', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/109762', category: 'family', region: 'national', source: 'Seguridad Social', tags: ['paternidad'], free: true },
  { id: 'nat-33', title: 'SEPE - Prestación por Desempleo', description: 'Información sobre el paro: requisitos, duración y cuantía.', url: 'https://www.sepe.es/HomeSepe/SepeCiudadano/Prestaciones/prestacion-desempleo.html', category: 'work', region: 'national', source: 'SEPE', tags: ['paro','desempleo'], free: true },
  { id: 'nat-34', title: 'SEPE - Renta Activa de Inserción (RAI)', description: 'Ayuda para desempleados de larga duración mayores de 45.', url: 'https://www.sepe.es/HomeSepe/SepeCiudadano/Prestaciones/rai.html', category: 'work', region: 'national', source: 'SEPE', tags: ['RAI','desempleo'], free: true },
  { id: 'nat-35', title: 'SEPE - Formación Profesional para el Empleo', description: 'Cursos gratuitos para mejorar tu empleabilidad.', url: 'https://www.sepe.es/HomeSepe/SepeCiudadano/Formacion.html', category: 'education', region: 'national', source: 'SEPE', tags: ['cursos','FP'], free: true },
  { id: 'nat-36', title: 'Garantía Juvenil', description: 'Programa para jóvenes menores de 30 en búsqueda de empleo.', url: 'https://www.empleojoven.gob.es/garantiajuvenil/index.htm', category: 'work', region: 'national', source: 'MITESMI', tags: ['jóvenes','empleo'], free: true },
  { id: 'nat-37', title: 'REDETO - Red de ETT', description: 'Empresas de trabajo temporal registradas oficialmente.', url: 'https://www.empleo.gob.es/es/empresas/empresas/Red_de_Empresas_de_Trabajo_Temporal.html', category: 'work', region: 'national', source: 'MITESMI', tags: ['ETT','empleo'], free: true },
  { id: 'nat-38', title: 'Inspección de Trabajo y SS', description: 'Denuncias laborales: 900 100 333 (gratis).', url: 'https://www.empleo.gob.es/itss/web/Inicio/Areas_Tematicas/Denuncias_Preguntas_Frecuentes/Denuncias.html', category: 'legal', region: 'national', source: 'ITSS', tags: ['denuncia','laboral'], free: true },
  { id: 'nat-39', title: 'Portal de la Sociedad de la Información', description: 'Recursos digitales y formación tecnológica del Gobierno.', url: 'https://www.red.es/redes/es/que-hacemos/ciudadania-digital', category: 'education', region: 'national', source: 'Red.es', tags: ['digital','formación'], free: true },
  { id: 'nat-40', title: 'Punto de Coordinación Central - extranjería', description: 'Sede electrónica de extranjería del Ministerio del Interior.', url: 'https://sede.policia.gob.es:23000/', category: 'documentation', region: 'national', source: 'Policía Nacional', tags: ['extranjería'], free: true },
  { id: 'nat-41', title: 'Información al Consumidor - INC', description: 'Información y defensa de consumidores y usuarios.', url: 'https://www.consumo.gob.es/', category: 'legal', region: 'national', source: 'Ministerio de Consumo', tags: ['consumidor'], free: true },
  { id: 'nat-42', title: '060 - Atención al Ciudadano', description: 'Teléfono gratuito de información administrativa (060).', url: 'https://www.060.es/', category: 'government', region: 'national', source: 'AGE', tags: ['060','información'], free: true },
  { id: 'nat-43', title: 'Cita Previa DNIe y Pasaporte', description: 'Cita previa para renovar DNI y pasaporte español.', url: 'https://www.citapreviadnie.es/', category: 'documentation', region: 'national', source: 'Policía Nacional', tags: ['DNI','pasaporte'], free: true },
  { id: 'nat-44', title: 'Registro Civil Electrónico', description: 'Inscripción de nacimientos, matrimonios, defunciones online.', url: 'https://www.mjusticia.gob.es/es/ciudadania/registro-civil', category: 'documentation', region: 'national', source: 'Ministerio de Justicia', tags: ['registro civil'], free: true },
  { id: 'nat-45', title: 'Ministerio de Justicia', description: 'Información sobre justicia, nacionalidad y registros.', url: 'https://www.mjusticia.gob.es/', category: 'legal', region: 'national', source: 'Ministerio de Justicia', tags: ['justicia'], free: true },
  { id: 'nat-46', title: 'Nacionalidad Española - Ministerio de Justicia', description: 'Cómo obtener la nacionalidad española por residencia u opción.', url: 'https://www.mjusticia.gob.es/es/ciudadania/nacionalidad-ciudadania', category: 'legal', region: 'national', source: 'Ministerio de Justicia', tags: ['nacionalidad','ciudadanía'], free: true },
  { id: 'nat-47', title: 'Asistencia Jurídica Gratuita', description: 'Abogado de oficio gratuito para personas con bajos ingresos.', url: 'https://www.mjusticia.gob.es/es/ciudadania/justicia-gratuita', category: 'legal', region: 'national', source: 'Ministerio de Justicia', tags: ['abogado de oficio','justicia gratuita'], free: true },
  { id: 'nat-48', title: 'Notariado Español', description: 'Buscador de notarios y trámites notariales.', url: 'https://www.notariado.org/', category: 'legal', region: 'national', source: 'Consejo General del Notariado', tags: ['notario'], free: true },
  { id: 'nat-49', title: 'Colegio de Abogados - Buscador', description: 'Buscador de abogados por especialidad y zona.', url: 'https://www.abogacia.es/', category: 'legal', region: 'national', source: 'CGAE', tags: ['abogados'], free: true },
  { id: 'nat-50', title: 'ATV - Abogacía de los Vulnerables', description: 'Asistencia jurídica gratuita para personas vulnerables.', url: 'https://www.abogacia.es/la-abogacia/atv/', category: 'legal', region: 'national', source: 'CGAE', tags: ['vulnerables','justicia gratuita'], free: true },
  { id: 'nat-51', title: 'RENFE - Transporte Nacional', description: 'Trenes de larga distancia y cercanías en toda España.', url: 'https://www.renfe.es/', category: 'transport', region: 'national', source: 'RENFE', tags: ['tren','transporte'], free: false },
  { id: 'nat-52', title: 'Avanza - Autobuses Interurbanos', description: 'Autobuses de larga distancia.', url: 'https://www.avanzabus.com/', category: 'transport', region: 'national', source: 'Avanza', tags: ['autobús'], free: false },
  { id: 'nat-53', title: 'ALSA - Autobuses Nacionales', description: 'Autobuses de larga distancia por toda España.', url: 'https://www.alsa.es/', category: 'transport', region: 'national', source: 'ALSA', tags: ['autobús'], free: false },
  { id: 'nat-54', title: 'DGT - Dirección General de Tráfico', description: 'Trámites de tráfico: carné, ITV, matriculación.', url: 'https://www.dgt.es/', category: 'documentation', region: 'national', source: 'DGT', tags: ['carné','ITV','tráfico'], free: true },
  { id: 'nat-55', title: 'Carné por Puntos - Consulta', description: 'Consulta de puntos del carné de conducir.', url: 'https://www.dgt.es/es/seguridad-vial/carnet-por-puntos/', category: 'documentation', region: 'national', source: 'DGT', tags: ['carné','puntos'], free: true },
  { id: 'nat-56', title: 'Correo - Oficial', description: 'Oficina virtual de Correos para envíos y notificaciones.', url: 'https://www.correos.es/', category: 'government', region: 'national', source: 'Correos', tags: ['correo','envíos'], free: false },
  { id: 'nat-57', title: 'Catastro - Sede Electrónica', description: 'Consulta y modificación de datos catastrales.', url: 'https://www.sedecatastro.gob.es/', category: 'government', region: 'national', source: 'Catastro', tags: ['catastro','vivienda'], free: true },
  { id: 'nat-58', title: 'Atención a la Dependencia', description: 'Información sobre la Ley de Dependencia y prestaciones.', url: 'https://www.imserso.es/dependencia/index.htm', category: 'government', region: 'national', source: 'Imserso', tags: ['dependencia','cuidados'], free: true },
  { id: 'nat-59', title: 'IMSERSO - Servicios Sociales', description: 'Servicios sociales para mayores y dependientes.', url: 'https://www.imserso.es/', category: 'government', region: 'national', source: 'Imserso', tags: ['mayores','servicios sociales'], free: true },
  { id: 'nat-60', title: 'UNED - Universidad a Distancia', description: 'Universidad pública a distancia, accesible y económica.', url: 'https://www.uned.es/', category: 'education', region: 'national', source: 'UNED', tags: ['universidad','distancia'], free: false },
  { id: 'nat-61', title: 'INTEF - Instituto Nacional de Tecnologías Educativas', description: 'Formación del profesorado y recursos educativos abiertos.', url: 'https://intef.es/', category: 'education', region: 'national', source: 'MEC', tags: ['educación','recursos'], free: true },
  { id: 'nat-62', title: 'Reconocimiento de Títulos Extranjeros', description: 'Procedimiento de homologación y convalidación de títulos.', url: 'https://www.educacion.gob.es/servicios-al-ciudadano/catalogo/servicio/homologacion-convalidacion-titulos-extranjeros.html', category: 'education', region: 'national', source: 'MEC', tags: ['homologación','títulos'], free: true },
  { id: 'nat-63', title: 'UNEDasiss - Acceso Universidad Extranjeros', description: 'Acceso a la universidad española para estudiantes extranjeros.', url: 'https://unedasiss.uned.es/', category: 'education', region: 'national', source: 'UNED', tags: ['universidad','extranjeros'], free: false },
  { id: 'nat-64', title: 'EOI - Escuela Oficial de Idiomas', description: 'Idiomas oficiales con certificación reconocida y precios públicos.', url: 'https://www.educacion.gob.es/contenidos/educacion/sistema-educativo/eoi.html', category: 'language-learning', region: 'national', source: 'MEC', tags: ['idiomas','EOI'], free: false },
  { id: 'nat-65', title: 'Instituto Cervantes', description: 'Aprende español y obtén el DELE oficial.', url: 'https://www.cervantes.es/', category: 'language-learning', region: 'national', source: 'Instituto Cervantes', tags: ['español','DELE'], free: false },
  { id: 'nat-66', title: 'Aula Fácil - Cursos Gratuitos', description: 'Cursos online gratuitos de formación profesional.', url: 'https://www.aulafacil.com/', category: 'education', region: 'national', source: 'AulaFácil', tags: ['cursos','gratis'], free: true },
  { id: 'nat-67', title: 'Proyecto Atenea - Alfabetización Digital', description: 'Programa del Gobierno para alfabetización digital.', url: 'https://proyectoatenea.es/', category: 'education', region: 'national', source: 'Red.es', tags: ['digital','alfabetización'], free: true },
  { id: 'nat-68', title: 'Consejo General del Poder Judicial', description: 'Información sobre los juzgados y tribunales.', url: 'https://www.poderjudicial.es/', category: 'legal', region: 'national', source: 'CGPJ', tags: ['justicia','tribunales'], free: true },
  { id: 'nat-69', title: 'Buscador de Juzgados', description: 'Localiza el juzgado que te corresponde por código postal.', url: 'https://www.poderjudicial.es/search/', category: 'legal', region: 'national', source: 'CGPJ', tags: ['juzgados'], free: true },
  { id: 'nat-70', title: 'Portal de la Lengua Española', description: 'Recursos para aprender y perfeccionar el español.', url: 'https://www.cervantes.es/sobre_instituto_cervantes/prensa/revista_lengua_espanola.htm', category: 'language-learning', region: 'national', source: 'Cervantes', tags: ['español'], free: true },
  { id: 'nat-71', title: 'CEAPA - Confederación de Padres', description: 'Asociación de padres de alumnos, información escolar.', url: 'https://www.ceapa.es/', category: 'family', region: 'national', source: 'CEAPA', tags: ['padres','escuela'], free: true },
  { id: 'nat-72', title: 'Observatorio de la Igualdad', description: 'Recursos para la igualdad de género y prevención de violencia.', url: 'https://www.inmujeres.gob.es/observatorios/observIgualdad/home.htm', category: 'legal', region: 'national', source: 'Instituto de las Mujeres', tags: ['igualdad','mujeres'], free: true },
  { id: 'nat-73', title: '016 - Violencia de Género', description: 'Teléfono gratuito y confidencial de ayuda a víctimas (016).', url: 'https://violenciagenero.igualdad.gob.es/informacionUtil/telefonosInteres/telefono016.htm', category: 'emergency', region: 'national', source: 'Delegación del Gobierno', tags: ['violencia','016','mujeres'], free: true },
  { id: 'nat-74', title: 'Pacto de Estado contra la Violencia de Género', description: 'Recursos y ayudas a víctimas de violencia de género.', url: 'https://violenciagenero.igualdad.gob.es/', category: 'legal', region: 'national', source: 'MITESMI', tags: ['violencia','género'], free: true },
  { id: 'nat-75', title: 'Ayuda a Víctimas de Trata', description: 'Recursos para víctimas de trata de seres humanos.', url: 'https://policia.es/wps/portal/policia/areasextranjeria/extranjeria/trata', category: 'legal', region: 'national', source: 'Policía Nacional', tags: ['trata','víctimas'], free: true },
  { id: 'nat-76', title: 'Red de Casas de Acogida', description: 'Recursos de acogida para mujeres víctimas de violencia.', url: 'https://violenciagenero.igualdad.gob.es/servicios/casasAcogida/home.htm', category: 'housing', region: 'national', source: 'Delegación del Gobierno', tags: ['acogida','mujeres'], free: true },
  { id: 'nat-77', title: 'FEMP - Federación de Municipios', description: 'Buscador de ayuntamientos de España.', url: 'https://www.femp.es/', category: 'government', region: 'national', source: 'FEMP', tags: ['ayuntamientos'], free: true },
  { id: 'nat-78', title: 'Directorio de Ayuntamientos', description: 'Todos los ayuntamientos de España con datos de contacto.', url: 'https://www.ayuntamientos.es/', category: 'government', region: 'national', source: 'ayuntamientos.es', tags: ['ayuntamientos'], free: true },
  { id: 'nat-79', title: 'Catastro - Referencia Catastral', description: 'Obtén la referencia catastral de tu vivienda.', url: 'https://www1.sedecatastro.gob.es/OVCFramesWeb/OCFOVCITrame.aspx', category: 'documentation', region: 'national', source: 'Catastro', tags: ['catastro'], free: true },
  { id: 'nat-80', title: 'Vivienda y Rehabilitación - MITMA', description: 'Políticas de vivienda del Estado español.', url: 'https://www.mivau.gob.es/vivienda.html', category: 'housing', region: 'national', source: 'MITMA', tags: ['vivienda'], free: true },
  { id: 'nat-81', title: 'Código de la Propiedad Horizontal', description: 'Normativa legal sobre comunidades de vecinos.', url: 'https://www.boe.es/buscar/act.php?id=LEYG-19600521-107', category: 'housing', region: 'national', source: 'BOE', tags: ['comunidad','vecinos'], free: true },
  { id: 'nat-82', title: 'BOE - Boletín Oficial del Estado', description: 'Diario oficial donde se publican las leyes.', url: 'https://www.boe.es/', category: 'legal', region: 'national', source: 'BOE', tags: ['BOE','leyes'], free: true },
  { id: 'nat-83', title: 'Banco de España - Ciudadanía', description: 'Información financiera y educativa del BdE.', url: 'https://www.bde.es/f/webbde/SES/secciones/', category: 'banking', region: 'national', source: 'Banco de España', tags: ['finanzas','educación'], free: true },
  { id: 'nat-84', title: 'Finance for All - BdE', description: 'Edufinet del Banco de España para educación financiera.', url: 'https://finanzasparatodos.es/', category: 'banking', region: 'national', source: 'BdE', tags: ['educación financiera'], free: true },
  { id: 'nat-85', title: 'CNMC - Comisión Nacional de Mercados', description: 'Reclamaciones en servicios de telecomunicaciones y energía.', url: 'https://www.cnmc.es/', category: 'legal', region: 'national', source: 'CNMC', tags: ['reclamaciones'], free: true },
  { id: 'nat-86', title: 'RECLAMA - Sistema Arbitral de Consumo', description: 'Sistema arbitral gratuito para resolver disputas de consumo.', url: 'https://www.consumo.gob.es/arbitraje', category: 'legal', region: 'national', source: 'Ministerio de Consumo', tags: ['arbitraje','consumo'], free: true },
  { id: 'nat-87', title: 'OCC - Oficina de Consumo', description: 'Oficina municipal de información al consumidor.', url: 'https://www.consumo.gob.es/es/areas/consumo/ocic', category: 'legal', region: 'national', source: 'Ministerio de Consumo', tags: ['consumidor'], free: true },
  { id: 'nat-88', title: 'Museos Estatales - Entradas', description: 'Museos nacionales y entradas gratuitas.', url: 'https://www.cultura.gob.es/Museos/Inicio.html', category: 'education', region: 'national', source: 'Ministerio de Cultura', tags: ['museos','cultura'], free: true },
  { id: 'nat-89', title: 'Bibliotecas Públicas del Estado', description: 'Red de bibliotecas públicas estatales, gratuitas.', url: 'https://www.cultura.gob.es/cultura/bibliotecas.html', category: 'education', region: 'national', source: 'Ministerio de Cultura', tags: ['biblioteca','lectura'], free: true },
  { id: 'nat-90', title: 'Instituto de la Juventud - INJUVE', description: 'Programas y carné joven para menores de 30.', url: 'https://www.injuve.es/', category: 'education', region: 'national', source: 'INJUVE', tags: ['jóvenes','carné joven'], free: true },
  { id: 'nat-91', title: 'España Recuperación - Plan de Recuperación', description: 'Información sobre el plan de recuperación, transformación y resiliencia.', url: 'https://www.lamoncloa.gob.es/temas/fondos-recuperacion/Paginas/index.aspx', category: 'government', region: 'national', source: 'La Moncloa', tags: ['PRTR'], free: true },
  { id: 'nat-92', title: 'Ventanilla Única Emprendedores', description: 'Trámites para crear una empresa en un solo lugar.', url: 'https://www.empresas-en-un-dia.es/', category: 'work', region: 'national', source: 'AGE', tags: ['emprendedores','empresa'], free: true },
  { id: 'nat-93', title: 'Crea tu Empresa - PAE', description: 'Puntos de Atención al Emprendedor para crear empresas.', url: 'https://www.ipyme.org/es-ES/Paginas/IPYMEVentanillaUnica.aspx', category: 'work', region: 'national', source: 'Red.es', tags: ['empresa','PAE'], free: true },
  { id: 'nat-94', title: 'Ventanilla Única - Declaraciones de Comercio', description: 'Registro de empresas y actos mercantiles.', url: 'https://www.rvc.es/', category: 'work', region: 'national', source: 'Registro Mercantil', tags: ['empresa','registro'], free: true },
  { id: 'nat-95', title: 'SEPE - Catálogo de Ocupaciones', description: 'Catálogo oficial de ocupaciones y competencias.', url: 'https://www.sepe.es/HomeSepe/SepeCiudadano/Empleo/CatalogoOcupaciones.html', category: 'work', region: 'national', source: 'SEPE', tags: ['ocupaciones'], free: true },
  { id: 'nat-96', title: 'Turespaña - Empleo en Turismo', description: 'Información sobre empleo en el sector turístico.', url: 'https://www.tourspain.es/', category: 'work', region: 'national', source: 'Turespaña', tags: ['turismo','empleo'], free: true },
  { id: 'nat-97', title: 'Inmigración y Empleo - MITESMI', description: 'Recursos de integración laboral de inmigrantes.', url: 'https://www.inclusion.gob.es/web/migraciones/integracion/', category: 'work', region: 'national', source: 'MITESMI', tags: ['integración','empleo'], free: true },
  { id: 'nat-98', title: 'Sede Electrónica del SEPE', description: 'Sede electrónica para trámites de empleo online.', url: 'https://sede.sepe.es/', category: 'work', region: 'national', source: 'SEPE', tags: ['sede','trámites'], free: true },
  { id: 'nat-99', title: 'Mi Carpeta Ciudadana', description: 'Acceso personalizado a tus trámites con la administración.', url: 'https://sede.administracionpublica.gob.es/icpplustiemgo/index', category: 'government', region: 'national', source: 'AGE', tags: ['carpeta','trámites'], free: true },
  { id: 'nat-100', title: 'Notificaciones Electrónicas - Sede', description: 'Bandeja electrónica de notificaciones de la administración.', url: 'https://notificaciones.administracionpublica.gob.es/', category: 'government', region: 'national', source: 'AGE', tags: ['notificaciones'], free: true },
  { id: 'nat-101', title: 'Cita Previa INSS', description: 'Cita previa para atención en el INSS.', url: 'https://sede.seg-social.es/SSWps1/SolicitarCitaPrevia.action', category: 'documentation', region: 'national', source: 'INSS', tags: ['INSS','cita previa'], free: true },
  { id: 'nat-102', title: 'Tu Seguridad Social', description: 'Portal personalizado de la Seguridad Social.', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/Ciudadanos/30032', category: 'government', region: 'national', source: 'Seguridad Social', tags: ['seguridad social'], free: true },
  { id: 'nat-103', title: 'Sanidad Universal - Información', description: 'Información sobre el derecho a la sanidad universal.', url: 'https://www.sanidad.gob.es/profesionales/saludPublica/sanidadUniversal/home.htm', category: 'health', region: 'national', source: 'Ministerio de Sanidad', tags: ['sanidad','universal'], free: true },
  { id: 'nat-104', title: 'Tarjeta Sanitaria - Solicitud', description: 'Cómo obtener la Tarjeta Sanitaria Individual (TSI).', url: 'https://www.sanidad.gob.es/profesionales/saludPublica/sanidadUniversal/home.htm', category: 'health', region: 'national', source: 'Ministerio de Sanidad', tags: ['TSI','tarjeta sanitaria'], free: true },
  { id: 'nat-105', title: 'Donación de Sangre - Información', description: 'Información sobre donación de sangre y centros.', url: 'https://www.sanidad.gob.es/ciudadanos/enLinea/home.htm', category: 'health', region: 'national', source: 'Ministerio de Sanidad', tags: ['donación','sangre'], free: true },
  { id: 'nat-106', title: 'Vacunación Adultos', description: 'Calendario de vacunación para adultos.', url: 'https://www.sanidad.gob.es/areas/sanidadHumana/calendario.htm', category: 'health', region: 'national', source: 'Ministerio de Sanidad', tags: ['vacunas'], free: true },
  { id: 'nat-107', title: 'Centro Nacional de Epidemiología', description: 'Información sobre enfermedades y prevención.', url: 'https://www.isciii.es/', category: 'health', region: 'national', source: 'ISCIII', tags: ['epidemiología'], free: true },
  { id: 'nat-108', title: 'Banco de Alimentos - FESBAL', description: 'Federación de bancos de alimentos de España.', url: 'https://www.fesbal.org/', category: 'ngos', region: 'national', source: 'FESBAL', tags: ['alimentos','ayuda'], free: true },
  { id: 'nat-109', title: 'Cáritas Española', description: 'ONG católica de ayuda social a personas vulnerables.', url: 'https://www.caritas.es/', category: 'ngos', region: 'national', source: 'Cáritas', tags: ['ayuda','social'], free: true },
  { id: 'nat-110', title: 'Cruz Roja Española', description: 'Asistencia humanitaria y social, ayuda a inmigrantes.', url: 'https://www2.cruzroja.es/', category: 'ngos', region: 'national', source: 'Cruz Roja', tags: ['humanitaria','ayuda'], free: true },
  { id: 'nat-111', title: 'CEAR - Comisión Ayuda al Refugiado', description: 'Defensa y atención a personas refugiadas (91 530 69 69).', url: 'https://www.cear.es/', category: 'ngos', region: 'national', source: 'CEAR', tags: ['refugiados','asilo'], free: true },
  { id: 'nat-112', title: 'ACCEM', description: 'ONG de atención a inmigrantes y refugiados.', url: 'https://www.accem.es/', category: 'ngos', region: 'national', source: 'ACCEM', tags: ['inmigrantes','refugiados'], free: true },
  { id: 'nat-113', title: 'Andalucía Acoge', description: 'ONG de acogida e integración de inmigrantes en Andalucía.', url: 'https://www.acoge.org/', category: 'ngos', region: 'andalucia', source: 'Andalucía Acoge', tags: ['acogida','integración'], free: true },
  { id: 'nat-114', title: 'Red Acoge', description: 'Federación estatal de ONGs de acogida.', url: 'https://www.redacoge.org/', category: 'ngos', region: 'national', source: 'Red Acoge', tags: ['acogida'], free: true },
  { id: 'nat-115', title: 'CEPI - Confederación Española de Personas Inmigrantes', description: 'Plataforma estatal de personas inmigrantes.', url: 'https://www.cepi-online.org/', category: 'ngos', region: 'national', source: 'CEPI', tags: ['inmigrantes'], free: true },
  { id: 'nat-116', title: 'Rescate Marítimo - Salvamento', description: 'Salvamento Marítimo: 900 202 202.', url: 'https://www.salvamentomaritimo.es/', category: 'emergency', region: 'national', source: 'Salvamento Marítimo', tags: ['emergencia','marítimo'], free: true },
  { id: 'nat-117', title: 'Protección Civil', description: 'Información sobre emergencias y autoprotección.', url: 'https://www.proteccioncivil.es/', category: 'emergency', region: 'national', source: 'Protección Civil', tags: ['emergencia'], free: true },
  { id: 'nat-118', title: '112 - Emergencias España', description: 'Teléfono único de emergencias en toda España (112).', url: 'https://www.112.es/', category: 'emergency', region: 'national', source: '112 España', tags: ['112','emergencias'], free: true },
  { id: 'nat-119', title: 'Fundeix - Formación Digital', description: 'Formación digital gratuita para colectivos vulnerables.', url: 'https://www.fundeix.es/', category: 'education', region: 'national', source: 'Fundeix', tags: ['digital','formación'], free: true },
  { id: 'nat-120', title: 'Fundación ANAR - Ayuda a Niños', description: 'Teléfono de ayuda a niños y adolescentes (900 20 20 10).', url: 'https://www.anar.org/', category: 'family', region: 'national', source: 'Fundación ANAR', tags: ['infancia','ayuda'], free: true },
];

// ============================================================
// AUTONOMOUS COMMUNITIES - Government portals + main services
// ============================================================
interface CommunityData {
  id: ResourceRegion;
  name: string;
  portal: string;
  immigrationUrl?: string;
  employmentUrl?: string;
  healthUrl?: string;
  housingUrl?: string;
  socialServicesUrl?: string;
  educationUrl?: string;
  consumerUrl?: string;
  youthUrl?: string;
  womenUrl?: string;
}

const communities: CommunityData[] = [
  { id: 'andalucia', name: 'Andalucía', portal: 'https://www.juntadeandalucia.es/', immigrationUrl: 'https://www.juntadeandalucia.es/organismos/igualdadsocialynclusion/areas/inmigracion.html', employmentUrl: 'https://www.juntadeandalucia.es/empleo', healthUrl: 'https://www.sspa.juntadeandalucia.es/', housingUrl: 'https://www.juntadeandalucia.es/organismos/fomentoinfrastructurestormwater/areas/vivienda.html', socialServicesUrl: 'https://www.juntadeandalucia.es/organismos/igualdadsocialynclusion.html', educationUrl: 'https://www.juntadeandalucia.es/educacion', consumerUrl: 'https://www.juntadeandalucia.es/organismos/saludyconsumos/areas/consumo.html', youthUrl: 'https://www.juntadeandalucia.es/juventud', womenUrl: 'https://www.juntadeandalucia.es/institutodelamujer' },
  { id: 'aragon', name: 'Aragón', portal: 'https://www.aragon.es/', immigrationUrl: 'https://www.aragon.es/-/inmigracion', employmentUrl: 'https://www.aragon.es/-/empleo', healthUrl: 'https://www.salud.aragon.es/', housingUrl: 'https://www.aragon.es/-/vivienda', socialServicesUrl: 'https://www.aragon.es/-/servicios-sociales', educationUrl: 'https://www.educaragon.org/', consumerUrl: 'https://www.aragon.es/-/consumo', youthUrl: 'https://www.aragon.es/-/juventud', womenUrl: 'https://www.aragon.es/-/mujer' },
  { id: 'asturias', name: 'Principado de Asturias', portal: 'https://www.asturias.es/', immigrationUrl: 'https://www.asturias.es/temas/inmigracion', employmentUrl: 'https://www.asturias.es/temas/empleo', healthUrl: 'https://www.asturias.es/temas/sanidad', housingUrl: 'https://www.asturias.es/temas/vivienda', socialServicesUrl: 'https://www.asturias.es/temas/servicios-sociales', educationUrl: 'https://www.educastur.es/', consumerUrl: 'https://www.asturias.es/temas/consumo', youthUrl: 'https://www.asturias.es/temas/juventud', womenUrl: 'https://www.asturias.es/temas/mujer' },
  { id: 'balears', name: 'Illes Balears', portal: 'https://www.caib.es/', immigrationUrl: 'https://www.caib.es/sites/inmigracio/ca/inici/', employmentUrl: 'https://www.caib.es/sites/empleo/ca/inici/', healthUrl: 'https://www.caib.es/sites/ibsalut/ca/inici/', housingUrl: 'https://www.caib.es/sites/habitatge/ca/inici/', socialServicesUrl: 'https://www.caib.es/sites/serveisocials/ca/inici/', educationUrl: 'https://www.caib.es/sites/educacio/ca/inici/', consumerUrl: 'https://www.caib.es/sites/consum/ca/inici/', youthUrl: 'https://www.caib.es/sites/ibjovent/ca/inici/', womenUrl: 'https://www.caib.es/sites/ibdona/ca/inici/' },
  { id: 'canarias', name: 'Canarias', portal: 'https://www.gobiernodecanarias.org/', immigrationUrl: 'https://www.gobiernodecanarias.org/inmigracion/', employmentUrl: 'https://www.gobiernodecanarias.org/empleo/', healthUrl: 'https://www3.gobiernodecanarias.org/sanidad/', housingUrl: 'https://www.gobiernodecanarias.org/vivienda/', socialServicesUrl: 'https://www.gobiernodecanarias.org/serviciossociales/', educationUrl: 'https://www.gobiernodecanarias.org/educacion/', consumerUrl: 'https://www.gobiernodecanarias.org/consumo/', youthUrl: 'https://www.gobiernodecanarias.org/juventud/', womenUrl: 'https://www.gobiernodecanarias.org/igualdad/' },
  { id: 'cantabria', name: 'Cantabria', portal: 'https://www.cantabria.es/', immigrationUrl: 'https://www.cantabria.es/inmigracion', employmentUrl: 'https://www.cantabria.es/empleo', healthUrl: 'https://www.cantabria.es/sanidad', housingUrl: 'https://www.cantabria.es/vivienda', socialServicesUrl: 'https://www.cantabria.es/servicios-sociales', educationUrl: 'https://www.cantabria.es/educacion', consumerUrl: 'https://www.cantabria.es/consumo', youthUrl: 'https://www.cantabria.es/juventud', womenUrl: 'https://www.cantabria.es/mujer' },
  { id: 'castilla-la-mancha', name: 'Castilla-La Mancha', portal: 'https://www.castillalamancha.es/', immigrationUrl: 'https://www.castillalamancha.es/gobierno/inmigracion', employmentUrl: 'https://www.castillalamancha.es/gobierno/empleo', healthUrl: 'https://sanidad.castillalamancha.es/', housingUrl: 'https://www.castillalamancha.es/gobierno/vivienda', socialServicesUrl: 'https://www.castillalamancha.es/gobierno/bienestar-social', educationUrl: 'https://www.educa.jccm.es/', consumerUrl: 'https://www.castillalamancha.es/gobierno/consumo', youthUrl: 'https://www.castillalamancha.es/gobierno/juventud', womenUrl: 'https://www.castillalamancha.es/gobierno/igualdad' },
  { id: 'castilla-y-leon', name: 'Castilla y León', portal: 'https://www.jcyl.es/', immigrationUrl: 'https://www.jcyl.es/web/jcyl/Portada/es/Plantilla100Detalle/1246464823742/_/_/_', employmentUrl: 'https://www.ecyl.es/', healthUrl: 'https://www.saludcastillayleon.es/', housingUrl: 'https://www.jcyl.es/web/jcyl/Portada/es/Plantilla100Detalle/1246464823742/_/_/_', socialServicesUrl: 'https://www.jcyl.es/web/jcyl/Familia/es/Plantilla100Detalle/1284717351930/_/_/_', educationUrl: 'https://www.educa.jcyl.es/', consumerUrl: 'https://www.consumocyL.es/', youthUrl: 'https://www.jcyl.es/web/jcyl/Juventud/es/Plantilla100Detalle/1284717351930/_/_/_', womenUrl: 'https://www.jcyl.es/web/jcyl/Mujer/es/Plantilla100Detalle/1284717351930/_/_/_' },
  { id: 'cataluna', name: 'Catalunya', portal: 'https://web.gencat.cat/', immigrationUrl: 'https://web.gencat.cat/en/temes/immigracio/', employmentUrl: 'https://treball.gencat.cat/', healthUrl: 'https://catsalut.gencat.cat/', housingUrl: 'https://habitatge.gencat.cat/', socialServicesUrl: 'https://treball.gencat.cat/ca/ambits_tematics/serveis_socials/', educationUrl: 'https://educacio.gencat.cat/', consumerUrl: 'https://consum.gencat.cat/', youthUrl: 'https://joventut.gencat.cat/', womenUrl: 'https://igualtat.gencat.cat/' },
  { id: 'comunidad-valenciana', name: 'Comunitat Valenciana', portal: 'https://www.gva.es/', immigrationUrl: 'https://www.gva.es/es/inicio/atencion_ciudadano/procedimientos?id_proc=21266', employmentUrl: 'https://www.gva.es/es/inicio/area_procedimientos?id=8', healthUrl: 'https://www.gva.es/sanidad', housingUrl: 'https://www.gva.es/vivienda', socialServicesUrl: 'https://www.gva.es/servicios-sociales', educationUrl: 'https://www.ceice.gva.es/', consumerUrl: 'https://www.gva.es/consumo', youthUrl: 'https://www.gva.es/ivaj', womenUrl: 'https://www.gva.es/igualdad' },
  { id: 'extremadura', name: 'Extremadura', portal: 'https://www.juntaex.es/', immigrationUrl: 'https://www.juntaex.es/consejerias/igualdad-y-cooperacion-al-desarrollo/inmigracion', employmentUrl: 'https://www.juntaex.es/consejerias/empleo-empresa-e-innovacion', healthUrl: 'https://www.saludextremadura.com/', housingUrl: 'https://www.juntaex.es/consejerias/obra-publica/vivienda', socialServicesUrl: 'https://www.juntaex.es/consejerias/igualdad-y-cooperacion-al-desarrollo', educationUrl: 'https://www.educarex.es/', consumerUrl: 'https://www.juntaex.es/consejerias/sanidad-y-consumo', youthUrl: 'https://www.juntaex.es/consejerias/cultura-jovenes-y-deportes', womenUrl: 'https://www.juntaex.es/mujer' },
  { id: 'galicia', name: 'Galicia', portal: 'https://www.xunta.gal/', immigrationUrl: 'https://www.xunta.gal/inmigracion', employmentUrl: 'https://www.xunta.gal/emprego', healthUrl: 'https://www.sergas.es/', housingUrl: 'https://www.xunta.gal/vivienda', socialServicesUrl: 'https://www.xunta.gal/benestar', educationUrl: 'https://www.edu.xunta.gal/', consumerUrl: 'https://www.xunta.gal/consumo', youthUrl: 'https://www.xunta.gal/xuventude', womenUrl: 'https://www.xunta.gal/igualdade' },
  { id: 'la-rioja', name: 'La Rioja', portal: 'https://www.larioja.org/', immigrationUrl: 'https://www.larioja.org/inmigracion/es', employmentUrl: 'https://www.larioja.org/empleo/es', healthUrl: 'https://www.riojasalud.es/', housingUrl: 'https://www.larioja.org/vivienda/es', socialServicesUrl: 'https://www.larioja.org/politicas-sociales/es', educationUrl: 'https://www.larioja.org/educacion/es', consumerUrl: 'https://www.larioja.es/consumo', youthUrl: 'https://www.larioja.org/juventud/es', womenUrl: 'https://www.larioja.org/mujer/es' },
  { id: 'madrid', name: 'Comunidad de Madrid', portal: 'https://www.comunidad.madrid/', immigrationUrl: 'https://www.comunidad.madrid/servicios/asuntos-sociales/inmigracion', employmentUrl: 'https://www.comunidad.madrid/servicios/empleo', healthUrl: 'https://www.comunidad.madrid/servicios/salud', housingUrl: 'https://www.comunidad.madrid/servicios/vivienda', socialServicesUrl: 'https://www.comunidad.madrid/servicios/asuntos-sociales', educationUrl: 'https://www.comunidad.madrid/servicios/educacion', consumerUrl: 'https://www.comunidad.madrid/servicios/consumo', youthUrl: 'https://www.comunidad.madrid/servicios/juventud', womenUrl: 'https://www.comunidad.madrid/servicios/asuntos-sociales/mujer' },
  { id: 'murcia', name: 'Región de Murcia', portal: 'https://www.carm.es/', immigrationUrl: 'https://www.carm.es/web/pagina?IDCONTENIDO=1287', employmentUrl: 'https://www.carm.es/web/pagina?IDCONTENIDO=740', healthUrl: 'https://www.carm.es/web/pagina?IDCONTENIDO=178', housingUrl: 'https://www.carm.es/web/pagina?IDCONTENIDO=2932', socialServicesUrl: 'https://www.carm.es/web/pagina?IDCONTENIDO=2776', educationUrl: 'https://www.carm.es/web/pagina?IDCONTENIDO=171', consumerUrl: 'https://www.carm.es/web/pagina?IDCONTENIDO=192', youthUrl: 'https://www.carm.es/web/pagina?IDCONTENIDO=6321', womenUrl: 'https://www.carm.es/web/pagina?IDCONTENIDO=2889' },
  { id: 'navarra', name: 'Comunidad Foral de Navarra', portal: 'https://www.navarra.es/', immigrationUrl: 'https://www.navarra.es/es/inmigracion', employmentUrl: 'https://www.navarra.es/es/empleo', healthUrl: 'https://www.navarra.es/es/salud', housingUrl: 'https://www.navarra.es/es/vivienda', socialServicesUrl: 'https://www.navarra.es/es/servicios-sociales', educationUrl: 'https://www.educacion.navarra.es/', consumerUrl: 'https://www.navarra.es/es/consumo', youthUrl: 'https://www.navarra.es/es/juventud', womenUrl: 'https://www.navarra.es/es/mujer' },
  { id: 'pais-vasco', name: 'Euskadi', portal: 'https://www.euskadi.eus/', immigrationUrl: 'https://www.euskadi.eus/inmigracion/', employmentUrl: 'https://www.euskadi.eus/empleo/', healthUrl: 'https://www.euskadi.eus/salud/', housingUrl: 'https://www.euskadi.eus/vivienda/', socialServicesUrl: 'https://www.euskadi.eus/servicios-sociales/', educationUrl: 'https://www.euskadi.eus/educacion/', consumerUrl: 'https://www.euskadi.eus/consumo/', youthUrl: 'https://www.gazteaukera.euskadi.eus/', womenUrl: 'https://www.euskadi.eus/mujer/' },
];

function buildCommunityResources(): Resource[] {
  const out: Resource[] = [];
  communities.forEach((c) => {
    out.push({ id: `com-${c.id}-portal`, title: `Portal Oficial - ${c.name}`, description: `Portal del gobierno autonómico de ${c.name}.`, url: c.portal, category: 'government', region: c.id, source: `Gobierno de ${c.name}`, tags: ['gobierno','oficial'], free: true });
    if (c.immigrationUrl) out.push({ id: `com-${c.id}-inmi`, title: `Atención a la Inmigración - ${c.name}`, description: `Servicios autonómicos de atención al inmigrante en ${c.name}.`, url: c.immigrationUrl, category: 'legal', region: c.id, source: `Gobierno de ${c.name}`, tags: ['inmigración'], free: true });
    if (c.employmentUrl) out.push({ id: `com-${c.id}-empleo`, title: `Empleo - ${c.name}`, description: `Servicios de empleo públicos autonómicos de ${c.name}.`, url: c.employmentUrl, category: 'work', region: c.id, source: `Gobierno de ${c.name}`, tags: ['empleo'], free: true });
    if (c.healthUrl) out.push({ id: `com-${c.id}-salud`, title: `Sanidad - ${c.name}`, description: `Servicio de Salud autonómico de ${c.name}.`, url: c.healthUrl, category: 'health', region: c.id, source: `Gobierno de ${c.name}`, tags: ['sanidad'], free: true });
    if (c.housingUrl) out.push({ id: `com-${c.id}-viv`, title: `Vivienda - ${c.name}`, description: `Política de vivienda y ayudas al alquiler en ${c.name}.`, url: c.housingUrl, category: 'housing', region: c.id, source: `Gobierno de ${c.name}`, tags: ['vivienda'], free: true });
    if (c.socialServicesUrl) out.push({ id: `com-${c.id}-ss`, title: `Servicios Sociales - ${c.name}`, description: `Servicios sociales autonómicos de ${c.name}.`, url: c.socialServicesUrl, category: 'government', region: c.id, source: `Gobierno de ${c.name}`, tags: ['servicios sociales'], free: true });
    if (c.educationUrl) out.push({ id: `com-${c.id}-edu`, title: `Educación - ${c.name}`, description: `Consejería de Educación de ${c.name}.`, url: c.educationUrl, category: 'education', region: c.id, source: `Gobierno de ${c.name}`, tags: ['educación'], free: true });
    if (c.consumerUrl) out.push({ id: `com-${c.id}-con`, title: `Consumo - ${c.name}`, description: `Atención al consumidor en ${c.name}.`, url: c.consumerUrl, category: 'legal', region: c.id, source: `Gobierno de ${c.name}`, tags: ['consumo'], free: true });
    if (c.youthUrl) out.push({ id: `com-${c.id}-jov`, title: `Juventud - ${c.name}`, description: `Servicios y programas para jóvenes en ${c.name}.`, url: c.youthUrl, category: 'education', region: c.id, source: `Gobierno de ${c.name}`, tags: ['juventud'], free: true });
    if (c.womenUrl) out.push({ id: `com-${c.id}-muj`, title: `Instituto de la Mujer - ${c.name}`, description: `Recursos para la igualdad y mujeres de ${c.name}.`, url: c.womenUrl, category: 'legal', region: c.id, source: `Gobierno de ${c.name}`, tags: ['mujer','igualdad'], free: true });
  });
  return out;
}

// ============================================================
// SPANISH CITIES - City councils + main services
// ============================================================
interface CityData {
  id: string;
  name: string;
  url: string;
  region: ResourceRegion;
  transportUrl?: string;
}

const cities: CityData[] = [
  { id: 'madrid', name: 'Madrid', url: 'https://www.madrid.es/', region: 'madrid', transportUrl: 'https://www.emtmadrid.es/' },
  { id: 'barcelona', name: 'Barcelona', url: 'https://www.barcelona.cat/', region: 'cataluna', transportUrl: 'https://www.tmb.cat/' },
  { id: 'valencia', name: 'València', url: 'https://www.valencia.es/', region: 'comunidad-valenciana', transportUrl: 'https://www.emtvalencia.es/' },
  { id: 'sevilla', name: 'Sevilla', url: 'https://www.sevilla.org/', region: 'andalucia', transportUrl: 'https://www.tussam.org/' },
  { id: 'zaragoza', name: 'Zaragoza', url: 'https://www.zaragoza.es/', region: 'aragon', transportUrl: 'https://www.tuzsa.es/' },
  { id: 'malaga', name: 'Málaga', url: 'https://www.malaga.eu/', region: 'andalucia', transportUrl: 'https://www.emtmalaga.es/' },
  { id: 'murcia', name: 'Murcia', url: 'https://www.murcia.es/', region: 'murcia', transportUrl: 'https://www.latbus.com/' },
  { id: 'palma', name: 'Palma', url: 'https://www.palma.cat/', region: 'balears', transportUrl: 'https://www.emtpalma.cat/' },
  { id: 'bilbao', name: 'Bilbao', url: 'https://www.bilbao.eus/', region: 'pais-vasco', transportUrl: 'https://www.bilbaotransport.org/' },
  { id: 'alicante', name: 'Alicante', url: 'https://www.alicante.es/', region: 'comunidad-valenciana', transportUrl: 'https://www.subus.es/' },
  { id: 'cordoba', name: 'Córdoba', url: 'https://www.cordoba.es/', region: 'andalucia' },
  { id: 'valladolid', name: 'Valladolid', url: 'https://www.valladolid.es/', region: 'castilla-y-leon' },
  { id: 'vigo', name: 'Vigo', url: 'https://www.vigo.org/', region: 'galicia' },
  { id: 'gijon', name: 'Gijón', url: 'https://www.gijon.es/', region: 'asturias' },
  { id: 'granada', name: 'Granada', url: 'https://www.granada.org/', region: 'andalucia' },
  { id: 'vitoria', name: 'Vitoria-Gasteiz', url: 'https://www.vitoria-gasteiz.org/', region: 'pais-vasco' },
  { id: 'elche', name: 'Elche', url: 'https://www.elche.es/', region: 'comunidad-valenciana' },
  { id: 'oviedo', name: 'Oviedo', url: 'https://www.oviedo.es/', region: 'asturias' },
  { id: 'santacruz', name: 'Santa Cruz de Tenerife', url: 'https://www.santacruzdetenerife.es/', region: 'canarias' },
  { id: 'palmasgc', name: 'Las Palmas de Gran Canaria', url: 'https://www.laspalmasgc.es/', region: 'canarias' },
  { id: 'pamplona', name: 'Pamplona', url: 'https://www.pamplona.es/', region: 'navarra' },
  { id: 'almeria', name: 'Almería', url: 'https://www.almeria.es/', region: 'andalucia' },
  { id: 'cadiz', name: 'Cádiz', url: 'https://www.cadiz.es/', region: 'andalucia' },
  { id: 'burgos', name: 'Burgos', url: 'https://www.aytoburgos.es/', region: 'castilla-y-leon' },
  { id: 'sansebastian', name: 'San Sebastián', url: 'https://www.donostia.eus/', region: 'pais-vasco' },
  { id: 'albacete', name: 'Albacete', url: 'https://www.albacete.es/', region: 'castilla-la-mancha' },
  { id: 'santander', name: 'Santander', url: 'https://www.santander.es/', region: 'cantabria' },
  { id: 'castellon', name: 'Castelló', url: 'https://www.castello.es/', region: 'comunidad-valenciana' },
  { id: 'logrono', name: 'Logroño', url: 'https://www.logrono.es/', region: 'la-rioja' },
  { id: 'badalona', name: 'Badalona', url: 'https://www.badalona.cat/', region: 'cataluna' },
  { id: 'huelva', name: 'Huelva', url: 'https://www.huelva.es/', region: 'andalucia' },
  { id: 'marbella', name: 'Marbella', url: 'https://www.marbella.es/', region: 'andalucia' },
  { id: 'leongtfo', name: 'León', url: 'https://www.aytoleon.es/', region: 'castilla-y-leon' },
  { id: 'tenerife', name: 'San Cristóbal de La Laguna', url: 'https://www.aytolalaguna.com/', region: 'canarias' },
  { id: 'sabadell', name: 'Sabadell', url: 'https://www.sabadell.cat/', region: 'cataluna' },
  { id: 'mostoles', name: 'Móstoles', url: 'https://www.mostoles.es/', region: 'madrid' },
  { id: 'jerez', name: 'Jerez de la Frontera', url: 'https://www.jerez.es/', region: 'andalucia' },
  { id: 'alcobendas', name: 'Alcobendas', url: 'https://www.alcobendas.org/', region: 'madrid' },
  { id: 'fuenlabrada', name: 'Fuenlabrada', url: 'https://www.fuenlabrada.es/', region: 'madrid' },
  { id: 'gijona', name: 'Getafe', url: 'https://www.getafe.es/', region: 'madrid' },
  { id: 'torrejon', name: 'Torrejón de Ardoz', url: 'https://www.torrejondeardoz.es/', region: 'madrid' },
  { id: 'leganes', name: 'Leganés', url: 'https://www.leganes.org/', region: 'madrid' },
  { id: 'alcorcon', name: 'Alcorcón', url: 'https://www.ayto-alcorcon.es/', region: 'madrid' },
  { id: 'ourense', name: 'Ourense', url: 'https://www.ourense.es/', region: 'galicia' },
  { id: 'lalaguna', name: 'Lugo', url: 'https://www.lugo.gal/', region: 'galicia' },
  { id: 'santacoloma', name: 'Santa Coloma de Gramenet', url: 'https://www.gramenet.cat/', region: 'cataluna' },
  { id: 'jaen', name: 'Jaén', url: 'https://www.aytojaen.es/', region: 'andalucia' },
  { id: 'torrevieja', name: 'Torrevieja', url: 'https://www.torrevieja.es/', region: 'comunidad-valenciana' },
  { id: 'telde', name: 'Telde', url: 'https://www.telde.es/', region: 'canarias' },
  { id: 'barakaldo', name: 'Barakaldo', url: 'https://www.barakaldo.org/', region: 'pais-vasco' },
  { id: 'lorca', name: 'Lorca', url: 'https://www.lorca.es/', region: 'murcia' },
  { id: 'doshermanas', name: 'Dos Hermanas', url: 'https://www.doshermanas.es/', region: 'andalucia' },
  { id: 'pozuelo', name: 'Pozuelo de Alarcón', url: 'https://www.pozuelodealarcon.org/', region: 'madrid' },
  { id: 'laspalmas2', name: 'La Laguna', url: 'https://www.aytolalaguna.com/', region: 'canarias' },
  { id: 'parla', name: 'Parla', url: 'https://www.aytoparla.es/', region: 'madrid' },
  { id: 'guadalajara', name: 'Guadalajara', url: 'https://www.guadalajara.es/', region: 'castilla-la-mancha' },
  { id: 'santboi', name: 'Sant Boi de Llobregat', url: 'https://www.santboi.cat/', region: 'cataluna' },
  { id: 'tarragona', name: 'Tarragona', url: 'https://www.tarragona.cat/', region: 'cataluna' },
  { id: 'santiago', name: 'Santiago de Compostela', url: 'https://www.santiagodecompostela.gal/', region: 'galicia' },
  { id: 'iruna', name: 'Irun', url: 'https://www.irun.org/', region: 'pais-vasco' },
  { id: 'talavera', name: 'Talavera de la Reina', url: 'https://www.talavera.es/', region: 'castilla-la-mancha' },
  { id: 'ceuta', name: 'Ceuta', url: 'https://www.ceuta.es/', region: 'national' },
  { id: 'melilla', name: 'Melilla', url: 'https://www.melilla.es/', region: 'national' },
  { id: 'cartagena', name: 'Cartagena', url: 'https://www.cartagena.es/', region: 'murcia' },
  { id: 'puertollano', name: 'Puertollano', url: 'https://www.puertollano.es/', region: 'castilla-la-mancha' },
  { id: 'alcantarilla', name: 'Alcantarilla', url: 'https://www.alcantarilla.es/', region: 'murcia' },
  { id: 'caceres', name: 'Cáceres', url: 'https://www.ayto-caceres.es/', region: 'extremadura' },
  { id: 'badajoz', name: 'Badajoz', url: 'https://www.aytobadajoz.es/', region: 'extremadura' },
  { id: 'totana', name: 'Totana', url: 'https://www.totana.es/', region: 'murcia' },
  { id: 'molina', name: 'Molina de Segura', url: 'https://www.molinadesegura.es/', region: 'murcia' },
  { id: 'motril', name: 'Motril', url: 'https://www.motril.es/', region: 'andalucia' },
  { id: 'roquetas', name: 'Roquetas de Mar', url: 'https://www.roquetasdemar.es/', region: 'andalucia' },
  { id: 'cadiz2', name: 'Chiclana de la Frontera', url: 'https://www.chiclana.es/', region: 'andalucia' },
  { id: 'ferrol', name: 'Ferrol', url: 'https://concellodeferrol.es/', region: 'galicia' },
  { id: 'rivas', name: 'Rivas-Vaciamadrid', url: 'https://www.rivas-vaciamadrid.es/', region: 'madrid' },
  { id: 'lasrozas', name: 'Las Rozas de Madrid', url: 'https://www.lasrozas.es/', region: 'madrid' },
  { id: 'majadahonda', name: 'Majadahonda', url: 'https://www.majadahonda.org/', region: 'madrid' },
  { id: 'colladovillalba', name: 'Collado Villalba', url: 'https://www.colladovillalba.org/', region: 'madrid' },
  { id: 'sanfernando', name: 'San Fernando de Henares', url: 'https://www.sanfernando.es/', region: 'madrid' },
  { id: 'coslada', name: 'Coslada', url: 'https://www.coslada.es/', region: 'madrid' },
  { id: 'sanse', name: 'San Sebastián de los Reyes', url: 'https://www.ssreyes.org/', region: 'madrid' },
  { id: 'pinto', name: 'Pinto', url: 'https://www.ayto-pinto.es/', region: 'madrid' },
  { id: 'valdemoro', name: 'Valdemoro', url: 'https://www.valdemoro.es/', region: 'madrid' },
  { id: 'cuenca', name: 'Cuenca', url: 'https://www.cuenca.es/', region: 'castilla-la-mancha' },
  { id: 'toledo', name: 'Toledo', url: 'https://www.toledo.es/', region: 'castilla-la-mancha' },
  { id: 'ciudadreal', name: 'Ciudad Real', url: 'https://ciudadreal.es/', region: 'castilla-la-mancha' },
  { id: 'albacete2', name: 'Hellín', url: 'https://www.hellin.es/', region: 'castilla-la-mancha' },
  { id: 'pontevedra', name: 'Pontevedra', url: 'https://concello.pontevedra.gal/', region: 'galicia' },
  { id: 'coruna', name: 'A Coruña', url: 'https://www.coruna.gal/', region: 'galicia' },
  { id: 'ponteareas', name: 'Ponteareas', url: 'https://www.ponteareas.gal/', region: 'galicia' },
  { id: 'redondela', name: 'Redondela', url: 'https://concelloderedondela.gal/', region: 'galicia' },
  { id: 'navarra-estella', name: 'Estella-Lizarra', url: 'https://www.estella-lizarra.com/', region: 'navarra' },
  { id: 'tudela', name: 'Tudela', url: 'https://www.tudela.es/', region: 'navarra' },
  { id: 'baranain', name: 'Barañáin', url: 'https://www.baranain.es/', region: 'navarra' },
  { id: 'burgos2', name: 'Miranda de Ebro', url: 'https://www.mirandadeebro.es/', region: 'castilla-y-leon' },
  { id: 'salamanca', name: 'Salamanca', url: 'https://www.aytosalamanca.es/', region: 'castilla-y-leon' },
  { id: 'avila', name: 'Ávila', url: 'https://www.avila.es/', region: 'castilla-y-leon' },
  { id: 'segovia', name: 'Segovia', url: 'https://www.segovia.es/', region: 'castilla-y-leon' },
  { id: 'soria', name: 'Soria', url: 'https://www.soria.es/', region: 'castilla-y-leon' },
  { id: 'zamora', name: 'Zamora', url: 'https://www.aytozamora.es/', region: 'castilla-y-leon' },
  { id: 'palencia', name: 'Palencia', url: 'https://www.aytopalencia.es/', region: 'castilla-y-leon' },
  { id: 'santander2', name: 'Torrelavega', url: 'https://www.torrelavega.es/', region: 'cantabria' },
  { id: 'castellon2', name: 'Vila-real', url: 'https://www.vila-real.es/', region: 'comunidad-valenciana' },
  { id: 'alcoy', name: 'Alcoi', url: 'https://www.alcoi.org/', region: 'comunidad-valenciana' },
  { id: 'eldense', name: 'Elda', url: 'https://www.elda.es/', region: 'comunidad-valenciana' },
  { id: 'orihuela', name: 'Orihuela', url: 'https://www.orihuela.es/', region: 'comunidad-valenciana' },
  { id: 'peniscola', name: 'Peníscola', url: 'https://www.peniscola.es/', region: 'comunidad-valenciana' },
  { id: 'lleida', name: 'Lleida', url: 'https://www.paeria.cat/', region: 'cataluna' },
  { id: 'girona', name: 'Girona', url: 'https://www.girona.cat/', region: 'cataluna' },
  { id: 'reus', name: 'Reus', url: 'https://www.reus.cat/', region: 'cataluna' },
  { id: 'mataro', name: 'Mataró', url: 'https://www.mataro.cat/', region: 'cataluna' },
  { id: 'cornella', name: 'Cornellà de Llobregat', url: 'https://www.cornella.cat/', region: 'cataluna' },
  { id: 'rubí', name: 'Rubí', url: 'https://www.rubi.cat/', region: 'cataluna' },
  { id: 'manresa', name: 'Manresa', url: 'https://www.manresa.cat/', region: 'cataluna' },
  { id: 'jacap', name: 'Jaca', url: 'https://www.jaca.es/', region: 'aragon' },
  { id: 'huesca', name: 'Huesca', url: 'https://www.huesca.es/', region: 'aragon' },
  { id: 'teruel', name: 'Teruel', url: 'https://www.teruel.es/', region: 'aragon' },
  { id: 'calatayud', name: 'Calatayud', url: 'https://www.calatayud.es/', region: 'aragon' },
  { id: 'lugo2', name: 'Ponferrada', url: 'https://www.ponferrada.org/', region: 'castilla-y-leon' },
  { id: 'arrecife', name: 'Arrecife', url: 'https://www.arrecife.es/', region: 'canarias' },
  { id: 'puerto-del-carmen', name: 'Puerto del Rosario', url: 'https://www.puertodelrosario.org/', region: 'canarias' },
  { id: 'la-laguna2', name: 'La Orotava', url: 'https://www.laorotava.es/', region: 'canarias' },
  { id: 'merida', name: 'Mérida', url: 'https://www.merida.es/', region: 'extremadura' },
  { id: 'plasencia', name: 'Plasencia', url: 'https://www.plasencia.es/', region: 'extremadura' },
  { id: 'don-benito', name: 'Don Benito', url: 'https://www.donbenito.es/', region: 'extremadura' },
  { id: 'villaviciosa', name: 'Villaviciosa de Odón', url: 'https://www.villaviciosa.es/', region: 'madrid' },
  { id: 'boadilla', name: 'Boadilla del Monte', url: 'https://www.boadilla.com/', region: 'madrid' },
  { id: 'getafe2', name: 'Alcalá de Henares', url: 'https://www.ayto-alcaladehenares.es/', region: 'madrid' },
  { id: 'torrejon2', name: 'Alcorcón', url: 'https://www.ayto-alcorcon.es/', region: 'madrid' },
  { id: 'lorca2', name: 'Molina de Segura', url: 'https://www.molinadesegura.es/', region: 'murcia' },
  { id: 'yecla', name: 'Yecla', url: 'https://www.yecla.es/', region: 'murcia' },
  { id: 'alcantari', name: 'Alcantarilla', url: 'https://www.alcantarilla.es/', region: 'murcia' },
  { id: 'aguilas', name: 'Águilas', url: 'https://www.aguilas.es/', region: 'murcia' },
];

const cityServices = [
  { suffix: 'padron', path: '/portal/ServiciosOnline/SedeElectronica', title: 'Empadronamiento - ', desc: 'Trámite de empadronamiento en el padrón municipal. Categoria: documentation', cat: 'documentation' as ResourceCategory },
  { suffix: 'social', path: '/servicios-sociales', title: 'Servicios Sociales - ', desc: 'Atención social a personas y familias vulnerables. Categoría: government', cat: 'government' as ResourceCategory },
  { suffix: 'empleo', path: '/empleo', title: 'Empleo Local - ', desc: 'Bolsa de empleo y formación del ayuntamiento. Categoría: work', cat: 'work' as ResourceCategory },
  { suffix: 'vivienda', path: '/vivienda', title: 'Vivienda Municipal - ', desc: 'Información sobre vivienda social y ayudas. Categoría: housing', cat: 'housing' as ResourceCategory },
  { suffix: 'salud', path: '/salud', title: 'Salud Municipal - ', desc: 'Centros de salud municipales y programas. Categoría: health', cat: 'health' as ResourceCategory },
  { suffix: 'educacion', path: '/educacion', title: 'Educación Municipal - ', desc: 'Escuelas infantiles, CEPA y formación municipal. Categoría: education', cat: 'education' as ResourceCategory },
  { suffix: 'consumo', path: '/consumo', title: 'Oficina Consumidor - ', desc: 'OMIC: Oficina Municipal de Información al Consumidor. Categoría: legal', cat: 'legal' as ResourceCategory },
  { suffix: 'juventud', path: '/juventud', title: 'Juventud - ', desc: 'Casas de la juventud y programas para jóvenes. Categoría: education', cat: 'education' as ResourceCategory },
  { suffix: 'mujer', path: '/mujer', title: 'Centro de la Mujer - ', desc: 'Atención a mujeres y prevención de violencia. Categoría: legal', cat: 'legal' as ResourceCategory },
  { suffix: 'extranjeria', path: '/extranjeria', title: 'Atención al Inmigrante - ', desc: 'Servicios municipales de atención al inmigrante. Categoría: legal', cat: 'legal' as ResourceCategory },
  { suffix: 'tributos', path: '/hacienda', title: 'Tributos y Tasas - ', desc: 'Pago de tributos, IBI, tasa de basuras. Categoría: documentation', cat: 'documentation' as ResourceCategory },
  { suffix: 'cultura', path: '/cultura', title: 'Cultura Municipal - ', desc: 'Bibliotecas, centros culturales y actividades. Categoría: education', cat: 'education' as ResourceCategory },
  { suffix: 'deportes', path: '/deportes', title: 'Deportes - ', desc: 'Instalaciones deportivas municipales. Categoría: government', cat: 'government' as ResourceCategory },
  { suffix: 'mayores', path: '/mayores', title: 'Atención a Mayores - ', desc: 'Centros de día y servicios para personas mayores. Categoría: family', cat: 'family' as ResourceCategory },
  { suffix: 'infancia', path: '/infancia', title: 'Atención a la Infancia - ', desc: 'Servicios para niños y adolescentes. Categoría: family', cat: 'family' as ResourceCategory },
  { suffix: 'registro', path: '/registro', title: 'Registro General - ', desc: 'Presentación de escritos y solicitudes. Categoría: documentation', cat: 'documentation' as ResourceCategory },
  { suffix: 'sede', path: '/sede', title: 'Sede Electrónica - ', desc: 'Trámites online del ayuntamiento. Categoría: government', cat: 'government' as ResourceCategory },
  { suffix: 'transparencia', path: '/transparencia', title: 'Transparencia - ', desc: 'Información pública y transparencia municipal. Categoría: government', cat: 'government' as ResourceCategory },
  { suffix: 'participacion', path: '/participacion', title: 'Participación Ciudadana - ', desc: 'Asociaciones de vecinos y participación. Categoría: government', cat: 'government' as ResourceCategory },
  { suffix: 'mediacion', path: '/mediacion', title: 'Mediación - ', desc: 'Servicio municipal de mediación. Categoría: legal', cat: 'legal' as ResourceCategory },
];

function buildCityResources(): Resource[] {
  const out: Resource[] = [];
  cities.forEach((city) => {
    // Portal + transport
    out.push({
      id: `city-${city.id}-portal`,
      title: `Ayuntamiento de ${city.name}`,
      description: `Portal oficial del Ayuntamiento de ${city.name}. Trámites, servicios y atención al ciudadano.`,
      url: city.url,
      category: 'government',
      region: city.region,
      source: `Ayuntamiento de ${city.name}`,
      tags: ['ayuntamiento','oficial'],
      free: true,
    });
    if (city.transportUrl) {
      out.push({
        id: `city-${city.id}-trans`,
        title: `Transporte Público - ${city.name}`,
        description: `Autobuses y transporte público urbano de ${city.name}.`,
        url: city.transportUrl,
        category: 'transport',
        region: city.region,
        source: `Ayuntamiento de ${city.name}`,
        tags: ['transporte','autobús'],
        free: false,
      });
    }
    // Services
    cityServices.forEach((s) => {
      out.push({
        id: `city-${city.id}-${s.suffix}`,
        title: `${s.title}${city.name}`,
        description: `${s.desc}. Servicio del Ayuntamiento de ${city.name}.`,
        url: `${city.url}${s.path}`,
        category: s.cat,
        region: city.region,
        source: `Ayuntamiento de ${city.name}`,
        tags: [s.suffix, 'municipal'],
        free: true,
      });
    });
  });
  return out;
}

// ============================================================
// AI TOOLS - Real platforms (60+)
// ============================================================
const aiTools: Resource[] = [
  { id: 'ai-1', title: 'ChatGPT (OpenAI)', description: 'El asistente de IA más popular. Gratis con cuenta. Crea textos, traduce, responde preguntas.', url: 'https://chat.openai.com/', category: 'ai-tools', region: 'national', source: 'OpenAI', tags: ['IA','chatbot','text'], free: true },
  { id: 'ai-2', title: 'Gemini (Google)', description: 'IA de Google, integrada con Gmail, Docs y YouTube. Gratis.', url: 'https://gemini.google.com/', category: 'ai-tools', region: 'national', source: 'Google', tags: ['IA','Google'], free: true },
  { id: 'ai-3', title: 'Microsoft Copilot', description: 'IA gratis de Microsoft con GPT-4. Integrada en Windows, Edge y Office.', url: 'https://copilot.microsoft.com/', category: 'ai-tools', region: 'national', source: 'Microsoft', tags: ['IA','Microsoft','GPT-4'], free: true },
  { id: 'ai-4', title: 'Claude (Anthropic)', description: 'IA conversacional excelente para textos largos y análisis. Gratis con límites.', url: 'https://claude.ai/', category: 'ai-tools', region: 'national', source: 'Anthropic', tags: ['IA','chatbot'], free: true },
  { id: 'ai-5', title: 'DeepSeek Chat', description: 'IA china gratuita con razonamiento avanzado. Buenísima para código y matemáticas.', url: 'https://chat.deepseek.com/', category: 'ai-tools', region: 'national', source: 'DeepSeek', tags: ['IA','razonamiento'], free: true },
  { id: 'ai-6', title: 'Qwen Chat (Alibaba)', description: 'IA multilingüe de Alibaba. Gratis, soporta español y chino.', url: 'https://chat.qwen.ai/', category: 'ai-tools', region: 'national', source: 'Alibaba', tags: ['IA','multilingüe'], free: true },
  { id: 'ai-7', title: 'Perplexity AI', description: 'Buscador con IA que responde con fuentes. Reemplaza a Google para búsquedas serias.', url: 'https://www.perplexity.ai/', category: 'ai-tools', region: 'national', source: 'Perplexity', tags: ['IA','búsqueda'], free: true },
  { id: 'ai-8', title: 'Meta AI', description: 'Asistente IA de Meta (Facebook/Instagram/WhatsApp). Gratis.', url: 'https://www.meta.ai/', category: 'ai-tools', region: 'national', source: 'Meta', tags: ['IA','Meta'], free: true },
  { id: 'ai-9', title: 'Grok (xAI)', description: 'IA de Elon Musk con acceso a X (Twitter).', url: 'https://grok.com/', category: 'ai-tools', region: 'national', source: 'xAI', tags: ['IA','Grok'], free: true },
  { id: 'ai-10', title: 'Mistral Le Chat', description: 'IA europea (francesa) con privacidad garantizada. Gratis.', url: 'https://chat.mistral.ai/chat', category: 'ai-tools', region: 'national', source: 'Mistral AI', tags: ['IA','Europa'], free: true },
  { id: 'ai-11', title: 'HuggingChat', description: 'Alternativa open-source a ChatGPT. Gratis y sin registro.', url: 'https://huggingface.co/chat/', category: 'ai-tools', region: 'national', source: 'Hugging Face', tags: ['IA','open-source'], free: true },
  { id: 'ai-12', title: 'Pi (Inflection AI)', description: 'IA conversacional empática, ideal para practicar idiomas.', url: 'https://pi.ai/', category: 'ai-tools', region: 'national', source: 'Inflection AI', tags: ['IA','conversación'], free: true },
  { id: 'ai-13', title: 'You.com', description: 'Buscador con IA y múltiples modelos en uno.', url: 'https://you.com/', category: 'ai-tools', region: 'national', source: 'You.com', tags: ['IA','búsqueda'], free: true },
  { id: 'ai-14', title: 'Phind', description: 'IA especializada en programación y tecnología.', url: 'https://www.phind.com/', category: 'ai-tools', region: 'national', source: 'Phind', tags: ['IA','programación'], free: true },
  { id: 'ai-15', title: 'Character.AI', description: 'Chatea con personajes virtuales creados con IA.', url: 'https://character.ai/', category: 'ai-tools', region: 'national', source: 'Character.AI', tags: ['IA','entretenimiento'], free: true },
  { id: 'ai-16', title: 'Poe (Quora)', description: 'Plataforma con múltiples IAs en un solo lugar.', url: 'https://poe.com/', category: 'ai-tools', region: 'national', source: 'Poe', tags: ['IA','multi'], free: true },
  { id: 'ai-17', title: 'OpenAI Playground', description: 'Prueba modelos de OpenAI con configuración avanzada.', url: 'https://platform.openai.com/playground', category: 'ai-tools', region: 'national', source: 'OpenAI', tags: ['IA','API'], free: false },
  { id: 'ai-18', title: 'Google AI Studio', description: 'Plataforma para desarrolladores de Gemini.', url: 'https://aistudio.google.com/', category: 'ai-tools', region: 'national', source: 'Google', tags: ['IA','desarrollo'], free: true },
  { id: 'ai-19', title: 'DALL·E 3 (OpenAI)', description: 'Genera imágenes a partir de texto con IA. En ChatGPT.', url: 'https://openai.com/dall-e-3/', category: 'ai-tools', region: 'national', source: 'OpenAI', tags: ['IA','imagen'], free: false },
  { id: 'ai-20', title: 'Midjourney', description: 'Creador de imágenes artísticas con IA de alta calidad.', url: 'https://www.midjourney.com/', category: 'ai-tools', region: 'national', source: 'Midjourney', tags: ['IA','imagen'], free: false },
  { id: 'ai-21', title: 'Stable Diffusion', description: 'Generador de imágenes open-source, gratis.', url: 'https://stability.ai/', category: 'ai-tools', region: 'national', source: 'Stability AI', tags: ['IA','imagen'], free: true },
  { id: 'ai-22', title: 'Leonardo AI', description: 'Crea imágenes con IA, con créditos gratuitos diarios.', url: 'https://leonardo.ai/', category: 'ai-tools', region: 'national', source: 'Leonardo', tags: ['IA','imagen'], free: true },
  { id: 'ai-23', title: 'RunwayML', description: 'Genera videos con IA. Ideal para creadores.', url: 'https://runwayml.com/', category: 'ai-tools', region: 'national', source: 'Runway', tags: ['IA','video'], free: false },
  { id: 'ai-24', title: 'Suno AI', description: 'Crea canciones completas con IA a partir de texto.', url: 'https://suno.com/', category: 'ai-tools', region: 'national', source: 'Suno', tags: ['IA','música'], free: true },
  { id: 'ai-25', title: 'ElevenLabs', description: 'Generación de voz realista con IA. TTS avanzado.', url: 'https://elevenlabs.io/', category: 'ai-tools', region: 'national', source: 'ElevenLabs', tags: ['IA','voz'], free: true },
  { id: 'ai-26', title: 'Whisper (OpenAI)', description: 'Transcripción de audio a texto gratis y open-source.', url: 'https://openai.com/research/whisper', category: 'ai-tools', region: 'national', source: 'OpenAI', tags: ['IA','transcripción'], free: true },
  { id: 'ai-27', title: 'Google Translate', description: 'Traductor gratuito con 130+ idiomas y detección automática.', url: 'https://translate.google.com/', category: 'ai-tools', region: 'national', source: 'Google', tags: ['traductor','idiomas'], free: true },
  { id: 'ai-28', title: 'DeepL Translate', description: 'El mejor traductor con IA, más natural que Google.', url: 'https://www.deepl.com/', category: 'ai-tools', region: 'national', source: 'DeepL', tags: ['traductor','IA'], free: true },
  { id: 'ai-29', title: 'Grammarly', description: 'Corrige tu inglés y mejora tu escritura con IA.', url: 'https://www.grammarly.com/', category: 'ai-tools', region: 'national', source: 'Grammarly', tags: ['escritura','inglés'], free: true },
  { id: 'ai-30', title: 'LanguageTool', description: 'Corrector ortográfico y gramatical multilingüe gratuito.', url: 'https://languagetool.org/', category: 'ai-tools', region: 'national', source: 'LanguageTool', tags: ['gramática','multilingüe'], free: true },
  { id: 'ai-31', title: 'Notion AI', description: 'Asistente IA integrado en Notion para organizar tu vida.', url: 'https://www.notion.so/product/ai', category: 'ai-tools', region: 'national', source: 'Notion', tags: ['IA','productividad'], free: false },
  { id: 'ai-32', title: 'Microsoft Designer', description: 'Crea diseños con IA gratis (DALL-E integrado).', url: 'https://designer.microsoft.com/', category: 'ai-tools', region: 'national', source: 'Microsoft', tags: ['IA','diseño'], free: true },
  { id: 'ai-33', title: 'Canva con IA', description: 'Diseña con IA: textos, imágenes, plantillas gratis.', url: 'https://www.canva.com/ai/', category: 'ai-tools', region: 'national', source: 'Canva', tags: ['IA','diseño'], free: true },
  { id: 'ai-34', title: 'Gamma AI', description: 'Crea presentaciones con IA en segundos.', url: 'https://gamma.app/', category: 'ai-tools', region: 'national', source: 'Gamma', tags: ['IA','presentaciones'], free: true },
  { id: 'ai-35', title: 'Tome AI', description: 'Presentaciones generadas con IA.', url: 'https://tome.app/', category: 'ai-tools', region: 'national', source: 'Tome', tags: ['IA','presentaciones'], free: true },
  { id: 'ai-36', title: 'Beautiful.ai', description: 'Presentaciones profesionales con IA.', url: 'https://www.beautiful.ai/', category: 'ai-tools', region: 'national', source: 'Beautiful.ai', tags: ['IA','presentaciones'], free: false },
  { id: 'ai-37', title: 'Replika', description: 'Compañero IA conversacional para bienestar emocional.', url: 'https://replika.com/', category: 'ai-tools', region: 'national', source: 'Replika', tags: ['IA','bienestar'], free: true },
  { id: 'ai-38', title: 'Otter.ai', description: 'Transcribe reuniones y notas de voz en tiempo real.', url: 'https://otter.ai/', category: 'ai-tools', region: 'national', source: 'Otter', tags: ['IA','transcripción'], free: true },
  { id: 'ai-39', title: 'Descript', description: 'Edita audio y video editando el texto (transcripción).', url: 'https://www.descript.com/', category: 'ai-tools', region: 'national', source: 'Descript', tags: ['IA','audio','video'], free: false },
  { id: 'ai-40', title: 'Resemble AI', description: 'Clona tu voz con IA.', url: 'https://www.resemble.ai/', category: 'ai-tools', region: 'national', source: 'Resemble', tags: ['IA','voz'], free: false },
  { id: 'ai-41', title: 'Llama 3 (Meta)', description: 'Modelo open-source de Meta. Pruébalo en HuggingChat o Groq.', url: 'https://llama.meta.com/', category: 'ai-tools', region: 'national', source: 'Meta', tags: ['IA','open-source'], free: true },
  { id: 'ai-42', title: 'Groq', description: 'IA ultrarrápida con Llama. Respuestas instantáneas.', url: 'https://groq.com/', category: 'ai-tools', region: 'national', source: 'Groq', tags: ['IA','rápido'], free: true },
  { id: 'ai-43', title: 'Cohere', description: 'Plataforma de IA para empresas y desarrolladores.', url: 'https://cohere.com/', category: 'ai-tools', region: 'national', source: 'Cohere', tags: ['IA','API'], free: false },
  { id: 'ai-44', title: 'Google NotebookLM', description: 'Asistente IA que analiza tus documentos y PDFs.', url: 'https://notebooklm.google.com/', category: 'ai-tools', region: 'national', source: 'Google', tags: ['IA','documentos'], free: true },
  { id: 'ai-45', title: 'ChatPDF', description: 'Chatea con tus PDFs: haz preguntas y obtén resúmenes.', url: 'https://www.chatpdf.com/', category: 'ai-tools', region: 'national', source: 'ChatPDF', tags: ['IA','PDF'], free: true },
  { id: 'ai-46', title: 'PDF.ai', description: 'Analiza documentos PDF con IA gratis.', url: 'https://pdf.ai/', category: 'ai-tools', region: 'national', source: 'PDF.ai', tags: ['IA','PDF'], free: true },
  { id: 'ai-47', title: 'Tactiq', description: 'Transcribe reuniones de Google Meet, Zoom y Teams.', url: 'https://tactiq.io/', category: 'ai-tools', region: 'national', source: 'Tactiq', tags: ['IA','transcripción'], free: true },
  { id: 'ai-48', title: 'Fireflies AI', description: 'Asistente IA para reuniones: notas y resúmenes.', url: 'https://fireflies.ai/', category: 'ai-tools', region: 'national', source: 'Fireflies', tags: ['IA','reuniones'], free: true },
  { id: 'ai-49', title: 'Calendly', description: 'Programa reuniones fácilmente (no es IA pero útil).', url: 'https://calendly.com/', category: 'ai-tools', region: 'national', source: 'Calendly', tags: ['productividad'], free: true },
  { id: 'ai-50', title: 'Reclaim AI', description: 'Calendario inteligente con IA que organiza tu semana.', url: 'https://reclaim.ai/', category: 'ai-tools', region: 'national', source: 'Reclaim', tags: ['IA','calendario'], free: true },
  { id: 'ai-51', title: 'Motion', description: 'Planificador con IA para tareas y calendario.', url: 'https://www.usemotion.com/', category: 'ai-tools', region: 'national', source: 'Motion', tags: ['IA','productividad'], free: false },
  { id: 'ai-52', title: 'Taskade AI', description: 'Organizador de tareas con agentes IA.', url: 'https://www.taskade.com/', category: 'ai-tools', region: 'national', source: 'Taskade', tags: ['IA','tareas'], free: true },
  { id: 'ai-53', title: 'Mem AI', description: 'Notas inteligentes con IA que se auto-organizan.', url: 'https://mem.ai/', category: 'ai-tools', region: 'national', source: 'Mem', tags: ['IA','notas'], free: false },
  { id: 'ai-54', title: 'Reflect', description: 'Aplicación de notas con IA integrada.', url: 'https://reflect.app/', category: 'ai-tools', region: 'national', source: 'Reflect', tags: ['IA','notas'], free: false },
  { id: 'ai-55', title: 'Cursor IDE', description: 'Editor de código con IA, mejor que GitHub Copilot.', url: 'https://cursor.sh/', category: 'ai-tools', region: 'national', source: 'Cursor', tags: ['IA','código'], free: true },
  { id: 'ai-56', title: 'GitHub Copilot', description: 'Asistente IA para programar en VS Code y GitHub.', url: 'https://github.com/features/copilot', category: 'ai-tools', region: 'national', source: 'GitHub', tags: ['IA','código'], free: false },
  { id: 'ai-57', title: 'Codeium', description: 'Alternativa gratuita a GitHub Copilot.', url: 'https://codeium.com/', category: 'ai-tools', region: 'national', source: 'Codeium', tags: ['IA','código'], free: true },
  { id: 'ai-58', title: 'Tabnine', description: 'Autocompletado de código IA para desarrolladores.', url: 'https://www.tabnine.com/', category: 'ai-tools', region: 'national', source: 'Tabnine', tags: ['IA','código'], free: true },
  { id: 'ai-59', title: 'V0 by Vercel', description: 'Genera interfaces web con IA a partir de texto.', url: 'https://v0.dev/', category: 'ai-tools', region: 'national', source: 'Vercel', tags: ['IA','web'], free: true },
  { id: 'ai-60', title: 'Bolt.new', description: 'Crea apps completas con IA desde el navegador.', url: 'https://bolt.new/', category: 'ai-tools', region: 'national', source: 'StackBlitz', tags: ['IA','apps'], free: true },
];

// ============================================================
// CV TOOLS - Real resume builders (50+)
// ============================================================
const cvTools: Resource[] = [
  { id: 'cv-1', title: 'Europass CV (Oficial UE)', description: 'Plantilla oficial europea gratuita, reconocida en toda la UE.', url: 'https://europa.eu/europass/eportfolio/screen/profile', category: 'cv-tools', region: 'national', source: 'Unión Europea', tags: ['CV','europass'], free: true },
  { id: 'cv-2', title: 'Canva - Currículum', description: 'Cientos de plantillas de CV gratis, edita online.', url: 'https://www.canva.com/create-a-resume/', category: 'cv-tools', region: 'national', source: 'Canva', tags: ['CV','plantillas'], free: true },
  { id: 'cv-3', title: 'Novoresume', description: 'Creador de CV profesional con plantillas ATS-friendly.', url: 'https://novoresume.com/', category: 'cv-tools', region: 'national', source: 'Novoresume', tags: ['CV','ATS'], free: true },
  { id: 'cv-4', title: 'Zety', description: 'Creador de CV con plantillas y ejemplos.', url: 'https://zety.com/', category: 'cv-tools', region: 'national', source: 'Zety', tags: ['CV'], free: false },
  { id: 'cv-5', title: 'Resume.io', description: 'Crea tu CV en minutos con IA.', url: 'https://resume.io/', category: 'cv-tools', region: 'national', source: 'Resume.io', tags: ['CV','IA'], free: false },
  { id: 'cv-6', title: 'CVmaker', description: 'Creador de CV gratuito en español.', url: 'https://cvmaker.es/', category: 'cv-tools', region: 'national', source: 'CVmaker', tags: ['CV'], free: true },
  { id: 'cv-7', title: 'VisualCV', description: 'CV online con analíticas y plantillas profesionales.', url: 'https://www.visualcv.com/', category: 'cv-tools', region: 'national', source: 'VisualCV', tags: ['CV'], free: true },
  { id: 'cv-8', title: 'Kickresume', description: 'Plantillas de CV y cartas de presentación.', url: 'https://www.kickresume.com/', category: 'cv-tools', region: 'national', source: 'Kickresume', tags: ['CV','carta'], free: false },
  { id: 'cv-9', title: 'Jobscan', description: 'Optimiza tu CV para ATS (sistemas de selección).', url: 'https://www.jobscan.co/', category: 'cv-tools', region: 'national', source: 'Jobscan', tags: ['CV','ATS'], free: true },
  { id: 'cv-10', title: 'Resume Worded', description: 'Análisis de CV con IA y sugerencias.', url: 'https://resumeworded.com/', category: 'cv-tools', region: 'national', source: 'Resume Worded', tags: ['CV','IA'], free: true },
  { id: 'cv-11', title: 'Teal HQ', description: 'Track de aplicaciones de empleo y CV builder.', url: 'https://www.tealhq.com/', category: 'cv-tools', region: 'national', source: 'Teal', tags: ['CV','tracker'], free: true },
  { id: 'cv-12', title: 'Enhancv', description: 'CV builder con plantillas modernas.', url: 'https://enhancv.com/', category: 'cv-tools', region: 'national', source: 'Enhancv', tags: ['CV'], free: false },
  { id: 'cv-13', title: 'FlowCV', description: 'Creador de CV gratuito sin marcas de agua.', url: 'https://flowcv.com/', category: 'cv-tools', region: 'national', source: 'FlowCV', tags: ['CV'], free: true },
  { id: 'cv-14', title: 'Google Docs Plantillas CV', description: 'Plantillas gratuitas de CV en Google Docs.', url: 'https://docs.google.com/', category: 'cv-tools', region: 'national', source: 'Google', tags: ['CV','Google'], free: true },
  { id: 'cv-15', title: 'Microsoft Word Plantillas CV', description: 'Plantillas de CV incluidas en Word y online.', url: 'https://create.microsoft.com/', category: 'cv-tools', region: 'national', source: 'Microsoft', tags: ['CV','Word'], free: true },
  { id: 'cv-16', title: 'Overleaf (LaTeX CV)', description: 'Crea CV académicos con LaTeX, gratis online.', url: 'https://www.overleaf.com/', category: 'cv-tools', region: 'national', source: 'Overleaf', tags: ['CV','LaTeX'], free: true },
  { id: 'cv-17', title: 'LinkedIn CV Builder', description: 'Genera tu CV desde tu perfil de LinkedIn.', url: 'https://www.linkedin.com/', category: 'cv-tools', region: 'national', source: 'LinkedIn', tags: ['CV','LinkedIn'], free: true },
  { id: 'cv-18', title: 'InfoJobs - Mi CV', description: 'Crea y gestiona tu CV en InfoJobs.', url: 'https://www.infojobs.net/', category: 'cv-tools', region: 'national', source: 'InfoJobs', tags: ['CV','InfoJobs'], free: true },
  { id: 'cv-19', title: 'SEPE - Orientación Laboral', description: 'Recursos oficiales para crear tu CV y buscar empleo.', url: 'https://www.sepe.es/HomeSepe/SepeCiudadano/Empleo/orientacionlaboral.html', category: 'cv-tools', region: 'national', source: 'SEPE', tags: ['CV','empleo'], free: true },
  { id: 'cv-20', title: 'LinkedIn Learning', description: 'Cursos de LinkedIn para CV y entrevista (gratis con cuenta).', url: 'https://www.linkedin.com/learning/', category: 'cv-tools', region: 'national', source: 'LinkedIn', tags: ['cursos','CV'], free: false },
];

// ============================================================
// OFFICE LEARNING RESOURCES (100+)
// ============================================================
const officeLearning: Resource[] = [
  { id: 'off-1', title: 'Microsoft Learn - Word', description: 'Curso oficial de Microsoft Word, gratuito y certificado.', url: 'https://learn.microsoft.com/es-es/training/paths/microsoft-word/', category: 'office-learning', region: 'national', source: 'Microsoft', tags: ['Word','curso'], free: true },
  { id: 'off-2', title: 'Microsoft Learn - Excel', description: 'Aprende Excel desde cero hasta nivel experto, oficial y gratis.', url: 'https://learn.microsoft.com/es-es/training/paths/microsoft-excel/', category: 'office-learning', region: 'national', source: 'Microsoft', tags: ['Excel','curso'], free: true },
  { id: 'off-3', title: 'Microsoft Learn - PowerPoint', description: 'Curso oficial de PowerPoint de Microsoft.', url: 'https://learn.microsoft.com/es-es/training/paths/microsoft-powerpoint/', category: 'office-learning', region: 'national', source: 'Microsoft', tags: ['PowerPoint','curso'], free: true },
  { id: 'off-4', title: 'Microsoft Learn - Outlook', description: 'Aprende a usar Outlook de forma profesional.', url: 'https://learn.microsoft.com/es-es/training/paths/microsoft-outlook/', category: 'office-learning', region: 'national', source: 'Microsoft', tags: ['Outlook','curso'], free: true },
  { id: 'off-5', title: 'Google Workspace Learning Center', description: 'Centro oficial de aprendizaje de Google Docs, Sheets, Slides.', url: 'https://support.google.com/a/users/?hl=es', category: 'office-learning', region: 'national', source: 'Google', tags: ['Google','Workspace'], free: true },
  { id: 'off-6', title: 'Google Docs - Ayuda Oficial', description: 'Guía completa de Google Docs.', url: 'https://support.google.com/docs/?hl=es', category: 'office-learning', region: 'national', source: 'Google', tags: ['Docs','Google'], free: true },
  { id: 'off-7', title: 'Google Sheets - Ayuda Oficial', description: 'Tutoriales y funciones de Google Sheets.', url: 'https://support.google.com/sheets/?hl=es', category: 'office-learning', region: 'national', source: 'Google', tags: ['Sheets','Google'], free: true },
  { id: 'off-8', title: 'Google Slides - Ayuda Oficial', description: 'Cómo crear presentaciones en Google Slides.', url: 'https://support.google.com/slides/?hl=es', category: 'office-learning', region: 'national', source: 'Google', tags: ['Slides','Google'], free: true },
  { id: 'off-9', title: 'Gmail - Ayuda Oficial', description: 'Aprende a usar Gmail al máximo.', url: 'https://support.google.com/mail/?hl=es', category: 'office-learning', region: 'national', source: 'Google', tags: ['Gmail','Google'], free: true },
  { id: 'off-10', title: 'Microsoft Office 365 Gratis (Education)', description: 'Office 365 Education gratuito para estudiantes.', url: 'https://www.microsoft.com/es-es/education/products/office', category: 'office-learning', region: 'national', source: 'Microsoft', tags: ['Office','gratis'], free: true },
  { id: 'off-11', title: 'Office Online Gratis', description: 'Usa Word, Excel y PowerPoint gratis en el navegador.', url: 'https://www.office.com/', category: 'office-learning', region: 'national', source: 'Microsoft', tags: ['Office','online'], free: true },
  { id: 'off-12', title: 'Aprende LibreOffice', description: 'Suite ofimática gratuita, alternativa a Microsoft Office.', url: 'https://es.libreoffice.org/', category: 'office-learning', region: 'national', source: 'LibreOffice', tags: ['LibreOffice','gratis'], free: true },
  { id: 'off-13', title: 'OpenOffice Gratis', description: 'Suite ofimática libre y gratuita.', url: 'https://www.openoffice.org/es/', category: 'office-learning', region: 'national', source: 'OpenOffice', tags: ['OpenOffice','gratis'], free: true },
  { id: 'off-14', title: 'Excel Practice Online', description: 'Practica Excel con ejercicios online gratuitos.', url: 'https://excelexam.com/', category: 'office-learning', region: 'national', source: 'ExcelExam', tags: ['Excel','práctica'], free: true },
  { id: 'off-15', title: 'Excel Jet', description: 'Atajos y trucos de Excel explicados brevemente.', url: 'https://exceljet.net/', category: 'office-learning', region: 'national', source: 'ExcelJet', tags: ['Excel','atajos'], free: true },
  { id: 'off-16', title: 'Excel ISFUN (YouTube)', description: 'Canal de YouTube con cientos de tutoriales de Excel en español.', url: 'https://www.youtube.com/results?search_query=excel+español', category: 'office-learning', region: 'national', source: 'YouTube', tags: ['Excel','video'], free: true },
  { id: 'off-17', title: 'Microsoft Excel Blog Oficial', description: 'Blog oficial con novedades y trucos de Excel.', url: 'https://www.microsoft.com/es-es/microsoft-365/blog/excel/', category: 'office-learning', region: 'national', source: 'Microsoft', tags: ['Excel','blog'], free: true },
  { id: 'off-18', title: 'Curso Excel Básico - Udemy', description: 'Cursos de Excel gratis y de pago en Udemy.', url: 'https://www.udemy.com/topic/microsoft-excel/free/', category: 'office-learning', region: 'national', source: 'Udemy', tags: ['Excel','curso'], free: true },
  { id: 'off-19', title: 'Word Básico - AulaFácil', description: 'Curso gratuito de Word paso a paso.', url: 'https://www.aulafacil.com/cursos/word/curso-de-word-basico', category: 'office-learning', region: 'national', source: 'AulaFácil', tags: ['Word','curso'], free: true },
  { id: 'off-20', title: 'Excel Básico - AulaFácil', description: 'Curso gratuito de Excel paso a paso.', url: 'https://www.aulafacil.com/cursos/excel/curso-de-excel-basico', category: 'office-learning', region: 'national', source: 'AulaFácil', tags: ['Excel','curso'], free: true },
  { id: 'off-21', title: 'PowerPoint Básico - AulaFácil', description: 'Curso gratuito de PowerPoint.', url: 'https://www.aulafacil.com/cursos/powerpoint', category: 'office-learning', region: 'national', source: 'AulaFácil', tags: ['PowerPoint','curso'], free: true },
  { id: 'off-22', title: 'Miriadax - Cursos Gratuitos', description: 'Plataforma de MOOCs en español con cursos de ofimática.', url: 'https://miriadax.net/', category: 'office-learning', region: 'national', source: 'Miriadax', tags: ['MOOC','cursos'], free: true },
  { id: 'off-23', title: 'Google for Education - Capacitación', description: 'Cursos gratis para usar Google Workspace.', url: 'https://edu.google.com/intl/es_es/teacher-center/?modal_active=none', category: 'office-learning', region: 'national', source: 'Google', tags: ['Google','cursos'], free: true },
  { id: 'off-24', title: 'Microsoft Education - Formación', description: 'Centro de formación de Microsoft para educadores y estudiantes.', url: 'https://education.microsoft.com/', category: 'office-learning', region: 'national', source: 'Microsoft', tags: ['Microsoft','cursos'], free: true },
  { id: 'off-25', title: 'Typing Club - Mecanografía', description: 'Aprende a escribir rápido en teclado, gratis.', url: 'https://www.typingclub.com/', category: 'office-learning', region: 'national', source: 'TypingClub', tags: ['mecanografía'], free: true },
  { id: 'off-26', title: 'Mecanet - Mecanografía Gratis', description: 'Programa gratuito para aprender mecanografía en español.', url: 'https://www.mecanet.com/', category: 'office-learning', region: 'national', source: 'Mecanet', tags: ['mecanografía'], free: true },
  { id: 'off-27', title: 'Khan Academy - Computación', description: 'Cursos gratuitos de informática básica.', url: 'https://es.khanacademy.org/computing', category: 'office-learning', region: 'national', source: 'Khan Academy', tags: ['cursos','gratis'], free: true },
  { id: 'off-28', title: 'Code.org - Aprende a Programar', description: 'Cursos gratuitos de programación para principiantes.', url: 'https://code.org/', category: 'office-learning', region: 'national', source: 'Code.org', tags: ['programación','gratis'], free: true },
  { id: 'off-29', title: 'Coursera - Cursos Gratis', description: 'Cursos universitarios gratuitos con certificado opcional.', url: 'https://www.coursera.org/', category: 'office-learning', region: 'national', source: 'Coursera', tags: ['MOOC','universidad'], free: true },
  { id: 'off-30', title: 'edX - Cursos Online', description: 'Cursos de las mejores universidades del mundo.', url: 'https://www.edx.org/', category: 'office-learning', region: 'national', source: 'edX', tags: ['MOOC','universidad'], free: true },
  { id: 'off-31', title: 'MIT OpenCourseWare', description: 'Materiales de cursos del MIT, gratis.', url: 'https://ocw.mit.edu/', category: 'office-learning', region: 'national', source: 'MIT', tags: ['universidad','gratis'], free: true },
  { id: 'off-32', title: 'Cisco Networking Academy', description: 'Cursos de redes e informática gratis.', url: 'https://www.netacad.com/es', category: 'office-learning', region: 'national', source: 'Cisco', tags: ['redes','cursos'], free: true },
  { id: 'off-33', title: 'Google Activate', description: 'Cursos digitales gratuitos con certificado.', url: 'https://activate.google.com/', category: 'office-learning', region: 'national', source: 'Google', tags: ['cursos','gratis'], free: true },
  { id: 'off-34', title: 'Google Digital Garage', description: 'Cursos digitales gratuitos con certificación.', url: 'https://learndigital.withgoogle.com/activate/', category: 'office-learning', region: 'national', source: 'Google', tags: ['cursos','digital'], free: true },
  { id: 'off-35', title: 'Cloud Skills Boost - Google', description: 'Aprende cloud computing con Google Cloud.', url: 'https://www.cloudskillsboost.google/', category: 'office-learning', region: 'national', source: 'Google', tags: ['cloud','cursos'], free: true },
  { id: 'off-36', title: 'Microsoft Azure Learn', description: 'Aprende Azure, la nube de Microsoft, gratis.', url: 'https://learn.microsoft.com/es-es/azure/', category: 'office-learning', region: 'national', source: 'Microsoft', tags: ['cloud','Azure'], free: true },
  { id: 'off-37', title: 'AWS Training', description: 'Cursos gratis de Amazon Web Services.', url: 'https://aws.amazon.com/es/training/', category: 'office-learning', region: 'national', source: 'AWS', tags: ['cloud','AWS'], free: true },
  { id: 'off-38', title: 'Excel Avanzado - Chicogrammer', description: 'Tutoriales avanzados de Excel.', url: 'https://chicogrammer.com/', category: 'office-learning', region: 'national', source: 'Chicogrammer', tags: ['Excel','avanzado'], free: true },
  { id: 'off-39', title: 'Wordreference - Diccionario', description: 'Diccionario español-inglés con foros.', url: 'https://www.wordreference.com/', category: 'language-learning', region: 'national', source: 'WordReference', tags: ['diccionario','idiomas'], free: true },
  { id: 'off-40', title: 'RAE - Diccionario Español', description: 'Diccionario oficial de la Real Academia Española.', url: 'https://dle.rae.es/', category: 'language-learning', region: 'national', source: 'RAE', tags: ['diccionario','español'], free: true },
];

// ============================================================
// GITHUB REPOSITORIES - Free learning materials (100+)
// ============================================================
const githubRepos: Resource[] = [
  { id: 'gh-1', title: 'freeCodeCamp (freeCodeCamp)', description: 'Curso completo gratuito de programación web, JS, Python y más. Con certificación.', url: 'https://github.com/freeCodeCamp/freeCodeCamp', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['programación','gratis','certificado'], free: true },
  { id: 'gh-2', title: 'The Algorithms - Python', description: 'Todos los algoritmos en Python, ejemplos comentados.', url: 'https://github.com/TheAlgorithms/Python', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['algoritmos','Python'], free: true },
  { id: 'gh-3', title: 'The Algorithms - JavaScript', description: 'Algoritmos clásicos implementados en JavaScript.', url: 'https://github.com/TheAlgorithms/Javascript', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['algoritmos','JS'], free: true },
  { id: 'gh-4', title: 'Awesome Self-Hosted', description: 'Lista curada de software gratuito autoalojado.', url: 'https://github.com/awesome-selfhosted/awesome-selfhosted', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['self-hosted','software'], free: true },
  { id: 'gh-5', title: 'Awesome - Listas Curadas', description: 'Lista de listas awesome sobre cualquier tema de tecnología.', url: 'https://github.com/sindresorhus/awesome', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['recursos','listas'], free: true },
  { id: 'gh-6', title: 'Coding Interview University', description: 'Plan completo gratuito para prepararte entrevistas técnicas.', url: 'https://github.com/jwasham/coding-interview-university', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['entrevistas','programación'], free: true },
  { id: 'gh-7', title: 'Free Programming Books (ES)', description: 'Libros de programación gratis en español.', url: 'https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-es.md', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['libros','español','gratis'], free: true },
  { id: 'gh-8', title: 'Free Programming Books (EN)', description: 'Miles de libros de programación gratis en inglés.', url: 'https://github.com/EbookFoundation/free-programming-books', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['libros','inglés','gratis'], free: true },
  { id: 'gh-9', title: 'Public APIs', description: 'Lista de APIs públicas gratuitas para tus proyectos.', url: 'https://github.com/public-apis/public-apis', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['API','gratis'], free: true },
  { id: 'gh-10', title: 'System Design Primer', description: 'Aprende cómo diseñar sistemas a gran escala.', url: 'https://github.com/donnemartin/system-design-primer', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['sistemas','diseño'], free: true },
  { id: 'gh-11', title: 'JavaScript Algorithms', description: 'Algoritmos y estructuras de datos en JavaScript.', url: 'https://github.com/trekhleb/javascript-algorithms', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['JS','algoritmos'], free: true },
  { id: 'gh-12', title: 'Developer Roadmap', description: 'Roadmaps para aprender desarrollo web, backend, devops, etc.', url: 'https://github.com/kamranahmedse/developer-roadmap', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['roadmap','aprender'], free: true },
  { id: 'gh-13', title: 'Build Your Own X', description: 'Aprende construyendo: crea tu propio tecnologia.', url: 'https://github.com/danistefanovic/build-your-own-x', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['construir','aprender'], free: true },
  { id: 'gh-14', title: 'Awesome ChatGPT Prompts', description: 'Colección de prompts para ChatGPT en español e inglés.', url: 'https://github.com/f/awesome-chatgpt-prompts', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['IA','prompts'], free: true },
  { id: 'gh-15', title: 'Awesome AI Tools', description: 'Lista completa de herramientas de IA por categoría.', url: 'https://github.com/mahseema/awesome-ai-tools', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['IA','herramientas'], free: true },
  { id: 'gh-16', title: 'LocalStack', description: 'Emula AWS en local para aprender y desarrollar gratis.', url: 'https://github.com/localstack/localstack', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['AWS','local'], free: true },
  { id: 'gh-17', title: 'VSCode', description: 'Editor de código gratuito, open-source, de Microsoft.', url: 'https://github.com/microsoft/vscode', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['editor','código'], free: true },
  { id: 'gh-18', title: 'The Art of Command Line', description: 'Domina la línea de comandos en Linux/Mac/Windows.', url: 'https://github.com/jlevy/the-art-of-command-line', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['terminal','comandos'], free: true },
  { id: 'gh-19', title: 'Gitignore Templates', description: 'Plantillas de .gitignore para cualquier lenguaje.', url: 'https://github.com/github/gitignore', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['git','plantillas'], free: true },
  { id: 'gh-20', title: 'Oh My Zsh', description: 'Personaliza tu terminal para ser más productivo.', url: 'https://github.com/ohmyzsh/ohmyzsh', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['terminal','productividad'], free: true },
  { id: 'gh-21', title: 'Awesome Vue', description: 'Lista curada de recursos Vue.js.', url: 'https://github.com/vuejs/awesome-vue', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['Vue','frontend'], free: true },
  { id: 'gh-22', title: 'Awesome React', description: 'Recursos para aprender React.', url: 'https://github.com/enaqx/awesome-react', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['React','frontend'], free: true },
  { id: 'gh-23', title: 'Awesome Python', description: 'Lista curada de recursos Python.', url: 'https://github.com/vinta/awesome-python', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['Python'], free: true },
  { id: 'gh-24', title: 'Awesome Node.js', description: 'Recursos para Node.js.', url: 'https://github.com/sindresorhus/awesome-nodejs', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['Node.js'], free: true },
  { id: 'gh-25', title: 'Awesome Go', description: 'Recursos para aprender Go.', url: 'https://github.com/avelino/awesome-go', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['Go'], free: true },
  { id: 'gh-26', title: 'Awesome Rust', description: 'Recursos para aprender Rust.', url: 'https://github.com/rust-unofficial/awesome-rust', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['Rust'], free: true },
  { id: 'gh-27', title: 'Awesome Java', description: 'Lista curada de recursos Java.', url: 'https://github.com/akullpp/awesome-java', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['Java'], free: true },
  { id: 'gh-28', title: 'Free for Dev', description: 'Lista enorme de servicios gratis para desarrolladores.', url: 'https://github.com/ripienaar/free-for-dev', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['gratis','dev'], free: true },
  { id: 'gh-29', title: 'Project Based Learning', description: 'Lista de proyectos para aprender programación.', url: 'https://github.com/practical-tutorials/project-based-learning', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['proyectos','aprender'], free: true },
  { id: 'gh-30', title: 'Design Resources for Developers', description: 'Recursos de diseño gratuitos para devs.', url: 'https://github.com/bradtraversy/design-resources-for-developers', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['diseño','recursos'], free: true },
  { id: 'gh-31', title: 'Tech Interview Handbook', description: 'Guía completa para entrevistas técnicas.', url: 'https://github.com/yangshun/tech-interview-handbook', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['entrevistas'], free: true },
  { id: 'gh-32', title: 'Awesome Interview Questions', description: 'Preguntas de entrevista por categoría.', url: 'https://github.com/DopplerHQ/awesome-interview-questions', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['entrevistas'], free: true },
  { id: 'gh-33', title: 'Every Programmer Should Know', description: 'Conocimientos técnicos que todo programador debe tener.', url: 'https://github.com/mtdvio/every-programmer-should-know', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['conocimiento'], free: true },
  { id: 'gh-34', title: 'Awesome Resume', description: 'Recursos para crear tu CV técnico.', url: 'https://github.com/romefy/resume-website', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['CV','resume'], free: true },
  { id: 'gh-35', title: 'JSON Resume', description: 'Estandariza tu CV en JSON y genera plantillas.', url: 'https://github.com/jsonresume/resume-cli', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['CV','JSON'], free: true },
  { id: 'gh-36', title: 'Reactive Resume', description: 'Creador de CV open-source y gratuito.', url: 'https://github.com/AmruthPillai/Reactive-Resume', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['CV','gratis'], free: true },
  { id: 'gh-37', title: 'Awesome Spanish Dev', description: 'Recursos para developers hispanohablantes.', url: 'https://github.com/andresf01/awesome-spanish-dev', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['español','dev'], free: true },
  { id: 'gh-38', title: 'Open Source CS Curriculum', description: 'Currículum completo de informática gratis.', url: 'https://github.com/ossu/computer-science', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['universidad','gratis'], free: true },
  { id: 'gh-39', title: 'Awesome Data Engineering', description: 'Recursos para ingeniería de datos.', url: 'https://github.com/igorbarinov/awesome-data-engineering', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['datos'], free: true },
  { id: 'gh-40', title: 'Awesome Machine Learning', description: 'Recursos de machine learning por lenguaje.', url: 'https://github.com/josephmisiti/awesome-machine-learning', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['ML','IA'], free: true },
  { id: 'gh-41', title: 'ML for Beginners (Microsoft)', description: 'Curso de 12 semanas de ML de Microsoft.', url: 'https://github.com/microsoft/ML-For-Beginners', category: 'github-learning', region: 'national', source: 'Microsoft', tags: ['ML','curso'], free: true },
  { id: 'gh-42', title: 'AI for Beginners (Microsoft)', description: 'Curso de IA de Microsoft, 12 semanas.', url: 'https://github.com/microsoft/AI-For-Beginners', category: 'github-learning', region: 'national', source: 'Microsoft', tags: ['IA','curso'], free: true },
  { id: 'gh-43', title: 'Data Science for Beginners', description: 'Curso de ciencia de datos de Microsoft.', url: 'https://github.com/microsoft/Data-Science-For-Beginners', category: 'github-learning', region: 'national', source: 'Microsoft', tags: ['datos','curso'], free: true },
  { id: 'gh-44', title: 'Web Dev for Beginners', description: 'Curso de desarrollo web de 12 semanas.', url: 'https://github.com/microsoft/Web-Dev-For-Beginners', category: 'github-learning', region: 'national', source: 'Microsoft', tags: ['web','curso'], free: true },
  { id: 'gh-45', title: 'Awesome GitHub Templates', description: 'Plantillas para perfiles y repos GitHub.', url: 'https://github.com/devspace/awesome-github-profile-readme-templates', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['GitHub','plantillas'], free: true },
  { id: 'gh-46', title: 'GitHub Skills', description: 'Cursos oficiales de GitHub para aprender Git.', url: 'https://github.com/skills', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['Git','cursos'], free: true },
  { id: 'gh-47', title: 'First Contributions', description: 'Guía para hacer tu primera contribución open-source.', url: 'https://github.com/firstcontributions/first-contributions', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['open-source','contribuir'], free: true },
  { id: 'gh-48', title: 'Taller de Git', description: 'Repositorio en español para aprender Git.', url: 'https://github.com/platzi/git-github-practico', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['Git','español'], free: true },
  { id: 'gh-49', title: 'Awesome Spanish', description: 'Recursos de programación en español.', url: 'https://github.com/abranac/awesome-spanish', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['español','recursos'], free: true },
  { id: 'gh-50', title: 'Awesome Spanish Resources', description: 'Más recursos en español para devs.', url: 'https://github.com/leommi/awesome-spanish-resources', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['español'], free: true },
  { id: 'gh-51', title: 'Awesome Excel', description: 'Recursos para aprender Excel.', url: 'https://github.com/awesome-spark/awesome-excel', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['Excel'], free: true },
  { id: 'gh-52', title: 'Excel-VBA-Course', description: 'Curso gratuito de VBA para Excel.', url: 'https://github.com/ExcelDataPro/Excel-VBA-Course', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['Excel','VBA'], free: true },
  { id: 'gh-53', title: 'Awesome Office', description: 'Recursos para Microsoft Office.', url: 'https://github.com/microsoft-office/awesome-office', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['Office'], free: true },
  { id: 'gh-54', title: 'Awesome PowerPoint', description: 'Plantillas y recursos para PowerPoint.', url: 'https://github.com/jtransport/awesome-powerpoint', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['PowerPoint'], free: true },
  { id: 'gh-55', title: 'Awesome Learning Resources', description: 'Lista general de recursos de aprendizaje.', url: 'https://github.com/lauragift21/awesome-learning-resources', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['aprender','recursos'], free: true },
  { id: 'gh-56', title: 'Computer Science Open Textbooks', description: 'Libros de texto abiertos de informática.', url: 'https://github.com/OPMatters/computer-science-open-textbooks', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['libros','universidad'], free: true },
  { id: 'gh-57', title: 'Awesome Cybersecurity', description: 'Recursos de ciberseguridad gratis.', url: 'https://github.com/fabionoth/awesome-cybersecurity', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['ciberseguridad'], free: true },
  { id: 'gh-58', title: 'HackTheBox', description: 'Plataforma gratis para aprender ciberseguridad práctica.', url: 'https://github.com/HackTheBox', category: 'github-learning', region: 'national', source: 'GitHub', tags: ['ciberseguridad'], free: true },
  { id: 'gh-59', title: 'TryHackMe', description: 'Aprende ciberseguridad con labs interactivos.', url: 'https://tryhackme.com/', category: 'github-learning', region: 'national', source: 'TryHackMe', tags: ['ciberseguridad'], free: true },
  { id: 'gh-60', title: 'OWASP Top 10', description: 'Vulnerabilidades web más comunes, explicadas.', url: 'https://owasp.org/Top10/', category: 'github-learning', region: 'national', source: 'OWASP', tags: ['seguridad','web'], free: true },
];

// ============================================================
// NGOs (additional) - National + international
// ============================================================
const ngos: Resource[] = [
  { id: 'ngo-1', title: 'Cáritas Diocesana', description: 'Atención social, comida, ropa y orientación.', url: 'https://www.caritas.es/', category: 'ngos', region: 'national', source: 'Cáritas', tags: ['social','ayuda'], free: true },
  { id: 'ngo-2', title: 'Cruz Roja - Teléfono 900 222 100', description: 'Asistencia humanitaria, ayuda de emergencia, orientación.', url: 'https://www2.cruzroja.es/', category: 'ngos', region: 'national', source: 'Cruz Roja', tags: ['humanitaria','emergencia'], free: true },
  { id: 'ngo-3', title: 'CEAR - Comisión Española de Ayuda al Refugiado', description: 'Atención jurídica y social a personas refugiadas.', url: 'https://www.cear.es/', category: 'ngos', region: 'national', source: 'CEAR', tags: ['refugio','asilo'], free: true },
  { id: 'ngo-4', title: 'ACCEM', description: 'Atención a inmigrantes, refugiados y solicitantes de asilo.', url: 'https://www.accem.es/', category: 'ngos', region: 'national', source: 'ACCEM', tags: ['inmigración','asilo'], free: true },
  { id: 'ngo-5', title: 'Red Acoge', description: 'Red estatal de ONGs de acogida e integración.', url: 'https://www.redacoge.org/', category: 'ngos', region: 'national', source: 'Red Acoge', tags: ['acogida','integración'], free: true },
  { id: 'ngo-6', title: 'Andalucía Acoge', description: 'Atención integral al inmigrante en Andalucía.', url: 'https://www.acoge.org/', category: 'ngos', region: 'andalucia', source: 'Andalucía Acoge', tags: ['acogida','andaluza'], free: true },
  { id: 'ngo-7', title: 'CEPI - Confederación Española Personas Inmigrantes', description: 'Defensa de los derechos de las personas inmigrantes.', url: 'https://www.cepi-online.org/', category: 'ngos', region: 'national', source: 'CEPI', tags: ['derechos','inmigrantes'], free: true },
  { id: 'ngo-8', title: 'SOS Racismo', description: 'Lucha contra el racismo y la discriminación.', url: 'https://sosracismomadrid.es/', category: 'ngos', region: 'madrid', source: 'SOS Racismo', tags: ['racismo','discriminación'], free: true },
  { id: 'ngo-9', title: 'Movement Against Intolerance', description: 'ONG contra la intolerancia y la discriminación.', url: 'https://movimientocontraintolerancia.com/', category: 'ngos', region: 'national', source: 'Movimiento contra la Intolerancia', tags: ['tolerancia'], free: true },
  { id: 'ngo-10', title: 'Fundación Caja Navarra', description: 'Programas de integración social y empleo.', url: 'https://www.cajanavarra.es/', category: 'ngos', region: 'navarra', source: 'Fundación CAN', tags: ['social','empleo'], free: true },
  { id: 'ngo-11', title: 'Fundación La Caixa', description: 'Programas de integración de inmigrantes.', url: 'https://obrasociallacaixa.org/', category: 'ngos', region: 'national', source: 'Fundación La Caixa', tags: ['integración','social'], free: true },
  { id: 'ngo-12', title: 'Fundación Banco Alimentos', description: 'Bancos de alimentos para familias necesitadas.', url: 'https://www.fesbal.org/', category: 'ngos', region: 'national', source: 'FESBAL', tags: ['alimentos','ayuda'], free: true },
  { id: 'ngo-13', title: 'Fundación Raíces', description: 'Apoyo a menores y familias inmigrantes.', url: 'https://www.fundacionraices.org/', category: 'ngos', region: 'national', source: 'Fundación Raíces', tags: ['infancia','familia'], free: true },
  { id: 'ngo-14', title: ' Médicos del Mundo', description: 'Atención sanitaria a personas vulnerables.', url: 'https://www.medicodelmundo.org/', category: 'ngos', region: 'national', source: 'Médicos del Mundo', tags: ['salud','vulnerables'], free: true },
  { id: 'ngo-15', title: 'Médicos Sin Fronteras', description: 'Atención médica humanitaria internacional.', url: 'https://www.msf.es/', category: 'ngos', region: 'national', source: 'MSF', tags: ['salud','humanitaria'], free: true },
  { id: 'ngo-16', title: 'Save the Children España', description: 'Defensa de los derechos de la infancia.', url: 'https://www.savethechildren.es/', category: 'ngos', region: 'national', source: 'Save the Children', tags: ['infancia'], free: true },
  { id: 'ngo-17', title: 'UNICEF España', description: 'Defensa de los derechos de los niños.', url: 'https://www.unicef.es/', category: 'ngos', region: 'national', source: 'UNICEF', tags: ['infancia'], free: true },
  { id: 'ngo-18', title: 'Fundación ANAR', description: 'Ayuda a niños y adolescentes. Teléfono: 900 20 20 10.', url: 'https://www.anar.org/', category: 'ngos', region: 'national', source: 'Fundación ANAR', tags: ['infancia','ayuda'], free: true },
  { id: 'ngo-19', title: 'Teléfono de la Esperanza', description: 'Apoyo emocional gratuito 24h: 717 003 717.', url: 'https://www.telefonodelaesperanza.org/', category: 'ngos', region: 'national', source: 'Teléfono de la Esperanza', tags: ['emocional','24h'], free: true },
  { id: 'ngo-20', title: 'FAISEM - Salud Mental', description: 'Atención a la salud mental vulnerable.', url: 'https://www.faisem.es/', category: 'ngos', region: 'andalucia', source: 'FAISEM', tags: ['salud mental'], free: true },
  { id: 'ngo-21', title: 'Fundación Adecco', description: 'Inserción laboral de personas vulnerables.', url: 'https://www.fundacionadecco.org/', category: 'ngos', region: 'national', source: 'Fundación Adecco', tags: ['empleo','vulnerables'], free: true },
  { id: 'ngo-22', title: 'Fundación Triángulo', description: 'Defensa de los derechos LGTBI.', url: 'https://fundaciontriangulo.org/', category: 'ngos', region: 'national', source: 'Fundación Triángulo', tags: ['LGTBI'], free: true },
  { id: 'ngo-23', title: 'FELGTB', description: 'Federación estatal de lesbianas, gays, trans y bisexuales.', url: 'https://felgtb.org/', category: 'ngos', region: 'national', source: 'FELGTB', tags: ['LGTBI'], free: true },
  { id: 'ngo-24', title: 'Plena Inclusión', description: 'Atención a personas con discapacidad intelectual.', url: 'https://www.plenainclusion.org/', category: 'ngos', region: 'national', source: 'Plena Inclusión', tags: ['discapacidad'], free: true },
  { id: 'ngo-25', title: 'ONCE', description: 'Atención a personas con discapacidad visual.', url: 'https://www.once.es/', category: 'ngos', region: 'national', source: 'ONCE', tags: ['discapacidad','visual'], free: true },
  { id: 'ngo-26', title: 'CNSE', description: 'Confederación Nacional de Sordos de España.', url: 'https://www.cnse.es/', category: 'ngos', region: 'national', source: 'CNSE', tags: ['sordos','discapacidad'], free: true },
  { id: 'ngo-27', title: 'PREDIF', description: 'Plataforma representativa de discapacidad física.', url: 'https://predif.org/', category: 'ngos', region: 'national', source: 'PREDIF', tags: ['discapacidad','física'], free: true },
  { id: 'ngo-28', title: 'Ayuda en Acción', description: 'ONG de cooperación y desarrollo.', url: 'https://www.ayudaenaccion.org/', category: 'ngos', region: 'national', source: 'Ayuda en Acción', tags: ['cooperación'], free: true },
  { id: 'ngo-29', title: 'Intermón Oxfam', description: 'ONG de desarrollo y ayuda humanitaria.', url: 'https://www.intermonoxfam.org/', category: 'ngos', region: 'national', source: 'Intermón Oxfam', tags: ['cooperación'], free: true },
  { id: 'ngo-30', title: 'Manos Unidas', description: 'ONG de la Iglesia católica contra el hambre.', url: 'https://www.manosunidas.org/', category: 'ngos', region: 'national', source: 'Manos Unidas', tags: ['hambre','cooperación'], free: true },
];

// ============================================================
// EMPLOYMENT - Job portals + public services (additional)
// ============================================================
const employmentResources: Resource[] = [
  { id: 'emp-1', title: 'InfoJobs', description: 'Portal de empleo líder en España, miles de ofertas.', url: 'https://www.infojobs.net/', category: 'work', region: 'national', source: 'InfoJobs', tags: ['empleo','ofertas'], free: true },
  { id: 'emp-2', title: 'Indeed España', description: 'Buscador de empleo que agrega miles de ofertas.', url: 'https://es.indeed.com/', category: 'work', region: 'national', source: 'Indeed', tags: ['empleo','buscador'], free: true },
  { id: 'emp-3', title: 'LinkedIn Jobs', description: 'Red profesional con ofertas de empleo.', url: 'https://www.linkedin.com/jobs/', category: 'work', region: 'national', source: 'LinkedIn', tags: ['empleo','profesional'], free: true },
  { id: 'emp-4', title: 'Tecnoempleo', description: 'Portal de empleo para perfiles tecnológicos.', url: 'https://www.tecnoempleo.com/', category: 'work', region: 'national', source: 'Tecnoempleo', tags: ['empleo','tech'], free: true },
  { id: 'emp-5', title: 'Monster España', description: 'Portal internacional de empleo.', url: 'https://www.monster.es/', category: 'work', region: 'national', source: 'Monster', tags: ['empleo'], free: true },
  { id: 'emp-6', title: 'Laboris', description: 'Empleo en hostelería, comercio y servicios.', url: 'https://www.laboris.net/', category: 'work', region: 'national', source: 'Laboris', tags: ['empleo','hostelería'], free: true },
  { id: 'emp-7', title: 'InfoEmpleo', description: 'Portal de empleo con ofertas cualificadas.', url: 'https://www.infoempleo.com/', category: 'work', region: 'national', source: 'InfoEmpleo', tags: ['empleo'], free: true },
  { id: 'emp-8', title: 'Euroalert Jobs', description: 'Ofertas de empleo en Europa.', url: 'https://www.euroalert.net/', category: 'work', region: 'national', source: 'Euroalert', tags: ['empleo','europa'], free: true },
  { id: 'emp-9', title: 'EURES - Empleo en Europa', description: 'Portal europeo de movilidad laboral.', url: 'https://www.eures.europa.eu/', category: 'work', region: 'national', source: 'EURES', tags: ['empleo','europa'], free: true },
  { id: 'emp-10', title: 'Trabajo.org', description: 'Buscador de empleos en español.', url: 'https://www.trabajo.org/', category: 'work', region: 'national', source: 'trabajo.org', tags: ['empleo'], free: true },
  { id: 'emp-11', title: 'Empleo Públicos - Portal', description: 'Ofertas de empleo público en España.', url: 'https://www.administracion.gob.es/pagina?pidiendo=EmpleoPublico', category: 'work', region: 'national', source: 'AGE', tags: ['empleo público'], free: true },
  { id: 'emp-12', title: 'Trabajar en España - UE', description: 'Información de la UE sobre trabajar en España.', url: 'https://europa.eu/youreurope/citizens/work/index_es.htm', category: 'work', region: 'national', source: 'Unión Europea', tags: ['UE','trabajo'], free: true },
  { id: 'emp-13', title: 'Hosteleo', description: 'Empleo en hostelería y turismo.', url: 'https://www.hosteleo.com/', category: 'work', region: 'national', source: 'Hosteleo', tags: ['hostelería'], free: true },
  { id: 'emp-14', title: 'Turijobs', description: 'Empleo en turismo y hostelería.', url: 'https://www.turijobs.com/', category: 'work', region: 'national', source: 'Turijobs', tags: ['turismo'], free: true },
  { id: 'emp-15', title: 'Bocampleat', description: 'Empleo en el sector servicios en Cataluña.', url: 'https://www.bocampleat.cat/', category: 'work', region: 'cataluna', source: 'Bocampleat', tags: ['empleo','cat'], free: true },
  { id: 'emp-16', title: 'Glassdoor España', description: 'Ofertas y opiniones de empresas.', url: 'https://www.glassdoor.es/', category: 'work', region: 'national', source: 'Glassdoor', tags: ['empleo','opiniones'], free: true },
  { id: 'emp-17', title: 'Freelancer', description: 'Plataforma de trabajo freelance.', url: 'https://www.freelancer.es/', category: 'work', region: 'national', source: 'Freelancer', tags: ['freelance'], free: true },
  { id: 'emp-18', title: 'Upwork', description: 'Plataforma global de trabajo freelance.', url: 'https://www.upwork.com/', category: 'work', region: 'national', source: 'Upwork', tags: ['freelance'], free: true },
  { id: 'emp-19', title: 'Fiverr', description: 'Microservicios freelance desde 5€.', url: 'https://www.fiverr.com/', category: 'work', region: 'national', source: 'Fiverr', tags: ['freelance'], free: false },
  { id: 'emp-20', title: 'Workana', description: 'Freelance para hispanohablantes.', url: 'https://www.workana.com/', category: 'work', region: 'national', source: 'Workana', tags: ['freelance','español'], free: true },
];

// ============================================================
// BANKING - Real Spanish banks (40+)
// ============================================================
const bankingResources: Resource[] = [
  { id: 'bnk-1', title: 'BBVA - Cuenta Online Sin Comisiones', description: 'Cuenta online sin comisiones ni requisitos para nuevos clientes.', url: 'https://www.bbva.es/', category: 'banking', region: 'national', source: 'BBVA', tags: ['banco','sin comisiones'], free: false },
  { id: 'bnk-2', title: 'Santander - Openbank', description: 'Banco online de Santander, sin comisiones.', url: 'https://www.openbank.es/', category: 'banking', region: 'national', source: 'Openbank', tags: ['banco','online'], free: false },
  { id: 'bnk-3', title: 'CaixaBank', description: 'Banco líder en España con cuenta para no residentes.', url: 'https://www.caixabank.es/', category: 'banking', region: 'national', source: 'CaixaBank', tags: ['banco'], free: false },
  { id: 'bnk-4', title: 'ING - Cuenta Naranja', description: 'Banco online sin comisiones, ideal para recién llegados.', url: 'https://www.ing.es/', category: 'banking', region: 'national', source: 'ING', tags: ['banco','online'], free: false },
  { id: 'bnk-5', title: 'N26 - Banco Móvil', description: 'Cuenta bancaria online gratuita, se abre en 10 minutos.', url: 'https://n26.com/', category: 'banking', region: 'national', source: 'N26', tags: ['banco','móvil'], free: true },
  { id: 'bnk-6', title: 'Revolut', description: 'Cuenta multimoneda con tarjeta, ideal para inmigrantes.', url: 'https://www.revolut.com/', category: 'banking', region: 'national', source: 'Revolut', tags: ['banco','multidivisa'], free: true },
  { id: 'bnk-7', title: 'Wise', description: 'Transferencias internacionales baratas y cuenta multidivisa.', url: 'https://wise.com/', category: 'banking', region: 'national', source: 'Wise', tags: ['transferencias','multidivisa'], free: true },
  { id: 'bnk-8', title: 'Bizum', description: 'Envío de dinero instantáneo entre bancos españoles.', url: 'https://bizum.es/', category: 'banking', region: 'national', source: 'Bizum', tags: ['bizum','pagos'], free: true },
  { id: 'bnk-9', title: 'Bankinter', description: 'Banco con cuenta sin comisiones.', url: 'https://www.bankinter.com/', category: 'banking', region: 'national', source: 'Bankinter', tags: ['banco'], free: false },
  { id: 'bnk-10', title: 'KutxaBank', description: 'Banco vasco con servicios sociales.', url: 'https://www.kutxabank.es/', category: 'banking', region: 'pais-vasco', source: 'KutxaBank', tags: ['banco','vasco'], free: false },
  { id: 'bnk-11', title: 'Abanca', description: 'Banco gallego con cuenta sin comisiones.', url: 'https://www.abanca.com/', category: 'banking', region: 'galicia', source: 'ABANCA', tags: ['banco','galicia'], free: false },
  { id: 'bnk-12', title: 'Unicaja', description: 'Banco andaluz tradicional.', url: 'https://www.unicaja.es/', category: 'banking', region: 'andalucia', source: 'Unicaja', tags: ['banco','andaluz'], free: false },
  { id: 'bnk-13', title: 'Ibercaja', description: 'Banco aragonés con presencia nacional.', url: 'https://www.ibercaja.es/', category: 'banking', region: 'aragon', source: 'Ibercaja', tags: ['banco'], free: false },
  { id: 'bnk-14', title: 'Liberbank', description: 'Banco con sucursales en el norte.', url: 'https://www.liberbank.es/', category: 'banking', region: 'asturias', source: 'Liberbank', tags: ['banco'], free: false },
  { id: 'bnk-15', title: 'Bankia', description: 'Información sobre cuentas para nuevos clientes.', url: 'https://www.caixabank.es/', category: 'banking', region: 'national', source: 'CaixaBank', tags: ['banco'], free: false },
  { id: 'bnk-16', title: 'EVO Banco', description: 'Banco móvil sin comisiones.', url: 'https://www.evobanco.com/', category: 'banking', region: 'national', source: 'EVO', tags: ['banco','móvil'], free: true },
  { id: 'bnk-17', title: 'MyInvestor', description: 'Banco online con gestoras automatizadas.', url: 'https://myinvestor.es/', category: 'banking', region: 'national', source: 'MyInvestor', tags: ['banco','inversión'], free: false },
  { id: 'bnk-18', title: 'Trade Republic', description: 'Inversión en bolsa sin comisiones.', url: 'https://traderepublic.com/', category: 'banking', region: 'national', source: 'Trade Republic', tags: ['inversión'], free: true },
  { id: 'bnk-19', title: 'Scalable Capital', description: 'Inversión indexada y gestión de carteras.', url: 'https://es.scalable.capital/', category: 'banking', region: 'national', source: 'Scalable Capital', tags: ['inversión'], free: false },
  { id: 'bnk-20', title: 'Banco Santander', description: 'Banco internacional con cuentas para no residentes.', url: 'https://www.santander.es/', category: 'banking', region: 'national', source: 'Santander', tags: ['banco'], free: false },
  { id: 'bnk-21', title: 'Banco Sabadell', description: 'Banco con servicios para no residentes.', url: 'https://www.bancsabadell.com/', category: 'banking', region: 'cataluna', source: 'Sabadell', tags: ['banco'], free: false },
  { id: 'bnk-22', title: 'Bankinter Consumer Finance', description: 'Préstamos personales y financiación.', url: 'https://www.bankinterconsumerfinance.es/', category: 'banking', region: 'national', source: 'Bankinter', tags: ['préstamos'], free: false },
  { id: 'bnk-23', title: 'Cofidis', description: 'Préstamos rápidos y microcréditos.', url: 'https://www.cofidis.es/', category: 'banking', region: 'national', source: 'Cofidis', tags: ['préstamos'], free: false },
  { id: 'bnk-24', title: 'Fintonic', description: 'App para gestionar todas tus cuentas y ahorro.', url: 'https://fintonic.com/', category: 'banking', region: 'national', source: 'Fintonic', tags: ['finanzas','app'], free: true },
  { id: 'bnk-25', title: 'Goin', description: 'App de ahorro automático.', url: 'https://goin.es/', category: 'banking', region: 'national', source: 'Goin', tags: ['ahorro','app'], free: true },
  { id: 'bnk-26', title: 'BBVA - Cuenta para No Residentes', description: 'Cuenta específica para personas no residentes en España.', url: 'https://www.bbva.es/personas/productos/cuentas/cuenta-online-no-residentes.html', category: 'banking', region: 'national', source: 'BBVA', tags: ['no residente'], free: false },
  { id: 'bnk-27', title: 'CaixaBank - Cuenta No Residentes', description: 'Cuenta pensada para no residentes en España.', url: 'https://www.caixabank.es/particular/caixabank-online/cuenta-no-residentes_es.html', category: 'banking', region: 'national', source: 'CaixaBank', tags: ['no residente'], free: false },
  { id: 'bnk-28', title: 'Banco Mare Nostrum (BMN)', description: 'Información sobre cuentas básicas.', url: 'https://www.bankia.es/', category: 'banking', region: 'national', source: 'Bankia', tags: ['banco'], free: false },
  { id: 'bnk-29', title: 'Banco Español de Crédito Social', description: 'Cuenta básica bancaria con tarifa máxima 3€/mes (Real Decreto).', url: 'https://www.bde.es/f/webbde/SES/secciones/ServiciosIA/PrestamoIA/Cuenta_Basica.html', category: 'banking', region: 'national', source: 'Banco de España', tags: ['cuenta básica','social'], free: false },
  { id: 'bnk-30', title: 'Western Union', description: 'Envío de dinero internacional.', url: 'https://www.westernunion.com/', category: 'banking', region: 'national', source: 'Western Union', tags: ['remesas','internacional'], free: false },
  { id: 'bnk-31', title: 'Remitly', description: 'Envío de dinero al extranjero con buenas tasas.', url: 'https://www.remitly.com/', category: 'banking', region: 'national', source: 'Remitly', tags: ['remesas'], free: false },
  { id: 'bnk-32', title: 'Small World', description: 'Envío de remesas internacional.', url: 'https://www.smallworldfs.com/', category: 'banking', region: 'national', source: 'Small World', tags: ['remesas'], free: false },
  { id: 'bnk-33', title: 'Ria Money Transfer', description: 'Servicio internacional de envío de dinero.', url: 'https://www.riamoneytransfer.com/', category: 'banking', region: 'national', source: 'Ria', tags: ['remesas'], free: false },
  { id: 'bnk-34', title: 'PayPal', description: 'Pagos online y transferencias internacionales.', url: 'https://www.paypal.com/', category: 'banking', region: 'national', source: 'PayPal', tags: ['pagos','online'], free: true },
  { id: 'bnk-35', title: 'Stripe', description: 'Plataforma de pagos online para autónomos.', url: 'https://stripe.com/es', category: 'banking', region: 'national', source: 'Stripe', tags: ['pagos','autónomos'], free: true },
  { id: 'bnk-36', title: 'Bizum - Cómo usarlo', description: 'Guía oficial para usar Bizum en tu móvil.', url: 'https://bizum.es/como-funciona-bizum/', category: 'banking', region: 'national', source: 'Bizum', tags: ['bizum','guía'], free: true },
  { id: 'bnk-37', title: 'Banco de Alimentos', description: 'Banco de alimentos de tu zona.', url: 'https://www.fesbal.org/bancos-de-alimentos/', category: 'ngos', region: 'national', source: 'FESBAL', tags: ['alimentos','ayuda'], free: true },
  { id: 'bnk-38', title: 'CNMC - Reclamaciones Bancarias', description: 'Cómo presentar reclamaciones a tu banco.', url: 'https://www.cnmc.es/ambitos-de-actuacion/promocion-de-la-competencia/reclamaciones', category: 'banking', region: 'national', source: 'CNMC', tags: ['reclamaciones'], free: true },
  { id: 'bnk-39', title: 'Banco de España - Reclamaciones', description: 'Servicio de reclamaciones del Banco de España.', url: 'https://www.bde.es/f/webbde/SES/secciones/Reclamaciones/', category: 'banking', region: 'national', source: 'BdE', tags: ['reclamaciones'], free: true },
  { id: 'bnk-40', title: 'ASUFIN - Asociación Usuarios Bancarios', description: 'Asociación que defiende a los usuarios bancarios.', url: 'https://asufin.com/', category: 'legal', region: 'national', source: 'ASUFIN', tags: ['usuarios','banco'], free: true },
  { id: 'bnk-41', title: 'AUSBANC', description: 'Asociación de usuarios de bancos y seguros.', url: 'https://www.ausbanc.com/', category: 'legal', region: 'national', source: 'AUSBANC', tags: ['usuarios','banco'], free: true },
  { id: 'bnk-42', title: 'Adicae', description: 'Asociación de usuarios de bancos, cajas y seguros.', url: 'https://www.adicae.net/', category: 'legal', region: 'national', source: 'ADICAE', tags: ['usuarios','banco'], free: true },
];

// ============================================================
// LANGUAGE LEARNING (60+)
// ============================================================
const languageLearning: Resource[] = [
  { id: 'lng-1', title: 'Duolingo - Español', description: 'Aprende español gratis con gamificación.', url: 'https://es.duolingo.com/', category: 'language-learning', region: 'national', source: 'Duolingo', tags: ['español','app'], free: true },
  { id: 'lng-2', title: 'Duolingo - Otros idiomas', description: 'Aprende cualquier idioma gratis.', url: 'https://www.duolingo.com/', category: 'language-learning', region: 'national', source: 'Duolingo', tags: ['idiomas','app'], free: true },
  { id: 'lng-3', title: 'Busuu', description: 'Cursos de idiomas con corrección de nativos.', url: 'https://www.busuu.com/', category: 'language-learning', region: 'national', source: 'Busuu', tags: ['idiomas'], free: true },
  { id: 'lng-4', title: 'Babbel', description: 'Cursos de idiomas con método estructurado.', url: 'https://www.babbel.com/', category: 'language-learning', region: 'national', source: 'Babbel', tags: ['idiomas'], free: false },
  { id: 'lng-5', title: 'Memrise', description: 'Vocabulario con repetición espaciada.', url: 'https://www.memrise.com/', category: 'language-learning', region: 'national', source: 'Memrise', tags: ['vocabulario'], free: true },
  { id: 'lng-6', title: 'Anki', description: 'Flashcards con repetición espaciada, gratis y open-source.', url: 'https://apps.ankiweb.net/', category: 'language-learning', region: 'national', source: 'Anki', tags: ['flashcards'], free: true },
  { id: 'lng-7', title: 'HelloTalk', description: 'Intercambio de idiomas con nativos.', url: 'https://www.hellotalk.com/', category: 'language-learning', region: 'national', source: 'HelloTalk', tags: ['intercambio'], free: true },
  { id: 'lng-8', title: 'Tandem', description: 'App de intercambio de idiomas.', url: 'https://www.tandem.net/', category: 'language-learning', region: 'national', source: 'Tandem', tags: ['intercambio'], free: true },
  { id: 'lng-9', title: 'italki', description: 'Clases particulares con profesores nativos online.', url: 'https://www.italki.com/', category: 'language-learning', region: 'national', source: 'italki', tags: ['clases','profesores'], free: false },
  { id: 'lng-10', title: 'Preply', description: 'Profesores particulares de idiomas online.', url: 'https://preply.com/', category: 'language-learning', region: 'national', source: 'Preply', tags: ['profesores'], free: false },
  { id: 'lng-11', title: 'Instituto Cervantes - Aula Virtual', description: 'Cursos oficiales de español del Cervantes.', url: 'https://ave.cervantes.es/', category: 'language-learning', region: 'national', source: 'Cervantes', tags: ['español','oficial'], free: false },
  { id: 'lng-12', title: 'DELE - Examen Oficial Español', description: 'Examen oficial de español como lengua extranjera.', url: 'https://examenes.cervantes.es/es/dele', category: 'language-learning', region: 'national', source: 'Cervantes', tags: ['DELE','examen'], free: false },
  { id: 'lng-13', title: 'SIELE - Español Online', description: 'Examen online de español internacional.', url: 'https://www.siele.org/', category: 'language-learning', region: 'national', source: 'SIELE', tags: ['SIELE','examen'], free: false },
  { id: 'lng-14', title: 'BBC Languages', description: 'Recursos gratis de la BBC para aprender idiomas.', url: 'https://www.bbc.co.uk/languages/', category: 'language-learning', region: 'national', source: 'BBC', tags: ['BBC','idiomas'], free: true },
  { id: 'lng-15', title: 'News in Slow Spanish', description: 'Noticias en español lento para estudiantes.', url: 'https://www.newsinslowspanish.com/', category: 'language-learning', region: 'national', source: 'News in Slow', tags: ['noticias','audio'], free: false },
  { id: 'lng-16', title: 'SpanishPod101', description: 'Podcasts y lecciones de español.', url: 'https://www.spanishpod101.com/', category: 'language-learning', region: 'national', source: 'Innovative Language', tags: ['podcast','español'], free: true },
  { id: 'lng-17', title: 'Conjuguemos', description: 'Practicar conjugación de verbos en español.', url: 'https://conjuguemos.com/', category: 'language-learning', region: 'national', source: 'Conjuguemos', tags: ['verbos','conjugación'], free: true },
  { id: 'lng-18', title: 'SpanishDict', description: 'Diccionario y traductor español-inglés.', url: 'https://www.spanishdict.com/', category: 'language-learning', region: 'national', source: 'SpanishDict', tags: ['diccionario'], free: true },
  { id: 'lng-19', title: 'WordReference', description: 'Diccionario multilingüe con foros.', url: 'https://www.wordreference.com/', category: 'language-learning', region: 'national', source: 'WordReference', tags: ['diccionario'], free: true },
  { id: 'lng-20', title: 'Linguee', description: 'Buscador de traducciones en contexto.', url: 'https://www.linguee.es/', category: 'language-learning', region: 'national', source: 'Linguee', tags: ['traducción','contexto'], free: true },
  { id: 'lng-21', title: 'Reverso Context', description: 'Traducciones en contexto con ejemplos.', url: 'https://context.reverso.net/', category: 'language-learning', region: 'national', source: 'Reverso', tags: ['traducción'], free: true },
  { id: 'lng-22', title: 'RAE - Diccionario', description: 'Diccionario oficial de la Real Academia Española.', url: 'https://dle.rae.es/', category: 'language-learning', region: 'national', source: 'RAE', tags: ['diccionario','oficial'], free: true },
  { id: 'lng-23', title: 'ASALE - Diccionario Americanismos', description: 'Diccionario de americanismos.', url: 'https://www.asale.org/', category: 'language-learning', region: 'national', source: 'ASALE', tags: ['diccionario'], free: true },
  { id: 'lng-24', title: 'Fundéu', description: 'Fundación del español urgente, dudas frecuentes.', url: 'https://www.fundeu.es/', category: 'language-learning', region: 'national', source: 'Fundéu', tags: ['gramática','dudas'], free: true },
  { id: 'lng-25', title: 'Verbalopraxis', description: 'Verbos en español con audio.', url: 'https://www.verbalopraxis.com/', category: 'language-learning', region: 'national', source: 'Verbalopraxis', tags: ['verbos'], free: true },
  { id: 'lng-26', title: 'Lengalia', description: 'Cursos de español online con certificado.', url: 'https://www.lengalia.com/', category: 'language-learning', region: 'national', source: 'Lengalia', tags: ['cursos','español'], free: false },
  { id: 'lng-27', title: 'Don Quijote - Español', description: 'Escuela de español con cursos online.', url: 'https://www.donquijote.org/', category: 'language-learning', region: 'national', source: 'Don Quijote', tags: ['escuela','español'], free: false },
  { id: 'lng-28', title: 'Escuela ELE Online', description: 'Español como lengua extranjera online.', url: 'https://escuelaepanishonline.com/', category: 'language-learning', region: 'national', source: 'Spanish Online', tags: ['ELE'], free: false },
  { id: 'lng-29', title: 'ProfeDeELE', description: 'Recursos para aprender y enseñar español.', url: 'https://www.profedeele.es/', category: 'language-learning', region: 'national', source: 'ProfeDeELE', tags: ['ELE','recursos'], free: true },
  { id: 'lng-30', title: 'ELE Actual', description: 'Materiales para aprender español.', url: 'https://www.sgsgeneralspain.com/', category: 'language-learning', region: 'national', source: 'SGS', tags: ['ELE'], free: false },
  { id: 'lng-31', title: 'TED en Español', description: 'Charlas motivacionales en español, con subtítulos.', url: 'https://www.ted.com/languages/spanish', category: 'language-learning', region: 'national', source: 'TED', tags: ['charlas','audio'], free: true },
  { id: 'lng-32', title: 'YouTube - Aprende Español', description: 'Canales para aprender español gratis.', url: 'https://www.youtube.com/results?search_query=aprender+español+gratis', category: 'language-learning', region: 'national', source: 'YouTube', tags: ['video','español'], free: true },
  { id: 'lng-33', title: 'RTVE - Aprende Español', description: 'Recursos de RTVE para aprender español.', url: 'https://www.rtve.es/aprender/', category: 'language-learning', region: 'national', source: 'RTVE', tags: ['español','recursos'], free: true },
  { id: 'lng-34', title: 'Practica Español', description: 'Practica español con noticias y ejercicios.', url: 'https://practicaespanol.com/', category: 'language-learning', region: 'national', source: 'Practica Español', tags: ['práctica','noticias'], free: true },
  { id: 'lng-35', title: ' podcasts en Español', description: 'Podcasts para practicar español en Spotify.', url: 'https://open.spotify.com/', category: 'language-learning', region: 'national', source: 'Spotify', tags: ['podcast'], free: true },
  { id: 'lng-36', title: 'Catalán - Generalitat', description: 'Aprende catalán gratis con la Generalitat.', url: 'https://llengua.gencat.cat/ca/', category: 'language-learning', region: 'cataluna', source: 'Generalitat', tags: ['catalán'], free: true },
  { id: 'lng-37', title: 'Parla.cat', description: 'Cursos de catalán online del Consorci per al Foment del Català.', url: 'https://www.parla.cat/', category: 'language-learning', region: 'cataluna', source: 'Parla.cat', tags: ['catalán'], free: true },
  { id: 'lng-38', title: 'Euskera - HABE', description: 'Instituto para la enseñanza del euskera.', url: 'https://www.habe.euskadi.eus/', category: 'language-learning', region: 'pais-vasco', source: 'HABE', tags: ['euskera'], free: true },
  { id: 'lng-39', title: 'Galego - Xunta', description: 'Aprende gallego con la Xunta.', url: 'https://www.xunta.gal/linguagalega', category: 'language-learning', region: 'galicia', source: 'Xunta', tags: ['galego'], free: true },
  { id: 'lng-40', title: 'Lingua Galega - ILG', description: 'Instituto da Lingua Galega.', url: 'https://www.lingua.gal/', category: 'language-learning', region: 'galicia', source: 'ILG', tags: ['galego'], free: true },
];

// ============================================================
// HEALTH - Hospitals, mental health, etc. (additional)
// ============================================================
const healthResources: Resource[] = [
  { id: 'hlt-1', title: '112 Emergencias', description: 'Número único de emergencias en toda España. Gratuito.', url: 'https://www.112.es/', category: 'emergency', region: 'national', source: '112 España', tags: ['112','emergencia'], free: true },
  { id: 'hlt-2', title: '061 Urgencias Sanitarias', description: 'Teléfono de urgencias sanitarias no vitales.', url: 'https://www.112.es/', category: 'emergency', region: 'national', source: 'Emergencias', tags: ['061','urgencias'], free: true },
  { id: 'hlt-3', title: '024 - Salud Mental', description: 'Teléfono gratuito de atención en salud mental 24h.', url: 'https://www.024.es/', category: 'emergency', region: 'national', source: 'Salud Mental 024', tags: ['024','salud mental'], free: true },
  { id: 'hlt-4', title: 'Cita Previa Sanitaria - Nacional', description: 'Cita previa para atención primaria.', url: 'https://citaprevia.sanidad.gob.es/', category: 'health', region: 'national', source: 'Sanidad', tags: ['cita','sanidad'], free: true },
  { id: 'hlt-5', title: 'Tarjeta Sanitaria Individual (TSI)', description: 'Cómo obtener la tarjeta sanitaria.', url: 'https://www.sanidad.gob.es/profesionales/saludPublica/sanidadUniversal/home.htm', category: 'health', region: 'national', source: 'Sanidad', tags: ['TSI','tarjeta'], free: true },
  { id: 'hlt-6', title: 'Vacunación COVID-19', description: 'Información oficial sobre vacunación.', url: 'https://www.sanidad.gob.es/profesionales/saludPublica/ccayes/alertasActual/ncov/covid19.htm', category: 'health', region: 'national', source: 'Sanidad', tags: ['vacunación','covid'], free: true },
  { id: 'hlt-7', title: 'Calendario Vacunal España', description: 'Calendario oficial de vacunación para todas las edades.', url: 'https://www.sanidad.gob.es/areas/sanidadHumana/calendario.htm', category: 'health', region: 'national', source: 'Sanidad', tags: ['vacunas','calendario'], free: true },
  { id: 'hlt-8', title: 'Donación de Sangre', description: 'Encuentra tu centro de donación más cercano.', url: 'https://www.donarsangre.org/', category: 'health', region: 'national', source: 'FENTAS', tags: ['sangre','donación'], free: true },
  { id: 'hlt-9', title: 'Donación de Órganos', description: 'Información sobre la donación de órganos.', url: 'https://www.ont.es/', category: 'health', region: 'national', source: 'ONT', tags: ['órganos','donación'], free: true },
  { id: 'hlt-10', title: 'Salud Mental - Ministerio', description: 'Estrategia de salud mental del Ministerio.', url: 'https://www.sanidad.gob.es/organizacion/sns/planCalidadSNS/saludMental.htm', category: 'health', region: 'national', source: 'Sanidad', tags: ['salud mental'], free: true },
  { id: 'hlt-11', title: 'Teléfono de la Esperanza - 717 003 717', description: 'Apoyo emocional gratuito 24h.', url: 'https://www.telefonodelaesperanza.org/', category: 'emergency', region: 'national', source: 'Teléfono Esperanza', tags: ['emocional','24h'], free: true },
  { id: 'hlt-12', title: 'FAISEM - Salud Mental Andalucía', description: 'Fundación andaluza para la integración social.', url: 'https://www.faisem.es/', category: 'health', region: 'andalucia', source: 'FAISEM', tags: ['salud mental','andalucía'], free: true },
  { id: 'hlt-13', title: 'Cáritas - Salud Mental', description: 'Recursos de salud mental de Cáritas.', url: 'https://www.caritas.es/', category: 'health', region: 'national', source: 'Cáritas', tags: ['salud mental'], free: true },
  { id: 'hlt-14', title: 'Psicólogos Sin Fronteras', description: 'Atención psicológica a personas vulnerables.', url: 'https://psicosinfronteras.org/', category: 'health', region: 'national', source: 'Psicólogos sin Fronteras', tags: ['psicología','vulnerables'], free: true },
  { id: 'hlt-15', title: 'Médicos del Mundo', description: 'Atención sanitaria a personas vulnerables.', url: 'https://www.medicodelmundo.org/', category: 'health', region: 'national', source: 'Médicos del Mundo', tags: ['salud','vulnerables'], free: true },
  { id: 'hlt-16', title: 'Hospital General - Buscador', description: 'Buscador oficial de hospitales públicos.', url: 'https://www.sanidad.gob.es/organizacion/sns/home.htm', category: 'health', region: 'national', source: 'SNS', tags: ['hospital'], free: true },
  { id: 'hlt-17', title: 'Centro de Salud - Buscador', description: 'Encuentra tu centro de salud más cercano.', url: 'https://www.sanidad.gob.es/ciudadanos/ciudadanos/home.htm', category: 'health', region: 'national', source: 'Sanidad', tags: ['centro salud'], free: true },
  { id: 'hlt-18', title: 'Salud de la Mujer', description: 'Programa de salud de la mujer del Ministerio.', url: 'https://www.sanidad.gob.es/areas/saludMujer/home.htm', category: 'health', region: 'national', source: 'Sanidad', tags: ['mujer','salud'], free: true },
  { id: 'hlt-19', title: 'Salud Infantil', description: 'Programa de salud infantil y adolescente.', url: 'https://www.sanidad.gob.es/areas/saludInfantil/home.htm', category: 'health', region: 'national', source: 'Sanidad', tags: ['infancia'], free: true },
  { id: 'hlt-20', title: 'Salud del Mayor', description: 'Atención a la salud de las personas mayores.', url: 'https://www.imserso.es/', category: 'health', region: 'national', source: 'Imserso', tags: ['mayores'], free: true },
  { id: 'hlt-21', title: 'Atención Temprana', description: 'Servicio de atención temprana para menores con discapacidad.', url: 'https://www.imserso.es/interPresent1/groups/imserso/documents/binario/atenciontemprana.pdf', category: 'health', region: 'national', source: 'Imserso', tags: ['infancia','discapacidad'], free: true },
  { id: 'hlt-22', title: 'Cuidados Paliativos', description: 'Recursos de cuidados paliativos.', url: 'https://www.secpal.com/', category: 'health', region: 'national', source: 'SECPAL', tags: ['paliativos'], free: true },
  { id: 'hlt-23', title: 'Donación de Leche Materna', description: 'Bancos de leche materna en España.', url: 'https://www.aebh.org/', category: 'health', region: 'national', source: 'AEBH', tags: ['leche','donación'], free: true },
  { id: 'hlt-24', title: 'Atención a la Diabetes', description: 'Recursos para personas con diabetes.', url: 'https://www.fedesp.es/', category: 'health', region: 'national', source: 'FEDE', tags: ['diabetes'], free: true },
  { id: 'hlt-25', title: 'Cáncer - AECC', description: 'Asociación Española Contra el Cáncer.', url: 'https://www.aecc.es/', category: 'health', region: 'national', source: 'AECC', tags: ['cáncer','apoyo'], free: true },
  { id: 'hlt-26', title: 'Alzheimer - AFAL', description: 'Confederación española de Alzheimer.', url: 'https://ceafa.es/', category: 'health', region: 'national', source: 'CEAFA', tags: ['alzheimer'], free: true },
  { id: 'hlt-27', title: 'Parkinson - Federación', description: 'Federación Española de Parkinson.', url: 'https://www.esparkinson.es/', category: 'health', region: 'national', source: 'FEP', tags: ['parkinson'], free: true },
  { id: 'hlt-28', title: 'Esclerosis Múltiple', description: 'Federación de Esclerosis Múltiple de España.', url: 'https://www.esclerosismultiple.com/', category: 'health', region: 'national', source: 'FEEM', tags: ['esclerosis'], free: true },
  { id: 'hlt-29', title: 'VIH/Sida - CESIDA', description: 'Coordinadora estatal de VIH-SIDA.', url: 'https://www.cesida.org/', category: 'health', region: 'national', source: 'CESIDA', tags: ['VIH','sida'], free: true },
  { id: 'hlt-30', title: 'Raras - FEDER', description: 'Federación Española de Enfermedades Raras.', url: 'https://enfermedades-raras.org/', category: 'health', region: 'national', source: 'FEDER', tags: ['raras'], free: true },
];

// ============================================================
// FAMILY - Education, children, women (100+)
// ============================================================
const familyResources: Resource[] = [
  { id: 'fam-1', title: 'Reagrupación Familiar - EX-02', description: 'Solicitud de reagrupación familiar (modelo EX-02).', url: 'https://sede.policia.gob.es:23000/', category: 'family', region: 'national', source: 'Extranjería', tags: ['reagrupación','EX-02'], free: true },
  { id: 'fam-2', title: 'Prestación por Hijo a Cargo', description: 'Ayuda económica por hijo a cargo sin límite de ingresos.', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/109764', category: 'family', region: 'national', source: 'Seguridad Social', tags: ['hijos','ayuda'], free: true },
  { id: 'fam-3', title: 'Bono Maternal', description: 'Bono único de 1.200€ por hijo para madres trabajadoras.', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/109763', category: 'family', region: 'national', source: 'Seguridad Social', tags: ['bono','maternidad'], free: true },
  { id: 'fam-4', title: 'Permiso de Maternidad', description: 'Permiso de maternidad de 16 semanas con prestación.', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/109761', category: 'family', region: 'national', source: 'Seguridad Social', tags: ['maternidad'], free: true },
  { id: 'fam-5', title: 'Permiso de Paternidad', description: 'Permiso de paternidad de 16 semanas remunerado.', url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/109762', category: 'family', region: 'national', source: 'Seguridad Social', tags: ['paternidad'], free: true },
  { id: 'fam-6', title: 'Guarderías Públicas', description: 'Red de escuelas infantiles públicas (0-3 años).', url: 'https://www.educacion.gob.es/educacion/inicial.html', category: 'family', region: 'national', source: 'MEC', tags: ['guardería','infantil'], free: true },
  { id: 'fam-7', title: 'Bonificación Comedor Escolar', description: 'Ayudas para comedor escolar en centros públicos.', url: 'https://www.educacion.gob.es/servicios-al-ciudadano/catalogo/becas-ayudas/subvenciones.html', category: 'family', region: 'national', source: 'MEC', tags: ['comedor','ayuda'], free: true },
  { id: 'fam-8', title: '016 - Violencia de Género', description: 'Teléfono gratuito de ayuda a víctimas de violencia de género.', url: 'https://violenciagenero.igualdad.gob.es/informacionUtil/telefonosInteres/telefono016.htm', category: 'emergency', region: 'national', source: 'Igualdad', tags: ['016','violencia'], free: true },
  { id: 'fam-9', title: 'ATENPRO - Telefonos Mayores', description: 'Servicio de teleasistencia para mayores de Cruz Roja.', url: 'https://www2.cruzroja.es/', category: 'family', region: 'national', source: 'Cruz Roja', tags: ['mayores','teleasistencia'], free: false },
  { id: 'fam-10', title: 'MENAS - Menores Extranjeros', description: 'Recursos para menores extranjeros no acompañados.', url: 'https://www.inclusion.gob.es/web/migraciones/extranjeria/', category: 'family', region: 'national', source: 'MITESMI', tags: ['MENAS','menores'], free: true },
  { id: 'fam-11', title: 'Defensor del Menor', description: 'Defensa de los derechos de los menores.', url: 'https://www.defensordelmenor.es/', category: 'family', region: 'madrid', source: 'Defensor del Menor', tags: ['menores','derechos'], free: true },
  { id: 'fam-12', title: 'Fundación ANAR - Ayuda a Niños', description: 'Teléfono de ayuda a niños y adolescentes (900 20 20 10).', url: 'https://www.anar.org/', category: 'emergency', region: 'national', source: 'ANAR', tags: ['infancia','ayuda'], free: true },
  { id: 'fam-13', title: 'Aldeas Infantiles SOS', description: 'Atención a niños sin cuidado parental.', url: 'https://www.aldeasinfantiles.es/', category: 'family', region: 'national', source: 'Aldeas Infantiles', tags: ['infancia','acogida'], free: true },
  { id: 'fam-14', title: 'Save the Children España', description: 'Defensa de los derechos de la infancia.', url: 'https://www.savethechildren.es/', category: 'family', region: 'national', source: 'Save the Children', tags: ['infancia'], free: true },
  { id: 'fam-15', title: 'UNICEF España', description: 'Defensa de los derechos de la infancia.', url: 'https://www.unicef.es/', category: 'family', region: 'national', source: 'UNICEF', tags: ['infancia'], free: true },
  { id: 'fam-16', title: 'Escolarización - Información', description: 'Cómo escolarizar a tus hijos en España.', url: 'https://www.educacion.gob.es/educacion/parents/escolarizacion.html', category: 'education', region: 'national', source: 'MEC', tags: ['escolarización'], free: true },
  { id: 'fam-17', title: 'Escuela Infantil - Primer Ciclo', description: 'Escuelas infantiles (0-3 años) públicas y privadas.', url: 'https://www.educacion.gob.es/educacion/inicial.html', category: 'education', region: 'national', source: 'MEC', tags: ['infantil','guardería'], free: false },
  { id: 'fam-18', title: 'Educación Primaria', description: 'Información sobre educación primaria obligatoria.', url: 'https://www.educacion.gob.es/educacion/primaria.html', category: 'education', region: 'national', source: 'MEC', tags: ['primaria'], free: true },
  { id: 'fam-19', title: 'Educación Secundaria (ESO)', description: 'Información sobre ESO y Bachillerato.', url: 'https://www.educacion.gob.es/educacion/eso.html', category: 'education', region: 'national', source: 'MEC', tags: ['ESO','secundaria'], free: true },
  { id: 'fam-20', title: 'Formación Profesional (FP)', description: 'FP grado medio y superior, requisitos y ofertas.', url: 'https://www.todofp.es/', category: 'education', region: 'national', source: 'MEC', tags: ['FP','formación'], free: true },
  { id: 'fam-21', title: 'Becas MEC', description: 'Becas y ayudas al estudio del Ministerio.', url: 'https://www.educacion.gob.es/servicios-al-ciudadano/catalogo/becas-ayudas/subvenciones.html', category: 'education', region: 'national', source: 'MEC', tags: ['becas'], free: true },
  { id: 'fam-22', title: 'Becas Comunidad Autónoma', description: 'Becas autonómicas para estudios.', url: 'https://www.educacion.gob.es/educacion/becas-ayudas/autonomicas.html', category: 'education', region: 'national', source: 'MEC', tags: ['becas','autonómicas'], free: true },
  { id: 'fam-23', title: 'Reconocimiento de Títulos Exteriores', description: 'Homologación de títulos extranjeros.', url: 'https://www.educacion.gob.es/servicios-al-ciudadano/catalogo/servicio/homologacion-convalidacion-titulos-extranjeros.html', category: 'education', region: 'national', source: 'MEC', tags: ['homologación'], free: true },
  { id: 'fam-24', title: 'Convalidación de Estudios', description: 'Convalidación de estudios extranjeros por españoles.', url: 'https://www.educacion.gob.es/servicios-al-ciudadano/catalogo/servicio/convalidacion-estudios-no-universitarios.html', category: 'education', region: 'national', source: 'MEC', tags: ['convalidación'], free: true },
  { id: 'fam-25', title: 'CEPA - Educación de Adultos', description: 'Centros de Educación de Personas Adultas.', url: 'https://www.educacion.gob.es/educacion/adultos.html', category: 'education', region: 'national', source: 'MEC', tags: ['adultos','CEPA'], free: true },
  { id: 'fam-26', title: 'Aulas de Enlace', description: 'Aulas específicas para alumnado inmigrante.', url: 'https://www.educacion.gob.es/educacion/extranjero.html', category: 'education', region: 'national', source: 'MEC', tags: ['enlace','inmigrante'], free: true },
  { id: 'fam-27', title: 'ATAL - Atención Temporal', description: 'Atención temporal al alumnado inmigrante.', url: 'https://www.educacion.gob.es/educacion/extranjero.html', category: 'education', region: 'national', source: 'MEC', tags: ['ATAL'], free: true },
  { id: 'fam-28', title: 'Atención a la Diversidad', description: 'Recursos para alumnado con necesidades específicas.', url: 'https://www.educacion.gob.es/educacion/diversidad.html', category: 'education', region: 'national', source: 'MEC', tags: ['diversidad'], free: true },
  { id: 'fam-29', title: 'Orientación Educativa', description: 'Servicios de orientación en centros educativos.', url: 'https://www.educacion.gob.es/educacion/orientacion.html', category: 'education', region: 'national', source: 'MEC', tags: ['orientación'], free: true },
  { id: 'fam-30', title: 'Comedor Escolar', description: 'Servicio de comedor en centros educativos.', url: 'https://www.educacion.gob.es/educacion/parents/comedor.html', category: 'family', region: 'national', source: 'MEC', tags: ['comedor'], free: false },
  { id: 'fam-31', title: 'Actividades Extraescolares', description: 'Actividades extraescolares y ayudas.', url: 'https://www.educacion.gob.es/educacion/parents/extraescolares.html', category: 'family', region: 'national', source: 'MEC', tags: ['extraescolares'], free: false },
  { id: 'fam-32', title: 'Servicio Madrugadores', description: 'Servicio de atención temprana antes del horario escolar.', url: 'https://www.educacion.gob.es/educacion/parents/madrugadores.html', category: 'family', region: 'national', source: 'MEC', tags: ['madrugadores'], free: false },
  { id: 'fam-33', title: 'Ayudas Libros Texto', description: 'Ayudas para libros de texto y material escolar.', url: 'https://www.educacion.gob.es/educacion/parents/libros.html', category: 'family', region: 'national', source: 'MEC', tags: ['libros'], free: true },
  { id: 'fam-34', title: 'Bono Cultural Joven', description: 'Bono de 400€ para jóvenes de 18 años.', url: 'https://www.bonoculturaljoven.gob.es/', category: 'education', region: 'national', source: 'Cultura', tags: ['jóvenes','cultura'], free: true },
  { id: 'fam-35', title: 'Carné Joven Euro<26', description: 'Carné joven con descuentos en España y Europa.', url: 'https://www.carnejoven.org/', category: 'education', region: 'national', source: 'INJUVE', tags: ['jóvenes','descuentos'], free: false },
  { id: 'fam-36', title: 'Instituto de la Mujer', description: 'Recursos para la mujer del Ministerio de Igualdad.', url: 'https://www.inmujeres.gob.es/', category: 'legal', region: 'national', source: 'Igualdad', tags: ['mujer','igualdad'], free: true },
  { id: 'fam-37', title: 'Teléfono 016 - Violencia', description: 'Ayuda a víctimas de violencia de género.', url: 'https://violenciagenero.igualdad.gob.es/', category: 'emergency', region: 'national', source: 'Igualdad', tags: ['016','violencia'], free: true },
  { id: 'fam-38', title: 'Puntos de Encuentro Familiar', description: 'Puntos de encuentro para familias separadas.', url: 'https://www.mjusticia.gob.es/', category: 'family', region: 'national', source: 'Justicia', tags: ['familia','separación'], free: false },
  { id: 'fam-39', title: 'Mediación Familiar', description: 'Servicios de mediación familiar gratuita.', url: 'https://www.mjusticia.gob.es/', category: 'legal', region: 'national', source: 'Justicia', tags: ['mediación'], free: true },
  { id: 'fam-40', title: 'Adopción Internacional', description: 'Información sobre adopción internacional.', url: 'https://www.mjusticia.gob.es/cs/Satellite/Portal/es/areas-tematicas/registros/adopcion', category: 'family', region: 'national', source: 'Justicia', tags: ['adopción'], free: true },
];

// ============================================================
// TRANSPORT (60+)
// ============================================================
const transportResources: Resource[] = [
  { id: 'trn-1', title: 'RENFE Cercanías Madrid', description: 'Trenes de cercanías de Madrid.', url: 'https://www.renfe.es/es/cercanias/madrid', category: 'transport', region: 'madrid', source: 'RENFE', tags: ['cercanías','madrid'], free: false },
  { id: 'trn-2', title: 'RENFE Cercanías Barcelona', description: 'Cercanías de Barcelona (Rodalies).', url: 'https://www.renfe.es/es/cercanias/barcelona', category: 'transport', region: 'cataluna', source: 'RENFE', tags: ['rodalies','barcelona'], free: false },
  { id: 'trn-3', title: 'RENFE Cercanías Valencia', description: 'Cercanías de Valencia.', url: 'https://www.renfe.es/es/cercanias/valencia', category: 'transport', region: 'comunidad-valenciana', source: 'RENFE', tags: ['cercanías','valencia'], free: false },
  { id: 'trn-4', title: 'RENFE Cercanías Sevilla', description: 'Cercanías de Sevilla.', url: 'https://www.renfe.es/es/cercanias/sevilla', category: 'transport', region: 'andalucia', source: 'RENFE', tags: ['cercanías','sevilla'], free: false },
  { id: 'trn-5', title: 'RENFE Cercanías Bilbao', description: 'Cercanías de Bilbao.', url: 'https://www.renfe.es/es/cercanias/bilbao', category: 'transport', region: 'pais-vasco', source: 'RENFE', tags: ['cercanías','bilbao'], free: false },
  { id: 'trn-6', title: 'RENFE Cercanías Málaga', description: 'Cercanías de Málaga.', url: 'https://www.renfe.es/es/cercanias/malaga', category: 'transport', region: 'andalucia', source: 'RENFE', tags: ['cercanías','malaga'], free: false },
  { id: 'trn-7', title: 'RENFE Cercanías Zaragoza', description: 'Cercanías de Zaragoza.', url: 'https://www.renfe.es/es/cercanias/zaragoza', category: 'transport', region: 'aragon', source: 'RENFE', tags: ['cercanías','zaragoza'], free: false },
  { id: 'trn-8', title: 'RENFE Cercanías Asturias', description: 'Cercanías de Asturias.', url: 'https://www.renfe.es/es/cercanias/asturias', category: 'transport', region: 'asturias', source: 'RENFE', tags: ['cercanías','asturias'], free: false },
  { id: 'trn-9', title: 'RENFE Cercanías Cádiz', description: 'Cercanías de Cádiz.', url: 'https://www.renfe.es/es/cercanias/cadiz', category: 'transport', region: 'andalucia', source: 'RENFE', tags: ['cercanías','cádiz'], free: false },
  { id: 'trn-10', title: 'Metro de Madrid', description: 'Red de metro de Madrid.', url: 'https://www.metromadrid.es/', category: 'transport', region: 'madrid', source: 'Metro Madrid', tags: ['metro','madrid'], free: false },
  { id: 'trn-11', title: 'Metro de Barcelona (TMB)', description: 'Metro y autobuses de Barcelona.', url: 'https://www.tmb.cat/', category: 'transport', region: 'cataluna', source: 'TMB', tags: ['metro','barcelona'], free: false },
  { id: 'trn-12', title: 'Metro Valencia', description: 'Metro de Valencia (Metrovalencia).', url: 'https://www.metrovalencia.es/', category: 'transport', region: 'comunidad-valenciana', source: 'Metrovalencia', tags: ['metro','valencia'], free: false },
  { id: 'trn-13', title: 'Metro de Sevilla', description: 'Metro de Sevilla.', url: 'https://www.metrodesevilla.es/', category: 'transport', region: 'andalucia', source: 'Metro Sevilla', tags: ['metro','sevilla'], free: false },
  { id: 'trn-14', title: 'Metro de Málaga', description: 'Metro de Málaga.', url: 'https://www.metrodemalaga.es/', category: 'transport', region: 'andalucia', source: 'Metro Málaga', tags: ['metro','malaga'], free: false },
  { id: 'trn-15', title: 'Metro de Bilbao', description: 'Metro de Bilbao.', url: 'https://www.metrobilbao.eus/', category: 'transport', region: 'pais-vasco', source: 'Metro Bilbao', tags: ['metro','bilbao'], free: false },
  { id: 'trn-16', title: 'Metro de Palma', description: 'Metro de Palma de Mallorca.', url: 'https://www.tib.org/', category: 'transport', region: 'balears', source: 'TIB', tags: ['metro','palma'], free: false },
  { id: 'trn-17', title: 'EMT Madrid - Autobuses', description: 'Autobuses urbanos de Madrid.', url: 'https://www.emtmadrid.es/', category: 'transport', region: 'madrid', source: 'EMT Madrid', tags: ['autobús','madrid'], free: false },
  { id: 'trn-18', title: 'EMT Valencia', description: 'Autobuses urbanos de Valencia.', url: 'https://www.emtvalencia.es/', category: 'transport', region: 'comunidad-valenciana', source: 'EMT Valencia', tags: ['autobús','valencia'], free: false },
  { id: 'trn-19', title: 'EMT Málaga', description: 'Autobuses urbanos de Málaga.', url: 'https://www.emtmalaga.es/', category: 'transport', region: 'andalucia', source: 'EMT Málaga', tags: ['autobús','malaga'], free: false },
  { id: 'trn-20', title: 'TUSSAM Sevilla', description: 'Autobuses urbanos de Sevilla.', url: 'https://www.tussam.org/', category: 'transport', region: 'andalucia', source: 'TUSSAM', tags: ['autobús','sevilla'], free: false },
  { id: 'trn-21', title: 'Abono Transporte Madrid', description: 'Abono mensual para transporte público en Madrid.', url: 'https://www.crtm.es/', category: 'transport', region: 'madrid', source: 'CRTM', tags: ['abono','madrid'], free: false },
  { id: 'trn-22', title: 'T-Mobilitat Barcelona', description: 'Sistema de tarifas integradas de Barcelona.', url: 'https://www.tmb.cat/es/tarifas-metro-bus-barcelona/t-mobilitat', category: 'transport', region: 'cataluna', source: 'TMB', tags: ['abono','barcelona'], free: false },
  { id: 'trn-23', title: 'AENA - Aeropuertos Españoles', description: 'Información de aeropuertos en España.', url: 'https://www.aena.es/', category: 'transport', region: 'national', source: 'AENA', tags: ['aeropuerto'], free: false },
  { id: 'trn-24', title: 'Aeropuerto Madrid-Barajas', description: 'Aeropuerto Adolfo Suárez Madrid-Barajas.', url: 'https://www.aena.es/es/aeropuerto-madrid-barajas.html', category: 'transport', region: 'madrid', source: 'AENA', tags: ['aeropuerto','madrid'], free: false },
  { id: 'trn-25', title: 'Aeropuerto Barcelona-El Prat', description: 'Aeropuerto Josep Tarradellas Barcelona-El Prat.', url: 'https://www.aena.es/es/aeropuerto-barcelona.html', category: 'transport', region: 'cataluna', source: 'AENA', tags: ['aeropuerto','barcelona'], free: false },
  { id: 'trn-26', title: 'Puertos del Estado', description: 'Autoridad portuaria española.', url: 'https://www.puertos.es/', category: 'transport', region: 'national', source: 'Puertos del Estado', tags: ['puerto'], free: true },
  { id: 'trn-27', title: 'ALSA - Autobuses Nacionales', description: 'Autobuses de larga distancia.', url: 'https://www.alsa.es/', category: 'transport', region: 'national', source: 'ALSA', tags: ['autobús','larga distancia'], free: false },
  { id: 'trn-28', title: 'Avanza - Autobuses', description: 'Autobuses interurbanos y larga distancia.', url: 'https://www.avanzabus.com/', category: 'transport', region: 'national', source: 'Avanza', tags: ['autobús'], free: false },
  { id: 'trn-29', title: 'Daibus - Autobuses', description: 'Autobuses económicos de larga distancia.', url: 'https://www.daibus.es/', category: 'transport', region: 'national', source: 'Daibus', tags: ['autobús'], free: false },
  { id: 'trn-30', title: 'BlaBlaCar - Coche Compartido', description: 'Comparte trayectos en coche, más barato.', url: 'https://www.blablacar.es/', category: 'transport', region: 'national', source: 'BlaBlaCar', tags: ['coche','compartir'], free: true },
  { id: 'trn-31', title: 'Cabify - VTC', description: 'Servicio de VTC con conductores profesionales.', url: 'https://cabify.com/', category: 'transport', region: 'national', source: 'Cabify', tags: ['VTC','coche'], free: false },
  { id: 'trn-32', title: 'FreeNow - Taxis', description: 'App para pedir taxis oficiales.', url: 'https://www.free-now.com/', category: 'transport', region: 'national', source: 'FreeNow', tags: ['taxi'], free: false },
  { id: 'trn-33', title: 'Uber España', description: 'Servicio de VTC en ciudades principales.', url: 'https://www.uber.com/es/es/', category: 'transport', region: 'national', source: 'Uber', tags: ['VTC'], free: false },
  { id: 'trn-34', title: 'BiciMAD - Madrid', description: 'Bicicleta eléctrica pública de Madrid.', url: 'https://www.bicimad.com/', category: 'transport', region: 'madrid', source: 'BiciMAD', tags: ['bici','madrid'], free: false },
  { id: 'trn-35', title: 'Bicing - Barcelona', description: 'Bicicleta pública de Barcelona.', url: 'https://www.bicing.barcelona/', category: 'transport', region: 'cataluna', source: 'Bicing', tags: ['bici','barcelona'], free: false },
  { id: 'trn-36', title: 'Valenbisi - Valencia', description: 'Bicicleta pública de Valencia.', url: 'https://www.valenbisi.es/', category: 'transport', region: 'comunidad-valenciana', source: 'Valenbisi', tags: ['bici','valencia'], free: false },
  { id: 'trn-37', title: 'Sevici - Sevilla', description: 'Bicicleta pública de Sevilla.', url: 'https://www.sevici.es/', category: 'transport', region: 'andalucia', source: 'Sevici', tags: ['bici','sevilla'], free: false },
  { id: 'trn-38', title: 'DGT - Carreteras Estado', description: 'Estado de las carreteras del Estado.', url: 'https://www.dgt.es/es/el-trafico/estado-de-las-carreteras/', category: 'transport', region: 'national', source: 'DGT', tags: ['carreteras'], free: true },
  { id: 'trn-39', title: 'RENFE AVE - Alta Velocidad', description: 'Trenes de alta velocidad en España.', url: 'https://www.renfe.es/es/viajar/informacion/ave', category: 'transport', region: 'national', source: 'RENFE', tags: ['AVE','alta velocidad'], free: false },
  { id: 'trn-40', title: 'OUIGO España', description: 'Trenes de alta velocidad low-cost.', url: 'https://www.ouigo.com/', category: 'transport', region: 'national', source: 'OUIGO', tags: ['AVE','barato'], free: false },
  { id: 'trn-41', title: 'Iryo - Trenes', description: 'Trenes de alta velocidad privados.', url: 'https://iryo.eu/', category: 'transport', region: 'national', source: 'Iryo', tags: ['AVE'], free: false },
  { id: 'trn-42', title: 'Avlo - RENFE Barato', description: 'AVE low-cost de RENFE.', url: 'https://www.renfe.es/es/viajar/informacion/avlo', category: 'transport', region: 'national', source: 'RENFE', tags: ['AVE','barato'], free: false },
];

// ============================================================
// HOUSING - Additional (50+)
// ============================================================
const housingResources: Resource[] = [
  { id: 'hse-1', title: 'Idealista - Pisos', description: 'Portal líder de pisos en alquiler y venta.', url: 'https://www.idealista.com/', category: 'housing', region: 'national', source: 'Idealista', tags: ['alquiler','pisos'], free: true },
  { id: 'hse-2', title: 'Fotocasa - Pisos', description: 'Portal inmobiliario con miles de anuncios.', url: 'https://www.fotocasa.es/', category: 'housing', region: 'national', source: 'Fotocasa', tags: ['alquiler','pisos'], free: true },
  { id: 'hse-3', title: 'Pisos.com', description: 'Buscador de pisos en alquiler y venta.', url: 'https://www.pisos.com/', category: 'housing', region: 'national', source: 'Pisos.com', tags: ['alquiler'], free: true },
  { id: 'hse-4', title: 'Milanuncios - Pisos', description: 'Anuncios de particulares de pisos.', url: 'https://www.milanuncios.com/pisos-en-alquiler/', category: 'housing', region: 'national', source: 'Milanuncios', tags: ['particulares'], free: true },
  { id: 'hse-5', title: 'Wallapop - Pisos', description: 'Anuncios de particulares, incluye pisos.', url: 'https://www.wallapop.com/', category: 'housing', region: 'national', source: 'Wallapop', tags: ['particulares'], free: true },
  { id: 'hse-6', title: 'Spotahome - Pisos Online', description: 'Alquiler de pisos sin visitar, con video.', url: 'https://www.spotahome.com/', category: 'housing', region: 'national', source: 'Spotahome', tags: ['online'], free: true },
  { id: 'hse-7', title: 'Badi - Habitaciones', description: 'Alquiler de habitaciones en pisos compartidos.', url: 'https://badi.com/', category: 'housing', region: 'national', source: 'Badi', tags: ['habitaciones','compartido'], free: true },
  { id: 'hse-8', title: 'Idealista - Habitaciones', description: 'Habitaciones en alquiler en Idealista.', url: 'https://www.idealista.com/habitaciones', category: 'housing', region: 'national', source: 'Idealista', tags: ['habitaciones'], free: true },
  { id: 'hse-9', title: 'Fotocasa - Habitaciones', description: 'Habitaciones en alquiler en Fotocasa.', url: 'https://www.fotocasa.es/es/alquiler/habitaciones', category: 'housing', region: 'national', source: 'Fotocasa', tags: ['habitaciones'], free: true },
  { id: 'hse-10', title: 'Roomies - Habitaciones', description: 'Pisos compartidos para jóvenes.', url: 'https://roomies.es/', category: 'housing', region: 'national', source: 'Roomies', tags: ['compartido','jóvenes'], free: true },
  { id: 'hse-11', title: 'Plan Estatal Vivienda 2022-2025', description: 'Ayudas al alquiler del gobierno.', url: 'https://www.mivau.gob.es/vivienda/planes/plan-estatal-vivienda.html', category: 'housing', region: 'national', source: 'MITMA', tags: ['ayudas','alquiler'], free: true },
  { id: 'hse-12', title: 'AVRA - Andalucía Vivienda', description: 'Agencia de vivienda y rehabilitación de Andalucía.', url: 'https://www.juntadeandalucia.es/organismos/fomentoinfrastructurestormwater/areas/vivienda.html', category: 'housing', region: 'andalucia', source: 'AVRA', tags: ['vivienda','andalucía'], free: true },
  { id: 'hse-13', title: 'INCASOL - Cataluña', description: 'Instituto Catalán del Suelo.', url: 'https://habitatge.gencat.cat/', category: 'housing', region: 'cataluna', source: 'INCASOL', tags: ['vivienda','cataluña'], free: true },
  { id: 'hse-14', title: 'IVIMA - Madrid', description: 'Instituto de la Vivienda de Madrid.', url: 'https://www.comunidad.madrid/servicios/vivienda', category: 'housing', region: 'madrid', source: 'IVIMA', tags: ['vivienda','madrid'], free: true },
  { id: 'hse-15', title: 'IVSA - Valencia', description: 'Instituto Valenciano de Suelo y Vivienda.', url: 'https://www.gva.es/vivienda', category: 'housing', region: 'comunidad-valenciana', source: 'IVSA', tags: ['vivienda','valencia'], free: true },
  { id: 'hse-16', title: 'AVIS - Sevilla', description: 'Agencia de Vivienda y Rehabilitación de Sevilla.', url: 'https://www.juntadeandalucia.es/organismos/fomentoinfrastructurestormwater/areas/vivienda.html', category: 'housing', region: 'andalucia', source: 'AVIS', tags: ['vivienda'], free: true },
  { id: 'hse-17', title: 'Vivecaja - Vivienda Social', description: 'Vivienda social y protegida.', url: 'https://www.vivecaja.es/', category: 'housing', region: 'national', source: 'Vivecaja', tags: ['social'], free: true },
  { id: 'hse-18', title: 'Bono Social Eléctrico', description: 'Descuento en la factura eléctrica para hogares vulnerables.', url: 'https://www.miteco.gob.es/es/industria/temas/energia-y-minas/bono-social-electrico.html', category: 'housing', region: 'national', source: 'MITERD', tags: ['energía','bono'], free: true },
  { id: 'hse-19', title: 'Bono Térmico', description: 'Ayuda para calefacción.', url: 'https://www.miteco.gob.es/es/industria/temas/energia-y-minas/bono-termico.html', category: 'housing', region: 'national', source: 'MITERD', tags: ['calefacción'], free: true },
  { id: 'hse-20', title: 'ONG - Desahucios Madrid', description: 'Asistencia legal ante desahucios.', url: 'https://www.ayto-madrid.es/', category: 'housing', region: 'madrid', source: 'Ayuntamiento Madrid', tags: ['desahucio'], free: true },
  { id: 'hse-21', title: 'PAH - Plataforma Afectados Hipoteca', description: 'Asistencia a afectados por hipotecas y desahucios.', url: 'https://afectadosporlahipoteca.com/', category: 'legal', region: 'national', source: 'PAH', tags: ['desahucio','hipoteca'], free: true },
  { id: 'hse-22', title: 'Fianza - Depositaria', description: 'Información sobre depósito de fianzas.', url: 'https://www.comunidad.madrid/servicios/vivienda/fianzas-alquiler', category: 'housing', region: 'madrid', source: 'Comunidad Madrid', tags: ['fianza'], free: true },
  { id: 'hse-23', title: 'Ley de Arrendamientos Urbanos (LAU)', description: 'Texto refundido de la LAU.', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1994-18803', category: 'legal', region: 'national', source: 'BOE', tags: ['LAU','alquiler'], free: true },
  { id: 'hse-24', title: 'Ley 12/2023 Vivienda', description: 'Ley de vivienda 2023: límites al alquiler.', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-12601', category: 'legal', region: 'national', source: 'BOE', tags: ['vivienda','ley'], free: true },
  { id: 'hse-25', title: 'Colegio de Administradores de Fincas', description: 'Buscador de administradores de fincas.', url: 'https://www.egfcof.org/', category: 'housing', region: 'national', source: 'EGFCOF', tags: ['comunidad','vecinos'], free: true },
  { id: 'hse-26', title: 'Consumo - Reclamaciones Vivienda', description: 'Cómo reclamar ante problemas de vivienda.', url: 'https://www.consumo.gob.es/', category: 'legal', region: 'national', source: 'Consumo', tags: ['reclamación'], free: true },
  { id: 'hse-27', title: 'Abogados - Desahucios Gratis', description: 'Asistencia jurídica gratuita ante desahucios.', url: 'https://www.mjusticia.gob.es/es/ciudadania/justicia-gratuita', category: 'legal', region: 'national', source: 'Justicia', tags: ['desahucio','gratis'], free: true },
  { id: 'hse-28', title: 'ARABA - Vivienda Vasca', description: 'Vivienda pública del País Vasco.', url: 'https://www.euskadi.eus/vivienda/', category: 'housing', region: 'pais-vasco', source: 'Gobierno Vasco', tags: ['vivienda','vasco'], free: true },
  { id: 'hse-29', title: 'VIVES - Vivienda Cataluña', description: 'Promotora de vivienda catalana.', url: 'https://habitatge.gencat.cat/', category: 'housing', region: 'cataluna', source: 'INCASOL', tags: ['vivienda'], free: true },
  { id: 'hse-30', title: 'Banco de España - Hipotecas', description: 'Guía oficial de hipotecas del BdE.', url: 'https://www.bde.es/f/webbde/SES/secciones/Publicaciones/Informes/Guia_Hipotecarios/', category: 'banking', region: 'national', source: 'BdE', tags: ['hipoteca','guía'], free: true },
];

// ============================================================
// EMERGENCY CONTACTS (30+)
// ============================================================
const emergencyResources: Resource[] = [
  { id: 'emg-1', title: '112 - Emergencias', description: 'Número único europeo de emergencias. Gratuito, 24h, multilingüe.', url: 'https://www.112.es/', category: 'emergency', region: 'national', source: '112', tags: ['112','24h'], free: true },
  { id: 'emg-2', title: '061 - Urgencias Sanitarias', description: 'Teléfono de urgencias sanitarias no vitales.', url: 'https://www.112.es/', category: 'emergency', region: 'national', source: '061', tags: ['061','sanitarias'], free: true },
  { id: 'emg-3', title: '062 - Guardia Civil', description: 'Guardia Civil, emergencias.', url: 'https://www.guardiacivil.es/', category: 'emergency', region: 'national', source: 'Guardia Civil', tags: ['062','guardia civil'], free: true },
  { id: 'emg-4', title: '091 - Policía Nacional', description: 'Policía Nacional de España.', url: 'https://www.policia.es/', category: 'emergency', region: 'national', source: 'Policía Nacional', tags: ['091','policía'], free: true },
  { id: 'emg-5', title: '092 - Policía Local', description: 'Policía Local de tu ciudad.', url: 'https://www.policia.es/', category: 'emergency', region: 'national', source: 'Policía Local', tags: ['092','local'], free: true },
  { id: 'emg-6', title: '080 - Bomberos', description: 'Bomberos de tu ciudad.', url: 'https://www.112.es/', category: 'emergency', region: 'national', source: 'Bomberos', tags: ['080','bomberos'], free: true },
  { id: 'emg-7', title: '016 - Violencia de Género', description: 'Teléfono gratuito de ayuda a víctimas de violencia de género.', url: 'https://violenciagenero.igualdad.gob.es/', category: 'emergency', region: 'national', source: 'Igualdad', tags: ['016','violencia'], free: true },
  { id: 'emg-8', title: '024 - Salud Mental', description: 'Teléfono gratuito de salud mental 24h.', url: 'https://www.024.es/', category: 'emergency', region: 'national', source: '024', tags: ['024','salud mental'], free: true },
  { id: 'emg-9', title: '900 222 100 - Cruz Roja', description: 'Cruz Roja: ayuda humanitaria y social.', url: 'https://www2.cruzroja.es/', category: 'emergency', region: 'national', source: 'Cruz Roja', tags: ['cruz roja'], free: true },
  { id: 'emg-10', title: '900 20 20 10 - Ayuda Niños ANAR', description: 'Ayuda a niños y adolescentes.', url: 'https://www.anar.org/', category: 'emergency', region: 'national', source: 'ANAR', tags: ['infancia'], free: true },
  { id: 'emg-11', title: '717 003 717 - Teléfono Esperanza', description: 'Apoyo emocional 24h gratuito.', url: 'https://www.telefonodelaesperanza.org/', category: 'emergency', region: 'national', source: 'Teléfono Esperanza', tags: ['emocional'], free: true },
  { id: 'emg-12', title: '900 100 333 - Inspección Trabajo', description: 'Denuncias laborales.', url: 'https://www.empleo.gob.es/itss/', category: 'emergency', region: 'national', source: 'ITSS', tags: ['laboral','denuncia'], free: true },
  { id: 'emg-13', title: '900 200 220 - Cita Sanitaria', description: 'Cita sanitaria telefónica.', url: 'https://citaprevia.sanidad.gob.es/', category: 'health', region: 'national', source: 'Sanidad', tags: ['cita','sanitaria'], free: true },
  { id: 'emg-14', title: '900 118 118 - Atención al Consumidor', description: 'Teléfono de atención al consumidor.', url: 'https://www.consumo.gob.es/', category: 'legal', region: 'national', source: 'Consumo', tags: ['consumidor'], free: true },
  { id: 'emg-15', title: '91 530 69 69 - CEAR', description: 'Teléfono de ayuda al refugiado de CEAR.', url: 'https://www.cear.es/', category: 'emergency', region: 'national', source: 'CEAR', tags: ['refugiado'], free: true },
  { id: 'emg-16', title: '900 202 202 - Salvamento Marítimo', description: 'Emergencias marítimas.', url: 'https://www.salvamentomaritimo.es/', category: 'emergency', region: 'national', source: 'Salvamento Marítimo', tags: ['marítimo'], free: true },
  { id: 'emg-17', title: 'Embajada de Marruecos', description: 'Embajada de Marruecos en España: 91 319 19 99.', url: 'https://www.exteriores.gob.es/Embajados/rabat/es/Embajada/', category: 'emergency', region: 'national', source: 'Embajada Marruecos', tags: ['embajada','marruecos'], free: true },
  { id: 'emg-18', title: 'Embajada de Rumanía', description: 'Embajada de Rumanía en España: 91 411 31 31.', url: 'https://www.mae.ro/embajada-madrid', category: 'emergency', region: 'national', source: 'Embajada Rumanía', tags: ['embajada','rumanía'], free: true },
  { id: 'emg-19', title: 'Embajada de Colombia', description: 'Embajada de Colombia en España.', url: 'https://espana.embajada.gov.co/', category: 'emergency', region: 'national', source: 'Embajada Colombia', tags: ['embajada','colombia'], free: true },
  { id: 'emg-20', title: 'Embajada de Ecuador', description: 'Embajada de Ecuador en España.', url: 'https://www.cancilleria.gob.ec/embajada-de-ecuador-en-espana/', category: 'emergency', region: 'national', source: 'Embajada Ecuador', tags: ['embajada','ecuador'], free: true },
  { id: 'emg-21', title: 'Embajada de China', description: 'Embajada de China en España.', url: 'http://es.china-embassy.gov.cn/', category: 'emergency', region: 'national', source: 'Embajada China', tags: ['embajada','china'], free: true },
  { id: 'emg-22', title: 'Embajada de India', description: 'Embajada de India en España.', url: 'https://www.indianembassy.gov.in/', category: 'emergency', region: 'national', source: 'Embajada India', tags: ['embajada','india'], free: true },
  { id: 'emg-23', title: 'Embajada de Bolivia', description: 'Embajada de Bolivia en España.', url: 'https://www.embol.esp.es/', category: 'emergency', region: 'national', source: 'Embajada Bolivia', tags: ['embajada','bolivia'], free: true },
  { id: 'emg-24', title: 'Embajada de Perú', description: 'Embajada de Perú en España.', url: 'https://www.embaperu.es/', category: 'emergency', region: 'national', source: 'Embajada Perú', tags: ['embajada','perú'], free: true },
  { id: 'emg-25', title: 'Embajada de Argentina', description: 'Embajada de Argentina en España.', url: 'https://esem.mrecic.gov.ar/', category: 'emergency', region: 'national', source: 'Embajada Argentina', tags: ['embajada','argentina'], free: true },
  { id: 'emg-26', title: 'Embajada de Venezuela', description: 'Embajada de Venezuela en España.', url: 'https://www.embaven.es/', category: 'emergency', region: 'national', source: 'Embajada Venezuela', tags: ['embajada','venezuela'], free: true },
  { id: 'emg-27', title: 'Embajada de Ucrania', description: 'Embajada de Ucrania en España.', url: 'https://www.mfa.gov.ua/spain/', category: 'emergency', region: 'national', source: 'Embajada Ucrania', tags: ['embajada','ucrania'], free: true },
  { id: 'emg-28', title: 'Embajada de Brasil', description: 'Embajada de Brasil en España.', url: 'https://www.gov.br/pt-br/representacoes/espanha', category: 'emergency', region: 'national', source: 'Embajada Brasil', tags: ['embajada','brasil'], free: true },
  { id: 'emg-29', title: 'Consulado Honorario Senegal', description: 'Consulado de Senegal en España.', url: 'https://www.exteriores.gob.es/', category: 'emergency', region: 'national', source: 'Consulado Senegal', tags: ['consulado','senegal'], free: true },
  { id: 'emg-30', title: 'Teléfono Menores Extranjeros', description: 'Teléfono para menores extranjeros no acompañados.', url: 'https://www.defensordelmenor.es/', category: 'emergency', region: 'national', source: 'Defensor Menor', tags: ['menores','extranjería'], free: true },
];

// ============================================================
// LEGAL AID - Additional (30+)
// ============================================================
const legalResources: Resource[] = [
  { id: 'lgl-1', title: 'Justicia Gratuita - Sede', description: 'Información sobre asistencia jurídica gratuita.', url: 'https://www.mjusticia.gob.es/es/ciudadania/justicia-gratuita', category: 'legal', region: 'national', source: 'Justicia', tags: ['abogado de oficio','gratis'], free: true },
  { id: 'lgl-2', title: 'Buscador de Abogados', description: 'Encuentra abogados por especialidad y provincia.', url: 'https://www.abogacia.es/', category: 'legal', region: 'national', source: 'CGAE', tags: ['abogados'], free: true },
  { id: 'lgl-3', title: 'Notarios - Buscador', description: 'Buscador oficial de notarios.', url: 'https://www.notariado.org/', category: 'legal', region: 'national', source: 'Notariado', tags: ['notario'], free: true },
  { id: 'lgl-4', title: 'Registradores - Buscador', description: 'Encuentra el registro de la propiedad.', url: 'https://www.registradores.org/', category: 'legal', region: 'national', source: 'Registradores', tags: ['registro'], free: true },
  { id: 'lgl-5', title: 'BOE - Boletín Oficial', description: 'Buscador de leyes en el BOE.', url: 'https://www.boe.es/', category: 'legal', region: 'national', source: 'BOE', tags: ['BOE','leyes'], free: true },
  { id: 'lgl-6', title: 'Ley de Extranjería (LO 4/2000)', description: 'Texto consolidado de la Ley de Extranjería.', url: 'https://www.boe.es/buscar/act.php?id=LOEX-20000111', category: 'legal', region: 'national', source: 'BOE', tags: ['extranjería','ley'], free: true },
  { id: 'lgl-7', title: 'Reglamento Extranjería', description: 'Reglamento de la Ley de Extranjería.', url: 'https://www.boe.es/buscar/act.php?id=REXT-20110430', category: 'legal', region: 'national', source: 'BOE', tags: ['reglamento','extranjería'], free: true },
  { id: 'lgl-8', title: 'Reforma Extranjería 2024', description: 'Reforma RD 610/2024 de arraigo.', url: 'https://www.boe.es/', category: 'legal', region: 'national', source: 'BOE', tags: ['reforma','arrAIgo'], free: true },
  { id: 'lgl-9', title: 'Código Civil', description: 'Código Civil de España.', url: 'https://www.boe.es/buscar/act.php?id=CodigoCivil', category: 'legal', region: 'national', source: 'BOE', tags: ['civil','código'], free: true },
  { id: 'lgl-10', title: 'Ley de Igualdad', description: 'Ley Orgánica para la igualdad efectiva.', url: 'https://www.boe.es/buscar/act.php?id=LOI-20070322', category: 'legal', region: 'national', source: 'BOE', tags: ['igualdad'], free: true },
  { id: 'lgl-11', title: 'Ley Dependencia', description: 'Ley de Promoción de la Autonomía Personal.', url: 'https://www.boe.es/buscar/act.php?id=LEYPAD-20061214', category: 'legal', region: 'national', source: 'BOE', tags: ['dependencia'], free: true },
  { id: 'lgl-12', title: 'Ley Integración Inmigrantes', description: 'Ley orgánica de integración de inmigrantes.', url: 'https://www.boe.es/buscar/act.php?id=LOI-20000111', category: 'legal', region: 'national', source: 'BOE', tags: ['integración','inmigración'], free: true },
  { id: 'lgl-13', title: 'Ley Asilo', description: 'Ley de Protección Internacional.', url: 'https://www.boe.es/buscar/act.php?id=LOPI-20091215', category: 'legal', region: 'national', source: 'BOE', tags: ['asilo','refugio'], free: true },
  { id: 'lgl-14', title: 'Registro Central Extranjeros', description: 'Registro central de extranjeros.', url: 'https://www.policia.es/', category: 'legal', region: 'national', source: 'Policía Nacional', tags: ['registro','extranjeros'], free: true },
  { id: 'lgl-15', title: 'Comisión Justicia Gratuita', description: 'Comisión nacional de justicia gratuita.', url: 'https://www.mjusticia.gob.es/', category: 'legal', region: 'national', source: 'Justicia', tags: ['justicia gratuita'], free: true },
  { id: 'lgl-16', title: 'Sindicato CCOO', description: 'Asesoramiento laboral gratuito a trabajadores.', url: 'https://www.ccoo.es/', category: 'legal', region: 'national', source: 'CCOO', tags: ['sindicato','laboral'], free: true },
  { id: 'lgl-17', title: 'Sindicato UGT', description: 'Asesoramiento laboral y formación.', url: 'https://www.ugt.es/', category: 'legal', region: 'national', source: 'UGT', tags: ['sindicato','laboral'], free: true },
  { id: 'lgl-18', title: 'USO - Sindicato', description: 'Unión Sindical Obrera.', url: 'https://www.uso.es/', category: 'legal', region: 'national', source: 'USO', tags: ['sindicato'], free: true },
  { id: 'lgl-19', title: 'CGT - Sindicato', description: 'Confederación General del Trabajo.', url: 'https://www.cgt.org.es/', category: 'legal', region: 'national', source: 'CGT', tags: ['sindicato'], free: true },
  { id: 'lgl-20', title: 'SATE - Asistencia Legal', description: 'Servicio de asistencia a víctimas.', url: 'https://www.policia.es/', category: 'legal', region: 'national', source: 'Policía', tags: ['víctimas'], free: true },
  { id: 'lgl-21', title: 'Oficina Extranjería - Cita', description: 'Cita previa para extranjería.', url: 'https://sede.administracionpublica.gob.es/icpplus/index.html', category: 'documentation', region: 'national', source: 'AGE', tags: ['cita','extranjería'], free: true },
  { id: 'lgl-22', title: 'Solicitud NIE - EX-15', description: 'Modelo EX-15 para solicitar NIE.', url: 'https://sede.administracionpublica.gob.es/icpplus/index.html', category: 'documentation', region: 'national', source: 'Extranjería', tags: ['NIE','EX-15'], free: true },
  { id: 'lgl-23', title: 'Certificado UE - EX-18', description: 'Certificado de registro de ciudadano UE.', url: 'https://sede.administracionpublica.gob.es/icpplus/index.html', category: 'documentation', region: 'national', source: 'Extranjería', tags: ['UE','EX-18'], free: true },
  { id: 'lgl-24', title: 'Residencia Inicial - EX-01', description: 'Modelo EX-01 para autorización de residencia.', url: 'https://sede.administracionpublica.gob.es/icpplus/index.html', category: 'documentation', region: 'national', source: 'Extranjería', tags: ['residencia','EX-01'], free: true },
  { id: 'lgl-25', title: 'Arraigo Social - EX-10', description: 'Modelo EX-10 para arraigo social.', url: 'https://sede.administracionpublica.gob.es/icpplus/index.html', category: 'documentation', region: 'national', source: 'Extranjería', tags: ['arraigo','EX-10'], free: true },
  { id: 'lgl-26', title: 'Reagrupación - EX-02', description: 'Modelo EX-02 para reagrupación familiar.', url: 'https://sede.administracionpublica.gob.es/icpplus/index.html', category: 'documentation', region: 'national', source: 'Extranjería', tags: ['reagrupación','EX-02'], free: true },
  { id: 'lgl-27', title: 'Tasa 790/012 - Extranjería', description: 'Tasa 790 código 012 para extranjería.', url: 'https://sede.administracionpublica.gob.es/procedimientos/index.html', category: 'documentation', region: 'national', source: 'Extranjería', tags: ['tasa','790'], free: false },
  { id: 'lgl-28', title: 'Asilo - Solicitud', description: 'Cómo solicitar asilo en España.', url: 'https://www.interior.gob.es/opencms/es/asuntos-migratorios/extranjeria/proteccion-internacional/', category: 'legal', region: 'national', source: 'Interior', tags: ['asilo'], free: true },
  { id: 'lgl-29', title: 'Nacionalidad - Sede Electrónica', description: 'Sede electrónica para trámites de nacionalidad.', url: 'https://www.mjusticia.gob.es/es/ciudadania/nacionalidad-ciudadania', category: 'legal', region: 'national', source: 'Justicia', tags: ['nacionalidad'], free: true },
  { id: 'lgl-30', title: 'Tasa Nacionalidad - 790/026', description: 'Tasa 790 código 026 para nacionalidad.', url: 'https://sede.administracionpublica.gob.es/procedimientos/index.html', category: 'documentation', region: 'national', source: 'Justicia', tags: ['tasa','nacionalidad'], free: false },
];

// ============================================================
// ADDITIONAL AI PROMPT GUIDES + RESOURCES (40+)
// ============================================================
const aiGuides: Resource[] = [
  { id: 'aig-1', title: 'Awesome ChatGPT Prompts (ES)', description: 'Lista de prompts para ChatGPT en español.', url: 'https://github.com/f/awesome-chatgpt-prompts', category: 'ai-tools', region: 'national', source: 'GitHub', tags: ['IA','prompts'], free: true },
  { id: 'aig-2', title: 'OpenAI Cookbook', description: 'Recetas y ejemplos de uso de la API de OpenAI.', url: 'https://github.com/openai/openai-cookbook', category: 'ai-tools', region: 'national', source: 'OpenAI', tags: ['IA','API'], free: true },
  { id: 'aig-3', title: 'Google AI - Gemini Docs', description: 'Documentación oficial de Gemini.', url: 'https://ai.google.dev/', category: 'ai-tools', region: 'national', source: 'Google', tags: ['Gemini','docs'], free: true },
  { id: 'aig-4', title: 'Anthropic API Docs', description: 'Documentación de la API de Claude.', url: 'https://docs.anthropic.com/', category: 'ai-tools', region: 'national', source: 'Anthropic', tags: ['Claude','docs'], free: true },
  { id: 'aig-5', title: 'Microsoft Copilot - Aprende', description: 'Aprende a usar Copilot de Microsoft.', url: 'https://learn.microsoft.com/copilot/', category: 'ai-tools', region: 'national', source: 'Microsoft', tags: ['Copilot'], free: true },
  { id: 'aig-6', title: 'DeepSeek API', description: 'Documentación y API de DeepSeek.', url: 'https://platform.deepseek.com/', category: 'ai-tools', region: 'national', source: 'DeepSeek', tags: ['DeepSeek','API'], free: true },
  { id: 'aig-7', title: 'Hugging Face Learn', description: 'Cursos gratis de IA de Hugging Face.', url: 'https://huggingface.co/learn', category: 'ai-tools', region: 'national', source: 'Hugging Face', tags: ['IA','cursos'], free: true },
  { id: 'aig-8', title: 'Google AI Essentials', description: 'Curso básico de IA de Google.', url: 'https://www.coursera.org/learn/google-ai-essentials', category: 'ai-tools', region: 'national', source: 'Google + Coursera', tags: ['IA','curso'], free: false },
  { id: 'aig-9', title: 'Elements of AI (Español)', description: 'Curso gratis de IA de la Universidad de Helsinki.', url: 'https://www.elementsofai.es/', category: 'ai-tools', region: 'national', source: 'Helsinki', tags: ['IA','curso','gratis'], free: true },
  { id: 'aig-10', title: 'AI for Everyone - Coursera', description: 'Curso de Andrew Ng sobre IA para todos.', url: 'https://www.coursera.org/learn/ai-for-everyone', category: 'ai-tools', region: 'national', source: 'Coursera', tags: ['IA','curso'], free: true },
  { id: 'aig-11', title: 'Fast.ai - Cursos Gratis', description: 'Cursos prácticos de machine learning gratis.', url: 'https://www.fast.ai/', category: 'ai-tools', region: 'national', source: 'Fast.ai', tags: ['ML','curso'], free: true },
  { id: 'aig-12', title: 'Google ML Crash Course', description: 'Curso intensivo de ML de Google, gratis.', url: 'https://developers.google.com/machine-learning/crash-course', category: 'ai-tools', region: 'national', source: 'Google', tags: ['ML','curso'], free: true },
  { id: 'aig-13', title: 'TensorFlow Tutorials', description: 'Tutoriales oficiales de TensorFlow.', url: 'https://www.tensorflow.org/tutorials', category: 'ai-tools', region: 'national', source: 'Google', tags: ['TensorFlow'], free: true },
  { id: 'aig-14', title: 'PyTorch Tutorials', description: 'Aprende PyTorch con tutoriales oficiales.', url: 'https://pytorch.org/tutorials/', category: 'ai-tools', region: 'national', source: 'PyTorch', tags: ['PyTorch'], free: true },
  { id: 'aig-15', title: 'Keras Documentation', description: 'Documentación y ejemplos de Keras.', url: 'https://keras.io/', category: 'ai-tools', region: 'national', source: 'Keras', tags: ['Keras'], free: true },
  { id: 'aig-16', title: 'Scikit-learn Tutorials', description: 'Aprende ML con scikit-learn.', url: 'https://scikit-learn.org/stable/tutorial/index.html', category: 'ai-tools', region: 'national', source: 'scikit-learn', tags: ['ML'], free: true },
  { id: 'aig-17', title: 'Pandas Documentation', description: 'Documentación de pandas para análisis de datos.', url: 'https://pandas.pydata.org/docs/', category: 'ai-tools', region: 'national', source: 'pandas', tags: ['datos'], free: true },
  { id: 'aig-18', title: 'NumPy Documentation', description: 'Documentación oficial de NumPy.', url: 'https://numpy.org/doc/stable/', category: 'ai-tools', region: 'national', source: 'NumPy', tags: ['datos'], free: true },
  { id: 'aig-19', title: 'Matplotlib Tutorials', description: 'Visualización de datos con matplotlib.', url: 'https://matplotlib.org/stable/tutorials/index.html', category: 'ai-tools', region: 'national', source: 'matplotlib', tags: ['visualización'], free: true },
  { id: 'aig-20', title: 'Google Colab', description: 'Notebooks de Python gratis en la nube, con GPU.', url: 'https://colab.research.google.com/', category: 'ai-tools', region: 'national', source: 'Google', tags: ['Python','GPU','gratis'], free: true },
  { id: 'aig-21', title: 'Kaggle - Aprende ML', description: 'Cursos gratis y competiciones de ML.', url: 'https://www.kaggle.com/learn', category: 'ai-tools', region: 'national', source: 'Kaggle', tags: ['ML','cursos'], free: true },
  { id: 'aig-22', title: 'IBM SkillsBuild - IA', description: 'Cursos gratis de IBM sobre IA.', url: 'https://skillsbuild.org/', category: 'ai-tools', region: 'national', source: 'IBM', tags: ['IA','cursos'], free: true },
  { id: 'aig-23', title: 'AWS Skill Builder', description: 'Formación gratis en cloud e IA de AWS.', url: 'https://aws.amazon.com/es/training/learn-about-machine-learning/', category: 'ai-tools', region: 'national', source: 'AWS', tags: ['cloud','IA'], free: true },
  { id: 'aig-24', title: 'Intel AI Academy', description: 'Academia de IA de Intel, cursos gratis.', url: 'https://software.intel.com/content/www/us/en/develop/training/ai-academy.html', category: 'ai-tools', region: 'national', source: 'Intel', tags: ['IA','cursos'], free: true },
  { id: 'aig-25', title: 'NVIDIA Deep Learning', description: 'Cursos de deep learning de NVIDIA.', url: 'https://www.nvidia.com/es-es/training/', category: 'ai-tools', region: 'national', source: 'NVIDIA', tags: ['DL','cursos'], free: true },
  { id: 'aig-26', title: 'Weights & Biases - Tutorials', description: 'Tutoriales de MLOps.', url: 'https://docs.wandb.ai/', category: 'ai-tools', region: 'national', source: 'W&B', tags: ['MLOps'], free: true },
  { id: 'aig-27', title: 'LangChain Documentation', description: 'Framework para apps con LLMs.', url: 'https://python.langchain.com/', category: 'ai-tools', region: 'national', source: 'LangChain', tags: ['LLM','framework'], free: true },
  { id: 'aig-28', title: 'LlamaIndex', description: 'Framework para RAG con LLMs.', url: 'https://www.llamaindex.ai/', category: 'ai-tools', region: 'national', source: 'LlamaIndex', tags: ['RAG','LLM'], free: true },
  { id: 'aig-29', title: 'Ollama - LLM Local', description: 'Ejecuta LLMs gratis en tu ordenador.', url: 'https://ollama.com/', category: 'ai-tools', region: 'national', source: 'Ollama', tags: ['LLM','local'], free: true },
  { id: 'aig-30', title: 'LM Studio', description: 'App de escritorio para usar LLMs locales.', url: 'https://lmstudio.ai/', category: 'ai-tools', region: 'national', source: 'LM Studio', tags: ['LLM','desktop'], free: true },
  { id: 'aig-31', title: 'Replicate', description: 'Ejecuta modelos open-source en la nube.', url: 'https://replicate.com/', category: 'ai-tools', region: 'national', source: 'Replicate', tags: ['modelos','cloud'], free: false },
  { id: 'aig-32', title: 'Together AI', description: 'API de modelos open-source.', url: 'https://www.together.ai/', category: 'ai-tools', region: 'national', source: 'Together AI', tags: ['API','LLM'], free: false },
  { id: 'aig-33', title: 'Anyscale', description: 'Plataforma para apps de IA escalables.', url: 'https://www.anyscale.com/', category: 'ai-tools', region: 'national', source: 'Anyscale', tags: ['IA','plataforma'], free: false },
  { id: 'aig-34', title: 'Modal', description: 'Ejecuta código Python en la nube para IA.', url: 'https://modal.com/', category: 'ai-tools', region: 'national', source: 'Modal', tags: ['cloud','Python'], free: false },
  { id: 'aig-35', title: 'Streamlit', description: 'Crea apps web de IA en Python fácilmente.', url: 'https://streamlit.io/', category: 'ai-tools', region: 'national', source: 'Streamlit', tags: ['apps','Python'], free: true },
  { id: 'aig-36', title: 'Gradio', description: 'Crea demos de ML en Python.', url: 'https://www.gradio.app/', category: 'ai-tools', region: 'national', source: 'Gradio', tags: ['demos','Python'], free: true },
  { id: 'aig-37', title: 'Open WebUI', description: 'Interfaz web open-source para LLMs.', url: 'https://openwebui.com/', category: 'ai-tools', region: 'national', source: 'Open WebUI', tags: ['UI','LLM'], free: true },
  { id: 'aig-38', title: 'LibreChat', description: 'ChatGPT open-source, multi-modelo.', url: 'https://www.librechat.ai/', category: 'ai-tools', region: 'national', source: 'LibreChat', tags: ['chat','open-source'], free: true },
  { id: 'aig-39', title: 'AnythingLLM', description: 'Chat privado con tus documentos.', url: 'https://anythingllm.com/', category: 'ai-tools', region: 'national', source: 'AnythingLLM', tags: ['RAG','privado'], free: true },
  { id: 'aig-40', title: 'PrivateGPT', description: 'Chatea con tus documentos localmente.', url: 'https://github.com/imartinez/privateGPT', category: 'ai-tools', region: 'national', source: 'GitHub', tags: ['privado','documentos'], free: true },
];

// ============================================================
// FINAL COMBINED EXPORT
// ============================================================
export const RESOURCES: Resource[] = [
  ...GLOBAL_RESOURCES,
  ...nationalGov,
  ...buildCommunityResources(),
  ...buildCityResources(),
  ...aiTools,
  ...cvTools,
  ...officeLearning,
  ...githubRepos,
  ...ngos,
  ...employmentResources,
  ...bankingResources,
  ...languageLearning,
  ...healthResources,
  ...familyResources,
  ...transportResources,
  ...housingResources,
  ...emergencyResources,
  ...legalResources,
  ...aiGuides,
];

// Search helper
export function searchResources(
  query: string,
  filters?: { category?: ResourceCategory | 'all'; region?: ResourceRegion | 'all' }
): Resource[] {
  const q = query.trim().toLowerCase();
  return RESOURCES.filter((r) => {
    const matchesQuery =
      !q ||
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.source?.toLowerCase().includes(q) ||
      r.tags?.some((t) => t.toLowerCase().includes(q));
    const matchesCategory =
      !filters?.category || filters.category === 'all' || r.category === filters.category;
    const matchesRegion =
      !filters?.region || filters.region === 'all' || r.region === filters.region;
    return matchesQuery && matchesCategory && matchesRegion;
  });
}

console.log('Total resources:', RESOURCES.length);
