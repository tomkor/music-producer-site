export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[200px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/5 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500" />
              <div className="absolute inset-[2px] flex items-center justify-center rounded-[10px] bg-[#0a0a0f]">
                <span className="text-lg font-bold gradient-text">A</span>
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight">
              Alex<span className="gradient-text">Mason</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {["About", "Services", "Listen", "Works", "Blog", "Clients", "Contact"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-zinc-400 transition-colors hover:text-purple-400"
                >
                  {link}
                </a>
              )
            )}
          </div>

          {/* Copyright */}
          <div className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Alex Mason. All rights reserved.
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-zinc-600">
            Crafted with passion for sound · Designed and built with Next.js &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}