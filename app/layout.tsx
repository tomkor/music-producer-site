import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Mason — Music Producer & Composer",
  description:
    "Award-winning music producer and composer crafting sonic experiences for film, TV, and major artists. Production, mixing, composition, and sound design.",
  keywords: [
    "music producer",
    "composer",
    "mixing engineer",
    "sound design",
    "film scoring",
    "music studio",
    "beat maker",
  ],
  openGraph: {
    title: "Alex Mason — Music Producer & Composer",
    description:
      "Award-winning music producer and composer crafting sonic experiences for film, TV, and major artists.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col noise-overlay">{children}</body>
    </html>
  );
}