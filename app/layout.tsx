import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-screen flex-col bg-white font-sans text-neutral-800">
        {children}
      </body>
    </html>
  );
}
