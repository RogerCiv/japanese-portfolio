import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import AIDrawerLazy from "@/components/AIDrawerLazy";
import Contact from "@/components/Contact";
import { JsonLd } from "@/components/JsonLd";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";

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

const siteUrl = "https://rogercivdev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Roger Civ | Ingeniero de Software & Desarrollador Web Full Stack | Granada",
    template: "%s | Roger Civ",
  },
  description:
    "Portfolio de Roger Civ, ingeniero de software y desarrollador web full stack en Granada. Especializado en React, Next.js, TypeScript y diseño con inspiración japonesa.",
  keywords: [
    "Roger Civ",
    "desarrollador web Granada",
    "ingeniero de software",
    "full stack",
    "portfolio",
    "diseño web japonés",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Roger Civ" }],
  creator: "Roger Civ",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Roger Civ Portfolio",
    title: "Roger Civ | Ingeniero de Software & Desarrollador Web Full Stack",
    description:
      "Portfolio de Roger Civ, ingeniero de software y desarrollador web full stack en Granada. Especializado en React, Next.js, TypeScript.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Roger Civ - Ingeniero de Software & Desarrollador Web Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roger Civ | Ingeniero de Software & Desarrollador Web Full Stack",
    description:
      "Portfolio de Roger Civ, ingeniero de software y desarrollador web full stack en Granada.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Roger Civ",
    statusBarStyle: "default",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Roger Civ",
      givenName: "Roger",
      familyName: "Civ",
      jobTitle: "Ingeniero de Software & Desarrollador Web Full Stack",
      description:
        "Desarrollador web full stack en Granada, especializado en React, Next.js y TypeScript.",
      email: "rogercivdev@gmail.com",
      url: siteUrl,
      image: `${siteUrl}/images/yo.avif`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Granada",
        addressCountry: "ES",
      },
      sameAs: [
        "https://github.com/rogerciv",
        "https://linkedin.com/in/rogerciv",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "JavaScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Full Stack Development",
      ],
    },
    {
      "@type": "WebSite",
      name: "Roger Civ Portfolio",
      url: siteUrl,
      description:
        "Portfolio personal de Roger Civ, desarrollador web full stack en Granada.",
      inLanguage: "es",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
    <head>
      <meta name="google-site-verification" content="gwlgeNsfdspJp4JwbujAZa0njIROX9-9cubbziLc-Ow" />
    </head>
      <body
        className={`${notoSans.variable} ${notoSerif.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Analytics />
          <Contact />
          <AIDrawerLazy />
        </ThemeProvider>
        <JsonLd data={jsonLd} />
      </body>
    </html>
  );
}
