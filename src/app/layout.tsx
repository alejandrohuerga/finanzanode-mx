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
  title: "Calculadora de Interés Compuesto México",
  description: "Calcula interés compuesto fácilmente para México",
  verification: {
    google: "nWqpGWjsrYjoOscU-CDjdPSphIPkETgmjOWfIhsZfxU",
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
        {children}
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
