"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { FRESHA_URL, translations, useLocale } from "@/lib/i18n";

export default function MobileBookButton() {
  const { locale, t } = useLocale();
  const [mounted, setMounted] = useState(false);
  const buttonText = mounted ? t.cta.bookViaFresha : translations.en.cta.bookViaFresha;
  const alignmentClass = mounted && locale === "ar" ? "left-4" : "right-4";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      href={FRESHA_URL}
      target="_blank"
      rel="noopener noreferrer"
      ariaLabel={buttonText}
      className={`fixed bottom-4 z-50 shadow-[0_0_30px_rgba(232,0,40,0.35)] md:hidden ${alignmentClass}`}
    >
      {buttonText}
    </Button>
  );
}
