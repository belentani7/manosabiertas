import { Metadata } from 'next';
import { RightsSection } from '@/components/manos-abiertas/rights-section';

export const metadata: Metadata = {
  title: 'Derechos y Ayudas',
  description: 'Guías paso a paso sobre NIE, extranjería, asilo, nacionalidad, vivienda, SMI, prestaciones, violencia de género. 61 artículos verificados con plantillas de documentos.',
  openGraph: {
    title: 'Derechos y Ayudas · Manos Abiertas',
    description: 'Guías verificadas de derechos y trámites para personas inmigrantes en España',
    type: 'website',
  },
};

export default function DerechosPage() {
  return <RightsSection />;
}