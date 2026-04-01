import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { WhyChooseContactSection } from "@/components/WhyChooseContactSection";
import { BRAND } from "@/lib/brand";

const RED = "#E31E24";
const BLUE = "#0054A6";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80&auto=format&fit=crop";

const TEAM_BULLETS = [
  "We invest in continuous learning so engineers stay current with travel APIs, cloud patterns, and security best practices.",
  "Cross-functional pods bring product, design, and delivery together so milestones stay predictable and transparent for clients.",
] as const;

export function AboutPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[260px] w-full sm:min-h-[300px] md:min-h-[340px]" aria-labelledby="about-hero-title">
        <Image
          src={HERO_IMAGE}
          alt=""
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
            A technology service provider of new world
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-12 sm:py-16 md:py-20" aria-labelledby="adventure-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2
            id="adventure-heading"
            className="text-center text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl md:text-[1.85rem]"
          >
            The {BRAND.name} adventure starts now
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 rounded-full" style={{ backgroundColor: RED }} aria-hidden />

          <blockquote className="mt-10 text-center text-base italic leading-relaxed text-zinc-800 sm:text-lg">
            &ldquo;Technology should simplify travel—not complicate it. We build systems that agencies, OTAs, and enterprises can
            trust at scale.&rdquo;
          </blockquote>
          <blockquote className="mt-6 text-center text-base italic leading-relaxed text-zinc-800 sm:text-lg">
            &ldquo;From white-label portals to mobile apps, our focus is reliability, speed to market, and long-term
            partnership.&rdquo;
          </blockquote>

          <div className="mt-12 space-y-5 text-left text-[15px] leading-[1.8] text-zinc-700 sm:text-base">
            <p>
              {BRAND.fullName} has grown alongside the travel industry&apos;s shift toward digital-first booking, APIs, and
              personalized retailing. We combine product thinking with strong engineering so our clients can launch faster,
              integrate suppliers cleanly, and operate with confidence.
            </p>
            <p>
              Our teams work across discovery, UX, backend services, integrations, QA, and DevOps—so you get one accountable
              partner instead of fragmented vendors. We emphasize documentation, observability, and maintainable codebases that
              your internal teams can extend over time.
            </p>
            <p>
              Whether you are modernizing a legacy stack or starting fresh, we align delivery with your roadmap: phased
              releases, clear milestones, and pragmatic trade-offs that protect revenue and user experience.
            </p>
          </div>

          <div
            className="mt-12 rounded-lg border px-5 py-6 sm:px-8 sm:py-8"
            style={{ backgroundColor: "rgba(0, 84, 166, 0.06)", borderColor: "rgba(0, 84, 166, 0.15)" }}
          >
            <p className="text-center text-sm leading-relaxed text-zinc-800 sm:text-left sm:text-[15px] sm:leading-[1.75]">
              <span className="font-bold" style={{ color: BLUE }}>
                white label solution
              </span>
              ,{" "}
              <span className="font-bold text-zinc-900">B2B / B2C portals</span>,{" "}
              <span className="font-bold" style={{ color: BLUE }}>
                Mobile Apps
              </span>{" "}
              for iOS &amp; Android,{" "}
              <span className="font-bold text-zinc-900">payment &amp; supplier integrations</span>,{" "}
              <span className="font-bold" style={{ color: BLUE }}>
                Travel CRM
              </span>
              , operations dashboards, and ongoing support—designed as modules you can adopt step by step.
            </p>
          </div>

          {/* Team */}
          <div className="mt-16 sm:mt-20">
            <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-zinc-200/90 py-3.5">
              <div className="mx-auto max-w-3xl px-4 sm:px-6">
                <h3 className="text-lg font-bold text-zinc-900 sm:text-xl">About Our Team</h3>
              </div>
            </div>

            <div className="mt-8 space-y-5 text-[15px] leading-[1.8] text-zinc-700 sm:text-base">
              <p>
                Our team blends travel-domain experience with modern software practice. Consultants and architects help shape
                the right architecture early; developers ship iteratively with reviews, automated checks, and staging
                environments that mirror production.
              </p>
              <p>
                We maintain a culture of ownership: each engagement has clear leads for delivery and communication, with
                regular demos and written updates so stakeholders stay informed without chasing status.
              </p>
            </div>

            <ul className="mt-8 space-y-4">
              {TEAM_BULLETS.map((text) => (
                <li key={text} className="flex gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center"
                    style={{ backgroundColor: RED }}
                    aria-hidden
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  </span>
                  <span className="pt-0.5 text-sm leading-snug text-zinc-800 sm:text-[15px]">{text}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-center text-sm text-zinc-500 sm:text-left">
              More about our work?{" "}
              <Link href="/contact" className="font-semibold hover:underline" style={{ color: RED }}>
                Contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <WhyChooseContactSection />
    </>
  );
}
