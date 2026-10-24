import { assets } from "../../assets";
import { event, hasProgram } from "../../data";
import { AssetImage } from "../shared/asset-image";
import { ExternalLink } from "../shared/external-link";
import { Countdown } from "./countdown";

export function HeroBackdrop() {
  return (
    <div className="hero-glow" aria-hidden="true">
      <AssetImage image={assets.hero.glow} />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="hero-intro">
          <p className="eyebrow">GOOGLE DEVELOPER GROUPS KOCAELİ SUNAR</p>
          <h1 id="hero-title" aria-label={event.name}>
            <span>DEVFEST</span> {event.year}
          </h1>
          <p className="hero-description">
            {event.introduction}
          </p>
        </div>
        <div className="event-card">
          <div className="event-details">
            <div>
              <AssetImage image={assets.hero.calendar} />
              <p>
                {event.dateLabel}
                <br />
                {event.timeLabel}
              </p>
            </div>
            <ExternalLink href={event.venue.mapUrl}>
              <AssetImage image={assets.hero.mapPin} />
              <p>
                {event.venue.lines[0]}
                <br />
                {event.venue.lines[1]}
              </p>
            </ExternalLink>
          </div>
          <Countdown startsAt={event.startsAt} />
          <div className="ticket-divider">
            <AssetImage image={assets.hero.ticketDivider} />
          </div>
          <div className="event-actions">
            <ExternalLink className="button primary" href={event.ticketUrl}>
              Biletini Al
            </ExternalLink>
            {hasProgram && (
              <a className="button secondary" href="#program">
                Programı Gör
              </a>
            )}
          </div>
          <p className="registration-note">{event.registrationLabel}</p>
        </div>
      </div>
      <div className="hero-art">
        <AssetImage
          image={assets.hero.characters}
          alt="DevFest 2026 için parlayan bir ampulün etrafında buluşan üç karakter"
          sizes="(max-width: 700px) 100vw, 615px"
          preload
        />
      </div>
    </section>
  );
}
