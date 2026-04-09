"use client";

import { Quote } from "lucide-react";

import { testimonials } from "@/src/data/site-content";
import { NoxButton } from "@/src/components/ui/nox-button";
import { Reveal } from "@/src/components/ui/reveal";
import { SectionHeading } from "@/src/components/ui/section-heading";

export function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="قصص نجاح"
          title="ماذا قال عملاؤنا"
          description="نتائج حقيقية، أشخاص حقيقيون. هذه بعض القصص من عملاء NOX الذين غيّروا مساراتهم عبر التدريب الجاد والمتابعة المستمرة."
          as="h1"
        />
      </Reveal>

      {/* Featured stats */}
      <Reveal delay={0.1}>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "+200", label: "عميل تحوّل بنجاح" },
            { value: "91%", label: "نسبة الالتزام بالبرنامج" },
            { value: "4.9★", label: "تقييم التجربة" },
            { value: "45", label: "دقيقة تركيز مكثف" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center"
            >
              <p className="text-3xl font-black text-[#E80028]">{stat.value}</p>
              <p className="mt-1 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Testimonials grid */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
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
                <p className="mt-1 text-sm font-semibold text-[#E80028]">
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
            <NoxButton href="/contact">احجز تقييمك الآن</NoxButton>
            <NoxButton href="/services" variant="secondary">
              استعرض الخدمات
            </NoxButton>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
