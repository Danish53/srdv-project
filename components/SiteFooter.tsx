import Link from "next/link";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

const RED = "#D32F2F";
const PINK_BAR = "#F9F1F1";

function SocialFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function SocialX({ className }: { className?: string }) {
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

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="group flex items-start gap-2 text-sm text-zinc-700 transition hover:text-zinc-900">
      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0" style={{ color: RED }} strokeWidth={2.5} aria-hidden />
      <span>{children}</span>
    </Link>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-[15px] font-bold uppercase tracking-wide text-zinc-900">{children}</h3>
  );
}

function RedUnderline() {
  return <div className="mt-2 h-1 w-12 rounded-sm" style={{ backgroundColor: RED }} aria-hidden />;
}

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="mt-auto w-full">
      {/* Social strip — diagonal top-left */}
      <div
        className="text-white"
        style={{
          backgroundColor: RED,
          clipPath: "polygon(0 22%, 100% 0, 100% 100%, 0 100%)",
          WebkitClipPath: "polygon(0 22%, 100% 0, 100% 100%, 0 100%)",
        } as CSSProperties}
      >
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 pb-6 pt-10 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-8 md:pb-7 md:pt-12 lg:px-10">
          <p className="text-lg font-bold tracking-tight md:text-xl">Stay Connected With Us</p>
          <nav className="flex flex-wrap items-center gap-3 sm:gap-4" aria-label="Social media">
            {[
              { href: "#", label: "Facebook", Icon: SocialFacebook },
              { href: "#", label: "X.com", Icon: SocialX },
              { href: "#", label: "LinkedIn", Icon: SocialLinkedIn },
              { href: "#", label: "Instagram", Icon: SocialInstagram },
            ].map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                className="inline-flex items-center gap-2 border border-white/90 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10"
              >
                <span className="flex h-8 w-8 items-center justify-center bg-white/15">
                  <Icon className="h-4 w-4 text-white" />
                </span>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main links — dotted bg */}
      <div
        className="border-t border-zinc-100 bg-white py-12 sm:py-14 lg:py-16"
        style={{
          backgroundImage: "radial-gradient(circle, #d4d4d8 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-4 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 sm:px-6 lg:grid-cols-4 lg:gap-10 lg:px-10">
          <div className="space-y-10">
            <div>
              <SectionTitle>Travel Portal Development</SectionTitle>
              <RedUnderline />
              <ul className="mt-5 space-y-3">
                <li>
                  <FooterLink href="#">Travel Portal Solution</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Travel Technology Solution</FooterLink>
                </li>
                <li>
                  <Link href="#" className="text-sm font-semibold" style={{ color: RED }}>
                    Show more
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <SectionTitle>E-Commerce Development</SectionTitle>
              <RedUnderline />
              <ul className="mt-5 space-y-3">
                <li>
                  <FooterLink href="#">E-Commerce Website Development</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">B2C E-Commerce Website Development</FooterLink>
                </li>
                <li>
                  <Link href="#" className="text-sm font-semibold" style={{ color: RED }}>
                    Show more
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <SectionTitle>Other Services</SectionTitle>
              <RedUnderline />
              <ul className="mt-5 space-y-3">
                <li>
                  <FooterLink href="#">Job Portal Development</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Educational Portal Development</FooterLink>
                </li>
                <li>
                  <Link href="#" className="text-sm font-semibold" style={{ color: RED }}>
                    Show more
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <SectionTitle>Mobile Application</SectionTitle>
              <RedUnderline />
              <ul className="mt-5 space-y-3">
                <li>
                  <FooterLink href="#">Android App Development</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Ios App Development</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Window App Development</FooterLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <SectionTitle>Technologies</SectionTitle>
              <RedUnderline />
              <ul className="mt-5 space-y-3">
                <li>
                  <FooterLink href="#">PHP</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">ANDROID</FooterLink>
                </li>
                <li>
                  <Link href="#" className="text-sm font-semibold" style={{ color: RED }}>
                    Show more
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <SectionTitle>Others</SectionTitle>
              <RedUnderline />
              <ul className="mt-5 space-y-3">
                <li>
                  <FooterLink href="#">Blog</FooterLink>
                </li>
                <li>
                  <FooterLink href="/faq">FAQ</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Our Clients</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Check My IP</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <SectionTitle>Contact Info</SectionTitle>
            <RedUnderline />
            <div className="mt-6 space-y-8">
              <div>
                <p className="text-sm font-bold" style={{ color: RED }}>
                  Delhi NCR, India
                </p>
                <ul className="mt-3 space-y-2.5 text-sm text-zinc-700">
                  <li className="flex gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-zinc-900" aria-hidden />
                    <span>123 Tech Park, Sector 62, Noida, Uttar Pradesh 201301</span>
                  </li>
                  <li className="flex gap-2">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-zinc-900" aria-hidden />
                    <a href="tel:+919643737505" className="hover:underline">
                      (+91) 96437-37505
                    </a>
                  </li>
                  <li className="flex gap-2">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-zinc-900" aria-hidden />
                    <a href="mailto:info@srdvtechnologies.com" className="break-all hover:underline">
                      info@srdvtechnologies.com
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: RED }}>
                  Agra, India
                </p>
                <ul className="mt-3 space-y-2.5 text-sm text-zinc-700">
                  <li className="flex gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-zinc-900" aria-hidden />
                    <span>45 MG Road, Sanjay Place, Agra, Uttar Pradesh 282002</span>
                  </li>
                  <li className="flex gap-2">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-zinc-900" aria-hidden />
                    <a href="tel:+915622400000" className="hover:underline">
                      (+91) 562-240-0000
                    </a>
                  </li>
                  <li className="flex gap-2">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-zinc-900" aria-hidden />
                    <a href="mailto:agra@srdvtechnologies.com" className="break-all hover:underline">
                      agra@srdvtechnologies.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-200/80 py-4" style={{ backgroundColor: PINK_BAR }}>
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-4 text-sm sm:flex-row sm:px-6 lg:px-10">
          <nav className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 text-zinc-700 sm:justify-start">
            {(
              [
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "Sitemap", href: "#" },
              ] as const
            ).map(({ label, href }, i) => (
              <span key={label} className="inline-flex items-center">
                {i > 0 && (
                  <span className="mx-2 text-[8px] leading-none text-blue-600 sm:text-[9px]" aria-hidden>
                    ●
                  </span>
                )}
                <Link href={href} className="transition hover:text-zinc-900">
                  {label}
                </Link>
              </span>
            ))}
          </nav>
          <p className="text-center text-xs text-zinc-600 sm:text-right sm:text-sm">
            © Copyright 2013 - {year} SRDV Limited
          </p>
        </div>
      </div>
    </footer>
  );
}
