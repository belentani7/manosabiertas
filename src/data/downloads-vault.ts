export type DownloadVaultKind = 'corpus' | 'folder' | 'zip' | 'doc' | 'pdf' | 'media' | 'tool';

export interface DownloadVaultEntry {
  id: string;
  title: string;
  kind: DownloadVaultKind;
  location: string;
  summary: string;
  tags: string[];
  evidence: string;
}

export const DOWNLOADS_SOURCE_FAMILIES: DownloadVaultEntry[] = [
  {
    id: 'family-digital-basics',
    title: 'Alfabetización digital',
    kind: 'corpus',
    location: 'Selección didáctica saneada',
    summary: 'Material para aprender ordenador, móvil, Internet, seguridad y archivos desde cero.',
    tags: ['nivel 0', 'seguridad', 'autonomía'],
    evidence: 'integrado en cursos y simuladores',
  },
  {
    id: 'family-office',
    title: 'Ofimática para el empleo',
    kind: 'folder',
    location: 'Selección didáctica saneada',
    summary: 'Prácticas guiadas de documentos, hojas de cálculo, presentaciones y correo.',
    tags: ['Word', 'Excel', 'PowerPoint', 'Gmail'],
    evidence: 'simulaciones interactivas disponibles',
  },
  {
    id: 'family-open-systems',
    title: 'Windows y Linux',
    kind: 'folder',
    location: 'Selección didáctica saneada',
    summary: 'Rutas seguras para orientarse, gestionar archivos, instalar aplicaciones y practicar terminal.',
    tags: ['Windows', 'Linux', 'terminal'],
    evidence: 'curso Linux sin Miedo y simuladores',
  },
  {
    id: 'family-ai',
    title: 'IA cotidiana y responsable',
    kind: 'corpus',
    location: 'Selección didáctica saneada',
    summary: 'Ejercicios de ChatGPT, Claude, Copilot y asistentes móviles con revisión humana.',
    tags: ['IA', 'prompts', 'privacidad'],
    evidence: 'material recuperado y adaptado',
  },
  {
    id: 'family-web',
    title: 'Creación web abierta',
    kind: 'folder',
    location: 'Selección didáctica saneada',
    summary: 'Proyectos de HTML, CSS y publicación responsable para aprender construyendo.',
    tags: ['HTML', 'CSS', 'proyectos'],
    evidence: 'paquetes de práctica catalogados',
  },
];

export const DOWNLOADS_FEATURED_PACKAGES: DownloadVaultEntry[] = [
  {
    id: 'zip-catalogo-global',
    title: 'Catálogo didáctico global de Manos Abiertas',
    kind: 'zip',
    location: 'Fuente local recuperada · acceso interno',
    summary: 'Marco curricular con 1.000 puntos, 10 áreas y 39 idiomas, convertido en mapa de aprendizaje.',
    tags: ['currículo', 'multilingüe', 'educación'],
    evidence: 'extraído y resumido; revisión pedagógica pendiente',
  },
  {
    id: 'zip-manos-abiertas-web',
    title: 'Proyecto web avanzado con HTML y CSS',
    kind: 'zip',
    location: 'Fuente local recuperada · acceso interno',
    summary: 'Paquete de práctica front-end para convertir una idea en una página accesible.',
    tags: ['frontend', 'HTML', 'CSS'],
    evidence: 'paquete identificado; licencia pendiente de revisión',
  },
  {
    id: 'zip-plataforma-educativa',
    title: 'Plataforma educativa de práctica',
    kind: 'zip',
    location: 'Fuente local recuperada · acceso interno',
    summary: 'Referencia compacta para estudiar navegación, contenidos y progreso de aprendizaje.',
    tags: ['plataforma', 'educación', 'web'],
    evidence: 'paquete catalogado; integración parcial',
  },
  {
    id: 'zip-qwen-python',
    title: 'Python asistido por IA',
    kind: 'zip',
    location: 'Fuente local recuperada · acceso interno',
    summary: 'Material de apoyo para practicar Python con un asistente y verificar cada resultado.',
    tags: ['Python', 'IA', 'práctica'],
    evidence: 'paquete catalogado; validación técnica pendiente',
  },
  {
    id: 'zip-financial-literacy',
    title: 'Calculadora para alfabetización financiera',
    kind: 'zip',
    location: 'Fuente local recuperada · acceso interno',
    summary: 'Prototipo de cálculo para enseñar conceptos básicos sin sustituir asesoramiento profesional.',
    tags: ['finanzas', 'cálculo', 'prudencia'],
    evidence: 'prototipo catalogado; contenido legal pendiente',
  },
];

export const DOWNLOADS_REFERENCE_DOCS: DownloadVaultEntry[] = [
  {
    id: 'ref-repo-audit',
    title: 'Auditoría de repositorio',
    kind: 'doc',
    location: 'Referencia interna saneada',
    summary: 'Lista de comprobación para revisar estructura, seguridad y mantenimiento.',
    tags: ['auditoría', 'repositorio'],
    evidence: 'documento Markdown inspeccionado',
  },
  {
    id: 'ref-quality-criteria',
    title: 'Criterios de calidad de producto',
    kind: 'doc',
    location: 'Referencia interna saneada',
    summary: 'Criterios de claridad, accesibilidad, rendimiento y confianza aplicables a cada módulo.',
    tags: ['calidad', 'WCAG', 'rendimiento'],
    evidence: 'documento Markdown inspeccionado',
  },
  {
    id: 'ref-open-education-map',
    title: 'Mapa de recursos educativos abiertos',
    kind: 'pdf',
    location: 'Referencia interna saneada',
    summary: 'Mapa multilingüe para localizar recursos y someterlos a revisión de licencia y vigencia.',
    tags: ['recursos abiertos', 'idiomas', 'licencias'],
    evidence: 'PDF recuperado; verificación externa pendiente',
  },
  {
    id: 'ref-ai-learning-plan',
    title: 'Plan gradual para aprender IA',
    kind: 'pdf',
    location: 'Referencia interna saneada',
    summary: 'Secuencia de práctica inmediata, autonomía y revisión crítica de resultados.',
    tags: ['IA', 'aprendizaje', 'verificación'],
    evidence: 'PDF recuperado y clasificado',
  },
];

export function getDownloadsVaultStats() {
  return {
    curatedSources:
      DOWNLOADS_SOURCE_FAMILIES.length + DOWNLOADS_FEATURED_PACKAGES.length + DOWNLOADS_REFERENCE_DOCS.length,
    sourceFamilies: DOWNLOADS_SOURCE_FAMILIES.length,
    featuredPackages: DOWNLOADS_FEATURED_PACKAGES.length,
    referenceDocs: DOWNLOADS_REFERENCE_DOCS.length,
  };
}
