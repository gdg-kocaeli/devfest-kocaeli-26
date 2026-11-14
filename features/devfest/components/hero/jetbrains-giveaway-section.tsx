import { ExternalLink } from "../shared/external-link";

export function JetBrainsGiveawaySection() {
  return (
    <section className="oriaverse" aria-labelledby="jetbrains-giveaway-title">
      <div className="oriaverse-copy">
        <h2 id="jetbrains-giveaway-title">JetBrains çekilişine katıl!</h2>
        <p id="jetbrains-giveaway-description">
          JetBrains çekilişine katılmak için formu doldur.
        </p>
      </div>
      <div className="oriaverse-actions">
        <ExternalLink
          className="button oriaverse-button"
          href="https://gathin.com/forms/31040268160680733680"
          aria-describedby="jetbrains-giveaway-description jetbrains-giveaway-link-note"
        >
          Çekilişe katıl
          <span aria-hidden="true">↗</span>
        </ExternalLink>
        <small id="jetbrains-giveaway-link-note">Form yeni sekmede açılır.</small>
      </div>
    </section>
  );
}
