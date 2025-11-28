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
  title: "Toolify - Discover The Best AI Websites & Tools",
  description: "Discover the best AI tools and websites. Browse 60+ AI tools across multiple categories including chatbots, image generation, coding, writing, and more. Updated daily.",
  keywords: ["AI tools", "artificial intelligence", "AI websites", "AI directory", "ChatGPT", "AI chatbots", "AI image generation", "AI writing tools"],
  authors: [{ name: "Toolify" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: "Toolify - Discover The Best AI Websites & Tools",
    description: "Discover the best AI tools and websites. Browse 60+ AI tools across multiple categories.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toolify - Discover The Best AI Websites & Tools",
    description: "Discover the best AI tools and websites. Browse 60+ AI tools across multiple categories.",
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
