"use client";

import Link from "next/link";
import { useState } from "react";
import { BRAND } from "@/lib/brand";

const NAV_BLUE = "#21619c";
const RED = "#cc1d1d";

function IconUsers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconChat({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function SocialFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function SocialTwitter({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function SocialLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SocialInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LogoMark() {
  const letter = BRAND.logoLetter;
  const gradId = `logoGrad-${letter}`;
  return (
    <div
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#21619c]/30 bg-white shadow-sm"
      aria-hidden
    >
      <svg viewBox="0 0 48 48" className="h-9 w-9">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#21619c" />
            <stop offset="50%" stopColor="#21619c" />
            <stop offset="50%" stopColor={RED} />
            <stop offset="100%" stopColor={RED} />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="28"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          fill={`url(#${gradId})`}
        >
          {letter}
        </text>
      </svg>
    </div>
  );
}

const utilityLinks = [
  { href: "/about", label: "About Us", Icon: IconUsers },
  { href: "/faq", label: "FAQ", Icon: IconChat },
] as const;

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full font-sans text-neutral-800 shadow-sm">
      <div
        className="hidden text-white md:block"
        style={{
          backgroundColor: RED,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 82%)",
        }}
      >
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-end gap-4 px-4 py-1.5 pl-8 lg:px-10">
          <nav className="flex flex-wrap items-center justify-end gap-5 text-sm font-medium lg:gap-7">
            {utilityLinks.map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                className="inline-flex items-center gap-1.5 text-white/95 transition hover:text-white"
              >
                <Icon className="h-4 w-4 shrink-0 opacity-90" />
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2 border-l border-white/25 pl-5 lg:pl-7">
            {[
              { Icon: SocialFacebook, href: "#", label: "Facebook" },
              { Icon: SocialTwitter, href: "#", label: "Twitter" },
              { Icon: SocialLinkedIn, href: "#", label: "LinkedIn" },
              { Icon: SocialInstagram, href: "#", label: "Instagram" },
            ].map(({ Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-6 w-6 items-center justify-center rounded bg-white text-[#333] transition hover:bg-white/90"
              >
                <Icon className="h-2.5 w-2.5" />
              </Link>
            ))}
          </div>
        </div>
        <div className="h-3" aria-hidden />
      </div>

      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:px-10 lg:py-3">
          <Link href="/" className="flex items-center gap-3 sm:gap-4">
            <LogoMark />
            <div className="leading-tight">
              <span className="block text-2xl font-extrabold tracking-tight sm:text-3xl" style={{ color: NAV_BLUE }}>
                {BRAND.name}
              </span>
              <span
                className="block text-base italic sm:text-lg"
                style={{ color: RED, fontFamily: "var(--font-brand-serif), Georgia, serif" }}
              >
                {BRAND.tagline}
              </span>
            </div>
          </Link>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="tel:+919643737505"
              className="inline-flex items-center gap-2 text-sm text-neutral-700"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded bg-[#25D366]/15 text-[#25D366]">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <span className="font-medium">(+91) 96437-37505</span>
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-2 text-sm text-neutral-700"
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded text-white"
                style={{ backgroundColor: RED }}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <span className="break-all font-medium sm:break-normal">{BRAND.email}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative" style={{ backgroundColor: NAV_BLUE }}>
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-2 px-4 lg:px-10">
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center text-white md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
            <span className="sr-only">Menu</span>
          </button>

          <nav
            className="hidden min-h-[52px] flex-1 items-center justify-between gap-4 md:flex"
            aria-label="Primary"
          >
            <ul className="flex flex-wrap items-center gap-x-0.5 lg:gap-x-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-2 py-4 text-[11px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 lg:px-3 xl:text-xs"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="hidden shrink-0 rounded-full px-4 py-2.5 text-center text-[10px] font-bold uppercase tracking-wide text-white transition hover:brightness-110 md:inline-block xl:px-5"
              style={{ backgroundColor: RED }}
            >
              Request for callback
            </Link>
          </nav>

          <Link
            href="/contact"
            className="rounded-full px-3 py-2 text-[9px] font-bold uppercase leading-tight text-white md:hidden"
            style={{ backgroundColor: RED }}
          >
            Callback
          </Link>
        </div>

        <div
          id="mobile-nav"
          className={`border-t border-white/15 md:hidden ${mobileOpen ? "block" : "hidden"}`}
        >
          <ul className="px-2 py-3">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-white/10 last:border-0">
                <Link
                  href={item.href}
                  className="block px-3 py-3 text-sm font-semibold uppercase tracking-wide text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="px-3 pt-4">
              <Link
                href="/contact"
                className="block rounded-full py-3 text-center text-xs font-bold uppercase text-white"
                style={{ backgroundColor: RED }}
                onClick={() => setMobileOpen(false)}
              >
                Request for callback
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
