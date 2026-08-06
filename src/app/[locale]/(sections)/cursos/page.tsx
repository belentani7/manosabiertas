import { Metadata } from 'next';
import { CoursesLibrarySection } from '@/components/manos-abiertas/courses-library-section';

export const metadata: Metadata = {
  title: 'Cursos Externos',
  description: 'Biblioteca de cursos gratuitos verificados de entidades públicas, ONGs y universidades. Filtrados por tema, idioma, nivel y modalidad (online/presencial).',
  openGraph: {
    title: 'Cursos · Manos Abiertas',
    description: 'Directorio de cursos gratuitos verificados para personas inmigrantes',
    type: 'website',
  },
};

export default function CursosPage() {
  return <CoursesLibrarySection />;
}