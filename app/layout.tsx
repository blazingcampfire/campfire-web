import "../styles/globals.css";
import { Metadata } from "next";
import { Lexend_Deca } from "next/font/google"

const lexendDeca = Lexend_Deca({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "campfire - feed the fire ",
  openGraph: {
    title: "campfire - feed the fire",
    // description:
    //   "Liftoff is an AI-powered mock interview platform that helps you practice for your next job interview.",
    // images: [
    //   {
    //     url: "https://demo.useliftoff.com/opengraph-image",
    //   },
    // ],
  },
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`scroll-smooth antialiased [font-feature-settings:'ss01'] ${lexendDeca.className}`}>
        {children}
      </body>
    </html>
  );
}
