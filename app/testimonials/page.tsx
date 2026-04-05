import type { Metadata } from "next";
import TestimonialsClient from "@/components/TestimonialsClient";
import { getTestimonials } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read detailed NOX client testimonials and transformation outcomes from Muscat.",
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return <TestimonialsClient testimonials={testimonials} />;
}
