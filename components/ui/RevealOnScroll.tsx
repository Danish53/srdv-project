"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  /** Slightly earlier trigger */
  rootMargin?: string;
  threshold?: number;
};

/**
 * One-time fade + slight rise when entering the viewport. Respects reduced motion.
 */
export function RevealOnScroll({
  children,
  className = "",
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.08,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const [intersected, setIntersected] = useState(false);

  const visible = reducedMotion || intersected;

  useEffect(() => {
    if (reducedMotion) return;

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersected(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [reducedMotion, rootMargin, threshold]);

  return (
    <div
      ref={ref}
      className={`${className} transition-[opacity,transform] duration-[580ms] ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
