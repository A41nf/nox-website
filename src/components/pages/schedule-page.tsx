"use client";

import { Calendar, Clock } from "lucide-react";

import type { ScheduleClass } from "@/lib/types";
import { FRESHA_URL, useLocale } from "@/lib/i18n";
import { NoxButton } from "@/src/components/ui/nox-button";
import { Reveal } from "@/src/components/ui/reveal";
import { SectionHeading } from "@/src/components/ui/section-heading";

type ScheduleSlot = {
  time: string;
  label: string;
  type: "personal" | "group" | "ems" | "off";
};

type DaySchedule = {
  day: string;
  dayEn: string;
  slots: ScheduleSlot[];
};

const slotColors: Record<ScheduleSlot["type"], string> = {
  personal: "bg-[#E80028]/15 border-[#E80028]/30 text-[#E80028]",
  group: "bg-white/10 border-white/20 text-white",
  ems: "bg-[#E80028]/8 border-[#E80028]/20 text-[#E80028]/80",
  off: "bg-white/[0.03] border-white/10 text-white/40",
};

export function SchedulePage({ schedule }: { schedule?: ScheduleClass[] | null }) {
  const { t, isArabic } = useLocale();
  const page = t.schedule;
  const sanitySchedule = schedule ?? [];
  const hasSanitySchedule = sanitySchedule.length > 0;
  const dayOrder = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"] as const;
  const dayAbbreviations: Record<string, string> = {
    Saturday: "Sat",
    Sunday: "Sun",
    Monday: "Mon",
    Tuesday: "Tue",
    Wednesday: "Wed",
    Thursday: "Thu",
  };
  const classTypeMap: Record<string, ScheduleSlot["type"]> = {
    Strength: "personal",
    HIIT: "group",
    Mobility: "group",
    "EMS Circuit": "ems",
    "Boxing Conditioning": "group",
  };
  const legend = [
    { label: page.classTypes.Strength, type: "personal" as const },
    { label: page.classTypes.HIIT, type: "group" as const },
    { label: page.classTypes["EMS Circuit"], type: "ems" as const },
  ];
  const sessions = hasSanitySchedule
    ? sanitySchedule.map((session) => ({
        ...session,
        label: isArabic ? session.classTypeAr ?? session.classType : session.classType,
      }))
    : page.sessions.map((session) => ({
        ...session,
        label: page.classTypes[session.classType as keyof typeof page.classTypes] ?? session.classType,
      }));
  const weeklySchedule: DaySchedule[] = dayOrder.map((dayKey) => ({
    day: page.days[dayKey],
    dayEn: dayAbbreviations[dayKey],
    slots: sessions
      .filter((session) => session.day === dayKey)
      .map((session) => {
        return {
          time: session.time,
          label: session.label,
          type: classTypeMap[session.classType] ?? "group",
        };
      }),
  }));

  return (
    <div dir={isArabic ? "rtl" : "ltr"} className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow={page.label}
          title={page.title}
          description={page.description}
          as="h1"
        />
      </Reveal>

      {/* Legend */}
      <Reveal delay={0.05}>
        <div className="mt-10 flex flex-wrap gap-3">
          {legend.map((item) => (
            <span
              key={item.label}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold ${slotColors[item.type]}`}
            >
              {item.label}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Schedule grid */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        {weeklySchedule.map((day, di) => (
          <Reveal key={day.day} delay={di * 0.05}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-4 flex items-center gap-2">
                <Calendar size={16} className="text-[#E80028]/70" aria-hidden="true" />
                <div>
                  <p className="text-sm font-black text-white">{day.day}</p>
                  <p className="text-xs text-white/40">{day.dayEn}</p>
                </div>
              </div>
              <div className="space-y-2">
                {day.slots.map((slot) => (
                  <div
                    key={slot.time}
                    className={`rounded-xl border px-3 py-2 ${slotColors[slot.type]}`}
                  >
                    <p className="text-xs font-semibold">{slot.label}</p>
                    {slot.type !== "off" && (
                      <p className="mt-0.5 flex items-center gap-1 text-[10px] opacity-70">
                        <Clock size={10} aria-hidden="true" />
                        {slot.time}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Note */}
      <Reveal delay={0.15}>
        <p className="mt-8 text-center text-sm text-white/50">
          * {page.description}
        </p>
      </Reveal>

      {/* CTA */}
      <Reveal delay={0.2}>
        <div className="mt-16 rounded-[2rem] border border-[#E80028]/25 bg-[linear-gradient(180deg,rgba(232,0,40,0.14),rgba(255,255,255,0.03))] p-10 text-center">
          <h2 className="text-2xl font-black text-white md:text-3xl">
            احجز موعدك الآن
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-white/75">
            اختر الوقت المناسب لك ودعنا نرتب جلستك الأولى مع أحد مدربي NOX.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <NoxButton href={FRESHA_URL} target="_blank" rel="noopener noreferrer">{t.contact.label}</NoxButton>
            <NoxButton href="/services" variant="secondary">
              {t.services.label}
            </NoxButton>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
