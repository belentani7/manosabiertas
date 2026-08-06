import { Metadata } from 'next';
import { ResourcesSection } from '@/components/manos-abiertas/resources-section';

export const metadata: Metadata = {
  title: 'Recursos Verificados',
  description: 'Más de 3.600 recursos verificados para personas inmigrantes en España: educación, empleo, vivienda, salud, legal, infancia y más. Filtrados por ciudad e idioma.',
  openGraph: {
    title: 'Recursos Verificados · Manos Abiertas',
    description: 'Directorio de 3.600+ recursos verificados para personas inmigrantes en España',
    type: 'website',
  },
};

export default function RecursosPage() {
  return <ResourcesSection />;
}