import { useState } from "react";
import { Play } from "lucide-react";

const albums = [
  {
    id: "kerning",
    title: "Kerning & Yearning",
    genre: "Design Systems & Typography",
    accent: "#ffe14d",
    tracks: [
      { num: "01", title: "Pixel Perfect Pitch", duration: "45 min" },
      { num: "02", title: "The Token Economy", duration: "30 min" },
      { num: "03", title: "Responsive Rhapsody", duration: "40 min" },
      { num: "04", title: "Figma My Heart", duration: "35 min" },
    ],
  },
  {
    id: "sideeffects",
    title: "Side Effects May Include: Joy",
    genre: "Engineering & Craft",
    accent: "#ff2d78",
    tracks: [
      { num: "01", title: "Async & Awaiting for You", duration: "40 min" },
      { num: "02", title: "Promise Me Anything", duration: "30 min" },
      { num: "03", title: "Hooked on a Feeling", duration: "45 min" },
      { num: "04", title: "Refactor Me Tender", duration: "35 min" },
    ],
  },
  {
    id: "ai",
    title: "The Artificial Intelligence of Love",
    genre: "AI & Product",
    accent: "#00b3ff",
    tracks: [
      { num: "01", title: "AI Will Always Love You", duration: "50 min" },
      { num: "02", title: "Prompt and Circumstance", duration: "35 min" },
      { num: "03", title: "Hallucinations of Grandeur", duration: "30 min" },
      { num: "04", title: "Model Behavior", duration: "40 min" },
    ],
  },
];

export function Setlist() {
  const [active, setActive] = useState(albums[0].id);
  const album = albums.find((a) => a.id === active)!;

  return (
    <section id="setlist" className="border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="font-mono-label text-[11px] text-foreground/60 mb-4">THE SETLIST · ALBUMS &amp; TRACKS</div>
        <h2
          style={{ fontFamily: "'Figma Sans VF', sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          className="max-w-[820px] mb-10"
        >
          Three albums. Forty-eight tracks. One unforgettable encore.
        </h2>

        <div className="flex flex-wrap gap-2 mb-8">
          {albums.map((a) => (
            <button
              key={a.id}
              onClick={() => setActive(a.id)}
              className={`font-mono-label text-[11px] px-4 h-9 rounded-sm border transition-colors ${
                a.id === active
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-foreground/70 hover:text-foreground hover:border-foreground"
              }`}
            >
              {a.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <div
              className="aspect-square rounded-sm flex items-end p-6"
              style={{ background: album.accent }}
            >
              <div>
                <div className="font-mono-label text-[10px] text-black/70">{album.genre}</div>
                <div
                  style={{ fontFamily: "'Figma Sans VF', sans-serif", fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", color: "#0a0a0a" }}
                  className="leading-tight"
                >
                  {album.title}
                </div>
              </div>
            </div>
          </div>

          <ul className="md:col-span-8 divide-y divide-border border-y border-border">
            {album.tracks.map((t) => (
              <li key={t.num} className="group flex items-center gap-5 px-2 py-4 hover:bg-muted/60 cursor-pointer transition-colors">
                <span className="font-mono-label text-[11px] text-foreground/50 w-8">{t.num}</span>
                <button
                  className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label={`Play ${t.title}`}
                >
                  <Play size={12} fill="currentColor" />
                </button>
                <span className="flex-1" style={{ fontFamily: "'Figma Sans VF', sans-serif", fontSize: "1.25rem" }}>
                  {t.title}
                </span>
                <span className="font-mono-label text-[11px] text-foreground/60">{t.duration}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
