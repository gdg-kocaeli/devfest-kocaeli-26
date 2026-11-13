import { ExternalLink } from "../shared/external-link";

export function AndroidGiveawaySection() {
  return (
    <section
      className="oriaverse android-giveaway"
      aria-labelledby="android-giveaway-title"
    >
      <div className="oriaverse-copy">
        <h2 id="android-giveaway-title">Android figürü çekilişine katıl!</h2>
        <p id="android-giveaway-description">
          Android figürü kazanma şansı için çekiliş formunu doldur.
        </p>
      </div>
      <div className="oriaverse-actions">
        <ExternalLink
          className="button oriaverse-button"
          href="https://gathin.com/forms/93387802846389610475"
          aria-describedby="android-giveaway-description android-giveaway-link-note"
        >
          Çekilişe katıl
          <span aria-hidden="true">↗</span>
        </ExternalLink>
        <small id="android-giveaway-link-note">Form yeni sekmede açılır.</small>
      </div>
    </section>
  );
}
