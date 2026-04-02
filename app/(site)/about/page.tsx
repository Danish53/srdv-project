import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "About Us",
  description: `${BRAND.fullName} — B2B travel technology: how we work, what we build, and how our team delivers portals, APIs, and mobile.`,
};

export default function AboutPage() {
  return (
    <main className="flex min-h-0 flex-1 flex-col">
      <AboutPageContent />
    </main>
  );
}
