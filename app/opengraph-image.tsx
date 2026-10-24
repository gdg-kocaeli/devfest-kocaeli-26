import { ImageResponse } from "next/og";
import { event } from "@/features/devfest/data";

export const alt = "DevFest Kocaeli 2026 — 14 Kasım, Emexotel — GDG Kocaeli";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px 72px",
          background: "linear-gradient(120deg, #ebf2ff, #ffffff)",
          color: "#202124",
          fontFamily: "sans-serif",
          borderBottom: "16px solid #4285f4",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#1967d2" }}>
          GOOGLE DEVELOPER GROUPS KOCAELİ SUNAR
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 112, fontWeight: 700, letterSpacing: -5 }}>
            DevFest 2026
          </div>
          <div style={{ display: "flex", fontSize: 64, color: "#1967d2" }}>Kocaeli</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", fontSize: 34 }}>
            {event.dateLabel} · {event.venue.name} · {event.timeLabel}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#5f6368" }}>
            {event.registrationLabel}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
