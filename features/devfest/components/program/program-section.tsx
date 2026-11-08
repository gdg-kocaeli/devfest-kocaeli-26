import type { CSSProperties } from "react";
import { assets } from "../../assets";
import { programTracks, speakers } from "../../data";
import { AssetImage } from "../shared/asset-image";
import { ScheduleCard } from "./schedule-card";

export function ProgramSection() {
  if (programTracks.length === 0) return null;

  const speakersById = new Map(
    speakers.map((speaker) => [speaker.id, speaker]),
  );
  const sessions = programTracks.flatMap((track) => track.sessions);
  const boundaries = [...new Set(sessions.flatMap((session) =>
    [session.startTime, session.endTime],
  ))].sort();
  const timeSlots = boundaries.filter((start, index) => {
    const end = boundaries[index + 1];
    return end && sessions.some((session) =>
      session.startTime <= start && session.endTime >= end,
    );
  });
  return (
    <section id="program" className="program" aria-labelledby="program-title">
      <div className="program-backdrop" aria-hidden="true">
        <AssetImage image={assets.program.abstractWaves} sizes="100vw" />
        <AssetImage
          className="program-top"
          image={assets.program.fadeTop}
          sizes="100vw"
        />
        <AssetImage
          className="program-bottom"
          image={assets.program.fadeBottom}
          sizes="100vw"
        />
      </div>
      <div className="program-title">
        <h2 id="program-title">Program</h2>
        <p className="section-description">Gününü planla, keşfe yer aç.</p>
      </div>
      <div
        className="schedule-grid"
        style={{
          "--schedule-slot-count": timeSlots.length,
          "--schedule-row-count": timeSlots.length + 1,
        } as CSSProperties}
      >
        {programTracks.map((track) => (
          <ScheduleCard
            key={track.id}
            track={track}
            speakersById={speakersById}
            timeSlots={timeSlots}
          />
        ))}
      </div>
    </section>
  );
}
