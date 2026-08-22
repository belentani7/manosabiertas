import type { ExternalCourse } from './external-courses';

export interface RecoveredCourse extends Omit<ExternalCourse, 'url'> {
  url: string | null;
  sourceLabel: string;
  reviewStatus: 'pending-editorial' | 'pending-source' | 'pending-license' | 'approved';
}

export const RECOVERED_COURSES: RecoveredCourse[] = [
  {
    id: 'rc-meta-ai-whatsapp',
    title: 'Meta AI en mensajería: fuente recuperada',
    description:
      'Fuente didáctica sobre asistentes en mensajería. Requiere revisión editorial, de privacidad y de vigencia antes de convertirse en curso público.',
    provider: 'Archivo educativo local',
    providerType: 'platform',
    url: null,
    duration: 'Revisión pendiente',
    level: 'beginner',
    category: 'ai-ml',
    language: 'Español',
    certification: false,
    free: true,
    emoji: '🟦',
    tags: ['downloads', 'meta-ai', 'whatsapp', 'ia'],
    skills: ['WhatsApp', 'Meta AI', 'mensajes', 'traducción', 'imágenes', 'recordatorios'],
    sourceLabel: 'Documento educativo recuperado',
    reviewStatus: 'pending-editorial',
  },
  {
    id: 'rc-qwen-completo',
    title: 'Qwen: mapa práctico de IA recuperado',
    description:
      'Fuente didáctica sobre prompts, idiomas, imágenes y comunicación profesional. Aún no constituye un curso publicado.',
    provider: 'Archivo educativo local',
    providerType: 'platform',
    url: null,
    duration: 'Revisión pendiente',
    level: 'intermediate',
    category: 'ai-ml',
    language: 'Español',
    certification: false,
    free: true,
    emoji: '🤖',
    tags: ['downloads', 'qwen', 'prompts', 'ia'],
    skills: ['Qwen', 'prompts', 'multilingüe', 'imágenes', 'redacción', 'productividad'],
    sourceLabel: 'Guía educativa recuperada',
    reviewStatus: 'pending-editorial',
  },
  {
    id: 'rc-desempleo-cursos-gratis',
    title: 'Mapa de formación para personas desempleadas',
    description:
      'Fuente de orientación sobre formación gratuita y rutas de empleo. Sus enlaces, requisitos y posibles certificados necesitan verificación oficial.',
    provider: 'Archivo educativo local',
    providerType: 'government',
    url: null,
    duration: 'Verificación pendiente',
    level: 'beginner',
    category: 'employment',
    language: 'Español',
    certification: false,
    free: true,
    emoji: '💼',
    tags: ['downloads', 'empleo', 'fpo', 'sepe'],
    skills: ['SEPE', 'FPO', 'empleo', 'orientación laboral', 'cursos gratis'],
    sourceLabel: 'Análisis educativo recuperado',
    reviewStatus: 'pending-source',
  },
  {
    id: 'rc-ecosistema-abierto',
    title: 'Mapa de recursos educativos multilingües',
    description:
      'Fuente para localizar recursos educativos en portugués y otros idiomas. Cada recurso necesita revisión de licencia y vigencia antes de publicarse.',
    provider: 'Archivo educativo local',
    providerType: 'platform',
    url: null,
    duration: 'Licencias pendientes',
    level: 'beginner',
    category: 'education',
    language: 'Español',
    certification: false,
    free: true,
    emoji: '🌍',
    tags: ['downloads', 'idiomas', 'recursos', 'educacion'],
    skills: ['idiomas', 'recursos abiertos', 'portugués', 'autoestudio', 'mediateca'],
    sourceLabel: 'Mapa educativo recuperado',
    reviewStatus: 'pending-license',
  },
  {
    id: 'rc-catalogo-global-1000',
    title: 'Marco curricular global recuperado',
    description:
      'Fuente curricular de gran escala. Las cifras y unidades del paquete se conservan como hipótesis editoriales hasta completar su revisión pedagógica.',
    provider: 'Archivo educativo local',
    providerType: 'university',
    url: null,
    duration: 'Revisión pendiente',
    level: 'advanced',
    category: 'education',
    language: 'Español',
    certification: false,
    free: true,
    emoji: '📚',
    tags: ['downloads', 'curriculum', 'multilingue', 'catalogo'],
    skills: ['currículo', '39 idiomas', '10 áreas', 'pedagogía', 'trazabilidad'],
    sourceLabel: 'Paquete curricular recuperado',
    reviewStatus: 'pending-editorial',
  },
];

export function getRecoveredCourseStats() {
  const byCategory: Record<string, number> = {};
  const byLevel: Record<string, number> = { beginner: 0, intermediate: 0, advanced: 0 };
  let withCert = 0;

  RECOVERED_COURSES.forEach((course) => {
    byCategory[course.category] = (byCategory[course.category] || 0) + 1;
    byLevel[course.level]++;
    if (course.certification) withCert++;
  });

  return {
    total: RECOVERED_COURSES.length,
    byCategory,
    byLevel,
    withCert,
    free: RECOVERED_COURSES.filter((course) => course.free).length,
    pendingReview: RECOVERED_COURSES.filter((course) => course.reviewStatus).length,
  };
}
