import { getStore } from '@netlify/blobs';
import { z } from 'zod';
import { apiError, apiJson, communityContentRisk, enforceRateLimit, readJsonBody } from '@/lib/api-security';

const STORE_NAME = 'manos-abiertas-community';
const POST_PREFIX = 'post:';
const MAX_BODY_BYTES = 12_000;
const READ_RATE_LIMIT = { limit: 60, windowMs: 5 * 60_000 };
const POST_RATE_LIMIT = { limit: 3, windowMs: 60 * 60_000 };

const postSchema = z.object({
  title: z.string().trim().min(5).max(140),
  category: z.enum(['legal', 'work', 'cities', 'tips']),
  author: z.string().trim().min(2).max(40).default('Mi gente'),
});

type CommunityPost = {
  id: string;
  title: string;
  category: 'legal' | 'work' | 'cities' | 'tips';
  author: string;
  replies: number;
  createdAt: string;
  source: 'community';
};

const storedPostSchema = postSchema.extend({
  id: z.string().uuid(),
  replies: z.number().int().min(0),
  createdAt: z.string().datetime(),
  source: z.literal('community'),
});

export async function GET(request: Request) {
  const limited = await enforceRateLimit(request, 'community-read', READ_RATE_LIMIT);
  if (limited) return limited;

  try {
    // Keep getStore inside the request handler. Netlify configures its runtime here.
    const store = getStore(STORE_NAME);
    const { blobs } = await store.list({ prefix: POST_PREFIX });
    const posts = await Promise.all(
      blobs.slice(-100).map(async ({ key }) => {
        const value = await store.get(key, { type: 'json', consistency: 'strong' }) as unknown;
        const parsed = storedPostSchema.safeParse(value);
        if (!parsed.success || communityContentRisk(parsed.data.title, parsed.data.author)) return null;
        return parsed.data as CommunityPost;
      })
    );

    return apiJson({
      ok: true,
      mode: 'shared',
      posts: posts
        .filter((post): post is CommunityPost => post !== null)
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
    });
  } catch {
    return apiError('COMMUNITY_UNAVAILABLE', 'La comunidad compartida no está disponible todavía.', 503, {
      mode: 'local',
      posts: [],
    });
  }
}

export async function POST(request: Request) {
  try {
    const limited = await enforceRateLimit(request, 'community-post', POST_RATE_LIMIT);
    if (limited) return limited;

    const json = await readJsonBody(request, MAX_BODY_BYTES);
    if (!json.ok) return json.response;

    const parsed = postSchema.safeParse(json.data);
    if (!parsed.success) {
      return apiError('VALIDATION_ERROR', 'Tema no válido. Revisa el título, categoría y nombre.', 400);
    }

    if (communityContentRisk(parsed.data.title, parsed.data.author)) {
      return apiError(
        'PUBLICATION_BLOCKED',
        'No se puede publicar automáticamente este tema. Elimina datos personales, enlaces o texto potencialmente peligroso y vuelve a intentarlo.',
        422,
        { published: false },
      );
    }

    const store = getStore(STORE_NAME);
    const post: CommunityPost = {
      id: crypto.randomUUID(),
      title: parsed.data.title,
      category: parsed.data.category,
      author: parsed.data.author,
      replies: 0,
      createdAt: new Date().toISOString(),
      source: 'community',
    };

    // Keep getStore inside the request handler. No separate server is required.
    await store.setJSON(`${POST_PREFIX}${post.id}`, post, {
      metadata: { category: post.category },
    });

    return apiJson({ ok: true, mode: 'shared', post, published: true }, 201);
  } catch {
    return apiError('COMMUNITY_UNAVAILABLE', 'La comunidad compartida no está disponible todavía.', 503);
  }
}
