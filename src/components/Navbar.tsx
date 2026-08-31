"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  ChefHat,
  Star,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/foods" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const cartCount = 3;

  const submitSearch = () => {
    if (!query.trim()) return;
    router.push(`/foods?search=${encodeURIComponent(query.trim())}`);
    setSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#D97706] to-[#E0561B] text-white shadow-md shadow-[#E0561B]/30 transition-transform group-hover:-rotate-6">
            <ChefHat className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-brand text-xl font-black tracking-tight text-[#1C1917]">
              Angkor Thmey
            </span>
            <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D97706]">
              <Star className="h-2.5 w-2.5 fill-[#EAB308] text-[#EAB308]" />
              KH Cuisine
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-4 py-2 text-sm font-semibold text-[#292524] transition-colors hover:text-[#E0561B]"
            >
              {link.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-[#E0561B] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Search trigger */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Open search"
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#292524] transition-colors hover:bg-[#F5EFE7] hover:text-[#E0561B]"
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Cart */}
          <Link
            href="/foods"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#292524] transition-colors hover:bg-[#F5EFE7] hover:text-[#E0561B]"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#E0561B] to-[#D97706] px-1 text-[10px] font-bold text-white shadow">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#292524] transition-colors hover:bg-[#F5EFE7] hover:text-[#E0561B] md:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`overflow-hidden border-t border-[#EADFD2] bg-[#FDF8F2] transition-[max-height] duration-300 ease-in-out md:hidden ${
          menuOpen ? "max-h-64" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-[#292524] transition-colors hover:bg-[#F0E6D8] hover:text-[#E0561B]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Search Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 p-4 pt-24 backdrop-blur-sm"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-xl overflow-hidden rounded-2xl bg-[#FDF8F2] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-[#EADFD2] px-5 py-4">
              <Search className="h-5 w-5 text-[#E0561B]" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submitSearch()}
                placeholder="Search for dishes… e.g. Amok, Lok Lak"
                className="w-full bg-transparent text-base text-[#1C1917] outline-none placeholder:text-[#A8A29E]"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#78716C] transition-colors hover:bg-[#F0E6D8] hover:text-[#E0561B]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center justify-between px-5 py-3">
              <span className="text-xs font-medium text-[#A8A29E]">
                Popular: Amok, Beef Lok Lak, Num Banh Chok
              </span>
              <button
                type="button"
                onClick={submitSearch}
                className="rounded-full bg-gradient-to-r from-[#E0561B] to-[#D97706] px-5 py-2 text-xs font-bold text-white shadow transition hover:brightness-110"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
