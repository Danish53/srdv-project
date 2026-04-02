"use client";

import Link from "next/link";
import { ArrowLeft, Building2, Check, Copy, Menu, Plane, X } from "lucide-react";
import { useState } from "react";
import {
  DOCS_API_BASE_URL,
  DOCS_API_KEY_PLACEHOLDER,
  DOCS_API_SECRET_PLACEHOLDER,
} from "@/lib/api-docs-auth";
import { BRAND } from "@/lib/brand";
import { THEME } from "@/lib/theme";

type Product = "flight" | "hotel";

/** Shows start + end of string; middle replaced with bullets (full value still copied separately). */
function maskCenter(value: string): string {
  const n = value.length;
  if (n <= 6) return "•".repeat(Math.min(10, n + 4));
  const head = 3;
  const tail = 3;
  const prefix = value.slice(0, head);
  const suffix = value.slice(-tail);
  const inner = Math.max(6, n - head - tail);
  return `${prefix}${"•".repeat(inner)}${suffix}`;
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre
      className="overflow-x-auto rounded-lg p-4 text-[13px] leading-relaxed text-white/95 shadow-inner sm:text-sm"
      style={{ backgroundColor: THEME.primary }}
    >
      <code className="font-mono whitespace-pre">{children.trim()}</code>
    </pre>
  );
}

function Method({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-sm font-bold sm:text-base" style={{ color: THEME.secondary }}>
      {children}
    </span>
  );
}

/** Base URL on a light panel for contrast; keys masked. Copy uses `lib/api-docs-auth.ts`. */
function AuthenticationSection() {
  const [copied, setCopied] = useState<"base" | "key" | "secret" | null>(null);

  async function copyFull(text: string, which: "base" | "key" | "secret") {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(which);
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  }

  const keyMasked = maskCenter(DOCS_API_KEY_PLACEHOLDER);
  const secretMasked = maskCenter(DOCS_API_SECRET_PLACEHOLDER);

  return (
    <section className="mt-8 sm:mt-10">
      <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Authentication</h2>
      <p className="mt-3 text-slate-600">
        {/* Send requests to the base URL below. The example keys in this documentation are for{" "}
        <strong className="font-semibold text-slate-800">testing only</strong>. In production, use API keys and secrets from
        your <strong className="font-semibold text-slate-800">dashboard</strong> — they are issued per account and must be
        sent in request headers. */}

      </p>
      <div className="mt-4 overflow-hidden rounded-lg shadow-inner" style={{ backgroundColor: THEME.primary }}>
        <div className="border-b border-white/10 px-3 py-2.5 sm:px-4">
          <span className="text-xs text-white/65 sm:text-sm"> header values</span>
        </div>
        <div className="">
          {/* <div className="flex flex-col gap-3 p-2 sm:flex-row sm:items-stretch sm:gap-4 sm:p-2">
            <div className="min-w-0 flex-1 px-2 py-2 sm:px-4 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">Base URL</p>
              <p className="mt-1 break-all font-mono text-sm font-medium leading-snug sm:text-[15px]">
                {DOCS_API_BASE_URL}
              </p>
            </div>
            <button
              type="button"
              onClick={() => copyFull(DOCS_API_BASE_URL, "base")}
              className="inline-flex shrink-0 items-center justify-center gap-1.5 self-start rounded-md border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/20 sm:self-center sm:text-sm"
            >
              {copied === "base" ? (
                <>
                  <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                  Copy URL
                </>
              )}
            </button>
          </div> */}
          <div className="flex flex-col gap-2 p-3 sm:flex-row sm:items-center sm:gap-4 sm:p-4">
            <div className="min-w-0 flex-1 font-mono text-[13px] leading-relaxed text-white/95 sm:text-sm">
              <span className="text-white/55">&quot;X-API-KEY&quot;: </span>
              <span className="break-all">&quot;{keyMasked}&quot;</span>
            </div>
            {/* <button
              type="button"
              onClick={() => copyFull(DOCS_API_KEY_PLACEHOLDER, "key")}
              className="inline-flex shrink-0 items-center justify-center gap-1.5 self-start rounded-md border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/20 sm:self-center sm:text-sm"
            >
              {copied === "key" ? (
                <>
                  <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                  Copy key
                </>
              )}
            </button> */}
          </div>
          <div className="flex flex-col gap-2 p-3 sm:flex-row sm:items-center sm:gap-4 sm:p-4">
            <div className="min-w-0 flex-1 font-mono text-[13px] leading-relaxed text-white/95 sm:text-sm">
              <span className="text-white/55">&quot;X-API-SECRET&quot;: </span>
              <span className="break-all">&quot;{secretMasked}&quot;</span>
            </div>
            {/* <button
              type="button"
              onClick={() => copyFull(DOCS_API_SECRET_PLACEHOLDER, "secret")}
              className="inline-flex shrink-0 items-center justify-center gap-1.5 self-start rounded-md border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/20 sm:self-center sm:text-sm"
            >
              {copied === "secret" ? (
                <>
                  <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                  Copy secret
                </>
              )}
            </button> */}
          </div>
        </div>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        To change what appears here and what Copy pastes, edit{" "}
        <code className="font-mono text-[11px] text-slate-600">lib/api-docs-auth.ts</code>.
      </p>
    </section>
  );
}

function FlightDocBody() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
        Flight API Documentation
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
        Use your API Key &amp; Secret to authenticate all requests. Base URL and rate limits are provided when your keys
        are issued.
      </p>

      <AuthenticationSection />

      <section className="mt-10 sm:mt-12">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Endpoints</h2>

        <div className="mt-6 space-y-8 sm:mt-8 sm:space-y-10">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">1. Search Flights</h3>
            <p className="mt-2 font-mono text-sm text-slate-800 sm:text-base">
              <Method>GET</Method> <span className="text-slate-700">/api/flights/search</span>
            </p>
            <div className="mt-4">
              <CodeBlock>{`{
    "status": "success",
    "data": [
        {
            "id": 1,
            "airline": "Air Premium",
            "flight_number": "AP123",
            "from": "LHR",
            "to": "JFK",
            "departure": "2026-04-10T09:00:00",
            "arrival": "2026-04-10T14:00:00",
            "price": 500
        }
    ]
}`}</CodeBlock>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">2. Flight Details</h3>
            <p className="mt-2 font-mono text-sm text-slate-800 sm:text-base">
              <Method>GET</Method> <span className="text-slate-700">/api/flights/details/{"{id}"}</span>
            </p>
            <div className="mt-4">
              <CodeBlock>{`{
    "status": "success",
    "data": {
        "id": 1,
        "airline": "Air Premium",
        "flight_number": "AP123",
        "from": "LHR",
        "to": "JFK",
        "departure": "2026-04-10T09:00:00",
        "arrival": "2026-04-10T14:00:00",
        "duration": "7h",
        "price": 500,
        "available_seats": 5
    }
}`}</CodeBlock>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">3. Create Booking</h3>
            <p className="mt-2 font-mono text-sm text-slate-800 sm:text-base">
              <Method>POST</Method> <span className="text-slate-700">/api/booking/create</span>
            </p>
            <div className="mt-4">
              <CodeBlock>{`{
    "flight_id": 1,
    "passengers": [
        {"name": "John Doe", "age": 30},
        {"name": "Jane Doe", "age": 28}
    ]
}`}</CodeBlock>
            </div>
            <p className="mt-4 text-sm font-medium text-slate-700">Response</p>
            <div className="mt-2">
              <CodeBlock>{`{
    "status": "success",
    "booking_id": 1023,
    "message": "Booking created successfully",
    "data": {
        "flight_id": 1,
        "passengers": [...],
        "total_price": 500
    }
}`}</CodeBlock>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">4. Wallet Balance</h3>
            <p className="mt-2 font-mono text-sm text-slate-800 sm:text-base">
              <Method>GET</Method> <span className="text-slate-700">/api/wallet/balance</span>
            </p>
            <div className="mt-4">
              <CodeBlock>{`{
    "status": "success",
    "balance": 1000
}`}</CodeBlock>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">5. Wallet Top-up</h3>
            <p className="mt-2 font-mono text-sm text-slate-800 sm:text-base">
              <Method>POST</Method> <span className="text-slate-700">/api/wallet/topup</span>
            </p>
            <div className="mt-4">
              <CodeBlock>{`{
    "amount": 100
}`}</CodeBlock>
            </div>
            <p className="mt-4 text-sm font-medium text-slate-700">Response</p>
            <div className="mt-2">
              <CodeBlock>{`{
    "status": "success",
    "message": "Wallet top-up successful",
    "added_amount": 100,
    "new_balance": 1100
}`}</CodeBlock>
            </div>
          </div>
        </div>
      </section>

      <p className="mt-10 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:mt-12">
        Need integration support?{" "}
        <Link href="/contact" className="font-semibold hover:underline" style={{ color: THEME.primary }}>
          Contact {BRAND.fullName}
        </Link>
        .
      </p>
    </div>
  );
}

function HotelDocBody() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
        Hotel Booking API Documentation
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
        Use your API Key &amp; Secret to authenticate all requests. Hotel search, availability, and booking endpoints follow
        the same authentication model as flights.
      </p>

      <AuthenticationSection />

      <section className="mt-10 sm:mt-12">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Endpoints</h2>

        <div className="mt-6 space-y-8 sm:mt-8 sm:space-y-10">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">1. Search Hotels</h3>
            <p className="mt-2 font-mono text-sm text-slate-800 sm:text-base">
              <Method>GET</Method> <span className="text-slate-700">/api/hotels/search</span>
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Query parameters typically include <span className="font-mono text-slate-800">city</span>,{" "}
              <span className="font-mono text-slate-800">check_in</span>, <span className="font-mono text-slate-800">check_out</span>
              , and optional filters (stars, price range).
            </p>
            <div className="mt-4">
              <CodeBlock>{`{
    "status": "success",
    "data": [
        {
            "id": 101,
            "name": "Grand Plaza Hotel",
            "city": "DEL",
            "address": "12 Connaught Place",
            "check_in": "2026-04-10",
            "check_out": "2026-04-12",
            "stars": 4,
            "price_per_night": 120,
            "currency": "USD",
            "room_types": ["Standard", "Deluxe King", "Suite"]
        }
    ]
}`}</CodeBlock>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">2. Hotel Details</h3>
            <p className="mt-2 font-mono text-sm text-slate-800 sm:text-base">
              <Method>GET</Method> <span className="text-slate-700">/api/hotels/details/{"{id}"}</span>
            </p>
            <div className="mt-4">
              <CodeBlock>{`{
    "status": "success",
    "data": {
        "id": 101,
        "name": "Grand Plaza Hotel",
        "address": "12 Connaught Place",
        "city": "DEL",
        "country": "IN",
        "check_in": "2026-04-10",
        "check_out": "2026-04-12",
        "stars": 4,
        "description": "Central business district, free Wi‑Fi, breakfast included.",
        "amenities": ["wifi", "parking", "gym", "restaurant"],
        "room_type": "Deluxe King",
        "price_per_night": 120,
        "currency": "USD",
        "available_rooms": 3,
        "cancellation_policy": "Free cancel until 24h before check-in"
    }
}`}</CodeBlock>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">3. Create Booking</h3>
            <p className="mt-2 font-mono text-sm text-slate-800 sm:text-base">
              <Method>POST</Method> <span className="text-slate-700">/api/hotels/booking/create</span>
            </p>
            <div className="mt-4">
              <CodeBlock>{`{
    "hotel_id": 101,
    "room_id": "Rm-204",
    "check_in": "2026-04-10",
    "check_out": "2026-04-12",
    "guests": [
        {"name": "John Doe", "age": 30},
        {"name": "Jane Doe", "age": 28}
    ],
    "special_requests": "Late check-in after 22:00"
}`}</CodeBlock>
            </div>
            <p className="mt-4 text-sm font-medium text-slate-700">Response</p>
            <div className="mt-2">
              <CodeBlock>{`{
    "status": "success",
    "booking_id": 5501,
    "message": "Hotel booking created successfully",
    "data": {
        "hotel_id": 101,
        "room_id": "Rm-204",
        "guests": [...],
        "nights": 2,
        "total_price": 240,
        "currency": "USD"
    }
}`}</CodeBlock>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">4. Wallet Balance</h3>
            <p className="mt-2 font-mono text-sm text-slate-800 sm:text-base">
              <Method>GET</Method> <span className="text-slate-700">/api/wallet/balance</span>
            </p>
            <div className="mt-4">
              <CodeBlock>{`{
    "status": "success",
    "balance": 1000
}`}</CodeBlock>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">5. Wallet Top-up</h3>
            <p className="mt-2 font-mono text-sm text-slate-800 sm:text-base">
              <Method>POST</Method> <span className="text-slate-700">/api/wallet/topup</span>
            </p>
            <div className="mt-4">
              <CodeBlock>{`{
    "amount": 100
}`}</CodeBlock>
            </div>
            <p className="mt-4 text-sm font-medium text-slate-700">Response</p>
            <div className="mt-2">
              <CodeBlock>{`{
    "status": "success",
    "message": "Wallet top-up successful",
    "added_amount": 100,
    "new_balance": 1100
}`}</CodeBlock>
            </div>
          </div>
        </div>
      </section>

      <p className="mt-10 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:mt-12">
        Need integration support?{" "}
        <Link href="/contact" className="font-semibold hover:underline" style={{ color: THEME.primary }}>
          Contact {BRAND.fullName}
        </Link>
        .
      </p>
    </div>
  );
}

const PRODUCTS: { id: Product; label: string; short: string; Icon: typeof Plane }[] = [
  { id: "flight", label: "Flight Booking API", short: "Flights", Icon: Plane },
  { id: "hotel", label: "Hotel Booking API", short: "Hotels", Icon: Building2 },
];

export function ApiDocsPage() {
  const [product, setProduct] = useState<Product>("flight");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const active = PRODUCTS.find((p) => p.id === product)!;
  const docTitle = product === "flight" ? "Flight API docs" : "Hotel API docs";

  return (
    <div className="flex h-[100dvh] min-h-0 w-full flex-col overflow-hidden bg-slate-100">
      <div className="flex min-h-0 flex-1">
        {sidebarOpen && (
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            aria-label="Close menu"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <aside
          className={`fixed inset-y-0 left-0 z-50 flex w-[min(100%,280px)] max-w-[85vw] flex-col border-r border-white/10 shadow-xl transition-transform duration-200 sm:w-[260px] lg:static lg:z-0 lg:max-w-none lg:shadow-none ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
          style={{ backgroundColor: THEME.primary }}
        >
          <div className="flex items-center justify-between gap-2 border-b border-white/10 px-3 py-3 sm:px-4 sm:py-4">
            <div className="flex min-w-0 flex-1 items-center gap-2">
              <span className="truncate text-base font-semibold tracking-tight text-white sm:text-lg">Travel APIs</span>
            </div>
            <button
              type="button"
              className="rounded p-1.5 text-white hover:bg-white/10 lg:hidden"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <p className="px-3 pt-3 text-[10px] font-semibold uppercase tracking-wider text-white/45 sm:px-4">Products</p>
          <nav className="flex flex-col gap-1 p-2 sm:p-3">
            {PRODUCTS.map(({ id, label, short, Icon }) => {
              const isActive = product === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setProduct(id);
                    setSidebarOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition ${
                    isActive ? "text-white shadow-sm" : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                  style={isActive ? { backgroundColor: THEME.secondary } : undefined}
                >
                  <Icon className="h-4 w-4 shrink-0 opacity-95" strokeWidth={1.75} />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate sm:hidden">{short}</span>
                    <span className="hidden sm:block">{label}</span>
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="mt-auto border-t border-white/10 p-2 sm:p-3">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              onClick={() => setSidebarOpen(false)}
            >
              <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              Back to website
            </Link>
            <p className="mt-2 px-3 text-xs text-white/45">{BRAND.fullName}</p>
          </div>
        </aside>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <header className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-200/80 bg-white px-3 py-2.5 sm:gap-4 sm:px-6 sm:py-3">
            <div className="flex min-w-0 items-center gap-2">
              <button
                type="button"
                className="shrink-0 rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-slate-500 sm:text-sm">Documentation</p>
                <p className="truncate text-sm font-semibold text-slate-900 sm:text-base">{active.label}</p>
              </div>
            </div>
          </header>

          <main className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-6 sm:px-6 sm:py-8 lg:px-10">
            <div className="sr-only" aria-live="polite">
              {docTitle}
            </div>
            {product === "flight" ? <FlightDocBody /> : <HotelDocBody />}
          </main>
        </div>
      </div>
    </div>
  );
}
