import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect",
};

export default function ConnectPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full px-8 pb-16 pt-20 sm:px-16 sm:pt-28 lg:px-24 lg:pt-36">
        <div className="fade-up mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Lorem Ipsum
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            Lorem ipsum dolor
            <br />
            <em className="font-normal not-italic text-muted">sit amet.</em>
          </h1>
          <div className="mt-8 border-t border-outline pt-7">
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info — full bleed split */}
      <section className="w-full pb-0">
        <div className="lg:grid lg:grid-cols-[1fr_1.4fr]">
          {/* Left info panel */}
          <div className="relative overflow-hidden bg-ink px-8 py-16 text-white sm:px-16 lg:px-20 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              Lorem Ipsum
            </p>
            <h2 className="mt-5 font-display text-3xl leading-snug sm:text-4xl">
              Lorem ipsum dolor sit amet?
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>

            <ul className="mt-10 space-y-5">
              {["Lorem ipsum dolor sit amet", "Consectetur adipiscing elit", "Sed do eiusmod tempor"].map((item) => (
                <li key={item} className="flex items-start gap-4 text-sm text-white/65">
                  <span className="mt-1.5 shrink-0 h-px w-4 bg-white/25" />
                  {item}
                </li>
              ))}
            </ul>

          </div>

          {/* Right form panel */}
          <div className="bg-surface-strong px-8 py-16 sm:px-16 lg:px-20 lg:py-24">
            <form className="mx-auto max-w-lg grid gap-6">
              <div className="grid gap-1.5">
                <label htmlFor="fullName" className="text-sm font-medium text-ink">Lorem</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Lorem ipsum"
                  className="h-12 rounded-sm border border-outline bg-surface px-4 text-sm outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/10"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-ink">Ipsum</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="lorem@ipsum.com"
                    className="h-12 rounded-sm border border-outline bg-surface px-4 text-sm outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/10"
                  />
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="topic" className="text-sm font-medium text-ink">Dolor</label>
                  <select
                    id="topic"
                    name="topic"
                    defaultValue=""
                    className="h-12 rounded-sm border border-outline bg-surface px-4 text-sm outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/10"
                  >
                    <option value="" disabled>Lorem ipsum</option>
                    <option value="lorem">Lorem</option>
                    <option value="ipsum">Ipsum</option>
                    <option value="dolor">Dolor</option>
                    <option value="sit">Sit</option>
                    <option value="amet">Amet</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-ink">Amet</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                  className="resize-none rounded-sm border border-outline bg-surface px-4 py-3 text-sm outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/10"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-80"
              >
                Lorem Ipsum
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
