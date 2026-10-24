import type { Metadata } from "next";
import { Fustat, Instrument_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { assets } from "@/features/devfest/assets";
import { event } from "@/features/devfest/data";
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
  title: event.title,
  description: event.description,
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
