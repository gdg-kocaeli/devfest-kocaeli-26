import { event as festival } from "../../data";

export type PhotoResult = { url: string; file: File };

export async function composePhoto(source: CanvasImageSource, width: number, height: number) {
  const overlay = new Image();
  overlay.src = "/assets/devfest/frame.png";
  await overlay.decode();
  const canvas = document.createElement("canvas");
  canvas.width = overlay.naturalWidth;
  canvas.height = overlay.naturalHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas unavailable");
  const scale = Math.max(canvas.width / width, canvas.height / height);
  ctx.drawImage(
    source,
    (canvas.width - width * scale) / 2,
    (canvas.height - height * scale) / 2,
    width * scale,
    height * scale,
  );
  ctx.drawImage(overlay, 0, 0);
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Export failed"));
    }, "image/png");
  });
}

export function captureVideo(source: HTMLVideoElement) {
  const frame = document.createElement("canvas");
  frame.width = source.videoWidth;
  frame.height = source.videoHeight;
  const ctx = frame.getContext("2d");
  if (!ctx) throw new Error("Canvas unavailable");
  ctx.translate(frame.width, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(source, 0, 0);
  return frame;
}

export function createPhotoResult(blob: Blob): PhotoResult {
  return {
    url: URL.createObjectURL(blob),
    file: new File([blob], `devfest-kocaeli-${festival.year}.png`, { type: "image/png" }),
  };
}

export function downloadPhoto(result: PhotoResult) {
  const link = document.createElement("a");
  link.href = result.url;
  link.download = result.file.name;
  document.body.append(link);
  link.click();
  link.remove();
}
