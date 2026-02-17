import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alphawire — Psychometric Trading Assessment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0f 0%, #0d1117 50%, #0a0a0f 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid lines */}
        <div style={{ position: "absolute", inset: 0, display: "flex", opacity: 0.05 }}>
          {[...Array(12)].map((_, i) => (
            <div key={i} style={{ flex: 1, borderRight: "1px solid #00e5a0" }} />
          ))}
        </div>

        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,229,160,0.12) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#00e5a0",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: "#00e5a0",
              letterSpacing: 6,
            }}
          >
            ALPHAWIRE
          </span>
        </div>

        <div
          style={{
            fontSize: 52,
            fontWeight: 900,
            color: "#f0f0f5",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 800,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>TA is easy.</span>
          <span style={{ color: "#00e5a0" }}>Knowing yourself is hard.</span>
        </div>

        <div
          style={{
            fontSize: 20,
            color: "#888",
            marginTop: 20,
            display: "flex",
            gap: 24,
          }}
        >
          <span>9 Dimensions</span>
          <span style={{ color: "#333" }}>·</span>
          <span>20 Archetypes</span>
          <span style={{ color: "#333" }}>·</span>
          <span>Free Assessment</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
