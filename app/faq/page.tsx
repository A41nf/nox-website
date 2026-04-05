import type { Metadata } from "next";
import FaqClient from "@/components/FaqClient";
import { getFaqItems } from "@/lib/queries";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about NOX personal training, EMS, pricing, nutrition, and getting started in Muscat.",
};

export default async function FaqPage() {
  const faqItems = await getFaqItems();

  return <FaqClient faqItems={faqItems} />;
}
