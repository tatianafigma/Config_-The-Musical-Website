import { useState, useEffect } from "react";

const CONFIG_2027 = new Date("2027-06-22T09:00:00-07:00").getTime();

function getTimeLeft() {
  const diff = Math.max(0, CONFIG_2027 - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const minutes = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60));
  return { days, minutes };
}

export function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full bg-c-pink py-2.5 px-4 text-center">
      <p className="font-mono-label text-[12px] text-white tracking-[0.12em]">
        CONFIG 2027 IN{" "}
        <span className="text-white font-bold">{timeLeft.days}</span> DAYS{" "}
        <span className="text-white/60 mx-1">·</span>{" "}
        <span className="text-white font-bold">{timeLeft.minutes}</span> MINUTES
      </p>
    </div>
  );
}
