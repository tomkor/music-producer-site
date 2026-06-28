"use client";

import Reveal from "./Reveal";

const posts = [
  {
    category: "Studio Diary",
    title: "Inside the Mix: How I Engineered \"Echoes of Tomorrow\"",
    excerpt:
      "A deep dive into the production process behind Luna Vega's hit single — from initial demo to final master. Layering, parallel compression, and the secret sauce.",
    date: "Jun 15, 2026",
    readTime: "8 min read",
    gradient: "from-purple-600 via-violet-600 to-indigo-600",
    featured: true,
  },
  {
    category: "Film Scoring",
    title: "Scoring for Emotion: The Midnight Requiem Story",
    excerpt:
      "How I approached the emotional landscape of Marcus Chen's latest film, blending orchestral arrangements with electronic textures.",
    date: "Jun 8, 2026",
    readTime: "6 min read",
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
    featured: false,
  },
  {
    category: "Production Tips",
    title: "5 Mixing Techniques That Transform Your Low End",
    excerpt:
      "The low end can make or break a mix. Here are five proven techniques I use on every project to achieve punchy, clear bass.",
    date: "May 28, 2026",
    readTime: "5 min read",
    gradient: "from-pink-600 via-rose-600 to-red-600",
    featured: false,
  },
  {
    category: "Industry",
    title: "The State of Music Production in 2026",
    excerpt:
      "AI tools, spatial audio, and the return of analog — my thoughts on where music production is heading this year.",
    date: "May 20, 2026",
    readTime: "7 min read",
    gradient: "from-amber-600 via-orange-600 to-yellow-600",
    featured: false,
  },
  {
    category: "Gear",
    title: "My Go-To Plugins for Every Session in 2026",
    excerpt:
      "A complete rundown of the plugins I reach for first — from EQs and compressors to reverbs and creative tools.",
    date: "May 10, 2026",
    readTime: "4 min read",
    gradient: "from-emerald-600 via-green-600 to-lime-600",
    featured: false,
  },
  {
    category: "Behind the Scenes",
    title: "Recording Live Strings in Studio A",
    excerpt:
      "Behind the scenes of recording a 24-piece string section for the upcoming Aurora Sound EP. Mic placement, room acoustics, and more.",
    date: "Apr 28, 2026",
    readTime: "6 min read",
    gradient: "from-fuchsia-600 via-purple-600 to-violet-600",
    featured: false,
  },
];

export default function Blog() {
  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);

  return (
    <section id="blog" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-1/4 h-[350px] w-[350px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="absolute left-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-purple-600/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-medium text-purple-300">
              News & Insights
            </div>
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Latest from the <span className="gradient-text">Studio</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-zinc-400">
              Production tips, behind-the-scenes stories, and thoughts on the
              craft of music making.
            </p>
          </div>
          <a
            href="#blog"
            className="hidden shrink-0 items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-purple-500 hover:bg-purple-500/10 sm:inline-flex"
          >
            View All Articles
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

        {/* Featured Post */}
        <Reveal animation="scale-in">
          <article className="group relative mb-8 grid overflow-hidden rounded-3xl glass glass-hover lg:grid-cols-2">
            {/* Visual */}
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              <div className={`absolute inset-0 bg-gradient-to-br ${featured.gradient}`} />
              {/* Pattern */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.3) 0%, transparent 50%)",
                }}
              />
              {/* Featured badge */}
              <div className="absolute left-6 top-6 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                ★ Featured
              </div>
              {/* Category */}
              <div className="absolute bottom-6 left-6 rounded-full bg-black/40 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                {featured.category}
              </div>
              {/* Hover play icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                  <svg className="h-8 w-8 translate-x-0.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <div className="mb-4 flex items-center gap-3 text-xs text-zinc-500">
                <span>{featured.date}</span>
                <span className="text-zinc-700">•</span>
                <span>{featured.readTime}</span>
              </div>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                {featured.excerpt}
              </p>
              <div className="mt-8">
                <a
                  href="#blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 transition-all hover:gap-3 hover:text-purple-300"
                >
                  Read Article
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
              </div>
            </div>
          </article>
        </Reveal>

        {/* Regular Posts Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.title} delay={i * 80} animation="scale-in">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass glass-hover">
                {/* Cover */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} transition-transform duration-500 group-hover:scale-110`} />
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                    }}
                  />
                  {/* Category */}
                  <div className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2 text-[10px] text-zinc-500">
                    <span>{post.date}</span>
                    <span className="text-zinc-700">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold leading-snug text-white">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <a
                      href="#blog"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 transition-all hover:gap-3 hover:text-purple-300"
                    >
                      Read More
                      <svg
                        className="h-3.5 w-3.5"
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
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Mobile "View All" button */}
        <Reveal className="mt-8 text-center sm:hidden">
          <a
            href="#blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-purple-500 hover:bg-purple-500/10"
          >
            View All Articles
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