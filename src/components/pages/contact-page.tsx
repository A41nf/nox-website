"use client";

import { contactDetails, contactHighlights } from "@/src/data/site-content";
import { NoxButton } from "@/src/components/ui/nox-button";
import { Reveal } from "@/src/components/ui/reveal";
import { SectionHeading } from "@/src/components/ui/section-heading";

export function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="تواصل معنا"
          title="الخطوة الأولى تبدأ برسالة واضحة"
          description="شاركنا هدفك الحالي، وقتك المتاح، ونوع التدريب الذي تبحث عنه. سنقترح المسار المناسب ونرتب الموعد الأول."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-2xl font-black text-white">بيانات التواصل</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-white/72">
              <p>
                <span className="text-white">العنوان:</span> {contactDetails.address}
              </p>
              <p>
                <span className="text-white">الهاتف:</span> {contactDetails.phone}
              </p>
              <p>
                <span className="text-white">البريد:</span> {contactDetails.email}
              </p>
              <p>
                <span className="text-white">الأوقات:</span> {contactDetails.hours}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <NoxButton href={contactDetails.whatsapp} target="_blank" rel="noreferrer">
                واتساب
              </NoxButton>
              <NoxButton href={`mailto:${contactDetails.email}`} variant="secondary">
                بريد إلكتروني
              </NoxButton>
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.1}>
          <section className="rounded-[2rem] border border-[#E80028]/25 bg-[linear-gradient(180deg,rgba(232,0,40,0.12),rgba(255,255,255,0.03))] p-8">
            <h2 className="text-2xl font-black text-white">رسالة أولية مقترحة</h2>
            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/45 p-6 text-base leading-8 text-white/72">
              السلام عليكم، أرغب في بدء برنامج تدريب مع NOX. هدفي الحالي هو تحسين اللياقة/خسارة الدهون/بناء القوة، ووقتي المتاح هو 3 إلى 4 مرات أسبوعياً. أفضّل معرفة أنسب باقة وخطوة البداية.
            </div>
          </section>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {contactHighlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="rounded-[1.8rem] border border-white/10 bg-black/50 p-7">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E80028]/15 text-[#E80028]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-2xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-white/68">{item.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
