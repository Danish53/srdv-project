import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import "./globals.css";

/** Production favicon URLs in <head> need a real origin; without this, Vercel can leave icons wrong or relative to localhost. */
function getMetadataBase(): URL {
  const custom = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (custom) {
    const withProto = custom.startsWith("http") ? custom : `https://${custom}`;
    try {
      return new URL(withProto);
    } catch {
      /* ignore */
    }
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}

const ICON_CACHE = "b2b1";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: BRAND.siteTitle,
    template: `%s | ${BRAND.siteTitle}`,
  },
  description: `${BRAND.fullName} — B2B travel technology.`,
  applicationName: BRAND.siteTitle,
  icons: {
    icon: [
      { url: `/icon.png?v=${ICON_CACHE}`, type: "image/png", sizes: "512x512" },
      { url: `/favicon.ico?v=${ICON_CACHE}`, sizes: "any" },
    ],
    apple: [{ url: `/apple-icon.png?v=${ICON_CACHE}`, sizes: "180x180", type: "image/png" }],
  },
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
      <head>
        <link rel="icon" href={`/icon.png?v=${ICON_CACHE}`} type="image/png" sizes="512x512" />
        <link rel="icon" href={`/favicon.ico?v=${ICON_CACHE}`} sizes="any" />
        <link rel="apple-touch-icon" href={`/apple-icon.png?v=${ICON_CACHE}`} />
      </head>
      <body className="flex min-h-screen flex-col bg-white font-sans text-neutral-800">
        {children}
      </body>
    </html>
  );
}
