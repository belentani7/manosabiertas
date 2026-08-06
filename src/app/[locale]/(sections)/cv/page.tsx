import { Metadata } from 'next';
import { CVSection } from '@/components/manos-abiertas/cv-section';

export const metadata: Metadata = {
  title: 'Crea tu CV',
  description: 'Constructor de currículum profesional con IA. Formato Europass estándar, compatible con ATS (InfoJobs, LinkedIn). Plantillas, carta de presentación, análisis de compatibilidad ATS y exportación PDF.',
  openGraph: {
    title: 'Crea tu CV · Manos Abiertas',
    description: 'Constructor de CV profesional con IA, formato Europass, compatible ATS',
    type: 'website',
  },
};

export default function CVPage() {
  return <CVSection />;
}