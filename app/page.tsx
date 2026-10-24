import "@/features/devfest/styles.css";
import { ContactSection } from "@/features/devfest/components/contact/contact-section";
import { GallerySection } from "@/features/devfest/components/gallery/gallery-section";
import {
  HeroBackdrop,
  HeroSection,
} from "@/features/devfest/components/hero/hero-section";
import { ProgramSection } from "@/features/devfest/components/program/program-section";
import { SiteHeader } from "@/features/devfest/components/site-header";
import { SpeakersSection } from "@/features/devfest/components/speakers/speakers-section";
import { SponsorsSection } from "@/features/devfest/components/sponsors/sponsors-section";
import { eventStructuredData } from "@/features/devfest/seo";

export default function Home() {
  return (
    <div className="site-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <a href="#icerik" className="skip-link">
        İçeriğe geç
      </a>
      <HeroBackdrop />
      <SiteHeader />
      <main id="icerik" className="container main-content">
        <HeroSection />
        <SponsorsSection />
        <SpeakersSection />
        <ProgramSection />
        <GallerySection />
        <ContactSection />
      </main>
    </div>
  );
}
