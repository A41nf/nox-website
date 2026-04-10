"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { navItems } from "@/src/data/site-content";
import { NoxButton } from "@/src/components/ui/nox-button";
import { FRESHA_URL, useLocale } from "@/lib/i18n";

export function Navbar() {
  /*
   * Sanity nav fetch pattern with fallback:
   * const navigation = await getNavigation();
   * const cmsItems = navigation?.items?.filter((item) => item?.isActive);
   * const primaryNavItems = cmsItems?.length
   *   ? cmsItems.map((item) => ({
   *       label: item.labelAr ?? item.labelEn ?? "",
   *       href: item.href ?? "#",
   *     }))
   *   : [...navItems, { label: careersNavItem.label.ar, href: careersNavItem.href }];
   */
  const pathname = usePathname();
  const { toggleLocale, locale, isArabic } = useLocale();
  const langAriaLabel = isArabic ? "Switch to English" : "التبديل إلى العربية";
  const [open, setOpen] = useState(false);
  const primaryNavItems = navItems;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0D0D0D]/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link
          href="/"
          className="group rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
        >
          <div className="text-right">
            <div className="text-2xl font-black tracking-[0.45em] text-white md:text-3xl">
              NO<span className="text-[#E80028]">X</span>
            </div>
            <div className="mt-1 text-[10px] font-semibold tracking-[0.3em] text-white/80 md:text-xs">
              تدريب بلا أعذار
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-6">
            {primaryNavItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D] ${active ? "bg-white px-2 py-0.5 text-[#E80028]" : "text-white/85 hover:text-white"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleLocale}
              aria-label={langAriaLabel}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80"
            >
              {locale.toUpperCase()}
            </button>
            <NoxButton href={FRESHA_URL} target="_blank" rel="noopener noreferrer">احجز استشارة</NoxButton>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-[#111111] px-4 py-4 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {primaryNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-right text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] ${pathname === item.href ? "bg-[#E80028] text-white" : "bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"}`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={toggleLocale}
                aria-label={langAriaLabel}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80"
              >
                {locale.toUpperCase()}
              </button>
              <NoxButton href={FRESHA_URL} target="_blank" rel="noopener noreferrer" className="mt-2 w-full">
                ابدأ الآن
              </NoxButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
