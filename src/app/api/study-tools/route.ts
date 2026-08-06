import { NextRequest, NextResponse } from 'next/server';
import { invokeAIText } from '@/lib/ai-provider';

export const runtime = 'nodejs';
export const maxDuration = 60;

interface StudyToolsRequest {
  tool: 'questions' | 'summary';
  content: string;
  title?: string;
  language?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: StudyToolsRequest = await req.json();
    const lang = body.language || 'es';

    if (!body.content || body.content.trim().length < 50) {
      return NextResponse.json(
        { ok: false, error: 'El contenido es demasiado corto para analizar' },
        { status: 400 }
      );
    }

    const content = body.content.slice(0, 5000); // Limit to 5000 chars

    let systemPrompt = '';
    let userPrompt = '';

    if (body.tool === 'questions') {
      systemPrompt = `Eres un profesor experto que crea preguntas de comprensión lectora para adultos. Las preguntas deben ser claras, prácticas y ayudar a retener la información. ${lang === 'es' ? 'Responde en español.' : 'Respond in the user language.'}`;

      userPrompt = `Basándote en el siguiente contenido, genera 3 preguntas de comprensión lectora. Las preguntas deben cubrir los puntos más importantes del texto.

Título del contenido: ${body.title || 'Contenido educativo'}

Contenido:
${content}

Formato de respuesta (devuelve SOLO el JSON, sin markdown):
{
  "questions": [
    { "question": "...", "hint": "Pista breve para responder" },
    { "question": "...", "hint": "..." },
    { "question": "...", "hint": "..." }
  ]
}`;
    } else if (body.tool === 'summary') {
      systemPrompt = `Eres un experto en síntesis de información para adultos. Creas resúmenes claros y concisos que capturan las ideas principales. ${lang === 'es' ? 'Responde en español.' : 'Respond in the user language.'}`;

      userPrompt = `Resume el siguiente contenido en máximo 5 puntos clave. Cada punto debe ser una frase corta y accionable.

Título: ${body.title || 'Contenido'}

Contenido:
${content}

Formato: lista numerada, cada punto en una línea, máximo 15 palabras por punto.`;
    }

    const result = await invokeAIText(systemPrompt, userPrompt, {
      offline: () => {
        const sentences = content.split(/(?<=[.!?])\s+/).filter((s) => s.trim().length > 20);
        if (body.tool === 'questions') {
          const qs = (sentences.slice(0, 3).map((s, i) => ({
            question: `¿Qué se dice sobre "${s.trim().slice(0, 60)}..."?`,
            hint: 'Repasa el texto y busca la idea principal.',
          })));
          return JSON.stringify({ questions: qs });
        }
        return sentences.slice(0, 5).map((s, i) => `${i + 1}. ${s.trim().slice(0, 120)}`).join('\n');
      },
    });

    if (!result.text) {
      return NextResponse.json(
        { ok: false, error: 'No hay proveedor de IA configurado (GROQ_API_KEY o .z-ai-config).', text: '' },
        { status: 500 }
      );
    }

    return NextResponse.json({ text: result.text, ok: true, tool: body.tool, provider: result.provider });
  } catch (error: unknown) {
    console.error('Study tools API error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { ok: false, error: message, text: '' },
      { status: 500 }
    );
  }
}
