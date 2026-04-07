"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Button from "@/components/ui/Button";
import { FRESHA_URL, translations, useLocale } from "@/lib/i18n";

const serviceLinks = [
  { href: "/services#personal-training", key: "personalTraining" as const },
  { href: "/services#ems-training", key: "ems" as const },
  { href: "/services#group-classes", key: "groupClasses" as const },
];

export default function Navbar() {
  const pathname = usePathname();
  const isScrolled = useScrollPosition(40);
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { toggleLocale, t, isArabic } = useLocale();
  const navText = mounted ? t.navbar : translations.en.navbar;
  const useArabicStyles = mounted && isArabic;

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "/", label: navText.home },
    { href: "/about", label: navText.about },
    { href: "/coaches", label: navText.coaches },
    { href: "/careers", label: navText.careers },
    { href: "/calculators", label: navText.calculators },
    { href: "/schedule", label: navText.schedule },
    { href: "/blog", label: navText.blog },
    { href: "/contact", label: navText.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-nox-black/95 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 md:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group inline-flex flex-col leading-none"
        >
          <span className="text-2xl font-black tracking-[0.28em] text-white md:text-3xl">
            NO<span className="text-nox-red">X</span>
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-nox-red md:text-xs">
            No Excuse Personal Training
          </span>
        </Link>

        <div className="hidden items-center gap-4 lg:flex">
          <ul className="flex items-center gap-6">
            {navItems.slice(0, 2).map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname === item.href;

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium uppercase tracking-wider transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nox-red ${
                      isActive ? "text-nox-red" : "text-white/85 hover:text-white"
                    } ${useArabicStyles ? "arabic font-cairo" : ""}`}
                    aria-label={item.label}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}

            <li
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 text-sm font-medium uppercase tracking-wider text-white/85 transition-colors hover:text-white ${
                  useArabicStyles ? "arabic font-cairo" : ""
                }`}
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
                onClick={() => setIsServicesOpen((prev) => !prev)}
              >
                {navText.services}
                <ChevronDown size={16} className={isServicesOpen ? "rotate-180 transition-transform" : "transition-transform"} />
              </button>

              <AnimatePresence>
                {isServicesOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full mt-4 w-60 rounded-2xl border border-white/10 bg-nox-grey/95 p-3 shadow-2xl"
                  >
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.key}
                        href={item.href}
                        onClick={() => setIsServicesOpen(false)}
                        className={`block rounded-xl px-4 py-3 text-sm text-white/85 transition-colors hover:bg-black/60 hover:text-white ${
                          useArabicStyles ? "arabic font-cairo" : ""
                        }`}
                      >
                        {navText[item.key]}
                      </Link>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </li>

            {navItems.slice(2).map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium uppercase tracking-wider transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nox-red ${
                      isActive ? "text-nox-red" : "text-white/85 hover:text-white"
                    } ${useArabicStyles ? "arabic font-cairo" : ""}`}
                    aria-label={item.label}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={toggleLocale}
            className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/80 transition-colors hover:border-nox-red hover:text-white"
            aria-label="EN | AR toggle language"
          >
            EN <span className="text-white/40">|</span>{" "}
            <span className="arabic font-cairo">AR</span>
          </button>

          <Button
            href={FRESHA_URL}
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel={navText.bookNow}
            size="md"
            className="h-11 rounded-full bg-[#E80028] px-6 text-sm font-bold md:text-sm"
          >
            {navText.bookNow}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-full border border-white/20 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85"
            aria-label="EN | AR toggle language"
          >
            EN | <span className="arabic font-cairo">AR</span>
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-nox-red hover:text-nox-red"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="border-t border-white/10 bg-nox-black/95 px-4 py-5 backdrop-blur lg:hidden"
          >
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-md px-2 py-2 text-sm font-medium uppercase tracking-wider text-white/85 transition-colors hover:bg-nox-grey hover:text-white ${
                    useArabicStyles ? "arabic font-cairo" : ""
                  }`}
                >
                  {navText.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-md px-2 py-2 text-sm font-medium uppercase tracking-wider text-white/85 transition-colors hover:bg-nox-grey hover:text-white ${
                    useArabicStyles ? "arabic font-cairo" : ""
                  }`}
                >
                  {navText.about}
                </Link>
              </li>
              <li className="rounded-2xl border border-white/10 bg-nox-grey/40 p-3">
                <p
                  className={`px-2 text-xs font-semibold uppercase tracking-[0.2em] text-nox-red ${
                    useArabicStyles ? "arabic font-cairo" : ""
                  }`}
                >
                  {navText.services}
                </p>
                <div className="mt-2 space-y-1">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-md px-2 py-2 text-sm text-white/85 transition-colors hover:bg-black/50 hover:text-white ${
                        useArabicStyles ? "arabic font-cairo" : ""
                      }`}
                    >
                      {navText[item.key]}
                    </Link>
                  ))}
                </div>
              </li>

              {navItems.slice(2).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-md px-2 py-2 text-sm font-medium uppercase tracking-wider text-white/85 transition-colors hover:bg-nox-grey hover:text-white ${
                      useArabicStyles ? "arabic font-cairo" : ""
                    }`}
                    aria-label={item.label}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              href={FRESHA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full"
              ariaLabel={navText.bookNow}
            >
              {navText.bookNow}
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
