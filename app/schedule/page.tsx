import type { Metadata } from "next";
import ScheduleClient from "@/components/ScheduleClient";
import { getSchedule } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Schedule",
  description: "View the NOX weekly class schedule for Muscat, Oman.",
};

export default async function SchedulePage() {
  const schedule = await getSchedule();

  return <ScheduleClient schedule={schedule} />;
}
