import { ArrowRight } from "lucide-react";

const cards = [
  {
    eyebrow: "B-SIDES",
    title: "Attend a watch party",
    body: "Can’t make it to the main stage? Tune in with the local fan club — watch parties are happening in 80+ cities around the world.",
    cta: "Find a venue near you",
    accent: "#ffe14d",
  },
  {
    eyebrow: "GO ON TOUR",
    title: "Share your event",
    body: "Hosting your own listening party, jam session, or after-show? Add it to the official Config: The Musical tour calendar.",
    cta: "Submit your event",
    accent: "#ff2d78",
  },
];

export function WatchParty() {
  return (
    <section id="bsides" className="border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((c) => (
          <a
            key={c.title}
            href="#"
            className="group relative bg-card border border-border rounded-sm p-8 overflow-hidden hover:-translate-y-1 transition-transform"
          >
            <div className="font-mono-label text-[11px] text-foreground/60 mb-3">{c.eyebrow}</div>
            <h3
              style={{ fontFamily: "'Figma Sans VF', sans-serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              className="mb-4 max-w-[420px]"
            >
              {c.title}
            </h3>
            <p className="text-sm text-foreground/70 max-w-[440px] mb-6 leading-relaxed">{c.body}</p>
            <div className="inline-flex items-center gap-2 font-mono-label text-[11px]">
              {c.cta}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <div
              className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full opacity-90"
              style={{ background: c.accent }}
              aria-hidden
            />
          </a>
        ))}
      </div>
    </section>
  );
}
