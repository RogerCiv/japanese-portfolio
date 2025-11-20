import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import AIDrawer from "@/components/AIDrawer";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSerif = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "JPN Web Design - Portfolio & Web Design",
  description: "Portfolio de diseño web con inspiración japonesa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${notoSans.variable} ${notoSerif.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Contact />
         <AIDrawer />
      </body>
    </html>
  );
}
