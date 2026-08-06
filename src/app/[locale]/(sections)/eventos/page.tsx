import { Metadata } from 'next';
import { EventsSection } from '@/components/manos-abiertas/events-section';

export const metadata: Metadata = {
  title: 'Eventos',
  description: 'Calendario de eventos para personas inmigrantes en España: talleres, charlas, meetups, cursos presenciales y online. Filtros por ciudad, fecha y categoría.',
  openGraph: {
    title: 'Eventos · Manos Abiertas',
    description: 'Calendario de eventos para personas inmigrantes en España',
    type: 'website',
  },
};

export default function EventosPage() {
  return <EventsSection />;
}