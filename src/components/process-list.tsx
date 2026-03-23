"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { number: "01", name: "Share", description: "Tell your story. All of it." },
  { number: "02", name: "Reflect", description: "Gain perspective on where you are." },
  { number: "03", name: "Vision", description: "Ideas without limits." },
  { number: "04", name: "Strategy", description: "Figure out what, why, and how." },
  { number: "05", name: "Tactical", description: "Clarify the steps to execute." },
  { number: "06", name: "Engage", description: "It's time to make it happen." },
];

export function ProcessList() {
  const ref = useRef<HTMLOListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const easing = "cubic-bezier(0.16,1,0.3,1)";

  return (
    <ol ref={ref} className="mt-14 divide-y divide-white/10">
      {steps.map((step, i) => (
        <li
          key={step.number}
          className="grid grid-cols-[3rem_1fr] gap-6 py-7 sm:grid-cols-[4rem_8rem_1fr] sm:gap-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(16px)",
            transition: `opacity 600ms ${easing} ${i * 80}ms, transform 600ms ${easing} ${i * 80}ms`,
          }}
        >
          <span className="font-display text-sm text-white/20">{step.number}</span>
          <span className="font-display text-xl text-white sm:text-2xl">{step.name}</span>
          <span className="col-start-2 text-sm leading-relaxed text-white/40 sm:col-start-3">
            {step.description}
          </span>
        </li>
      ))}
    </ol>
  );
}
