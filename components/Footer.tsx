import Link from "next/link";
import { Camera, Ghost, Music2 } from "lucide-react";

const servicesLinks = [
  { href: "/services#personal-training", label: "Personal Training" },
  { href: "/services#ems-training", label: "EMS Training" },
  { href: "/services#group-classes", label: "Group Classes" },
];

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About NOX" },
  { href: "/careers", label: "Careers" },
  { href: "/start-here", label: "Start Here" },
];

const resourceLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/guides", label: "Guides" },
  { href: "/calculators", label: "Calculators" },
  { href: "/schedule", label: "Schedule" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram", icon: Camera },
  { href: "https://www.tiktok.com", label: "TikTok", icon: Music2 },
  { href: "https://www.snapchat.com", label: "Snapchat", icon: Ghost },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-black text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <Link href="/" className="inline-flex flex-col">
            <span className="text-3xl font-black tracking-[0.24em]">
              NO<span className="text-nox-red">X</span>
            </span>
            <span className="mt-1 text-xs uppercase tracking-[0.18em] text-nox-red">
              No Excuse Personal Training
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
              Boutique personal training and EMS coaching for disciplined clients in Muscat.
            </p>
          </Link>

          <div className="mt-8 space-y-2 text-sm text-white/80">
            <p>Level 2, Al Khuwair Fitness District, Muscat, Oman</p>
            <p>
              <a href="tel:+96893611220" className="hover:text-nox-red">
                +968 9361 1220
              </a>
            </p>
            <p>
              <a href="mailto:hello@noxtraining.om" className="hover:text-nox-red">
                hello@noxtraining.om
              </a>
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-nox-red hover:text-nox-red"
              >
                <Icon size={18} aria-hidden />
              </a>
            ))}
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.16em] text-white/75">
            Part of Stamina Fitness
          </p>
        </div>

        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Services" links={servicesLinks} />
        <FooterColumn title="Resources" links={resourceLinks} />
        <FooterColumn title="Legal" links={legalLinks} />
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-xs tracking-wide text-white/80 md:px-8">
        © 2026 NOX Personal Training. All rights reserved.
      </div>
      <div className="h-1 w-full bg-nox-red" aria-hidden />
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: Array<{ href: string; label: string }>;
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-nox-red">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-sm text-white/80">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="transition-colors hover:text-white"
              aria-label={link.label}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
