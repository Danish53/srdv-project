import type { Metadata } from "next";
import { PricingPageContent } from "@/components/pricing/PricingPageContent";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Plans and pricing for ${BRAND.fullName} — pay as you go or enterprise. FAQ and technology partners.`,
};

export default function PricingPage() {
  return (
    <main className="flex min-h-0 flex-1 flex-col">
      <PricingPageContent />
    </main>
  );
}
