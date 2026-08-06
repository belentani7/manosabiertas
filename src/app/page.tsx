import { Metadata } from 'next';
import { ManosAbiertasClient } from '@/components/manos-abiertas/manos-abiertas-client';

export const metadata: Metadata = {
  title: 'Manos Abiertas · IA, CV y Derechos para personas inmigrantes en España',
  description: 'Plataforma gratuita multilingüe para personas inmigrantes en España. Aprende inteligencia artificial (ChatGPT, Gemini, Copilot, DeepSeek), crea tu currículum con IA, curso completo de Office y 3000+ recursos verificados.',
};

export default function Home() {
  return <ManosAbiertasClient />;
}
