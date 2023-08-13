/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { ImageResponse } from "next/server";
export const runtime = "edge";
export const alt = "Precedent - Building blocks for your Next.js project";
export const contentType = "image/png";

export default async function OG() {
  // Font
  const interSemiBold = await fetch(
    new URL("./fonts/Inter-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          backgroundImage:
            "linear-gradient(to bottom, #FF9966 75%, #FF5559 75%)",
        }}
      >
        <Image src="/icon" alt="colored s'more"/>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Lexend_Deca",
          data: interSemiBold,
        },
      ],
    }
  );
}
