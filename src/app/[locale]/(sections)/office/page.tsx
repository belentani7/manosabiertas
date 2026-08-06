import { Metadata } from 'next';
import { OfficeSection } from '@/components/manos-abiertas/office-section';

export const metadata: Metadata = {
  title: 'Curso de Office',
  description: 'Curso completo y gratuito de Microsoft Office: Word, Excel y PowerPoint. Desde cero, con ejercicios prácticos y progreso guardado. Nivel principiante a avanzado.',
  openGraph: {
    title: 'Curso Office · Manos Abiertas',
    description: 'Curso completo gratuito de Word, Excel y PowerPoint para principiantes',
    type: 'website',
  },
};

export default function OfficePage() {
  return <OfficeSection />;
}