import { notFound } from "next/navigation";
import BlogPostClient from "@/components/BlogPostClient";
import { getBlogPost } from "@/lib/queries";
import type { BlogPost, PortableTextBlock } from "@/lib/types";

function createBlock(text: string): PortableTextBlock {
  return {
    _type: "block",
    children: [{ _type: "span", text }],
  };
}

function getFallbackPost(slug: string): BlogPost | null {
  if (slug !== "getting-started") {
    return null;
  }

  return {
    title: "Getting Started at NOX",
    titleAr: "كيف تبدأ في نوكس",
    excerpt: "A realistic guide to starting personal training at NOX in Muscat, from consultation to first results.",
    excerptAr: "دليل عملي لبدء التدريب الشخصي في نوكس بمسقط، من الاستشارة وحتى أولى النتائج.",
    category: "Training",
    publishedAt: "2026-04-04T00:00:00.000Z",
    slug: { current: "getting-started" },
    body: [
      createBlock("Starting at NOX is deliberately simple. We do not throw you into random sessions and hope motivation carries you. We assess, plan, coach, and track. That sequence is what makes the difference."),
      createBlock("Your first conversation is not a sales pitch. It is where we understand your goal, training history, injuries, work routine, and the patterns that have previously stopped you. In Muscat, many of our clients are balancing long workdays, family commitments, and irregular sleep. We build around reality, not fantasy."),
      createBlock("Before we push effort, we assess movement, posture, baseline conditioning, and body-composition markers. That gives us a starting point we can actually measure against. If you have pain history or recent rehab, we adjust exercise selection immediately rather than after something flares up."),
      createBlock("A good plan is not only effective on paper. It also has to fit your week. Some clients need three gym sessions and nutrition structure. Others benefit from combining private coaching with EMS or class-based conditioning. The best plan is the one you can repeat long enough to create visible change."),
      createBlock("The first visible changes usually come from consistency, not complexity. Better meal decisions, improved session attendance, stronger technique, and small habit corrections stack quickly. At NOX we review progress, adjust training load, and keep accountability tight so you do not drift."),
      createBlock("Expect soreness, structure, and a clear standard in your first month. You should also expect more energy, better awareness of your eating habits, and improved confidence with movement. Most clients begin to feel momentum inside the first two weeks."),
    ],
    bodyAr: [
      createBlock("البدء في نوكس مقصود أن يكون بسيطاً. نحن لا نرميك في جلسات عشوائية ثم ننتظر أن يحملك الحماس. نحن نقيم، نخطط، ندرب، ونتابع. هذا التسلسل هو ما يصنع الفرق."),
      createBlock("أول محادثة معك ليست عرض مبيعات. هي لحظة نفهم فيها هدفك، وتاريخك التدريبي، والإصابات، وروتين العمل، والأنماط التي كانت توقفك سابقاً. نبني خطتك على واقعك الحقيقي لا على تصور مثالي."),
      createBlock("قبل أن نرفع الشدة، نقيم الحركة، والوضعية، واللياقة الأساسية، ومؤشرات تكوين الجسم. هذا يعطينا نقطة بداية يمكن قياسها فعلاً. وإذا كان لديك تاريخ ألم أو إعادة تأهيل، نعدل اختيار التمارين مباشرة."),
      createBlock("الخطة الجيدة ليست فعالة على الورق فقط، بل يجب أن تناسب أسبوعك أيضاً. بعض العملاء يحتاجون ثلاث حصص مع تنظيم غذائي، وآخرون يستفيدون من دمج التدريب الخاص مع EMS أو الحصص الجماعية."),
      createBlock("أول التغييرات الواضحة تأتي من الاتساق لا من التعقيد. قرارات غذائية أفضل، والتزام أعلى بالجلسات، وتقنية أقوى، وتصحيحات صغيرة في العادات تتراكم بسرعة. في نوكس نراجع التقدم ونعدل الحمل التدريبي ونحافظ على المساءلة."),
      createBlock("في الشهر الأول توقّع بعض الألم العضلي، ونظاماً واضحاً، ومعياراً عالياً. وتوقّع أيضاً طاقة أفضل ووعياً أكبر بعادات الأكل وثقة أعلى في الحركة. معظم العملاء يشعرون بالزخم خلال أول أسبوعين."),
    ],
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;

  let post: BlogPost | null = null;

  try {
    post = await getBlogPost(slug);
  } catch (error) {
    console.error(`Failed to fetch blog post "${slug}" from Sanity`, error);
  }

  const resolvedPost = post ?? getFallbackPost(slug);

  if (!resolvedPost) {
    notFound();
  }

  return <BlogPostClient post={resolvedPost} />;
}
