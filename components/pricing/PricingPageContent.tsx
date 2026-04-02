import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { TechnologyProviderSection } from "@/components/TechnologyProviderSection";
import { FaqAccordionSection } from "@/components/faq/FaqAccordionSection";
import { BRAND } from "@/lib/brand";

const RED = "#E31E24";
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80&auto=format&fit=crop";

const NAVY = "#0a051d";
const CARD_BG = "#f9faff";
const TITLE_BLUE = "#3d4a8c";

const PAYG_FEATURES = [
  "Start selling instantly",
  "No upfront fees",
  "Email-based technical support",
] as const;

const ENTERPRISE_FEATURES = [
  "Enterprise-level pricing",
  "Volume discounts",
  "Tailored monetisation strategy support",
  "Dedicated technical support",
  "Use your own IATA accreditation",
] as const;

function FeatureRow({ text }: { text: string }) {
  return (
    <li className="flex gap-3 text-[15px] leading-snug text-zinc-700">
      <span
        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
        style={{ backgroundColor: NAVY }}
        aria-hidden
      >
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
      <span>{text}</span>
    </li>
  );
}

export function PricingPageContent() {
  return (
    <>
      {/* Hero + breadcrumb (About-style image, FAQ-style trail) */}
      <section
        className="relative min-h-[260px] w-full sm:min-h-[300px] md:min-h-[320px]"
        aria-labelledby="pricing-hero-title"
      >
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          className="object-cover object-center brightness-[0.45]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-zinc-900/50" aria-hidden />
        <div className="relative z-10 flex min-h-[260px] flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[300px] md:min-h-[320px]">
          <h1
            id="pricing-hero-title"
            className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-tight"
          >
            Pricing
          </h1>
          <nav
            className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="font-medium text-white transition hover:underline">
              Home
            </Link>
            <span className="text-white/80" aria-hidden>
              &gt;
            </span>
            <span className="font-semibold" style={{ color: RED }}>
              Pricing
            </span>
            <span className="text-white/80" aria-hidden>
              &gt;
            </span>
            <span className="font-medium text-white">{BRAND.name}</span>
          </nav>
        </div>
      </section>

      {/* Pricing cards */}
      <section
        className="border-b border-zinc-200/80 py-14 sm:py-16 md:py-20"
        style={{ background: "linear-gradient(180deg, #f4f6fb 0%, #eef1f8 100%)" }}
        aria-labelledby="pricing-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            id="pricing-heading"
            className="text-center font-sans text-3xl font-bold tracking-tight text-[#0a051d] sm:text-4xl md:text-[2.25rem]"
          >
            Pay <em className="italic">only</em> for what you need.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 lg:items-stretch">
            {/* Pay as you go */}
            <article
              className="flex min-h-0 flex-col rounded-2xl border border-zinc-200/90 p-8 shadow-sm sm:p-10"
              style={{ backgroundColor: CARD_BG }}
            >
              <h3 className="font-sans text-xl font-semibold sm:text-2xl" style={{ color: TITLE_BLUE }}>
                Pay as you go
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-zinc-600">
                APIs to components - everything you need to build your travel experience.
              </p>
              <p className="mt-6 font-sans text-2xl font-bold tracking-tight text-zinc-900 sm:text-[1.65rem]">
                Zero up-front costs
              </p>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-lg py-3.5 text-center text-sm font-semibold text-white transition hover:opacity-95"
                style={{ backgroundColor: NAVY }}
              >
                Sign up →
              </Link>
              <hr className="my-8 border-zinc-200" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">Key features</p>
              <ul className="mt-5 space-y-4">
                {PAYG_FEATURES.map((text) => (
                  <FeatureRow key={text} text={text} />
                ))}
              </ul>
            </article>

            {/* Enterprise */}
            <article
              className="flex min-h-0 flex-col rounded-2xl border border-zinc-200/90 p-8 shadow-sm sm:p-10"
              style={{ backgroundColor: CARD_BG }}
            >
              <h3 className="font-sans text-xl font-semibold sm:text-2xl" style={{ color: TITLE_BLUE }}>
                Enterprise
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-zinc-600">
                Built for enterprises who want to scale quickly with confidence.
              </p>
              <p className="mt-6 font-sans text-2xl font-bold tracking-tight text-zinc-900 sm:text-[1.65rem]">
                Bespoke pricing
              </p>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-lg py-3.5 text-center text-sm font-semibold text-white transition hover:opacity-95"
                style={{ backgroundColor: NAVY }}
              >
                Contact our Sales team →
              </Link>
              <hr className="my-8 border-zinc-200" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">Key features</p>
              <ul className="mt-5 space-y-4">
                {ENTERPRISE_FEATURES.map((text) => (
                  <FeatureRow key={text} text={text} />
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ (same accordion as FAQ page) */}
      <section className="border-b border-zinc-200 bg-white" aria-labelledby="pricing-faq-heading">
        <h2
          id="pricing-faq-heading"
          className="pt-12 text-center font-sans text-2xl font-bold tracking-tight text-zinc-900 sm:pt-14 sm:text-3xl"
        >
          FAQ
        </h2>
        <FaqAccordionSection className="bg-white pb-12 pt-6 sm:pb-14 sm:pt-8 lg:pb-16" />
      </section>

      <TechnologyProviderSection />
    </>
  );
}
