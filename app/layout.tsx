import type { Metadata } from "next";
import { Fustat, Instrument_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { assets } from "@/features/devfest/assets";
import { event } from "@/features/devfest/data";
import { siteUrl, socialImagePath } from "@/features/devfest/seo";
const fustat = Fustat({
  variable: "--font-fustat",
  subsets: ["latin"],
});
const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: event.title,
  description: event.description,
  applicationName: event.name,
  authors: [{ name: "GDG Kocaeli", url: event.communityUrl }],
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: event.name,
    title: event.title,
    description: event.description,
    url: `${siteUrl}/`,
  },
  twitter: {
    card: "summary_large_image",
    site: "@gdgkocaeli",
    title: event.title,
    description: event.description,
    images: [{ url: socialImagePath, alt: event.name }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: {
      url: assets.hero.logo.src,
      type: "image/svg+xml",
      sizes: "any",
    },
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${fustat.variable} ${instrument.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
