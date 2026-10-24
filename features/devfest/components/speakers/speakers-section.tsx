import { assets } from "../../assets";
import { featuredSpeakers } from "../../data";
import { AssetImage } from "../shared/asset-image";
import { SpeakerCard } from "./speaker-card";

export function SpeakersSection() {
  if (featuredSpeakers.length === 0) return null;

  return (
    <section
      id="konusmacilar"
      className="speakers"
      aria-labelledby="speaker-title"
    >
      <div className="speaker-intro">
        <h2 id="speaker-title">Konuşmacılar</h2>
        <p className="section-description">
          Bir fikir, yeni bir dünyaya açılır.
        </p>
        <AssetImage
          image={assets.speakers.microphone}
          alt="Mavi ve altın renkli mikrofon"
          sizes="240px"
        />
      </div>
      <div className="speaker-grid">
        {featuredSpeakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </section>
  );
}
