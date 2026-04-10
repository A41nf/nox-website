"use client";

import type { Coach } from "@/lib/types";
import { useLocale } from "@/lib/i18n";
import { coaches as fallbackCoaches } from "@/src/data/site-content";
import { Reveal } from "@/src/components/ui/reveal";
import { SectionHeading } from "@/src/components/ui/section-heading";

export function CoachesPage({ coaches }: { coaches?: Coach[] | null }) {
  const { t, isArabic } = useLocale();
  const page = t.coaches;
  const sanityCoaches = coaches ?? [];
  const hasSanityCoaches = sanityCoaches.length > 0;
  const localizedCoaches = hasSanityCoaches
    ? fallbackCoaches.map((coach, index) => {
        const item = sanityCoaches[index];

        return {
          ...coach,
          name: isArabic ? item?.nameAr ?? item?.name ?? coach.name : item?.name ?? coach.name,
          bio: isArabic ? item?.bioAr ?? item?.bio ?? coach.bio : item?.bio ?? coach.bio,
          specialties:
            isArabic
              ? item?.specialtiesAr ?? item?.specialties ?? coach.specialties
              : item?.specialties ?? coach.specialties,
        };
      })
    : fallbackCoaches.map((coach, index) => ({
        ...coach,
        name: page.coaches[index]?.name ?? coach.name,
        bio: page.coaches[index]?.bio ?? coach.bio,
        specialties: page.coaches[index]?.specialties ?? coach.specialties,
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

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {localizedCoaches.map((coach, index) => (
          <Reveal key={coach.name} delay={index * 0.08}>
            <article className="h-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <div className="h-56 rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(232,0,40,0.3),rgba(255,255,255,0.05),rgba(13,13,13,1))]" />
              <p className="mt-6 inline-block rounded bg-white px-2 py-0.5 text-sm tracking-[0.3em] text-[#E80028]">{coach.role}</p>
              <h2 className="mt-3 text-3xl font-black text-white">{coach.name}</h2>
              <p className="mt-5 text-base leading-8 text-white/80">{coach.bio}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {coach.specialties.map((specialty) => (
                  <span key={specialty} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80">
                    {page.specialtyOptions[specialty as keyof typeof page.specialtyOptions] ?? specialty}
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
    </div>
  );
}
