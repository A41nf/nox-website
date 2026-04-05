"use client";

import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLocale } from "@/lib/i18n";

export default function ContactClient() {
  const { t, isArabic } = useLocale();
  const c = t.contact;

  return (
    <section className={`mx-auto w-full max-w-7xl px-4 pt-10 md:px-8 ${isArabic ? "font-cairo" : ""}`}>
      <SectionHeader label={c.label} title={c.title} description={c.description} />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <form className="rounded-2xl border border-white/10 bg-nox-grey/55 p-6 md:p-8" aria-label={c.contactFormAria}>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField id="name" label={c.name} type="text" placeholder={c.namePlaceholder} />
            <FormField id="email" label={c.email} type="email" placeholder={c.emailPlaceholder} />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <FormField id="phone" label={c.phone} type="tel" placeholder={c.phonePlaceholder} />
            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium text-white/90">
                {c.serviceInterest}
              </label>
              <select
                id="service"
                name="service"
                className="h-11 w-full rounded-lg border border-white/20 bg-black/40 px-3 text-sm text-white outline-none focus:border-nox-red"
              >
                {c.serviceOptions.map((opt: { value: string; label: string }) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-white/90">
              {c.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder={c.messagePlaceholder}
              className="w-full rounded-lg border border-white/20 bg-black/40 p-3 text-sm text-white outline-none focus:border-nox-red"
            />
          </div>

          <Button className="mt-6 w-full" ariaLabel={c.submitAria}>
            {c.send}
          </Button>
        </form>

        <div className="space-y-6">
          <article className="rounded-2xl border border-white/10 bg-nox-grey/55 p-6 md:p-8">
            <h2 className="text-2xl font-bold">{c.studioInfo}</h2>
            <ul className="mt-5 space-y-4 text-sm text-white/85">
              <li className="flex gap-3">
                <MapPin className="text-nox-red" size={18} aria-hidden />
                <span>{c.addressValue}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-nox-red" size={18} aria-hidden />
                <a href="tel:+96893611220">+968 9361 1220</a>
              </li>
              <li className="flex gap-3">
                <Clock3 className="text-nox-red" size={18} aria-hidden />
                <span>{c.hoursValue}</span>
              </li>
            </ul>

            <Button
              href="https://wa.me/96893611220"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full"
              ariaLabel={c.whatsappAria}
            >
              <MessageCircle size={16} aria-hidden />
              <span className="ml-2">{c.whatsapp}</span>
            </Button>
          </article>

          <article
            className="rounded-2xl border border-dashed border-white/20 bg-black/40 p-6 text-sm text-white/75"
            aria-label={c.mapAria}
          >
            <h3 className="text-base font-semibold text-white">{c.map}</h3>
            <div className="mt-4 flex h-48 items-center justify-center rounded-xl bg-linear-to-br from-black via-nox-grey to-nox-red/20 text-center text-xs uppercase tracking-[0.2em] text-white/75">
              {c.mapPlaceholder}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function FormField({ id, label, type, placeholder }: { id: string; label: string; type: string; placeholder: string }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-white/90">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="h-11 w-full rounded-lg border border-white/20 bg-black/40 px-3 text-sm text-white outline-none focus:border-nox-red"
      />
    </div>
  );
}
