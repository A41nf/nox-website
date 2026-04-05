import type { Metadata } from "next";
import CoachesClient from "@/components/CoachesClient";
import { getCoaches } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Coaches",
  description: "Meet NOX coaches and their specialties.",
};

export default async function CoachesPage() {
  const coaches = await getCoaches();

  return <CoachesClient coaches={coaches} />;
}
