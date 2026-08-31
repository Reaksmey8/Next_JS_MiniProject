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
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#0d0d0d] transition-all duration-200 hover:-translate-y-1 hover:border-[#ff1493]/40 hover:shadow-[0_0_25px_-5px_rgba(255,20,147,0.35)]"
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
          <span className="absolute left-3 top-3 rounded-full bg-[#39ff14] px-2.5 py-1 text-xs font-semibold text-black">
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

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-white">{food.name}</h3>
          <span className="whitespace-nowrap text-base font-bold text-[#ff1493]">
            ${food.price.toFixed(2)}
          </span>
        </div>

        {food.description && (
          <p className="line-clamp-2 text-sm text-white/60">
            {food.description}
          </p>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {food.category && (
            <span className="rounded-full border border-[#39ff14]/30 px-2.5 py-1 text-xs text-[#39ff14]">
              {food.category}
            </span>
          )}
          {food.cuisine && (
            <span className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-white/70">
              {food.cuisine}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}