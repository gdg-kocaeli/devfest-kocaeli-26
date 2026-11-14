import { ExternalLink } from "../shared/external-link";

export function EuropeCodingSchoolGiveawaySection() {
  return (
    <section
      className="oriaverse"
      aria-labelledby="europe-coding-school-giveaway-title"
    >
      <div className="oriaverse-copy">
        <h2 id="europe-coding-school-giveaway-title">
          Europe Coding School çekilişine katıl!
        </h2>
        <p id="europe-coding-school-giveaway-description">
          Europe Coding School çekilişine katılmak için formu doldur.
        </p>
      </div>
      <div className="oriaverse-actions">
        <ExternalLink
          className="button oriaverse-button"
          href="https://gathin.com/forms/70716843495071850599"
          aria-describedby="europe-coding-school-giveaway-description europe-coding-school-giveaway-link-note"
        >
          Çekilişe katıl
          <span aria-hidden="true">↗</span>
        </ExternalLink>
        <small id="europe-coding-school-giveaway-link-note">
          Form yeni sekmede açılır.
        </small>
      </div>
    </section>
  );
}
