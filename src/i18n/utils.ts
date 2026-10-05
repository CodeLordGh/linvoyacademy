import en from './en.json';
import fr from './fr.json';

export type Locale = 'en' | 'fr';

const translations = { en, fr } as const;

/**
 * Returns the translation object for the given locale.
 * Falls back to English if the locale is not recognised.
 */
export function useTranslation(lang: string) {
  const locale = (lang in translations ? lang : 'en') as Locale;
  return translations[locale];
}

/**
 * Returns the opposite locale  useful for the language toggle link.
 */
export function otherLocale(lang: Locale): Locale {
  return lang === 'en' ? 'fr' : 'en';
}

/**
 * Given the current pathname and the target locale, returns the equivalent URL
 * for the other language (swaps the locale prefix).
 */
export function switchLocaleUrl(pathname: string, targetLocale: Locale): string {
  // pathname is e.g. /en/programs or /fr/contact
  const parts = pathname.split('/').filter(Boolean); // ['en', 'programs']
  if (parts.length > 0 && (parts[0] === 'en' || parts[0] === 'fr')) {
    parts[0] = targetLocale;
  } else {
    parts.unshift(targetLocale);
  }
  return '/' + parts.join('/');
}
