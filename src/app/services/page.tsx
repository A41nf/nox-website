import { getServices } from "@/lib/queries";
import type { Service } from "@/lib/types";
import { ServicesPage } from "@/src/components/pages/services-page";

export default async function Page() {
  let services: Service[] = [];

  try {
    services = await getServices();
  } catch {
    services = [];
  }

  return <ServicesPage services={services} />;
}
