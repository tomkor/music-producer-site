"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", project: "", budget: "", message: "" });
    }, 3000);
  };

  const projectTypes = [
    "Album Production",
    "Single / EP",
    "Film / TV Score",
    "Mixing & Mastering",
    "Sound Design",
    "Other",
  ];

  const budgets = [
    "Under $5K",
    "$5K – $15K",
    "$15K – $50K",
    "$50K – $100K",
    "$100K+",
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-pink-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left: Info */}
          <Reveal animation="slide-left">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-medium text-purple-300">
                Get in Touch
              </div>
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
                Let&apos;s create
                <br />
                <span className="gradient-text">something great</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                Whether you&apos;re an artist looking to bring your vision to
                life, a filmmaker needing the perfect score, or a label seeking
                a reliable production partner — I&apos;d love to hear about
                your project.
              </p>

              {/* Contact methods */}
              <div className="mt-10 space-y-4">
                {[
                  {
                    icon: "✉️",
                    label: "Email",
                    value: "hello@alexmason.com",
                    href: "mailto:hello@alexmason.com",
                  },
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "+1 (555) 123-4567",
                    href: "tel:+15551234567",
                  },
                  {
                    icon: "📍",
                    label: "Studio",
                    value: "Los Angeles, CA · Worldwide",
                    href: null,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-xl glass p-4 transition-all hover:border-purple-500/30"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500">{item.label}</div>
                      <a
                        href={item.href ?? "#"}
                        className="text-sm font-medium text-white transition-colors hover:text-purple-400"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-8">
                <p className="mb-3 text-sm text-zinc-400">Follow my work</p>
                <div className="flex gap-3">
                  {[
                    { name: "Instagram", icon: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.985 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zm0 10.162c-2.21 0-4-1.79-4-4 0-2.21 1.79-4 4-4 2.21 0 4 1.79 4 4 0 2.21-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" },
                    { name: "YouTube", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                    { name: "Spotify", icon: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.479-1.021.24-2.82-1.74-6.384-2.101-10.579-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.721.18 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.581-11.939-1.439-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.149-1.2-.15-1.349-.721-.15-.6.15-1.2.72-1.349C9.42 5.939 16.44 6.24 20.64 8.94c.54.301.721 1.02.419 1.56-.299.421-1.02.599-1.559.3z" },
                    { name: "SoundCloud", icon: "M1.175 12.225c-.051 0-.094.046-.103.1l-.233 1.737.233 1.704c.009.058.052.102.103.102.052 0 .094-.044.102-.102l.279-1.704-.279-1.737c-.008-.054-.05-.1-.102-.1m-.899.828c-.05 0-.09.044-.099.099L0 14.062l.176 1.05c.01.055.05.098.1.098.05 0 .09-.043.099-.098l.21-1.05-.21-.91c-.01-.056-.05-.099-.1-.099m1.83-1.207c-.061 0-.111.05-.12.111l-.21 2.105.21 2.07c.009.061.059.111.12.111.06 0 .11-.05.119-.111l.24-2.07-.24-2.105c-.009-.061-.059-.111-.119-.111m.961-.084c-.07 0-.13.06-.13.13l-.22 2.27.22 2.201c0 .071.06.131.13.131.07 0 .13-.06.139-.131l.25-2.201-.25-2.27c-.009-.07-.069-.13-.139-.13m1.01-.042c-.08 0-.149.069-.149.149l-.21 2.331.21 2.261c0 .081.069.149.149.149.08 0 .149-.068.159-.149l.24-2.261-.24-2.331c-.01-.08-.079-.149-.159-.149m1.014-.025c-.089 0-.159.07-.168.159l-.2 2.451.2 2.349c.009.089.079.159.168.159.09 0 .16-.07.17-.159l.23-2.349-.23-2.451c-.01-.089-.08-.159-.17-.159m1.029-.009c-.099 0-.179.08-.189.179l-.19 2.49.19 2.39c.01.099.09.179.189.179.099 0 .179-.08.189-.179l.22-2.39-.22-2.49c-.01-.099-.09-.179-.189-.179m1.035.009c-.108 0-.198.09-.198.198l-.18 2.461.18 2.39c0 .108.09.198.198.198.108 0 .198-.09.207-.198l.21-2.39-.21-2.461c-.009-.108-.099-.198-.207-.198m1.024-.022c-.119 0-.207.09-.217.207l-.17 2.481.17 2.37c.01.119.098.207.217.207.117 0 .207-.098.217-.207l.2-2.37-.2-2.481c-.01-.119-.1-.207-.217-.207m1.029.012c-.126 0-.225.099-.234.225l-.16 2.471.16 2.339c.009.126.108.225.234.225.126 0 .225-.099.234-.225l.189-2.339-.189-2.471c-.009-.126-.108-.225-.234-.225m1.024-.016c-.135 0-.243.108-.252.243l-.15 2.461.15 2.329c.009.135.117.243.252.243.135 0 .243-.108.252-.243l.18-2.329-.18-2.461c-.009-.135-.117-.243-.252-.243m1.024.014c-.144 0-.261.117-.27.261l-.14 2.431.14 2.31c.009.144.126.261.27.261.144 0 .261-.117.27-.261l.171-2.31-.171-2.431c-.009-.144-.126-.261-.27-.261m1.024.02c-.153 0-.279.126-.288.279l-.13 2.4.13 2.279c.009.153.135.279.288.279.153 0 .279-.126.288-.279l.162-2.279-.162-2.4c-.009-.153-.135-.279-.288-.279m1.024.03c-.162 0-.297.135-.306.297l-.12 2.351.12 2.25c.009.162.144.297.306.297.162 0 .297-.135.306-.297l.153-2.25-.153-2.351c-.009-.162-.144-.297-.306-.297m1.024.041c-.171 0-.315.144-.324.315l-.11 2.301.11 2.229c.009.171.153.315.324.315.171 0 .315-.144.324-.315l.144-2.229-.144-2.301c-.009-.171-.153-.315-.324-.315m1.024.053c-.18 0-.333.153-.342.333l-.1 2.25.1 2.199c.009.18.162.333.342.333.18 0 .333-.153.342-.333l.135-2.199-.135-2.25c-.009-.18-.162-.333-.342-.333m1.024.063c-.189 0-.351.162-.36.351l-.09 2.199.09 2.16c.009.189.171.351.36.351.189 0 .351-.162.36-.351l.126-2.16-.126-2.199c-.009-.189-.171-.351-.36-.351m1.024.075c-.198 0-.369.171-.378.369l-.08 2.148.08 2.13c.009.198.18.369.378.369.198 0 .369-.171.378-.369l.117-2.13-.117-2.148c-.009-.198-.18-.369-.378-.369m1.024.086c-.207 0-.387.18-.396.387l-.07 2.1.07 2.07c.009.207.189.387.396.387.207 0 .387-.18.396-.387l.108-2.07-.108-2.1c-.009-.207-.189-.387-.396-.387m1.024.097c-.216 0-.405.189-.414.405l-.06 2.055.06 2.025c.009.216.198.405.414.405.216 0 .405-.189.414-.405l.099-2.025-.099-2.055c-.009-.216-.198-.405-.414-.405m1.024.108c-.225 0-.423.198-.432.423l-.05 2.01.05 1.98c.009.225.207.423.432.423.225 0 .423-.198.432-.423l.09-1.98-.09-2.01c-.009-.225-.207-.423-.432-.423m1.024.12c-.234 0-.441.207-.45.441l-.04 1.965.04 1.95c.009.234.216.441.45.441.234 0 .441-.207.45-.441l.081-1.95-.081-1.965c-.009-.234-.216-.441-.45-.441" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      aria-label={social.name}
                      className="flex h-11 w-11 items-center justify-center rounded-xl glass transition-all hover:border-purple-500/40 hover:bg-purple-500/10"
                    >
                      <svg
                        className="h-5 w-5 fill-zinc-400 transition-colors hover:fill-white"
                        viewBox="0 0 24 24"
                      >
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal animation="slide-right" delay={200}>
            <div className="rounded-3xl glass p-8 sm:p-10">
              {sent ? (
                <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                    <svg
                      className="h-10 w-10 text-white"
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
                  </div>
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="mt-2 text-zinc-400">
                    Thanks for reaching out. I&apos;ll get back to you within
                    24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-300">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-purple-500 focus:bg-purple-500/5"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-300">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-purple-500 focus:bg-purple-500/5"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-300">
                      Project Type
                    </label>
                    <select
                      required
                      value={form.project}
                      onChange={(e) =>
                        setForm({ ...form, project: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all focus:border-purple-500 focus:bg-purple-500/5"
                    >
                      <option value="" className="bg-zinc-900">
                        Select a project type
                      </option>
                      {projectTypes.map((p) => (
                        <option key={p} value={p} className="bg-zinc-900">
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-300">
                      Budget Range
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setForm({ ...form, budget: b })}
                          className={`rounded-lg border px-3 py-2 text-xs font-medium transition-all ${
                            form.budget === b
                              ? "border-purple-500 bg-purple-500/20 text-white"
                              : "border-white/10 bg-white/5 text-zinc-400 hover:border-purple-500/30"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-300">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-purple-500 focus:bg-purple-500/5"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold text-white transition-all hover:shadow-2xl hover:shadow-purple-500/30"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Message
                      <svg
                        className="h-5 w-5 transition-transform group-hover:translate-x-1"
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
                    </span>
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}