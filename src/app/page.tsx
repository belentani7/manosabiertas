import { Metadata } from 'next';
import { ManosAbiertasClient } from '@/components/manos-abiertas/manos-abiertas-client';

export const metadata: Metadata = {
  title: 'Manos Abiertas · IA, CV y Derechos para personas inmigrantes en España',
  description: 'Plataforma gratuita multilingüe para personas inmigrantes en España. Aprende inteligencia artificial, crea tu currículum, estudia Office y consulta un catálogo de recursos con fuente y estado de revisión visible.',
};

export default function Home() {
  return <ManosAbiertasClient />;
}
