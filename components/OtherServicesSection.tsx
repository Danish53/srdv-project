"use client";

import type { LucideIcon } from "lucide-react";
import {
  CarFront,
  CreditCard,
  GraduationCap,
  MessageSquare,
  Monitor,
  Search,
  Stethoscope,
  UtensilsCrossed,
} from "lucide-react";
import { useEffect, useState } from "react";

const RED = "#e31e24";
const DARK = "#171717";

type ServiceItem = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const ITEMS: ServiceItem[] = [
  {
    title: "Job Portal Development",
    description: "ATS-ready job boards, employer dashboards, and candidate flows with search, alerts, and analytics.",
    Icon: Search,
  },
  {
    title: "Educational Portal Development",
    description: "LMS hooks, course catalogs, assessments, and secure student–teacher collaboration out of the box.",
    Icon: GraduationCap,
  },
  {
    title: "Dynamic Website Development",
    description: "CMS-driven pages, fast delivery, SEO structure, and component libraries your marketing team can own.",
    Icon: Monitor,
  },
  {
    title: "Payment Gateway Integration",
    description: "PCI-minded checkout, multi-currency, retries, webhooks, and reconciliation-friendly reporting.",
    Icon: CreditCard,
  },
  {
    title: "Food Ordering Development",
    description: "Menus, modifiers, kitchen tickets, delivery slots, and rider handoff tuned for high order volume.",
    Icon: UtensilsCrossed,
  },
  {
    title: "Taxi Booking Development",
    description: "Live dispatch, fare rules, driver apps, and trip tracking with ratings and payout-ready ledgers.",
    Icon: CarFront,
  },
  {
    title: "Chatting System",
    description: "Rooms, DMs, presence, moderation, and media with scalable realtime infrastructure.",
    Icon: MessageSquare,
  },
  {
    title: "Health & Medical App",
    description: "Appointments, records access, reminders, and telehealth hooks with privacy-first defaults.",
    Icon: Stethoscope,
  },
];

function useGridColumns(): 1 | 2 | 4 {
  const [cols, setCols] = useState<1 | 2 | 4>(4);

  useEffect(() => {
    const read = () => {
      const w = window.innerWidth;
      if (w >= 1024) setCols(4);
      else if (w >= 640) setCols(2);
      else setCols(1);
    };
    read();
    window.addEventListener("resize", read);
    return () => window.removeEventListener("resize", read);
  }, []);

  return cols;
}

function isRedCell(index: number, cols: number): boolean {
  const row = Math.floor(index / cols);
  const col = index % cols;
  return (row + col) % 2 === 0;
}

export function OtherServicesSection() {
  const cols = useGridColumns();

  const gridClassName =
    cols === 4 ? "grid grid-cols-4 gap-0" : cols === 2 ? "grid grid-cols-2 gap-0" : "grid grid-cols-1 gap-0";

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20" aria-labelledby="other-services-heading">
      <div className="mx-auto max-w-[1400px] px-0 sm:px-4 lg:px-6">
        <div className="px-4 pb-10 text-center sm:px-6 md:pb-12">
          <h2
            id="other-services-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-[2.15rem]"
          >
            <span className="text-zinc-900">Other </span>
            <span style={{ color: RED }}>Services</span>
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 rounded-full" style={{ backgroundColor: RED }} />
        </div>

        <div className={gridClassName}>
          {ITEMS.map((item, index) => {
            const red = isRedCell(index, cols);
            const { Icon } = item;
            return (
              <article
                key={item.title}
                className="relative flex min-h-[220px] flex-col items-center justify-center overflow-hidden px-6 py-12 text-center sm:min-h-[240px] sm:px-8 md:min-h-[260px] md:py-14"
                style={{ backgroundColor: red ? RED : DARK }}
              >
                <div
                  className="pointer-events-none absolute inset-0 flex items-center justify-center"
                  aria-hidden
                >
                  <Icon
                    className="h-36 w-36 sm:h-40 sm:w-40 md:h-44 md:w-44"
                    strokeWidth={1}
                    style={{
                      color: red ? "rgba(255, 200, 200, 0.35)" : "rgba(255, 255, 255, 0.07)",
                    }}
                  />
                </div>
                <div className="relative z-[1] max-w-md">
                  <h3
                    className="text-lg font-bold leading-snug sm:text-xl"
                    style={{ color: red ? "#ffffff" : RED }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed sm:text-[15px]"
                    style={{ color: "rgba(255,255,255,0.92)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
