import Image from "next/image";
import Logo from "@/components/Logo";

const dogs = [
  { src: "/dogs/dog-01.jpg", name: "Buddy" },
  { src: "/dogs/dog-02.jpg", name: "Luna" },
  { src: "/dogs/dog-03.jpg", name: "Duke" },
  { src: "/dogs/dog-04.jpg", name: "Daisy" },
  { src: "/dogs/dog-05.jpg", name: "Rocky" },
  { src: "/dogs/dog-06.jpg", name: "Stella" },
  { src: "/dogs/dog-07.jpg", name: "Bear" },
  { src: "/dogs/dog-08.jpg", name: "Scout" },
  { src: "/dogs/dog-09.jpg", name: "Mia" },
  { src: "/dogs/dog-10.jpg", name: "Coco" },
  { src: "/dogs/dog-11.jpg", name: "Charlie" },
  { src: "/dogs/dog-12.jpg", name: "Zeus" },
];

/* ───────────────────── HERO ───────────────────── */
function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden">
      <Image
        src="/dogs/hero.jpg"
        alt="Rescue dog"
        fill
        priority
        className="object-cover object-center brightness-[0.2]"
      />

      <div className="relative z-10 px-6 text-center">
        <Logo />

        <h1 className="mt-8 max-w-3xl text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl lg:text-7xl">
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
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12">
      {dogs.map((dog, i) => (
        <div key={i} className="relative aspect-square overflow-hidden">
          <Image
            src={dog.src}
            alt={`${dog.name} — rescue dog`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 25vw, (max-width: 768px) 16.6vw, 8.3vw"
          />
        </div>
      ))}
    </div>
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
          because anything is wrong with them, but because there&rsquo;s no
          room. Good dogs run out of time before they find a home.
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
      desc: "We use social media and culture to put a spotlight on dogs running out of time — making them impossible to ignore.",
    },
    {
      title: "Fund",
      desc: "We cover vet care, food, and temporary shelter so rescues can say yes to more dogs instead of turning them away.",
    },
    {
      title: "Connect",
      desc: "We match dogs with the right families and foster networks — getting them out of the shelter and into a home.",
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
          Shelters across the country are overcrowded. Good dogs — loyal,
          loving, and full of life — are euthanized every day simply because no
          one showed up in time.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {dogs.map((dog, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={dog.src}
                alt={`${dog.name} — rescue dog`}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 text-sm font-bold uppercase tracking-wider text-white/90">
                {dog.name}
              </p>
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
