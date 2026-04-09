import type { Metadata } from "next";

import { GuidesPage } from "@/src/components/pages/guides-page";

export const metadata: Metadata = {
  title: "الأدلة التدريبية | NOX",
  description:
    "دلائل ومقالات عملية من فريق NOX مسقط حول التدريب الشخصي، التغذية، التعافي، وتكوين الجسم في سلطنة عُمان.",
};

export default function Page() {
  return <GuidesPage />;
}
