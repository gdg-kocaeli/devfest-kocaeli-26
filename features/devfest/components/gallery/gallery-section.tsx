import { assets } from "../../assets";
import { galleryYears } from "../../data";
import { GalleryCarousel } from "./gallery-carousel";

export function GallerySection() {
  return (
    <section id="galeri" className="gallery" aria-labelledby="gallery-title">
      <p className="section-label">GALERİ</p>
      <h2 id="gallery-title">Her yıl, yeni bir hikaye.</h2>
      <p className="section-description">
        Geçmiş DevFest’lerden birlikte biriktirdiğimiz anlar.
      </p>
      <GalleryCarousel
        years={galleryYears}
        controls={{
          previous: assets.gallery.previous,
          next: assets.gallery.next,
          play: assets.gallery.play,
        }}
      />
    </section>
  );
}
