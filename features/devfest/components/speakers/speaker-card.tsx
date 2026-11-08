import type { Speaker } from "../../types";
import { AssetImage } from "../shared/asset-image";
import { ExternalLink } from "../shared/external-link";

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <article className={`speaker-card portrait-${speaker.portrait}`}>
      <div className="speaker-photo">
        {speaker.image && (
          <AssetImage
            image={speaker.image}
            alt={speaker.name}
            sizes="(max-width: 700px) 45vw, 211px"
          />
        )}
      </div>
      <div>
        <h3>
          {speaker.profileUrl ? (
            <ExternalLink href={speaker.profileUrl}>
              {speaker.name}
            </ExternalLink>
          ) : (
            speaker.name
          )}
        </h3>
        {(speaker.role || speaker.company) && (
          <p>
            {speaker.role}
            {speaker.role && speaker.company && <br />}
            {speaker.company && `@${speaker.company}`}
          </p>
        )}
      </div>
    </article>
  );
}
