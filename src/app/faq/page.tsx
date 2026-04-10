import type { Metadata } from "next";

import { getFaqItems } from "@/lib/queries";
import type { FaqItem } from "@/lib/types";
import { FaqPage } from "@/src/components/pages/faq-page";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة | NOX",
  description: "إجابات على أبرز الأسئلة حول التدريب الشخصي، الجلسات، الاشتراك، وطريقة البداية مع NOX في مسقط.",
};

export default async function Page() {
  let faqItems: FaqItem[] = [];

  try {
    faqItems = await getFaqItems();
  } catch {
    faqItems = [];
  }

  return <FaqPage faqItems={faqItems} />;
}
