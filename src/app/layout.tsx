import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/NavBar';
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calculadora de Interés Compuesto México",
  description: "Calcula interés compuesto fácilmente para México",
  
   

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  // 1. EL PUENTE: Esta es la línea que te faltaba
  manifest: '/site.webmanifest',
  
  verification: {
    google: "CBx9YvN3ysRUsP3u4-w-CLIXeO1Gh8nqUdgxqxWNZg4",
  },
  openGraph: {
    title: 'Calculadora de Interés Compuesto México',
    description: 'Proyecta tu futuro financiero con datos reales de México.',
    url: 'https://finanzanode-mx.vercel.app',
    siteName: 'MxCalc',
    locale: 'es_MX',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Navbar/>
        {children}
        <Analytics/>
        <GoogleAnalytics gaId="G-DSWFC2C4DY"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Calculadora de Interés Compuesto México",
              operatingSystem: "All",
              applicationCategory: "FinanceApplication",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "150",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "MXN",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
