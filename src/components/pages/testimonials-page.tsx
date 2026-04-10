"use client";

import { Quote } from "lucide-react";

import type { Testimonial } from "@/lib/types";
import { FRESHA_URL, useLocale } from "@/lib/i18n";
import { testimonials as fallbackTestimonials } from "@/src/data/site-content";
import { NoxButton } from "@/src/components/ui/nox-button";
import { Reveal } from "@/src/components/ui/reveal";
import { SectionHeading } from "@/src/components/ui/section-heading";

export function TestimonialsPage({ testimonials }: { testimonials?: Testimonial[] | null }) {
  const { t, isArabic } = useLocale();
  const page = t.testimonials;
  const sanityTestimonials = testimonials ?? [];
  const hasSanityTestimonials = sanityTestimonials.length > 0;
  const localizedTestimonials = hasSanityTestimonials
    ? fallbackTestimonials.map((item, index) => {
        const testimonial = sanityTestimonials[index];

        return {
          ...item,
          name: testimonial?.name ?? item.name,
          result:
            isArabic
              ? testimonial?.resultAr ?? testimonial?.result ?? item.result
              : testimonial?.result ?? item.result,
          quote:
            isArabic
              ? testimonial?.quoteAr ?? testimonial?.quote ?? item.quote
              : testimonial?.quote ?? item.quote,
        };
      })
    : fallbackTestimonials.map((item, index) => ({
        ...item,
        name: page.testimonials[index]?.name ?? item.name,
        result: page.testimonials[index]?.result ?? item.result,
        quote: page.testimonials[index]?.quote ?? item.quote,
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

      {/* Featured stats */}
      <Reveal delay={0.1}>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {page.stats.map((stat, index) => (
            <div
              key={stat}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center"
            >
              <p className="inline-block rounded bg-white px-2 py-0.5 text-3xl font-black text-[#E80028]">{["+200", "91%", "4.9★"][index] ?? ""}</p>
              <p className="mt-1 text-sm text-white/60">{stat}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Testimonials grid */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {localizedTestimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.08}>
            <article className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:border-[#E80028]/30 hover:bg-[#E80028]/5">
              <Quote
                size={28}
                className="mb-4 shrink-0 text-[#E80028]/60"
                aria-hidden="true"
              />
              <p className="flex-1 text-base leading-8 text-white/80">
                {item.quote}
              </p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-lg font-black text-white">{item.name}</p>
                <p className="mt-1 inline-block rounded bg-white px-2 py-0.5 text-sm font-semibold text-[#E80028]">
                  {item.result}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* CTA */}
      <Reveal delay={0.2}>
        <div className="mt-20 rounded-[2rem] border border-[#E80028]/25 bg-[linear-gradient(180deg,rgba(232,0,40,0.14),rgba(255,255,255,0.03))] p-10 text-center">
          <h2 className="text-2xl font-black text-white md:text-3xl">
            أنت التالي في قائمة النجاح
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-white/75">
            ابدأ رحلتك مع NOX اليوم واحصل على تقييم أولي مجاني مع أحد مدربينا.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <NoxButton href={FRESHA_URL} target="_blank" rel="noopener noreferrer">احجز تقييمك الآن</NoxButton>
            <NoxButton href="/services" variant="secondary">
              {t.services.label}
            </NoxButton>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
