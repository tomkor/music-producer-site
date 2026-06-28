"use client";

import Reveal from "./Reveal";

const works = [
  {
    title: "Echoes of Tomorrow",
    category: "Album Production",
    year: "2024",
    artist: "Luna Vega",
    streams: "12M+",
    gradient: "from-purple-600 via-violet-600 to-indigo-600",
    tags: ["Pop", "Electronic", "Synthwave"],
  },
  {
    title: "Midnight Requiem",
    category: "Film Score",
    year: "2024",
    artist: "Nexus Films",
    streams: "Film Festival",
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
    tags: ["Orchestral", "Cinematic", "Drama"],
  },
  {
    title: "Neon Dreams",
    category: "Single",
    year: "2023",
    artist: "The Midnight Club",
    streams: "8M+",
    gradient: "from-pink-600 via-rose-600 to-red-600",
    tags: ["Pop", "R&B", "Alternative"],
  },
  {
    title: "Beyond the Horizon",
    category: "EP Production",
    year: "2023",
    artist: "Aurora Sound",
    streams: "5M+",
    gradient: "from-amber-600 via-orange-600 to-yellow-600",
    tags: ["Indie", "Folk", "Electronic"],
  },
  {
    title: "Cyber Symphony",
    category: "Game Soundtrack",
    year: "2023",
    artist: "Pulse Interactive",
    streams: "Released",
    gradient: "from-emerald-600 via-green-600 to-lime-600",
    tags: ["Electronic", "Hybrid", "Game Audio"],
  },
  {
    title: "Velvet Nights",
    category: "Album Production",
    year: "2022",
    artist: "Sasha Rose",
    streams: "15M+",
    gradient: "from-fuchsia-600 via-purple-600 to-violet-600",
    tags: ["Jazz", "Soul", "Electronic"],
  },
];

export default function Works() {
  return (
    <section id="works" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-medium text-purple-300">
            Portfolio
          </div>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
            Selected <span className="gradient-text">Works</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            A showcase of productions, scores, and collaborations that define
            my sound.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, i) => (
            <Reveal key={work.title} delay={i * 80} animation="scale-in">
              <div className="group relative overflow-hidden rounded-2xl glass glass-hover">
                {/* Cover art */}
                <div className="relative aspect-square overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${work.gradient}`}
                  />
                  {/* Pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.3) 0%, transparent 50%)`,
                    }}
                  />

                  {/* Play button on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                      <svg
                        className="h-8 w-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Year badge */}
                  <div className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {work.year}
                  </div>

                  {/* Stream count */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur-sm">
                    <svg
                      className="h-3 w-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    {work.streams}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="mb-2 text-xs font-medium text-purple-400">
                    {work.category}
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {work.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">{work.artist}</p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all hover:border-purple-500 hover:bg-purple-500/10"
          >
            View Full Discography
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}