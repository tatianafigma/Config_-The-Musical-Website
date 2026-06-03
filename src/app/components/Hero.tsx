import { ConfigMark, HeroTiles } from "./ConfigMark";

export function Hero() {
  return (
    <section className="relative border-b border-border" id="top">
      <div className="max-w-[1400px] mx-auto px-6 pt-8 pb-10">
        {/* Top row: wordmark + meta */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-7 lg:col-span-8 flex items-end gap-4 flex-wrap">
            <ConfigMark height={120} color="#ffffff" />
            <div className="pb-3 leading-tight">
              <div
                style={{ fontFamily: "'Aguafina Script', cursive", fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)" }}
                className="text-foreground"
              >
                The Musical
              </div>
            </div>
          </div>

          <div className="md:col-span-5 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <p className="text-sm leading-snug text-foreground/90 max-w-[240px] font-[Figma_Sans_VF]">
              Figma’s conference for people who build products — performed in three-part harmony.
            </p>
            <div className="font-mono-label text-[10px] text-foreground/70 space-y-2">
              <div>
                JUNE 23–25, 2026<br />
                SAN FRANCISCO, CA
              </div>
              <div>
                MOSCONE CENTER<br />
                IN-PERSON &amp; VIRTUAL
              </div>
            </div>
          </div>
        </div>

        {/* Middle: 4 musical tiles */}
        <div className="mt-8">
          <HeroTiles />
        </div>

        {/* Bottom: big headline */}
        <h1
          style={{ fontFamily: "'Figma Sans VF', sans-serif", fontSize: "45px", lineHeight: 1.05, letterSpacing: "-0.005em" }}
          className="mt-10 max-w-[1100px] text-foreground"
        >
          We decided to go MUSICAL in 2026. We're not one of those boring conferences - we're a cool conference. This is a conference celebrating design, development and AI with rock, rap and more!
        </h1>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#register"
            className="inline-flex items-center justify-center h-12 px-8 bg-foreground text-background font-mono-label text-[12px] rounded-sm hover:bg-foreground/85 transition-colors"
          >
            REGISTER
          </a>
          <a
            href="#setlist"
            className="inline-flex items-center justify-center h-12 px-8 border border-foreground text-foreground font-mono-label text-[12px] rounded-sm hover:bg-foreground hover:text-background transition-colors"
          >
            VIEW THE SETLIST
          </a>
        </div>
      </div>
    </section>
  );
}
