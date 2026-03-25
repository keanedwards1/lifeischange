import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Connect",
};

export default function ConnectPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full overflow-hidden px-4 pb-14 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14">
        <div className="fade-up relative mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Connect
          </p>
          <h1 className="mt-5 max-w-5xl font-display text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            Let&rsquo;s connect
            <br />
            <em className="font-normal not-italic text-muted">and get to work.</em>
          </h1>
          <div className="mt-8 max-w-2xl border-t border-outline pt-7">
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Share a little about what you are navigating right now. I&rsquo;ll follow up and we can discuss the best next step.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="w-full pb-0">
        <div className="lg:grid lg:grid-cols-[1fr_1.4fr]">
          {/* Left info panel */}
          <div className="relative overflow-hidden bg-ink px-8 py-16 text-white sm:px-16 lg:px-20 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              Working Together
            </p>
            <h2 className="mt-5 font-display text-3xl leading-snug sm:text-4xl">
              Coaching that meets you where you are.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              We can focus on relationships, career, business, or broader life transitions. The work is practical, direct, and built around your real situation.
            </p>

            <ul className="mt-10 space-y-5">
              {[
                "Supportive, non-judgmental space",
                "Clear strategy and practical next steps",
                "Flexible sessions by phone or in person",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 text-sm text-white/65">
                  <span className="mt-1.5 shrink-0 h-px w-4 bg-white/25" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 overflow-hidden border border-white/15">
              <div className="relative h-32 w-full">
                <Image
                  src="/puzzle.jpg"
                  alt="Puzzle pieces"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-ink/35" />
              </div>
            </div>

          </div>

          {/* Right form panel */}
          <div className="bg-surface-strong px-8 py-16 sm:px-16 lg:px-20 lg:py-24">
            <form className="mx-auto max-w-lg grid gap-6">
              <div className="grid gap-1.5">
                <label htmlFor="fullName" className="text-sm font-medium text-ink">Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Your name"
                  className="h-12 rounded-none border border-outline bg-surface px-4 text-sm outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/10"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-ink">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    className="h-12 rounded-none border border-outline bg-surface px-4 text-sm outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/10"
                  />
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="topic" className="text-sm font-medium text-ink">Please Choose</label>
                <select
                  id="topic"
                  name="topic"
                  defaultValue="life-relationship"
                  className="h-12 w-full max-w-full truncate rounded-none border border-outline bg-surface px-4 pr-10 text-sm outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/10"
                >
                  <option value="life-relationship">Life &amp; Relationship</option>
                  <option value="business">Business, Start-up, Non-Profit</option>
                  <option value="career">Career Coaching</option>
                  <option value="creative">Creative Integration Coaching</option>
                    <option value="combination">Combination</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-ink">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="What would you like support with?"
                  className="resize-none rounded-none border border-outline bg-surface px-4 py-3 text-sm outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/10"
                />
              </div>

              <p className="text-xs text-muted">I typically respond within 1-2 business days.</p>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-none bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-80"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
