import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { THEME } from "@/lib/theme";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  Backpack,
  Bed,
  Briefcase,
  FileText,
  Globe,
  Luggage,
  Plane,
  Ticket,
} from "lucide-react";


const DESK_IMAGE =
  "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=1800&q=82&auto=format&fit=crop";

const PATTERN_ICONS = [Plane, Globe, Backpack, Bed, Ticket, FileText, Luggage, Briefcase] as const;

function IconPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-[25%] -top-[15%] w-[150%]" style={{ transform: "rotate(-16deg)" }}>
        <div className="grid grid-cols-7 gap-x-8 gap-y-12 p-4 sm:grid-cols-9 sm:gap-x-10 sm:gap-y-14 md:grid-cols-10">
          {Array.from({ length: 56 }).map((_, i) => {
            const Icon = PATTERN_ICONS[i % PATTERN_ICONS.length];
            return (
              <Icon
                key={i}
                className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
                strokeWidth={1.2}
                style={{ color: "rgba(255, 214, 214, 0.28)" }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function AboutSplitSection() {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-900">
      <div className="relative grid min-h-[400px] w-full grid-cols-1 lg:min-h-[600px] lg:grid-cols-[44%_56%] xl:min-h-[600px]">
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src={DESK_IMAGE}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/25 lg:from-black/65 lg:via-black/45" />
        </div>

        <div className="relative z-[1] flex min-h-[400px] min-w-0 flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:min-h-0 lg:max-w-[560px] lg:justify-center lg:px-16 lg:py-12 xl:pl-14 xl:pr-8">
          <RevealOnScroll>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.1rem] xl:text-[2.35rem]">
            <span className="relative inline-block">
              Air
              <span
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-sm"
                style={{ backgroundColor: THEME.primary }}
                aria-hidden
              />
            </span>{" "}
            retail, engineered for B2B
          </h2>
          <p className="mt-6 max-w-md text-base font-medium leading-relaxed text-white/92 sm:text-lg">
            Unified flight shopping, fare rules, and post-ticketing flows—so your team sells with confidence and your
            customers get clear, reliable outcomes.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex w-fit rounded-full px-9 py-3.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
            style={{ backgroundColor: THEME.primary }}
          >
            Talk to us
          </Link>
          </RevealOnScroll>
        </div>

        <div
          className="about-split-red relative z-[1] flex min-w-0 flex-col justify-center text-white"
          style={{ backgroundColor: THEME.primary }}
        >
          <IconPattern />
          <div className="relative z-10 w-full px-6 py-14 sm:px-10 sm:py-16 lg:py-12 lg:pl-14 lg:pr-10 xl:pl-16 xl:pr-14">
            <RevealOnScroll className="mx-auto w-full max-w-xl lg:max-w-[30rem] xl:max-w-[34rem]">
              <h2 className="text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl lg:text-[2.1rem] xl:text-[2.35rem]">
                <span className="inline-block w-fit border-b-[3px] border-white pb-1">Who we are</span>
                <span className="ml-2 inline sm:ml-2.5">{BRAND.fullName}</span>
              </h2>
              <div className="mt-7 space-y-5 text-base leading-relaxed text-white/95 sm:text-[17px]">
                <p>
                  {BRAND.fullName} helps travel businesses digitise distribution—from first storefront to complex
                  multi-supplier stacks—with delivery discipline and long-term support.
                </p>
                <p>
                  We focus on maintainable architectures, transparent milestones, and integrations that match how the
                  industry really sells, settles, and reports.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-9 inline-flex w-fit rounded-full border border-white bg-transparent px-9 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Our story
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
