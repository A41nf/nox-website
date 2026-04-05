import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBookButton from "@/components/MobileBookButton";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://noxtraining.om"),
  title: {
    default: "NOX — No Excuse Personal Training",
    template: "%s | NOX Personal Training",
  },
  description:
    "NOX Personal Training in Muscat, Oman. Elite coaching, EMS training, and disciplined programs for real results.",
  openGraph: {
    title: "NOX — No Excuse Personal Training",
    description:
      "Elite personal training for those who demand more. تدريب بلا أعذار.",
    siteName: "NOX Personal Training",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NOX Personal Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOX — No Excuse Personal Training",
    description: "No More Excuses. Start Today.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className="h-full scroll-smooth">
      <body className="flex min-h-full flex-col bg-nox-black font-inter text-nox-white antialiased">
        <LocaleProvider>
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
          <MobileBookButton />
        </LocaleProvider>
      </body>
    </html>
  );
}
