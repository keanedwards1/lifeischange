import { PageHero } from "@/components/page-hero";
import { ImagePlaceholder } from "@/components/image-placeholder";

const coachingTypes = [
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    outcomes: ["Ut enim ad minim veniam", "Quis nostrud exercitation ullamco", "Laboris nisi ut aliquip"],
  },
  {
    title: "Dolor Sit Amet",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    outcomes: ["Excepteur sint occaecat cupidatat", "Non proident sunt in culpa", "Qui officia deserunt mollit"],
  },
  {
    title: "Consectetur Adipiscing",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    outcomes: ["Totam rem aperiam eaque", "Ipsa quae ab illo", "Inventore veritatis et quasi"],
  },
  {
    title: "Elit Sed Do",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.",
    outcomes: ["Neque porro quisquam est", "Qui dolorem ipsum quia", "Dolor sit amet consectetur"],
  },
];

const process = [
  { step: "01", title: "Lorem", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
  { step: "02", title: "Ipsum", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi." },
  { step: "03", title: "Dolor", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." },
  { step: "04", title: "Amet",  description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia." },
];

const sessionDetails = [
  { label: "Lorem",       value: "Ipsum",      detail: "Dolor sit amet consectetur adipiscing elit." },
  { label: "Dolor",       value: "Sit Amet",   detail: "Sed do eiusmod tempor incididunt ut labore." },
  { label: "Consectetur", value: "Adipiscing", detail: "Ut enim ad minim veniam quis nostrud." },
  { label: "Elit",        value: "Sed Do",     detail: "Duis aute irure dolor in reprehenderit." },
  { label: "Eiusmod",     value: "Tempor",     detail: "Excepteur sint occaecat cupidatat non proident." },
  { label: "Labore",      value: "Magna",      detail: "Sunt in culpa qui officia deserunt mollit." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Lorem Ipsum"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      {/* 4 Kinds — full-bleed warm section with inner grid */}
      <section id="4-kinds-of-coaching" className="relative w-full scroll-mt-24 overflow-hidden pb-0">
        <div className="bg-surface-warm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex items-end gap-8 border-b border-ink/10 pb-8">
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink/40">Lorem Ipsum</p>
                <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Dolor sit amet.</h2>
              </div>
              <p className="hidden max-w-xs text-sm leading-relaxed text-ink/60 lg:block">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>

            {/* Top row */}
            <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
              <article className="fade-up rounded-lg bg-surface-strong p-8 shadow-sm shadow-ink/5">
                <h3 className="font-display text-2xl text-ink sm:text-3xl">{coachingTypes[0].title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{coachingTypes[0].description}</p>
                <ul className="mt-6 space-y-2">
                  {coachingTypes[0].outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3 text-sm text-muted">
                      <span className="mt-0.5 text-accent">—</span>{o}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="fade-up overflow-hidden rounded-lg bg-surface-strong shadow-sm shadow-ink/5 [animation-delay:80ms]">
                <ImagePlaceholder className="h-40 w-full" label="Lorem ipsum" />
                <div className="p-8">
                  <h3 className="font-display text-2xl text-ink sm:text-3xl">{coachingTypes[1].title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{coachingTypes[1].description}</p>
                  <ul className="mt-6 space-y-2">
                    {coachingTypes[1].outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3 text-sm text-muted">
                        <span className="mt-0.5 text-accent">—</span>{o}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>

            {/* Bottom row */}
            <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1.6fr]">
              <article className="fade-up rounded-lg bg-surface-strong p-8 shadow-sm shadow-ink/5 [animation-delay:160ms]">
                <h3 className="font-display text-2xl text-ink sm:text-3xl">{coachingTypes[2].title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{coachingTypes[2].description}</p>
                <ul className="mt-6 space-y-2">
                  {coachingTypes[2].outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3 text-sm text-muted">
                      <span className="mt-0.5 text-accent">—</span>{o}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="fade-up overflow-hidden rounded-lg bg-ink text-white [animation-delay:240ms]">
                <div className="flex h-full flex-col lg:grid lg:grid-cols-[1fr_auto] lg:items-stretch">
                  <div className="p-8">
                    <h3 className="font-display text-2xl sm:text-3xl">{coachingTypes[3].title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/60">{coachingTypes[3].description}</p>
                    <ul className="mt-6 space-y-2">
                      {coachingTypes[3].outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-3 text-sm text-white/60">
                          <span className="mt-0.5 text-white/30">—</span>{o}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ImagePlaceholder className="h-48 w-full opacity-40 lg:h-auto lg:w-40" label="Dolor sit" />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work — white bg, full bleed */}
      <section id="how-i-work" className="w-full scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Lorem</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Ipsum dolor.</h2>
          </div>
          <div className="relative">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-outline lg:block" />
            <div className="grid gap-10 lg:grid-cols-4">
              {process.map((step, index) => (
                <div key={step.step} className="fade-up relative" style={{ animationDelay: `${index * 80}ms` }}>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-surface ring-1 ring-outline">
                    <span className="font-display text-sm text-accent">{step.step}</span>
                  </div>
                  <h3 className="font-display text-xl text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Coaching — full-bleed ink dark section */}
      <section id="why-coaching" className="w-full scroll-mt-24 pb-0">
        <div className="bg-ink text-white lg:grid lg:grid-cols-[1fr_1.5fr]">
          <ImagePlaceholder className="aspect-[4/3] w-full opacity-50 lg:aspect-auto lg:h-full" label="Amet consectetur" />
          <div className="px-8 py-16 sm:px-16 lg:px-20 lg:py-24">
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">Lorem Ipsum</p>
            <h2 className="mt-4 font-display text-3xl leading-snug sm:text-4xl lg:text-5xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-white/60">
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              <p className="font-medium text-white/90">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
              </p>
            </div>
            <a
              href="/connect"
              className="mt-10 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-surface"
            >
              Lorem Ipsum
            </a>
          </div>
        </div>
      </section>

      {/* Session Details — full bleed, inner constraint */}
      <section id="session-details" className="w-full scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Lorem Ipsum</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Dolor sit amet.</h2>
          </div>
          <div className="divide-y divide-outline">
            {sessionDetails.map((detail) => (
              <div key={detail.label} className="grid items-baseline gap-6 py-5 sm:grid-cols-[8rem_auto_1fr]">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{detail.label}</p>
                <p className="font-display text-lg text-ink">{detail.value}</p>
                <p className="text-sm text-muted">{detail.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
