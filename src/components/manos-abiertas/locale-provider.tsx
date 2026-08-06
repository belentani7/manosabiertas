'use client';

import { createContext, useContext, ReactNode } from 'react';
import type { LanguageCode } from '@/i18n/languages';
import type { UITranslations } from '@/i18n/translations';

interface LocaleContextType {
  locale: LanguageCode;
  t: UITranslations;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function ManoAbiertoLocaleProvider({
  locale,
  translations: t,
  children,
}: {
  locale: LanguageCode;
  translations: UITranslations;
  children: ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ locale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within ManoAbiertoLocaleProvider');
  }
  return context;
}
