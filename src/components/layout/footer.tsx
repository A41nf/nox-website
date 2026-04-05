import Link from "next/link";
import { contactDetails, navItems } from "@/src/data/site-content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:px-8">
        <div>
          <div className="text-3xl font-black tracking-[0.45em] text-white">
            NO<span className="text-[#E80028]">X</span>
          </div>
          <p className="mt-4 max-w-md text-base leading-8 text-white/68">
            مساحة تدريب شخصية بوتيك لعملاء يبحثون عن نتائج حقيقية، انضباط واضح، وتجربة خاصة لا تقبل الحلول الوسط.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.28em] text-[#E80028]">التنقل</h3>
          <div className="mt-5 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/72 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.28em] text-[#E80028]">التواصل</h3>
          <div className="mt-5 space-y-3 text-sm text-white/72">
            <p>{contactDetails.address}</p>
            <a href={`tel:${contactDetails.phone}`} className="block transition hover:text-white">
              {contactDetails.phone}
            </a>
            <a href={`mailto:${contactDetails.email}`} className="block transition hover:text-white">
              {contactDetails.email}
            </a>
            <a href={contactDetails.whatsapp} target="_blank" rel="noreferrer" className="block transition hover:text-white">
              واتساب
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/45 md:px-8">
        © 2026 NOX Personal Training. No Excuse Personal Training / تدريب بلا أعذار
      </div>
    </footer>
  );
}
