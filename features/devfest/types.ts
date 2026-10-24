import type { StaticImageData } from "next/image";

export type ImageAsset = Readonly<{
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
}>;

export type Speaker = Readonly<{
  id: string;
  name: string;
  role: string;
  company: string;
  image: ImageAsset;
  profileUrl?: string;
  featured: boolean;
  portrait: "standard" | "cropped" | "wide";
}>;

export type SessionKind = "keynote" | "talk" | "break";
export type Session = Readonly<{
  id: string;
  title: string;
  kind: SessionKind;
  dateLabel: string;
  startTime: string;
  endTime: string;
  speakerIds: readonly string[];
}>;

export type Track = Readonly<{
  id: string;
  title: string;
  sessions: readonly Session[];
}>;

export type SponsorGroup = Readonly<{
  id: "platinum" | "gold" | "silver" | "bronze";
  title: string;
  divider?: ImageAsset;
  sponsors: readonly {
    id: string;
    name: string;
    image: ImageAsset;
    url?: string;
  }[];
}>;

export type GalleryYear = Readonly<{
  year: number;
  images: readonly ImageAsset[];
}>;

export type SocialLink = Readonly<{
  label: string;
  url: string;
  icon: ImageAsset;
}>;
