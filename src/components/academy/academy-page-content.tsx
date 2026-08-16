import type { LanguageCode } from '@/i18n/languages';
import { AcademyPlatform } from './academy-platform';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Academia Abierta',
  description: 'Cursos gratuitos de CV, inteligencia artificial y Office para público general.',
  inLanguage: 'es',
  isAccessibleForFree: true,
  audience: {
    '@type': 'Audience',
    audienceType: 'Público general',
  },
  hasPart: [
    { '@type': 'Course', name: 'CV profesional', isAccessibleForFree: true },
    { '@type': 'Course', name: 'Inteligencia artificial', isAccessibleForFree: true },
    { '@type': 'Course', name: 'Office y productividad', isAccessibleForFree: true },
  ],
};

export function AcademyPageContent({ locale }: { locale: LanguageCode }) {
  return (
    <div lang="es" dir="ltr">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <AcademyPlatform locale={locale} />
    </div>
  );
}
