import type { ComponentProps } from "react";

type ExternalLinkProps = Omit<ComponentProps<"a">, "target" | "rel"> & {
  href: string;
};

export function ExternalLink(props: ExternalLinkProps) {
  return <a {...props} target="_blank" rel="noopener noreferrer" />;
}
