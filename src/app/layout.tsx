import type { Metadata } from "next";
import "./globals.css";
import { LocaleProvider } from "@/lib/i18n";
import { Footer } from "@/src/components/layout/footer";
import { HtmlDirSync } from "@/src/components/layout/html-dir-sync";
import { Navbar } from "@/src/components/layout/navbar";

export const metadata: Metadata = {
  title: "NOX | تدريب بلا أعذار",
  description:
    "NOX Personal Training website. Arabic-first premium boutique fitness experience in Muscat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#0D0D0D] text-white">
        <LocaleProvider>
          <HtmlDirSync />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
