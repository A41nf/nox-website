"use client";

import { useMemo, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLocale } from "@/lib/i18n";
import type { ScheduleClass } from "@/lib/types";

const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"] as const;
const timeSlots = ["6:00 AM", "8:00 AM", "10:00 AM", "5:00 PM", "7:00 PM", "9:00 PM"] as const;
const classTypes = ["All", "HIIT", "Strength", "Mobility", "EMS Circuit", "Boxing Conditioning"] as const;

const fallbackSchedule: ScheduleClass[] = [
  { day: "Saturday", time: "6:00 AM", classType: "Strength", coach: "Coach Rashid", location: "Al Khuwair Studio" },
  { day: "Saturday", time: "8:00 AM", classType: "HIIT", coach: "Coach Mariam", location: "Qurum Studio" },
  { day: "Saturday", time: "10:00 AM", classType: "Mobility", coach: "Coach Huda", location: "Al Khuwair Studio" },
  { day: "Saturday", time: "5:00 PM", classType: "EMS Circuit", coach: "Coach Yousuf", location: "Al Khuwair Studio" },
  { day: "Saturday", time: "7:00 PM", classType: "Boxing Conditioning", coach: "Coach Sami", location: "Madinat Sultan Qaboos" },
  { day: "Saturday", time: "9:00 PM", classType: "Strength", coach: "Coach Mariam", location: "Qurum Studio" },
  { day: "Sunday", time: "6:00 AM", classType: "HIIT", coach: "Coach Rashid", location: "Al Khuwair Studio" },
  { day: "Sunday", time: "8:00 AM", classType: "Strength", coach: "Coach Sami", location: "Madinat Sultan Qaboos" },
  { day: "Sunday", time: "10:00 AM", classType: "EMS Circuit", coach: "Coach Yousuf", location: "Al Khuwair Studio" },
  { day: "Sunday", time: "5:00 PM", classType: "Mobility", coach: "Coach Huda", location: "Qurum Studio" },
  { day: "Sunday", time: "7:00 PM", classType: "Strength", coach: "Coach Mariam", location: "Al Khuwair Studio" },
  { day: "Sunday", time: "9:00 PM", classType: "HIIT", coach: "Coach Rashid", location: "Qurum Studio" },
  { day: "Monday", time: "6:00 AM", classType: "Strength", coach: "Coach Sami", location: "Madinat Sultan Qaboos" },
  { day: "Monday", time: "8:00 AM", classType: "Mobility", coach: "Coach Huda", location: "Al Khuwair Studio" },
  { day: "Monday", time: "10:00 AM", classType: "EMS Circuit", coach: "Coach Yousuf", location: "Qurum Studio" },
  { day: "Monday", time: "5:00 PM", classType: "Boxing Conditioning", coach: "Coach Rashid", location: "Madinat Sultan Qaboos" },
  { day: "Monday", time: "7:00 PM", classType: "HIIT", coach: "Coach Mariam", location: "Al Khuwair Studio" },
  { day: "Monday", time: "9:00 PM", classType: "Strength", coach: "Coach Sami", location: "Qurum Studio" },
  { day: "Tuesday", time: "6:00 AM", classType: "HIIT", coach: "Coach Rashid", location: "Al Khuwair Studio" },
  { day: "Tuesday", time: "8:00 AM", classType: "Strength", coach: "Coach Mariam", location: "Qurum Studio" },
  { day: "Tuesday", time: "10:00 AM", classType: "Mobility", coach: "Coach Huda", location: "Al Khuwair Studio" },
  { day: "Tuesday", time: "5:00 PM", classType: "EMS Circuit", coach: "Coach Yousuf", location: "Qurum Studio" },
  { day: "Tuesday", time: "7:00 PM", classType: "Strength", coach: "Coach Sami", location: "Madinat Sultan Qaboos" },
  { day: "Tuesday", time: "9:00 PM", classType: "Boxing Conditioning", coach: "Coach Rashid", location: "Al Khuwair Studio" },
  { day: "Wednesday", time: "6:00 AM", classType: "Mobility", coach: "Coach Huda", location: "Al Khuwair Studio" },
  { day: "Wednesday", time: "8:00 AM", classType: "Strength", coach: "Coach Sami", location: "Madinat Sultan Qaboos" },
  { day: "Wednesday", time: "10:00 AM", classType: "EMS Circuit", coach: "Coach Yousuf", location: "Al Khuwair Studio" },
  { day: "Wednesday", time: "5:00 PM", classType: "HIIT", coach: "Coach Mariam", location: "Qurum Studio" },
  { day: "Wednesday", time: "7:00 PM", classType: "Boxing Conditioning", coach: "Coach Rashid", location: "Madinat Sultan Qaboos" },
  { day: "Wednesday", time: "9:00 PM", classType: "Strength", coach: "Coach Sami", location: "Al Khuwair Studio" },
  { day: "Thursday", time: "6:00 AM", classType: "Strength", coach: "Coach Mariam", location: "Qurum Studio" },
  { day: "Thursday", time: "8:00 AM", classType: "HIIT", coach: "Coach Rashid", location: "Al Khuwair Studio" },
  { day: "Thursday", time: "10:00 AM", classType: "Mobility", coach: "Coach Huda", location: "Madinat Sultan Qaboos" },
  { day: "Thursday", time: "5:00 PM", classType: "EMS Circuit", coach: "Coach Yousuf", location: "Al Khuwair Studio" },
  { day: "Thursday", time: "7:00 PM", classType: "Strength", coach: "Coach Sami", location: "Qurum Studio" },
  { day: "Thursday", time: "9:00 PM", classType: "Boxing Conditioning", coach: "Coach Rashid", location: "Al Khuwair Studio" },
] as const;

type ScheduleClientProps = {
  schedule?: ScheduleClass[] | null;
};

export default function ScheduleClient({ schedule }: ScheduleClientProps) {
  const { t, isArabic } = useLocale();
  const sc = t.schedule;

  const [selectedDay, setSelectedDay] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const scheduleData = schedule && schedule.length > 0 ? schedule : fallbackSchedule;

  const filteredSchedule = useMemo(
    () =>
      scheduleData.filter((session) => {
        const dayMatch = selectedDay === "All" || session.day === selectedDay;
        const typeMatch = selectedType === "All" || session.classType === selectedType;
        return dayMatch && typeMatch;
      }),
    [scheduleData, selectedDay, selectedType],
  );

  const translateDay = (day: string) =>
    isArabic ? (sc.days[day as keyof typeof sc.days] ?? day) : day;

  const translateClass = (cls: string) =>
    isArabic ? (sc.classTypes[cls as keyof typeof sc.classTypes] ?? cls) : cls;

  const displayClass = (session: ScheduleClass) =>
    isArabic ? session.classTypeAr ?? translateClass(session.classType) : session.classType;

  const allLabel = isArabic ? sc.all : "All";

  return (
    <section className={`mx-auto w-full max-w-7xl px-4 pt-10 md:px-8 ${isArabic ? "font-cairo" : ""}`}>
      <SectionHeader label={sc.label} title={sc.title} description={sc.description} />

      <div className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-nox-grey/55 p-5 lg:grid-cols-2">
        <FilterBar
          title={sc.filterByDay}
          options={[allLabel, ...days.map(translateDay)]}
          rawOptions={["All", ...days]}
          value={selectedDay}
          onChange={setSelectedDay}
        />
        <FilterBar
          title={sc.filterByClass}
          options={[allLabel, ...classTypes.slice(1).map(translateClass)]}
          rawOptions={[...classTypes]}
          value={selectedType}
          onChange={setSelectedType}
        />
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
        <table className="hidden min-w-full border-collapse md:table">
          <thead className="bg-black/60">
            <tr>
              <th className="px-4 py-4 text-start text-xs uppercase tracking-[0.18em] text-nox-red">
                {isArabic ? "اليوم" : "Day"}
              </th>
              {timeSlots.map((slot) => (
                <th key={slot} className="px-4 py-4 text-start text-xs uppercase tracking-[0.18em] text-white/80">
                  {slot}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days
              .filter((day) => selectedDay === "All" || day === selectedDay)
              .map((day) => (
                <tr key={day} className="border-t border-white/10 align-top">
                  <td className="px-4 py-4 text-sm font-semibold text-white">{translateDay(day)}</td>
                  {timeSlots.map((slot) => {
                    const session = filteredSchedule.find(
                      (item) => item.day === day && item.time === slot,
                    );

                    return (
                      <td key={`${day}-${slot}`} className="px-4 py-4">
                        {session ? (
                          <div className="min-w-[160px] rounded-2xl border border-nox-red/25 bg-nox-grey/75 p-3">
                            <p className="text-sm font-semibold text-white">{displayClass(session)}</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-nox-red">
                              {session.coach}
                            </p>
                            <p className="mt-2 text-xs text-white/70">{session.location}</p>
                          </div>
                        ) : (
                          <div className="rounded-2xl border border-white/5 bg-black/20 p-3 text-xs text-white/65">
                            {sc.noClass}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
          </tbody>
        </table>

        <div className="grid gap-4 p-4 md:hidden">
          {filteredSchedule.map((session) => (
            <article key={`${session.day}-${session.time}-${session.classType}`} className="rounded-2xl border border-white/10 bg-nox-grey/70 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-white">{displayClass(session)}</p>
                <span className="rounded-full border border-nox-red/60 bg-nox-red/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-nox-red">
                  {session.time}
                </span>
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.16em] text-white/75">{translateDay(session.day)}</p>
              <p className="mt-2 text-sm text-white/75">{session.coach}</p>
              <p className="text-sm text-white/75">{session.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilterBar({
  title,
  options,
  rawOptions,
  value,
  onChange,
}: {
  title: string;
  options: string[];
  rawOptions: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nox-red">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option, i) => {
          const raw = rawOptions[i] ?? option;
          return (
            <button
              key={raw}
              type="button"
              onClick={() => onChange(raw)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                value === raw
                  ? "border-nox-red bg-nox-red text-white"
                  : "border-white/15 text-white/75 hover:border-nox-red/60"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
