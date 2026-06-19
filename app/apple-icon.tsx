import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(140px 120px at 50% 0%, #211a10, #0a0a0c 70%)",
          color: "#d8a657",
          fontSize: 86,
          fontWeight: 700,
          fontFamily: "Arial, sans-serif",
          letterSpacing: -2,
        }}
      >
        {site.initials}
      </div>
    ),
    { ...size }
  );
}
