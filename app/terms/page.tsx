import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for NOX Personal Training memberships and services in Oman.",
};

const sections = [
  {
    title: "Membership and Session Use",
    body: "Packages and memberships are valid only for the period stated at purchase. Unused sessions may expire unless otherwise agreed in writing by NOX.",
  },
  {
    title: "Cancellations and Rescheduling",
    body: "Clients should provide at least 12 hours notice to reschedule a booked session. Late cancellations or no-shows may be treated as used sessions.",
  },
  {
    title: "Payments",
    body: "All prices are quoted in Omani Rial unless stated otherwise. Payment schedules, package durations, and promotional terms are confirmed at the time of purchase.",
  },
  {
    title: "Liability and Assumption of Risk",
    body: "Participation in personal training, EMS sessions, group classes, and conditioning work carries physical risk. Clients are responsible for disclosing injuries, medical conditions, and any limitations before training.",
  },
  {
    title: "Code of Conduct",
    body: "Clients are expected to respect coaches, staff, equipment, and studio rules. Harassment, unsafe conduct, or repeated disruption may lead to suspension or cancellation of services.",
  },
];

export default function TermsPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pt-10 md:px-8">
      <SectionHeader
        label="Legal"
        title="Terms & Conditions"
        description="These terms govern the use of NOX services, bookings, memberships, and in-studio behavior."
      />

      <div className="mt-10 space-y-5">
        {sections.map((section) => (
          <article key={section.title} className="rounded-2xl border border-white/10 bg-nox-grey/55 p-6">
            <h2 className="text-2xl font-bold text-white">{section.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75">{section.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
