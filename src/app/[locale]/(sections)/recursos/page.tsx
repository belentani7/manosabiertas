import { Metadata } from 'next';
import { ResourcesSection } from '@/components/manos-abiertas/resources-section';

export const metadata: Metadata = {
  title: 'Directorio de Recursos',
  description: 'Directorio de recursos para personas inmigrantes en España con fuente y estado de revisión visible: educación, empleo, vivienda, salud, legal, infancia y más.',
  openGraph: {
    title: 'Directorio de Recursos · Manos Abiertas',
    description: 'Recursos para personas inmigrantes en España con trazabilidad y estado de revisión visible',
    type: 'website',
  },
};

export default function RecursosPage() {
  return <ResourcesSection />;
}
