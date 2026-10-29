import type { Metadata } from "next";
import { Playfair_Display, Geist, Caveat } from "next/font/google";
import "./globals.css";
import siteMetadata from "@/utils/site.meta.data";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});



const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  applicationName: "Samuel Tuoyo Portfolio",
  authors: [{ name: "Samuel Tuoyo", url: siteMetadata.siteUrl }],
  creator: "Samuel Tuoyo",
  publisher: "Samuel Tuoyo",
  category: "Software Engineering",
  keywords: [
    "Samuel Tuoyo",
    "Full Stack Engineer",
    "Backend Engineer",
    "Next.js Developer",
    "NestJS",
    "TypeScript",
    "SendLiberty",
    "Clud",
    "Pulse RSS Reader",
    "Dokugen",
    "Happr",
    "Portfolio",
    "Software Development",
    "Web Development",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    locale: "en_US",
    type: "website",
    images: [`${siteMetadata.siteUrl}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    creator: "@TuoyoS26091",
    images: [`${siteMetadata.siteUrl}/opengraph-image`],
  },
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteMetadata.siteUrl}/#website`,
      "url": siteMetadata.siteUrl,
      "name": "Samuel Tuoyo | Full Stack Engineer",
      "description": siteMetadata.description,
      "publisher": {
        "@id": `${siteMetadata.siteUrl}/#person`,
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${siteMetadata.siteUrl}/#webpage`,
      "url": siteMetadata.siteUrl,
      "name": siteMetadata.title,
      "description": siteMetadata.description,
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": `${siteMetadata.siteUrl}/opengraph-image`,
        "width": 1200,
        "height": 630,
      },
      "isPartOf": {
        "@id": `${siteMetadata.siteUrl}/#website`,
      },
    },
    {
      "@type": "Person",
      "@id": `${siteMetadata.siteUrl}/#person`,
      "name": "Samuel Tuoyo",
      "url": siteMetadata.siteUrl,
      "image": `${siteMetadata.siteUrl}/IMG_0004.jpeg`,
      "sameAs": [
        siteMetadata.github,
        siteMetadata.linkedin,
        siteMetadata.twitter,
        siteMetadata.youtube,
        "https://medium.com/@samueltuoyo9082",
      ],
      "jobTitle": "Full Stack Engineer",
      "email": siteMetadata.email,
      "description": siteMetadata.description,
      "knowsAbout": [
        "Software Engineering",
        "Full Stack Engineering",
        "Backend Engineering",
        "API Development",
        "Next.js",
        "React",
        "Node.js",
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Software Architecture",
      ],
    },
    {
      "@type": "SiteNavigationElement",
      "@id": `${siteMetadata.siteUrl}/#navigation`,
      "name": [
        "Featured Projects",
        "Landing Pages & Dashboards",
        "Articles & Technical Writing",
        "Engineering Process",
        "About & Skills",
        "Contact",
      ],
      "url": [
        `${siteMetadata.siteUrl}/#innovations`,
        `${siteMetadata.siteUrl}/#landing-pages`,
        `${siteMetadata.siteUrl}/#articles`,
        `${siteMetadata.siteUrl}/#process`,
        `${siteMetadata.siteUrl}/#about`,
        `${siteMetadata.siteUrl}/#contact`,
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${siteMetadata.siteUrl}/#projects`,
      "name": "Featured Software Products & Open Source Projects",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Myhappr - Creator Support Platform",
          "url": "https://myhappr.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "SendLiberty - Transactional Email API",
          "url": "https://sendliberty.com/",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Clud - API Change Monitoring",
          "url": "https://clud.samueltuoyo.com/",
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Dokugen - Open-Source AI README Generator CLI",
          "url": "https://dokugen.samueltuoyo.com/",
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "SaveIt - Fast Multi-Platform Video Downloader",
          "url": "https://saveit.samueltuoyo.com/",
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Pulse - Minimal RSS Feed Reader",
          "url": "https://pulse.samueltuoyo.com/",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FAFAFA" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body
        className={`${geist.variable} ${playfair.variable} ${caveat.variable} font-sans antialiased text-slate-900 bg-[#FAFAFA]`}
      >
        {children}
      </body>
    </html>
  );
}
