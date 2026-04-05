"use client";

import { useMemo, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLocale } from "@/lib/i18n";
import { urlFor } from "@/lib/sanity";
import type { Coach } from "@/lib/types";

const fallbackCoaches: Coach[] = [
  {
    name: "Coach Adam",
    specialties: ["Strength", "Fat Loss"],
    bio: "Leads body recomposition and advanced strength development for professionals.",
    credentials: "NASM CPT, CSCS",
  },
  {
    name: "Coach Layla",
    specialties: ["EMS", "Rehab"],
    bio: "Integrates correctional training with EMS protocols for performance and pain-free movement.",
    credentials: "ACE CPT, EMS Specialist",
  },
  {
    name: "Coach Kareem",
    specialties: ["Conditioning", "Strength"],
    bio: "Builds athletic systems focused on power, speed, and work capacity.",
    credentials: "EXOS Performance Specialist",
  },
  {
    name: "Coach Noor",
    specialties: ["Fat Loss", "Conditioning"],
    bio: "Designs high-compliance transformation systems for sustainable fat loss.",
    credentials: "Precision Nutrition L1",
  },
];

type CoachesClientProps = {
  coaches?: Coach[] | null;
};

export default function CoachesClient({ coaches }: CoachesClientProps) {
  const { t, isArabic } = useLocale();
  const c = t.coaches;
  const [filter, setFilter] = useState("All");

  const coachData = coaches && coaches.length > 0 ? coaches : fallbackCoaches;

  const specialtyOptions = useMemo(() => {
    const specialties = new Set<string>();

    for (const coach of coachData) {
      for (const specialty of coach.specialties ?? []) {
        specialties.add(specialty);
      }
    }

    return ["All", ...specialties];
  }, [coachData]);

  const filtered = useMemo(() => {
    if (filter === "All") return coachData;
    return coachData.filter((coach) => (coach.specialties ?? []).includes(filter));
  }, [coachData, filter]);

  return (
    <section className={`mx-auto w-full max-w-7xl px-4 pt-10 md:px-8 ${isArabic ? "font-cairo" : ""}`}>
      <SectionHeader
        id="coaches-heading"
        label={c.label}
        title={c.title}
        description={c.description}
      />

      <div className="mt-8 flex flex-wrap gap-2" role="toolbar" aria-label={c.filterLabel}>
        {specialtyOptions.map((specialty) => (
          <button
            key={specialty}
            type="button"
            onClick={() => setFilter(specialty)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
              filter === specialty
                ? "border-nox-red bg-nox-red text-white"
                : "border-white/20 text-white/85 hover:border-nox-red/70"
            }`}
            aria-label={`${c.filterAriaLabel} ${specialty}`}
            aria-pressed={filter === specialty}
          >
            {specialty === "All"
              ? c.all
              : isArabic
                ? c.specialtyOptions[specialty as keyof typeof c.specialtyOptions] ?? specialty
                : specialty}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((coach, i) => (
          <article
            key={coach._id ?? `${coach.name}-${i}`}
            className="overflow-hidden rounded-2xl border border-white/10 bg-nox-grey/60"
          >
            <img
              src={coach.photo?.asset?._ref ? urlFor(coach.photo).width(600).height(400).url() : `https://picsum.photos/seed/nox-coach-${i + 1}/600/400`}
              alt={isArabic ? coach.nameAr ?? coach.name : coach.name}
              className="h-52 w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold">{isArabic ? coach.nameAr ?? coach.name : coach.name}</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {((isArabic ? coach.specialtiesAr ?? coach.specialties : coach.specialties) ?? []).map((specialty) => (
                  <span
                    key={specialty}
                    className="rounded-full border border-nox-red/70 bg-nox-red/20 px-3 py-1 text-xs font-medium uppercase tracking-wide text-nox-red"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-white/80">{isArabic ? coach.bioAr ?? coach.bio : coach.bio}</p>
              {coach.credentials ? (
                <p className="mt-3 text-xs uppercase tracking-[0.14em] text-white/80">{coach.credentials}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
