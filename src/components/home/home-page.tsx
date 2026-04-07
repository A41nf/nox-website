"use client";

import { ArrowUpLeft, PhoneCall } from "lucide-react";
import {
  aboutPillars,
  coaches,
  contactDetails,
  heroStats,
  services,
  testimonials,
  whyNox,
} from "@/src/data/site-content";
import { NoxButton } from "@/src/components/ui/nox-button";
import { Reveal } from "@/src/components/ui/reveal";
import { SectionHeading } from "@/src/components/ui/section-heading";

export function HomePage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutTeaser />
      <ServicesTeaser />
      <WhyNoxSection />
      <CoachesTeaser />
      <TestimonialsSection />
      <CtaSection />
      <ContactTeaser />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,0,40,0.24),transparent_34%),radial-gradient(circle_at_right,rgba(255,255,255,0.08),transparent_18%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_25%),linear-gradient(90deg,rgba(232,0,40,0.05)_1px,transparent_1px),linear-gradient(rgba(232,0,40,0.05)_1px,transparent_1px)] bg-[size:auto,72px_72px,72px_72px]" />
      <div className="mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl items-center gap-12 px-4 py-16 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <div>
            <p className="text-xs font-bold tracking-[0.4em] text-[#E80028]">NO EXCUSE PERSONAL TRAINING</p>
            <h1 className="mt-6 text-5xl font-black leading-[1.05] text-white md:text-7xl lg:text-[5.8rem]">
              تدريب خاص
              <span className="block text-[#E80028]">بشدة نخبوية</span>
              <span className="block text-white/82">ولغة عربية أولاً</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-white/80 md:text-xl">
              NOX يقدم تجربة تدريب شخصية بوتيك في مسقط: تركيز كامل، برامج واضحة، بيئة سوداء حادة، ونتائج لا تعتمد على الحماس المؤقت.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <NoxButton href="/contact">ابدأ رحلتك</NoxButton>
              <NoxButton href="/services" variant="secondary">
                استكشف الخدمات
              </NoxButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            <div className="rounded-[1.6rem] border border-[#E80028]/25 bg-[linear-gradient(180deg,rgba(232,0,40,0.12),rgba(255,255,255,0.02))] p-7">
              <p className="text-sm font-bold tracking-[0.28em] text-white/80">RAW / PREMIUM / INTENSE</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                    <p className="text-3xl font-black text-[#E80028]">{stat.value}</p>
                    <p className="mt-2 text-sm leading-7 text-white/80">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-black/50 p-5">
                <p className="text-sm text-white/80">
                  نخدم العملاء بالعربية افتراضياً، مع قابلية التوسع إلى الإنجليزية، الفرنسية، والهندية داخل نفس التجربة.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="عن NOX"
          title="استوديو تدريب يضع الانضباط في المقدمة"
          description="الفكرة بسيطة: بيئة خاصة، معايير مرتفعة، ومدربون يرفضون الحلول المريحة. نعمل مع عملاء يريدون تغييراً حقيقياً لا جدولاً مليئاً بالأعذار."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {aboutPillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 0.08}>
            <article className="h-full rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-sm font-bold tracking-[0.3em] text-[#E80028]">0{index + 1}</p>
              <h3 className="mt-5 text-2xl font-black text-white">{pillar.title}</h3>
              <p className="mt-4 text-base leading-8 text-white/80">{pillar.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServicesTeaser() {
  return (
    <section className="bg-white/[0.03] py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="الخدمات"
            title="تجارب تدريب مصممة حول الهدف والوقت ونمط الحياة"
            description="من التدريب الشخصي إلى EMS والجلسات الصغيرة، كل خدمة مبنية لتحريك العميل فعلاً من وضعه الحالي إلى نتيجة واضحة."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.slice(0, 4).map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={index * 0.08}>
                <article className="h-full rounded-[2rem] border border-white/10 bg-black/55 p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E80028]/15 text-[#E80028]">
                      <Icon size={22} />
                    </div>
                    <span className="text-sm text-white/75">{service.duration}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-black text-white">{service.title}</h3>
                  <p className="mt-3 text-sm text-[#E80028]">{service.subtitle}</p>
                  <p className="mt-5 text-base leading-8 text-white/80">{service.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.bullets.slice(0, 3).map((bullet) => (
                      <span key={bullet} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80">
                        {bullet}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyNoxSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="لماذا NOX"
          title="تفاصيل مدروسة. متابعة حقيقية. هوية واضحة."
          description="هذا ليس جيم جماهيري. NOX مبني ليشعر العميل أنه دخل مساحة حاسمة ومضبوطة، من أول خطوة إلى آخر تكرار."
        />
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {whyNox.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="grid gap-5 rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6 sm:grid-cols-[auto_1fr] sm:items-start">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E80028]/35 bg-[#E80028]/10 text-[#E80028]">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-8 text-white/80">{item.description}</p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function CoachesTeaser() {
  return (
    <section className="bg-white/[0.03] py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="المدربون"
            title="مدربون يعرفون متى يدفعونك ومتى يعدلون المسار"
            description="الفريق في NOX يجمع بين الشدة والوعي. كل مدرب لديه أسلوبه، لكن المعيار واحد: جودة عالية ومحاسبة فعلية."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {coaches.map((coach, index) => (
            <Reveal key={coach.name} delay={index * 0.08}>
              <article className="h-full rounded-[2rem] border border-white/10 bg-black/55 p-7">
                <p className="text-sm tracking-[0.3em] text-[#E80028]">{coach.role}</p>
                <h3 className="mt-4 text-2xl font-black text-white">{coach.name}</h3>
                <p className="mt-4 text-base leading-8 text-white/80">{coach.bio}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {coach.specialties.map((specialty) => (
                    <span key={specialty} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/80">
                      {specialty}
                    </span>
                  ))}
                </div>
                <p className="mt-6 border-r-2 border-[#E80028] pr-4 text-sm leading-7 text-white/80">
                  {coach.quote}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="آراء العملاء"
          title="شهادات قصيرة لكن واضحة"
          description="العملاء لا يعودون إلى NOX بسبب الوعود. يعودون لأن النظام يعمل، والمتابعة مستمرة، والتغيير ملموس."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.08}>
            <article className="h-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-lg leading-9 text-white/80">“{item.quote}”</p>
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                <div>
                  <p className="font-black text-white">{item.name}</p>
                  <p className="mt-1 text-sm text-[#E80028]">{item.result}</p>
                </div>
                <ArrowUpLeft className="text-white/75" size={18} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="px-4 py-10 md:px-8">
      <Reveal>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-[#E80028]/30 bg-[linear-gradient(135deg,rgba(232,0,40,0.24),rgba(13,13,13,1)_52%,rgba(255,255,255,0.03))] p-8 md:p-12">
          <p className="text-xs font-bold tracking-[0.36em] text-white/80">START NOW</p>
          <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">
            إذا أردت تجربة تدريب تشبه معاييرك لا الأعذار المحيطة بك، NOX جاهز.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
            ابدأ باستشارة تعريفية، شاركنا الهدف الحالي، وسنقترح المسار الأنسب حسب وقتك ومستوى التزامك.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <NoxButton href="/contact">احجز استشارة</NoxButton>
            <NoxButton href={contactDetails.whatsapp} target="_blank" rel="noreferrer" variant="secondary">
              واتساب مباشر
            </NoxButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ContactTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
      <Reveal>
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.35em] text-[#E80028]">CONTACT</p>
            <h2 className="mt-4 text-3xl font-black text-white">تواصل معنا وحدد موعدك الأول</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
              {contactDetails.address}، {contactDetails.hours}. يمكنك التواصل عبر الهاتف، البريد، أو واتساب.
            </p>
          </div>
          <a
            href={`tel:${contactDetails.phone}`}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-6 py-4 text-sm font-bold text-white transition hover:border-[#E80028]"
          >
            <PhoneCall size={18} className="text-[#E80028]" />
            {contactDetails.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
