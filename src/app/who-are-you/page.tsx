import { PageHero } from "@/components/page-hero";

const idealClients = [
  {
    title: "Lorem ipsum dolor sit.",
    description:
      "Amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.",
  },
  {
    title: "Ut enim ad minim veniam.",
    description:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
  },
  {
    title: "Duis aute irure dolor.",
    description:
      "In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    title: "Excepteur sint occaecat.",
    description:
      "Cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus.",
  },
];

const successOutcomes = [
  "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  "Sed do eiusmod tempor incididunt ut labore et dolore",
  "Ut enim ad minim veniam quis nostrud exercitation",
  "Duis aute irure dolor in reprehenderit in voluptate",
];

const notFor = [
  "Lorem ipsum dolor sit amet consectetur",
  "Sed do eiusmod tempor incididunt ut labore",
  "Ut enim ad minim veniam quis nostrud",
  "Duis aute irure dolor in reprehenderit",
];

export default function WhoAreYouPage() {
  return (
    <>
      <PageHero
        eyebrow="Who Are You?"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />

      {/* Client profiles — full bleed editorial list */}
      <section className="w-full px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 border-b border-outline pb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Lorem Ipsum</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Dolor sit amet consectetur?</h2>
          </div>
          <div className="divide-y divide-outline">
            {idealClients.map((client, index) => (
              <div
                key={client.title}
                className="fade-up grid gap-4 py-12 lg:grid-cols-[2fr_3fr] lg:gap-20"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <h3 className="font-display text-2xl leading-snug text-ink sm:text-3xl">
                  {client.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted lg:pt-2">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success + Not For — full-bleed warm */}
      <section className="w-full pb-0">
        <div className="bg-surface-warm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink/40">Lorem Ipsum</p>
              <h2 className="mt-5 font-display text-2xl text-ink sm:text-3xl">
                Dolor sit amet consectetur adipiscing:
              </h2>
              <ul className="mt-8 space-y-5">
                {successOutcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-4 text-sm text-ink/70">
                    <span className="mt-0.5 shrink-0 font-display text-base text-ink/25">✓</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14 border-t border-ink/10 pt-14 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-20 lg:pt-0">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink/40">Ut Enim Ad Minim&hellip;</p>
              <ul className="mt-8 space-y-5">
                {notFor.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-sm text-ink/60">
                    <span className="mt-0.5 shrink-0 text-ink/25">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-sm text-ink/50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — full bleed white */}
      <section className="w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="fade-up flex flex-col gap-6 border-t border-outline pt-12 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-2xl text-ink sm:text-3xl">Lorem ipsum dolor sit amet?</h2>
              <p className="mt-2 text-sm text-muted">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <a
              href="/connect"
              className="shrink-0 inline-flex items-center justify-center rounded-md bg-ink px-7 py-3.5 text-sm font-semibold text-surface transition hover:opacity-80"
            >
              Lorem Ipsum
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
