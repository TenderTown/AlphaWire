import { C } from "../lib/constants";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: {
    default: "Alphawire — Psychometric Trading Assessment",
    template: "%s | Alphawire",
  },
  description:
    "Discover your innate trading profile. 9 psychological dimensions, 20 archetypes. TA is easy — knowing yourself is hard.",
  metadataBase: new URL("https://alpha-wire.vercel.app"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Alphawire — Psychometric Trading Assessment",
    description:
      "Map your trading psychology across 9 dimensions. 20 archetypes. Free assessment, no email required.",
    url: "https://alpha-wire.vercel.app",
    siteName: "Alphawire",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alphawire — Psychometric Trading Assessment",
    description:
      "Map your trading psychology across 9 dimensions. 20 archetypes. Free assessment, no email required.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Alphawire",
  description: "Psychometric trading assessment that maps your psychology across 9 dimensions and matches you with one of 20 trader archetypes.",
  url: "https://alpha-wire.vercel.app",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  offers: [
    {
      "@type": "Offer",
      name: "Free Assessment",
      price: "0",
      priceCurrency: "USD",
      description: "70-question psychometric assessment with radar chart and archetype identification",
    },
    {
      "@type": "Offer",
      name: "Full Profile Report",
      price: "97",
      priceCurrency: "USD",
      description: "Complete trading psychology report with strategy alignment and risk prescriptions",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { background: ${C.bg}; color: ${C.text}; }
          @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes pulse { 0%, 100% { box-shadow: 0 0 20px ${C.accentGlow}; } 50% { box-shadow: 0 0 40px ${C.accentDim}; } }
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: ${C.bg}; }
          ::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 3px; }
          input[type="range"] { -webkit-appearance: none; width: 100%; height: 6px; border-radius: 3px; background: ${C.border}; outline: none; }
          input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%; background: ${C.accent}; cursor: pointer; border: 2px solid ${C.bg}; }
          a { color: inherit; text-decoration: none; }
        `}</style>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
