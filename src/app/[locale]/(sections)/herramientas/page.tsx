import { Metadata } from 'next';
import { ToolsSection } from '@/components/manos-abiertas/tools-section';

export const metadata: Metadata = {
  title: 'Herramientas Prácticas',
  description: 'Calculadora de coste de vida por ciudad, gestor de documentos, plantillas EX-01/EX-15, recordatorios inteligentes de citas y renovaciones. Todo gratis y offline.',
  openGraph: {
    title: 'Herramientas · Manos Abiertas',
    description: 'Herramientas prácticas gratuitas para personas inmigrantes: coste de vida, documentos, recordatorios',
    type: 'website',
  },
};

export default function HerramientasPage() {
  return <ToolsSection />;
}