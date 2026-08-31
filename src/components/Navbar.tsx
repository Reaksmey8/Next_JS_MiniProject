import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8 lg:px-16">
        <Link href="/" className="text-xl font-black tracking-tight text-[#39ff14]">
          FlavorNest
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-white/70 md:flex">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <Link href="/foods" className="transition hover:text-white">
            Menu
          </Link>
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
          <Link href="/offers" className="transition hover:text-white">
            Offers
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 sm:block">
            Search
          </button>
          <button className="rounded-full bg-[#39ff14] px-4 py-2 text-sm font-semibold text-[#050505] transition hover:bg-[#5dff5d]">
            Order Now
          </button>
        </div>
      </nav>
    </header>
  );
}
