import "../styles/globals.css";
import { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "campfire - feed the fire ",
  openGraph: {
    title: "campfire - feed the fire",
    description:
      "campfire is a college social media platform where everyone on campus can feel the warmth & vibrance of their community, and everyone can feed the fire.",
    images: [
      {
        url: "http://www.campfireco.app/opengraph-image",
      },
    ],
  },
  themeColor: "#FF5559",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`scroll-smooth antialiased [font-feature-settings:'ss01'] ${lexendDeca.className}`}
      >
        {children}
      </body>
    </html>
  );
}
