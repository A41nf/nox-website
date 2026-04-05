import type { Metadata } from "next";
import StartHereClient from "@/components/StartHereClient";

export const metadata: Metadata = {
  title: "Start Here",
  description: "See how the NOX onboarding flow works before your first session.",
};

export default function StartHerePage() {
  return <StartHereClient />;
}
