import { assets } from "../../assets";
import { event, socialLinks } from "../../data";
import { AssetImage } from "../shared/asset-image";
import { ExternalLink } from "../shared/external-link";

export function ContactSection() {
  return (
    <section id="iletisim" className="contact" aria-labelledby="contact-title">
      <AssetImage
        image={assets.contact.speechBubbles}
        className="contact-art"
        sizes="(max-width: 700px) 360px, 600px"
      />
      <div className="contact-copy">
        <p className="section-label">İLETİŞİM</p>
        <h2 id="contact-title">İletişimde kalalım.</h2>
        <p className="section-description">
          Etkinlik, sponsorluk veya topluluk hakkında soruların mı var?
        </p>
        <ExternalLink
          className="button primary contact-button"
          href={event.communityUrl}
        >
          Bizimle İletişime Geç
        </ExternalLink>
      </div>
      <div className="socials">
        {socialLinks.map((link) => (
          <ExternalLink
            key={link.label}
            href={link.url}
            aria-label={link.label}
          >
            <AssetImage image={link.icon} />
          </ExternalLink>
        ))}
      </div>
      <footer>Google Developer Groups Kocaeli © {event.year}</footer>
    </section>
  );
}
