import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Gokul P | Portfolio"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: "#000000",
          color: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          letterSpacing: "-0.04em",
          fontWeight: "bold",
        }}
      >
        <span>GOKUL P</span>
        <span style={{ fontSize: 32, opacity: 0.5, marginTop: 20, letterSpacing: "0.1em" }}>
          SOFTWARE ENGINEER
        </span>
      </div>
    ),
    {
      ...size,
    }
  )
}
