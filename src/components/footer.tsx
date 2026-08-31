"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChefHat,
  Star,
  MapPin,
  Clock,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Foods", href: "/foods" },
  { label: "About Us", href: "/about" },
  { label: "Special Offers", href: "/foods" },
];

const SOCIALS = [
  {
    name: "Facebook",
    href: "#",
    path: "M13.5 9H15V6.5h-1.5C11.6 6.5 10.5 7.6 10.5 9.5V11H9v2.5h1.5V19h2.5v-5.5H15l.5-2.5h-2.5V9.8c0-.4.3-.8.5-.8Z",
  },
  {
    name: "Instagram",
    href: "#",
    path: "M8 5h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm4 3.75A3.25 3.25 0 1 0 15.25 12 3.25 3.25 0 0 0 12 8.75Zm0 1.5A1.75 1.75 0 1 1 10.25 12 1.75 1.75 0 0 1 12 10.25Zm3.4-2.9a.75.75 0 1 0 .75.75.75.75 0 0 0-.75-.75Z",
  },
  {
    name: "Telegram",
    href: "#",
    path: "M19.5 5.5L3.75 11.6a.6.6 0 0 0 .05 1.13l4.1 1.33 1.58 4.75a.6.6 0 0 0 .97.27l2.32-2.1 4.1 3.02a.6.6 0 0 0 .94-.4l2.1-13.4a.6.6 0 0 0-.41-.7ZM9.4 13.05l6.6-4.95-5.1 6.05-.22 2.06-1.28-3.16Z",
  },
];

const HOURS = [
  { days: "Monday – Friday", time: "10:00 – 22:00" },
  { days: "Saturday", time: "9:00 – 23:00" },
  { days: "Sunday", time: "9:00 – 22:30" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="relative z-50 w-full bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#D97706] to-[#E0561B] text-white shadow-md shadow-[#E0561B]/30">
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
            <p className="mt-4 max-w-xs text-sm leading-6 text-[#78716C]">
              Authentic Khmer food and warm dining experiences — real flavor
              crafted from fresh, local ingredients.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[#78716C] ring-1 ring-[#E6D7C3] transition-all hover:-translate-y-0.5 hover:bg-[#E0561B] hover:text-white hover:ring-[#E0561B]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#1C1917]">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-[#78716C] transition-colors hover:text-[#E0561B]"
                  >
                    <span className="h-px w-3 bg-[#D8C7B0] transition-all group-hover:w-5 group-hover:bg-[#E0561B]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Hours & Location */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#1C1917]">
              Visit Us
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3 text-[#78716C]">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#E0561B]" />
                <span>
                  Street 240, Sangkat Chaktomuk,
                  <br />
                  Phnom Penh, Cambodia
                </span>
              </li>
              <li className="flex items-start gap-3 text-[#78716C]">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#E0561B]" />
                <span>+855 12 345 678</span>
              </li>
              <li className="flex items-start gap-3 text-[#78716C]">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#E0561B]" />
                <span>hello@angkhorthmey.com</span>
              </li>
            </ul>

            <div className="mt-5 rounded-2xl bg-white/80 p-4 ring-1 ring-[#EADFD2]">
              <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#292524]">
                <Clock className="h-4 w-4 text-[#D97706]" />
                Opening Hours
              </h4>
              <ul className="mt-3 space-y-1.5">
                {HOURS.map((h) => (
                  <li
                    key={h.days}
                    className="flex items-center justify-between text-xs text-[#78716C]"
                  >
                    <span>{h.days}</span>
                    <span className="font-semibold text-[#E0561B]">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4 — Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#1C1917]">
              Stay in Touch
            </h3>
            <p className="mt-4 text-sm leading-6 text-[#78716C]">
              Subscribe for new dishes, seasonal offers, and special events.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="mt-5 flex overflow-hidden rounded-full bg-white ring-1 ring-[#EADFD2] transition focus-within:ring-2 focus-within:ring-[#E0561B]"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent px-5 py-3 text-sm text-[#1C1917] outline-none placeholder:text-[#A8A29E]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex shrink-0 items-center justify-center bg-gradient-to-r from-[#E0561B] to-[#D97706] px-4 text-white transition hover:brightness-110"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
            {subscribed && (
              <p className="mt-3 text-xs font-semibold text-[#D97706]">
                ✓ Thank you! You&apos;re on the list.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#EADFD2]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-xs text-[#A8A29E] sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Angkor Thmey. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Crafted with
              <span className="text-[#E0561B]">★</span>
              in Phnom Penh
            </span>
            <Link
              href="/about"
              className="transition-colors hover:text-[#E0561B]"
            >
              Privacy
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-[#E0561B]"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
