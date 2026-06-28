"use client";

import Reveal from "./Reveal";

export default function About() {
  const skills = [
    { name: "Music Production", level: 98 },
    { name: "Film Scoring", level: 95 },
    { name: "Mixing & Mastering", level: 92 },
    { name: "Sound Design", level: 88 },
    { name: "Arrangement", level: 94 },
    { name: "Audio Post-Production", level: 90 },
  ];

  const tools = [
    "Logic Pro",
    "Pro Tools",
    "Ableton Live",
    "Native Instruments",
    "Waves",
    "FabFilter",
    "Soundtoys",
    "Valhalla",
    "Spitfire Audio",
    "Serum",
    "UAD",
    "iZotope",
  ];

  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Image / Visual */}
          <Reveal animation="slide-left">
            <div className="relative">
              {/* Studio image placeholder */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl glass">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-zinc-900 to-pink-900/30" />
                {/* Studio desk mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full p-8">
                    {/* Mixer */}
                    <div className="mb-6 rounded-2xl glass p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex gap-2">
                          <div className="h-3 w-3 rounded-full bg-red-500/70" />
                          <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                          <div className="h-3 w-3 rounded-full bg-green-500/70" />
                        </div>
                        <div className="font-mono text-xs text-zinc-500">
                          STUDIO A
                        </div>
                      </div>
                      {/* Channel strips */}
                      <div className="flex gap-2">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div key={i} className="flex flex-1 flex-col gap-1">
                            <div className="h-1.5 rounded-full bg-zinc-700" />
                            <div className="flex items-end justify-center">
                              <div
                                className="w-2 rounded-full bg-gradient-to-t from-purple-500 to-pink-500"
                                style={{
                                  height: `${30 + Math.random() * 50}px`,
                                }}
                              />
                            </div>
                            <div className="h-1.5 rounded-full bg-zinc-700" />
                            <div className="mx-auto h-1.5 w-1.5 rounded-full bg-zinc-600" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Waveform */}
                    <div className="rounded-2xl glass p-4">
                      <div className="flex items-center gap-1" style={{ height: "80px" }}>
                        {Array.from({ length: 60 }).map((_, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-full bg-gradient-to-t from-purple-500 via-pink-500 to-blue-500"
                            style={{
                              height: `${20 + Math.abs(Math.sin(i * 0.3)) * 80}%`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-6 -top-6 animate-float">
                <div className="rounded-2xl glass p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-2xl">
                      🏆
                    </div>
                    <div>
                      <div className="text-sm font-bold">Grammy Nominee</div>
                      <div className="text-xs text-zinc-500">Best Producer 2024</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div
                className="absolute -bottom-4 -left-6 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="rounded-2xl glass p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-2xl">
                      🎬
                    </div>
                    <div>
                      <div className="text-sm font-bold">Film Composer</div>
                      <div className="text-xs text-zinc-500">20+ Feature Films</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Text */}
          <Reveal animation="slide-right" delay={200}>
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-medium text-purple-300">
                About Me
              </div>
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
                Where <span className="gradient-text">vision</span> meets{" "}
                <span className="gradient-text">sound</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                For over 15 years, I&apos;ve been shaping the sound of modern
                music and film. From intimate acoustic sessions to
                stadium-sized productions, I bring precision, emotion, and
                innovation to every project.
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-500">
                My work spans multiple genres — pop, electronic, orchestral,
                and hybrid film scoring. I&apos;ve collaborated with major
                labels, independent artists, and film studios worldwide,
                delivering productions that resonate with audiences and stand
                the test of time.
              </p>

              {/* Skills */}
              <div className="mt-10 space-y-4">
                {skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-medium text-zinc-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-zinc-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tools */}
              <div className="mt-10">
                <p className="mb-4 text-sm font-medium text-zinc-400">
                  Tools & Software
                </p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-purple-500/40 hover:text-purple-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}