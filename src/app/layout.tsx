import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEMRUSH Global SEO Suite – All‑in‑One SEO Platform",
  description:
    "SEMRUSH is the all‑in‑one SEO platform for global brands. Audit your website, track keywords, analyze competitors, and grow organic traffic with enterprise‑grade data.",
  keywords: [
    "SEMRUSH",
    "SEO tool",
    "SEO software",
    "keyword research",
    "site audit",
    "backlink analysis",
    "rank tracking",
    "content marketing",
  ],
  authors: [{ name: "SEMRUSH Global" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: "SEMRUSH Global SEO Suite – All‑in‑One SEO Platform",
    description:
      "Run technical audits, research keywords, monitor rankings, and analyze competitors from a single high‑performance SEO platform.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEMRUSH Global SEO Suite – All‑in‑One SEO Platform",
    description:
      "Trusted SEO analytics and competitive intelligence for teams around the world.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          <Header />
          {children}
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
