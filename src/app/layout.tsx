import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://manosabiertas.space-z.ai";

// Structured data (JSON-LD) for SEO rich results
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Manos Abiertas",
      url: SITE_URL,
      logo: `${SITE_URL}/icon-512.png`,
      description:
        "Plataforma gratuita multilingüe para personas inmigrantes en España. IA, CV, Office y derechos.",
    },
    {
      "@type": "WebSite",
      name: "Manos Abiertas",
      url: SITE_URL,
      inLanguage: ["es", "en", "zh", "pt", "fr"],
      publisher: { "@type": "Organization", name: "Manos Abiertas" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      name: "Manos Abiertas · IA, CV y Derechos para personas inmigrantes en España",
      isPartOf: { "@type": "WebSite", name: "Manos Abiertas" },
      inLanguage: "es",
      about:
        "Inteligencia artificial, currículum, Office y derechos para personas inmigrantes en España.",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Manos Abiertas · IA, CV y Derechos para personas inmigrantes en España",
    template: "%s · Manos Abiertas",
  },
  description:
    "Plataforma gratuita multilingüe para personas inmigrantes en España. Aprende inteligencia artificial, crea tu currículum, estudia Office y consulta un catálogo de recursos con fuente y estado de revisión visible.",
  keywords: [
    "inmigrantes España",
    "latinoamericanos en España",
    "comunidades migrantes",
    "inteligencia artificial",
    "ChatGPT",
    "currículum",
    "CV",
    "NIE",
    "derechos",
    "recursos",
    "manos abiertas",
    "Office",
    "cursos gratis",
    "35 idiomas",
  ],
  authors: [{ name: "Manos Abiertas" }],
  creator: "Manos Abiertas",
  publisher: "Manos Abiertas",
  applicationName: "Manos Abiertas",
  category: "education",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/logo.svg",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      en: "/en",
      zh: "/zh",
      pt: "/pt",
      fr: "/fr",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Manos Abiertas · IA, CV y Derechos para personas inmigrantes en España",
    description:
      "Aprende IA, crea tu CV y conoce tus derechos en España. Gratis y en 35 idiomas.",
    url: SITE_URL,
    siteName: "Manos Abiertas",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Manos Abiertas · IA, CV y Derechos para personas inmigrantes en España",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manos Abiertas",
    description: "IA, CV y derechos para personas inmigrantes en España",
    images: ["/og.png"],
  },
 referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#A0522D" },
    { media: "(prefers-color-scheme: dark)", color: "#2B2420" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
          <Toaster />
          <SonnerToaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
