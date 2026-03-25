import Logo from "@/components/Logo";

/* ───────────────────── HERO ───────────────────── */
function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Logo className="mb-8 h-44 w-auto sm:h-56" />

      <h1 className="max-w-3xl text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
        Every Dog Deserves{" "}
        <span className="text-gold">a Second Chance</span>
      </h1>

      <p className="mt-5 max-w-lg text-base text-white/60 sm:text-lg">
        Death Row Rescues saves dogs on death row at shelters across America.
      </p>

      <a
        href="#join"
        className="mt-8 inline-block rounded bg-red px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-110"
      >
        Join the Mission
      </a>
    </section>
  );
}

/* ───────────────── THE PROBLEM ────────────────── */
function Problem() {
  return (
    <section className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
          The Problem
        </h2>

        <p className="mt-6 text-4xl font-black sm:text-5xl">920,000</p>
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
          The Mission
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

/* ──────────────── THE DOGS WE SAVE ────────────── */
function Dogs() {
  return (
    <section className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
          The Dogs We Save
        </h2>
        <p className="mt-5 text-2xl font-black uppercase sm:text-3xl">
          Tough. Loyal. Misunderstood.
        </p>
        <p className="mt-5 text-base text-white/50 leading-relaxed">
          Pit bulls and bully breeds make up the majority of dogs euthanized in
          shelters. They&rsquo;re not dangerous — they&rsquo;re overlooked.
          We&rsquo;re here to change that.
        </p>

        {/* Placeholder grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded bg-white/[0.03] border border-white/[0.06]"
            >
              <span className="text-3xl text-white/10">🐕</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-white/25 italic">
          Real dogs coming soon.
        </p>
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
      <Problem />
      <Mission />
      <Dogs />
      <Signup />
      <Footer />
    </main>
  );
}
