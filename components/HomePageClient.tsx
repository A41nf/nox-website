"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  Brain,
  Dumbbell,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { FRESHA_URL, useLocale } from "@/lib/i18n";
import type { SiteSettings, Testimonial } from "@/lib/types";

const serviceIcons = [Dumbbell, Activity, Users];
const reasonIcons = [Brain, ShieldCheck, Sparkles, Target];

type HomePageClientProps = {
  featuredTestimonials?: Testimonial[] | null;
  siteSettings?: SiteSettings | null;
};

const fallbackSiteSettings: {
  address: string;
  addressAr: string;
  phone: string;
  hours: string;
  hoursAr: string;
  freshaUrl: string;
  whatsapp: string;
} = {
  address: "Muscat, Oman",
  addressAr: "مسقط، عُمان",
  phone: "+968 9361 1220",
  hours: "Sat - Thu: 6:00 AM - 11:00 PM",
  hoursAr: "السبت - الخميس: 6:00 صباحاً - 11:00 مساءً",
  freshaUrl: FRESHA_URL,
  whatsapp: "+96893611220",
};

function getWhatsAppUrl(value?: string | null) {
  const phone = (value ?? "").replace(/[^\d]/g, "");
  return phone ? `https://wa.me/${phone}` : "https://wa.me/96893611220";
}

export default function HomePageClient({ featuredTestimonials, siteSettings }: HomePageClientProps) {
  const { isArabic } = useLocale();
  const freshaUrl = siteSettings?.freshaUrl ?? fallbackSiteSettings.freshaUrl;

  return (
    <div className={isArabic ? "font-cairo" : ""}>
      <HeroSection freshaUrl={freshaUrl} />
      <StatsBar />

      <AnimatedSection className="mx-auto mt-24 w-full max-w-7xl px-4 md:px-8" preset="slideUp">
        <AboutPhilosophySection />
      </AnimatedSection>

      <ServicesSection />
      <WhyNoxSection />
      <CoachesSection />
      <TestimonialsSection testimonials={featuredTestimonials} />
      <CtaBanner freshaUrl={freshaUrl} />
      <ContactStrip siteSettings={siteSettings} />
      <FaqSection />
    </div>
  );
}

function AboutPhilosophySection() {
  const { t } = useLocale();
  const h = t.home;

  return (
    <section aria-labelledby="about-philosophy-heading" className="grid gap-10 md:grid-cols-2">
      <div>
        <SectionHeader
          id="about-philosophy-heading"
          label={h.philosophyLabel}
          title={h.philosophyTitle}
          description={h.philosophyDesc}
        />
      </div>
      <article className="rounded-2xl border border-nox-red/70 bg-nox-grey/60 p-8">
        <p className="text-lg leading-relaxed text-white/90">{h.philosophyBody}</p>
        <div className="mt-7 h-1 w-24 rounded bg-nox-red" aria-hidden />
      </article>
    </section>
  );
}

function HeroSection({ freshaUrl }: { freshaUrl: string }) {
  const { t, isArabic } = useLocale();

  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden px-4 md:px-8">
      <Image
        src="https://picsum.photos/seed/nox-gym-hero/1920/1080"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
        width={1200}
        height={800}
      />
      <div className="pointer-events-none absolute inset-0 bg-nox-black/70" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20" aria-hidden />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-[26rem] w-[26rem] rounded-full bg-nox-red/25 blur-[120px]" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block rounded bg-gradient-to-r from-nox-red to-red-700 px-1 py-0.5 text-xs uppercase tracking-[0.24em] text-white"
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12 }}
          className={`text-5xl font-black uppercase leading-[0.95] tracking-[0.12em] md:text-7xl lg:text-9xl ${isArabic ? "tracking-normal" : ""}`}
        >
          {isArabic ? t.hero.title : <>NO<span className="text-nox-red">EX</span>CUSE</>}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.22 }}
          className="mt-8 max-w-2xl text-lg text-white/80 md:text-2xl"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href={freshaUrl} target="_blank" rel="noopener noreferrer" size="lg" ariaLabel={t.cta.bookConsultation}>
            {t.cta.bookConsultation}
          </Button>
          <Button href="/services" size="lg" variant="secondary" ariaLabel={t.cta.exploreServices}>
            {t.cta.exploreServices}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function StatsBar() {
  const { t } = useLocale();
  const statValues = [
    { value: 500, suffix: "+" },
    { value: 10, suffix: "+" },
    { value: 3, suffix: "" },
    { value: 100, suffix: "%" },
  ];

  return (
    <section className="bg-nox-grey py-8" aria-label="NOX stats">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-6 px-4 md:grid-cols-4 md:px-8">
        {t.home.stats.map((stat: { label: string }, i: number) => (
          <article key={stat.label} className="text-center">
            <p className="inline-block rounded bg-gradient-to-r from-nox-red to-red-700 px-2 py-0.5 text-3xl font-black text-white md:text-4xl">
              <AnimatedCounter target={statValues[i].value} suffix={statValues[i].suffix} />
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/80 md:text-sm">
              {stat.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const durationMs = 1200;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function ServicesSection() {
  const { t } = useLocale();
  const h = t.home;

  return (
    <AnimatedSection className="mx-auto mt-24 w-full max-w-7xl px-4 md:px-8" preset="slideUp">
      <section aria-labelledby="services-heading">
        <SectionHeader id="services-heading" label={h.servicesLabel} title={h.servicesTitle} description={h.servicesDesc} />

        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {h.services.map((service: { title: string; description: string }, i: number) => {
            const Icon = serviceIcons[i % serviceIcons.length] ?? Dumbbell;
            return (
              <motion.article
                key={service.title}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="group rounded-2xl border border-white/10 border-t-nox-red bg-nox-grey/55 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-nox-red/70 hover:shadow-[0_0_30px_rgba(232,0,40,0.25)]"
              >
                <Icon className="text-nox-red" aria-hidden />
                <h3 className="mt-5 text-2xl font-bold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/80">{service.description}</p>
                <a href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-nox-red" aria-label={`${h.learnMore} ${service.title}`}>
                  {h.learnMore} <ArrowRight size={16} aria-hidden />
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </section>
    </AnimatedSection>
  );
}

function WhyNoxSection() {
  const { t } = useLocale();
  const h = t.home;

  return (
    <AnimatedSection className="mt-24 bg-nox-grey/35 py-20" preset="fadeIn">
      <section className="mx-auto w-full max-w-7xl px-4 md:px-8" aria-labelledby="why-nox-heading">
        <SectionHeader id="why-nox-heading" label={h.whyLabel} title={h.whyTitle} description={h.whyDesc} />

        <div className="mt-12 space-y-5">
          {h.reasons.map((reason: { title: string; description: string }, index: number) => {
            const Icon = reasonIcons[index];
            return (
              <article key={reason.title} className="grid gap-4 rounded-xl border border-white/10 bg-black/55 p-5 md:grid-cols-[auto_1fr] md:items-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-nox-red/70 bg-nox-red/15 text-nox-red">
                  <Icon size={20} aria-hidden />
                </div>
                <div>
                  <p className="inline-block rounded bg-gradient-to-r from-nox-red to-red-700 px-1 py-0.5 text-xs uppercase tracking-[0.2em] text-white">0{index + 1}</p>
                  <h3 className="mt-1 text-xl font-bold">{reason.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{reason.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </AnimatedSection>
  );
}

function CoachesSection() {
  const { t } = useLocale();
  const h = t.home;

  return (
    <AnimatedSection className="mx-auto mt-24 w-full max-w-7xl px-4 md:px-8" preset="slideUp">
      <section aria-labelledby="coaches-preview-heading">
        <SectionHeader id="coaches-preview-heading" label={h.teamLabel} title={h.teamTitle} description={h.teamDesc} />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {h.coaches.map((coach: { name: string; specialties: readonly string[]; bio: string }, i: number) => (
            <article key={coach.name} className="overflow-hidden rounded-2xl border border-white/10 bg-nox-grey/60">
              <Image
                src={`https://picsum.photos/seed/nox-coach-${i + 1}/600/400`}
                alt={coach.name}
                className="h-44 w-full object-cover"
                width={400}
                height={400}
                unoptimized
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{coach.name}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {coach.specialties.map((tag) => (
                    <span key={tag} className="rounded-full bg-gradient-to-r from-nox-red to-red-700 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-white/80">{coach.bio}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/coaches" variant="secondary" ariaLabel={h.viewAllCoaches}>
            {h.viewAllCoaches}
          </Button>
        </div>
      </section>
    </AnimatedSection>
  );
}

function TestimonialsSection({ testimonials }: { testimonials?: Testimonial[] | null }) {
  const { t, isArabic } = useLocale();
  const h = t.home;
  const testimonialData = testimonials && testimonials.length > 0
    ? testimonials.map((testimonial) => ({
        quote: isArabic ? testimonial.quoteAr ?? testimonial.quote : testimonial.quote,
        name: testimonial.name,
        result: isArabic ? testimonial.resultAr ?? testimonial.result : testimonial.result,
      }))
    : h.testimonials.map((testimonial) => ({ ...testimonial }));

  return (
    <AnimatedSection className="mt-24 bg-nox-grey/30 py-20" preset="fadeIn">
      <section className="mx-auto w-full max-w-7xl px-4 md:px-8" aria-labelledby="testimonials-heading">
        <SectionHeader id="testimonials-heading" label={h.testimonialsLabel} title={h.testimonialsTitle} description={h.testimonialsDesc} />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <article key={testimonial.name} className="rounded-2xl border border-white/10 bg-black/60 p-6">
              <p className="text-4xl font-black leading-none text-nox-red" aria-hidden>&quot;</p>
              <p className="mt-3 text-sm leading-relaxed text-white/85">{testimonial.quote}</p>
              <p className="mt-5 text-base font-semibold">{testimonial.name}</p>
              <p className="inline-block rounded bg-gradient-to-r from-nox-red to-red-700 px-1 py-0.5 text-xs uppercase tracking-[0.15em] text-white">{testimonial.result}</p>
            </article>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}

function CtaBanner({ freshaUrl }: { freshaUrl: string }) {
  const { t } = useLocale();
  const h = t.home;

  return (
    <section className="mt-24 bg-nox-red py-16 text-black">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-8">
        <h2 className="text-3xl font-black uppercase leading-tight text-white md:text-5xl">
          {h.ctaBannerTitle}
        </h2>
        <Button href={freshaUrl} target="_blank" rel="noopener noreferrer" variant="ghost" className="bg-white text-black hover:bg-nox-light" ariaLabel={t.cta.bookConsultation}>
          {t.cta.bookConsultation}
        </Button>
      </div>
    </section>
  );
}

function ContactStrip({ siteSettings }: { siteSettings?: SiteSettings | null }) {
  const { t, isArabic } = useLocale();
  const h = t.home;
  const settings = {
    ...fallbackSiteSettings,
    ...siteSettings,
  };
  const address = isArabic ? settings.addressAr ?? settings.address : settings.address;
  const hours = isArabic ? settings.hoursAr ?? settings.hours : settings.hours;
  const whatsapp = siteSettings?.whatsapp ?? settings.whatsapp ?? settings.phone;

  return (
    <section className="bg-black py-10">
      <div className="mx-auto grid w-full max-w-7xl gap-5 px-4 md:grid-cols-4 md:items-center md:px-8">
        <div>
          <p className="inline-block rounded bg-gradient-to-r from-nox-red to-red-700 px-1 py-0.5 text-xs uppercase tracking-[0.16em] text-white">{h.addressLabel}</p>
          <p className="mt-1 text-sm text-white/85">{address}</p>
        </div>
        <div>
          <p className="inline-block rounded bg-gradient-to-r from-nox-red to-red-700 px-1 py-0.5 text-xs uppercase tracking-[0.16em] text-white">{h.phoneLabel}</p>
          <a href={`tel:${settings.phone}`} className="mt-1 inline-block text-sm text-white/85">{settings.phone}</a>
        </div>
        <div>
          <p className="inline-block rounded bg-gradient-to-r from-nox-red to-red-700 px-1 py-0.5 text-xs uppercase tracking-[0.16em] text-white">{h.hoursLabel}</p>
          <p className="mt-1 text-sm text-white/85">{hours}</p>
        </div>
        <Button href={getWhatsAppUrl(whatsapp)} target="_blank" rel="noopener noreferrer" className="justify-center">
          {h.whatsapp}
        </Button>
      </div>
    </section>
  );
}

function FaqSection() {
  const { t } = useLocale();
  const h = t.home;

  return (
    <AnimatedSection id="faq" className="mx-auto mt-20 w-full max-w-7xl px-4 md:px-8" preset="slideUp">
      <section aria-labelledby="faq-heading">
        <SectionHeader id="faq-heading" label={h.faqLabel} title={h.faqTitle} description={h.faqDesc} />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {h.faqItems.map((item: { question: string; answer: string }) => (
            <article key={item.question} className="rounded-xl border border-white/10 bg-nox-grey/50 p-5">
              <h3 className="text-base font-semibold">{item.question}</h3>
              <p className="mt-2 text-sm text-white/80">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
