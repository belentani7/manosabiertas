type ProviderMessage = { role: 'system' | 'user' | 'assistant'; content: string };

type ProviderResult = { text: string; provider: 'groq' | 'nvidia' | 'zai' | 'offline'; model?: string };

async function callCompatibleProvider(
  provider: 'groq' | 'nvidia',
  apiKey: string,
  baseUrl: string,
  model: string,
  messages: ProviderMessage[],
  maxTokens = 900,
): Promise<ProviderResult> {
  const response = await fetch(`${baseUrl.replace(/\/$/, '')}/chat/completions`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, messages, max_completion_tokens: maxTokens }),
    signal: AbortSignal.timeout(45000),
  });

  if (!response.ok) throw new Error(`${provider} HTTP ${response.status}`);
  const payload = await response.json() as { choices?: Array<{ message?: { content?: string } }> };
  const text = payload.choices?.[0]?.message?.content?.trim();
  if (!text) throw new Error(`${provider} returned an empty response`);
  return { text, provider, model };
}

export async function callConfiguredProvider(
  messages: ProviderMessage[],
  maxTokens = 900,
): Promise<ProviderResult | null> {
  const groqKey = process.env.GROQ_API_KEY;
  if (groqKey) {
    return callCompatibleProvider('groq', groqKey, process.env.GROQ_BASE_URL || 'https://api.groq.com/openai/v1', process.env.GROQ_MODEL || 'llama-3.1-8b-instant', messages, maxTokens);
  }

  const nvidiaKey = process.env.NVIDIA_API_KEY || process.env.NVIDIA_NIM_API_KEY || process.env.NVIDIA_ALT_KEY;
  if (nvidiaKey) {
    return callCompatibleProvider('nvidia', nvidiaKey, process.env.NVIDIA_BASE_URL || 'https://integrate.api.nvidia.com/v1', process.env.NVIDIA_MODEL || 'meta/llama-3.3-70b-instruct', messages, maxTokens);
  }

  return null;
}

export function configuredProvider(): 'groq' | 'nvidia' | 'zai' | 'local' {
  if (process.env.GROQ_API_KEY) return 'groq';
  if (process.env.NVIDIA_API_KEY || process.env.NVIDIA_NIM_API_KEY || process.env.NVIDIA_ALT_KEY) return 'nvidia';
  if (process.env.ZAI_API_KEY || process.env.Z_AI_API_KEY) return 'zai';
  return 'local';
}

/**
 * Unified AI invocation with priority:
 * 1. Configured env provider (GROQ_API_KEY / NVIDIA_API_KEY)
 * 2. Z.ai SDK (requires .z-ai-config)
 * 3. Deterministic offline fallback (optional via `offline`)
 *
 * Returns { text, provider } — `text` is '' only if every path failed
 * and no offline fallback was provided.
 */
export async function invokeAIText(
  systemPrompt: string,
  userPrompt: string,
  options: { maxTokens?: number; offline?: () => string } = {},
): Promise<ProviderResult> {
  const messages: ProviderMessage[] = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt },
  ];
  const maxTokens = options.maxTokens ?? 900;

  // 1) Env-configured provider (GROQ/NVIDIA)
  try {
    const configured = await callConfiguredProvider(messages, maxTokens);
    if (configured) return configured;
  } catch (error) {
    console.warn('Configured AI provider unavailable:', error);
  }

  // 2) Z.ai SDK — may throw when .z-ai-config is missing
  try {
    const ZAI = (await import('z-ai-web-dev-sdk')).default;
    const zai = await ZAI.create();
    const completion = await zai.chat.completions.create({
      messages,
      thinking: { type: 'disabled' },
    });
    const text = completion.choices?.[0]?.message?.content?.trim() || '';
    if (text) return { text, provider: 'zai' };
  } catch (error) {
    console.warn('Z.ai provider unavailable:', error);
  }

  // 3) Offline fallback (deterministic, no external call)
  if (options.offline) {
    return { text: options.offline(), provider: 'offline' };
  }

  return { text: '', provider: 'offline' };
}
