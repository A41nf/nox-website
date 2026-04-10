"use client";

import { aboutPillars, contactDetails, languageItems } from "@/src/data/site-content";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/src/components/ui/reveal";
import { SectionHeading } from "@/src/components/ui/section-heading";

export function AboutPage() {
  const { t, isArabic } = useLocale();
  const about = t.about;
  const pillars = aboutPillars.map((pillar, index) => ({
    ...pillar,
    title: about.values[index]?.title ?? pillar.title,
    text: about.values[index]?.description ?? pillar.text,
  }));

  return (
    <div dir={isArabic ? "rtl" : "ltr"} className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow={about.label}
          title={about.title}
          description={about.body1}
          as="h1"
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-2xl font-black text-white">الهوية</h2>
            <p className="mt-5 text-base leading-8 text-white/80">
              {about.body1}
            </p>
            <p className="mt-5 text-base leading-8 text-white/80">
              {about.body2}
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.1}>
          <section className="rounded-[2rem] border border-[#E80028]/25 bg-[linear-gradient(180deg,rgba(232,0,40,0.14),rgba(255,255,255,0.03))] p-8">
            <h2 className="text-2xl font-black text-white">الموقع والتواصل</h2>
            <div className="mt-6 space-y-3 text-base leading-8 text-white/80">
              <p>{contactDetails.address}</p>
              <p>{contactDetails.hours}</p>
              <p>{contactDetails.phone}</p>
              <p>{contactDetails.email}</p>
            </div>
          </section>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 0.08}>
            <article className="rounded-[1.8rem] border border-white/10 bg-black/50 p-7">
              <p className="text-sm font-bold tracking-[0.3em] text-[#E80028]">0{index + 1}</p>
              <h3 className="mt-5 text-2xl font-black text-white">{pillar.title}</h3>
              <p className="mt-4 text-base leading-8 text-white/80">{pillar.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <section className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <h2 className="text-2xl font-black text-white">اللغات المستهدفة</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {languageItems.map((item) => (
              <div key={item.en} className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <p className="text-lg font-black text-white">{item.ar}</p>
                <p className="mt-2 text-sm text-white/80">{item.en}</p>
                <p className="mt-1 text-sm text-white/80">{item.fr}</p>
                <p className="mt-1 text-sm text-white/80">{item.hi}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
