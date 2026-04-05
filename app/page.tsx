import HomePageClient from "@/components/HomePageClient";
import { getFeaturedTestimonials, getSiteSettings } from "@/lib/queries";
import type { SiteSettings, Testimonial } from "@/lib/types";

export default async function HomePage() {
  let featuredTestimonials: Testimonial[] = [];
  let siteSettings: SiteSettings | null = null;

  const [testimonialsResult, siteSettingsResult] = await Promise.allSettled([
    getFeaturedTestimonials(),
    getSiteSettings(),
  ]);

  if (testimonialsResult.status === "fulfilled") {
    featuredTestimonials = testimonialsResult.value;
  } else {
    console.error("Failed to fetch featured testimonials for home page", testimonialsResult.reason);
  }

  if (siteSettingsResult.status === "fulfilled") {
    siteSettings = siteSettingsResult.value;
  } else {
    console.error("Failed to fetch site settings for home page", siteSettingsResult.reason);
  }

  return <HomePageClient featuredTestimonials={featuredTestimonials} siteSettings={siteSettings} />;
}
