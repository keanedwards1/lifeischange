"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedDivider({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -20px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative h-px overflow-hidden bg-transparent">
      <div
        className="absolute inset-y-0 left-0 bg-outline transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          width: visible ? "100%" : "0%",
          transitionDelay: `${index * 30}ms`,
        }}
      />
    </div>
  );
}
