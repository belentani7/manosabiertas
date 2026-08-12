import { NextRequest } from 'next/server';
import { z } from 'zod';
import { invokeAIText } from '@/lib/ai-provider';
import { apiError, apiJson, enforceRateLimit, hasRemoteAIConsent, readJsonBody, reportServerError } from '@/lib/api-security';
import { getOfflineTutorReply } from '@/lib/offline-tutor';

export const runtime = 'nodejs';
export const maxDuration = 60;

const MAX_BODY_BYTES = 256_000;
const RATE_LIMIT = { limit: 12, windowMs: 5 * 60_000 };

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  language?: string;
  context?: string;
}

const chatRequestSchema = z.object({
  messages: z.array(z.object({ role: z.enum(['user', 'assistant']), content: z.string().trim().min(1).max(12000) })).min(1).max(20),
  language: z.string().max(12).optional(),
  context: z.string().max(4000).optional(),
});

const LANG_INSTRUCTIONS: Record<string, string> = {
  es: 'Responde SIEMPRE en español de España, con lenguaje sencillo y claro.',
  en: 'Always respond in English, with simple and clear language.',
  ca: 'Respon SEMPRE en català, amb llenguatge senzill i clar.',
  'pt-BR': 'Responda SEMPRE em português brasileiro, com linguagem simples e clara.',
  pt: 'Responda SEMPRE em português, com linguagem simples e clara.',
  fr: 'Réponds TOUJOURS en français, avec un langage simple et clair.',
  ar: 'أجب دائماً بالعربية، بلغة بسيطة وواضحة.',
  zh: '始终用中文回答，语言简单清晰。',
  hi: 'हमेशा हिंदी में उत्तर दें, सरल और स्पष्ट भाषा में।',
  qu: 'Runa Simillapi rimspaña, suti llamiywan.',
  ro: 'Răspunde ÎNTOTDEAUNA în română, cu limbaj simplu și clar.',
  uk: 'Завжди відповідай українською мовою, простою та зрозумілою мовою.',
  ru: 'Всегда отвечай на русском языке, простым и понятным языком.',
  de: 'Antworte IMMER auf Deutsch, mit einfacher und klarer Sprache.',
  it: 'Rispondi SEMPRE in italiano, con linguaggio semplice e chiaro.',
  pl: 'Odpowiadaj ZAWSZE po polsku, prostym i jasnym językiem.',
  tr: 'Her ZAMAN Türkçe yanıt ver, basit ve net bir dille.',
  ur: 'ہمیشہ اردو میں جواب دیں، آسان اور واضح زبان میں۔',
  fa: 'همیشه به فارسی پاسخ دهید، با زبان ساده و واضح.',
  bn: 'সর্বদা বাংলায় উত্তর দিন, সহজ এবং পরিষ্কার ভাষায়।',
  pa: 'ਹਮੇਸ਼ਾ ਪੰਜਾਬੀ ਵਿੱਚ ਜਵਾਬ ਦਿਓ, ਸਧਾਰਨ ਅਤੇ ਸਪਸ਼ਟ ਭਾਸ਼ਾ ਵਿੱਚ।',
  ta: 'எப்போதும் தமிழில் பதிலளிக்கவும், எளிய மற்றும் தெளிவான மொழியில்.',
  te: 'ఎల్లప్పుడూ తెలుగులో సమాధానం ఇవ్వండి, సరళమైన మరియు స్పష్టమైన భాషలో.',
  mr: 'नेहमी मराठीत उत्तर द्या, सोप्या आणि स्पष्ट भाषेत.',
  gu: 'હંમેશા ગુજરાતીમાં જવાબ આપો, સરળ અને સ્પષ્ટ ભાષામાં.',
  sw: 'Jibu kwa Kiswahili kila wakati, kwa lugha rahisi na wazi.',
  am: 'ሁሌም በአማርኛ ይመልሱ፣ በቀላል እና ግልጽ ቋንቋ።',
  tl: 'Palaging sumagot sa Tagalog, sa simpleng at malinaw na wika.',
  vi: 'Luôn trả lời bằng tiếng Việt, với ngôn ngữ đơn giản và rõ ràng.',
  ja: '常に日本語で答えてください。シンプルで明確な言葉で。',
  ko: '항상 한국어로 답변하세요. 간단하고 명확한 언어로.',
};

const SYSTEM_PROMPT = `Eres el asistente virtual de "Manos Abiertas", una plataforma gratuita para personas inmigrantes en España.

Tu propósito: ayudar a personas inmigrantes a:
1. Aprender a usar inteligencia artificial (ChatGPT, Gemini, Copilot, DeepSeek, etc.)
2. Crear su currículum vitae (CV)
3. Conocer sus derechos y los recursos disponibles en España
4. Sobrevivir y integrarse en la sociedad española

CARACTERÍSTICAS DEL PÚBLICO:
- Personas adultas, muchas mayores, con baja alfabetización digital
- Hablan diversos idiomas (la plataforma soporta 39)
- Recién llegadas a España o en proceso de integración
- Muchas solo saben usar WhatsApp y Google

INSTRUCCIONES:
- Sé cálido, amable y paciente. Trata al usuario con dignidad.
- Usa lenguaje sencillo, sin tecnicismos. Si usas una palabra técnica, explícala.
- Da respuestas breves y accionables (máximo 3-4 párrafos).
- Cuando sea relevante, menciona que en la web hay cursos, recursos o secciones específicas.
- Para temas legales, recomienda SIEMPRE consultar con un abogado o la fuente oficial.
- Para emergencias, recomienda llamar al 112 (gratis, 24h, multilingüe).
- NO inventes datos específicos (cantías de ayudas, teléfonos) si no estás seguro. Di "consulta la sección Derechos y Ayudas para datos verificados".
- Si preguntan por NIE, extranjería, asilo, etc., sugiere la sección "Derechos y Ayudas".
- Si preguntan por empleo o CV, sugiere la sección "Crea tu CV".
- Si preguntan por IA, sugiere la sección "Aprende IA".

Eres parte de una plataforma con:
- 8 cursos de IA (ChatGPT, Gemini, Copilot, Claude, DeepSeek, Qwen, Perplexity, Meta AI)
- Constructor de CV con IA
- Curso completo de Office (Word, Excel, PowerPoint)
- 3.686 recursos con fuente y estado de revisión visible
- 61 artículos sobre derechos
- 41 contactos de emergencia`;

export async function POST(req: NextRequest) {
  let fallbackQuestion = '';
  let fallbackLanguage = 'es';
  try {
    const limited = await enforceRateLimit(req, 'ai-chat', RATE_LIMIT);
    if (limited) return limited;

    const json = await readJsonBody(req, MAX_BODY_BYTES);
    if (!json.ok) return json.response;

    const remoteConsent = hasRemoteAIConsent(json.data);
    const parsed = chatRequestSchema.safeParse(json.data);
    if (!parsed.success) return apiError('VALIDATION_ERROR', 'Solicitud no válida', 400);
    const body: ChatRequest = parsed.data;
    const lang = body.language || 'es';
    fallbackQuestion = body.messages.at(-1)?.content || '';
    fallbackLanguage = lang;
    const langInstruction = LANG_INSTRUCTIONS[lang] || LANG_INSTRUCTIONS.es;

    const messages = [
      { role: 'system' as const, content: `${SYSTEM_PROMPT}\n\n${langInstruction}${body.context ? `\n\nContexto actual: ${body.context}` : ''}` },
      ...body.messages.slice(-10), // Keep last 10 messages for context
    ];

    const systemPrompt = messages[0].content;
    const userPrompt = messages.slice(1).map((m) => `${m.role === 'user' ? 'Usuario' : 'Asistente'}: ${m.content}`).join('\n\n');

    const result = remoteConsent
      ? await invokeAIText(systemPrompt, userPrompt, {
        offline: () => getOfflineTutorReply(fallbackQuestion, fallbackLanguage),
      })
      : {
        text: getOfflineTutorReply(fallbackQuestion, fallbackLanguage),
        provider: 'offline' as const,
      };

    if (!result.text) {
      return apiJson({ ok: true, degraded: true, provider: 'local', text: getOfflineTutorReply(fallbackQuestion, fallbackLanguage) });
    }

    return apiJson({
      text: result.text,
      ok: true,
      provider: result.provider === 'offline' ? 'local' : result.provider,
      degraded: result.provider === 'offline',
    });
  } catch (error: unknown) {
    reportServerError('chat-api', error);
    return apiJson({ ok: true, degraded: true, provider: 'local', text: getOfflineTutorReply(fallbackQuestion, fallbackLanguage) });
  }
}
