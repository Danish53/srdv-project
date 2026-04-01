import { AboutSplitSection } from "@/components/AboutSplitSection";
import { HeroSection } from "@/components/HeroSection";
import { EcommercePortalSection } from "@/components/EcommercePortalSection";
import { OtherServicesSection } from "@/components/OtherServicesSection";
import { WhyChooseContactSection } from "@/components/WhyChooseContactSection";
import { TechnologyProviderSection } from "@/components/TechnologyProviderSection";
import { TravelPortalServices } from "@/components/TravelPortalServices";

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
      <div className="mx-auto w-full max-w-[1400px] flex-1 px-4 py-12 lg:px-10">
        <p className="text-sm text-neutral-500">Neeche ka page content yahan</p>
      </div>
    </main>
  );
}
