"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { FormEvent, useState } from "react";

const RED = "#e31e24";

const BG_IMAGE =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80&auto=format&fit=crop";

const REASONS = [
  "A Complete Travel Technology Company",
  "13+ Successful years",
  "1800+ Successfully Completed Projects",
  "Professional and Experienced Team",
  "Good Quality Control with Competitive Price",
  "Dedicated Support Team",
  "Timely Delivery",
  "Global Clients",
  "Best Support",
  "Following Ethical Process",
  "98% Client Satisfaction",
  "Technically Strong System",
  "Get Desired Result",
] as const;

function ListIcon() {
  return (
    <span
      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center sm:h-7 sm:w-7"
      style={{ backgroundColor: RED }}
      aria-hidden
    >
      <ChevronRight className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" strokeWidth={3} />
    </span>
  );
}

type SubmitState = "idle" | "loading" | "success" | "error";

export function WhyChooseContactSection() {
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
      setFeedback("Thank you — your message has been sent.");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch {
      setSubmitState("error");
      setFeedback("Network error. Check your connection and try again.");
    }
  }

  const inputClass =
    "w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400";

  return (
    <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20" aria-labelledby="why-choose-heading">
      <div className="absolute inset-0 z-0">
        <Image
          src={BG_IMAGE}
          alt=""
          fill
          className="scale-105 object-cover object-center blur-sm"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/65 backdrop-blur-[2px]" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 xl:max-w-[1200px]">
        {/* Left — Why Choose Us */}
        <div className="lg:pr-4">
          <h2
            id="why-choose-heading"
            className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl lg:text-[1.85rem]"
          >
            Why Choose US ?
          </h2>
          <div className="mt-3 h-0.5 w-14 rounded-full" style={{ backgroundColor: RED }} aria-hidden />
          <ul className="mt-8 space-y-4 sm:mt-10 sm:space-y-4">
            {REASONS.map((text) => (
              <li key={text} className="flex gap-3 text-left sm:gap-3.5">
                <ListIcon />
                <span className="pt-0.5 text-sm font-medium leading-snug text-zinc-800 sm:text-[15px]">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Form card */}
        <div className="w-full rounded-none border border-zinc-100 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">Send Your Query</h2>
          <div className="mt-3 h-0.5 w-14 rounded-full" style={{ backgroundColor: RED }} aria-hidden />

          {feedback && (
            <p
              role="alert"
              className={`mt-4 rounded-md border px-4 py-3 text-sm ${
                submitState === "success"
                  ? "border-green-200 bg-green-50 text-green-800"
                  : "border-red-200 bg-red-50 text-red-800"
              }`}
            >
              {feedback}
            </p>
          )}

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="wc-name" className="sr-only">
                Full name
              </label>
              <input
                id="wc-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                required
                maxLength={200}
                disabled={submitState === "loading"}
              />
            </div>
            <div>
              <label htmlFor="wc-phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="wc-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClass}
                required
                maxLength={40}
                disabled={submitState === "loading"}
              />
            </div>
            <div>
              <label htmlFor="wc-email" className="sr-only">
                Email ID
              </label>
              <input
                id="wc-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                required
                maxLength={254}
                disabled={submitState === "loading"}
              />
            </div>
            <div>
              <label htmlFor="wc-query" className="sr-only">
                Your query
              </label>
              <textarea
                id="wc-query"
                name="message"
                rows={5}
                placeholder="Type your query here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClass} min-h-[140px] resize-y`}
                required
                maxLength={5000}
                disabled={submitState === "loading"}
              />
            </div>
            <div className="flex justify-start pt-1">
              <button
                type="submit"
                disabled={submitState === "loading"}
                className="rounded-full px-10 py-3 text-sm font-bold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                style={{ backgroundColor: RED }}
              >
                {submitState === "loading" ? "Sending…" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
