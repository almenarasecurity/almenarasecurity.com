import en from './en';
import es from './es';
import ui from './ui';

export type Locale = 'en' | 'es';

type NestedKeyOf<T, Prefix extends string = ''> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object
        ? NestedKeyOf<T[K], `${Prefix}${K}.`>
        : `${Prefix}${K}`;
    }[keyof T & string]
  : never;

type PageTranslations = typeof en;
type UITranslations = typeof ui.en;

export type PageKey = NestedKeyOf<PageTranslations>;
export type UIKey = NestedKeyOf<UITranslations>;

const pageTranslations = { en, es } as const;
const uiTranslations = ui;

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== 'object') return path;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === 'string' ? current : path;
}

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'es') return 'es';
  return 'en';
}

export function t(key: PageKey, locale: Locale): string {
  return getNestedValue(
    pageTranslations[locale] as unknown as Record<string, unknown>,
    key
  );
}

export function tUI(key: UIKey, locale: Locale): string {
  return getNestedValue(
    uiTranslations[locale] as unknown as Record<string, unknown>,
    key
  );
}

export const ROUTE_PAIRS: Array<[string, string]> = [
  ['/', '/es/'],
  ['/services/pentesting', '/es/servicios/pentesting'],
  ['/services/awareness-training', '/es/servicios/concienciacion'],
  ['/services/consulting', '/es/servicios/consultoria'],
  ['/services/secure-development', '/es/servicios/desarrollo-seguro'],
  ['/services/pay-per-finding', '/es/servicios/pago-por-hallazgo'],
  ['/about', '/es/sobre-nosotros'],
  ['/contact', '/es/contacto'],

  ['/legal-notice', '/es/aviso-legal'],
  ['/privacy', '/es/privacidad'],
  ['/cookies', '/es/cookies'],
];

export function getAlternateUrl(currentPath: string, currentLocale: Locale): string {
  const cleanPath = currentPath.replace(/\/$/, '') || '/';

  for (const [enPath, esPath] of ROUTE_PAIRS) {
    const cleanEn = enPath.replace(/\/$/, '') || '/';
    const cleanEs = esPath.replace(/\/$/, '') || '/es';

    if (currentLocale === 'en' && cleanPath === cleanEn) return esPath;
    if (currentLocale === 'es' && cleanPath === cleanEs) return enPath;
  }

  if (currentLocale === 'en') return `/es${currentPath}`;
  return currentPath.replace(/^\/es/, '') || '/';
}

export function getLocalizedPath(routeKey: string, locale: Locale): string {
  for (const [enPath, esPath] of ROUTE_PAIRS) {
    if (enPath === routeKey) return locale === 'en' ? enPath : esPath;
    if (esPath === routeKey) return locale === 'es' ? esPath : enPath;
  }
  return locale === 'en' ? routeKey : `/es${routeKey}`;
}

export function getAbsoluteUrl(path: string): string {
  return `https://almenarasecurity.com${path}`;
}

export const locales: Locale[] = ['en', 'es'];
