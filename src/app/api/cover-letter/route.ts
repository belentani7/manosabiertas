import { NextRequest } from 'next/server';
import { z } from 'zod';
import { invokeAIText } from '@/lib/ai-provider';
import { apiError, apiJson, enforceRateLimit, hasRemoteAIConsent, readJsonBody, reportServerError } from '@/lib/api-security';

export const runtime = 'nodejs';
export const maxDuration = 60;

const MAX_BODY_BYTES = 32_000;
const RATE_LIMIT = { limit: 8, windowMs: 10 * 60_000 };

const coverLetterSchema = z.object({
  fullName: z.string().trim().max(120).optional(),
  profession: z.string().trim().max(160).optional(),
  companyName: z.string().trim().max(160).optional(),
  jobTitle: z.string().trim().max(160).optional(),
  experience: z.string().trim().max(4000).optional(),
  skills: z.array(z.string().trim().min(1).max(100)).max(20).optional(),
  language: z.string().trim().max(12).optional(),
  tone: z.enum(['formal', 'friendly', 'direct']).optional(),
});

type CoverLetterRequest = z.infer<typeof coverLetterSchema>;

const LANG_INSTRUCTIONS: Record<string, string> = {
  es: 'Escribe la carta en español de España, con lenguaje formal pero cercano.',
  en: 'Write the cover letter in English, formal but warm.',
  ca: 'Escriu la carta en català, formal però proper.',
  'pt-BR': 'Escreva a carta em português brasileiro, formal mas próximo.',
  fr: 'Écris la lettre en français, formel mais chaleureux.',
  ar: 'اكتب الرسالة بالعربية، رسمية ولكن دافئة.',
  zh: '用中文写信，正式但亲切。',
  hi: 'हिंदी में पत्र लिखें, औपचारिक लेकिन गर्मजोशी से।',
  ro: 'Scrie scrisoarea în română, formal dar cald.',
  uk: 'Напиши лист українською мовою, формально, але тепло.',
};

function offlineLetter(body: CoverLetterRequest): string {
  const fullName = body.fullName || '[Tu nombre]';
  const profession = body.profession || 'profesional';
  const company = body.companyName || 'su empresa';
  const jobTitle = body.jobTitle || 'el puesto';
  const skills = body.skills?.length ? body.skills.slice(0, 4).join(', ') : 'con muchas ganas de aprender';
  const experience = body.experience?.trim() || 'con interés en aportar y crecer profesionalmente';

  return `Estimado/a equipo de ${company}:

Mi nombre es ${fullName} y me dirijo a ustedes para ofrecer mi candidatura para ${jobTitle}. Soy ${profession} y ${experience}.

Entre mis puntos fuertes destacan: ${skills}. Soy una persona responsable, con gran capacidad de adaptación y con muchas ganas de formar parte de un equipo como el de ${company}.

Me encantaría tener la oportunidad de una entrevista para contarles en detalle cómo puedo aportar valor a su organización. Pueden contactarme por teléfono o correo electrónico en cualquier momento.

Atentamente,
${fullName}`;
}

export async function POST(req: NextRequest) {
  try {
    const limited = await enforceRateLimit(req, 'ai-cover-letter', RATE_LIMIT);
    if (limited) return limited;

    const json = await readJsonBody(req, MAX_BODY_BYTES);
    if (!json.ok) return json.response;

    const remoteConsent = hasRemoteAIConsent(json.data);
    const parsed = coverLetterSchema.safeParse(json.data);
    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', 'Solicitud no válida', 400, { text: '' });
    }
    const body: CoverLetterRequest = parsed.data;
    const lang = body.language || 'es';
    const langInstruction = LANG_INSTRUCTIONS[lang] || LANG_INSTRUCTIONS.es;
    const tone = body.tone || 'formal';

    const toneInstructions = {
      formal: 'Usa un tono formal y profesional, con "Estimado/a" y "Atentamente".',
      friendly: 'Usa un tono cercano y amable, pero mantén el profesionalismo.',
      direct: 'Sé directo y conciso, ve al grano sin rodeos.',
    };

    const systemPrompt = `Eres un experto en recursos humanos en España. Escribes cartas de presentación que destacan las fortalezas del candidato de forma honesta y persuasiva, adaptadas al mercado laboral español. ${langInstruction} ${toneInstructions[tone]} La carta debe tener máximo 3 párrafos (250-350 palabras). Sin emojis.`;

    const userPrompt = `Genera una carta de presentación para:

Candidato/a: ${body.fullName || '[Nombre]'}
Profesión: ${body.profession || '[Profesión]'}
Empresa destino: ${body.companyName || '[Nombre de la empresa]'}
Puesto: ${body.jobTitle || '[Puesto al que aspira]'}
Experiencia relevante: ${body.experience || '[Sin experiencia especificada]'}
Habilidades clave: ${body.skills?.join(', ') || '[No especificadas]'}

Estructura:
1. Saludo formal y presentación
2. Por qué le interesa el puesto y qué aporta
3. Cierre con llamada a la acción (pedir entrevista)

Devuelve SOLO el texto de la carta, lista para usar.`;

    const result = remoteConsent
      ? await invokeAIText(systemPrompt, userPrompt, { offline: () => offlineLetter(body) })
      : { text: offlineLetter(body), provider: 'offline' as const };

    if (!result.text) {
      return apiError('AI_UNAVAILABLE', 'El servicio de generación no está disponible.', 503, { text: '' });
    }

    return apiJson({ text: result.text, ok: true, provider: result.provider, degraded: result.provider === 'offline' });
  } catch (error: unknown) {
    reportServerError('cover-letter-api', error);
    return apiError('INTERNAL_ERROR', 'No se pudo generar la carta.', 500, { text: '' });
  }
}
