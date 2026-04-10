import type { Metadata } from "next";

import { getSchedule } from "@/lib/queries";
import type { ScheduleClass } from "@/lib/types";
import { SchedulePage } from "@/src/components/pages/schedule-page";

export const metadata: Metadata = {
  title: "الجدول الأسبوعي | NOX",
  description:
    "مواعيد جلسات التدريب الأسبوعية في NOX مسقط — تدريب شخصي، EMS، ومجموعات صغيرة في سلطنة عُمان.",
};

export default async function Page() {
  let schedule: ScheduleClass[] = [];

  try {
    schedule = await getSchedule();
  } catch {
    schedule = [];
  }

  return <SchedulePage schedule={schedule} />;
}
