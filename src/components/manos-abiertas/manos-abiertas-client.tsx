'use client';

import dynamic from 'next/dynamic';
import { StaticHomeFallback } from '@/components/seo/static-home-fallback';

// Client wrapper for the interactive app.
// `loading` (StaticHomeFallback) is SSR-rendered into the initial HTML so
// crawlers and no-JS users get real content; the app mounts on the client.
const ManosAbiertasApp = dynamic(
  () => import('@/components/manos-abiertas/manos-abiertas-app').then((m) => m.ManosAbiertasApp),
  {
    ssr: false,
    loading: () => <StaticHomeFallback />,
  }
);

export function ManosAbiertasClient() {
  return <ManosAbiertasApp />;
}
