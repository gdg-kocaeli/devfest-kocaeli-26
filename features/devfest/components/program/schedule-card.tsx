import { sessionLabels } from "../../data";
import type { Speaker, Track } from "../../types";

type ScheduleCardProps = {
  track: Track;
  speakersById: ReadonlyMap<string, Speaker>;
};

export function ScheduleCard({ track, speakersById }: ScheduleCardProps) {
  return (
    <article className="schedule-card">
      <div className="schedule-heading">
        <h3>{track.title}</h3>
      </div>
      {track.sessions.map((session) => (
        <div className="schedule-row" key={session.id}>
          <div className="schedule-time">
            <span>{session.dateLabel}</span>
            <p>
              {session.startTime} - {session.endTime}
            </p>
          </div>
          <span className={`session-type session-${session.kind}`}>
            {sessionLabels[session.kind]}
          </span>
          <div className="session-info">
            <p>{session.title}</p>
            <span>
              {session.speakerIds
                .map((id) => speakersById.get(id)?.name)
                .filter(Boolean)
                .join(", ")}
            </span>
          </div>
        </div>
      ))}
    </article>
  );
}
