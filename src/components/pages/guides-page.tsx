"use client";

import { BookOpen, ChevronLeft } from "lucide-react";

import type { Guide } from "@/lib/types";
import { useLocale } from "@/lib/i18n";
import { NoxButton } from "@/src/components/ui/nox-button";
import { Reveal } from "@/src/components/ui/reveal";
import { SectionHeading } from "@/src/components/ui/section-heading";

type GuideCard = {
  title: string;
  description: string;
  category: string;
  readTime: string;
};

const guidesData: GuideCard[] = [
  {
    title: "كيف تبدأ رحلتك في التدريب الشخصي",
    description:
      "دليل عملي للمبتدئ: ما الذي تحتاج معرفته قبل الجلسة الأولى، وكيف تضع هدفاً واقعياً وقابلاً للقياس.",
    category: "للمبتدئين",
    readTime: "5 دقائق",
  },
  {
    title: "التغذية والتدريب: لماذا لا يعمل أحدهما بدون الآخر",
    description:
      "الحقائق الأساسية عن البروتين، الكربوهيدرات، والدهون، وكيف توائم بينها وبين برنامجك التدريبي في NOX.",
    category: "تغذية",
    readTime: "7 دقائق",
  },
  {
    title: "دليل خسارة الدهون بدون فقدان العضلة",
    description:
      "الفرق بين خسارة الوزن وخسارة الدهون، والاستراتيجية الصحيحة للحفاظ على الكتلة العضلية أثناء الحمية.",
    category: "تكوين الجسم",
    readTime: "8 دقائق",
  },
  {
    title: "متى تزيد الأوزان؟ مبدأ التحميل التدريجي",
    description:
      "تفسير بسيط لقاعدة التقدم في التدريب وكيف يستخدمها مدربو NOX لضمان نتائج مستمرة.",
    category: "قوة وأداء",
    readTime: "6 دقائق",
  },
  {
    title: "النوم والتعافي: العنصر الخفي في النتيجة",
    description:
      "ما يحدث لجسمك أثناء النوم، ولماذا تخسر عضلتك وتزيد دهونك حين لا تنام كفاية.",
    category: "تعافي",
    readTime: "5 دقائق",
  },
  {
    title: "EMS Training: هل هو مناسب لي؟",
    description:
      "شرح تقني مبسط لتقنية التحفيز العضلي الكهربائي، من يستفيد منها أكثر، ومتى تكون الخيار الأذكى.",
    category: "EMS",
    readTime: "5 دقائق",
  },
  {
    title: "التدريب بعد الإصابة: الطريق الآمن للعودة",
    description:
      "مراحل إعادة التأهيل، كيف تتدرب مع إصابة قديمة دون أن تعيد تفعيلها، ودور المدرب في هذه المرحلة.",
    category: "صحة وأداء",
    readTime: "9 دقائق",
  },
  {
    title: "الاشتراك الشهري مقابل الجلسات الفردية: أيهما أنسب؟",
    description:
      "مقارنة عملية بين نماذج الحجز في NOX ومتى يكون كل خيار منطقياً حسب أهدافك وجدولك.",
    category: "الخدمات",
    readTime: "4 دقائق",
  },
];

const categoryColors: Record<string, string> = {
  "للمبتدئين": "bg-[#E80028]/15 text-[#E80028]",
  "تغذية": "bg-white/10 text-white/80",
  "تكوين الجسم": "bg-[#E80028]/10 text-[#E80028]/80",
  "قوة وأداء": "bg-white/10 text-white/80",
  "تعافي": "bg-white/10 text-white/80",
  "EMS": "bg-[#E80028]/15 text-[#E80028]",
  "صحة وأداء": "bg-white/10 text-white/80",
  "الخدمات": "bg-white/10 text-white/80",
};

export function GuidesPage({ guides }: { guides?: Guide[] | null }) {
  const { isArabic } = useLocale();
  const sanityGuides = guides ?? [];
  const hasSanityGuides = sanityGuides.length > 0;
  const renderedGuides = hasSanityGuides
    ? guidesData.map((guide, index) => {
        const item = sanityGuides[index];

        return {
          ...guide,
          title: isArabic ? item?.titleAr ?? item?.title ?? guide.title : item?.title ?? guide.title,
          description:
            isArabic ? item?.descriptionAr ?? item?.description ?? guide.description : item?.description ?? guide.description,
          category: isArabic ? item?.categoryAr ?? item?.category ?? guide.category : item?.category ?? guide.category,
        };
      })
    : guidesData;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="الأدلة التدريبية"
          title="المعرفة هي أول خطوة في رحلتك"
          description="مقالات ودلائل عملية من فريق NOX تغطي التدريب، التغذية، التعافي، وكل ما تحتاج فهمه قبل وأثناء رحلتك."
          as="h1"
        />
      </Reveal>

      {/* Guides grid */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderedGuides.map((guide, index) => (
          <Reveal key={guide.title} delay={index * 0.06}>
            <article className="group flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition hover:border-[#E80028]/30 hover:bg-[#E80028]/5">
              <div className="mb-4 flex items-start justify-between gap-3">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${categoryColors[guide.category] ?? "bg-white/10 text-white/80"}`}
                >
                  {guide.category}
                </span>
                <BookOpen size={18} className="shrink-0 text-white/30" aria-hidden="true" />
              </div>

              <h2 className="text-base font-black leading-7 text-white">{guide.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-white/65">{guide.description}</p>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-xs text-white/40">{guide.readTime} قراءة</span>
                <ChevronLeft
                  size={16}
                  className="text-[#E80028]/60 transition group-hover:translate-x-[-4px]"
                  aria-hidden="true"
                />
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* CTA */}
      <Reveal delay={0.2}>
        <div className="mt-20 rounded-[2rem] border border-[#E80028]/25 bg-[linear-gradient(180deg,rgba(232,0,40,0.14),rgba(255,255,255,0.03))] p-10 text-center">
          <h2 className="text-2xl font-black text-white md:text-3xl">
            هل لديك سؤال محدد؟
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-white/75">
            فريق NOX جاهز للإجابة عبر واتساب أو من خلال صفحة التواصل مباشرة.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <NoxButton href="/faq">الأسئلة الشائعة</NoxButton>
            <NoxButton href="/contact" variant="secondary">
              تواصل معنا
            </NoxButton>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
