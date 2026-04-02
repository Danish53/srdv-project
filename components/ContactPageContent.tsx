"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { type ReactNode, FormEvent, useState } from "react";
import { ContactSuccessBanner } from "@/components/contact/ContactSuccessBanner";
import { BRAND } from "@/lib/brand";
import { THEME } from "@/lib/theme";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1534536281715-e28d68489d4d?w=1920&q=80&auto=format&fit=crop";

function CircleIcon({ children }: { children: ReactNode }) {
  return (
    <span
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white shadow-sm"
      style={{ backgroundColor: THEME.primary }}
    >
      {children}
    </span>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

type SubmitState = "idle" | "loading" | "success" | "error";

export function ContactPageContent() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitState("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setSubmitState("error");
        setFeedback(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitState("success");
      setFeedback("");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch {
      setSubmitState("error");
      setFeedback("Network error. Check your connection and try again.");
    }
  }

  const fieldClass =
    "w-full border border-zinc-300 bg-zinc-100/80 px-4 py-3 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white";

  return (
    <>
      {/* Hero */}
      <div className="relative min-h-[240px] w-full sm:min-h-[280px] md:min-h-[320px]">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          className="object-cover object-center blur-[2px] sm:blur-sm"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-zinc-900/70" aria-hidden />
        {/* Decorative communication hints */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.12]" aria-hidden>
          <span className="absolute left-[8%] top-1/4 text-8xl text-orange-400 sm:text-9xl">📞</span>
          <span className="absolute left-1/2 top-1/3 -translate-x-1/2 text-7xl text-green-400 sm:text-8xl">@</span>
          <span className="absolute right-[10%] top-1/4 text-8xl text-sky-400 sm:text-9xl">✉</span>
        </div>
        <div className="relative z-10 flex min-h-[240px] flex-col items-center justify-center px-4 py-14 text-center sm:min-h-[280px] md:min-h-[320px] md:py-16">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Contact Us</h1>
          <nav className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base" aria-label="Breadcrumb">
            <Link href="/" className="font-medium transition hover:underline" style={{ color: THEME.primary }}>
              Home
            </Link>
            <ChevronRight className="h-4 w-4 shrink-0 text-white" strokeWidth={2.5} aria-hidden />
            <span className="font-medium text-white">Contact Us</span>
          </nav>
        </div>
      </div>

      {/* Main */}
      <div className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-16 xl:max-w-[1100px]">
          {/* Contact details */}
          <div className="space-y-8 lg:pr-4">
            {/* <div className="flex items-start gap-4">
              <CircleIcon>
                <Phone className="h-5 w-5" strokeWidth={2} aria-hidden />
              </CircleIcon>
              <a href="tel:+919643737505" className="pt-2 text-base font-medium text-zinc-800 hover:underline">
                (+91) 96437-37505
              </a>
            </div> */}
            <div className="flex items-start gap-4">
              <CircleIcon>
                <Mail className="h-5 w-5" strokeWidth={2} aria-hidden />
              </CircleIcon>
              <a
                href={`mailto:${BRAND.email}`}
                className="break-all pt-2 text-base font-medium text-zinc-800 hover:underline"
              >
                {BRAND.email}
              </a>
            </div>
            {/* <div className="flex items-start gap-4">
              <CircleIcon>
                <WhatsAppGlyph className="h-6 w-6" />
              </CircleIcon>
              <a href="https://wa.me/919643737505" className="pt-2 text-base font-medium text-zinc-800 hover:underline">
                (+91) 96437-37505
              </a>
            </div> */}
            <div className="flex items-start gap-4">
              <CircleIcon>
                <MapPin className="h-5 w-5" strokeWidth={2} aria-hidden />
              </CircleIcon>
              <div className="space-y-6 pt-0.5">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide" style={{ color: THEME.primary }}>
                  United Kingdom
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Palmoak House, 19 South Road Southall, Middlesex UB1 1SU United Kingdom
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide" style={{ color: THEME.primary }}>
                  Dublin, Ireland
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Shamrock House, Dublin Airport, Co. Dublin.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide" style={{ color: THEME.primary }}>
                  New Delhi, India
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    Skyline Travel Pvt Ltd Office No. 204, 2nd Floor
Rajiv Chowk Business Plaza
Connaught Place
New Delhi – 110001
India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-lg border border-zinc-200 bg-zinc-50/30 p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-zinc-900 sm:text-2xl">Get in touch</h2>
            {submitState === "success" && (
              <div className="mt-6">
                <ContactSuccessBanner />
              </div>
            )}
            {submitState === "error" && feedback && (
              <p role="alert" className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                {feedback}
              </p>
            )}
            <form className={`space-y-5 ${submitState === "success" ? "mt-6" : "mt-8"}`} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    id="c-name"
                    name="name"
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={fieldClass}
                    autoComplete="name"
                    required
                    maxLength={200}
                    disabled={submitState === "loading"}
                  />
                </div>
                <div>
                  <label htmlFor="c-phone" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    id="c-phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={fieldClass}
                    autoComplete="tel"
                    required
                    maxLength={40}
                    disabled={submitState === "loading"}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="c-email" className="sr-only">
                  Email ID
                </label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  placeholder="Email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={fieldClass}
                    autoComplete="email"
                    required
                    maxLength={254}
                    disabled={submitState === "loading"}
                  />
              </div>
              <div>
                <label htmlFor="c-msg" className="sr-only">
                  Message
                </label>
                <textarea
                  id="c-msg"
                  name="message"
                  rows={5}
                  placeholder="Please type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${fieldClass} min-h-[140px] resize-y`}
                  required
                  maxLength={5000}
                  disabled={submitState === "loading"}
                />
              </div>
              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  disabled={submitState === "loading"}
                  className="rounded-md px-10 py-3 text-sm font-bold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                  style={{ backgroundColor: THEME.primary }}
                >
                  {submitState === "loading" ? "Sending…" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Floating chat */}
      {/* <button
        type="button"
        className="fixed bottom-6 right-4 z-[60] rounded-sm px-5 py-2.5 text-sm font-bold text-white shadow-lg transition hover:brightness-110 sm:right-6 md:bottom-8 md:right-8"
        style={{ backgroundColor: THEME.primary }}
        aria-label="Online chat"
      >
        Online
      </button> */}
    </>
  );
}
