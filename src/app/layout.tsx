import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import PromoBar from "@/components/layout/PromoBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

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
  title: "PhysioPath — Robotics & Advanced Physiotherapy",
  description:
    "A leading robotics and advanced physiotherapy clinic in Bangalore, blending evidence-based protocols with cutting-edge tech to get you back to what you love.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-brand-paper">
        <PromoBar />
        <Navbar />
        <main className="flex-1">{children}</main>
             <Toaster />
        <Footer />
      </body>
    </html>
  );
}
