import Image from "next/image";

/*
 * Unsplash photos — all free-to-use pit bull / rescue dog images.
 * Using specific photo IDs for reliable, high-quality results.
 */
const dogs = [
  {
    src: "https://images.unsplash.com/photo-1541599468348-e603c130c5f0?w=800&h=800&fit=crop&crop=faces",
    alt: "Smiling pit bull with a happy expression",
  },
  {
    src: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800&h=800&fit=crop&crop=faces",
    alt: "Gentle pit bull looking at camera",
  },
  {
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=800&fit=crop&crop=faces",
    alt: "Playful dog in natural light",
  },
  {
    src: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&h=800&fit=crop&crop=faces",
    alt: "Golden retriever mix with soulful eyes",
  },
  {
    src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=800&fit=crop&crop=faces",
    alt: "Pit bull relaxing outdoors",
  },
  {
    src: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&h=800&fit=crop&crop=faces",
    alt: "Adorable bully breed puppy",
  },
  {
    src: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc8f9b?w=800&h=800&fit=crop&crop=faces",
    alt: "Sweet dog waiting for a home",
  },
  {
    src: "https://images.unsplash.com/photo-1558929996-da64ba858215?w=800&h=800&fit=crop&crop=faces",
    alt: "Happy rescue dog smiling",
  },
];

/* Hero dog — big beautiful pit bull */
const heroDog = {
  src: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?w=1600&h=900&fit=crop&crop=faces",
  alt: "Beautiful pit bull looking into the camera",
};

/* ───────────────────── HERO ───────────────────── */
function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src={heroDog.src}
        alt={heroDog.alt}
        fill
        priority
        className="object-cover object-center brightness-[0.3]"
      />

      {/* Content */}
      <div className="relative z-10 px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.4em] text-gold">
          Death Row Rescues
        </p>

        <h1 className="mt-6 max-w-3xl text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Every Dog Deserves{" "}
          <span className="text-gold">a Second Chance</span>
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-base text-white/70 sm:text-lg">
          We save dogs on death row at shelters across America.
        </p>

        <a
          href="#join"
          className="mt-8 inline-block rounded bg-red px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-110"
        >
          Join the Mission
        </a>
      </div>
    </section>
  );
}

/* ──────────────── DOG PHOTO STRIP ─────────────── */
function DogStrip() {
  return (
    <section className="bg-white/[0.02] py-1">
      <div className="grid grid-cols-4 sm:grid-cols-8">
        {dogs.map((dog, i) => (
          <div key={i} className="relative aspect-square overflow-hidden">
            <Image
              src={dog.src}
              alt={dog.alt}
              fill
              className="object-cover transition duration-500 hover:scale-105"
              sizes="(max-width: 640px) 25vw, 12.5vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────── THE PROBLEM ────────────────── */
function Problem() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
          The Problem
        </h2>

        <p className="mt-6 text-5xl font-black sm:text-6xl">920,000</p>
        <p className="mt-2 text-base text-white/60">
          shelter animals euthanized every year in the US
        </p>

        <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-white/50">
          &ldquo;Death row&rdquo; isn&rsquo;t a figure of speech. In
          overcrowded shelters, healthy dogs are put down every day — not
          because they&rsquo;re dangerous, but because there&rsquo;s no room.
          Pit bulls and bully breeds are the first to go.
        </p>
      </div>
    </section>
  );
}

/* ───────────────── THE MISSION ────────────────── */
function Mission() {
  const pillars = [
    {
      title: "Spotlight",
      desc: "Social media and cultural awareness campaigns that make at-risk dogs impossible to ignore.",
    },
    {
      title: "Fund",
      desc: "Covering vet care, food, and temporary shelter so rescues can say yes to more dogs.",
    },
    {
      title: "Connect",
      desc: "Matching dogs with the right families and foster networks to get them home.",
    },
  ];

  return (
    <section className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
          Our Mission
        </h2>
        <p className="mt-5 text-2xl font-black uppercase sm:text-3xl">
          Spotlight · Fund · Connect
        </p>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title}>
              <h3 className="text-lg font-black uppercase text-gold">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── FEATURED DOGS ───────────────── */
function FeaturedDogs() {
  const featured = dogs.slice(0, 6);

  return (
    <section className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
          The Dogs We Save
        </h2>
        <p className="mt-5 text-2xl font-black uppercase sm:text-3xl">
          They&rsquo;re Not Dangerous. They&rsquo;re Overlooked.
        </p>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/50 leading-relaxed">
          Pit bulls and bully breeds are the most euthanized dogs in America.
          They wait the longest, get overlooked the most, and run out of time
          the fastest.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {featured.map((dog, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={dog.src}
                alt={dog.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── EMAIL SIGNUP ─────────────────── */
function Signup() {
  return (
    <section id="join" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-md text-center">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
          Get Involved
        </h2>
        <p className="mt-5 text-2xl font-black uppercase sm:text-3xl">
          Be the First to Know
        </p>
        <p className="mt-3 text-sm text-white/50">
          Drop your email and we&rsquo;ll notify you when we launch.
        </p>

        <form
          action="https://formspree.io/f/xpwzgvqa"
          method="POST"
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="you@email.com"
            className="flex-1 rounded border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            className="rounded bg-red px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-110"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}

/* ───────────────────── FOOTER ─────────────────── */
function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-14 text-center">
      <p className="text-lg font-black uppercase tracking-[0.15em] text-gold">
        Death Row Rescues
      </p>
      <p className="mt-4 text-xs text-white/25">Coming 2026</p>
      <p className="mt-1 text-xs text-white/20">
        &copy; 2026 Death Row Rescues. All rights reserved.
      </p>
    </footer>
  );
}

/* ───────────────────── PAGE ───────────────────── */
export default function Home() {
  return (
    <main>
      <Hero />
      <DogStrip />
      <Problem />
      <Mission />
      <FeaturedDogs />
      <Signup />
      <Footer />
    </main>
  );
}
