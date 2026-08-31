import { getFoodItems } from "@/lib/api";
import FoodListError from "@/components/foods/FoodListError";
import FoodCard from "@/components/foods/foodcard";
import Link from "next/link";

const ITEMS_PER_PAGE = 12; // 3 rows * 4 columns

export default async function FoodsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  let foods;

  try {
    foods = await getFoodItems();
  } catch (error) {
    return (
      <main className="min-h-screen bg-[#050505]">
        <FoodListError />
      </main>
    );
  }

  // Handle URL search parameter for page
  const resolvedParams = await searchParams;
  const currentPage = Number(resolvedParams?.page) || 1;
  const totalPages = Math.ceil(foods.length / ITEMS_PER_PAGE);

  // Slice items for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentFoods = foods.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <main className="min-h-screen bg-[#050505] px-4 py-12 text-white sm:px-8 lg:px-16">
      <header className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-2 text-sm font-medium text-[#39ff14]">Our Menu</p>
        <h1 className="text-3xl font-bold sm:text-4xl">
          Fresh &amp; Delicious Food
        </h1>
      </header>

      {foods.length === 0 ? (
        <div className="flex min-h-[40vh] flex-col items-center justify-center gap-2 text-center">
          <p className="text-lg font-semibold">No foods available</p>
          <p className="text-sm text-white/60">
            We couldn&apos;t find any food items.
          </p>
        </div>
      ) : (
        <>
          {/* 3 Rows x 4 Columns Grid */}
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {currentFoods.map((food: any) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>

          {/* Server-Side Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-4">
              <Link
                href={`/foods?page=${currentPage - 1}`}
                className={`px-4 py-2 rounded-lg border border-white/20 bg-white/5 text-sm transition hover:bg-white/10 ${
                  currentPage <= 1 ? "pointer-events-none opacity-40" : ""
                }`}
              >
                Previous
              </Link>

              <span className="text-sm font-medium text-white/70">
                Page {currentPage} of {totalPages}
              </span>

              <Link
                href={`/foods?page=${currentPage + 1}`}
                className={`px-4 py-2 rounded-lg border border-white/20 bg-white/5 text-sm transition hover:bg-white/10 ${
                  currentPage >= totalPages
                    ? "pointer-events-none opacity-40"
                    : ""
                }`}
              >
                Next
              </Link>
            </div>
          )}
        </>
      )}
    </main>
  );
}
