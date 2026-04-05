import type { Metadata } from "next";
import { VacanciesPage } from "@/src/components/pages/vacancies-page";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore current vacancies and coaching opportunities at NOX.",
};

export default function CareersPage() {
  return <VacanciesPage />;
}
