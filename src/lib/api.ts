// Base URL for the food API.
const API_BASE_URL = "https://sombobaeb.cheat.casa";

/**
 * Shape of a single food item, matching the REAL fields returned by
 * GET /food-items (verified by inspecting the live response).
 * The API returns more fields (nutrition, ingredients, timestamps, etc.)
 * but these are the ones the Food List Page actually needs/displays.
 */
export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  cuisine: string;
  preparation_time_minutes: number;
  average_rating: number | null;
  rating_count: number;
  is_trending: boolean;
  available: boolean;
}

/**
 * Fetches all food items from the API.
 * Throws an Error if the request fails, so callers can render an error state.
 */
export async function getFoodItems(): Promise<FoodItem[]> {
  const response = await fetch(`${API_BASE_URL}/food-items?skip=0&limit=100`, {
    // Always get fresh data — food availability/prices can change.
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch food items: ${response.status}`);
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("Unexpected response shape from food API");
  }

  return data as FoodItem[];
}