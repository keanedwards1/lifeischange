export function ContactSection() {
  return (
    <section
      id="lets-connect"
      className="mx-auto w-full max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8"
    >
      <div className="overflow-hidden rounded-lg border border-outline shadow-xl shadow-ink/5">
        <div className="grid lg:grid-cols-2">
          <div className="bg-brand-strong p-8 text-white sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              Lorem Ipsum
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              Lorem ipsum dolor sit amet?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <span className="text-accent">✦</span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">✦</span>
                Consectetur adipiscing elit
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">✦</span>
                Sed do eiusmod tempor
              </li>
            </ul>
          </div>

          <div className="bg-surface-strong p-8 sm:p-10 lg:p-12">
            <form className="grid gap-5">
              <div className="grid gap-1.5">
                <label htmlFor="fullName" className="text-sm font-medium text-ink">
                  Lorem
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Lorem ipsum"
                  className="h-11 rounded-sm border border-outline bg-surface px-3.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-ink">
                    Ipsum
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="lorem@ipsum.com"
                    className="h-11 rounded-sm border border-outline bg-surface px-3.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
                  />
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="topic" className="text-sm font-medium text-ink">
                    Dolor
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    defaultValue=""
                    className="h-11 rounded-sm border border-outline bg-surface px-3.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
                  >
                    <option value="" disabled>
                      Lorem ipsum
                    </option>
                    <option value="lorem">Lorem</option>
                    <option value="ipsum">Ipsum</option>
                    <option value="dolor">Dolor</option>
                    <option value="sit">Sit</option>
                    <option value="amet">Amet</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-ink">
                  Amet
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                  className="resize-none rounded-sm border border-outline bg-surface px-3.5 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
                />
              </div>

              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-strong"
              >
                Lorem Ipsum
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
