"use client";

import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "Alex transformed my raw demos into a chart-topping album. His attention to detail and creative vision are unmatched. Working with him was the best decision I made for my career.",
    name: "Luna Vega",
    role: "Recording Artist",
    company: "Universal Music",
    avatar: "from-purple-500 to-pink-500",
  },
  {
    quote:
      "The score Alex composed for our film elevated every scene. He understood the emotion and story deeply, creating a sonic landscape that moved audiences to tears.",
    name: "Marcus Chen",
    role: "Film Director",
    company: "Nexus Films",
    avatar: "from-blue-500 to-cyan-500",
  },
  {
    quote:
      "I've worked with many producers over the years. Alex stands out for his musicality, technical expertise, and ability to bring out the best in every artist he works with.",
    name: "Sasha Rose",
    role: "Singer-Songwriter",
    company: "Atlantic Records",
    avatar: "from-pink-500 to-rose-500",
  },
  {
    quote:
      "From sound design to final mix, Alex delivered beyond our expectations. The game's audio became a defining feature that players constantly praise.",
    name: "Emma Larsson",
    role: "Creative Director",
    company: "Pulse Interactive",
    avatar: "from-emerald-500 to-teal-500",
  },
  {
    quote:
      "Alex has a rare gift — he hears what a song can become before anyone else does. His mixes are fat, clean, and competitive at the highest level.",
    name: "David Okafor",
    role: "Label Executive",
    company: "Warner Bros. Records",
    avatar: "from-amber-500 to-orange-500",
  },
  {
    quote:
      "Professional, inspired, and always on time. Alex's arrangements gave our TV series a signature sound that audiences instantly recognize and love.",
    name: "Rachel Kim",
    role: "Showrunner",
    company: "HBO",
    avatar: "from-indigo-500 to-purple-500",
  },
];

const logos = [
  "Universal Music",
  "Warner Bros.",
  "Atlantic Records",
  "Sony Music",
  "Netflix",
  "HBO",
  "Spotify",
  "Apple Music",
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-medium text-purple-300">
            Testimonials
          </div>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
            Trusted by <span className="gradient-text">creators</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            What artists, directors, and labels say about working with me.
          </p>
        </Reveal>

        {/* Logos marquee */}
        <Reveal className="mt-12 overflow-hidden" delay={200}>
          <div className="relative">
            <div className="flex animate-marquee gap-12 whitespace-nowrap">
              {[...logos, ...logos].map((logo, i) => (
                <span
                  key={i}
                  className="text-lg font-bold text-zinc-600 transition-colors hover:text-zinc-400"
                >
                  {logo}
                </span>
              ))}
            </div>
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent" />
          </div>
        </Reveal>

        {/* Testimonials grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80} animation="scale-in">
              <div className="group relative h-full overflow-hidden rounded-2xl glass glass-hover p-8">
                {/* Quote mark */}
                <div className="absolute right-6 top-6 text-6xl font-bold text-purple-500/10">
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg
                      key={j}
                      className="h-4 w-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="relative text-sm leading-relaxed text-zinc-300">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-4 border-t border-white/5 pt-6">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.avatar} text-sm font-bold text-white`}
                  >
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      {t.name}
                    </div>
                    <div className="text-xs text-zinc-500">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}