"use client";

import { PhotoShareControls } from "./photo-share-controls";
import { usePhotoBooth } from "./use-photo-booth";
import "./photo-booth.css";

export function PhotoBooth({ autoOpen }: { autoOpen: boolean }) {
  const {
    dialog, input, video, open, camera, ready, busy, result, message,
    close, upload, startCamera, stopCamera, capture, show, markCameraReady,
  } = usePhotoBooth(autoOpen);

  return (
    <>
      <button className="photo-reopen" onClick={show}>Fotoğrafını paylaş</button>
      {open && (
        <dialog
          ref={dialog}
          className="photo-modal"
          aria-labelledby="photo-title"
          aria-describedby="photo-description"
          onCancel={(event) => { event.preventDefault(); close(); }}
          onClick={(event) => { if (event.target === event.currentTarget) close(); }}
        >
          <div className="photo-layout">
            <button className="photo-close" aria-label="Fotoğraf penceresini kapat" onClick={close}>×</button>
            <div className="photo-preview">
              {camera ? (
                <video ref={video} autoPlay muted playsInline onCanPlay={markCameraReady} aria-label="Canlı kamera önizlemesi" />
              ) : result ? (
                <img src={result.url} alt="Fotoğrafının yer aldığı DevFest Kocaeli paylaşım kartı" />
              ) : (
                <div className="photo-placeholder"><span>Bu karede<br />sen varsın.</span></div>
              )}
              {(!result || camera) && (
                <img className="photo-frame" src="/assets/devfest/frame.png" alt="" aria-hidden="true" />
              )}
              {busy && <span className="photo-loading" role="status">Hazırlanıyor…</span>}
            </div>
            <div className="photo-controls">
              <p className="photo-eyebrow">DEVFEST KOCAELİ HATIRASI</p>
              <h2 id="photo-title">{result ? "Hazırsan, paylaş!" : "Ben de oradayım!"}</h2>
              <p id="photo-description">
                {result
                  ? "DevFest heyecanını arkadaşlarınla paylaş. Hatıranı kaydetmeyi de unutma."
                  : "Bir fotoğrafını ekle veya hemen bir kare çek. DevFest Kocaeli’ye özel paylaşım görselin hazır olsun."}
              </p>
              <input
                ref={input}
                type="file"
                accept="image/*"
                hidden
                onChange={(event) => { void upload(event.target.files?.[0]); event.target.value = ""; }}
              />
              <div className="photo-actions">
                {camera ? (
                  <>
                    <button className="photo-primary" disabled={!ready || busy} onClick={capture}>Fotoğrafı çek</button>
                    <button className="photo-secondary" onClick={stopCamera}>Kamerayı kapat</button>
                  </>
                ) : (
                  <>
                    <button className={result ? "photo-secondary" : "photo-primary"} disabled={busy} onClick={() => input.current?.click()}>
                      {result ? "Başka fotoğraf yükle" : "Fotoğraf yükle"}
                    </button>
                    <button className="photo-secondary" disabled={busy} onClick={startCamera}>Kamerayla çek</button>
                  </>
                )}
              </div>
              {result && !camera && <PhotoShareControls key={result.url} result={result} busy={busy} />}
              <p className="photo-message" role="status" aria-live="polite">{message}</p>
              <p className="photo-privacy">Fotoğrafın yalnızca cihazında işlenir.</p>
              <button className="photo-skip" onClick={close}>Siteyi keşfet →</button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
