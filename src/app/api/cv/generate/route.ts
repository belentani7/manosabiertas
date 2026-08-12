import { NextRequest } from 'next/server';
import { z } from 'zod';
import { invokeAIText } from '@/lib/ai-provider';
import { apiError, apiJson, enforceRateLimit, hasRemoteAIConsent, readJsonBody, reportServerError } from '@/lib/api-security';

export const runtime = 'nodejs';
export const maxDuration = 60;

const MAX_BODY_BYTES = 128_000;
const RATE_LIMIT = { limit: 8, windowMs: 10 * 60_000 };

const shortText = z.string().trim().max(200);
const cvRequestSchema = z.object({
  field: z.enum(['summary', 'experience']),
  fullName: shortText.optional(),
  profession: shortText.optional(),
  experiences: z.array(z.object({
    position: shortText,
    company: shortText,
    description: z.string().trim().max(3000),
    startDate: z.string().trim().max(40),
    endDate: z.string().trim().max(40),
  })).max(20).optional(),
  education: z.array(z.object({
    title: shortText,
    institution: shortText,
    year: z.string().trim().max(40),
    description: z.string().trim().max(2000),
  })).max(20).optional(),
  skills: z.array(z.string().trim().min(1).max(100)).max(30).optional(),
  language: z.string().trim().max(12).optional(),
});

type CVRequest = z.infer<typeof cvRequestSchema>;

const langInstruction: Record<string, string> = {
  es: 'Responde en español de España.',
  en: 'Respond in English.',
  ca: 'Respon en català.',
  'pt-BR': 'Responda em português brasileiro.',
  fr: 'Réponds en français.',
  ar: 'أجب بالعربية.',
  zh: '用中文回答.',
  hi: 'हिंदी में उत्तर दें.',
};

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function offlineSummary(body: CVRequest): string {
  const profession = body.profession || 'profesional';
  const skills = body.skills?.length ? body.skills.slice(0, 5).join(', ') : '';
  const hasExp = body.experiences?.some((e) => e.position || e.company);
  const exp = hasExp ? ` con experiencia en ${body.experiences?.slice(0, 2).map((e) => [e.position, e.company].filter(Boolean).join(' en ')).join(' y ')}` : '';
  const skillsPart = skills ? ` Destaco en: ${skills}.` : '';
  return capitalize(
    `${profession}${exp} buscando nuevas oportunidades en España. Persona responsable, con ganas de aprender y adaptarse rápidamente.`
    + `${skillsPart} Disponible para incorporación inmediata.`
  );
}

function offlineExperience(body: CVRequest): string {
  const first = body.experiences?.[0];
  if (!first?.position && !first?.company) return '';
  const existing = first.description?.trim();
  if (existing) return existing;
  const base = first.position || 'mi puesto';
  const company = first.company ? ` en ${first.company}` : '';
  return [
    `• Desempeño de mis funciones como ${base}${company} con responsabilidad y atención al detalle`,
    '• Aprendizaje rápido y buena adaptación al equipo y a nuevas tareas',
    '• Trato cercano y profesional con clientes, compañeros y superiores',
  ].join('\n');
}

export async function POST(req: NextRequest) {
  try {
    const limited = await enforceRateLimit(req, 'ai-cv-generate', RATE_LIMIT);
    if (limited) return limited;

    const json = await readJsonBody(req, MAX_BODY_BYTES);
    if (!json.ok) return json.response;

    const remoteConsent = hasRemoteAIConsent(json.data);
    const parsed = cvRequestSchema.safeParse(json.data);
    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', 'Solicitud no válida', 400, { text: '' });
    }
    const body: CVRequest = parsed.data;
    const lang = body.language || 'es';
    const langPrompt = langInstruction[lang] || langInstruction.es;

    let systemPrompt = '';
    let userPrompt = '';
    let offline: (() => string) | undefined;

    if (body.field === 'summary') {
      systemPrompt = `Eres un experto en recursos humanos y orientación laboral. Escribes resúmenes profesionales de CV persuasivos, honestos y optimizados para ATS. ${langPrompt} Máximo 3-4 frases (60-90 palabras). No uses la primera persona "yo", usa tercera persona o infinitivo. Sin emojis.`;
      userPrompt = `Genera un resumen profesional de CV para esta persona:

Nombre: ${body.fullName || 'No especificado'}
Profesión: ${body.profession || 'No especificada'}
Experiencia: ${body.experiences?.map(e => `${e.position} en ${e.company}`).join(', ') || 'Sin experiencia especificada'}
Educación: ${body.education?.map(e => `${e.title} - ${e.institution}`).join(', ') || 'No especificada'}
Habilidades: ${body.skills?.join(', ') || 'No especificadas'}

Devuelve SOLO el texto del resumen, sin título ni explicación. Debe ser profesional, destacar fortalezas y ser adecuado para España.`;
      offline = () => offlineSummary(body);
    } else {
      systemPrompt = `Eres un experto en RRHH. Mejoras descripciones de experiencia laboral usando verbos de acción, logros cuantificables y formato profesional. ${langPrompt} Máximo 4-5 puntos con viñeta. Empieza cada punto con un verbo de acción. Sin emojis.`;
      userPrompt = `Mejora esta descripción de experiencia laboral:

Puesto: ${body.experiences?.[0]?.position || ''}
Empresa: ${body.experiences?.[0]?.company || ''}
Descripción actual: ${body.experiences?.[0]?.description || '(vacía)'}

Reescribe en formato de viñetas (•) con logros concretos y verbos de acción. Devuelve SOLO el texto mejorado, sin título ni explicación.`;
      offline = () => offlineExperience(body);
    }

    const result = remoteConsent
      ? await invokeAIText(systemPrompt, userPrompt, { offline })
      : { text: offline?.() || '', provider: 'offline' as const };

    if (!result.text) {
      return apiError('AI_UNAVAILABLE', 'El servicio de generación no está disponible.', 503, { text: '' });
    }

    return apiJson({ text: result.text, ok: true, provider: result.provider, degraded: result.provider === 'offline' });
  } catch (error: unknown) {
    reportServerError('cv-generate-api', error);
    return apiError('INTERNAL_ERROR', 'No se pudo generar el contenido del CV.', 500, { text: '' });
  }
}
