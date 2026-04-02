import type { Metadata } from "next";
import { AboutSplitSection } from "@/components/AboutSplitSection";
import { HeroSection } from "@/components/HeroSection";
import { EcommercePortalSection } from "@/components/EcommercePortalSection";
import { OtherServicesSection } from "@/components/OtherServicesSection";
import { WhyChooseContactSection } from "@/components/WhyChooseContactSection";
import { TechnologyProviderSection } from "@/components/TechnologyProviderSection";
import { TravelPortalServices } from "@/components/TravelPortalServices";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Home",
  description: `${BRAND.fullName} — B2B travel portals, APIs, mobile apps, and integrations for agencies, OTAs, and distributors.`,
};

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-neutral-100">
      <HeroSection />
      <TravelPortalServices />
      <AboutSplitSection />
      <TechnologyProviderSection />
      <EcommercePortalSection />
      <OtherServicesSection />
      <WhyChooseContactSection />
    </main>
  );
}
