import { Calendar, Clock } from "lucide-react";

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

const weeklySchedule: DaySchedule[] = [
  {
    day: "السبت",
    dayEn: "Sat",
    slots: [
      { time: "06:00 – 08:00", label: "تدريب شخصي", type: "personal" },
      { time: "09:00 – 10:00", label: "مجموعات صغيرة", type: "group" },
      { time: "17:00 – 19:00", label: "تدريب شخصي", type: "personal" },
      { time: "19:30 – 20:30", label: "EMS", type: "ems" },
    ],
  },
  {
    day: "الأحد",
    dayEn: "Sun",
    slots: [
      { time: "06:00 – 08:00", label: "تدريب شخصي", type: "personal" },
      { time: "10:00 – 11:00", label: "EMS", type: "ems" },
      { time: "17:00 – 19:00", label: "تدريب شخصي", type: "personal" },
      { time: "19:30 – 20:30", label: "مجموعات صغيرة", type: "group" },
    ],
  },
  {
    day: "الاثنين",
    dayEn: "Mon",
    slots: [
      { time: "06:00 – 08:00", label: "تدريب شخصي", type: "personal" },
      { time: "09:00 – 10:00", label: "مجموعات صغيرة", type: "group" },
      { time: "17:00 – 19:00", label: "تدريب شخصي", type: "personal" },
      { time: "20:00 – 21:00", label: "EMS", type: "ems" },
    ],
  },
  {
    day: "الثلاثاء",
    dayEn: "Tue",
    slots: [
      { time: "06:00 – 08:00", label: "تدريب شخصي", type: "personal" },
      { time: "10:00 – 11:00", label: "EMS", type: "ems" },
      { time: "17:00 – 19:00", label: "تدريب شخصي", type: "personal" },
      { time: "19:30 – 20:30", label: "مجموعات صغيرة", type: "group" },
    ],
  },
  {
    day: "الأربعاء",
    dayEn: "Wed",
    slots: [
      { time: "06:00 – 08:00", label: "تدريب شخصي", type: "personal" },
      { time: "09:00 – 10:00", label: "مجموعات صغيرة", type: "group" },
      { time: "17:00 – 19:00", label: "تدريب شخصي", type: "personal" },
      { time: "20:00 – 21:00", label: "EMS", type: "ems" },
    ],
  },
  {
    day: "الخميس",
    dayEn: "Thu",
    slots: [
      { time: "06:00 – 08:00", label: "تدريب شخصي", type: "personal" },
      { time: "10:00 – 11:00", label: "EMS", type: "ems" },
      { time: "17:00 – 19:00", label: "تدريب شخصي", type: "personal" },
      { time: "19:30 – 20:30", label: "مجموعات صغيرة", type: "group" },
    ],
  },
  {
    day: "الجمعة",
    dayEn: "Fri",
    slots: [{ time: "–", label: "يوم راحة", type: "off" }],
  },
];

const slotColors: Record<ScheduleSlot["type"], string> = {
  personal: "bg-[#E80028]/15 border-[#E80028]/30 text-[#E80028]",
  group: "bg-white/10 border-white/20 text-white",
  ems: "bg-[#E80028]/8 border-[#E80028]/20 text-[#E80028]/80",
  off: "bg-white/[0.03] border-white/10 text-white/40",
};

const legend = [
  { label: "تدريب شخصي", type: "personal" as const },
  { label: "مجموعات صغيرة", type: "group" as const },
  { label: "EMS", type: "ems" as const },
];

export function SchedulePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="الجدول الأسبوعي"
          title="مواعيد التدريب"
          description="الجدول التقريبي للجلسات خلال الأسبوع. لتأكيد موعدك أو حجز مكانك في المجموعة، تواصل معنا مباشرة."
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
          * الأوقات تقريبية وقابلة للتغيير. تواصل معنا لتأكيد الجدول الحالي.
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
            <NoxButton href="/contact">تواصل معنا</NoxButton>
            <NoxButton href="/services" variant="secondary">
              استعرض الخدمات
            </NoxButton>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
