import type { Metadata } from "next";

import { TestimonialsPage } from "@/src/components/pages/testimonials-page";

export const metadata: Metadata = {
  title: "قصص نجاح العملاء | NOX",
  description:
    "اكتشف قصص نجاح عملاء NOX في مسقط — نتائج حقيقية من تدريب شخصي احترافي في سلطنة عُمان.",
};

export default function Page() {
  return <TestimonialsPage />;
}
