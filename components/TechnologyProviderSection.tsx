"use client";

import { ChevronLeft, ChevronRight, Plane } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const RED = "#e31e24";

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
      <span className="text-center text-lg font-semibold tracking-tight text-[#c41230] sm:text-xl">Sabre</span>
      <span className="ml-1 hidden text-[10px] font-medium leading-tight text-[#c41230] sm:block sm:text-xs">
        Travel
        <br />
        Network
      </span>
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

function LogoSpiceJet() {
  return (
    <div className="flex h-16 w-[140px] items-center justify-center bg-[#d6083b] px-3 shadow-sm sm:h-[72px] sm:w-[160px]">
      <span className="text-center text-xs font-bold uppercase tracking-wide text-white sm:text-sm">SpiceJet</span>
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
  { id: "sabre", node: <LogoSabre /> },
  { id: "sita", node: <LogoSita /> },
  { id: "spicejet", node: <LogoSpiceJet /> },
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
              <span className="font-bold" style={{ color: RED }}>
                Technology
              </span>
              <span className="font-normal"> Provider</span>
            </h2>
            {/* Thick red under “Our Technology”, thin gray under “Provider” */}
            <div className="mt-3 flex w-full max-w-md items-end sm:max-w-lg">
              <div className="h-[3px] w-[min(72%,18rem)] shrink-0 rounded-sm sm:w-[min(68%,20rem)]" style={{ backgroundColor: RED }} />
              <div className="mb-[1px] h-px min-w-[5rem] flex-1 bg-zinc-300" />
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => scrollByDir(-1)}
              disabled={!canPrev}
              className="flex h-10 w-10 items-center justify-center border-2 transition sm:h-11 sm:w-11"
              style={
                canPrev
                  ? { borderColor: RED, color: RED }
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
                  ? { borderColor: RED, color: RED }
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
