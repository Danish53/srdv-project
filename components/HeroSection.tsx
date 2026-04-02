"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { BRAND } from "@/lib/brand";
import { THEME } from "@/lib/theme";

/** Travel / B2B hero backgrounds only — no AI or generic “tech chip” stock. */
const HERO_SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80&auto=format&fit=crop",
    alt: "Airliner in flight above clouds",
  },
  {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format&fit=crop",
    alt: "Earth at night from space, global connectivity",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80&auto=format&fit=crop",
    alt: "Resort pool and hotel at dusk",
  },
] as const;

const BULLETS = [
  "WHITE-LABEL B2B & B2C PORTALS",
  "FLIGHT, HOTEL & GROUND INVENTORY",
  "API-FIRST INTEGRATIONS & AUTOMATION",
  "MOBILE APPS FOR AGENTS & TRAVELERS",
] as const;

function ChevronNav({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      {dir === "prev" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  );
}

function IconPlane({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L6 12Zm6.088 0h7.5" />
    </svg>
  );
}

function IconBed({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12h19.5m-19.5 0a1.125 1.125 0 0 1-1.125-1.125v-1.5C2 8.727 2.727 8 3.75 8h1.5c1.023 0 1.875.727 1.875 1.875V11.25A1.125 1.125 0 0 1 7.5 12m-5.25 0v3.75A1.125 1.125 0 0 0 3.375 16.5h17.25c.621 0 1.125-.504 1.125-1.125V12m-19.5 0h16.5" />
    </svg>
  );
}

function IconBus({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m12 0a1.5 1.5 0 0 1-3 0M3 16.5V6a1.5 1.5 0 0 1 1.5-1.5h15A1.5 1.5 0 0 1 21 6v10.5m-18 0A1.5 1.5 0 0 0 4.5 18h.75m12 0h.75a1.5 1.5 0 0 0 1.5-1.5V9h-6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h13.5m-9-3.75h.008v.008H7.5V8.25Z" />
    </svg>
  );
}

function FlowChevron() {
  return (
    <span className="pointer-events-none text-neutral-200" aria-hidden>
      <svg className="h-12 w-5" viewBox="0 0 20 48" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l8 18-8 18" />
      </svg>
    </span>
  );
}

const services = [
  { title: "Flights", subtitle: "Search, book & manage air content", Icon: IconPlane },
  { title: "Hotels", subtitle: "Rates, allotments & direct contracts", Icon: IconBed },
  { title: "Bus & car", subtitle: "Ground transport & transfers", Icon: IconBus },
] as const;

const AUTO_MS = 6000;

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const count = HERO_SLIDES.length;

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + count) % count);
    },
    [count]
  );

  useEffect(() => {
    const t = setInterval(() => go(1), AUTO_MS);
    return () => clearInterval(t);
  }, [go]);

  return (
    <section className="relative w-full bg-slate-950 pb-8 md:pb-14" aria-roledescription="carousel">
      <div className="relative min-h-[min(78vh,620px)] w-full overflow-hidden md:min-h-[min(82vh,680px)]">
        {HERO_SLIDES.map(({ src, alt }, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              i === index ? "z-[1] opacity-100" : "z-0 opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={i === 0}
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-900/65 to-slate-950/85"
              aria-hidden
            />
          </div>
        ))}

        <div className="relative z-10 flex min-h-[min(78vh,620px)] flex-col items-center justify-center px-4 py-16 text-center md:min-h-[min(82vh,680px)] md:px-8 md:py-20">
          <h1 className="max-w-4xl text-balance text-2xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
            B2B TRAVEL TECHNOLOGY THAT SCALES WITH YOU
          </h1>
          <p className="mt-4 text-sm font-semibold tracking-wide text-white/85 sm:text-base">{BRAND.fullName}</p>
          <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-white/80 sm:text-base">
            Portals, APIs, and mobile products for OTAs, TMCs, and distributors—built to launch fast and integrate cleanly
            with your suppliers.
          </p>
          <ul className="mt-8 grid max-w-3xl grid-cols-1 gap-x-12 gap-y-3 text-left sm:grid-cols-2 md:mt-10 md:gap-y-3.5">
            {BULLETS.map((text) => (
              <li key={text} className="flex items-start gap-3 text-sm font-semibold uppercase tracking-wide text-white md:text-base">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full md:mt-2"
                  style={{ backgroundColor: THEME.secondary }}
                  aria-hidden
                />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-2 md:px-4">
          <button
            type="button"
            onClick={() => go(-1)}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/10 shadow-md backdrop-blur-sm transition md:h-12 md:w-12"
            style={{ backgroundColor: `${THEME.primary}d9` }}
            aria-label="Previous slide"
          >
            <ChevronNav dir="prev" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/10 shadow-md backdrop-blur-sm transition md:h-12 md:w-12"
            style={{ backgroundColor: `${THEME.primary}d9` }}
            aria-label="Next slide"
          >
            <ChevronNav dir="next" />
          </button>
        </div>

        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-8" role="tablist" aria-label="Slides">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"}`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      </div>

      {/* Overlapping service bar */}
      <div className="relative z-30 mx-auto w-full max-w-[1200px] px-3 sm:px-4 lg:px-6">
        <div className="-mt-10 rounded-sm bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] md:-mt-14 lg:-mt-16">
          <div className="flex flex-col divide-y divide-neutral-100 md:flex-row md:divide-x md:divide-y-0">
            {services.map(({ title, subtitle, Icon }, i) => (
              <div key={title} className="relative flex flex-1 items-stretch">
                <div className="flex w-full items-center gap-4 px-5 py-5 sm:gap-5 sm:px-8 sm:py-6 md:py-7">
                  <div
                    className="shrink-0 rounded-full p-[3px]"
                    style={{
                      background: `linear-gradient(135deg, ${THEME.primary}, ${THEME.secondary})`,
                    }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white sm:h-16 sm:w-16">
                      <span className="inline-flex text-current" style={{ color: THEME.primary }}>
                        <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                      </span>
                    </div>
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-base font-bold sm:text-lg" style={{ color: THEME.primary }}>
                      {title}
                    </p>
                    <p className="text-sm text-neutral-500">{subtitle}</p>
                  </div>
                </div>
                {i < services.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 md:flex md:items-center">
                    <FlowChevron />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
