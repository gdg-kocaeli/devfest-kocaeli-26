import { assets } from "../../assets";
import { AssetImage } from "../shared/asset-image";
import type { PhotoResult } from "./photo-image";
import { platformUrl, usePhotoSharing } from "./use-photo-sharing";

const platforms = [
  { name: "X", icon: assets.contact.x },
  { name: "LinkedIn", icon: assets.contact.linkedin },
  { name: "Instagram Story", icon: assets.contact.instagram },
] as const;

export function PhotoShareControls({ result, busy }: { result: PhotoResult; busy: boolean }) {
  const { message, sharing, target, copied, share, save } = usePhotoSharing(result, busy);

  return (
    <>
      <div className="photo-share">
        <div className="photo-platforms">
          {platforms.map((platform) => (
            <button
              key={platform.name}
              aria-label={`${platform.name} üzerinde paylaş`}
              title={`${platform.name} üzerinde paylaş`}
              disabled={busy || sharing}
              onClick={() => share(platform.name)}
            >
              <AssetImage
                image={platform.icon}
                alt=""
                className={`photo-platform-icon${platform.name === "X" ? " photo-platform-icon-x" : ""}`}
              />
            </button>
          ))}
        </div>
        <p className="photo-hint">
          Bir platform seç. Destekleyen cihazlarda çerçeveli fotoğraf doğrudan paylaşım menüsüne aktarılır.
        </p>
        <button className="photo-secondary" disabled={busy} onClick={save}>
          Görseli kaydet ↓
        </button>
      </div>
      {target && !sharing && (
        <div className="photo-transfer">
          <p>{copied ? "Fotoğrafın hazır, şimdi yeni gönderiye yapıştır." : "Fotoğrafı yeni gönderiye veya hikâyeye ekle."}</p>
          <a className="photo-secondary" href={platformUrl(target)} target="_blank" rel="noopener noreferrer">
            {target === "Instagram Story" ? "Instagram" : target} aç ↗
          </a>
        </div>
      )}
      <p className="photo-message" role="status" aria-live="polite">{message}</p>
    </>
  );
}
