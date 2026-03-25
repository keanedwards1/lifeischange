"use client";

import { useEffect, useRef, useState } from "react";

type TestimonialRowProps = {
  quote: string;
  name: string;
  role: string;
  context: string;
  duration: string;
  index: number;
};

const PREVIEW_CHARS = 72;
const CHAR_DELAY = 8;
const CLOSE_DURATION = 240;

function toParagraphs(quote: string) {
  const sentences = quote
    .replace(/\s+/g, " ")
    .trim()
    .split(/(?<=[.!?])\s+/);

  if (sentences.length <= 3) return [quote];

  const chunkSize = quote.length > 700 ? 2 : 3;
  const chunks: string[] = [];
  for (let i = 0; i < sentences.length; i += chunkSize) {
    chunks.push(sentences.slice(i, i + chunkSize).join(" "));
  }
  return chunks;
}

function Meta({ name, role, context, duration }: Pick<TestimonialRowProps, "name" | "role" | "context" | "duration">) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm font-semibold text-ink">{name}</p>
      <p className="text-xs text-muted">{role}</p>
      <div className="mt-2 flex items-center gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">{context}</span>
        <span className="text-[10px] text-outline">·</span>
        <span className="text-[10px] text-muted">{duration}</span>
      </div>
    </div>
  );
}

export function TestimonialRow({ quote, name, role, context, duration, index }: TestimonialRowProps) {
  const rowRef = useRef<HTMLElement>(null);
  const typingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [tailOpacity, setTailOpacity] = useState(1);

  const paragraphs = toParagraphs(quote);
  const displayQuote = paragraphs.join("\n\n");
  const expandable = displayQuote.length > PREVIEW_CHARS;
  const preview = expandable ? displayQuote.slice(0, PREVIEW_CHARS).trimEnd() : displayQuote;
  const tail = expandable ? displayQuote.slice(preview.length) : "";

  // Scroll-in reveal
  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); }
      },
      { threshold: 0.01, rootMargin: "0px 0px 140px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Typewriter on open; fade + reset on close
  useEffect(() => {
    if (typingRef.current) clearInterval(typingRef.current);

    if (!open) {
      setTailOpacity(0);
      const t = setTimeout(() => setCharCount(0), CLOSE_DURATION);
      return () => clearTimeout(t);
    }

    setTailOpacity(1);
    setCharCount(0);
    typingRef.current = setInterval(() => {
      setCharCount((n) => {
        if (n >= tail.length) { clearInterval(typingRef.current!); return n; }
        return n + 1;
      });
    }, CHAR_DELAY);

    return () => { if (typingRef.current) clearInterval(typingRef.current); };
  }, [open, tail]);

  function handleClick() {
    setOpen((p) => !p);
  }

  const easing = "cubic-bezier(0.16,1,0.3,1)";
  const typed = tail.slice(0, charCount);
  const done = charCount >= tail.length;
  const openText = `${preview}${typed}`;
  const openParagraphs = openText.split("\n\n");

  const rowStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(12px)",
    transition: `opacity 280ms ${easing} ${index * 8}ms, transform 280ms ${easing} ${index * 8}ms`,
  };

  const gridClass = "grid grid-cols-1 gap-4 py-10 sm:grid-cols-[12rem_1fr] sm:gap-16 lg:grid-cols-[16rem_1fr]";

  if (!expandable) {
    return (
      <article ref={rowRef}>
        <div className={gridClass} style={rowStyle}>
          <Meta name={name} role={role} context={context} duration={duration} />
          <blockquote className="border-l border-outline/80 pl-4 font-display text-xl leading-relaxed text-ink sm:text-2xl">
            <div className="space-y-4">
              {paragraphs.map((paragraph, i) => (
                <p key={`${name}-${i}`}>{i === 0 ? `“${paragraph}` : paragraph}{i === paragraphs.length - 1 ? "”" : ""}</p>
              ))}
            </div>
          </blockquote>
        </div>
      </article>
    );
  }

  return (
    <article ref={rowRef}>
      <button onClick={handleClick} aria-expanded={open} className="w-full cursor-pointer text-left">
        <div className={gridClass} style={rowStyle}>
          <Meta name={name} role={role} context={context} duration={duration} />

          <div className="relative">
            {!open && (
              <blockquote className="font-display text-xl leading-relaxed text-ink sm:text-2xl">
                &ldquo;{preview}
                <span style={{ opacity: tailOpacity, transition: open ? "none" : `opacity ${CLOSE_DURATION}ms ease` }}>
                  {typed}{done ? "\u201d" : ""}
                </span>
                <span style={{ opacity: !open && tailOpacity === 0 ? 1 : 0, transition: "opacity 200ms ease 250ms" }} className="text-muted">&hellip;&rdquo;</span>
              </blockquote>
            )}

            {open && (
              <blockquote className="border-l border-outline/80 pl-4 font-display text-xl leading-relaxed text-ink sm:text-2xl">
                <div className="space-y-4">
                  {openParagraphs.map((paragraph, i) => (
                    <p key={`${name}-${i}`}>
                      {i === 0 ? `“${paragraph}` : paragraph}
                      {done && i === openParagraphs.length - 1 ? "”" : ""}
                      {!done && i === openParagraphs.length - 1 ? "…" : ""}
                    </p>
                  ))}
                </div>
              </blockquote>
            )}

            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
              <span style={{
                display: "inline-block",
                transition: `transform 400ms ${easing}`,
                transform: open ? "rotate(45deg)" : "none",
              }}>+</span>
              {" "}{open ? "Close" : "Read more"}
            </p>
          </div>
        </div>
      </button>
    </article>
  );
}
