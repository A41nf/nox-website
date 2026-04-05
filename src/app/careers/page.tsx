import type { Metadata } from "next";
import { VacanciesPage } from "@/src/components/pages/vacancies-page";

export const metadata: Metadata = {
  title: "الوظائف | NOX",
};

export default function Page() {
  return <VacanciesPage />;
}
