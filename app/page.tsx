import "@/features/devfest/styles.css";
import { ContactSection } from "@/features/devfest/components/contact/contact-section";
import { GallerySection } from "@/features/devfest/components/gallery/gallery-section";
import { OriaverseSection } from "@/features/devfest/components/hero/oriaverse-section";
import { AndroidGiveawaySection } from "@/features/devfest/components/hero/android-giveaway-section";
import { JetBrainsGiveawaySection } from "@/features/devfest/components/hero/jetbrains-giveaway-section";
import { EuropeCodingSchoolGiveawaySection } from "@/features/devfest/components/hero/europe-coding-school-giveaway-section";
import {
  HeroBackdrop,
  HeroSection,
} from "@/features/devfest/components/hero/hero-section";
import { ProgramSection } from "@/features/devfest/components/program/program-section";
import { ProgramAutoOpen } from "@/features/devfest/components/program/program-auto-open";
import { hasProgram } from "@/features/devfest/data";
import { SiteHeader } from "@/features/devfest/components/site-header";
import { SpeakersSection } from "@/features/devfest/components/speakers/speakers-section";
import { SponsorsSection } from "@/features/devfest/components/sponsors/sponsors-section";
import { PhotoBooth } from "@/features/devfest/components/photo/photo-booth";
import {
  eventStructuredData,
  websiteStructuredData,
} from "@/features/devfest/seo";

export default function Home() {
  return (
    <div className="site-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            eventStructuredData,
            websiteStructuredData,
          ]).replace(/</g, "\\u003c"),
        }}
      />
      <a href="#icerik" className="skip-link">
        İçeriğe geç
      </a>
      <HeroBackdrop />
      <SiteHeader />
      {process.env.PROGRAM_AUTO_OPEN === "true" && hasProgram && <ProgramAutoOpen />}
      {process.env.PHOTO_BOOTH_AUTO_OPEN === "true" && <PhotoBooth autoOpen />}
      <main id="icerik" className="container main-content">
        <HeroSection />
        <OriaverseSection />
        <AndroidGiveawaySection />
        <JetBrainsGiveawaySection />
        <EuropeCodingSchoolGiveawaySection />
        <SponsorsSection />
        <SpeakersSection />
        <ProgramSection />
        <GallerySection />
        <ContactSection />
      </main>
    </div>
  );
}
