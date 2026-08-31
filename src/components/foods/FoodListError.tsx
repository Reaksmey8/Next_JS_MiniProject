"use client";

import { useRouter } from "next/navigation";

/**
 * Friendly error state for the Food List Page.
 * Client component only because the "Try Again" button needs to
 * trigger a re-fetch via router.refresh().
 */
export default function FoodListError() {
  const router = useRouter();

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-lg font-semibold text-[#ff1493]">
        Something went wrong
      </p>
      <p className="max-w-sm text-sm text-white/60">
        We couldn&apos;t load the food menu. Please try again later.
      </p>
      <button
        type="button"
        onClick={() => router.refresh()}
        className="mt-2 rounded-full bg-[#39ff14] px-6 py-2 text-sm font-semibold text-black transition-transform hover:scale-105"
      >
        Try Again
      </button>
    </div>
  );
}