export const LOCALE_COOKIE_NAME = "vertex_locale";

export const locales = ["da", "en"] as const;
export type Locale = (typeof locales)[number];

export const DEFAULT_LOCALE: Locale = "da";

export function normalizeLocale(value?: string | null): Locale {
  if (value === "en") {
    return "en";
  }
  return "da";
}
