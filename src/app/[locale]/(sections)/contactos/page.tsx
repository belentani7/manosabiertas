import { Metadata } from 'next';
import { ContactsSection } from '@/components/manos-abiertas/contacts-section';

export const metadata: Metadata = {
  title: 'Contactos de Emergencia y Ayuda',
  description: 'Directorio de 41 contactos verificados: 112, 016, 028, ONGs, consulados, ayuntamientos, servicios jurídicos gratuitos. Teléfonos, horarios y enlaces directos.',
  openGraph: {
    title: 'Contactos · Manos Abiertas',
    description: 'Directorio de contactos de emergencia y ayuda para personas inmigrantes en España',
    type: 'website',
  },
};

export default function ContactosPage() {
  return <ContactsSection />;
}