import Link from "next/link";
import type { FoodItem } from "@/lib/api";

interface FoodCardProps {
  food: FoodItem;
}

/**
 * Displays a single food item as a card.
 * Only renders fields that actually exist on the API response —
 * e.g. `category`/`cuisine` are shown as tags only when present.
 *
 * Wrapped in a Link to /foods/[id] so it's ready for the upcoming
 * dynamic food detail route. That route doesn't exist yet, so this
 * link will 404 until it's built — that's expected for now.
 */
export default function FoodCard({ food }: FoodCardProps) {
  return (
    <Link
      href={`/foods/${food.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white/80 transition-all duration-200 hover:-translate-y-1 hover:border-[#e05307]/40 hover:shadow-[0_15px_35px_rgba(224,83,7,0.15)]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
        {/* Using a plain <img> keeps this drop-in friendly regardless of
            whether next.config.js already allowlists this image host. */}
        <img
          src={food.image_url}
          alt={food.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {food.is_trending && (
          <span className="absolute left-3 top-3 rounded-full bg-[#e05307] px-2.5 py-1 text-xs font-semibold text-white">
            Trending
          </span>
        )}

        {!food.available && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60">
            <span className="rounded-full border border-white/30 bg-black/50 px-3 py-1 text-sm text-white backdrop-blur">
              Unavailable
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-[#1b1210]">{food.name}</h3>
          <span className="whitespace-nowrap text-base font-bold text-[#e05307]">
            ${food.price.toFixed(2)}
          </span>
        </div>

        {food.description && (
          <p className="line-clamp-2 text-sm text-neutral-500">
            {food.description}
          </p>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {food.category && (
            <span className="rounded-full border border-[#e05307]/30 px-2.5 py-1 text-xs text-[#e05307]">
              {food.category}
            </span>
          )}
          {food.cuisine && (
            <span className="rounded-full border border-black/15 px-2.5 py-1 text-xs text-neutral-600">
              {food.cuisine}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}