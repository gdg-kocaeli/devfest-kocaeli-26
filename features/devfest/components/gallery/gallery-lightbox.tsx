"use client";

import { useEffect, useRef } from "react";
import type { ImageAsset } from "../../types";
import { AssetImage } from "../shared/asset-image";

type GalleryLightboxProps = {
  year: number | undefined;
  images: readonly ImageAsset[];
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
};

export function GalleryLightbox({
  year,
  images,
  index,
  onChange,
  onClose,
}: GalleryLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const focused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      if (focused instanceof HTMLElement) focused.focus();
    };
  }, []);

  function advance(direction: number) {
    onChange((index + direction + images.length) % images.length);
  }

  return (
    <dialog
      ref={dialogRef}
      className="gallery-lightbox"
      aria-label={`DevFest ${year} fotoğraf galerisi`}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          advance(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <div className="gallery-lightbox-content">
        <button
          type="button"
          className="gallery-lightbox-close"
          aria-label="Galeriyi kapat"
          onClick={onClose}
          autoFocus
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
        <AssetImage key={index} image={images[index]} sizes="100vw" />
        {images.length > 1 && (
          <>
            <button
              type="button"
              className="gallery-lightbox-previous"
              aria-label="Önceki fotoğraf"
              onClick={() => advance(-1)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              className="gallery-lightbox-next"
              aria-label="Sonraki fotoğraf"
              onClick={() => advance(1)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="m9 6 6 6-6 6" />
              </svg>
            </button>
          </>
        )}
        <p className="gallery-lightbox-caption" aria-live="polite">
          DevFest {year} · {index + 1} / {images.length}
        </p>
      </div>
    </dialog>
  );
}
