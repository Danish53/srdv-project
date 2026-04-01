export type FaqItem = { q: string; a: string };

/** Company FAQs (dummy brand — see `lib/brand.ts`) */
export const DEFAULT_FAQS: FaqItem[] = [
  {
    q: "Who we are?",
    a: "NEXA Digital is a demo travel-technology brand focused on portals, APIs, mobile apps, and white-label solutions for agencies, OTAs, and enterprises.",
  },
  {
    q: "Why NEXA?",
    a: "We combine domain experience with disciplined delivery: clear milestones, strong QA, integration expertise with major suppliers, and long-term support so your platform stays reliable as you scale.",
  },
  {
    q: "Do you work in the travel industry?",
    a: "Yes. We work with clients on booking engines, B2B/B2C stacks, extranets, and API layers—aligned with how the industry actually sells and settles travel today.",
  },
  {
    q: "What makes you different?",
    a: "A single accountable partner for product, engineering, and integrations; transparent communication; and architectures designed for change—so new suppliers or flows do not require a rewrite every year.",
  },
  {
    q: "What engagement models do you support?",
    a: "Fixed-scope projects, phased roadmaps, and ongoing product/engineering retainers. We tailor the model to your internal team capacity and launch goals.",
  },
  {
    q: "How do we start a project?",
    a: "Share your objectives and timelines via the contact form or phone. We typically follow a short discovery, a proposal with milestones, and a kickoff once scope and commercials are aligned.",
  },
];
