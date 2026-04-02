import type { LucideIcon } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { THEME } from "@/lib/theme";
import {
  Bed,
  Building2,
  Bus,
  Car,
  FileText,
  Globe,
  IdCard,
  Laptop,
  Monitor,
  Palmtree,
  Plane,
  Users,
} from "lucide-react";


const SERVICES: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "B2C white-label",
    description: `${BRAND.fullName} delivers consumer-facing sites under your brand: search, checkout, payments, and post-booking tools you can evolve without rebuilding from scratch.`,
    icon: Globe,
  },
  {
    title: "B2B agent portal",
    description:
      "Credit limits, negotiated fares, markups, sub-agents, and consolidated reporting—so your network books in one controlled environment.",
    icon: Users,
  },
  {
    title: "B2B2B distribution",
    description:
      "Multi-level access, reseller branding, and policy controls for large distribution trees and franchise-style travel networks.",
    icon: Monitor,
  },
  {
    title: "Flight booking engine",
    description:
      "Shopping, pricing, and ticketing workflows wired to GDS, NDC, and LCC content—with rules you own and operations your team can audit.",
    icon: IdCard,
  },
  {
    title: "Hotel booking engine",
    description:
      "Direct and aggregated inventory, promotions, and cancellation policies in a flow designed for conversion and clear guest communication.",
    icon: Laptop,
  },
  {
    title: "Bus & car reservations",
    description:
      "Seat maps, routes, operator payouts, and partner dashboards for ground transport—aligned with how fleets and OTAs actually settle.",
    icon: Car,
  },
  {
    title: "Flight APIs",
    description:
      "Embed search, book, reissue, and void flows in your own stack via documented APIs and predictable error handling for high volume.",
    icon: FileText,
  },
  {
    title: "Hotel APIs",
    description:
      "Normalize content from aggregators and channel managers into one contract so your product team ships integrations once.",
    icon: Bed,
  },
  {
    title: "Bus & car APIs",
    description:
      "REST-style interfaces, callbacks, and partner views for operators who need programmatic sales without maintaining a full storefront.",
    icon: Bus,
  },
  {
    title: "Flight extranet",
    description:
      "Private fares, agency tiers, and contract loading in a secure workspace—separate from your public retail experience.",
    icon: Plane,
  },
  {
    title: "Hotel extranet",
    description:
      "Allotments, BAR and negotiated rates, blackout rules, and self-serve tools hotel partners can use without endless email threads.",
    icon: Building2,
  },
  {
    title: "Tour & package builder",
    description:
      "Itineraries, inclusions, live components where needed, and automated documents so consultants sell complex trips with confidence.",
    icon: Palmtree,
  },
];

function ServiceCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <article className="flex gap-4 sm:gap-5">
      <div
        className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-2 bg-white sm:h-14 sm:w-14"
        style={{ borderColor: THEME.primary }}
      >
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: THEME.primary }} strokeWidth={1.65} aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-bold leading-snug text-zinc-900 sm:text-[17px]">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{description}</p>
      </div>
    </article>
  );
}

export function TravelPortalServices() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20" aria-labelledby="travel-portal-services-heading">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="travel-portal-services-heading"
            className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl"
          >
            <span className="text-zinc-900">Solutions we </span>
            <span style={{ color: THEME.secondary }}>deliver</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">
            From white-label storefronts to deep API work—pick the modules you need and grow into the rest when you are ready.
          </p>
          <div className="mx-auto mt-4 h-0.5 w-24 sm:w-28" style={{ backgroundColor: THEME.primary }} aria-hidden />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:gap-9 md:mt-12 md:grid-cols-2 md:gap-x-10 md:gap-y-10 lg:grid-cols-3 lg:gap-x-12">
          {SERVICES.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
