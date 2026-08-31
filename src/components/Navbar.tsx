"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="relative z-50 sticky top-0 w-full border-b border-black/10 bg-white/80 px-6 py-4 flex items-center justify-between backdrop-blur-md">
      <Link
        href="/"
        className="text-2xl font-extrabold text-[#e05307] flex items-center gap-2"
      >
        <span>🇰🇭</span> Angkor Thmey
      </Link>
      <div className="flex gap-8 text-sm font-bold">
        <Link href="/" className="text-[#e05307]">
          Home
        </Link>
        <Link href="/foods" className="text-slate-700 hover:text-[#e05307] transition">
          Foods
        </Link>
        <Link href="/about" className="text-slate-700 hover:text-[#e05307] transition">
          About Us
        </Link>
      </div>
    </header>
  );
}
