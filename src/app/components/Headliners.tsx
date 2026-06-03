const headliners = [
  {
    name: "Maya Goldberg",
    role: "Principal Designer, Horizon Studio",
    song: "Pixels Don’t Lie",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=480&fit=crop&auto=format",
  },
  {
    name: "Tarek El-Amin",
    role: "Staff Engineer, Vercel",
    song: "Async & Awaiting for You",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=480&fit=crop&auto=format",
  },
  {
    name: "Priya Suresh",
    role: "Head of AI Products, Anthropic",
    song: "AI Will Always Love You",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=480&fit=crop&auto=format",
  },
  {
    name: "Jonas Wick",
    role: "Design Systems Lead, Stripe",
    song: "The Token Economy",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=480&fit=crop&auto=format",
  },
];

const features = [
  {
    eyebrow: "WHAT YOU’LL LEARN",
    body: "Three days of talks, jam sessions, and live performances from the artists shaping product design, AI, and the tools we build with every day.",
  },
  {
    eyebrow: "WHAT TO EXPECT",
    body: "Headliner keynotes, intimate workshop sets, a hands-on Make Studio, late-night listening parties, and merch you’ll actually wear.",
  },
  {
    eyebrow: "WHO YOU’LL MEET",
    body: "Designers, engineers, PMs, founders, and the occasional touring musician — all sharing the same setlist of curiosity and craft.",
  },
];

export function Headliners() {
  return (
    <section id="lineup" className="border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="font-mono-label text-[11px] text-foreground/60 mb-4">THE LINEUP</div>
        <h2
          style={{ fontFamily: "'Figma Sans VF', sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          className="max-w-[820px] mb-12"
        >
          Meet the makers on the leading edge of design, development, and AI.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {headliners.map((h) => (
            <div key={h.name} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-muted rounded-sm">
                <img
                  src={h.img}
                  alt={h.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="pt-3">
                <div style={{ fontFamily: "'Figma Sans VF', sans-serif" }} className="text-lg leading-tight">{h.name}</div>
                <div className="font-mono-label text-[10px] text-foreground/60 mt-1">{h.role}</div>
                <div className="text-xs text-foreground/70 mt-2 italic">“{h.song}”</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 pt-10 border-t border-border">
          {features.map((f) => (
            <div key={f.eyebrow}>
              <div className="font-mono-label text-[11px] text-foreground/60 mb-3">{f.eyebrow}</div>
              <p className="text-sm leading-relaxed text-foreground/85 max-w-[340px]">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
