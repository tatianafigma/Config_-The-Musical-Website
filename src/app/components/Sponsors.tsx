const sponsorLogos: Record<string, React.ReactNode> = {
  Google: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  ),
  Amazon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.96 14.46c-1.76 1.3-4.31 2-6.5 2a11.77 11.77 0 0 1-7.94-3.03c-.16-.15-.02-.35.18-.24a16 16 0 0 0 7.94 2.12c1.95 0 4.09-.4 6.06-1.24.3-.13.55.2.26.39z" />
      <path d="M14.7 13.6c-.22-.29-1.49-.14-2.06-.07-.17.02-.2-.13-.04-.24 1.01-.71 2.66-.5 2.85-.27.2.24-.05 1.9-.99 2.69-.15.12-.29.06-.22-.1.22-.54.7-1.73.46-2.01z" />
      <path d="M12.71 5.38V4.22c0-.18.13-.3.29-.3h5.16c.17 0 .3.12.3.3v1c0 .17-.14.39-.4.75l-2.67 3.82c.99-.02 2.04.12 2.94.63.2.12.26.28.27.45v1.24c0 .17-.19.37-.38.27a5.93 5.93 0 0 0-5.45.01c-.18.1-.37-.1-.37-.28v-1.18c0-.19 0-.51.2-.8l3.1-4.44h-2.69c-.17 0-.3-.12-.3-.3z" />
    </svg>
  ),
  Accenture: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L1.5 21h5.3L12 10.6 17.2 21h5.3z" />
    </svg>
  ),
  Intuit: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="8" width="4" height="12" rx="1" />
      <rect x="8" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="8" width="4" height="12" rx="1" />
      <rect x="20" y="4" width="2" height="2" rx="1" />
      <rect x="20" y="8" width="2" height="12" rx="1" />
    </svg>
  ),
  Vercel: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 22h20L12 2z" />
    </svg>
  ),
};

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
              {sponsorLogos[s] && <span className="opacity-70 mr-2 flex-shrink-0">{sponsorLogos[s]}</span>}
              <span style={{ fontFamily: "'Figma Sans VF', sans-serif", fontSize: "1.5rem" }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
