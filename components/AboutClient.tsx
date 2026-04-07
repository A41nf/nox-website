"use client";

import Link from "next/link";
import { BadgeCheck, Flame, Shield, Trophy, Users } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { FRESHA_URL, useLocale } from "@/lib/i18n";
import type { SiteSettings } from "@/lib/types";

const valueIcons = [Flame, BadgeCheck, Shield, Trophy];

type AboutClientProps = {
  siteSettings?: SiteSettings | null;
};

const fallbackSiteSettings: {
  address: string;
  addressAr: string;
  phone: string;
  hours: string;
  hoursAr: string;
  freshaUrl: string;
  instagramUrl: string;
  tiktokUrl: string;
} = {
  address: "Level 2, Al Khuwair Fitness District, Muscat, Oman",
  addressAr: "الطابق الثاني، منطقة اللياقة بالخوير، مسقط، عُمان",
  phone: "+968 9361 1220",
  hours: "Sat - Thu: 6:00 AM - 11:00 PM",
  hoursAr: "السبت - الخميس: 6:00 صباحاً - 11:00 مساءً",
  freshaUrl: FRESHA_URL,
  instagramUrl: "https://instagram.com",
  tiktokUrl: "https://www.tiktok.com",
};

function getWhatsAppUrl(value?: string | null) {
  const phone = (value ?? "").replace(/[^\d]/g, "");
  return phone ? `https://wa.me/${phone}` : "https://wa.me/96893611220";
}

export default function AboutClient({ siteSettings }: AboutClientProps) {
  const { t, isArabic } = useLocale();
  const a = t.about;
  const settings = {
    ...fallbackSiteSettings,
    ...siteSettings,
  };
  const address = isArabic ? settings.addressAr ?? settings.address ?? fallbackSiteSettings.addressAr : settings.address ?? fallbackSiteSettings.address;
  const hours = isArabic ? settings.hoursAr ?? settings.hours ?? fallbackSiteSettings.hoursAr : settings.hours ?? fallbackSiteSettings.hours;
  const phone = settings.phone ?? fallbackSiteSettings.phone;
  const freshaUrl = settings.freshaUrl ?? fallbackSiteSettings.freshaUrl;
  const instagramUrl = settings.instagramUrl ?? fallbackSiteSettings.instagramUrl;
  const tiktokUrl = settings.tiktokUrl ?? fallbackSiteSettings.tiktokUrl;

  return (
    <div className={isArabic ? "font-cairo" : ""}>
      <section className="mx-auto w-full max-w-7xl px-4 pt-10 md:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-nox-grey/55">
          <img
            src="https://picsum.photos/seed/nox-gym-interior/1400/500"
            alt="NOX gym interior"
            className="h-64 w-full object-cover opacity-70 md:h-80"
          />
          <div className="p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.22em] text-nox-red">{a.label}</p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">{a.title}</h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">{a.body1}</p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">{a.body2}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-7xl px-4 md:px-8" aria-labelledby="values-heading">
        <SectionHeader
          id="values-heading"
          label={a.valuesLabel}
          title={a.valuesTitle}
          description={a.valuesDesc}
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {a.values.map((value: { title: string; description: string }, index: number) => {
            const Icon = valueIcons[index];
            return (
              <article key={value.title} className="rounded-2xl border border-white/10 bg-black/45 p-6">
                <Icon className="text-nox-red" aria-hidden />
                <h2 className="mt-4 text-2xl font-bold">{value.title}</h2>
                <p className="mt-3 text-sm text-white/75">{value.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-7xl px-4 md:px-8" aria-labelledby="studio-features-heading">
        <div className="grid gap-8 rounded-2xl border border-white/10 bg-nox-grey/50 p-8 md:grid-cols-2 md:p-10">
          <div>
            <SectionHeader
              id="studio-features-heading"
              label={a.studioLabel}
              title={a.studioTitle}
              description={a.studioDesc}
            />
          </div>
          <ul className="space-y-3 text-sm text-white/85 md:text-base">
            {a.features.map((feature: string) => (
              <li key={feature} className="flex items-start gap-3">
                <Users className="mt-0.5 text-nox-red" size={18} aria-hidden />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-7xl px-4 md:px-8" aria-labelledby="about-contact-heading">
        <div className="rounded-2xl border border-white/10 bg-black/50 p-8 md:p-10">
          <SectionHeader
            id="about-contact-heading"
            label={a.label}
            title={isArabic ? "زور نوكس" : "Visit NOX"}
            description={isArabic ? "تفاصيل الوصول والحجز والتواصل المباشر." : "Direct details for visiting, booking, and getting in touch."}
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-nox-grey/45 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-nox-red">{t.home.addressLabel}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/85">{address}</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-nox-grey/45 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-nox-red">{t.home.phoneLabel}</p>
              <a href={`tel:${phone}`} className="mt-2 inline-block text-sm text-white/85 hover:text-nox-red">
                {phone}
              </a>
            </article>
            <article className="rounded-2xl border border-white/10 bg-nox-grey/45 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-nox-red">{t.home.hoursLabel}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/85">{hours}</p>
            </article>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={freshaUrl} target="_blank" rel="noopener noreferrer" ariaLabel={t.cta.bookConsultation}>
              {t.cta.bookConsultation}
            </Button>
            <Button
              href={getWhatsAppUrl(siteSettings?.whatsapp ?? phone)}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              {t.contact.whatsapp}
            </Button>
            <Link
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 text-sm font-semibold text-white/85 transition-colors hover:border-nox-red hover:text-nox-red"
            >
              Instagram
            </Link>
            <Link
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 text-sm font-semibold text-white/85 transition-colors hover:border-nox-red hover:text-nox-red"
            >
              TikTok
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
