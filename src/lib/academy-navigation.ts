import type { LanguageCode } from '@/i18n/languages';

type AcademyDestination = 'home' | 'cv' | 'ia' | 'office';

const SECTION_BY_DESTINATION: Record<Exclude<AcademyDestination, 'home'>, string> = {
  cv: 'cv',
  ia: 'learn-ai',
  office: 'office',
};

export function getAcademyPath(locale: LanguageCode) {
  return `/${locale}/academy`;
}

export function getAcademyDestination(locale: LanguageCode, destination: AcademyDestination) {
  const localePath = `/${locale}`;
  return destination === 'home'
    ? localePath
    : `${localePath}#/${SECTION_BY_DESTINATION[destination]}`;
}
