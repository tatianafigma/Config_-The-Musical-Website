import { useState } from "react";
import { Pause, Play, Menu, X } from "lucide-react";

const tickerMessages = [
  "In-person tickets have sold out. Join us virtually for free.",
  "Watch parties in 80+ cities — find one near you.",
  "Config: The Musical · June 23–25, 2026 · Moscone Center, SF",
  "New track dropped: “Async & Awaiting for You” — listen now.",
];

const navItems = [
  { label: "AGENDA", href: "#setlist" },
  { label: "SPEAKERS", href: "#lineup" },
  { label: "FAQ", href: "#venue" },
];

export function Navbar() {
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState(false);

  // Repeat enough copies for seamless marquee
  const ticker = Array(2).fill(tickerMessages).flat();

  return (
    <header
      className="sticky top-0 z-50 bg-background border-b border-border"
      role="banner"
    >
      <div className="flex items-stretch h-14">
        {/* Left: scrolling ticker */}
        <div className="flex-1 relative overflow-hidden flex items-center">
          <div
            className="flex gap-12 whitespace-nowrap pr-12"
            style={{
              animation: "config-marquee 50s linear infinite",
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {ticker.map((msg, i) => (
              <span
                key={i}
                className="font-mono-label text-[12px] text-foreground/85 flex items-center gap-3"
              >
                {msg}
                <span aria-hidden className="text-foreground/60">→</span>
              </span>
            ))}
          </div>

          {/* Pause/play button */}
          <button
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play ticker" : "Pause ticker"}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-105 transition-transform"
          >
            {paused ? <Play size={11} fill="currentColor" /> : <Pause size={11} fill="currentColor" />}
          </button>

          {/* Fade edge */}
          <div
            className="pointer-events-none absolute right-12 top-0 bottom-0 w-16"
            style={{ background: "linear-gradient(to right, transparent, var(--background))" }}
          />
        </div>

        {/* Right: nav links */}
        <nav className="hidden md:flex items-center gap-10 px-8 border-l border-border" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono-label text-[12px] tracking-[0.12em] text-foreground/85 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <span className="w-px h-5 bg-border ml-2" aria-hidden />
          <a
            href="#login"
            className="font-mono-label text-[12px] tracking-[0.12em] text-foreground/85 hover:text-foreground transition-colors"
          >
            LOG IN
          </a>
          <a
            href="#register"
            className="font-mono-label text-[12px] tracking-[0.12em] px-5 h-9 inline-flex items-center border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors rounded-sm"
          >
            REGISTER
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden px-4 border-l border-border"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-mono-label text-[12px] text-foreground/85"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#login"
              onClick={() => setOpen(false)}
              className="font-mono-label text-[12px] text-foreground/85"
            >
              LOG IN
            </a>
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center h-9 border border-foreground font-mono-label text-[12px]"
            >
              REGISTER
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes config-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </header>
  );
}
