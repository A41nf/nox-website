"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLocale } from "@/lib/i18n";
import type { Testimonial } from "@/lib/types";

type FallbackTestimonial = {
  name: string;
  result: string;
  quote: string;
  duration: string;
};

type TestimonialsClientProps = {
  testimonials?: Testimonial[] | null;
};

export default function TestimonialsClient({ testimonials }: TestimonialsClientProps) {
  const { t, isArabic } = useLocale();
  const te = t.testimonials;
  const testimonialData = testimonials && testimonials.length > 0
    ? testimonials.map((testimonial) => ({
        name: testimonial.name,
        result: isArabic ? testimonial.resultAr ?? testimonial.result : testimonial.result,
        quote: isArabic ? testimonial.quoteAr ?? testimonial.quote : testimonial.quote,
        duration: isArabic ? testimonial.durationAr ?? testimonial.duration : testimonial.duration,
      }))
    : te.testimonials.map((testimonial) => ({ ...testimonial })) as FallbackTestimonial[];

  return (
    <div className={`mx-auto w-full max-w-7xl px-4 pt-10 md:px-8 ${isArabic ? "font-cairo" : ""}`}>
      <AnimatedSection preset="slideUp">
        <SectionHeader label={te.label} title={te.title} description={te.description} />
      </AnimatedSection>

      <AnimatedSection delay={0.08} className="mt-10 grid gap-4 lg:grid-cols-3">
        {te.stats.map((stat: string) => (
          <article key={stat} className="rounded-2xl border border-nox-red/20 bg-nox-grey/60 p-6">
            <p className="text-lg font-semibold text-white">{stat}</p>
          </article>
        ))}
      </AnimatedSection>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {testimonialData.map((testimonial, index: number) => (
          <AnimatedSection key={testimonial.name} delay={index * 0.05} preset="slideUp">
            <article className="h-full rounded-2xl border border-white/10 bg-black/55 p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="text-lg font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-nox-red">★★★★★</p>
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-nox-red">{testimonial.result}</p>
              <p className="mt-5 text-sm leading-relaxed text-white/80">{testimonial.quote}</p>
              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-white/70">
                {te.durationLabel}: {testimonial.duration}
              </p>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
