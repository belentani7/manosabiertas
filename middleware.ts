import { NextRequest, NextResponse } from 'next/server';

// Supported locales from src/i18n/languages.ts
const locales = [
  'es', 'ca', 'pt-BR', 'pt', 'en', 'zh', 'hi', 'qu', 'ar', 'fr',
  'de', 'it', 'ru', 'uk', 'pl', 'ro', 'bg', 'nl', 'sv', 'da',
  'fi', 'no', 'el', 'tr', 'ur', 'fa', 'bn', 'pa', 'ta', 'te',
  'mr', 'gu', 'sw', 'am', 'ber', 'tl', 'vi', 'ja', 'ko'
];

const defaultLocale = 'es';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Don't redirect for API routes, files, or special Next.js paths
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/public/') ||
    pathname.match(/\.[^/]+$/) // file with extension
  ) {
    return NextResponse.next();
  }

  // Get preferred locale from Accept-Language header or cookie
  let locale = defaultLocale;

  // Check cookie first
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;
  if (localeCookie && locales.includes(localeCookie)) {
    locale = localeCookie;
  } else {
    // Parse Accept-Language header
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage) {
      const preferred = acceptLanguage
        .split(',')
        .map((lang) => lang.split(';')[0].trim())
        .find((lang) => locales.includes(lang.toLowerCase()) ||
                       locales.includes(lang.split('-')[0].toLowerCase()));

      if (preferred) {
        const fullMatch = locales.find(
          (locale) => locale.toLowerCase() === preferred.toLowerCase() ||
                     locale.split('-')[0].toLowerCase() === preferred.split('-')[0].toLowerCase()
        );
        if (fullMatch) locale = fullMatch;
      }
    }
  }

  // Redirect root to locale
  if (pathname === '/' || pathname === '') {
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  // Redirect other paths without locale
  const response = NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  response.cookies.set('NEXT_LOCALE', locale);
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|apple-touch-icon|og.png|robots.txt|sitemap.xml).*)',
  ],
};
