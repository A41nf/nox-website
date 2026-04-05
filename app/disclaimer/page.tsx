import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Health Disclaimer",
  description: "Health and fitness disclaimer for NOX Personal Training services and website content.",
};

const sections = [
  {
    title: "Not Medical Advice",
    body: "The information shared on this website, in guides, and during general coaching discussions is for educational and fitness purposes only. It should not be treated as medical advice.",
  },
  {
    title: "Consult a Doctor",
    body: "Before starting exercise, EMS training, weight-loss protocols, or nutrition changes, you should consult a qualified medical professional if you have any medical concerns, injuries, or pre-existing conditions.",
  },
  {
    title: "Results Vary",
    body: "Client outcomes differ based on attendance, nutrition, effort, sleep, recovery, stress, and medical status. NOX does not guarantee identical results for every individual.",
  },
];

export default function DisclaimerPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pt-10 md:px-8">
      <SectionHeader
        label="Legal"
        title="Health Disclaimer"
        description="Use this website and NOX training guidance with the understanding that exercise carries risk and personal results vary."
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
