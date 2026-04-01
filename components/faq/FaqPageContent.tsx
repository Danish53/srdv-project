"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { getFaqsForTopic, TOPICS, type FaqItem } from "./faq-data";

const RED = "#E31E24";
const BLUE = "#004A8D";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80&auto=format&fit=crop";

function filterFaqs(items: FaqItem[], query: string): FaqItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return items;
  return items.filter(
    (item) => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
  );
}

export function FaqPageContent() {
  const [activeTopicId, setActiveTopicId] = useState("srdv");
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState<number | null>(0);

  const activeLabel = TOPICS.find((t) => t.id === activeTopicId)?.label ?? "SRDV";
  const allFaqs = useMemo(
    () => getFaqsForTopic(activeTopicId, activeLabel),
    [activeTopicId, activeLabel]
  );
  const faqs = useMemo(() => filterFaqs(allFaqs, search), [allFaqs, search]);

  function toggleAccordion(index: number) {
    setOpenId((prev) => (prev === index ? null : index));
  }

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
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-[3.25rem]">FAQ</h1>
          <nav className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base" aria-label="Breadcrumb">
            <Link href="/" className="font-medium text-white transition hover:underline">
              Home
            </Link>
            <span className="text-white/80" aria-hidden>
              &gt;
            </span>
            <span className="font-semibold" style={{ color: RED }}>
              FAQ
            </span>
            <span className="text-white/80" aria-hidden>
              &gt;
            </span>
            <span className="font-medium text-white">SRDV</span>
          </nav>
        </div>
      </section>

      <div className="bg-white py-10 sm:py-12 lg:py-14">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:gap-10 lg:px-8">
          {/* Sidebar */}
          <aside className="w-full shrink-0 lg:w-[260px] xl:w-[280px]" aria-label="FAQ topics">
            <div className="overflow-hidden rounded-sm border border-zinc-200 bg-white shadow-sm">
              <div className="px-4 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white sm:text-left" style={{ backgroundColor: RED }}>
                Topic
              </div>
              <ul className="max-h-[60vh] overflow-y-auto lg:max-h-none">
                {TOPICS.map((topic) => {
                  const active = topic.id === activeTopicId;
                  return (
                    <li key={topic.id} className="border-t border-zinc-200 first:border-t-0">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTopicId(topic.id);
                          setOpenId(0);
                          setSearch("");
                        }}
                        className={`w-full px-4 py-3 text-left text-sm transition sm:py-3.5 sm:text-[13px] ${
                          active
                            ? "bg-red-50 font-semibold text-zinc-900"
                            : "text-zinc-700 hover:bg-zinc-50"
                        }`}
                        style={active ? { borderLeft: `4px solid ${RED}` } : { borderLeft: "4px solid transparent" }}
                      >
                        {topic.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Main */}
          <div className="min-w-0 flex-1">
            <div className="rounded-lg border border-zinc-200 bg-zinc-100/80 px-4 py-5 sm:px-6 sm:py-6">
              <p className="text-sm leading-relaxed text-zinc-700 sm:text-[15px]">
                You can get quick answer of your question by entering here
              </p>
              <label htmlFor="faq-search" className="sr-only">
                Search FAQ
              </label>
              <input
                id="faq-search"
                type="search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setOpenId(null);
                }}
                placeholder="Please enter your query keywords"
                className="mt-4 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-800 outline-none placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-300"
              />
            </div>

            <div className="mt-8 border border-zinc-200 bg-white">
              {faqs.length === 0 ? (
                <p className="px-4 py-8 text-center text-sm text-zinc-500">No questions match your search.</p>
              ) : (
                <ul>
                  {faqs.map((item, index) => {
                    const open = openId === index;
                    return (
                      <li key={`${item.q}-${index}`} className="border-b border-zinc-200 last:border-b-0">
                        <button
                          type="button"
                          onClick={() => toggleAccordion(index)}
                          className="flex w-full items-start gap-3 px-4 py-4 text-left transition hover:bg-zinc-50 sm:px-5 sm:py-5"
                          aria-expanded={open}
                        >
                          <ChevronRight
                            className={`mt-0.5 h-5 w-5 shrink-0 transition-transform ${open ? "rotate-90" : ""}`}
                            style={{ color: BLUE }}
                            strokeWidth={2.5}
                            aria-hidden
                          />
                          <span className="text-sm font-medium leading-snug sm:text-[15px]" style={{ color: BLUE }}>
                            {item.q}
                          </span>
                        </button>
                        {open && (
                          <div className="border-t border-zinc-100 bg-zinc-50/50 px-4 pb-5 pl-12 pr-4 pt-0 sm:px-5 sm:pb-6 sm:pl-14">
                            <p className="pt-3 text-sm leading-relaxed text-zinc-600 sm:text-[15px]">{item.a}</p>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
