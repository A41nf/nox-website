import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for NOX Personal Training in Muscat, Oman.",
};

const sections = [
  {
    title: "Information We Collect",
    body: "We may collect personal information including your name, phone number, email address, health and training history, booking details, and communication records when you contact NOX, book sessions, or complete assessment forms.",
  },
  {
    title: "How We Use Information",
    body: "Your information is used to manage bookings, deliver coaching services, respond to inquiries, personalize training plans, process payments, and improve client experience and studio operations.",
  },
  {
    title: "Cookies and Analytics",
    body: "Our website may use cookies or similar tools to understand traffic, improve performance, and support a smoother browsing experience. You can manage cookie preferences through your browser settings.",
  },
  {
    title: "Third-Party Services",
    body: "We may rely on third-party tools such as booking platforms, messaging applications, analytics providers, and payment services. These providers process data according to their own privacy terms.",
  },
  {
    title: "Your Rights",
    body: "You may request access to your personal information, ask for corrections, or request deletion where legally permitted in Oman. To make a request, contact us using the details on our contact page.",
  },
];

export default function PrivacyPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pt-10 md:px-8">
      <SectionHeader
        label="Legal"
        title="Privacy Policy"
        description="This policy explains how NOX Personal Training collects, uses, and protects information related to studio and website visitors in Oman."
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
