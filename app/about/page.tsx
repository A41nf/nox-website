import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";
import { getSiteSettings } from "@/lib/queries";
import type { SiteSettings } from "@/lib/types";

export const metadata: Metadata = {
  title: "About",
  description: "Learn the NOX story, values, and coaching standards.",
};

export default async function AboutPage() {
  let siteSettings: SiteSettings | null = null;

  try {
    siteSettings = await getSiteSettings();
  } catch (error) {
    console.error("Failed to fetch site settings for about page", error);
  }

  return <AboutClient siteSettings={siteSettings} />;
}
