import type { Metadata } from "next";
import { FaqPageContent } from "@/components/faq/FaqPageContent";

export const metadata: Metadata = {
  title: "FAQ | SRDV Project",
  description: "Frequently asked questions about SRDV Technologies — topics, search, and answers.",
};

export default function FaqPage() {
  return (
    <main className="flex min-h-0 flex-1 flex-col">
      <FaqPageContent />
    </main>
  );
}
