import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book your NOX consultation and contact the studio.",
};

export default function ContactPage() {
  return <ContactClient />;
}
