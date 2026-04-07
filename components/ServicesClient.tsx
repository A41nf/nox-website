"use client";

import { Activity, Dumbbell, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { FRESHA_URL, useLocale } from "@/lib/i18n";
import type { Service } from "@/lib/types";

const serviceIcons = [Dumbbell, Activity, Users];

type ServicesClientProps = {
  services?: Service[] | null;
};

export default function ServicesClient({ services }: ServicesClientProps) {
  const { t, isArabic } = useLocale();
  const s = t.services;
  const serviceData = services && services.length > 0
    ? services.map((service) => ({
        title: isArabic ? service.titleAr ?? service.title : service.title,
        description: isArabic ? service.descriptionAr ?? service.description : service.description,
        benefits: isArabic ? service.benefitsAr ?? service.benefits ?? [] : service.benefits ?? [],
        price: isArabic ? service.priceAr ?? service.price : service.price,
      }))
    : s.services.map((service) => ({ ...service }));

  return (
    <section className={`mx-auto w-full max-w-7xl px-4 pt-10 md:px-8 ${isArabic ? "font-cairo" : ""}`}>
      <SectionHeader label={s.label} title={s.title} description={s.description} as="h1" />

      <div className="mt-10 grid gap-7 lg:grid-cols-3">
        {serviceData.map((service, index: number) => {
          const Icon = serviceIcons[index % serviceIcons.length] ?? Dumbbell;
          return (
            <article key={service.title} className="rounded-2xl border border-white/10 bg-nox-grey/55 p-7">
              <Icon className="text-nox-red" aria-hidden />
              <h2 className="mt-5 text-2xl font-bold">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{service.description}</p>

              <ul className="mt-5 space-y-2 text-sm text-white/85">
                {service.benefits.map((benefit: string) => (
                  <li key={benefit}>• {benefit}</li>
                ))}
              </ul>

              {service.price && (
                <p className="mt-5 text-sm font-semibold text-nox-red">{service.price}</p>
              )}

              <Button
                href={FRESHA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 w-full"
                ariaLabel={`${s.bookNow} ${service.title}`}
              >
                {s.bookNow}
              </Button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
