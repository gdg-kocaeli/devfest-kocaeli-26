import type { CSSProperties } from "react";
import { sessionLabels } from "../../data";
import type { Speaker, Track } from "../../types";

type ScheduleCardProps = {
  track: Track;
  speakersById: ReadonlyMap<string, Speaker>;
  timeSlots: readonly string[];
};

export function ScheduleCard({ track, speakersById, timeSlots }: ScheduleCardProps) {
  return (
    <article className="schedule-card">
      <div className="schedule-heading">
        <h3>{track.title}</h3>
      </div>
      {track.sessions.map((session) => (
        <div
          className="schedule-row"
          key={session.id}
          style={{
            "--schedule-session-row": `${timeSlots.indexOf(session.startTime) + 2} / ${timeSlots.filter((start) => start < session.endTime).length + 2}`,
          } as CSSProperties}
        >
          <div className="schedule-time">
            <span>{session.dateLabel}</span>
            <p className="schedule-time-range">
              <time>{session.startTime}</time>
              <span aria-hidden="true">–</span>
              <time>{session.endTime}</time>
            </p>
          </div>
          <span className={`session-type session-${session.kind}`}>
            {sessionLabels[session.kind]}
          </span>
          <div className="session-info">
            <p>{session.title}</p>
            <span>
              {[
                ...session.speakerIds.map((id) => speakersById.get(id)?.name),
                ...(session.speakerNames ?? []),
              ]
                .filter(Boolean)
                .join(", ")}
            </span>
          </div>
        </div>
      ))}
    </article>
  );
}
