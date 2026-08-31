"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  image_url: string;
  cuisine: string;
  preparation_time_minutes: number;
  meal_types: string[];
  ingredients: string[];
  available: boolean;
}

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80";

function FoodImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src || DEFAULT_IMAGE);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className="h-full w-full object-cover"
      onError={() => setImgSrc(DEFAULT_IMAGE)}
    />
  );
}

export default function LandingPage() {
  const [foods, setFoods] = useState<FoodItem[]>([]);

  useEffect(() => {
    async function fetchFoods() {
      try {
        const res = await fetch("https://sombobaeb.cheat.casa/food-items?skip=0&limit=6");
        if (res.ok) {
          const data = await res.json();
          setFoods(data);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchFoods();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent font-sans text-slate-800">
      {/* បន្ទះពណ៌ទឹកក្រូចស្រាលនៅសងខាង (Side Orange Decor Shapes) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-16 -right-24 w-[450px] h-[550px] bg-[#f8dfd4] rotate-12 rounded-[60px]" />
        <div className="absolute top-[45%] -left-32 w-[450px] h-[500px] bg-[#f8dfd4] -rotate-12 rounded-[60px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-16 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block rounded-full bg-[#e05307]/10 px-6 py-1.5 text-xs font-bold text-[#e05307] border border-[#e05307]/20 mb-6">
          អត្តសញ្ញាណជាតិខ្មែរ • Angkor Thmey Restaurant
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-[#e05307] mb-4 leading-tight">
          ម្ហូបខ្មែរ
        </h1>
        <p className="text-lg sm:text-xl font-bold text-slate-700 mb-6">
          រសជាតិដើម ឈ្ងុយឆ្ងាញ់ បែបប្រពៃណីខ្មែរ
        </p>
        
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Experience the vibrant Cambodian culinary heritage with rich natural ingredients and authentic recipes.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/foods"
            className="rounded-full bg-[#e05307] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#c84600] transition shadow-md border-2 border-[#e05307]"
          >
            មើលម៉ឺនុយម្ហូប
          </Link>
          <Link
            href="/about"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#e05307] border-2 border-[#e05307] hover:bg-slate-50 transition shadow-sm"
          >
            អំពីយើង
          </Link>
        </div>
      </section>

      {/* Food Cards Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pb-24">
        <div className="flex justify-between items-end mb-8 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-black text-[#e05307]">ម្ហូបពិសេសៗ</h2>
            <p className="text-slate-500 text-xs font-medium">Authentic Cambodian Dishes</p>
          </div>
          <Link href="/foods" className="text-[#e05307] text-sm font-bold hover:underline">
            មើលទាំងអស់ →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food) => (
            <div
              key={food.id}
              className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl hover:border-[#e05307] transition duration-300 flex flex-col justify-between"
            >
              <div className="relative h-52 w-full bg-slate-100">
                <FoodImage src={food.image_url} alt={food.name} />
                <div className="absolute top-3 right-3 bg-[#e05307] text-white px-3.5 py-1 rounded-full text-xs font-black shadow-md border border-white/40">
                  ${food.price}
                </div>
                {food.preparation_time_minutes && (
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#e05307] border border-slate-200 shadow-sm">
                    ⏱ {food.preparation_time_minutes} នាទី
                  </div>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-slate-900">{food.name}</h3>
                    <span className="text-[10px] bg-slate-100 text-[#e05307] font-bold px-2.5 py-0.5 rounded-full border border-slate-200">
                      {food.cuisine}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 text-xs line-clamp-2 mb-4 leading-relaxed">
                    {food.description}
                  </p>

                  <div className="grid grid-cols-4 gap-1 bg-slate-50 p-2.5 rounded-2xl border border-slate-100 text-center mb-4">
                    <div>
                      <p className="text-[9px] font-medium text-slate-400">Calories</p>
                      <p className="text-xs font-bold text-[#e05307]">{food.calories ?? "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-medium text-slate-400">Protein</p>
                      <p className="text-xs font-bold text-slate-700">{food.protein ? `${food.protein}g` : "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-medium text-slate-400">Carbs</p>
                      <p className="text-xs font-bold text-slate-700">{food.carbs ? `${food.carbs}g` : "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-medium text-slate-400">Fat</p>
                      <p className="text-xs font-bold text-slate-700">{food.fat ? `${food.fat}g` : "N/A"}</p>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/foods/${food.id}`}
                  className="w-full text-center block bg-slate-50 hover:bg-[#e05307] text-[#e05307] hover:text-white py-2.5 rounded-2xl text-xs font-bold transition border border-slate-200 hover:border-[#e05307]"
                >
                  មើលលម្អិត
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}