// Manos Abiertas - Internationalization
// Selectable languages for immigrant communities in Spain.

export type LanguageCode =
  | 'es' | 'ca' | 'pt-BR' | 'pt' | 'en' | 'zh' | 'hi' | 'qu' | 'ar' | 'fr'
  | 'de' | 'it' | 'ru' | 'uk' | 'pl' | 'ro' | 'bg' | 'nl' | 'sv' | 'da'
  | 'fi' | 'no' | 'el' | 'tr' | 'ur' | 'fa' | 'bn' | 'pa' | 'ta' | 'te'
  | 'mr' | 'gu' | 'sw' | 'am' | 'ber' | 'tl' | 'vi' | 'ja' | 'ko';

export interface Language {
  code: LanguageCode;
  name: string; // native name
  englishName: string;
  flag: string;
  rtl?: boolean;
}

export const RTL_LANGUAGE_CODES = ['ar', 'fa', 'ur'] as const satisfies readonly LanguageCode[];

export function isRtlLanguage(code: LanguageCode): boolean {
  return RTL_LANGUAGE_CODES.some((rtlCode) => rtlCode === code);
}

export function getLanguageDirection(code: LanguageCode): 'ltr' | 'rtl' {
  return isRtlLanguage(code) ? 'rtl' : 'ltr';
}

export const LANGUAGES: Language[] = [
  { code: 'es', name: 'Español', englishName: 'Spanish', flag: '🇪🇸' },
  { code: 'ca', name: 'Català', englishName: 'Catalan', flag: '🏴󠁥󠁳󠁣󠁴󠁿' },
  { code: 'pt-BR', name: 'Português (Brasil)', englishName: 'Portuguese (Brazil)', flag: '🇧🇷' },
  { code: 'pt', name: 'Português', englishName: 'Portuguese', flag: '🇵🇹' },
  { code: 'en', name: 'English', englishName: 'English', flag: '🇬🇧' },
  { code: 'zh', name: '中文', englishName: 'Chinese', flag: '🇨🇳' },
  { code: 'hi', name: 'हिन्दी', englishName: 'Hindi', flag: '🇮🇳' },
  { code: 'qu', name: 'Runa Simi', englishName: 'Quechua', flag: '🇵🇪' },
  { code: 'ar', name: 'العربية', englishName: 'Arabic', flag: '🇸🇦', rtl: true },
  { code: 'fr', name: 'Français', englishName: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', englishName: 'German', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', englishName: 'Italian', flag: '🇮🇹' },
  { code: 'ru', name: 'Русский', englishName: 'Russian', flag: '🇷🇺' },
  { code: 'uk', name: 'Українська', englishName: 'Ukrainian', flag: '🇺🇦' },
  { code: 'pl', name: 'Polski', englishName: 'Polish', flag: '🇵🇱' },
  { code: 'ro', name: 'Română', englishName: 'Romanian', flag: '🇷🇴' },
  { code: 'bg', name: 'Български', englishName: 'Bulgarian', flag: '🇧🇬' },
  { code: 'nl', name: 'Nederlands', englishName: 'Dutch', flag: '🇳🇱' },
  { code: 'sv', name: 'Svenska', englishName: 'Swedish', flag: '🇸🇪' },
  { code: 'da', name: 'Dansk', englishName: 'Danish', flag: '🇩🇰' },
  { code: 'fi', name: 'Suomi', englishName: 'Finnish', flag: '🇫🇮' },
  { code: 'no', name: 'Norsk', englishName: 'Norwegian', flag: '🇳🇴' },
  { code: 'el', name: 'Ελληνικά', englishName: 'Greek', flag: '🇬🇷' },
  { code: 'tr', name: 'Türkçe', englishName: 'Turkish', flag: '🇹🇷' },
  { code: 'ur', name: 'اردو', englishName: 'Urdu', flag: '🇵🇰', rtl: true },
  { code: 'fa', name: 'فارسی', englishName: 'Persian', flag: '🇮🇷', rtl: true },
  { code: 'bn', name: 'বাংলা', englishName: 'Bengali', flag: '🇧🇩' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', englishName: 'Punjabi', flag: '🇮🇳' },
  { code: 'ta', name: 'தமிழ்', englishName: 'Tamil', flag: '🇮🇳' },
  { code: 'te', name: 'తెలుగు', englishName: 'Telugu', flag: '🇮🇳' },
  { code: 'mr', name: 'मराठी', englishName: 'Marathi', flag: '🇮🇳' },
  { code: 'gu', name: 'ગુજરાતી', englishName: 'Gujarati', flag: '🇮🇳' },
  { code: 'sw', name: 'Kiswahili', englishName: 'Swahili', flag: '🇰🇪' },
  { code: 'am', name: 'አማርኛ', englishName: 'Amharic', flag: '🇪🇹' },
  { code: 'ber', name: 'ⵜⴰⵎⴰⵣⵉⵖⵜ', englishName: 'Berber', flag: '🇲🇦' },
  { code: 'tl', name: 'Tagalog', englishName: 'Tagalog', flag: '🇵🇭' },
  { code: 'vi', name: 'Tiếng Việt', englishName: 'Vietnamese', flag: '🇻🇳' },
  { code: 'ja', name: '日本語', englishName: 'Japanese', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', englishName: 'Korean', flag: '🇰🇷' },
];

export const LANGUAGE_COUNT = LANGUAGES.length;
