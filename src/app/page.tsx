"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HERO_IMAGE = "";
const PORTRAIT_IMAGE = "";

const services = [
  { title: "Life & Relationships", desc: "You are capable of thriving. Let's explore your story and find the path that feels like yours." },
  { title: "Business & Start-ups", desc: "You are capable of turning your ideas into something real. Let's move your vision from concept to momentum." },
  { title: "Career", desc: "You are capable of more than your current role allows. Let's uncover your strengths and point them forward." },
  { title: "Creative Intelligence", desc: "You are capable of generating ideas that shift things. Let's make space for that kind of thinking to lead." },
];

const ideas = [
  { word: "Share", line: "Tell your story. All of it." },
  { word: "Reflect", line: "Gain perspective on where you are." },
  { word: "Vision", line: "Ideas without limits." },
  { word: "Strategy", line: "Figure out what, why, and how." },
  { word: "Tactical", line: "Clarify the steps to execute." },
  { word: "Engage", line: "It's time to make it happen." },
];

const whoFor = [
  { label: "Past", icon: "/icons/past.png", isYou: false },
  { label: "Family", icon: "/icons/family.png", isYou: false },
  { label: "Friends", icon: "/icons/friends.png", isYou: false },
  { label: "You", icon: "/icons/you.png", isYou: true },
  { label: "Partners", icon: "/icons/partners.png", isYou: false },
  { label: "Colleagues", icon: "/icons/colleagues.png", isYou: false },
  { label: "Future", icon: "/icons/future.png", isYou: false },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
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
  return { ref, visible };
}

function ServiceRow({ title, desc, index }: { title: string; desc: string; index: number }) {
  const [open, setOpen] = useState(false);
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateX(-24px)",
        transition: `opacity 700ms cubic-bezier(0.16,1,0.3,1) ${index * 80}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${index * 80}ms`,
      }}
    >
      <button
        className="group w-full border-t border-outline pb-6 pt-8 text-left"
        onClick={() => setOpen(p => !p)}
      >
        <div className="flex items-baseline justify-between gap-8">
          <h3 className="font-display text-4xl text-ink transition-none sm:text-5xl lg:text-6xl">
            {title}
          </h3>
          <span
            className="shrink-0 font-display text-3xl text-muted transition-transform duration-500"
            style={{ transform: open ? "rotate(45deg)" : "none" }}
            aria-hidden
          >
            +
          </span>
        </div>
        <div
          style={{
            maxHeight: open ? "10rem" : "0",
            opacity: open ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 500ms cubic-bezier(0.16,1,0.3,1), opacity 400ms ease",
          }}
        >
          <p className="max-w-xl pb-2 pt-4 text-base leading-relaxed text-muted">{desc}</p>
        </div>
      </button>
    </div>
  );
}

function IdeaItem({ word, line, index }: { word: string; line: string; index: number }) {
  const { ref, visible } = useReveal();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex flex-col ${isEven ? "items-start" : "items-end"}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : `translateX(${isEven ? "-40px" : "40px"})`,
        transition: `opacity 900ms cubic-bezier(0.16,1,0.3,1) ${index * 100}ms, transform 900ms cubic-bezier(0.16,1,0.3,1) ${index * 100}ms`,
      }}
    >
      <span
        className="font-display text-white"
        style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)", lineHeight: 1.15 }}
      >
        {word}
      </span>
      <span className={`mt-2 max-w-xs text-sm text-white/30 ${!isEven ? "text-right" : ""}`} style={{ marginBottom: "clamp(2.5rem, 6vw, 5rem)" }}>
        {line}
      </span>
    </div>
  );
}

export default function Home() {
  const heroImgRef = useRef<HTMLDivElement>(null);

  // Parallax on hero image
  useEffect(() => {
    const onScroll = () => {
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex h-screen min-h-140 w-full flex-col justify-end overflow-hidden">
        <div ref={heroImgRef} className="absolute inset-0 scale-110">
          {HERO_IMAGE
            ? <Image src={HERO_IMAGE} alt="" fill priority className="object-cover object-center" />
            : <div className="absolute inset-0 bg-ink" />
          }
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/55 to-transparent" />

        {/* Drifting ghost word */}
        <span
          aria-hidden
          className="drift pointer-events-none absolute right-[-4vw] top-[12%] select-none font-display italic leading-none text-white/3"
          style={{ fontSize: "clamp(8rem, 22vw, 22rem)" }}
        >
          Change
        </span>

        <div className="relative z-10 px-6 pb-16 sm:px-10 sm:pb-24 lg:px-16">
          <h1 className="font-display leading-none text-white" style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}>
            The life you want<br />
            <em className="italic text-white/35">is already</em><br />
            in motion.
          </h1>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-white/50">
            I work with you one-on-one to help you see it clearly, move through it honestly, and build something that fits.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="/connect"
              className="inline-flex items-center justify-center rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-white/90"
            >
              Begin the conversation
            </a>
            <Link href="/about" className="text-sm text-white/40 underline underline-offset-4 transition-colors hover:text-white">
              See how it works →
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 flex flex-col items-center gap-2 opacity-25">
          <div className="h-8 w-px bg-white" />
          <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white">Scroll</span>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="w-full overflow-hidden">
        <div className="px-6 pb-0 pt-20 sm:px-10 lg:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Who it's for</p>
          <h2 className="mt-3 font-display leading-none text-ink" style={{ fontSize: "clamp(3rem,8vw,5.5rem)" }}>
            No wrong<br />feeling.
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            People come with all kinds of things on their minds. Whatever is weighing on yours belongs here.
          </p>
        </div>

        <div className="mt-14 flex items-stretch gap-0 border-y border-outline">
          {whoFor.map((item, i) => (
            <div
              key={item.label}
              className="group flex flex-1 flex-col items-center justify-center gap-3 border-r border-outline px-2 py-10 transition-all duration-300 last:border-r-0 hover:bg-accent-soft"
            >
              <div
                className={`relative transition-all duration-300 group-hover:scale-110 ${
                  item.isYou
                    ? "h-16 w-16 opacity-60 group-hover:opacity-100 sm:h-20 sm:w-20"
                    : "h-12 w-12 opacity-25 group-hover:opacity-80 sm:h-16 sm:w-16"
                }`}
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                <Image src={item.icon} alt={item.label} fill className="object-contain" />
              </div>
              <span className={`transition-colors duration-300 group-hover:text-ink ${
                item.isYou
                  ? "font-display text-xl text-ink/40"
                  : "text-[9px] font-semibold uppercase tracking-[0.2em] text-muted"
              }`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="w-full px-6 pb-24 pt-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 flex items-end justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">What we work on</p>
            <Link href="/testimonials" className="text-sm text-muted underline underline-offset-4 transition-colors hover:text-ink">
              Read stories →
            </Link>
          </div>
          <p className="mb-12 font-display text-3xl text-ink sm:text-4xl">
            Whatever you focus on grows.
          </p>
          {services.map((s, i) => (
            <ServiceRow key={s.title} {...s} index={i} />
          ))}
          <div className="border-t border-outline" />
        </div>
      </section>

      {/* ── IDEAS ── */}
      <section className="w-full overflow-hidden bg-ink px-6 pb-32 pt-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/25">How we work</p>
          <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl">
            Not steps.<br />
            <em className="italic text-white/35">Ideas.</em>
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/30">
            These aren't a method. They're six things that tend to happen when two people are honest with each other.
          </p>
          <div className="mt-16">
            {ideas.map((idea, i) => (
              <IdeaItem key={idea.word} {...idea} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="w-full">
        <div className="grid grid-rows-[50vw_auto] lg:grid-cols-[55%_45%] lg:grid-rows-none lg:min-h-130">
          <div className="relative overflow-hidden bg-surface-warm">
            {PORTRAIT_IMAGE
              ? <Image src={PORTRAIT_IMAGE} alt="Richard" fill className="object-cover object-top" />
              : (
                <div className="absolute inset-0 bg-surface-warm">
                  <span className="absolute bottom-6 left-6 text-[10px] font-semibold uppercase tracking-widest text-ink/20">Photo</span>
                </div>
              )
            }
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-ink/70 to-transparent px-8 pb-8 pt-24">
              <p className="font-display text-lg italic text-white/80">
                &ldquo;Telling your story puts a value on the experience.&rdquo;
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-surface px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Who Am I</p>
              <h2 className="mt-4 font-display text-3xl leading-snug text-ink sm:text-4xl lg:text-5xl">
                Richard Appelbaum
              </h2>
              <p className="mt-2 text-sm text-muted">Life Coach &middot; Business Coach &middot; Musician</p>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                I've spent decades at the crossroads of business, creativity, and human connection — building brands as a CMO, composing and performing as a musician, and now helping people find clarity as a coach.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">I bring all of it into the room with you.</p>
            </div>
            <Link href="/who-am-i" className="mt-10 inline-flex w-fit text-sm font-semibold text-ink underline underline-offset-4 transition-opacity hover:opacity-60">
              More about me →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="w-full bg-ink px-6 py-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <span aria-hidden className="select-none font-display leading-none text-white/5" style={{ fontSize: "9rem" }}>&ldquo;</span>
          <blockquote className="-mt-12">
            <p className="font-display text-3xl leading-snug text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              The moment I started asking better questions, everything started moving differently.
            </p>
            <footer className="mt-10 flex items-center gap-5">
              <div className="h-px w-10 bg-white/15" />
              <div>
                <p className="text-sm font-semibold text-white">A former client</p>
                <p className="text-xs text-white/35">6 months of coaching</p>
              </div>
            </footer>
          </blockquote>
          <div className="mt-14">
            <Link href="/testimonials" className="text-sm text-white/40 underline underline-offset-4 transition-colors hover:text-white">
              Read more stories →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
