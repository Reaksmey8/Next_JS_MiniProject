import Link from "next/link";
import { notFound } from "next/navigation";
import { getFoodItemById } from "@/lib/api";

export default async function FoodDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let food;

  try {
    food = await getFoodItemById(id);
  } catch {
    notFound();
  }

  if (!food) {
    notFound();
  }

  const nutritionItems = [
    { label: "Calories", value: `${food.calories ?? 0} kcal` },
    { label: "Prep Time", value: `${food.preparation_time_minutes} min` },
    { label: "Protein", value: `${food.protein ?? 0}g` },
    { label: "Carbs", value: `${food.carbs ?? 0}g` },
    { label: "Fat", value: `${food.fat ?? 0}g` },
  ];

  const ratingText = food.average_rating
    ? `${food.average_rating.toFixed(1)} / 5`
    : "No ratings yet";

  return (
    <main className="min-h-screen bg-[#050505] px-4 py-12 text-white sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/foods"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/75 transition hover:border-[#39ff14]/40 hover:text-[#39ff14]"
        >
          ← Back to menu
        </Link>

        <section className="overflow-hidden rounded-[28px] border border-white/5 bg-[#0d0d0d] p-4 shadow-[0_0_30px_rgba(0,0,0,0.4)] sm:p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black">
              <img
                src={food.image_url}
                alt={food.name}
                className="h-full min-h-[420px] w-full object-cover"
              />

              {food.is_trending && (
                <span className="absolute left-4 top-4 rounded-full bg-[#39ff14] px-3 py-1 text-xs font-semibold text-black">
                  Trending
                </span>
              )}

              {!food.available && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                  <span className="rounded-full border border-white/20 px-3 py-1 text-sm text-white">
                    Unavailable
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#39ff14]">
                Featured dish
              </p>

              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h1 className="text-3xl font-bold sm:text-5xl">{food.name}</h1>
                <span className="text-3xl font-bold text-[#ff1493]">
                  ${food.price.toFixed(2)}
                </span>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {food.category && (
                  <span className="rounded-full border border-[#39ff14]/30 bg-[#39ff14]/5 px-3 py-1 text-xs font-medium text-[#39ff14]">
                    {food.category}
                  </span>
                )}
                {food.cuisine && (
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/75">
                    {food.cuisine}
                  </span>
                )}
                {food.meal_types?.length
                  ? food.meal_types.map((mealType) => (
                      <span
                        key={mealType}
                        className="rounded-full border border-[#ff1493]/20 bg-[#ff1493]/5 px-3 py-1 text-xs font-medium text-[#ff1493]"
                      >
                        {mealType}
                      </span>
                    ))
                  : null}
              </div>

              <p className="max-w-xl text-base leading-7 text-white/70">
                {food.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {nutritionItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-[#121212] p-3"
                  >
                    <p className="text-xs uppercase tracking-[0.14em] text-white/45">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#39ff14]/25 bg-[#39ff14]/10 px-3 py-1.5 text-sm text-[#39ff14]">
                  ⭐ {ratingText}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/70">
                  {food.rating_count} reviews
                </span>
                <span
                  className={`rounded-full px-3 py-1.5 text-sm ${
                    food.available
                      ? "border border-[#39ff14]/25 bg-[#39ff14]/10 text-[#39ff14]"
                      : "border border-white/10 bg-white/5 text-white/60"
                  }`}
                >
                  {food.available ? "Available now" : "Currently unavailable"}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  disabled={!food.available}
                  className="rounded-full bg-[#ff1493] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Add to cart
                </button>
                <Link
                  href="/foods"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#39ff14]/40 hover:text-[#39ff14]"
                >
                  Browse more
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-semibold text-white">
                Ingredients
              </h2>
              <div className="flex flex-wrap gap-2">
                {(food.ingredients?.length
                  ? food.ingredients
                  : ["Fresh ingredients"]
                ).map((ingredient) => (
                  <span
                    key={ingredient}
                    className="rounded-full border border-white/10 bg-[#121212] px-3 py-1.5 text-sm text-white/70"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold text-white">
                Quick details
              </h2>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span>Category</span>
                  <span className="font-medium text-white">
                    {food.category || "—"}
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span>Cuisine</span>
                  <span className="font-medium text-white">
                    {food.cuisine || "—"}
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Drink type</span>
                  <span className="font-medium text-white">
                    {food.drink_type || "Not available"}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
