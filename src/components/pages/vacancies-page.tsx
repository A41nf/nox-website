"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { NoxButton } from "@/src/components/ui/nox-button";
import { Reveal } from "@/src/components/ui/reveal";
import { SectionHeading } from "@/src/components/ui/section-heading";
import type { CareerOpening } from "@/lib/types";

const filters = [
  { id: "all", label: "الكل" },
  { id: "full", label: "دوام كامل" },
  { id: "part", label: "دوام جزئي" },
] as const;

type FilterId = (typeof filters)[number]["id"];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

type VacanciesPageProps = {
  vacancies: CareerOpening[];
};

export function VacanciesPage({ vacancies }: VacanciesPageProps) {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const openVacancies = vacancies.filter((vacancy) => vacancy.isOpen !== false);
  const filteredVacancies =
    activeFilter === "all"
      ? openVacancies
      : openVacancies.filter((vacancy) => vacancy.type === activeFilter);

  const toggleCard = (id: string) => {
    setExpandedCards((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  return (
    <div dir="rtl" className="pb-16 md:pb-24">
      <section className="border-b border-white/10 bg-[linear-gradient(135deg,rgba(232,0,40,0.18),rgba(13,13,13,0.98),rgba(13,13,13,1))]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <Reveal>
            <div className="max-w-4xl text-right">
              <p className="text-xs font-bold tracking-[0.35em] text-[#E80028]">CAREERS</p>
              <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
                انضم إلى فريق NOX
              </h1>
              <div className="mt-6 h-1 w-24 rounded-full bg-[#E80028]" />
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                نبني في NOX ثقافة لياقة نخبوية تقوم على الانضباط، الحضور، والنتائج الحقيقية.
                إذا كنت ترى التدريب كمسؤولية يومية لا مجرد وظيفة، فهذه فرصتك.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="الوظائف المتاحة"
            title="أدوار واضحة داخل فريق يعمل بمعيار واحد"
            description="اختر الدور المناسب لك، واطلع على المتطلبات قبل التقديم مباشرة عبر واتساب."
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <div className="flex flex-wrap justify-end gap-3">
            {filters.map((filter) => {
              const active = filter.id === activeFilter;

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-full border px-5 py-3 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D] ${
                    active
                      ? "border-[#E80028] bg-[#E80028] text-white shadow-[0_18px_50px_rgba(232,0,40,0.24)]"
                      : "border-white/10 bg-white/5 text-white/80 hover:border-[#E80028] hover:text-white"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {filteredVacancies.length ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 grid gap-6 lg:grid-cols-2"
          >
            {filteredVacancies.map((vacancy) => {
              const expanded = expandedCards[vacancy.id];
              const badgeClass =
                vacancy.type === "full"
                  ? "bg-[#E80028] text-white"
                  : "bg-slate-700/70 text-slate-100";

              return (
                <motion.article
                  key={vacancy.id}
                  variants={cardVariants}
                  className="h-full rounded-[2rem] border border-white/10 border-t-[#E80028] border-t-4 bg-[#0D0D0D] p-7"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="text-right">
                      <h2 className="text-2xl font-black text-white md:text-3xl">{vacancy.title}</h2>
                      <p className="mt-2 text-sm tracking-[0.22em] text-white/80">{vacancy.titleEn}</p>
                    </div>
                    <span className={`rounded-full px-4 py-2 text-xs font-bold ${badgeClass}`}>
                      {vacancy.type === "full" ? "دوام كامل" : "دوام جزئي"}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center justify-end gap-2 text-sm text-white/80">
                    <span>{vacancy.location}</span>
                    <MapPin size={16} className="text-[#E80028]" />
                  </div>

                  <p className="mt-6 text-base leading-8 text-white/80">{vacancy.description}</p>

                  <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03]">
                    <button
                      type="button"
                      onClick={() => toggleCard(vacancy.id)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-sm font-bold text-white transition hover:text-[#E80028] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
                    >
                      <span>{expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</span>
                      <span>متطلبات الوظيفة</span>
                    </button>

                    <AnimatePresence initial={false}>
                      {expanded ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-3 px-5 pb-5 text-right text-sm leading-7 text-white/80">
                            {(vacancy.requirements ?? []).map((requirement) => (
                              <li key={requirement} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                                {requirement}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>

                  <NoxButton
                    href={`https://wa.me/${vacancy.whatsapp ?? "96812345678"}?text=${encodeURIComponent(
                      `أهلاً، أود التقدم لوظيفة: ${vacancy.title}`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 w-full"
                  >
                    التقديم عبر واتساب
                  </NoxButton>
                </motion.article>
              );
            })}
          </motion.div>
        ) : (
          <Reveal delay={0.12}>
            <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-14 text-center text-lg font-bold text-white/80">
              لا توجد وظائف متاحة حالياً
            </div>
          </Reveal>
        )}

        <Reveal delay={0.16} className="mt-12">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(232,0,40,0.16),rgba(255,255,255,0.04),rgba(13,13,13,1))] p-8 text-center">
            <p className="text-2xl font-black text-white md:text-3xl">
              لم تجد ما يناسبك؟ أرسل لنا سيرتك الذاتية
            </p>
            <p className="mt-4 text-base leading-8 text-white/80">
              إذا كنت مناسباً لأسلوب NOX، نرغب في التعرف عليك حتى لو لم تجد الدور المثالي الآن.
            </p>
            <NoxButton
              href={`https://wa.me/96812345678?text=${encodeURIComponent("أهلاً، أود إرسال سيرتي الذاتية إلى فريق NOX")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6"
            >
              أرسل سيرتك عبر واتساب
            </NoxButton>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
