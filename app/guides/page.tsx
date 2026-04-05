import type { Metadata } from "next";
import GuidesClient from "@/components/GuidesClient";
import { getGuides } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Guides",
  description: "Download NOX guides on training, nutrition, recovery, EMS, and goal setting.",
};

export default async function GuidesPage() {
  const guides = await getGuides();

  return <GuidesClient guides={guides} />;
}
