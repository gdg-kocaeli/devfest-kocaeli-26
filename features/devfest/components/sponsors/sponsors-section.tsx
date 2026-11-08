import { event, sponsorGroups } from "../../data";
import { AssetImage } from "../shared/asset-image";
import { ExternalLink } from "../shared/external-link";

export function SponsorsSection() {
  const visibleGroups = sponsorGroups.filter(
    (group) => group.sponsors.length > 0,
  );

  if (visibleGroups.length === 0) return null;

  return (
    <section
      id="sponsorlar"
      className="sponsors"
      aria-labelledby="sponsor-title"
    >
      <div className="sponsor-intro">
        <p className="section-label">SPONSORLAR</p>
        <h2 id="sponsor-title">Birlikte mümkün.</h2>
        <ExternalLink href={event.sponsorUrl} className="text-link">
          → Sponsor olmak ister misiniz?
        </ExternalLink>
      </div>
      <div className="sponsor-groups">
        {visibleGroups.map((group) => (
          <div
            className={`sponsor-group sponsor-tier-${group.id}`}
            key={group.id}
            role="group"
            aria-labelledby={`sponsor-tier-${group.id}`}
          >
            <h3 className="sponsor-tier-title" id={`sponsor-tier-${group.id}`}>
              {group.title}
            </h3>
            {group.divider && <AssetImage image={group.divider} />}
            <div
              className="sponsor-logos"
              role="region"
              aria-label={`${group.title} listesi`}
            >
              {group.sponsors.map((sponsor) => {
                const content = sponsor.image ? (
                  <AssetImage
                    image={sponsor.image}
                    alt={sponsor.name}
                    sizes={group.id === "partners" ? "128px" : "(max-width: 400px) 100vw, 351px"}
                  />
                ) : (
                  <span className="sponsor-name">{sponsor.name}</span>
                );

                return sponsor.url ? (
                  <ExternalLink
                    key={sponsor.id}
                    href={sponsor.url}
                    className="sponsor-logo"
                  >
                    {content}
                  </ExternalLink>
                ) : (
                  <div key={sponsor.id} className="sponsor-logo">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
