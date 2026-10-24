import { event, socialLinks } from "./data";

// Override only when moving the site to a different production domain.
export const siteUrl = new URL(
  process.env.SITE_URL ?? "https://devfestkocaeli.com",
).origin;
export const socialImagePath = "/opengraph-image";

const organizer = {
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "GDG Kocaeli",
  url: event.communityUrl,
  sameAs: socialLinks.map((link) => link.url),
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: `${siteUrl}/`,
  name: event.name,
  description: event.description,
  inLanguage: "tr-TR",
  publisher: organizer,
  about: { "@id": `${siteUrl}/#event` },
};

export const eventStructuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.name,
  description: event.description,
  "@id": `${siteUrl}/#event`,
  url: `${siteUrl}/`,
  image: [`${siteUrl}${socialImagePath}`],
  startDate: event.startsAt,
  endDate: event.endsAt,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  inLanguage: "tr-TR",
  isAccessibleForFree: true,
  location: {
    "@type": "Place",
    name: event.venue.name,
    hasMap: event.venue.mapUrl,
    address: { "@type": "PostalAddress", ...event.venue.address },
  },
  organizer,
  offers: {
    "@type": "Offer",
    url: event.ticketUrl,
    price: 0,
    priceCurrency: "TRY",
  },
};
