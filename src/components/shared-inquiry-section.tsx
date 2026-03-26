"use client";

export function SharedInquirySection() {
  return (
    <>
      <section className="w-full px-4 pb-20 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-outline bg-surface-strong p-6 shadow-xl shadow-ink/8 sm:p-8 lg:p-10">
          <h3 className="mb-6 font-display text-3xl text-ink sm:text-4xl">Let&rsquo;s Connect</h3>
          <div className="rounded-2xl bg-white p-5 ring-1 ring-outline sm:p-7">
            <form className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-ink">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="h-11 rounded-xl border border-outline bg-surface px-3.5 text-sm outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/10"
                  />
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-ink">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    className="h-11 rounded-xl border border-outline bg-surface px-3.5 text-sm outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/10"
                  />
                </div>
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="topic" className="text-sm font-medium text-ink">
                  Please Choose
                </label>
                <select
                  id="topic"
                  name="topic"
                  defaultValue="life-relationship"
                  className="h-11 rounded-xl border border-outline bg-surface px-3.5 text-sm outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/10"
                >
                  <option value="life-relationship">Life &amp; Relationship Coaching</option>
                  <option value="business">Business, Start-up, Non-Profit Coaching</option>
                  <option value="career">Career Coaching</option>
                  <option value="creative">Creative Integration Coaching</option>
                  <option value="combination">Combination</option>
                  <option value="general">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="What would you like support with?"
                  className="resize-none rounded-xl border border-outline bg-surface px-3.5 py-3 text-sm outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/10"
                />
              </div>
              <div className="flex items-center justify-between gap-4 pt-1">
                <p className="text-xs text-muted">I typically respond within 1-2 business days.</p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-ink px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-85"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="w-full px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <a
            href="/about#4-kinds-of-coaching"
            className="group relative block overflow-hidden rounded-2xl border border-outline bg-surface-strong px-7 py-7 shadow-sm shadow-ink/5 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-ink/10 sm:px-10"
          >
            <div className="pointer-events-none absolute right-[-20px] top-[-20px] h-24 w-24 rounded-full bg-accent/12 transition group-hover:scale-115" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-accent">Related Work</p>
            <p className="relative mt-2 font-display text-2xl text-ink sm:text-3xl">
              Business, Start-Up and Non-Profit Consulting
            </p>
            <p className="relative mt-2 text-sm text-muted">
              Visit R&amp;D2 for strategy and brand-focused consulting.
            </p>
            <p className="relative mt-4 text-sm font-semibold text-ink">
              Explore R&amp;D2 &rarr;
            </p>
          </a>
        </div>
      </section>
    </>
  );
}
