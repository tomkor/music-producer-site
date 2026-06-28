"use client";

import Reveal from "./Reveal";

const services = [
  {
    icon: "🎛️",
    title: "Music Production",
    description:
      "Full-cycle production from concept to final master. Beat making, arrangement, recording, and creative direction tailored to your artistic vision.",
    features: ["Beat Making", "Arrangement", "Recording", "Creative Direction"],
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: "🎬",
    title: "Film & TV Scoring",
    description:
      "Cinematic scores that elevate storytelling. Orchestral arrangements, electronic soundscapes, and hybrid compositions for film, TV, and games.",
    features: ["Orchestral Scores", "Sound Design", "Cue Composition", "Spotting"],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: "🎚️",
    title: "Mixing & Mastering",
    description:
      "Professional mixing and mastering that makes your tracks sound polished, punchy, and competitive on every platform and system.",
    features: ["Mixing", "Mastering", "Stem Mastering", "Loudness Optimization"],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: "🎨",
    title: "Sound Design",
    description:
      "Custom sound design and synthesis for film, games, branding, and installations. Unique sonic textures that define your identity.",
    features: ["Synthesis", "Foley", "Ambient Textures", "Brand Audio"],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: "🎙️",
    title: "Artist Development",
    description:
      "Mentoring and developing artists to find their unique sound. From songwriting collaboration to full creative direction and A&R.",
    features: ["Songwriting", "Vocal Coaching", "A&R Direction", "Mentoring"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: "📡",
    title: "Audio Post-Production",
    description:
      "Complete audio post for film and broadcast — dialogue editing, ADR, foley, music editing, and final theatrical mix delivery.",
    features: ["Dialogue Edit", "ADR", "Foley", "Final Mix"],
    gradient: "from-indigo-500 to-purple-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[100px]" />
        <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] translate-x-1/2 rounded-full bg-pink-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-medium text-purple-300">
            What I Do
          </div>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
            Services <span className="gradient-text">Elevated</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            From the first note to the final mix — comprehensive audio services
            for artists, filmmakers, and brands.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 100} animation="scale-in">
              <div className="group relative h-full overflow-hidden rounded-2xl glass glass-hover p-8">
                {/* Hover gradient border */}
                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-[0.03]`} />
                </div>

                {/* Icon */}
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-2xl shadow-lg`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-zinc-500"
                    >
                      <svg
                        className="h-4 w-4 text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-purple-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}