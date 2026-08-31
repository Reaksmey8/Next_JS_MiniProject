import Image from "next/image";
import Link from "next/link";
import smeyImage from "./images/smey.jpg";
import seanImage from "./images/sean.png";
import nuthImage from "./images/nuth.jpg";
import theangImage from "./images/theang.png";  
import rakImage from "./images/rak.png";
import raImage from "./images/ra.png";

const values = [
  {
    title: "Thoughtful ingredients",
    text: "We work with trusted suppliers and local growers to keep every dish vibrant, fresh, and full of honest flavor. From crisp vegetables to premium cuts of meat, every ingredient is chosen with purpose.",
  },
  {
    title: "Comfort with character",
    text: "Our kitchen blends familiar comfort food with bold, modern seasoning. Each recipe is built to feel cozy and exciting at the same time, creating memorable meals that still feel like home.",
  },
  {
    title: "Made for everyday joy",
    text: "Whether it is a quick lunch break, a family dinner, or a late-night craving, we create food that fits real life and makes ordinary moments feel a little more special.",
  },
];

const stats = [
  { label: "Fresh dishes", value: "40+" },
  { label: "Local partners", value: "18" },
  { label: "Average prep", value: "12 min" },
  { label: "Happy guests", value: "10k+" },
];

const team = [
  {
    name: "Chhom Chanreaksmey",
    role: "Founder & Head Chef",
    image: smeyImage,
  },
  { name: "Song Chinsean", role: "Kitchen Manager", image: seanImage },
  { name: "Bean Sovannranuth", role: "Sous Chef", image: nuthImage },
  { name: "Sovann Sitheang", role: "Food Stylist", image: theangImage },
  { name: "Ren Sovannara", role: "Service & Experience Lead", image: raImage },
  { name: "Toch Phearak", role: "Prep & Quality Control", image: rakImage },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-8 lg:px-16">
        <div className="rounded-[30px] border border-white/10 bg-[#0d0d0d] p-8 shadow-[0_0_40px_rgba(0,0,0,0.4)] sm:p-10 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#39ff14]">
                About us
              </p>
              <h1 className="max-w-xl text-4xl font-black leading-tight sm:text-5xl">
                Fresh food, made with care and served with heart.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                Welcome to FlavorNest — a food brand created for people who love
                delicious meals that feel both comforting and exciting. We
                believe great food should be simple, satisfying, and memorable,
                whether you are grabbing a quick bite or enjoying a slow,
                special meal with the people you love.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                Our kitchen is inspired by everyday cravings, rich flavors, and
                the joy of eating something made with intention. Every plate is
                prepared with care, balancing freshness, taste, and the warmth
                of hospitality in every detail.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/foods"
                  className="rounded-full bg-[#39ff14] px-6 py-3 text-sm font-semibold text-[#050505] transition hover:brightness-110"
                >
                  Explore menu
                </Link>
                <Link
                  href="/"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  Back home
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-[#39ff14]/20 bg-[#39ff14]/8 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-[#39ff14]">
                  Our promise
                </p>
                <p className="mt-3 text-xl font-semibold text-white">
                  Real flavor, no shortcuts.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                  Since
                </p>
                <p className="mt-3 text-3xl font-black text-white">2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-8 lg:px-16">
        <div className="mb-8 max-w-3xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-[#39ff14]">
            Our story
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Built around good food, honest ingredients, and real community.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/65">
            FlavorNest began with a simple idea: food should nourish both the
            body and the moment. We wanted to create a place where flavor,
            quality, and warmth come together in a way that feels personal and
            welcoming every single time.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-[24px] border border-white/10 bg-[#0d0d0d] p-6 transition hover:border-[#39ff14]/40 hover:bg-[#101010]"
            >
              <div className="mb-4 h-12 w-12 rounded-xl bg-[#39ff14]/12 ring-1 ring-[#39ff14]/30" />
              <h3 className="text-xl font-semibold text-white">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                {value.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b0b0b]">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-8 lg:grid-cols-4 lg:px-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="text-3xl font-black text-[#39ff14]">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-8 lg:px-16">
        <div className="mb-8 max-w-3xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-[#39ff14]">
            Meet the team
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            A dedicated team turning flavor into memorable experiences.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/65">
            Behind every dish is a group of people who care deeply about taste,
            quality, and service. From the kitchen to the front line, our team
            works together to create meals that feel welcoming, fresh, and full
            of heart.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-[24px] border border-white/10 bg-[#0d0d0d] p-6 text-center"
            >
              <div className="mb-4 overflow-hidden rounded-[20px] border border-white/10 bg-[#111111]">
                {member.image ? (
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="flex h-52 items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(57,255,20,0.22),_transparent_50%)] text-sm font-medium uppercase tracking-[0.2em] text-white/50">
                    Photo
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-white/60">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
