import { useState } from "react";
import { event as festival } from "../../data";
import { downloadPhoto, type PhotoResult } from "./photo-image";

export type PhotoPlatform = "X" | "LinkedIn" | "Instagram Story";

export function usePhotoSharing(result: PhotoResult, busy: boolean) {
  const [message, setMessage] = useState("");
  const [sharing, setSharing] = useState(false);
  const [target, setTarget] = useState<PhotoPlatform | null>(null);
  const [copied, setCopied] = useState(false);
  const save = () => downloadPhoto(result);

  async function copyPhoto() {
    try {
      if (!navigator.clipboard?.write || typeof ClipboardItem === "undefined") return false;
      await navigator.clipboard.write([new ClipboardItem({ "image/png": result.file })]);
      setCopied(true);
      return true;
    } catch {
      return false;
    }
  }

  async function share(platform: PhotoPlatform) {
    if (busy || sharing) return;
    setMessage("");
    setTarget(null);
    setCopied(false);
    setSharing(true);
    try {
      if (navigator.share && navigator.canShare?.({ files: [result.file] })) {
        setMessage(`Paylaşım menüsünden ${platform} uygulamasını seç.`);
        await navigator.share({ files: [result.file] });
        setMessage("");
        return;
      }
      setTarget(platform);
      if (platform !== "Instagram Story" && await copyPhoto()) {
        setMessage("Fotoğraf kopyalandı. Platformu açıp yeni gönderiye Ctrl+V veya ⌘V ile yapıştır. Yapıştırma desteklenmezse görseli kaydedip fotoğraf olarak ekle.");
      } else {
        save();
        setMessage(platform === "Instagram Story"
          ? "Fotoğraf indirildi. Instagram’ı açıp yeni hikâyeye galerinden bu fotoğrafı ekle."
          : "Bu tarayıcı fotoğrafı doğrudan aktaramıyor. İndirilen görseli yeni gönderiye fotoğraf olarak ekle.");
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        setMessage("");
      } else {
        setTarget(platform);
        setMessage("Fotoğraf paylaşımı açılamadı. Görseli kaydedip platforma fotoğraf olarak ekleyebilirsin.");
      }
    } finally {
      setSharing(false);
    }
  }

  return { message, sharing, target, copied, share, save };
}

export function platformUrl(platform: PhotoPlatform) {
  if (platform === "X") return `https://x.com/intent/tweet?text=${encodeURIComponent(`Ben de ${festival.name}’dayım! #DevFestKocaeli${festival.year}`)}`;
  if (platform === "LinkedIn") return "https://www.linkedin.com/feed/";
  return "https://www.instagram.com/";
}
