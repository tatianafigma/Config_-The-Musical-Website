import { GraffitiConfig } from "./ConfigMark";

export function Commons() {
  return (
    <section id="venue" className="border-b border-border">
      {/* Big green graffiti divider */}
      <div className="bg-background py-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div style={{ boxShadow: "inset 0px 4px 5px 0px rgba(0, 0, 0, 0.25)" }}>
            <GraffitiConfig />
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5">
          <div className="font-mono-label text-[11px] text-foreground/60 mb-4">CONFIG COMMONS</div>
          <h2
            style={{ fontFamily: "'Figma Sans VF', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            className="max-w-[520px]"
          >
            Stop by Config Commons on Tuesday, June 23 to grab your badge, get your swag, and find your people.
          </h2>
          <div className="mt-6 font-mono-label text-[11px] text-foreground/60 space-y-1">
            <div>MOSCONE CENTER WEST · LOBBY LEVEL</div>
            <div>OPEN 8:00 AM – 8:00 PM</div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="aspect-[16/10] overflow-hidden rounded-sm bg-muted">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&h=900&fit=crop&auto=format"
              alt="Attendees mingling at Config Commons"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
