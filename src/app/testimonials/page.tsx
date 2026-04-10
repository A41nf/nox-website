import type { Metadata } from "next";

import { getTestimonials } from "@/lib/queries";
import type { Testimonial } from "@/lib/types";
import { TestimonialsPage } from "@/src/components/pages/testimonials-page";

export const metadata: Metadata = {
  title: "قصص نجاح العملاء | NOX",
  description:
    "اكتشف قصص نجاح عملاء NOX في مسقط — نتائج حقيقية من تدريب شخصي احترافي في سلطنة عُمان.",
};

export default async function Page() {
  let testimonials: Testimonial[] = [];

  try {
    testimonials = await getTestimonials();
  } catch {
    testimonials = [];
  }

  return <TestimonialsPage testimonials={testimonials} />;
}
