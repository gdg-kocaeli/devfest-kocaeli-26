"use client";

import { useEffect, useState } from "react";

const labels = ["Gün", "Saat", "Dakika", "Saniye"] as const;
type RemainingTime = readonly [number, number, number, number];

function remaining(target: number): RemainingTime {
  const seconds = Math.max(0, Math.floor((target - Date.now()) / 1000));
  return [
    Math.floor(seconds / 86400),
    Math.floor(seconds / 3600) % 24,
    Math.floor(seconds / 60) % 60,
    seconds % 60,
  ];
}

export function Countdown({ startsAt }: { startsAt: string }) {
  const [time, setTime] = useState<RemainingTime | null>(null);
  useEffect(() => {
    const target = new Date(startsAt).getTime();
    if (!Number.isFinite(target)) return;
    const update = () => setTime(remaining(target));
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [startsAt]);
  return (
    <div className="countdown" aria-label="Etkinliğe kalan süre">
      {labels.map((label, i) => (
        <div key={label}>
          <span>{time ? time[i] : "–"}</span>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
