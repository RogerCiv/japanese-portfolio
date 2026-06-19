import { ImageResponse } from "next/og";

export const alt =
  "Roger Civ - Ingeniero de Software & Desarrollador Web Full Stack | Granada";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #1a1a1a 0%, #2d1a1a 40%, #1a1a1a 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(185, 74, 72, 0.15)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -60,
          left: -60,
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "rgba(185, 74, 72, 0.1)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#f5f0e8",
            fontFamily: "sans-serif",
            letterSpacing: "-0.02em",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Roger Civ
        </h1>

        <p
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: "#b94a48",
            fontFamily: "serif",
            letterSpacing: "0.08em",
            margin: "8px 0 0",
          }}
        >
          ウェブ開発者
        </p>

        <div
          style={{
            width: 80,
            height: 2,
            background:
              "linear-gradient(90deg, transparent, #b94a48, transparent)",
            margin: "24px 0",
          }}
        />

        <p
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: "#c4bdb0",
            fontFamily: "sans-serif",
            margin: 0,
          }}
        >
          Ingeniero de Software & Desarrollador Web Full Stack
        </p>

        <p
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: "#8a7d72",
            fontFamily: "sans-serif",
            margin: "12px 0 0",
          }}
        >
          Granada, España
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 24,
          fontSize: 14,
          color: "#5a4a3a",
          fontFamily: "sans-serif",
          letterSpacing: "0.1em",
        }}
      >
        rogercivdev.vercel.app
      </div>
    </div>,
    {
      ...size,
    },
  );
}
