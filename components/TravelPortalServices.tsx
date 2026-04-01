import type { LucideIcon } from "lucide-react";
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

const ACCENT = "#D32F2F";

const SERVICES: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "B2C White Label System",
    description:
      "NEXA Digital provides a strong white-label foundation: company-branded travel portals with full control and scalability for your business growth.",
    icon: Globe,
  },
  {
    title: "B2B White Label System",
    description:
      "B2B White Label system is the best Travel portal for those who want to serve agents and partners with negotiated fares, markups, and consolidated reporting.",
    icon: Users,
  },
  {
    title: "B2B2B White label System",
    description:
      "B2B2B White Label System is suitable for the People who want to start travel distribution networks with multi-level access and white-label branding at every tier.",
    icon: Monitor,
  },
  {
    title: "Flight Booking System",
    description:
      "Airline Reservation System is web based booking engine connected with global GDS and NDC content for real-time fares, schedules, and instant confirmations.",
    icon: IdCard,
  },
  {
    title: "Hotel Booking System",
    description:
      "Your website booking engine provides you with the best opportunity for direct hotel sales, rate parity, promotions, and seamless guest checkout experiences.",
    icon: Laptop,
  },
  {
    title: "Bus/Car Booking System",
    description:
      "Bus Reservation System is designed to automate the online ticket purchasing, seat selection, route management, and operator payouts in one dashboard.",
    icon: Car,
  },
  {
    title: "Flight API Integration",
    description:
      "Airline Reservation System is web based booking engine connected with global suppliers so you can embed search, book, and manage flights inside your own product.",
    icon: FileText,
  },
  {
    title: "Hotel API Integration",
    description:
      "Your website booking engine provides you with the best opportunity for direct connectivity to hotel aggregators and channel managers with unified APIs.",
    icon: Bed,
  },
  {
    title: "Bus/Car API Integration",
    description:
      "Bus Reservation System is designed to automate the online ticket purchasing through REST APIs, webhooks, and partner dashboards for fleet operators.",
    icon: Bus,
  },
  {
    title: "Flight Extranet System",
    description:
      "Your website booking engine provides you with the best opportunity for direct contracts, private fares, and agency-specific inventory in a secure extranet.",
    icon: Plane,
  },
  {
    title: "Hotel Extranet System",
    description:
      "Your website booking engine provides you with the best opportunity for direct rate loading, allotment control, and hotelier self-service management tools.",
    icon: Building2,
  },
  {
    title: "Tour Package System",
    description:
      "Show live accommodation availability and take your client bookings 24/7 with customizable itineraries, inclusions, and automated voucher generation.",
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
        style={{ borderColor: ACCENT }}
      >
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: ACCENT }} strokeWidth={1.65} aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-bold leading-snug text-zinc-900 sm:text-[17px]">{title}</h3>
        <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-zinc-500">{description}</p>
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
            <span className="text-zinc-900">Travel Portal </span>
            <span style={{ color: ACCENT }}>Development</span>
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-24 sm:w-28" style={{ backgroundColor: ACCENT }} aria-hidden />
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
