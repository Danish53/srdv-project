import type { Metadata } from "next";
import { ContactPageContent } from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us | SRDV Project",
  description: "Get in touch with SRDV Technologies — phone, email, offices in Delhi NCR and Agra.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-0 flex-1 flex-col">
      <ContactPageContent />
    </main>
  );
}
