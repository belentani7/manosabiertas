import { NextResponse } from 'next/server';

type JsonObject = Record<string, unknown>;

type RateLimitOptions = {
  limit: number;
  windowMs: number;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type JsonReadResult =
  | { ok: true; data: unknown }
  | { ok: false; response: NextResponse };

const JSON_CONTENT_TYPE = /^application\/(?:[a-z0-9.+-]+\+)?json(?:\s*;|$)/i;
const RATE_LIMIT_STORE_KEY = '__manos_abiertas_rate_limits__';
const MAX_RATE_LIMIT_ENTRIES = 10_000;

const globalRateLimit = globalThis as typeof globalThis & {
  [RATE_LIMIT_STORE_KEY]?: Map<string, RateLimitEntry>;
};

const rateLimits = globalRateLimit[RATE_LIMIT_STORE_KEY]
  ?? (globalRateLimit[RATE_LIMIT_STORE_KEY] = new Map<string, RateLimitEntry>());

const RESPONSE_HEADERS = {
  'Cache-Control': 'no-store',
  'X-Content-Type-Options': 'nosniff',
};

export function apiJson(data: unknown, status = 200, headers: HeadersInit = {}) {
  return NextResponse.json(data, {
    status,
    headers: { ...RESPONSE_HEADERS, ...Object.fromEntries(new Headers(headers)) },
  });
}

export function apiError(
  code: string,
  message: string,
  status: number,
  extra: JsonObject = {},
) {
  return apiJson({ ok: false, error: message, code, ...extra }, status);
}

export async function readJsonBody(request: Request, maxBytes: number): Promise<JsonReadResult> {
  const contentType = request.headers.get('content-type') || '';
  if (!JSON_CONTENT_TYPE.test(contentType)) {
    return {
      ok: false,
      response: apiError('UNSUPPORTED_MEDIA_TYPE', 'El contenido debe enviarse como JSON.', 415),
    };
  }

  const declaredLength = Number(request.headers.get('content-length'));
  if (Number.isFinite(declaredLength) && declaredLength > maxBytes) {
    return {
      ok: false,
      response: apiError('PAYLOAD_TOO_LARGE', 'La solicitud es demasiado grande.', 413),
    };
  }

  let text: string;
  try {
    text = await request.text();
  } catch {
    return {
      ok: false,
      response: apiError('INVALID_BODY', 'No se pudo leer la solicitud.', 400),
    };
  }

  if (new TextEncoder().encode(text).byteLength > maxBytes) {
    return {
      ok: false,
      response: apiError('PAYLOAD_TOO_LARGE', 'La solicitud es demasiado grande.', 413),
    };
  }

  if (!text.trim()) {
    return {
      ok: false,
      response: apiError('INVALID_JSON', 'El cuerpo JSON está vacío.', 400),
    };
  }

  try {
    return { ok: true, data: JSON.parse(text) as unknown };
  } catch {
    return {
      ok: false,
      response: apiError('INVALID_JSON', 'El cuerpo JSON no es válido.', 400),
    };
  }
}

function clientAddress(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return (
    request.headers.get('x-nf-client-connection-ip')
    || request.headers.get('cf-connecting-ip')
    || request.headers.get('x-real-ip')
    || forwarded
    || 'anonymous'
  ).slice(0, 128);
}

async function rateLimitKey(request: Request, scope: string) {
  const source = new TextEncoder().encode(`${scope}:${clientAddress(request)}`);
  const digest = await crypto.subtle.digest('SHA-256', source);
  return Array.from(new Uint8Array(digest))
    .map((value) => value.toString(16).padStart(2, '0'))
    .join('')
    .slice(0, 32);
}

function removeExpiredRateLimits(now: number) {
  if (rateLimits.size < MAX_RATE_LIMIT_ENTRIES) return;
  for (const [key, entry] of rateLimits) {
    if (entry.resetAt <= now) rateLimits.delete(key);
  }
  if (rateLimits.size >= MAX_RATE_LIMIT_ENTRIES) rateLimits.clear();
}

export async function enforceRateLimit(
  request: Request,
  scope: string,
  options: RateLimitOptions,
): Promise<NextResponse | null> {
  const now = Date.now();
  removeExpiredRateLimits(now);

  const key = await rateLimitKey(request, scope);
  const current = rateLimits.get(key);
  const entry = !current || current.resetAt <= now
    ? { count: 0, resetAt: now + options.windowMs }
    : current;

  entry.count += 1;
  rateLimits.set(key, entry);

  if (entry.count <= options.limit) return null;

  const retryAfter = Math.max(1, Math.ceil((entry.resetAt - now) / 1000));
  return NextResponse.json(
    {
      ok: false,
      error: 'Has realizado demasiadas solicitudes. Inténtalo de nuevo más tarde.',
      code: 'RATE_LIMITED',
    },
    {
      status: 429,
      headers: { ...RESPONSE_HEADERS, 'Retry-After': String(retryAfter) },
    },
  );
}

export function hasRemoteAIConsent(data: unknown) {
  return Boolean(
    data
    && typeof data === 'object'
    && 'consentToRemoteAI' in data
    && data.consentToRemoteAI === true,
  );
}

export function reportServerError(scope: string, error: unknown) {
  const kind = error instanceof Error ? error.name : 'UnknownError';
  console.error(`[${scope}] request failed (${kind})`);
}

const EMAIL_PATTERN = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
const PHONE_PATTERN = /(?:\+?\d[\s().-]*){9,}/;
const ID_PATTERN = /\b(?:[XYZ]\d{7}[A-Z]|\d{8}[A-Z])\b/i;
const URL_PATTERN = /(?:https?:\/\/|www\.)\S+/i;
const MARKUP_PATTERN = /<\/?[a-z][^>]*>|javascript:|[\u0000-\u0008\u000B\u000C\u000E-\u001F]/i;
const THREAT_PATTERN = /\b(?:matar|muerte|amenaza|arma|kill|weapon|bomb|bomba)\b/i;

export function communityContentRisk(title: string, author: string) {
  const content = `${title}\n${author}`;
  if (EMAIL_PATTERN.test(content) || PHONE_PATTERN.test(content) || ID_PATTERN.test(content)) return 'personal-data';
  if (URL_PATTERN.test(content)) return 'external-link';
  if (MARKUP_PATTERN.test(content)) return 'active-markup';
  if (THREAT_PATTERN.test(content)) return 'unsafe-content';
  return null;
}
