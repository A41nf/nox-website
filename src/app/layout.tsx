import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/src/components/layout/footer";
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
