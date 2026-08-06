import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LANGUAGES, type LanguageCode } from '@/i18n/languages';
import { translations } from '@/i18n/translations';
import { ManosAbiertasApp } from '@/components/manos-abiertas/manos-abiertas-app';

// Generate static params for all supported locales
export async function generateStaticParams() {
  return LANGUAGES.map((lang) => ({
    locale: lang.code,
  }));
}

// Generate metadata for home page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeStr } = await params;
  const locale = localeStr as LanguageCode;

  if (!LANGUAGES.some((lang) => lang.code === locale)) {
    notFound();
  }

  const lang = LANGUAGES.find((l) => l.code === locale);
  const t = translations[locale] || translations.es;

  return {
    title: t.home_welcome || 'Manos Abiertas',
    description: t.hero_subtitle || 'Platform for immigrants',
    openGraph: {
      title: `${t.home_welcome} · Manos Abiertas`,
      description: t.hero_subtitle,
      type: 'website',
      locale: locale.replace('-', '_'),
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://manosabiertas.space-z.ai'}/${locale}`,
    },
  };
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeStr } = await params;
  const locale = localeStr as LanguageCode;

  if (!LANGUAGES.some((lang) => lang.code === locale)) {
    notFound();
  }

  return <ManosAbiertasApp />;
}
