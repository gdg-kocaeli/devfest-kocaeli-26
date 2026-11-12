import { ExternalLink } from "../shared/external-link";

export function OriaverseSection() {
  return (
    <section className="oriaverse" aria-labelledby="oriaverse-title">
      <div className="oriaverse-copy">
        <h2 id="oriaverse-title">Oriaverse ile kiminle tanışacağını keşfet.</h2>
        <p id="oriaverse-description">
          Oriaverse, etkinlikte kiminle ve neden konuşabileceğini keşfetmene
          yardımcı olur. Uygulamayı indir, <strong>DFKOCAELI</strong> koduyla
          etkinliğe katıl. Personan diğer katılımcılarla tanışsın, sen de yeni
          bağlantılar kur.
        </p>
      </div>
      <div className="oriaverse-actions">
        <span className="oriaverse-code">Etkinlik kodu: <strong>DFKOCAELI</strong></span>
        <ExternalLink
          className="button oriaverse-button"
          href="https://oriaverse.com/etkinlik/?k=DFKOCAELI"
          aria-describedby="oriaverse-description oriaverse-link-note"
        >
          Etkinliğe katıl
          <span aria-hidden="true">↗</span>
        </ExternalLink>
        <small id="oriaverse-link-note">Oriaverse yeni sekmede açılır.</small>
      </div>
    </section>
  );
}
