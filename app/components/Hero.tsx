"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px] animate-float" />
        <div
          className="absolute -right-40 top-40 h-[400px] w-[400px] rounded-full bg-pink-600/20 blur-[120px] animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px] animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div
          className={`mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 ${
            mounted ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500" />
          </span>
          Available for new projects
        </div>

        {/* Title */}
        <h1
          className={`text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl ${
            mounted ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          <span className="block text-white">Crafting Sound</span>
          <span className="block gradient-text text-glow">Into Emotion</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`mx-auto mt-8 max-w-2xl text-lg text-zinc-400 sm:text-xl ${
            mounted ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          Award-winning music producer & composer. I turn ideas into
          sonic experiences — from chart-topping records to cinematic film
          scores and immersive sound design.
        </p>

        {/* CTAs */}
        <div
          className={`mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row ${
            mounted ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.6s", animationFillMode: "both" }}
        >
          <a
            href="#works"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-pink-600 to-purple-600 transition-transform duration-500 group-hover:translate-x-0" />
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition-all hover:border-purple-500 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/20"
          >
            Start a Project
          </a>
        </div>

        {/* Stats */}
        <div
          className={`mt-20 grid grid-cols-3 gap-8 ${
            mounted ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.8s", animationFillMode: "both" }}
        >
          {[
            { value: "15+", label: "Years Experience" },
            { value: "200+", label: "Projects Completed" },
            { value: "50M+", label: "Streams Worldwide" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold gradient-text sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-zinc-500 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-2">
          <div className="h-2 w-1 animate-bounce rounded-full bg-gradient-to-b from-purple-500 to-pink-500" />
        </div>
      </div>

      {/* Audio wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex h-16 items-end justify-center gap-1 overflow-hidden opacity-20">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="wave-bar w-1 bg-gradient-to-t from-purple-500 to-pink-500"
            style={{
              animationDelay: `${i * 0.05}s`,
              height: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
}