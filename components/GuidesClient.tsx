"use client";

import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLocale } from "@/lib/i18n";
import type { Guide } from "@/lib/types";

type FallbackGuide = {
  title: string;
  description: string;
  category: string;
};

type GuidesClientProps = {
  guides?: Guide[] | null;
};

export default function GuidesClient({ guides }: GuidesClientProps) {
  const { t, isArabic } = useLocale();
  const g = t.guides;
  const guideData = guides && guides.length > 0
    ? guides.map((guide) => ({
        title: isArabic ? guide.titleAr ?? guide.title : guide.title,
        description: isArabic ? guide.descriptionAr ?? guide.description : guide.description,
        category: isArabic ? guide.categoryAr ?? guide.category : guide.category,
      }))
    : g.guides.map((guide) => ({ ...guide })) as FallbackGuide[];

  return (
    <section className={`mx-auto w-full max-w-7xl px-4 pt-10 md:px-8 ${isArabic ? "font-cairo" : ""}`}>
      <SectionHeader label={g.label} title={g.title} description={g.description} as="h1" />

      <div className="mt-8 rounded-2xl border border-dashed border-white/20 bg-black/35 p-5 text-sm text-white/75">
        {g.emailNote}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {guideData.map((guide) => (
          <article key={guide.title} className="rounded-2xl border border-white/10 bg-nox-grey/60 p-6">
            <span className="rounded-full border border-nox-red/60 bg-nox-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-nox-red">
              {guide.category}
            </span>
            <h2 className="mt-5 text-2xl font-bold text-white">{guide.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75">{guide.description}</p>
            <Button href="#" className="mt-6" ariaLabel={`${g.download} ${guide.title}`}>
              {g.download}
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}
