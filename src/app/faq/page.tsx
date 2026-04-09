import type { Metadata } from "next";

import { FaqPage } from "@/src/components/pages/faq-page";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة | NOX",
  description: "إجابات على أبرز الأسئلة حول التدريب الشخصي، الجلسات، الاشتراك، وطريقة البداية مع NOX في مسقط.",
};

export default function Page() {
  return <FaqPage />;
}
