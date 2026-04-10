"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import type { FaqItem } from "@/lib/types";
import { useLocale } from "@/lib/i18n";
import { contactDetails } from "@/src/data/site-content";
import { NoxButton } from "@/src/components/ui/nox-button";
import { Reveal } from "@/src/components/ui/reveal";
import { SectionHeading } from "@/src/components/ui/section-heading";

export function FaqPage({ faqItems }: { faqItems?: FaqItem[] | null }) {
  const { t, isArabic } = useLocale();
  const page = t.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sanityFaqItems = faqItems ?? [];
  const hasSanityFaqItems = sanityFaqItems.length > 0;
  const items = hasSanityFaqItems
    ? sanityFaqItems.map((item) => ({
        question: isArabic ? item.questionAr ?? item.question : item.question,
        answer: isArabic ? item.answerAr ?? item.answer : item.answer,
      }))
    : page.questions.map((item) => ({
        question: item.question,
        answer: item.answer,
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

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <section className="rounded-[2rem] border border-[#E80028]/25 bg-[linear-gradient(180deg,rgba(232,0,40,0.14),rgba(255,255,255,0.03))] p-8">
            <p className="text-sm font-bold tracking-[0.3em] text-white/70">{page.label}</p>
            <h2 className="mt-5 text-3xl font-black text-white">{page.title}</h2>
            <p className="mt-5 text-base leading-8 text-white/80">
              {page.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <NoxButton href={contactDetails.whatsapp} target="_blank" rel="noreferrer">
                {t.contact.whatsapp}
              </NoxButton>
              <NoxButton href="/contact" variant="secondary">
                {t.contact.label}
              </NoxButton>
            </div>
          </section>
        </Reveal>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const Icon = isOpen ? Minus : Plus;

            return (
              <Reveal key={item.question} delay={index * 0.06}>
                <section className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.04]">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
                  >
                    <span className={`text-lg font-black ${isOpen ? "rounded bg-white px-2 py-0.5 text-[#E80028]" : "text-white"}`}>
                      {item.question}
                    </span>
                    <span
                      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition ${isOpen ? "border-[#E80028]/40 bg-[#E80028]/10 text-[#E80028]" : "border-white/10 bg-black/30 text-white"}`}
                    >
                      <Icon size={18} />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-base leading-8 text-white/75">{item.answer}</p>
                    </div>
                  </div>
                </section>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
