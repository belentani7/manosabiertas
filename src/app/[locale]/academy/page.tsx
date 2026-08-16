import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AcademyPageContent } from '@/components/academy/academy-page-content';
import { LANGUAGES, type LanguageCode } from '@/i18n/languages';

export const metadata: Metadata = {
  title: 'Academia Abierta | Cursos gratuitos de CV, IA y Office',
  description: 'Formación profesional gratuita en español para crear un CV, usar IA con criterio y dominar Office.',
  alternates: { canonical: '/es/academy' },
  openGraph: {
    title: 'Academia Abierta',
    description: 'Cursos gratuitos en español de CV, inteligencia artificial y Office.',
    type: 'website',
    url: '/es/academy',
  },
};

export default async function LocalizedAcademyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeValue } = await params;
  if (!LANGUAGES.some((language) => language.code === localeValue)) notFound();
  return <AcademyPageContent locale={localeValue as LanguageCode} />;
}
