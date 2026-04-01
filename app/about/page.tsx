import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us | SRDV Project",
  description:
    "Learn about SRDV Technologies — travel technology, white-label solutions, mobile apps, and the team behind our delivery.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-0 flex-1 flex-col">
      <AboutPageContent />
    </main>
  );
}
