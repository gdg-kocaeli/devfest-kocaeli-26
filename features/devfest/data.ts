import { assets } from "./assets";
import type {
  GalleryYear,
  SessionKind,
  SocialLink,
  Speaker,
  SponsorGroup,
  Track,
} from "./types";

export const event = {
  name: "DevFest Kocaeli 2026",
  title: "DevFest Kocaeli 2026 | 14 Kasım, Emexotel | GDG Kocaeli",
  description:
    "DevFest Kocaeli 2026, 14 Kasım’da Emexotel’de! GDG Kocaeli ile yapay zeka, web, mobil ve bulut teknolojileri üzerine konuşmalar. Katılım ücretsiz, kayıt gerekli.",
  year: 2026,
  startsAt: "2026-11-14T10:00:00+03:00",
  endsAt: "2026-11-14T18:00:00+03:00",
  dateLabel: "14 Kasım 2026",
  timeLabel: "10.00–18.00",
  registrationLabel: "Katılım ücretsizdir, kayıt gereklidir.",
  introduction:
    "GDG Kocaeli ile yapay zeka, web, mobil ve bulut teknolojilerini keşfet. Teknik konuşmalar ve yeni bağlantılar için DevFest Kocaeli 2026’da buluş.",
  venue: {
    name: "Emexotel",
    lines: ["Emexotel", "Kocaeli"],
    mapUrl: "https://maps.app.goo.gl/b4X5iqoPuJ5PgmL26",
    address: {
      streetAddress: "Ömer Türkçakal Bulvarı No:26",
      addressLocality: "İzmit",
      addressRegion: "Kocaeli",
      postalCode: "41040",
      addressCountry: "TR",
    },
  },
  ticketUrl: "https://gathin.com/events/devfest-kocaeli-2026",
  sponsorUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSeiAVmlK83Cbt7T9EsaXGdJ9T_yxHfbWD284d1gGiVWYx35Sw/viewform",
  communityUrl: "https://gdg.community.dev/gdg-kocaeli/",
} as const;

export const navigation = [
  { href: "#konusmacilar", label: "Konuşmacılar" },
  { href: "#program", label: "Program" },
  { href: "#sponsorlar", label: "Sponsorlar" },
  { href: "#galeri", label: "Galeri" },
  { href: "#iletisim", label: "İletişim" },
] as const;

export const speakers: readonly Speaker[] = [];

export const featuredSpeakers = speakers.filter((speaker) => speaker.featured);

export const sessionLabels = {
  keynote: "KEYNOTE",
  talk: "SUNUM",
  break: "MOLA",
} as const satisfies Record<SessionKind, string>;

export const tracks: readonly Track[] = [];

export const programTracks = tracks.filter((track) => track.sessions.length > 0);
export const hasProgram = programTracks.length > 0;

export const sponsorGroups: readonly SponsorGroup[] = [
  {
    id: "platinum",
    title: "Platin Sponsor",
    sponsors: [
      {
        id: "google-for-devs",
        name: "Google for Developers",
        image: assets.sponsors.googleForDevs,
      },
    ],
  },
  {
    id: "gold",
    title: "Altın Sponsorlar",
    divider: assets.sponsors.goldDivider,
    sponsors: [],
  },
  {
    id: "silver",
    title: "Gümüş Sponsorlar",
    divider: assets.sponsors.silverDivider,
    sponsors: [],
  },
  {
    id: "bronze",
    title: "Bronz Sponsorlar",
    divider: assets.sponsors.bronzeDivider,
    sponsors: [],
  },
];

export const galleryYears: readonly GalleryYear[] = [
  {
    year: 2025,
    images: [
      assets.gallery.photo20251,
      assets.gallery.photo20252,
      assets.gallery.photo20253,
      assets.gallery.photo20254,
      assets.gallery.photo20255,
      assets.gallery.photo20256,
      assets.gallery.photo20257,
      assets.gallery.photo20258,
    ],
  },
  {
    year: 2024,
    images: [
      assets.gallery.photo20241,
      assets.gallery.photo20242,
      assets.gallery.photo20243,
      assets.gallery.photo20244,
      assets.gallery.photo20245,
      assets.gallery.photo20246,
      assets.gallery.photo20247,
      assets.gallery.photo20248,
      assets.gallery.photo20249,
    ],
  },
  {
    year: 2023,
    images: [
      assets.gallery.photo20231,
      assets.gallery.photo20232,
      assets.gallery.photo20233,
      assets.gallery.photo20234,
      assets.gallery.photo20235,
      assets.gallery.photo20236,
      assets.gallery.photo20237,
      assets.gallery.photo20238,
      assets.gallery.photo20239,
      assets.gallery.photo202310,
      assets.gallery.photo202311,
      assets.gallery.photo202312,
      assets.gallery.photo202313,
    ],
  },
  {
    year: 2022,
    images: [
      assets.gallery.photo20221,
      assets.gallery.photo20222,
      assets.gallery.photo20223,
      assets.gallery.photo20224,
    ],
  },
];

export const socialLinks: readonly SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/gdg-kocaeli",
    icon: assets.contact.github,
  },
  { label: "X", url: "https://x.com/gdgkocaeli", icon: assets.contact.x },
  {
    label: "Instagram",
    url: "https://www.instagram.com/gdgkocaeli/",
    icon: assets.contact.instagram,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/gdgkocaeli/",
    icon: assets.contact.linkedin,
  },
];
