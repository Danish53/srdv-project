import type { Metadata } from "next";
import { ContactPageContent } from "@/components/ContactPageContent";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${BRAND.fullName} — phone, email, offices in Delhi NCR and Agra.`,
};

export default function ContactPage() {
  return (
    <main className="flex min-h-0 flex-1 flex-col">
      <ContactPageContent />
    </main>
  );
}
