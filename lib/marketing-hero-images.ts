/**
 * Marketing imagery — real aviation / travel photography only (no AI-style stock).
 * Unsplash; keep in sync with next.config `images.remotePatterns` for images.unsplash.com.
 */
export const MARKETING_HERO = {
  about: {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80&auto=format&fit=crop",
    alt: "Commercial aircraft in flight above the clouds",
  },
  pricing: {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80&auto=format&fit=crop",
    alt: "Airport departure area with flight information displays",
  },
  contact: {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80&auto=format&fit=crop",
    alt: "Travellers and staff in a modern airport terminal",
  },
  faq: {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80&auto=format&fit=cro",
    alt: "View from an airplane window over clouds and landscape",
  },
} as const;

/** In-page strips / aside photos for About & FAQ */
export const MARKETING_SECTION = {
  aboutAirportTerminal: {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80&auto=format&fit=crop",
    alt: "Bright airport terminal concourse with high ceilings",
  },
  aboutFlightDeckSky: {
    src: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1600&q=80&auto=format&fit=crop",
    alt: "Passenger jet climbing through a clear sky",
  },
  faqOperations: {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80&auto=format&fit=crop",
    alt: "Aircraft parked at the gate during boarding",
  },
} as const;
