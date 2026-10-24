import Image from "next/image";
import type { ImageAsset } from "../../types";

type AssetImageProps = {
  image: ImageAsset;
  alt?: string;
  className?: string;
  sizes?: string;
  preload?: boolean;
};

export function AssetImage({
  image,
  alt = image.alt,
  className,
  sizes,
  preload = false,
}: AssetImageProps) {
  if (typeof image.src === "string" && image.src.endsWith(".svg")) {
    return <img src={image.src} alt={alt} className={className} />;
  }
  return (
    <Image
      src={image.src}
      alt={alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      preload={preload}
      className={className}
    />
  );
}
