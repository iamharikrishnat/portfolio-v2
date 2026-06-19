import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(800px 500px at 50% -10%, #211a10, #0a0a0c 70%)",
          color: "#ededed",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#a1a1aa",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                color: "#ededed",
              }}
            >
              {site.initials}
            </div>
            <span>{site.location}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#d8a657",
              }}
            />
            <span>Available 2026</span>
          </div>
        </div>

        {/* Name */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 150,
              lineHeight: 0.92,
              fontFamily: "Arial, sans-serif",
              fontWeight: 600,
              letterSpacing: -4,
            }}
          >
            Hari
          </div>
          <div
            style={{
              fontSize: 150,
              lineHeight: 0.92,
              fontStyle: "italic",
              color: "#d8a657",
              letterSpacing: -2,
            }}
          >
            Krishna
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 30,
            fontFamily: "Arial, sans-serif",
          }}
        >
          <span style={{ color: "#ededed" }}>{site.role}</span>
          <span style={{ color: "#a1a1aa", fontSize: 24 }}>
            {site.url.replace("https://", "")}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
