import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { BRAND } from "@/lib/brand";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweatherItalic = Merriweather({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-brand-serif",
});

export const metadata: Metadata = {
  title: {
    default: BRAND.siteTitle,
    template: `%s | ${BRAND.siteTitle}`,
  },
  description: `${BRAND.fullName} — B2B travel technology.`,
  applicationName: BRAND.siteTitle,
  appleWebApp: {
    title: BRAND.siteTitle,
  },
  openGraph: {
    siteName: BRAND.siteTitle,
    title: BRAND.siteTitle,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweatherItalic.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white font-sans text-neutral-800">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
