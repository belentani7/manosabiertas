import { NextRequest, NextResponse } from 'next/server';
import { invokeAIText } from '@/lib/ai-provider';

export const runtime = 'nodejs';
export const maxDuration = 60;

interface ATSRequest {
  fullName?: string;
  profession?: string;
  summary?: string;
  experiences?: { position: string; company: string; description: string }[];
  education?: { title: string; institution: string; year: string }[];
  skills?: string[];
  languages?: string[];
  jobDescription?: string;
  language?: string;
}

interface ATSAnalysis {
  score: number;
  matchedKeywords: string[];
  missingKeywords: string[];
  strengths: string[];
  suggestions: string[];
  summary: string;
}

const LANG_INSTRUCTIONS: Record<string, string> = {
  es: 'Responde en español de España.',
  en: 'Respond in English.',
  ca: 'Respon en català.',
  'pt-BR': 'Responda em português brasileiro.',
  fr: 'Réponds en français.',
  ar: 'أجب بالعربية.',
  zh: '用中文回答.',
  hi: 'हिंदी में उत्तर दें.',
};

function extractJson(text: string): ATSAnalysis | null {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const candidate = fenced ? fenced[1] : text;
  const start = candidate.indexOf('{');
  const end = candidate.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) return null;
  try {
    return JSON.parse(candidate.slice(start, end + 1)) as ATSAnalysis;
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: ATSRequest = await req.json();
    const lang = body.language || 'es';
    const langInstruction = LANG_INSTRUCTIONS[lang] || LANG_INSTRUCTIONS.es;

    if (!body.jobDescription || !body.jobDescription.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Falta la descripción de la oferta de trabajo.', data: null },
        { status: 400 }
      );
    }

    const systemPrompt = `Eres un analizador experto de sistemas ATS (Applicant Tracking Systems) utilizados en España (InfoJobs, LinkedIn, Jobvite, Workday). Comparas el CV de un candidato contra una oferta de trabajo y devuelves una puntuación de compatibilidad, keywords detectadas y sugerencias accionables. ${langInstruction} Debes responder ÚNICAMENTE con un objeto JSON válido con esta forma exacta:
{
  "score": 0-100,
  "matchedKeywords": ["keyword del CV que coincide con la oferta"],
  "missingKeywords": ["keyword de la oferta que NO está en el CV"],
  "strengths": ["2-3 puntos fuertes del CV frente a la oferta"],
  "suggestions": ["3-4 sugerencias concretas para mejorar el CV para esta oferta"],
  "summary": "Resumen de 2-3 frases explicando el resultado"
}
El "score" debe ser objetivo: parte de 100 y resta por cada keyword clave de la oferta ausente del CV, descripciones débiles o genéricas, y falta de datos (teléfono, idiomas, formación). No uses JSON embebido en texto, solo el JSON puro.`;

    const cvSection = [
      `Nombre: ${body.fullName || 'No especificado'}`,
      `Profesión: ${body.profession || 'No especificada'}`,
      `Resumen: ${body.summary || '(vacío)'}`,
      `Experiencia: ${body.experiences?.map((e) => `${e.position} en ${e.company}: ${e.description || ''}`).join(' | ') || 'Sin experiencia'}`,
      `Formación: ${body.education?.map((e) => `${e.title} - ${e.institution} (${e.year || ''})`).join(' | ') || 'No especificada'}`,
      `Habilidades: ${body.skills?.join(', ') || 'No especificadas'}`,
      `Idiomas: ${body.languages?.join(', ') || 'No especificados'}`,
    ].join('\n');

    const userPrompt = `Analiza la compatibilidad de este CV contra la oferta siguiente.

== CV DEL CANDIDATO ==
${cvSection}

== OFERTA DE TRABAJO ==
${body.jobDescription}

Devuelve SOLO el objeto JSON con el análisis ATS.`;

    const result = await invokeAIText(systemPrompt, userPrompt, {
      maxTokens: 1200,
      offline: () => {
        const cvText = [body.profession, body.summary, ...(body.skills || [])].filter(Boolean).join(' ').toLowerCase();
        const jobWords = (body.jobDescription || '').toLowerCase().split(/[^a-záéíóúñü0-9+]+/).filter((w) => w.length > 3);
        const unique = [...new Set(jobWords)];
        const stop = new Set(['para', 'como', 'requisitos', 'oferta', 'puesto', 'empresa', 'persona', 'trabajo', 'laboral', 'horario', 'salario', 'jornada', 'podra', 'debera', 'tendra', 'disponibilidad', 'contrato', 'ademas', 'tambien', 'funciones', 'experiencia', 'formacion', 'habilidades']);
        const missing = unique.filter((w) => !stop.has(w) && !cvText.includes(w)).slice(0, 12);
        const matched = unique.filter((w) => cvText.includes(w) && !stop.has(w)).slice(0, 12);
        const score = Math.max(15, Math.min(90, 60 - missing.length * 3 + matched.length * 2));
        return JSON.stringify({
          score,
          matchedKeywords: matched,
          missingKeywords: missing,
          strengths: [
            body.profession ? `Perfil orientado a: ${body.profession}.` : 'CV disponible para la candidatura.',
            (body.skills || []).length ? `Menciona ${(body.skills || []).length} habilidades clave.` : 'Incluye apartado de habilidades.',
          ],
          suggestions: [
            missing.length ? `Añade al CV estas palabras clave de la oferta: ${missing.slice(0, 6).join(', ')}.` : 'El CV cubre bien las palabras clave de la oferta.',
            'Usa verbos de acción y logros con cifras concretas en la experiencia laboral.',
            'Adapta el resumen profesional a esta oferta concreta.',
            'Revisa que el CV esté en el idioma de la oferta.',
          ],
          summary: `Puntuación orientativa estimada sin conexión a IA: ${score}/100. Configura GROQ_API_KEY en el entorno para un análisis con IA más preciso.`,
        });
      },
    });

    if (!result.text) {
      return NextResponse.json(
        { ok: false, error: 'No hay proveedor de IA configurado (GROQ_API_KEY o .z-ai-config).', data: null },
        { status: 500 }
      );
    }

    const analysis = extractJson(result.text);

    if (!analysis || typeof analysis.score !== 'number') {
      return NextResponse.json(
        { ok: false, error: 'No se pudo parsear el análisis ATS.', data: null, raw: result.text },
        { status: 500 }
      );
    }

    const safe: ATSAnalysis = {
      score: Math.max(0, Math.min(100, Math.round(analysis.score))),
      matchedKeywords: Array.isArray(analysis.matchedKeywords) ? analysis.matchedKeywords.slice(0, 30) : [],
      missingKeywords: Array.isArray(analysis.missingKeywords) ? analysis.missingKeywords.slice(0, 30) : [],
      strengths: Array.isArray(analysis.strengths) ? analysis.strengths.slice(0, 5) : [],
      suggestions: Array.isArray(analysis.suggestions) ? analysis.suggestions.slice(0, 6) : [],
      summary: typeof analysis.summary === 'string' ? analysis.summary : '',
    };

    return NextResponse.json({ ok: true, data: safe });
  } catch (error: unknown) {
    console.error('ATS analysis error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { ok: false, error: message, data: null },
      { status: 500 }
    );
  }
}
