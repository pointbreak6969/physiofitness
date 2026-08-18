import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import PromoBar from "@/components/layout/PromoBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { headers } from "next/headers";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Physiofitness | Physiotherapy, Rehabilitation & Fitness in Pokhara",
  description:
    "Assessment-led physiotherapy, rehabilitation and supervised fitness in Birauta-17, Pokhara. Services include manual therapy, therapeutic exercise, pain management and personalised recovery plans.",
  icons: {
    icon: "/asdf.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "";
  const isAdmin = pathname.startsWith("/admin");

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-brand-paper">
        {!isAdmin && <PromoBar />}
        {!isAdmin && <Navbar />}
        <main className="flex-1">{children}</main>
        <Toaster />
        {!isAdmin && <Footer />}
      </body>
    </html>
  );
}
