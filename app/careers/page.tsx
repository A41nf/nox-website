import type { Metadata } from "next";
import { VacanciesPage } from "@/src/components/pages/vacancies-page";
import { getCareerOpenings } from "@/lib/queries";
import type { CareerOpening } from "@/lib/types";
import { vacancies as fallbackVacancies } from "@/src/data/vacancies";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore current vacancies and coaching opportunities at NOX.",
};

export default async function CareersPage() {
  let careerOpenings: CareerOpening[] = fallbackVacancies;

  try {
    const cmsOpenings = await getCareerOpenings();
    if (Array.isArray(cmsOpenings) && cmsOpenings.length > 0) {
      careerOpenings = cmsOpenings;
    }
  } catch (error) {
    console.error("Failed to fetch career openings from Sanity", error);
  }

  return <VacanciesPage vacancies={careerOpenings} />;
}
