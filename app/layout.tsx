import type { Metadata } from "next";
import type { Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site-config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Montajes audiovisuales, pista LED y sonido para fiestas de 15`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Chirola Disco", "Chirola Disco Baile", "Chiro Disco", "montajes audiovisuales", "pista LED", "fiestas de 15", "iluminación para fiestas", "sonido para eventos"],
  alternates: { canonical: "/" },
  applicationName: siteConfig.name,
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/media/logo/chirola-favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/media/logo/chirola-favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/media/logo/chirola-apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: `${siteConfig.name} | Montajes audiovisuales para fiestas de 15`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_AR",
    type: "website",
    images: [{ url: "/media/posters/og-chirola.svg", width: 1200, height: 630, alt: "Chirola Disco" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Montajes audiovisuales para fiestas de 15`,
    description: siteConfig.description,
    images: ["/media/posters/og-chirola.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050505",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${bebas.variable}`}>
      <body className="noise">{children}</body>
    </html>
  );
}
