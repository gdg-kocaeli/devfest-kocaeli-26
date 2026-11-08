"use client";

import { useState, type ReactNode } from "react";

type ProgramScheduleProps = {
  tracks: readonly { id: string; title: string }[];
  children: ReactNode[];
};

export function ProgramSchedule({ tracks, children }: ProgramScheduleProps) {
  const [activeTrack, setActiveTrack] = useState(tracks[0]?.id);

  return (
    <div className="program-schedule">
      <div className="schedule-switcher" role="group" aria-label="Salon seçimi">
        {tracks.map((track) => (
          <button
            key={track.id}
            type="button"
            aria-pressed={activeTrack === track.id}
            aria-controls={`schedule-panel-${track.id}`}
            onClick={() => setActiveTrack(track.id)}
          >
            {track.title}
          </button>
        ))}
      </div>
      <div className="schedule-grid">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            id={`schedule-panel-${track.id}`}
            className="schedule-panel"
            data-active={activeTrack === track.id}
          >
            {children[index]}
          </div>
        ))}
      </div>
    </div>
  );
}
