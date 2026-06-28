"use client";

import { useEffect, useRef, useState } from "react";

type Track = {
  id: number;
  title: string;
  artist: string;
  duration: string;
  cover: string; // gradient class
  audioUrl?: string;
  plays: string;
  genre: string;
};

const tracks: Track[] = [
  {
    id: 1,
    title: "Echoes of Tomorrow — Main Mix",
    artist: "Luna Vega",
    duration: "3:42",
    cover: "from-purple-600 via-violet-600 to-indigo-600",
    plays: "1.2M",
    genre: "Synthwave / Pop",
    audioUrl: "",
  },
  {
    id: 2,
    title: "Midnight Requiem — Suite",
    artist: "Original Score",
    duration: "5:18",
    cover: "from-blue-600 via-cyan-600 to-teal-600",
    plays: "320K",
    genre: "Cinematic / Orchestral",
    audioUrl: "",
  },
  {
    id: 3,
    title: "Neon Dreams — Radio Edit",
    artist: "The Midnight Club",
    duration: "2:58",
    cover: "from-pink-600 via-rose-600 to-red-600",
    plays: "880K",
    genre: "R&B / Alternative",
    audioUrl: "",
  },
  {
    id: 4,
    title: "Velvet Nights — Intro",
    artist: "Sasha Rose",
    duration: "4:05",
    cover: "from-fuchsia-600 via-purple-600 to-violet-600",
    plays: "2.1M",
    genre: "Jazz / Soul",
    audioUrl: "",
  },
];

/**
 * Deterministic pseudo-waveform generator from a seed.
 */
function generateWaveform(seed: number, bars: number): number[] {
  const result: number[] = [];
  let s = seed;
  for (let i = 0; i < bars; i++) {
    s = (s * 9301 + 49297) % 233280;
    result.push(20 + (s / 233280) * 80);
  }
  return result;
}

export default function AudioPlayer() {
  const [activeTrack, setActiveTrack] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0–100
  const [hoverBar, setHoverBar] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const track = tracks[activeTrack];
  const WAVE_BARS = 120;
  const waveform = generateWaveform(track.id * 17 + 3, WAVE_BARS);

  // Simulate playback progress (no real audio file, but structure supports it)
  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            // Auto-advance to next track
            const nextIdx = (activeTrack + 1) % tracks.length;
            setActiveTrack(nextIdx);
            return 0;
          }
          return p + 0.4;
        });
      }, 50);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [playing, activeTrack]);

  const togglePlay = () => setPlaying(!playing);

  const selectTrack = (idx: number) => {
    if (idx === activeTrack) {
      togglePlay();
    } else {
      setActiveTrack(idx);
      setProgress(0);
      setPlaying(true);
    }
  };

  const seekTo = (barIndex: number) => {
    const pct = (barIndex / WAVE_BARS) * 100;
    setProgress(pct);
  };

  const currentBar = Math.floor((progress / 100) * WAVE_BARS);

  // Format time from progress
  const formatTime = (pct: number) => {
    const totalSec = track.duration;
    const [min, sec] = totalSec.split(":").map(Number);
    const totalSeconds = min * 60 + sec;
    const current = Math.floor((pct / 100) * totalSeconds);
    const m = Math.floor(current / 60);
    const s = Math.floor(current % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <section id="listen" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute right-1/3 bottom-0 h-[300px] w-[300px] rounded-full bg-pink-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-medium text-purple-300">
            Listen
          </div>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
            Sound <span className="gradient-text">Player</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Stream selected productions, scores, and mixes right here.
          </p>
        </div>

        {/* Main Player */}
        <div className="overflow-hidden rounded-3xl glass p-6 sm:p-8">
          {/* Track Info Bar */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Cover art */}
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-20">
              <div className={`absolute inset-0 bg-gradient-to-br ${track.cover}`} />
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)",
                }}
              />
              {/* Play button overlay */}
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all hover:bg-black/50"
                aria-label={playing ? "Pause" : "Play"}
              >
                {playing ? (
                  <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                  </svg>
                ) : (
                  <svg className="h-7 w-7 translate-x-0.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Track meta */}
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center gap-2">
                <span className="text-xs font-medium text-purple-400">{track.genre}</span>
                <span className="text-xs text-zinc-600">·</span>
                <span className="text-xs text-zinc-500">{track.plays} plays</span>
              </div>
              <h3 className="truncate text-base font-bold text-white sm:text-lg">
                {track.title}
              </h3>
              <p className="truncate text-sm text-zinc-400">{track.artist}</p>
            </div>

            {/* Duration / time */}
            <div className="hidden shrink-0 text-right sm:block">
              <div className="font-mono text-sm text-zinc-300">
                {formatTime(progress)} / {track.duration}
              </div>
            </div>
          </div>

          {/* Waveform */}
          <div className="mt-6">
            <div
              className="relative flex h-20 cursor-pointer items-center gap-[2px]"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const pct = (x / rect.width) * 100;
                setProgress(Math.max(0, Math.min(100, pct)));
              }}
            >
              {waveform.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-full transition-colors duration-150"
                  style={{
                    height: `${hoverBar === i ? Math.min(100, h * 1.2) : h}%`,
                    background:
                      i <= currentBar
                        ? "linear-gradient(180deg, #a855f7, #ec4899)"
                        : hoverBar === i
                          ? "rgba(168, 85, 247, 0.5)"
                          : "rgba(255, 255, 255, 0.12)",
                  }}
                  onMouseEnter={() => setHoverBar(i)}
                  onMouseLeave={() => setHoverBar(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    seekTo(i);
                  }}
                />
              ))}
            </div>

            {/* Time bar (mobile) */}
            <div className="mt-2 flex items-center justify-between sm:hidden">
              <span className="font-mono text-xs text-zinc-400">{formatTime(progress)}</span>
              <span className="font-mono text-xs text-zinc-500">{track.duration}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            {/* Prev / Play / Next */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  const prev = (activeTrack - 1 + tracks.length) % tracks.length;
                  setActiveTrack(prev);
                  setProgress(0);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 transition-all hover:bg-white/10 hover:text-white"
                aria-label="Previous"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                </svg>
              </button>

              <button
                onClick={togglePlay}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white transition-all hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
                aria-label={playing ? "Pause" : "Play"}
              >
                {playing ? (
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              <button
                onClick={() => {
                  const next = (activeTrack + 1) % tracks.length;
                  setActiveTrack(next);
                  setProgress(0);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 transition-all hover:bg-white/10 hover:text-white"
                aria-label="Next"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                </svg>
              </button>
            </div>

            {/* Volume (decorative) */}
            <div className="hidden items-center gap-2 sm:flex">
              <svg className="h-5 w-5 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
              </svg>
              <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Playlist */}
        <div className="mt-6 overflow-hidden rounded-2xl glass">
          <div className="border-b border-white/5 px-6 py-4">
            <h4 className="text-sm font-bold text-white">Up Next</h4>
          </div>
          <div className="divide-y divide-white/5">
            {tracks.map((t, i) => (
              <button
                key={t.id}
                onClick={() => selectTrack(i)}
                className={`group flex w-full items-center gap-4 px-6 py-4 text-left transition-all ${
                  i === activeTrack
                    ? "bg-purple-500/10"
                    : "hover:bg-white/5"
                }`}
              >
                {/* Index / Playing indicator */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                  {i === activeTrack && playing ? (
                    <div className="flex h-4 items-end gap-0.5">
                      {[0, 1, 2].map((b) => (
                        <div
                          key={b}
                          className="w-1 rounded-full bg-purple-400 wave-bar"
                          style={{ animationDelay: `${b * 0.15}s`, height: "100%" }}
                        />
                      ))}
                    </div>
                  ) : (
                    <span
                      className={`text-sm font-mono ${
                        i === activeTrack ? "text-purple-400" : "text-zinc-500"
                      } group-hover:hidden`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  )}
                  {i !== activeTrack && (
                    <svg
                      className="hidden h-4 w-4 text-white group-hover:block"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>

                {/* Mini cover */}
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg">
                  <div className={`absolute inset-0 bg-gradient-to-br ${t.cover}`} />
                </div>

                {/* Title */}
                <div className="min-w-0 flex-1">
                  <div
                    className={`truncate text-sm font-medium ${
                      i === activeTrack ? "text-purple-400" : "text-white"
                    }`}
                  >
                    {t.title}
                  </div>
                  <div className="truncate text-xs text-zinc-500">{t.artist}</div>
                </div>

                {/* Genre */}
                <div className="hidden shrink-0 text-xs text-zinc-500 md:block">
                  {t.genre}
                </div>

                {/* Plays */}
                <div className="hidden shrink-0 items-center gap-1.5 text-xs text-zinc-500 sm:flex">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  {t.plays}
                </div>

                {/* Duration */}
                <div className="shrink-0 font-mono text-xs text-zinc-500">
                  {t.duration}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}