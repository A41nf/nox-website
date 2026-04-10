import { getCoaches } from "@/lib/queries";
import type { Coach } from "@/lib/types";
import { CoachesPage } from "@/src/components/pages/coaches-page";

export default async function Page() {
  let coaches: Coach[] = [];

  try {
    coaches = await getCoaches();
  } catch {
    coaches = [];
  }

  return <CoachesPage coaches={coaches} />;
}
