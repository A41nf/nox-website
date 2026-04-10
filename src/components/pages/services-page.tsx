"use client";

import type { Service } from "@/lib/types";
import { useLocale } from "@/lib/i18n";
import { services as fallbackServices } from "@/src/data/site-content";
import { Reveal } from "@/src/components/ui/reveal";
import { SectionHeading } from "@/src/components/ui/section-heading";

export function ServicesPage({ services }: { services?: Service[] | null }) {
  const { t, isArabic } = useLocale();
  const page = t.services;
  const sanityServices = services ?? [];
  const hasSanityServices = sanityServices.length > 0;
  const localizedServices = hasSanityServices
    ? fallbackServices.map((service, index) => {
        const item = sanityServices[index];

        return {
          ...service,
          title: isArabic ? item?.titleAr ?? item?.title ?? service.title : item?.title ?? service.title,
          description:
            isArabic ? item?.descriptionAr ?? item?.description ?? service.description : item?.description ?? service.description,
          bullets:
            isArabic ? item?.benefitsAr ?? item?.benefits ?? service.bullets : item?.benefits ?? service.bullets,
          price: isArabic ? item?.priceAr ?? item?.price ?? service.price : item?.price ?? service.price,
        };
      })
    : fallbackServices.map((service, index) => ({
        ...service,
        title: page.services[index]?.title ?? service.title,
        description: page.services[index]?.description ?? service.description,
        bullets: page.services[index]?.benefits ?? service.bullets,
        price: page.services[index]?.price ?? service.price,
      }));

  return (
    <div dir={isArabic ? "rtl" : "ltr"} className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow={page.label}
          title={page.title}
          description={page.description}
          as="h1"
        />
      </Reveal>

      <div className="mt-14 space-y-6">
        {localizedServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.id} delay={index * 0.06}>
              <section
                id={service.id}
                className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div>
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E80028]/15 text-[#E80028]">
                    <Icon size={24} />
                  </div>
                  <h2 className="mt-6 text-3xl font-black text-white">{service.title}</h2>
                  <p className="mt-3 inline-block rounded bg-white px-2 py-0.5 text-base text-[#E80028]">{service.subtitle}</p>
                  <p className="mt-5 text-base leading-8 text-white/80">{service.description}</p>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/45 p-6">
                    <p className="text-sm font-bold tracking-[0.28em] text-white/80">المحتوى</p>
                    <div className="mt-5 space-y-3">
                      {service.bullets.map((bullet) => (
                        <div key={bullet} className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/80">
                          {bullet}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] border border-[#E80028]/25 bg-[linear-gradient(180deg,rgba(232,0,40,0.12),rgba(255,255,255,0.03))] p-6">
                    <p className="text-sm font-bold tracking-[0.28em] text-white/80">التفاصيل</p>
                    <div className="mt-5 space-y-5">
                      <div>
                        <p className="text-sm text-white/80">المدة</p>
                        <p className="mt-1 text-xl font-black text-white">{service.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-white/80">السعر</p>
                        <p className="mt-1 text-xl font-black text-white">{service.price}</p>
                      </div>
                      <p className="text-sm leading-7 text-white/80">
                        الأسعار والمحتوى إرشادية حالياً ويمكن استبدالها لاحقاً بمحتوى نهائي أو بيانات CMS.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
