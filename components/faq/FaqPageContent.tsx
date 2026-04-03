"use client";

import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { MARKETING_HERO, MARKETING_SECTION } from "@/lib/marketing-hero-images";
import { THEME } from "@/lib/theme";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FaqAccordionSection } from "./FaqAccordionSection";

const hero = MARKETING_HERO.faq;

export function FaqPageContent() {
  return (
    <>
      <section className="relative min-h-[220px] w-full sm:min-h-[260px] md:min-h-[300px]" aria-label="FAQ hero">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          className="object-cover object-center brightness-[0.4] sm:blur-[1px]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-zinc-900/55" aria-hidden />
        <div className="relative z-10 flex min-h-[220px] flex-col items-center justify-center px-4 py-14 text-center sm:min-h-[260px] md:min-h-[300px]">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-[3.25rem]">
            Help &amp; FAQ
          </h1>
          <p className="mt-3 max-w-xl text-sm text-white/85 sm:text-base">
            Short answers on what we build, how we deliver, and what to expect next—then talk to us if you need detail.
          </p>
          {/* <nav className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base" aria-label="Breadcrumb">
            <Link href="/" className="font-medium text-white transition hover:underline">
              Home
            </Link>
            <span className="text-white/80" aria-hidden>
              &gt;
            </span>
            <span className="font-semibold" style={{ color: THEME.secondary }}>
              FAQ
            </span>
            <span className="text-white/80" aria-hidden>
              &gt;
            </span>
            <span className="font-medium text-white">{BRAND.name}</span>
          </nav> */}
        </div>
      </section>

      <section className="bg-white" aria-label="FAQ content">
        <div className="relative h-44 w-full overflow-hidden sm:h-52 lg:hidden">
          <Image
            src={MARKETING_SECTION.aboutAirportTerminal.src}
            alt={MARKETING_SECTION.aboutAirportTerminal.alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        <RevealOnScroll className="mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6 lg:flex lg:items-start lg:gap-12 lg:px-8 lg:pb-16 lg:pt-10">
          <div className="min-w-0 flex-1 lg:max-w-[min(100%,42rem)]">
            <FaqAccordionSection className="bg-transparent py-0 sm:py-0 lg:py-0" innerMaxWidthClass="max-w-none" />
          </div>
          <aside className="relative mt-0 hidden shrink-0 lg:mt-0 lg:block lg:w-[min(100%,22rem)] xl:w-[26rem]" aria-label="Travel operations">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-zinc-200 shadow-md">
                <Image
                  src={MARKETING_SECTION.faqOperations.src}
                  alt={MARKETING_SECTION.faqOperations.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 0px, 400px"
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                Flight schedules, fares, and partner contracts move fast—clear answers help your teams ship without guesswork.
              </p>
            </div>
          </aside>
        </RevealOnScroll>
      </section>
    </>
  );
}
