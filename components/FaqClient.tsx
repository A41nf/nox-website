"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLocale } from "@/lib/i18n";
import type { FaqItem } from "@/lib/types";

type FaqQuestion = {
  category: string;
  question: string;
  answer: string;
};

type FaqClientProps = {
  faqItems?: FaqItem[] | null;
};

export default function FaqClient({ faqItems }: FaqClientProps) {
  const { t, isArabic } = useLocale();
  const f = t.faq;

  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((current) => ({ ...current, [key]: !current[key] }));
  };

  const groups = useMemo(() => {
    const map: Record<string, FaqQuestion[]> = {};
    const questions = faqItems && faqItems.length > 0
      ? faqItems.map((item) => ({
          category: item.category,
          question: isArabic ? item.questionAr ?? item.question : item.question,
          answer: isArabic ? item.answerAr ?? item.answer : item.answer,
        }))
      : f.questions.map((question) => ({ ...question })) as FaqQuestion[];

    for (const q of questions) {
      if (!map[q.category]) map[q.category] = [];
      map[q.category].push(q);
    }
    return map;
  }, [f.questions, faqItems, isArabic]);

  return (
    <section className={`mx-auto w-full max-w-7xl px-4 pt-10 md:px-8 ${isArabic ? "font-cairo" : ""}`}>
      <SectionHeader label={f.label} title={f.title} description={f.description} />

      <div className="mt-10 space-y-8">
        {Object.entries(groups).map(([categoryKey, questions]) => (
          <div key={categoryKey}>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10" />
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-nox-red">
                {f.categories[categoryKey as keyof typeof f.categories] ?? categoryKey}
              </h2>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {questions.map((item) => {
                const key = `${categoryKey}-${item.question}`;
                const isOpen = !!openItems[key];

                return (
                  <article
                    key={key}
                    className="rounded-2xl border border-white/10 bg-nox-grey/65 p-5 shadow-[0_0_0_1px_rgba(232,0,40,0.08)]"
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(key)}
                      className="flex w-full items-start justify-between gap-4 text-start"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-semibold text-white">{item.question}</span>
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-nox-red/50 bg-nox-red/10 text-nox-red">
                        <ChevronDown
                          size={18}
                          className={isOpen ? "rotate-180 transition-transform" : "transition-transform"}
                        />
                      </span>
                    </button>

                    {isOpen ? (
                      <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-white/75">
                        {item.answer}
                      </p>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
