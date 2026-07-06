import { Twitter, Instagram, Linkedin, Youtube, Github } from "lucide-react";
import { ConfigMark } from "./ConfigMark";

const footerLinks = {
  "The Show": [
    { label: "The Setlist", href: "#setlist" },
    { label: "The Lineup", href: "#lineup" },
    { label: "The Venue", href: "#venue" },
    { label: "Watch Parties", href: "#bsides" },
  ],
  Tickets: [
    { label: "Register", href: "#register" },
    { label: "Groups & Teams", href: "#" },
    { label: "Scholarships", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  Resources: [
    { label: "Press Kit", href: "#" },
    { label: "Code of Conduct", href: "#" },
    { label: "Accessibility", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

const socials = [
  { Icon: Twitter, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Linkedin, href: "#" },
  { Icon: Youtube, href: "#" },
  { Icon: Github, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-[1400px] mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-mono-label text-[11px] text-foreground/60 mb-3">CONFIG: THE MUSICAL · 2027</div>
            <p className="text-sm text-foreground/70 max-w-[380px]">
              The annual gathering for designers, developers, and product builders — performed live at Moscone Center, San Francisco, June 23–25.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 inline-flex items-center justify-center border border-border rounded-sm hover:bg-foreground hover:text-background transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([col, items]) => (
            <div key={col} className="md:col-span-2">
              <div className="font-mono-label text-[11px] text-foreground/60 mb-3">{col.toUpperCase()}</div>
              <ul className="space-y-2">
                {items.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Giant wordmark + chunky shapes row */}
        <div className="mt-16 relative">
          <div className="flex items-end gap-8 flex-wrap">
            <ConfigMark height={180} color="#00b3ff" className="-ml-1" />
            <div className="flex gap-3 mb-4">
              <div className="w-12 h-12 rounded-md" style={{ background: "#ffe14d" }} />
              <div className="w-12 h-12 rounded-md" style={{ background: "#ff2d78" }} />
              <div className="w-12 h-12 rounded-md" style={{ background: "#4ddb6a" }} />
              <div className="w-12 h-12 rounded-md" style={{ background: "#8a5cff" }} />
              <div className="w-12 h-12 rounded-md" style={{ background: "#ff7a3d" }} />
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3 font-mono-label text-[10px] text-foreground/60">
          <span>© 2026 CONFIG: THE MUSICAL · A FAN-MADE LOVE LETTER TO FIGMA CONFIG</span>
          <span>MADE WITH 🎶 IN SAN FRANCISCO</span>
        </div>
      </div>
    </footer>
  );
}
