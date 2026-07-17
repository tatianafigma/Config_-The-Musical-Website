import { useEffect, useState } from "react";

const CONFIG_DAY_1 = new Date("2026-06-23T09:00:00-07:00");
const CONFIG_2027 = new Date("2027-06-01T00:00:00-07:00");

function getTarget() {
  return Date.now() < CONFIG_DAY_1.getTime()
    ? { date: CONFIG_DAY_1, past: false }
    : { date: CONFIG_2027, past: true };
}

function formatDays(ms: number) {
  return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
}

export function Countdown() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const target = getTarget();
  const remaining = target.date.getTime() - now;
  const days = formatDays(remaining);

  return (
    <div className="bg-foreground text-background flex items-center justify-center gap-3 h-10 font-mono-label text-[12px] tracking-[0.08em]">
      {target.past && <span className="text-background/70">MARK YOUR CALENDARS</span>}
      {target.past && <span className="text-background/40">·</span>}
      <span>{target.past ? "CONFIG 2027 IN" : "CONFIG STARTS IN"}</span>
      <span className="tabular-nums font-bold">{days} {days === 1 ? "DAY" : "DAYS"}</span>
    </div>
  );
}
