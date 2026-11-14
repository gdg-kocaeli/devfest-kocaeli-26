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
  endsAt: "2026-11-14T16:30:00+03:00",
  dateLabel: "14 Kasım 2026",
  timeLabel: "10.00–16.30",
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

export const speakers: readonly Speaker[] = [
  {
    id: "batuhan-yalcin",
    name: "Batuhan Yalçın",
    role: "Community Lead",
    company: "Multi Group",
    image: assets.speakers.batuhanYalcin,
    featured: true,
    portrait: "standard",
  },
  {
    id: "hale-nur-kumcuoglu",
    name: "Hale Nur Kumcuoglu Erdoğan",
    role: "Technical Business Analyst",
    company: "Vakıfbank",
    image: assets.speakers.haleNurKumcuoglu,
    featured: true,
    portrait: "standard",
  },
  {
    id: "ege-kaan-isik",
    name: "Ege Kaan Işık",
    role: "Software Development Specialist",
    company: "Doğuş Teknoloji",
    image: assets.speakers.egeKaanIsik,
    featured: true,
    portrait: "standard",
  },
  {
    id: "levent-kantaroglu",
    name: "Levent Kantaroğlu",
    role: "Cross-Platform Mobile Team Lead | GDE, Flutter and Dart",
    company: "Turkish Airlines Technology",
    image: assets.speakers.leventKantaroglu,
    featured: true,
    portrait: "standard",
  },
  {
    id: "mannai-mortadha",
    name: "Mannai Mortadha",
    role: "Generative AI Engineer | GDE, Cloud AI",
    company: "SFEIR",
    image: assets.speakers.mannaiMortadha,
    featured: true,
    portrait: "standard",
  },
  {
    id: "mert-polat",
    name: "Mert Polat",
    role: "LitmusChaos Turkey Chapter Lead | SRE/Chaos Engineer",
    company: "Intertech",
    image: assets.speakers.mertPolat,
    featured: true,
    portrait: "standard",
  },
  {
    id: "nisanur-ilhan",
    name: "Nisanur İlhan",
    role: "Data Scientist | GDE, Cloud AI",
    company: "Turkish Aerospace",
    image: assets.speakers.nisanurIlhan,
    featured: true,
    portrait: "standard",
  },
  {
    id: "omar-elcircevi",
    name: "Omar Elcircevi",
    role: "Machine Learning Engineer | GDE, Cloud AI",
    company: "",
    image: assets.speakers.omarElcircevi,
    featured: true,
    portrait: "standard",
  },
  {
    id: "serkan-alc",
    name: "Serkan Alc",
    role: "DevRel Manager",
    company: "Lodos.io",
    image: assets.speakers.serkanAlc,
    featured: true,
    portrait: "standard",
  },
];

export const featuredSpeakers = speakers
  .filter((speaker) => speaker.featured)
  .sort((a, b) => a.name.localeCompare(b.name, "tr"));

export const sessionLabels = {
  keynote: "KEYNOTE",
  talk: "SUNUM",
  break: "",
  registration: "KAYIT",
  networking: "NETWORKING",
} as const satisfies Record<SessionKind, string>;

export const tracks: readonly Track[] = [
  {
    id: "salon-1",
    title: "Salon 1",
    sessions: [
      { id: "kayit", title: "Kayıt", kind: "registration", dateLabel: "14 Kasım", startTime: "10:00", endTime: "10:30", speakerIds: [] },
      { id: "acilis", title: "Keynote", kind: "keynote", dateLabel: "14 Kasım", startTime: "10:30", endTime: "10:45", speakerIds: [], speakerNames: ["GDG Kocaeli Organizers"] },
      { id: "multi-agent", title: "Architecting Multi Agent Systems", kind: "talk", dateLabel: "14 Kasım", startTime: "10:45", endTime: "11:15", speakerIds: ["nisanur-ilhan"] },
      { id: "flutter-genui", title: "Beyond the Chatbox: Dynamic GenUI with Flutter & Maps", kind: "talk", dateLabel: "14 Kasım", startTime: "11:30", endTime: "12:00", speakerIds: ["levent-kantaroglu"] },
      { id: "business-ai-agents", title: "From Idea to Execution: Unlocking Business Value with AI Agents", kind: "talk", dateLabel: "14 Kasım", startTime: "12:00", endTime: "12:30", speakerIds: ["hale-nur-kumcuoglu"] },
      { id: "lightning-talks", title: "Lightning Talks", kind: "networking", dateLabel: "14 Kasım", startTime: "12:30", endTime: "13:00", speakerIds: [] },
      { id: "post-ai", title: "Post-AI Industry Adaptation: How Must Developers Evolve?", kind: "talk", dateLabel: "14 Kasım", startTime: "13:45", endTime: "14:15", speakerIds: ["serkan-alc", "batuhan-yalcin"] },
      { id: "on-device-llm", title: "Beyond the Cloud: High-Performance On-Device Web LLM Inference with LiteRT-LM", kind: "talk", dateLabel: "14 Kasım", startTime: "14:30", endTime: "15:00", speakerIds: ["ege-kaan-isik"] },
      { id: "agentic-ai-workflows", title: "Building Agentic AI Workflows with xAI on Gemini Enterprise Agent Platform (formerly Vertex AI): From Code to Action", kind: "talk", dateLabel: "14 Kasım", startTime: "15:00", endTime: "15:30", speakerIds: ["mannai-mortadha"] },
      { id: "kapanis", title: "Kapanış & Çekilişler", kind: "keynote", dateLabel: "14 Kasım", startTime: "15:30", endTime: "16:00", speakerIds: [] },
    ],
  },
  {
    id: "salon-2",
    title: "Salon 2",
    sessions: [
      { id: "google-adk", title: "Build Your Coding Agent with Google ADK", kind: "talk", dateLabel: "14 Kasım", startTime: "11:30", endTime: "12:30", speakerIds: ["omar-elcircevi"] },
      { id: "chaos-engineering", title: "The Day We Killed 100% of Our Pods: Self-Service Chaos Engineering for 1000+ Microservices at a Bank", kind: "talk", dateLabel: "14 Kasım", startTime: "13:45", endTime: "14:15", speakerIds: ["mert-polat"] },
    ],
  },
];

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
    id: "partners",
    title: "Partnerlerimiz",
    sponsors: [
      {
        id: "kou-teknopark",
        name: "Kocaeli Üniversitesi Teknopark",
        image: assets.sponsors.kouTeknopark,
        url: "https://kouteknopark.com",
      },
      {
        id: "ecs",
        name: "Europe Coding School",
        image: assets.sponsors.ecs,
        url: "https://europecodingschool.com/",
      },
      {
        id: "just-english",
        name: "Just English",
        image: assets.sponsors.justEnglish,
      },
      {
        id: "kocaeli-tanik",
        name: "Kocaeli Tanık",
        image: assets.sponsors.kocaeliTanik,
        url: "http://kocaelitanik.com/",
      },
      {
        id: "jetbrains",
        name: "JetBrains",
        image: assets.sponsors.jetbrains,
        url: "https://www.jetbrains.com/",
      },
      {
        id: "frekans",
        name: "Frekans Creative Studio",
        image: assets.sponsors.frekans,
      },
      {
        id: "cetkin-agency",
        name: "Cetkin Agency",
        image: assets.sponsors.cetkinAgency,
        url: "https://cetkin.agency",
      },
    ],
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
