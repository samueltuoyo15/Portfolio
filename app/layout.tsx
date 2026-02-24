import type { Metadata } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import "./globals.css";
import siteMetadata from "@/utils/site.meta.data";

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
  category: "Web Development",
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: `${siteMetadata.siteUrl}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
        alt: "Samuel Tuoyo - Web Developer in Warri, Delta State Nigeria",
      },
    ],
  },
  keywords: [
    // Local / Geo-targeted keywords (highest priority)
    "web developer in Warri",
    "web developer Warri Delta State",
    "web developer in Warri Nigeria",
    "website developer Warri",
    "web development services Warri Delta State",
    "web development company Warri",
    "freelance web developer Warri",
    "software developer Warri Delta State",
    "software engineer Warri Nigeria",
    "app developer Warri Delta State",
    "Nigeria web developer",
    "affordable web developer Nigeria",
    "hire web developer Warri",
    "website design Warri",
    "website design Delta State",
    "web design Warri Nigeria",
    "custom website Warri",
    "e-commerce website Warri",
    "business website Warri Delta State",
    "portfolio website Nigeria",
    // Name-based keywords
    "Samuel Tuoyo",
    "Samuel Tuoyo developer",
    "Samuel Tuoyo Warri",
    // Technical / professional keywords
    "Full Stack Developer",
    "Full Stack Software Engineer",
    "Backend Engineer",
    "Frontend Developer",
    "Next.js developer Nigeria",
    "React developer Nigeria",
    "Node.js developer Nigeria",
    "NestJS developer",
    "API development Nigeria",
    "API developer Nigeria",
    "REST API development",
    "software engineer Nigeria",
    "software developer Nigeria",
    "tech freelancer Nigeria",
    "remote software developer Nigeria",
  ],
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
    images: [`${siteMetadata.siteUrl}/android-chrome-512x512.png`],
  },
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
  other: {
    "google-site-verification": process.env.GOOGLE_SITE_VERIFICATION_TOKEN!,
    // Geo meta tags — tells Google your geographic location
    "geo.region": "NG-DE",
    "geo.placename": "Warri, Delta State, Nigeria",
    "geo.position": "5.5167;5.7500",
    ICBM: "5.5167, 5.7500",
    "og:country-name": "Nigeria",
    "og:region": "Delta State",
    "og:locality": "Warri",
  },
};

// JSON-LD Structured Data — helps Google understand you as a local professional
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Samuel Tuoyo",
  url: siteMetadata.siteUrl,
  image: `${siteMetadata.siteUrl}/android-chrome-512x512.png`,
  sameAs: [
    siteMetadata.github,
    siteMetadata.linkedin,
    siteMetadata.twitter,
    siteMetadata.youtube,
  ],
  jobTitle: "Full Stack Software Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance / Independent",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Warri",
    addressRegion: "Delta State",
    addressCountry: "NG",
  },
  email: siteMetadata.email,
  description: siteMetadata.description,
  knowsAbout: [
    "Web Development",
    "Full Stack Development",
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
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteMetadata.siteUrl,
  name: "Samuel Tuoyo – Web Development Services",
  description:
    "Professional web development, web application, and software engineering services in Warri, Delta State, Nigeria.",
  url: siteMetadata.siteUrl,
  telephone: "",
  email: siteMetadata.email,
  image: `${siteMetadata.siteUrl}/android-chrome-512x512.png`,
  priceRange: "₦₦",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Warri",
    addressRegion: "Delta State",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "5.5167",
    longitude: "5.7500",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Warri",
    },
    {
      "@type": "State",
      name: "Delta State",
    },
    {
      "@type": "Country",
      name: "Nigeria",
    },
  ],
  serviceType: [
    "Website Development",
    "Web Application Development",
    "API Development",
    "Custom Software Development",
    "Backend Engineering",
    "Full Stack Development",
  ],
  openingHours: "Mo-Fr 09:00-18:00",
  founder: {
    "@type": "Person",
    name: "Samuel Tuoyo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={siteMetadata.siteUrl} />
        <meta name="theme-color" content="#FAFAFA" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${caveat.variable} font-sans antialiased text-slate-900 bg-[#FAFAFA]`}
      >
        {children}
      </body>
    </html>
  );
}
