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

export function ProcessScroller() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const trackHeight = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / trackHeight));

      setProgress(p);
      setActive(Math.min(steps.length - 1, Math.floor(p * steps.length)));
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const easing = "cubic-bezier(0.16,1,0.3,1)";

  return (
    <div
      ref={trackRef}
      // Height controls how long the scroll journey takes
      style={{ height: `${steps.length * 80}vh` }}
      className="relative w-full"
    >
      {/* Sticky viewport */}
      <div
        ref={stickyRef}
        className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-4"
      >
        {/* Section label */}
        <p className="mb-12 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          The Process
        </p>

        {/* Step display */}
        <div className="relative flex w-full max-w-3xl flex-col items-center text-center">
          {steps.map((step, i) => {
            const isActive = i === active;
            const isPast = i < active;

            return (
              <div
                key={step.number}
                className="absolute inset-x-0 flex flex-col items-center"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive
                    ? "translateY(0)"
                    : isPast
                    ? "translateY(-40px)"
                    : "translateY(40px)",
                  transition: `opacity 500ms ${easing}, transform 500ms ${easing}`,
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <span
                  className="font-display text-[10rem] leading-none text-ink/5 select-none sm:text-[14rem]"
                  aria-hidden
                >
                  {step.number}
                </span>
                <h3
                  className="font-display text-4xl text-ink sm:text-6xl"
                  style={{ marginTop: "-2rem" }}
                >
                  {step.name}
                </h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted sm:text-base">
                  {step.description}
                </p>
              </div>
            );
          })}

          {/* Spacer so the absolute children have room */}
          <div className="h-64 sm:h-72" aria-hidden />
        </div>

        {/* Progress dots */}
        <div className="mt-12 flex items-center gap-3">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="rounded-full bg-ink transition-all duration-500"
              style={{
                width: i === active ? "1.75rem" : "0.35rem",
                height: "0.35rem",
                opacity: i === active ? 1 : i < active ? 0.25 : 0.12,
                transition: `width 500ms ${easing}, opacity 500ms ${easing}`,
              }}
            />
          ))}
        </div>

        {/* Step counter */}
        <p className="mt-4 text-xs tabular-nums text-muted">
          {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
