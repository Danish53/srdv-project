import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: `About Us | ${BRAND.siteTitle}`,
  description: `Learn about ${BRAND.fullName} — travel technology, white-label solutions, mobile apps, and delivery.`,
};

export default function AboutPage() {
  return (
    <main className="flex min-h-0 flex-1 flex-col">
      <AboutPageContent />
    </main>
  );
}
