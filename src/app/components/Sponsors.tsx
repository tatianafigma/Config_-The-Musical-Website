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
          Thank you to our Config 2026 sponsors.
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-l border-border">
          {sponsors.map((s) => (
            <div
              key={s}
              className="border-r border-b border-border aspect-[2/1] flex items-center justify-center bg-card hover:bg-muted transition-colors"
            >
              {s === "Google" && (
                <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2 shrink-0" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09a6.9 6.9 0 0 1 0-4.17V7.07H2.18a11.01 11.01 0 0 0 0 9.86l3.66-2.84z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              )}
              <span style={{ fontFamily: "'Figma Sans VF', sans-serif", fontSize: "1.5rem" }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
