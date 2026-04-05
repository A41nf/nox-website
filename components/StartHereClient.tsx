"use client";

import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLocale } from "@/lib/i18n";

export default function StartHereClient() {
  const { t, isArabic } = useLocale();
  const s = t.startHere;

  return (
    <section className={`mx-auto w-full max-w-7xl px-4 pt-10 md:px-8 ${isArabic ? "font-cairo" : ""}`}>
      <SectionHeader label={s.label} title={s.title} description={s.description} />

      <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        {s.steps.map((step: { number: string; title: string; description: string }) => (
          <article key={step.number} className="rounded-2xl border border-white/10 bg-nox-grey/60 p-6">
            <p className="text-5xl font-black text-nox-red">{step.number}</p>
            <h2 className="mt-5 text-2xl font-bold text-white">{step.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75">{step.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-8 rounded-2xl border border-white/10 bg-black/40 p-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="text-2xl font-bold text-white">{s.quickAnswersTitle}</h2>
          <div className="mt-5 space-y-4">
            {s.quickAnswers.map((item: { question: string; answer: string }) => (
              <article key={item.question} className="rounded-2xl border border-white/10 bg-nox-grey/55 p-5">
                <p className="font-semibold text-white">{item.question}</p>
                <p className="mt-2 text-sm text-white/75">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-nox-red/25 bg-nox-grey/60 p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-nox-red">{s.ctaLabel}</p>
          <h3 className="mt-4 text-3xl font-black uppercase text-white">{s.ctaTitle}</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/75">{s.ctaDescription}</p>
          <Button href="/contact" className="mt-6" ariaLabel="Contact NOX">
            {s.bookNow}
          </Button>
        </div>
      </div>
    </section>
  );
}
