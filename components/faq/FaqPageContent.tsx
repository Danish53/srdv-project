"use client";

import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { THEME } from "@/lib/theme";
import { FaqAccordionSection } from "./FaqAccordionSection";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80&auto=format&fit=crop";

export function FaqPageContent() {
  return (
    <>
      <section className="relative min-h-[220px] w-full sm:min-h-[260px] md:min-h-[300px]" aria-label="FAQ hero">
        <Image
          src={HERO_IMAGE}
          alt=""
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
          <nav className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base" aria-label="Breadcrumb">
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
          </nav>
        </div>
      </section>

      <FaqAccordionSection />
    </>
  );
}
