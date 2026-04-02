import type { Metadata } from "next";
import { FaqPageContent } from "@/components/faq/FaqPageContent";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "FAQ",
  description: `${BRAND.fullName} FAQ — integrations, go-live, legacy systems, support, security, and how to get a tailored answer.`,
};

export default function FaqPage() {
  return (
    <main className="flex min-h-0 flex-1 flex-col">
      <FaqPageContent />
    </main>
  );
}
