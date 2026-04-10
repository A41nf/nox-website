"use client";

import { useEffect } from "react";
import { useLocale } from "@/lib/i18n";

/**
 * Keeps <html lang> and <html dir> in sync with the active locale.
 * Must be rendered inside LocaleProvider.
 */
export function HtmlDirSync() {
  const { locale, isArabic } = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [locale, isArabic]);

  return null;
}
