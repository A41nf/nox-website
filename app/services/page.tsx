import type { Metadata } from "next";
import ServicesClient from "@/components/ServicesClient";
import { getServices } from "@/lib/queries";
import type { Service } from "@/lib/types";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore NOX personal training, EMS, and group classes.",
};

export default async function ServicesPage() {
  let services: Service[] = [];

  try {
    services = await getServices();
  } catch (error) {
    console.error("Failed to fetch services from Sanity", error);
  }

  return <ServicesClient services={services} />;
}
