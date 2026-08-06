import { Metadata } from 'next';
import { CommunitySection } from '@/components/manos-abiertas/community-section';

export const metadata: Metadata = {
  title: 'Comunidad',
  description: 'Foro de personas inmigrantes en España: preguntas, respuestas, experiencias, consejos. Moderado, multilingüe, sin registro obligatorio. Comparte y aprende.',
  openGraph: {
    title: 'Comunidad · Manos Abiertas',
    description: 'Foro de apoyo mutuo para personas inmigrantes en España',
    type: 'website',
  },
};

export default function ComunidadPage() {
  return <CommunitySection />;
}