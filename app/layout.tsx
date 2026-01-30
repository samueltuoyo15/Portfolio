import type { Metadata } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
});

export const metadata: Metadata = {
  title: "Samuel Tuoyo | Full Stack Software Developer",
  description:
    "Full Stack Software Developer specializing in high-concurrency API architecture, NestJS, and secure multi-tenant systems. View my portfolio and projects.",
  keywords: [
    "Samuel Tuoyo",
    "Backend Engineer",
    "NestJS",
    "Node.js",
    "Software Engineer",
    "Portfolio",
    "API Architecture",
  ],
  openGraph: {
    title: "Samuel Tuoyo | Full Stack Software Developer",
    description: "Full Stack Software Developer specializing in high-concurrency API architecture and secure multi-tenant systems.",
    type: "website",
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
        className={`${inter.variable} ${playfair.variable} ${caveat.variable} font-sans antialiased text-slate-900 bg-[#FAFAFA]`}
      >
        {children}
      </body>
    </html>
  );
}
