import { useEffect, useRef, useState } from "react";
import { captureVideo, composePhoto, createPhotoResult, type PhotoResult } from "./photo-image";

export function usePhotoBooth(autoOpen: boolean) {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const stream = useRef<MediaStream | null>(null);
  const request = useRef(0);
  const [open, setOpen] = useState(autoOpen);
  const [camera, setCamera] = useState(false);
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<PhotoResult | null>(null);
  const [message, setMessage] = useState("");

  function stopCamera() {
    stream.current?.getTracks().forEach((track) => track.stop());
    stream.current = null;
    setCamera(false);
    setReady(false);
  }

  function close() {
    request.current++;
    stopCamera();
    setBusy(false);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const modal = dialog.current;
    const focused = document.activeElement;
    const overflow = document.body.style.overflow;
    modal?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      modal?.close();
      document.body.style.overflow = overflow;
      stream.current?.getTracks().forEach((track) => track.stop());
      request.current++;
      if (focused instanceof HTMLElement) focused.focus();
    };
  }, [open]);

  useEffect(() => {
    if (camera && video.current) video.current.srcObject = stream.current;
  }, [camera]);

  useEffect(() => () => {
    if (result) URL.revokeObjectURL(result.url);
  }, [result]);

  async function compose(source: CanvasImageSource, width: number, height: number, token: number) {
    const blob = await composePhoto(source, width, height);
    if (token !== request.current) return;
    setResult(createPhotoResult(blob));
  }

  async function upload(file?: File) {
    if (!file) return;
    const token = ++request.current;
    stopCamera();
    setMessage("");
    if (!file.type.startsWith("image/") || file.size > 20 * 1024 * 1024) {
      setMessage("Lütfen 20 MB veya daha küçük bir fotoğraf seç. JPG, PNG veya WebP kullanabilirsin.");
      return;
    }
    setBusy(true);
    const url = URL.createObjectURL(file);
    try {
      const image = new Image();
      image.src = url;
      await image.decode();
      await compose(image, image.naturalWidth, image.naturalHeight, token);
    } catch {
      if (token === request.current) setMessage("Bu fotoğraf açılamadı. JPG, PNG veya WebP biçiminde başka bir fotoğraf dene.");
    } finally {
      URL.revokeObjectURL(url);
      if (token === request.current) setBusy(false);
    }
  }

  async function startCamera() {
    const token = ++request.current;
    setMessage("");
    setBusy(true);
    try {
      if (!navigator.mediaDevices?.getUserMedia) throw new Error("Camera unavailable");
      const media = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false });
      if (token !== request.current) {
        media.getTracks().forEach((track) => track.stop());
        return;
      }
      stream.current = media;
      setCamera(true);
    } catch {
      if (token === request.current) setMessage("Kamera açılamadı. Kamera iznini ve HTTPS bağlantını kontrol et veya fotoğraf yükle.");
    } finally {
      if (token === request.current) setBusy(false);
    }
  }

  async function capture() {
    const source = video.current;
    if (!source?.videoWidth || !ready) return;
    const token = ++request.current;
    setBusy(true);
    try {
      const frame = captureVideo(source);
      stopCamera();
      await compose(frame, frame.width, frame.height, token);
    } catch {
      if (token === request.current) setMessage("Fotoğraf oluşturulamadı. Lütfen tekrar dene.");
    } finally {
      if (token === request.current) setBusy(false);
    }
  }

  return {
    dialog, input, video, open, camera, ready, busy, result, message,
    close, upload, startCamera, stopCamera, capture,
    show: () => setOpen(true),
    markCameraReady: () => setReady(true),
  };
}
