import { assets } from "../../assets";
import { programTracks, speakers } from "../../data";
import { AssetImage } from "../shared/asset-image";
import { ScheduleCard } from "./schedule-card";

export function ProgramSection() {
  if (programTracks.length === 0) return null;

  const speakersById = new Map(
    speakers.map((speaker) => [speaker.id, speaker]),
  );
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
      <div className="schedule-grid">
        {programTracks.map((track) => (
          <ScheduleCard
            key={track.id}
            track={track}
            speakersById={speakersById}
          />
        ))}
      </div>
    </section>
  );
}
