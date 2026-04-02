"use client";

import { ChevronLeft, ChevronRight, Plane } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { THEME } from "@/lib/theme";

function useCarouselScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const max = scrollWidth - clientWidth;
    setCanPrev(scrollLeft > 4);
    setCanNext(scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    const step = Math.max(el.clientWidth * 0.45, 200);
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return { ref, canPrev, canNext, scrollByDir, update };
}

function LogoSabre() {
  return (
    <div className="flex h-16 items-center justify-center px-2 sm:h-20">
      <Image src="/sabrelogo.png" alt="Sabre" width={100} height={100} className="w-full h-full object-contain" />
    </div>
  );
}

function LogoSita() {
  return (
    <div className="flex h-16 flex-col items-center justify-center gap-0.5 px-2 text-center sm:h-20">
      <span className="text-lg font-bold tracking-tight text-[#0033a0] sm:text-xl">SITA</span>
      <span className="max-w-[140px] text-[9px] font-medium leading-tight text-zinc-500 sm:text-[10px]">
        Create success. Together.
      </span>
    </div>
  );
}

function Duffle() {
  return (
    <div className="flex h-16 flex-col items-center justify-center gap-0.5 px-2 text-center sm:h-20">
      <svg viewBox="0 0 170 40" width={100} fill="var(--purple-200)" xmlns="http://www.w3.org/2000/svg"><title>Duffel Lockup</title><path d="M151.018 16.0692C154.557 16.0692 155.766 18.9531 156.236 21.1144H145.806C146.362 18.1655 148.133 16.0692 151.018 16.0692ZM151.998 30.3449C148.672 30.3449 146.454 28.1913 145.81 25.1449H160.957C160.957 25.1449 161.077 24.3839 161.077 23.4498C161.077 16.8568 157.75 12.0418 151.018 12.0418C144.822 12.0418 140.828 17.1712 140.828 23.2396C140.828 29.3084 144.314 34.4378 151.726 34.4378C157.453 34.4378 161.113 30.8467 161.113 30.8467L158.673 27.5811C158.673 27.5811 155.833 30.3449 151.998 30.3449ZM164.712 33.9594H169.748V5.05417H164.712V33.9594ZM135.778 4.60472C137.89 4.60472 140.316 5.16297 140.316 5.16297V9.44125C138.573 8.79118 133.722 7.43378 133.722 11.5588V12.4808H140.316V16.6289H133.722V33.9592H128.687V11.085C128.687 4.80458 133.664 4.60472 135.778 4.60472ZM121.489 4.60472C123.602 4.60472 126.027 5.16297 126.027 5.16297V9.44125C124.284 8.79118 119.434 7.43378 119.434 11.5588V12.4808H126.027V16.6289H119.434V33.9592H114.398V16.6289H110.676V12.4808H114.398V11.085C114.398 4.80458 119.376 4.60472 121.489 4.60472ZM102.705 12.4797H107.741V33.9582H102.705V31.0169C101.49 32.4511 99.2317 34.3969 95.9141 34.3969C90.6607 34.3969 87.9961 30.7285 87.9961 26.5105C87.9961 22.2921 87.9961 12.4797 87.9961 12.4797H93.0319C93.0319 12.4797 93.0319 22.7615 93.0319 25.0745C93.0319 27.3879 94.1602 29.7998 97.7486 29.7998C100.098 29.7998 101.714 28.3101 102.705 26.4564V12.4797ZM70.4821 29.2822H64.1382V10.7178H70.4821C75.6082 10.7178 79.3442 14.8739 79.3442 20.0003C79.3442 25.1268 75.6082 29.2822 70.4821 29.2822ZM70.4828 6.04224H59.0234V33.9611H70.4828C78.1921 33.9611 84.4418 27.7111 84.4418 20.0018C84.4418 12.292 78.1921 6.04224 70.4828 6.04224Z"></path><path d="M0 10.0002V30.0002C2.76145 30.0002 5.00007 25.5229 5.00007 20C5.00007 14.4774 2.76145 10.0002 0 10.0002ZM9.51172 6.03906V33.9579C15.0346 33.9579 19.5119 27.7079 19.5119 19.9984C19.5119 12.2888 15.0346 6.03906 9.51172 6.03906ZM44.0234 20C44.0234 31.0458 35.0692 40 24.0234 40V0C35.0692 0 44.0234 8.95449 44.0234 20Z"></path></svg>
    </div>
  );
}

function Amadeus() {
  return (
    <div className="flex h-16 items-center justify-center px-2 sm:h-20">
      <Image src="/amadeus.png" alt="Amadeus" width={100} height={100} className="w-full h-full object-contain" />
    </div>
  );
}

function LogoTbo() {
  return (
    <div className="flex h-16 items-center justify-center gap-1.5 px-2 sm:h-20">
      <Plane className="h-5 w-5 shrink-0 text-[#b8860b]" strokeWidth={1.75} aria-hidden />
      <span className="text-center text-[11px] font-semibold leading-tight text-[#b8860b] sm:text-xs md:text-sm">
        travelboutique
        <span className="font-normal">online</span>
      </span>
    </div>
  );
}

function LogoTravelFusion() {
  return (
    <div className="flex h-16 items-center justify-center px-2 sm:h-20">
      <span className="inline-flex items-center text-lg font-semibold tracking-tight text-[#1e5ba8] sm:text-xl">
        travelfusi
        <span className="relative inline-block px-[0.05em]">
          o
          <span
            className="absolute left-1/2 top-[45%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#22c55e] bg-[#22c55e]/40"
            aria-hidden
          />
        </span>
        n
      </span>
    </div>
  );
}

function LogoTravelport() {
  return (
    <div className="flex h-16 items-center gap-2 px-2 sm:h-20">
      <svg className="h-9 w-9 shrink-0 text-[#0078d4]" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path
          fill="currentColor"
          d="M4 8 L16 4 L28 8 L28 14 L16 18 L4 14 Z"
          opacity={0.9}
        />
        <path fill="#22c55e" d="M4 18 L16 14 L28 18 L28 24 L16 28 L4 24 Z" opacity={0.85} />
      </svg>
      <span className="text-lg font-semibold tracking-tight text-[#0078d4] sm:text-xl">Travelport</span>
    </div>
  );
}

const LOGO_ITEMS = [
  { id: "duffle", node: <Duffle /> },
  { id: "Sabre", node: <LogoSabre /> },
  { id: "amadeus", node: <Amadeus /> },
  { id: "tbo", node: <LogoTbo /> },
  { id: "travelfusion", node: <LogoTravelFusion /> },
  { id: "travelport", node: <LogoTravelport /> },
] as const;

export function TechnologyProviderSection() {
  const { ref, canPrev, canNext, scrollByDir } = useCarouselScroll();

  return (
    <section className="bg-white py-14 sm:py-16 md:py-20" aria-labelledby="tech-provider-heading">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="min-w-0 flex-1">
            <h2
              id="tech-provider-heading"
              className="text-2xl font-normal tracking-tight text-zinc-800 sm:text-3xl md:text-[1.75rem]"
            >
              <span className="font-normal">Our </span>
              <span className="font-bold" style={{ color: THEME.primary }}>
                Technology
              </span>
              <span className="font-normal"> Provider</span>
            </h2>
            {/* Thick red under “Our Technology”, thin gray under “Provider” */}
            <div className="mt-3 flex w-full max-w-md items-end sm:max-w-lg">
              <div className="h-[3px] w-[min(72%,18rem)] shrink-0 rounded-sm sm:w-[min(68%,20rem)]" style={{ backgroundColor: THEME.primary }} />
              <div className="mb-[1px] h-px min-w-[5rem] flex-1 bg-zinc-300" />
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-[15px]">
              We integrate with the suppliers and aggregators your commercial team already relies on—so your roadmap is not
              blocked by opaque handoffs.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => scrollByDir(-1)}
              disabled={!canPrev}
              className="flex h-10 w-10 items-center justify-center border-2 transition sm:h-11 sm:w-11"
              style={
                canPrev
                  ? { borderColor: THEME.primary, color: THEME.primary }
                  : { borderColor: "#fecaca", color: "#fca5a5" }
              }
              aria-label="Previous logos"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2.25} />
            </button>
            <button
              type="button"
              onClick={() => scrollByDir(1)}
              disabled={!canNext}
              className="flex h-10 w-10 items-center justify-center border-2 transition sm:h-11 sm:w-11"
              style={
                canNext
                  ? { borderColor: THEME.primary, color: THEME.primary }
                  : { borderColor: "#e5e7eb", color: "#d1d5db" }
              }
              aria-label="Next logos"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2.25} />
            </button>
          </div>
        </div>

        <div
          ref={ref}
          className="mt-10 flex gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-12 sm:gap-8 md:gap-10 [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {LOGO_ITEMS.map(({ id, node }) => (
            <div
              key={id}
              className="flex w-[min(78vw,280px)] shrink-0 snap-center items-center justify-center sm:w-[200px] md:w-[220px] lg:w-[200px] xl:w-[180px]"
            >
              <div className="flex w-full items-center justify-center rounded-lg border border-zinc-100 bg-zinc-50/50 px-3 py-4 shadow-sm transition hover:border-zinc-200 hover:bg-white">
                {node}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
