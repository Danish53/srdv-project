import type { Metadata } from "next";
import { ApiDocsPage } from "@/components/api-docs/ApiDocsPage";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "API Integration",
  description: `${BRAND.fullName} — Flight and hotel booking API documentation, authentication, and wallet endpoints.`,
};

export default function ApiIntegrationPage() {
  return <ApiDocsPage />;
}
