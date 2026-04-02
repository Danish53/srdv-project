"use client";

import { ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { DEFAULT_FAQS, type FaqItem } from "./faq-data";

const BLUE = "#004A8D";

function filterFaqs(items: FaqItem[], query: string): FaqItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return items;
  return items.filter(
    (item) => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
  );
}

type FaqAccordionSectionProps = {
  /** Wider container on pricing page */
  className?: string;
  innerMaxWidthClass?: string;
};

export function FaqAccordionSection({
  className = "bg-white py-10 sm:py-12 lg:py-14",
  innerMaxWidthClass = "max-w-[720px]",
}: FaqAccordionSectionProps) {
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState<number | null>(0);

  const faqs = useMemo(() => filterFaqs(DEFAULT_FAQS, search), [search]);

  function toggleAccordion(index: number) {
    setOpenId((prev) => (prev === index ? null : index));
  }

  return (
    <div className={className}>
      <div className={`mx-auto ${innerMaxWidthClass} px-4 sm:px-6 lg:px-8`}>
        <div className="rounded-lg border border-zinc-200 bg-zinc-100/80 px-4 py-5 sm:px-6 sm:py-6">
          <p className="text-sm leading-relaxed text-zinc-700 sm:text-[15px]">
            You can get quick answer of your question by entering here
          </p>
          <label htmlFor="faq-search-inline" className="sr-only">
            Search FAQ
          </label>
          <input
            id="faq-search-inline"
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
  );
}
