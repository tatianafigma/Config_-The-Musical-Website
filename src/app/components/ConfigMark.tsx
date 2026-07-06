type Props = {
  color?: string;
  className?: string;
  height?: number | string;
};

// Playful "CONFIG" wordmark — each letter has its own organic shape language,
// inspired by the official Config 2026 mark. Generous right-side padding leaves
// room for an adjacent "THE MUSICAL" tag.
export function ConfigMark({ color = "#ffffff", className, height = 80 }: Props) {
  return (
    <svg
      viewBox="0 0 900 200"
      className={className}
      style={{ height, width: "auto", display: "block" }}
      aria-label="CONFIG"
    >
      <g fill={color}>
        {/* C — squared bracket built from chunky rectangles */}
        <rect x="20" y="20" width="120" height="42" />
        <rect x="20" y="20" width="42" height="160" />
        <rect x="20" y="138" width="120" height="42" />

        {/* O — puffy cloud/flower with center hole */}
        <path
          d="M250 30
             c-22 0 -36 16 -38 32
             c-22 -8 -46 6 -48 28
             c-22 4 -34 26 -28 46
             c-12 14 -10 36 4 46
             c-6 22 8 42 30 44
             c6 22 30 32 50 22
             c14 16 38 16 52 0
             c20 10 44 0 50 -22
             c22 -2 36 -22 30 -44
             c14 -10 16 -32 4 -46
             c6 -20 -6 -42 -28 -46
             c-2 -22 -26 -36 -48 -28
             c-2 -16 -16 -32 -38 -32
             Z
             M260 90
             c-8 0 -16 8 -16 18
             s8 18 16 18
             s16 -8 16 -18
             s-8 -18 -16 -18 Z"
          fillRule="evenodd"
        />

        {/* N — pixel/staircase blocks */}
        <rect x="380" y="20" width="36" height="160" />
        <rect x="416" y="48" width="22" height="32" />
        <rect x="438" y="68" width="22" height="32" />
        <rect x="460" y="88" width="22" height="32" />
        <rect x="482" y="108" width="22" height="32" />
        <rect x="488" y="20" width="36" height="160" />

        {/* F — overlapping ovals (stacked pebbles) */}
        <ellipse cx="580" cy="60" rx="48" ry="32" />
        <ellipse cx="600" cy="120" rx="56" ry="36" />
        <ellipse cx="580" cy="170" rx="36" ry="18" />

        {/* I — tilted square block */}
        <g transform="rotate(8 700 100)">
          <rect x="668" y="32" width="64" height="136" rx="4" />
        </g>

        {/* G — hand-drawn spiral */}
        <path
          d="M860 100
             m-58 0
             a58 58 0 1 1 116 0
             a48 48 0 1 1 -96 0
             a38 38 0 1 1 76 0
             a28 28 0 1 1 -56 0
             a18 18 0 1 1 36 0
             a10 10 0 1 1 -20 0"
          fill="none"
          stroke={color}
          strokeWidth="14"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

// Decorative chunky blob (kept for reuse).
export function ChunkyShapes({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 220" className={className} style={{ width: "100%", height: "auto" }}>
      <rect x="8" y="8" width="84" height="84" rx="10" fill="#ffe14d" />
      <path d="M110 18 q20 -10 30 10 t-10 35 q-15 10 -25 -5 t5 -40z" fill="#ff2d78" />
      <path d="M20 120 q30 -25 60 -5 t15 50 q-20 30 -55 15 t-20 -60z" fill="#4ddb6a" />
      <rect x="120" y="110" width="90" height="100" rx="16" fill="#00b3ff" />
      <path d="M135 145 q15 -15 30 0 t30 0" stroke="#0a0a0a" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="165" cy="180" r="6" fill="#0a0a0a" />
    </svg>
  );
}

// Big green graffiti-style "config" wordmark used as a divider.
export function GraffitiConfig({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 240" className={className} style={{ width: "100%", height: "auto", display: "block" }}>
      <g fill="#4ddb6a" stroke="#0a3d18" strokeWidth="3" strokeLinejoin="round">
        <path d="M40 60 q-20 40 10 100 q40 50 110 40 q60 -10 70 -60 l-50 -10 q-10 30 -40 30 q-40 0 -50 -50 q-5 -40 35 -60 q35 -15 60 10 l40 -20 q-30 -50 -100 -40 q-65 10 -85 60z" />
        <ellipse cx="320" cy="140" rx="80" ry="70" />
        <ellipse cx="320" cy="140" rx="35" ry="30" fill="#0a0a0a" />
        <path d="M430 70 l30 0 l60 100 l0 -100 l40 0 l0 160 l-30 0 l-60 -100 l0 100 l-40 0 z" />
        <path d="M610 70 l130 0 l0 30 l-90 0 l0 40 l70 0 l0 30 l-70 0 l0 60 l-40 0 z" />
        <rect x="770" y="70" width="40" height="160" />
        <path d="M850 70 q-30 20 -30 80 q0 90 90 90 q60 0 90 -50 l0 -60 l-90 0 l0 30 l50 0 l0 20 q-15 20 -50 20 q-50 0 -50 -50 q0 -50 50 -50 q30 0 50 20 l30 -30 q-30 -40 -90 -40 q-30 0 -50 20z" />
      </g>
    </svg>
  );
}

// Four musical-themed tiles for the hero row.
export function HeroTiles({ className }: { className?: string }) {
  return (
    <div className={className + " grid grid-cols-2 md:grid-cols-4 gap-3"}>
      {/* Orange tile — vinyl record speckle */}
      <div className="aspect-square relative overflow-hidden rounded-sm" style={{ background: "#00b3ff" }}>
        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
          {/* concentric vinyl rings */}
          {[90, 75, 60, 45, 30].map((r, i) => (
            <circle key={i} cx="100" cy="100" r={r} fill="none" stroke="#0a0a0a" strokeOpacity="0.18" strokeWidth="1.5" />
          ))}
          {/* center label */}
          <circle cx="100" cy="100" r="18" fill="#f4f1ec" />
          <circle cx="100" cy="100" r="3" fill="#0a0a0a" />
          {/* scattered note dots */}
          {Array.from({ length: 60 }).map((_, i) => {
            const angle = (i * 37) % 360;
            const radius = 25 + (i * 7) % 70;
            const x = 100 + Math.cos((angle * Math.PI) / 180) * radius;
            const y = 100 + Math.sin((angle * Math.PI) / 180) * radius;
            return <circle key={i} cx={x} cy={y} r="2.5" fill="#f4f1ec" />;
          })}
        </svg>
      </div>

      {/* Yellow tile — overlapping cassette/piano-key squares */}
      <div className="aspect-square relative overflow-hidden rounded-sm" style={{ background: "#ffe14d" }}>
        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
          {/* tilted cassette-like rounded squares */}
          <g transform="rotate(-12 100 100)">
            <rect x="35" y="55" width="60" height="60" rx="6" fill="#f4f1ec" stroke="#0a0a0a" strokeWidth="2" />
            <circle cx="55" cy="85" r="5" fill="#0a0a0a" />
            <circle cx="75" cy="85" r="5" fill="#0a0a0a" />
          </g>
          <g transform="rotate(18 110 100)">
            <rect x="85" y="80" width="60" height="60" rx="6" fill="#f4f1ec" stroke="#0a0a0a" strokeWidth="2" />
            <circle cx="105" cy="110" r="5" fill="#0a0a0a" />
            <circle cx="125" cy="110" r="5" fill="#0a0a0a" />
          </g>
          <g transform="rotate(-4 100 140)">
            <rect x="65" y="115" width="60" height="60" rx="6" fill="#f4f1ec" stroke="#0a0a0a" strokeWidth="2" />
            <circle cx="85" cy="145" r="5" fill="#0a0a0a" />
            <circle cx="105" cy="145" r="5" fill="#0a0a0a" />
          </g>
        </svg>
      </div>

      {/* Green tile — cloud-like musical notes */}
      <div className="aspect-square relative overflow-hidden rounded-sm" style={{ background: "#4ddb6a" }}>
        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
          {/* eighth-note cloud blobs */}
          {[
            { cx: 50, cy: 60, rx: 24, ry: 16 },
            { cx: 110, cy: 50, rx: 28, ry: 18 },
            { cx: 160, cy: 75, rx: 22, ry: 16 },
            { cx: 40, cy: 120, rx: 26, ry: 18 },
            { cx: 100, cy: 115, rx: 30, ry: 20 },
            { cx: 155, cy: 140, rx: 24, ry: 16 },
            { cx: 70, cy: 170, rx: 22, ry: 14 },
            { cx: 130, cy: 175, rx: 26, ry: 16 },
          ].map((n, i) => (
            <g key={i}>
              <ellipse cx={n.cx} cy={n.cy} rx={n.rx} ry={n.ry} fill="#f4f1ec" transform={`rotate(-20 ${n.cx} ${n.cy})`} />
              {/* note stem */}
              <line x1={n.cx + n.rx - 4} y1={n.cy - 4} x2={n.cx + n.rx - 4} y2={n.cy - 24} stroke="#f4f1ec" strokeWidth="3" />
            </g>
          ))}
        </svg>
      </div>

      {/* Blue tile — sound burst / sonic starburst */}
      <div className="aspect-square relative overflow-hidden rounded-sm" style={{ background: "#0a0a0a" }}>
      </div>
    </div>
  );
}
