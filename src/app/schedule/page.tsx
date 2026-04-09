import type { Metadata } from "next";

import { SchedulePage } from "@/src/components/pages/schedule-page";

export const metadata: Metadata = {
  title: "الجدول الأسبوعي | NOX",
  description:
    "مواعيد جلسات التدريب الأسبوعية في NOX مسقط — تدريب شخصي، EMS، ومجموعات صغيرة في سلطنة عُمان.",
};

export default function Page() {
  return <SchedulePage />;
}
