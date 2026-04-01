export type FaqItem = { q: string; a: string };

export const TOPICS: { id: string; label: string }[] = [
  { id: "srdv", label: "SRDV" },
  { id: "website", label: "Website Management (Demonstration)" },
  { id: "recharge", label: "Recharge API" },
  { id: "mobile", label: "Mobile Application" },
  { id: "travel", label: "Travel Portals" },
  { id: "insurance", label: "Insurance API" },
  { id: "car", label: "Car API" },
  { id: "bus", label: "Bus API" },
  { id: "hotel", label: "Hotel API" },
  { id: "flight", label: "Flight API" },
  { id: "error", label: "Error Message" },
  { id: "api", label: "API" },
  { id: "custom", label: "Custom Project" },
  { id: "payment", label: "Payment Gateway" },
  { id: "hosting", label: "Hosting and Security" },
  { id: "general", label: "General" },
  { id: "pricing", label: "Pricing" },
  { id: "support", label: "Support" },
  { id: "white-label", label: "White Label" },
];

const SRDV_FAQS: FaqItem[] = [
  {
    q: "Who we are?",
    a: "SRDV Technologies is a travel-technology company focused on portals, APIs, mobile apps, and white-label solutions for agencies, OTAs, and enterprises across India and global markets.",
  },
  {
    q: "Why SRDV?",
    a: "We combine domain experience with disciplined delivery: clear milestones, strong QA, integration expertise with major suppliers, and long-term support so your platform stays reliable as you scale.",
  },
  {
    q: "Does SRDV stand in travel industry market?",
    a: "Yes. We work with clients on booking engines, B2B/B2C stacks, extranets, and API layers—aligned with how the industry actually sells and settles travel today.",
  },
  {
    q: "What makes SRDV different?",
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

function genericFaq(topicLabel: string): FaqItem[] {
  return [
    {
      q: `What is covered under ${topicLabel}?`,
      a: "This section groups common questions for this topic. For detailed integration or SLA questions, contact our support team with your use case.",
    },
    {
      q: "Where can I find technical documentation?",
      a: "Documentation is shared with registered clients and partners. Request access through your account manager or the support channel.",
    },
    {
      q: "How do I report an issue?",
      a: "Use the support portal or email with screenshots, request IDs, and timestamps so we can reproduce and prioritise the ticket quickly.",
    },
  ];
}

export const FAQ_BY_TOPIC: Record<string, FaqItem[]> = {
  srdv: SRDV_FAQS,
};

export function getFaqsForTopic(topicId: string, topicLabel: string): FaqItem[] {
  if (FAQ_BY_TOPIC[topicId]?.length) {
    return FAQ_BY_TOPIC[topicId];
  }
  return genericFaq(topicLabel);
}
