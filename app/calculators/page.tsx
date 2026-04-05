import type { Metadata } from "next";
import CalculatorsClient from "@/components/CalculatorsClient";

export const metadata: Metadata = {
  title: "Calculators",
  description: "Use NOX calculators for BMI, calories, hydration, macros, and training frequency.",
};

export default function CalculatorsPage() {
  return <CalculatorsClient />;
}
