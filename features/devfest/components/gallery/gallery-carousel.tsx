"use client";

import { useEffect, useState } from "react";
import type { GalleryYear, ImageAsset } from "../../types";
import { AssetImage } from "../shared/asset-image";
import { GalleryLightbox } from "./gallery-lightbox";

type GalleryCarouselProps = {
  years: readonly GalleryYear[];
  controls: { previous: ImageAsset; next: ImageAsset; play: ImageAsset };
};

export function GalleryCarousel({ years, controls }: GalleryCarouselProps) {
  const defaultYear =
    years.find((entry) => entry.images.length > 0) ?? years[0];
  const [year, setYear] = useState(defaultYear?.year);
  const [offset, setOffset] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const selected = years.find((entry) => entry.year === year);
  const images = selected?.images ?? [];
  const imageCount = images.length;
  const visibleCount = Math.min(imageCount, 5);

  useEffect(() => {
    if (!playing || expandedIndex !== null || imageCount < 2) return;
    const timer = setInterval(
      () => setOffset((value) => (value + 1) % imageCount),
      2500,
    );
    return () => clearInterval(timer);
  }, [playing, imageCount, expandedIndex]);

  function selectYear(value: number) {
    setYear(value);
    setOffset(0);
    setPlaying(true);
  }

  function advance(direction: number) {
    if (imageCount > 1)
      setOffset((value) => (value + direction + imageCount) % imageCount);
  }

  if (!defaultYear) return null;

  return (
    <>
      <div className="year-tabs" role="group" aria-label="Galeri yılı">
        {years.map((entry) => (
          <button
            key={entry.year}
            className={`button ${year === entry.year ? "primary" : "secondary"}`}
            aria-pressed={year === entry.year}
            onClick={() => selectYear(entry.year)}
          >
            {entry.year}
          </button>
        ))}
      </div>
      {imageCount > 0 ? (
        <div
          className="gallery-stage"
          aria-label={`${year} galeri önizlemesi`}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              advance(-1);
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              advance(1);
            }
          }}
        >
          {Array.from({ length: visibleCount }, (_, slot) => {
            const image = images[(slot + offset) % imageCount];
            const position = slot + Math.floor((5 - visibleCount) / 2);
            return (
              <button
                type="button"
                className={`gallery-image slot-${position}`}
                key={slot}
                aria-label={`${image.alt} — büyüt`}
                aria-haspopup="dialog"
                onClick={() => setExpandedIndex((slot + offset) % imageCount)}
              >
                <AssetImage
                  image={image}
                  sizes="(max-width: 700px) 230px, 360px"
                />
              </button>
            );
          })}
          {imageCount > 1 && (
            <>
              <button
                className="gallery-arrow previous"
                aria-label="Önceki görsel"
                onClick={() => advance(-1)}
              >
                <AssetImage image={controls.previous} />
              </button>
              <button
                className="gallery-arrow next"
                aria-label="Sonraki görsel"
                onClick={() => advance(1)}
              >
                <AssetImage image={controls.next} />
              </button>
              <button
                className="gallery-play"
                aria-label={
                  playing
                    ? "Slayt gösterisini duraklat"
                    : "Slayt gösterisini başlat"
                }
                aria-pressed={playing}
                onClick={() => setPlaying((value) => !value)}
              >
                {playing ? (
                  <span aria-hidden="true">Ⅱ</span>
                ) : (
                  <AssetImage image={controls.play} />
                )}
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="gallery-empty" role="status">
          <h3>{year} DevFest</h3>
          <p>Bu yıla ait galeri henüz eklenmedi.</p>
          {defaultYear.images.length > 0 && (
            <button
              className="button secondary"
              onClick={() => selectYear(defaultYear.year)}
            >
              {defaultYear.year} önizlemesine dön
            </button>
          )}
        </div>
      )}
      {expandedIndex !== null && (
        <GalleryLightbox
          year={year}
          images={images}
          index={expandedIndex}
          onChange={setExpandedIndex}
          onClose={() => setExpandedIndex(null)}
        />
      )}
    </>
  );
}
