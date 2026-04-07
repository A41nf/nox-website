"use client";

import { coaches } from "@/src/data/site-content";
import { Reveal } from "@/src/components/ui/reveal";
import { SectionHeading } from "@/src/components/ui/section-heading";

export function CoachesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="الفريق"
          title="مدربون بخلفيات مختلفة لكن بعقلية واحدة"
          description="كل مدرب في NOX مسؤول عن الجودة، الدقة، واللغة المباشرة مع العميل. لا وعود زائفة ولا خطط عامة."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {coaches.map((coach, index) => (
          <Reveal key={coach.name} delay={index * 0.08}>
            <article className="h-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <div className="h-56 rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(232,0,40,0.3),rgba(255,255,255,0.05),rgba(13,13,13,1))]" />
              <p className="mt-6 text-sm tracking-[0.3em] text-[#E80028]">{coach.role}</p>
              <h2 className="mt-3 text-3xl font-black text-white">{coach.name}</h2>
              <p className="mt-5 text-base leading-8 text-white/80">{coach.bio}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {coach.specialties.map((specialty) => (
                  <span key={specialty} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80">
                    {specialty}
                  </span>
                ))}
              </div>
              <blockquote className="mt-6 border-r-2 border-[#E80028] pr-4 text-sm leading-7 text-white/80">
                {coach.quote}
              </blockquote>
            </article>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
