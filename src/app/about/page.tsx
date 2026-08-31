export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-4 py-16 text-white sm:px-8 lg:px-16">
      <div className="mx-auto max-w-4xl rounded-[28px] border border-white/10 bg-[#0d0d0d] p-8 shadow-[0_0_30px_rgba(0,0,0,0.35)]">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#39ff14]">
          About us
        </p>
        <h1 className="text-3xl font-bold sm:text-4xl">Fresh food, made with care.</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
          We serve bold, satisfying dishes inspired by vibrant local flavors and a modern taste for comfort food.
          Every plate is crafted with premium ingredients and prepared to order for the best possible experience.
        </p>
      </div>
    </main>
  );
}
