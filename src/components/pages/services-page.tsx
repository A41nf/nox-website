"use client";

import { services } from "@/src/data/site-content";
import { Reveal } from "@/src/components/ui/reveal";
import { SectionHeading } from "@/src/components/ui/section-heading";

export function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="الخدمات"
          title="خدمات متعددة. معيار واحد: نتائج فعلية"
          description="صممنا باقات NOX لتناسب أنماط حياة مختلفة، لكن من دون التنازل عن الجودة أو المتابعة أو هوية العلامة."
        />
      </Reveal>

      <div className="mt-14 space-y-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.id} delay={index * 0.06}>
              <section
                id={service.id}
                className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div>
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E80028]/15 text-[#E80028]">
                    <Icon size={24} />
                  </div>
                  <h2 className="mt-6 text-3xl font-black text-white">{service.title}</h2>
                  <p className="mt-3 text-base text-[#E80028]">{service.subtitle}</p>
                  <p className="mt-5 text-base leading-8 text-white/68">{service.description}</p>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/45 p-6">
                    <p className="text-sm font-bold tracking-[0.28em] text-white/45">المحتوى</p>
                    <div className="mt-5 space-y-3">
                      {service.bullets.map((bullet) => (
                        <div key={bullet} className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/72">
                          {bullet}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] border border-[#E80028]/25 bg-[linear-gradient(180deg,rgba(232,0,40,0.12),rgba(255,255,255,0.03))] p-6">
                    <p className="text-sm font-bold tracking-[0.28em] text-white/45">التفاصيل</p>
                    <div className="mt-5 space-y-5">
                      <div>
                        <p className="text-sm text-white/45">المدة</p>
                        <p className="mt-1 text-xl font-black text-white">{service.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-white/45">السعر</p>
                        <p className="mt-1 text-xl font-black text-white">{service.price}</p>
                      </div>
                      <p className="text-sm leading-7 text-white/65">
                        الأسعار والمحتوى إرشادية حالياً ويمكن استبدالها لاحقاً بمحتوى نهائي أو بيانات CMS.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
