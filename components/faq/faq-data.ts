import { BRAND } from "@/lib/brand";

export type FaqItem = { q: string; a: string };

/** FAQ copy — uses `BRAND` from `lib/brand.ts` */
export const DEFAULT_FAQS: FaqItem[] = [
  {
    q: `What does ${BRAND.fullName} actually build?`,
    a: `We deliver B2B-focused travel software: white-label and agent portals, booking engines, supplier extranets, APIs, and companion mobile apps—usually as connected modules rather than one rigid monolith.`,
  },
  {
    q: "Can you plug into our existing suppliers and mid-office tools?",
    a: "Yes. Most engagements include GDS, NDC, hotel aggregators, payments, and sometimes CRM or finance hooks. We map your current stack early so integrations are explicit in scope—not guessed late in the project.",
  },
  {
    q: "How long before we can go live?",
    a: "It depends on scope: a focused first release (for example B2B flight + hotel on a subset of routes) can be weeks to a few months; larger programmes are phased. We propose milestones you can demo, not a single opaque end date.",
  },
  {
    q: "Do you only do new builds, or can you take over legacy systems?",
    a: "Both. We modernise legacy booking stacks where it makes sense, and we start fresh when rewrite risk is lower than carrying technical debt. The discovery phase is where we recommend the pragmatic path.",
  },
  {
    q: "What happens after launch?",
    a: "We offer ongoing support retainers: incident handling, minor enhancements, supplier onboarding, and release management. You are not forced into a retainer, but most travel products need steady care after go-live.",
  },
  {
    q: "Where are pricing and commercials discussed?",
    a: "High-level options are on our Pricing page; exact fees depend on modules, traffic, SLAs, and integration count. After a short discovery we share a written estimate or phased proposal—no surprise invoices tied to vague scope.",
  },
  {
    q: "How do you handle security and data protection?",
    a: "We align with your policies: least-privilege access, encrypted transport, secrets out of source control, and audit-friendly logging where required. Specific compliance targets (e.g. regional data rules) should be stated during discovery so they are designed in, not bolted on.",
  },
  {
    q: "How do I get a straight answer to something not listed here?",
    a: `Use the contact form or email ${BRAND.email} with your use case. A concise note on travellers, channels, suppliers, and timeline helps us reply with something concrete rather than generic marketing text.`,
  },
];
