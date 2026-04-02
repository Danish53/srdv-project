"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { THEME } from "@/lib/theme";

/** Shown after `/api/contact` succeeds — admin notification is sent server-side. */
export function ContactSuccessBanner() {
  return (
    <div
      className="rounded-xl border-2 px-5 py-5 shadow-sm sm:px-6 sm:py-6"
      style={{
        borderColor: THEME.primary,
        background: `linear-gradient(145deg, rgba(30, 90, 142, 0.07), rgba(46, 166, 213, 0.1))`,
      }}
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow-md"
          style={{ backgroundColor: THEME.primary }}
          aria-hidden
        >
          <CheckCircle2 className="h-7 w-7" strokeWidth={2} />
        </span>
        <div className="min-w-0">
          <p className="text-lg font-bold tracking-tight text-zinc-900 sm:text-xl">Thank you — we received your message</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-700 sm:text-[15px]">
            Your request has been sent to our team by email. We aim to get back to you{" "}
            <strong className="font-semibold text-zinc-900">within 24 hours</strong> on business days. If you do not see a
            reply, please check your spam folder or write to us at{" "}
            <Link
              href={`mailto:${BRAND.email}`}
              className="font-semibold underline decoration-2 underline-offset-2 hover:opacity-90"
              style={{ color: THEME.primary }}
            >
              {BRAND.email}
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
