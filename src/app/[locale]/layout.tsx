import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LANGUAGES, type LanguageCode } from '@/i18n/languages';
import { getTranslation } from '@/i18n/translations';
import { ManoAbiertoLocaleProvider } from '@/components/manos-abiertas/locale-provider';

// Generate static params for all supported locales
export async function generateStaticParams() {
  return LANGUAGES.map((lang) => ({
    locale: lang.code,
  }));
}

// Generate metadata for each locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeStr } = await params;
  const locale = localeStr as LanguageCode;

  // Validate locale
  if (!LANGUAGES.some((lang) => lang.code === locale)) {
    notFound();
  }

  const lang = LANGUAGES.find((l) => l.code === locale);
  const t = getTranslation(locale);

  return {
    title: {
      default: `${t.home_welcome || 'Manos Abiertas'} · ${lang?.name || 'Spanish'}`,
      template: `%s · Manos Abiertas (${lang?.englishName})`,
    },
    description: t.hero_subtitle || 'Platform for immigrants and communities',
    alternates: {
      languages: Object.fromEntries(
        LANGUAGES.map((l) => [l.code, `${process.env.NEXT_PUBLIC_SITE_URL || 'https://manosabiertas.space-z.ai'}/${l.code}`])
      ),
    },
    openGraph: {
      title: `Manos Abiertas · ${lang?.name}`,
      description: t.hero_subtitle,
      locale: locale.replace('-', '_'),
      alternateLocale: LANGUAGES.filter((l) => l.code !== locale).map((l) =>
        l.code.replace('-', '_')
      ),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeStr } = await params;
  const locale = localeStr as LanguageCode;

  // Validate locale
  if (!LANGUAGES.some((lang) => lang.code === locale)) {
    notFound();
  }

  const language = LANGUAGES.find((l) => l.code === locale);
  const t = getTranslation(locale);
  const isRTL = language?.rtl ?? false;

  return (
    <ManoAbiertoLocaleProvider locale={locale} translations={t} dir={isRTL ? 'rtl' : 'ltr'}>
      <div lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </ManoAbiertoLocaleProvider>
  );
}
