import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-[#050505] text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8 lg:px-16">
        <Link href="/" className="text-lg font-bold text-[#39ff14]">
          FlavorNest
        </Link>
        <div className="flex items-center gap-4 text-sm text-white/70">
          <Link href="/foods" className="transition hover:text-white">
            Menu
          </Link>
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
