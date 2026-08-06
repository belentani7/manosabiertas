import { NextRequest, NextResponse } from 'next/server';
import { invokeAIText } from '@/lib/ai-provider';

export const runtime = 'nodejs';
export const maxDuration = 60;

interface CVRequest {
  field: 'summary' | 'experience';
  fullName?: string;
  profession?: string;
  experiences?: { position: string; company: string; description: string; startDate: string; endDate: string }[];
  education?: { title: string; institution: string; year: string; description: string }[];
  skills?: string[];
  language?: string;
}

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
    const body: CVRequest = await req.json();
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

    const result = await invokeAIText(systemPrompt, userPrompt, { offline });

    if (!result.text) {
      return NextResponse.json(
        { ok: false, error: 'No hay proveedor de IA configurado (GROQ_API_KEY o .z-ai-config).', text: '' },
        { status: 500 }
      );
    }

    return NextResponse.json({ text: result.text, ok: true, provider: result.provider });
  } catch (error: unknown) {
    console.error('CV generation error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { ok: false, error: message, text: '' },
      { status: 500 }
    );
  }
}
