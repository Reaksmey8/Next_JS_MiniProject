import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white text-gray-600">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-900">FoodApp</h3>
            <p className="text-sm text-gray-500">
              Delicious meals delivered fast to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="transition hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/foods" className="transition hover:text-gray-900">
                  Foods
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-gray-900">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Categories
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/foods?category=fast-food" className="transition hover:text-gray-900">
                  Fast Food
                </Link>
              </li>
              <li>
                <Link href="/foods?category=desserts" className="transition hover:text-gray-900">
                  Desserts
                </Link>
              </li>
              <li>
                <Link href="/foods?category=drinks" className="transition hover:text-gray-900">
                  Drinks
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Stay Updated
            </h4>
            <p className="mt-4 text-sm text-gray-500">
              Subscribe to get updates on new offers and discounts.
            </p>
            <form className="mt-3 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-r-md bg-gray-900 px-4 py-2 text-sm text-white transition hover:bg-gray-800"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} KhmerFoodApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}