export default function FoodsLoading() {
  const skeletonCards = Array.from({ length: 8 });

  return (
    <main className="min-h-screen bg-[#050505] px-4 py-12 text-white sm:px-8 lg:px-16">
      <header className="mx-auto mb-12 max-w-3xl text-center">
        <div className="mx-auto mb-3 h-4 w-20 animate-pulse rounded-full bg-[#39ff14]/20" />
        <div className="mx-auto h-9 w-72 max-w-full animate-pulse rounded-full bg-white/10" />
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skeletonCards.map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-white/5 bg-[#0d0d0d]"
          >
            <div className="aspect-[4/3] w-full animate-pulse bg-white/5" />
            <div className="flex flex-col gap-3 p-4">
              <div className="h-4 w-3/4 animate-pulse rounded-full bg-white/10" />
              <div className="h-3 w-full animate-pulse rounded-full bg-white/5" />
              <div className="h-3 w-2/3 animate-pulse rounded-full bg-white/5" />
              <div className="flex gap-2 pt-1">
                <div className="h-5 w-16 animate-pulse rounded-full bg-[#39ff14]/10" />
                <div className="h-5 w-16 animate-pulse rounded-full bg-white/5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}