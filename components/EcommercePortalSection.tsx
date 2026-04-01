import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { BarChart3, ShoppingCart, Truck, Users } from "lucide-react";
import type { ComponentType } from "react";

const RED = "#e31e24";
const BANNER_BLUE = "#1a4a6e";

function IconAndroid({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1349 1.0987L4.8429 5.4463a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 13.7397 0 16.9505h24c-.3435-3.2108-2.6889-5.7638-5.1185-7.6291" />
    </svg>
  );
}

function IconApple({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

type CardDef = {
  title: string;
  description: string;
  Icon: LucideIcon | ComponentType<{ className?: string }>;
};

const CARDS: CardDef[] = [
  {
    title: "B2C E-Commerce Module Development",
    description:
      "End-to-end B2C storefront with catalog, checkout, payments, and loyalty—built for scale and conversions with modern travel retail flows...",
    Icon: ShoppingCart,
  },
  {
    title: "B2B E-Commerce Module Development",
    description:
      "Wholesale pricing, credit limits, invoicing, and partner portals so agencies and corporates can book and manage spend in one place...",
    Icon: BarChart3,
  },
  {
    title: "Vendor Module Development",
    description:
      "Onboarding, contracts, catalogs, settlements, and performance dashboards for suppliers and marketplace operators in a single hub...",
    Icon: Users,
  },
  {
    title: "Delivery Person Module Development",
    description:
      "Dispatch, route optimization, proof-of-delivery, and live tracking so field teams stay aligned with orders and customer SLAs...",
    Icon: Truck,
  },
  {
    title: "E-commerce Android Mobile App",
    description:
      "Native-feel Android experience with push offers, saved travelers, and secure payments tuned for emerging-market connectivity...",
    Icon: IconAndroid,
  },
  {
    title: "E-Commerce iOS Mobile App",
    description:
      "Polished iOS app with Apple Pay, widgets, and accessibility-first UI to match premium traveler expectations on iPhone and iPad...",
    Icon: IconApple,
  },
];

function CardIcon({ Icon }: { Icon: CardDef["Icon"] }) {
  if (Icon === IconAndroid || Icon === IconApple) {
    return <Icon className="h-6 w-6" />;
  }
  const Lucide = Icon as LucideIcon;
  return <Lucide className="h-6 w-6" strokeWidth={1.75} />;
}

export function EcommercePortalSection() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="ecommerce-portal-heading">
      {/* Top banner */}
      <div className="w-full px-4 py-5 sm:px-6 lg:px-10" style={{ backgroundColor: BANNER_BLUE }}>
        <div className="mx-auto flex max-w-[1280px] flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
          <p className="max-w-3xl text-center text-sm leading-relaxed text-white/95 md:text-left md:text-base">
            The fastest way to grow your business with the leader in{" "}
            <em className="text-white/95 italic">Travel Technology</em>{" "}
            Check out our options and features included.
          </p>
          <Link
            href="#demo"
            className="shrink-0 self-center rounded-full px-6 py-3 text-center text-xs font-bold uppercase tracking-wide text-white transition hover:brightness-110 md:self-auto md:px-7 md:py-3.5 md:text-[11px]"
            style={{ backgroundColor: RED }}
          >
            Request for live demo
          </Link>
        </div>
      </div>

      {/* Main area */}
      <div className="relative bg-[#fdf6f8] px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-10">
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-[min(70vw,28rem)] w-[min(70vw,28rem)] rounded-full bg-pink-200/35 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-rose-200/25 blur-2xl"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div className="text-center">
            <h2
              id="ecommerce-portal-heading"
              className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl"
            >
              E-Commerce Portal{" "}
              <span className="relative inline-block pb-2 font-bold" style={{ color: RED }}>
                Solution
                <span
                  className="absolute bottom-0 left-1/2 h-1 w-24 -translate-x-1/2 rounded-sm sm:w-28"
                  style={{ backgroundColor: RED }}
                  aria-hidden
                />
              </span>
            </h2>
            {/* Full-width thin grey line under title row */}
            <div className="mx-auto mt-3 h-px max-w-2xl bg-zinc-300" />
          </div>

          <ul className="mt-12 grid list-none grid-cols-1 gap-8 sm:gap-9 md:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {CARDS.map(({ title, description, Icon }) => (
              <li key={title} className="pt-2">
                <article
                  className="relative rounded-lg border-2 bg-white/95 px-5 pb-8 pt-10 text-center shadow-sm backdrop-blur-[2px]"
                  style={{ borderColor: RED }}
                >
                  <div
                    className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 text-white shadow-md"
                    style={{ backgroundColor: RED, borderColor: "#fdf6f8" }}
                  >
                    <CardIcon Icon={Icon} />
                  </div>
                  <h3 className="text-base font-bold leading-snug text-zinc-800 sm:text-[17px]">{title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-500">{description}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
