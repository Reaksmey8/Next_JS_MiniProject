"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-[#f3e6d8] bg-[#fdf8f2]/90 backdrop-blur-md sticky top-0 z-50 w-full px-6 sm:px-12 py-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-extrabold text-[#e05307] flex items-center gap-2">
        <span>🇰🇭</span> Angkor Thmey
      </Link>
      <div className="flex gap-8 text-sm font-bold">
        <Link href="/" className="text-[#e05307]">Home</Link>
        <Link href="/foods" className="text-slate-700 hover:text-[#e05307] transition">Foods</Link>
        <Link href="/about" className="text-slate-700 hover:text-[#e05307] transition">About Us</Link>
      </div>
    </nav>
  );
}