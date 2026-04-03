import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { WhyChooseContactSection } from "@/components/WhyChooseContactSection";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { BRAND } from "@/lib/brand";
import { MARKETING_HERO, MARKETING_SECTION } from "@/lib/marketing-hero-images";
import { THEME, THEME_BG } from "@/lib/theme";

const hero = MARKETING_HERO.about;

const TEAM_BULLETS = [
  "Delivery leads own scope, risk, and communication—you always know who to call when trade-offs appear.",
  "Engineers pair with solution architects who have shipped GDS, NDC, hotel aggregators, and payment flows in production.",
  "Design and QA sit in the same rhythm as development, so UAT is not the first time stakeholders see real behaviour.",
  "We document decisions and runbooks so your team can operate releases without depending on us forever.",
] as const;

export function AboutPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[260px] w-full sm:min-h-[300px] md:min-h-[340px]" aria-labelledby="about-hero-title">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          className="object-cover object-center brightness-[0.45]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-zinc-900/50" aria-hidden />
        <div className="relative z-10 flex min-h-[260px] flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[300px] md:min-h-[340px]">
          <h1
            id="about-hero-title"
            className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-tight"
          >
            About {BRAND.fullName}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg md:text-xl">
            B2B travel technology—portals, APIs, and mobile—built for agencies, OTAs, and distributors who outgrow spreadsheets
            and patchwork tools.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="overflow-x-hidden bg-white py-12 sm:py-16 md:py-20" aria-labelledby="adventure-heading">
        <RevealOnScroll className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2
            id="adventure-heading"
            className="text-center text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl md:text-[1.85rem]"
          >
            What {BRAND.fullName} stands for
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 rounded-full" style={{ backgroundColor: THEME.primary }} aria-hidden />

          <blockquote className="mt-10 text-center text-base italic leading-relaxed text-zinc-800 sm:text-lg">
            &ldquo;Distribution should be programmable: clear contracts with suppliers, predictable behaviour in your storefront,
            and reporting your finance team can reconcile.&rdquo;
          </blockquote>
          <blockquote className="mt-6 text-center text-base italic leading-relaxed text-zinc-800 sm:text-lg">
            &ldquo;We are not here to ship a slide deck—we ship releases your agents and customers can actually use, then stay
            beside you as the market shifts.&rdquo;
          </blockquote>

          <div className="mt-12 space-y-5 text-left text-[15px] leading-[1.8] text-zinc-700 sm:text-base">
            <p>
              {BRAND.fullName} helps travel businesses replace brittle workflows with products that fit how you sell: retail,
              wholesale, corporate, or mixed. We work where booking engines, extranets, CRM, and finance systems meet—so fewer
              handoffs break between teams.
            </p>
            <p>
              Our projects usually start with a focused discovery: who books, who pays, which suppliers matter, and what must
              go live first. From there we propose a phased plan—each milestone is demonstrable software, not a vague
              percentage complete.
            </p>
            <p>
              Engineering is full-stack by design: APIs, services, integrations, and front-ends are owned together, with
              automated tests and staging environments that mirror production. That keeps defects out of peak selling windows
              and makes rollbacks boring instead of dramatic.
            </p>
          </div>

          <div
            className="mt-12 rounded-lg border px-5 py-6 sm:px-8 sm:py-8"
            style={{ backgroundColor: THEME_BG.primarySoft, borderColor: THEME_BG.primaryBorder }}
          >
            <p className="text-center text-sm leading-relaxed text-zinc-800 sm:text-left sm:text-[15px] sm:leading-[1.75]">
              Typical engagements combine{" "}
              <span className="font-bold" style={{ color: THEME.secondary }}>
                white-label storefronts
              </span>
              ,{" "}
              <span className="font-bold text-zinc-900">B2B agent and corporate portals</span>,{" "}
              <span className="font-bold" style={{ color: THEME.secondary }}>
                iOS &amp; Android apps
              </span>{" "}
              for travellers and staff,{" "}
              <span className="font-bold text-zinc-900">payments, fraud, and supplier connectivity</span>, plus{" "}
              <span className="font-bold" style={{ color: THEME.secondary }}>
                CRM and operations tooling
              </span>
              —rolled out in slices so you can fund value before expanding scope.
            </p>
          </div>
        </RevealOnScroll>

        {/* Flight imagery + copy — side by side (no full-bleed → no horizontal scroll) */}
        <RevealOnScroll className="mx-auto mt-14 max-w-6xl px-4 sm:mt-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-10 lg:gap-12">
            <div className="relative order-2 min-h-[220px] overflow-hidden rounded-xl border border-zinc-200/80 shadow-sm md:order-1 md:min-h-[280px] lg:min-h-[320px]">
              <Image
                src={MARKETING_SECTION.aboutAirportTerminal.src}
                alt={MARKETING_SECTION.aboutAirportTerminal.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-lg font-bold tracking-tight text-zinc-900 sm:text-xl" style={{ color: THEME.primary }}>
                Built for busy terminals and busy teams
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-zinc-600 sm:text-base">
                The same complexity travellers feel at the airport—connections, timing, and clear information—is what your agents
                and partners need in software. We design flows that stay calm when schedules, fares, and inventory move.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 md:items-center md:gap-10 lg:gap-12">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-zinc-900 sm:text-xl" style={{ color: THEME.primary }}>
                Reliability at altitude
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-zinc-600 sm:text-base">
                Peak booking windows and campaign launches do not wait for maintenance. We ship with tests, staging parity,
                and rollback paths so your storefront keeps selling when demand spikes—just like a well-run operation keeps
                aircraft moving.
              </p>
            </div>
            <div className="relative min-h-[220px] overflow-hidden rounded-xl border border-zinc-200/80 shadow-sm md:min-h-[280px] lg:min-h-[320px]">
              <Image
                src={MARKETING_SECTION.aboutFlightDeckSky.src}
                alt={MARKETING_SECTION.aboutFlightDeckSky.alt}
                fill
                className="object-cover object-[center_35%]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mx-auto mt-16 max-w-3xl px-4 sm:mt-20 sm:px-6">
          {/* Team */}
          <div>
            <div className="-mx-4 bg-zinc-200/90 py-3.5 px-4 sm:-mx-6 sm:px-6">
              <h3 className="text-lg font-bold text-zinc-900 sm:text-xl">How we work together</h3>
            </div>

            <div className="mt-8 space-y-5 text-[15px] leading-[1.8] text-zinc-700 sm:text-base">
              <p>
                You will meet people who have implemented fare filing, hotel contracts, payment reconciliation, and mobile
                releases—not only generic developers reading travel for the first time. That shortens debates and keeps
                decisions grounded in what will run in production.
              </p>
              <p>
                We run weekly or bi-weekly checkpoints with a written summary: what shipped, what is blocked, and what we need
                from your side (content, credentials, policy decisions). No surprise “big bang” UAT at the end of a quarter.
              </p>
            </div>

            <ul className="mt-8 space-y-4">
              {TEAM_BULLETS.map((text) => (
                <li key={text} className="flex gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center"
                    style={{ backgroundColor: THEME.primary }}
                    aria-hidden
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  </span>
                  <span className="pt-0.5 text-sm leading-snug text-zinc-800 sm:text-[15px]">{text}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-center text-sm text-zinc-500 sm:text-left">
              Ready to walk through your roadmap?{" "}
              <Link href="/contact" className="font-semibold hover:underline" style={{ color: THEME.primary }}>
                Start a conversation
              </Link>
              {" "}
              or explore{" "}
              <Link href="/pricing" className="font-semibold hover:underline" style={{ color: THEME.primary }}>
                pricing
              </Link>
              .
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <WhyChooseContactSection />
    </>
  );
}
