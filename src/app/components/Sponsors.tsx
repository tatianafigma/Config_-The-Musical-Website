const sponsors = [
  "Google", "Amazon", "Accenture", "Intuit", "Vercel",
  "GitHub", "Notion", "Linear", "Loom", "Zapier",
  "Anthropic", "Stripe", "Figma", "Shopify", "Cloudflare",
  "Webflow", "Datadog", "1Password", "Pitch", "Mercury",
];

export function Sponsors() {
  return (
    <section id="sponsors" className="border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="font-mono-label text-[11px] text-foreground/60 mb-4">PRODUCED IN ASSOCIATION WITH</div>
        <h2
          style={{ fontFamily: "'Figma Sans VF', sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          className="max-w-[820px] mb-10"
        >
          <b><i>Thank you to our Config 2026 sponsors.</i></b>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-l border-border">
          {sponsors.map((s, i) => (
            <div
              key={s}
              className={`border-r border-b border-border aspect-[2/1] flex items-center justify-center hover:bg-muted transition-colors ${i === 0 ? "bg-[var(--background)]" : "bg-card"}`}
            >
              <span style={{ fontFamily: "'Figma Sans VF', sans-serif", fontSize: "1.5rem" }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
