import egeKaanIsikPortrait from "../../public/assets/devfest/speakers/ege-kaan-isik.jpg";
import haleNurKumcuogluPortrait from "../../public/assets/devfest/speakers/hale-nur-kumcuoglu.png";
import leventKantarogluPortrait from "../../public/assets/devfest/speakers/levent-kantaroglu.png";
import mannaiMortadhaPortrait from "../../public/assets/devfest/speakers/mannai-mortadha.jpg";
import mertPolatPortrait from "../../public/assets/devfest/speakers/mert-polat.jpg";
import nisanurIlhanPortrait from "../../public/assets/devfest/speakers/nisanur-ilhan.jpg";
import omarElcirceviPortrait from "../../public/assets/devfest/speakers/omar-elcircevi.jpg";
import serkanAlcPortrait from "../../public/assets/devfest/speakers/serkan-alc.jpg";
import heroCharacters from "../../public/assets/devfest/hero/characters.png";
import speakersMicrophone from "../../public/assets/devfest/speakers/microphone.png";
import sponsorsEcs from "../../public/assets/devfest/sponsors/ecs.png";
import sponsorsJustEnglish from "../../public/assets/devfest/sponsors/just-english.png";
import sponsorsFrekans from "../../public/assets/devfest/sponsors/frekans.jpg";
import sponsorsJetbrains from "../../public/assets/devfest/sponsors/jetbrains.png";
import sponsorsGoogleForDevs from "../../public/assets/devfest/sponsors/google-for-devs.png";
import sponsorsKouTeknopark from "../../public/assets/devfest/sponsors/kocaeli-universitesi-teknopark-logosu.png";
import sponsorsKocaeliTanik from "../../public/assets/devfest/sponsors/kocaeli-tanik.png";
import programAbstractWaves from "../../public/assets/devfest/program/abstract-waves.png";
import programFadeTop from "../../public/assets/devfest/program/fade-top.png";
import programFadeBottom from "../../public/assets/devfest/program/fade-bottom.png";
import gallery2025Photo1 from "../../public/assets/devfest/gallery/devfest25/1.jpg";
import gallery2025Photo2 from "../../public/assets/devfest/gallery/devfest25/2.jpg";
import gallery2025Photo3 from "../../public/assets/devfest/gallery/devfest25/3.jpg";
import gallery2025Photo4 from "../../public/assets/devfest/gallery/devfest25/4.jpg";
import gallery2025Photo5 from "../../public/assets/devfest/gallery/devfest25/5.jpg";
import gallery2025Photo6 from "../../public/assets/devfest/gallery/devfest25/6.jpg";
import gallery2025Photo7 from "../../public/assets/devfest/gallery/devfest25/7.jpg";
import gallery2025Photo8 from "../../public/assets/devfest/gallery/devfest25/8.jpg";
import gallery2024Photo1 from "../../public/assets/devfest/gallery/devfest24/1.jpg";
import gallery2024Photo2 from "../../public/assets/devfest/gallery/devfest24/2.jpg";
import gallery2024Photo3 from "../../public/assets/devfest/gallery/devfest24/3.jpg";
import gallery2024Photo4 from "../../public/assets/devfest/gallery/devfest24/4.jpg";
import gallery2024Photo5 from "../../public/assets/devfest/gallery/devfest24/5.jpg";
import gallery2024Photo6 from "../../public/assets/devfest/gallery/devfest24/6.jpg";
import gallery2024Photo7 from "../../public/assets/devfest/gallery/devfest24/7.jpg";
import gallery2024Photo8 from "../../public/assets/devfest/gallery/devfest24/8.jpg";
import gallery2024Photo9 from "../../public/assets/devfest/gallery/devfest24/9.jpg";
import gallery2023Photo1 from "../../public/assets/devfest/gallery/devfest23/1.jpg";
import gallery2023Photo2 from "../../public/assets/devfest/gallery/devfest23/2.jpg";
import gallery2023Photo3 from "../../public/assets/devfest/gallery/devfest23/3.jpg";
import gallery2023Photo4 from "../../public/assets/devfest/gallery/devfest23/4.jpg";
import gallery2023Photo5 from "../../public/assets/devfest/gallery/devfest23/5.jpg";
import gallery2023Photo6 from "../../public/assets/devfest/gallery/devfest23/6.jpg";
import gallery2023Photo7 from "../../public/assets/devfest/gallery/devfest23/7.jpg";
import gallery2023Photo8 from "../../public/assets/devfest/gallery/devfest23/8.jpg";
import gallery2023Photo9 from "../../public/assets/devfest/gallery/devfest23/9.jpg";
import gallery2023Photo10 from "../../public/assets/devfest/gallery/devfest23/10.jpg";
import gallery2023Photo11 from "../../public/assets/devfest/gallery/devfest23/11.jpg";
import gallery2023Photo12 from "../../public/assets/devfest/gallery/devfest23/12.jpg";
import gallery2023Photo13 from "../../public/assets/devfest/gallery/devfest23/13.jpg";
import gallery2022Photo1 from "../../public/assets/devfest/gallery/devfest22/1.png";
import gallery2022Photo2 from "../../public/assets/devfest/gallery/devfest22/2.png";
import gallery2022Photo3 from "../../public/assets/devfest/gallery/devfest22/3.jpg";
import gallery2022Photo4 from "../../public/assets/devfest/gallery/devfest22/4.png";
import contactSpeechBubbles from "../../public/assets/devfest/contact/speech-bubbles.png";
import type { ImageAsset } from "./types";

export const assets = {
  hero: {
    logo: {
      src: "/assets/devfest/hero/logo.svg",
      width: 100,
      height: 61,
      alt: "",
    },
    glow: {
      src: "/assets/devfest/hero/glow.svg",
      width: 732.381,
      height: 975.254,
      alt: "",
    },
    calendar: {
      src: "/assets/devfest/hero/calendar.svg",
      width: 48,
      height: 48,
      alt: "",
    },
    mapPin: {
      src: "/assets/devfest/hero/map-pin.svg",
      width: 48,
      height: 48,
      alt: "",
    },
    ticketDivider: {
      src: "/assets/devfest/hero/ticket-divider.svg",
      width: 576,
      height: 1,
      alt: "",
    },
    characters: {
      src: heroCharacters,
      width: heroCharacters.width,
      height: heroCharacters.height,
      alt: "",
    },
  },
  speakers: {
    haleNurKumcuoglu: {
      src: haleNurKumcuogluPortrait,
      width: haleNurKumcuogluPortrait.width,
      height: haleNurKumcuogluPortrait.height,
      alt: "Hale Nur Kumcuoglu",
    },
    egeKaanIsik: {
      src: egeKaanIsikPortrait,
      width: egeKaanIsikPortrait.width,
      height: egeKaanIsikPortrait.height,
      alt: "Ege Kaan Işık",
    },
    leventKantaroglu: {
      src: leventKantarogluPortrait,
      width: leventKantarogluPortrait.width,
      height: leventKantarogluPortrait.height,
      alt: "Levent Kantaroğlu",
    },
    mannaiMortadha: {
      src: mannaiMortadhaPortrait,
      width: mannaiMortadhaPortrait.width,
      height: mannaiMortadhaPortrait.height,
      alt: "Mannai Mortadha",
    },
    mertPolat: {
      src: mertPolatPortrait,
      width: mertPolatPortrait.width,
      height: mertPolatPortrait.height,
      alt: "Mert Polat",
    },
    nisanurIlhan: {
      src: nisanurIlhanPortrait,
      width: nisanurIlhanPortrait.width,
      height: nisanurIlhanPortrait.height,
      alt: "Nisanur İlhan",
    },
    omarElcircevi: {
      src: omarElcirceviPortrait,
      width: omarElcirceviPortrait.width,
      height: omarElcirceviPortrait.height,
      alt: "Omar Elcircevi",
    },
    serkanAlc: {
      src: serkanAlcPortrait,
      width: serkanAlcPortrait.width,
      height: serkanAlcPortrait.height,
      alt: "Serkan Alç",
    },
    batuhanYalcin: {
      src: "/assets/devfest/speakers/batuhan-yalcin.jpeg",
      width: 400,
      height: 400,
      alt: "Batuhan Yalçın",
    },
    microphone: {
      src: speakersMicrophone,
      width: speakersMicrophone.width,
      height: speakersMicrophone.height,
      alt: "",
    },
  },
  sponsors: {
    jetbrains: {
      src: sponsorsJetbrains,
      width: sponsorsJetbrains.width,
      height: sponsorsJetbrains.height,
      alt: "JetBrains",
    },
    frekans: {
      src: sponsorsFrekans,
      width: sponsorsFrekans.width,
      height: sponsorsFrekans.height,
      alt: "Frekans",
    },
    justEnglish: {
      src: sponsorsJustEnglish,
      width: sponsorsJustEnglish.width,
      height: sponsorsJustEnglish.height,
      alt: "Just English",
    },
    ecs: {
      src: sponsorsEcs,
      width: sponsorsEcs.width,
      height: sponsorsEcs.height,
      alt: "Europe Coding School",
    },
    kocaeliTanik: {
      src: sponsorsKocaeliTanik,
      width: 200,
      height: 200,
      alt: "Kocaeli Tanık",
    },
    kouTeknopark: {
      src: sponsorsKouTeknopark,
      width: 320,
      height: Math.round((320 * sponsorsKouTeknopark.height) / sponsorsKouTeknopark.width),
      alt: "Kocaeli Üniversitesi Teknopark",
    },
    googleForDevs: {
      src: sponsorsGoogleForDevs,
      width: sponsorsGoogleForDevs.width,
      height: sponsorsGoogleForDevs.height,
      alt: "Google for Developers",
    },
    goldDivider: {
      src: "/assets/devfest/sponsors/gold-divider.svg",
      width: 120,
      height: 6,
      alt: "",
    },
    silverDivider: {
      src: "/assets/devfest/sponsors/silver-divider.svg",
      width: 120,
      height: 6,
      alt: "",
    },
    bronzeDivider: {
      src: "/assets/devfest/sponsors/bronze-divider.svg",
      width: 120,
      height: 6,
      alt: "",
    },
    google: {
      src: "/assets/devfest/sponsors/google.svg",
      width: 80,
      height: 80,
      alt: "",
    },
    adobe: {
      src: "/assets/devfest/sponsors/adobe.svg",
      width: 72,
      height: 64,
      alt: "",
    },
    pinterest: {
      src: "/assets/devfest/sponsors/pinterest.svg",
      width: 72,
      height: 72,
      alt: "",
    },
    twitter: {
      src: "/assets/devfest/sponsors/twitter.svg",
      width: 60,
      height: 49,
      alt: "",
    },
    facebook: {
      src: "/assets/devfest/sponsors/facebook.svg",
      width: 60,
      height: 60,
      alt: "",
    },
    behance: {
      src: "/assets/devfest/sponsors/behance.svg",
      width: 60,
      height: 60,
      alt: "",
    },
  },
  program: {
    abstractWaves: {
      src: programAbstractWaves,
      width: programAbstractWaves.width,
      height: programAbstractWaves.height,
      alt: "",
    },
    fadeTop: {
      src: programFadeTop,
      width: programFadeTop.width,
      height: programFadeTop.height,
      alt: "",
    },
    fadeBottom: {
      src: programFadeBottom,
      width: programFadeBottom.width,
      height: programFadeBottom.height,
      alt: "",
    },
  },
  gallery: {
    photo20251: {
      src: gallery2025Photo1,
      width: gallery2025Photo1.width,
      height: gallery2025Photo1.height,
      alt: "DevFest Kocaeli 2025 — 1. fotoğraf",
    },
    photo20252: {
      src: gallery2025Photo2,
      width: gallery2025Photo2.width,
      height: gallery2025Photo2.height,
      alt: "DevFest Kocaeli 2025 — 2. fotoğraf",
    },
    photo20253: {
      src: gallery2025Photo3,
      width: gallery2025Photo3.width,
      height: gallery2025Photo3.height,
      alt: "DevFest Kocaeli 2025 — 3. fotoğraf",
    },
    photo20254: {
      src: gallery2025Photo4,
      width: gallery2025Photo4.width,
      height: gallery2025Photo4.height,
      alt: "DevFest Kocaeli 2025 — 4. fotoğraf",
    },
    photo20255: {
      src: gallery2025Photo5,
      width: gallery2025Photo5.width,
      height: gallery2025Photo5.height,
      alt: "DevFest Kocaeli 2025 — 5. fotoğraf",
    },
    photo20256: {
      src: gallery2025Photo6,
      width: gallery2025Photo6.width,
      height: gallery2025Photo6.height,
      alt: "DevFest Kocaeli 2025 — 6. fotoğraf",
    },
    photo20257: {
      src: gallery2025Photo7,
      width: gallery2025Photo7.width,
      height: gallery2025Photo7.height,
      alt: "DevFest Kocaeli 2025 — 7. fotoğraf",
    },
    photo20258: {
      src: gallery2025Photo8,
      width: gallery2025Photo8.width,
      height: gallery2025Photo8.height,
      alt: "DevFest Kocaeli 2025 — 8. fotoğraf",
    },
    photo20241: {
      src: gallery2024Photo1,
      width: gallery2024Photo1.width,
      height: gallery2024Photo1.height,
      alt: "DevFest Kocaeli 2024 — 1. fotoğraf",
    },
    photo20242: {
      src: gallery2024Photo2,
      width: gallery2024Photo2.width,
      height: gallery2024Photo2.height,
      alt: "DevFest Kocaeli 2024 — 2. fotoğraf",
    },
    photo20243: {
      src: gallery2024Photo3,
      width: gallery2024Photo3.width,
      height: gallery2024Photo3.height,
      alt: "DevFest Kocaeli 2024 — 3. fotoğraf",
    },
    photo20244: {
      src: gallery2024Photo4,
      width: gallery2024Photo4.width,
      height: gallery2024Photo4.height,
      alt: "DevFest Kocaeli 2024 — 4. fotoğraf",
    },
    photo20245: {
      src: gallery2024Photo5,
      width: gallery2024Photo5.width,
      height: gallery2024Photo5.height,
      alt: "DevFest Kocaeli 2024 — 5. fotoğraf",
    },
    photo20246: {
      src: gallery2024Photo6,
      width: gallery2024Photo6.width,
      height: gallery2024Photo6.height,
      alt: "DevFest Kocaeli 2024 — 6. fotoğraf",
    },
    photo20247: {
      src: gallery2024Photo7,
      width: gallery2024Photo7.width,
      height: gallery2024Photo7.height,
      alt: "DevFest Kocaeli 2024 — 7. fotoğraf",
    },
    photo20248: {
      src: gallery2024Photo8,
      width: gallery2024Photo8.width,
      height: gallery2024Photo8.height,
      alt: "DevFest Kocaeli 2024 — 8. fotoğraf",
    },
    photo20249: {
      src: gallery2024Photo9,
      width: gallery2024Photo9.width,
      height: gallery2024Photo9.height,
      alt: "DevFest Kocaeli 2024 — 9. fotoğraf",
    },
    photo20231: {
      src: gallery2023Photo1,
      width: gallery2023Photo1.width,
      height: gallery2023Photo1.height,
      alt: "DevFest Kocaeli 2023 — 1. fotoğraf",
    },
    photo20232: {
      src: gallery2023Photo2,
      width: gallery2023Photo2.width,
      height: gallery2023Photo2.height,
      alt: "DevFest Kocaeli 2023 — 2. fotoğraf",
    },
    photo20233: {
      src: gallery2023Photo3,
      width: gallery2023Photo3.width,
      height: gallery2023Photo3.height,
      alt: "DevFest Kocaeli 2023 — 3. fotoğraf",
    },
    photo20234: {
      src: gallery2023Photo4,
      width: gallery2023Photo4.width,
      height: gallery2023Photo4.height,
      alt: "DevFest Kocaeli 2023 — 4. fotoğraf",
    },
    photo20235: {
      src: gallery2023Photo5,
      width: gallery2023Photo5.width,
      height: gallery2023Photo5.height,
      alt: "DevFest Kocaeli 2023 — 5. fotoğraf",
    },
    photo20236: {
      src: gallery2023Photo6,
      width: gallery2023Photo6.width,
      height: gallery2023Photo6.height,
      alt: "DevFest Kocaeli 2023 — 6. fotoğraf",
    },
    photo20237: {
      src: gallery2023Photo7,
      width: gallery2023Photo7.width,
      height: gallery2023Photo7.height,
      alt: "DevFest Kocaeli 2023 — 7. fotoğraf",
    },
    photo20238: {
      src: gallery2023Photo8,
      width: gallery2023Photo8.width,
      height: gallery2023Photo8.height,
      alt: "DevFest Kocaeli 2023 — 8. fotoğraf",
    },
    photo20239: {
      src: gallery2023Photo9,
      width: gallery2023Photo9.width,
      height: gallery2023Photo9.height,
      alt: "DevFest Kocaeli 2023 — 9. fotoğraf",
    },
    photo202310: {
      src: gallery2023Photo10,
      width: gallery2023Photo10.width,
      height: gallery2023Photo10.height,
      alt: "DevFest Kocaeli 2023 — 10. fotoğraf",
    },
    photo202311: {
      src: gallery2023Photo11,
      width: gallery2023Photo11.width,
      height: gallery2023Photo11.height,
      alt: "DevFest Kocaeli 2023 — 11. fotoğraf",
    },
    photo202312: {
      src: gallery2023Photo12,
      width: gallery2023Photo12.width,
      height: gallery2023Photo12.height,
      alt: "DevFest Kocaeli 2023 — 12. fotoğraf",
    },
    photo202313: {
      src: gallery2023Photo13,
      width: gallery2023Photo13.width,
      height: gallery2023Photo13.height,
      alt: "DevFest Kocaeli 2023 — 13. fotoğraf",
    },
    photo20221: {
      src: gallery2022Photo1,
      width: gallery2022Photo1.width,
      height: gallery2022Photo1.height,
      alt: "DevFest Kocaeli 2022 — 1. fotoğraf",
    },
    photo20222: {
      src: gallery2022Photo2,
      width: gallery2022Photo2.width,
      height: gallery2022Photo2.height,
      alt: "DevFest Kocaeli 2022 — 2. fotoğraf",
    },
    photo20223: {
      src: gallery2022Photo3,
      width: gallery2022Photo3.width,
      height: gallery2022Photo3.height,
      alt: "DevFest Kocaeli 2022 — 3. fotoğraf",
    },
    photo20224: {
      src: gallery2022Photo4,
      width: gallery2022Photo4.width,
      height: gallery2022Photo4.height,
      alt: "DevFest Kocaeli 2022 — 4. fotoğraf",
    },
    previous: {
      src: "/assets/devfest/gallery/previous.svg",
      width: 32,
      height: 32,
      alt: "",
    },
    next: {
      src: "/assets/devfest/gallery/next.svg",
      width: 32,
      height: 32,
      alt: "",
    },
    play: {
      src: "/assets/devfest/gallery/play.svg",
      width: 20,
      height: 20,
      alt: "",
    },
  },
  contact: {
    speechBubbles: {
      src: contactSpeechBubbles,
      width: contactSpeechBubbles.width,
      height: contactSpeechBubbles.height,
      alt: "",
    },
    github: {
      src: "/assets/devfest/contact/github.svg",
      width: 48,
      height: 48.0021,
      alt: "",
    },
    x: { src: "/assets/devfest/contact/x.svg", width: 32, height: 32, alt: "" },
    instagram: {
      src: "/assets/devfest/contact/instagram.svg",
      width: 48,
      height: 48,
      alt: "",
    },
    linkedin: {
      src: "/assets/devfest/contact/linkedin.svg",
      width: 48,
      height: 48,
      alt: "",
    },
  },
} as const satisfies Record<string, Record<string, ImageAsset>>;
