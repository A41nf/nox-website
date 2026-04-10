import type { Metadata } from "next";

import { getGuides } from "@/lib/queries";
import type { Guide } from "@/lib/types";
import { GuidesPage } from "@/src/components/pages/guides-page";

export const metadata: Metadata = {
  title: "الأدلة التدريبية | NOX",
  description:
    "دلائل ومقالات عملية من فريق NOX مسقط حول التدريب الشخصي، التغذية، التعافي، وتكوين الجسم في سلطنة عُمان.",
};

export default async function Page() {
  let guides: Guide[] = [];

  try {
    guides = await getGuides();
  } catch {
    guides = [];
  }

  return <GuidesPage guides={guides} />;
}
