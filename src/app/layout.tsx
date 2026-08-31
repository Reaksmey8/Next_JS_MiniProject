import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const brandFont = Playfair_Display({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FlavorNest | Fresh Food & Comfort Dining",
  description:
    "Modern food and dining experiences built around fresh ingredients and warm hospitality.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${brandFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#ffffff] text-[#1b1210]">
        <AnimatedBackground />
        <Navbar />
        <div className="relative flex min-h-screen flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
