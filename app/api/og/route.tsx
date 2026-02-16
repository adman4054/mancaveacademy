import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const title =
    searchParams.get("title") ?? "Build durable income with focused systems.";
  const kicker = searchParams.get("kicker") ?? "MAN CAVE ACADEMY";
  const subtitle =
    searchParams.get("subtitle") ??
    "AI • Assets • Services • Tools • Financial Infrastructure";

  // Basic safety: keep text reasonable length
  const safeTitle = title.slice(0, 80);
  const safeKicker = kicker.slice(0, 40);
  const safeSubtitle = subtitle.slice(0, 90);

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #0b1220 0%, #0a0f1a 100%)",
          color: "white",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: "0.12em", opacity: 0.85 }}>
          {safeKicker}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>
            {safeTitle}
          </div>

          <div style={{ fontSize: 28, opacity: 0.85, lineHeight: 1.35 }}>
            {safeSubtitle}
          </div>
        </div>

        <div style={{ fontSize: 18, opacity: 0.7 }}>
          mancaveacademy.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
