import Link from "next/link";
import { ImagePlaceholder } from "@/components/image-placeholder";


const services = [
  {
    number: "01",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    number: "02",
    title: "Dolor Sit",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    number: "03",
    title: "Amet Consectetur",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    number: "04",
    title: "Adipiscing Elit",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — full bleed with inner constraint */}
      <section className="relative w-full overflow-hidden px-4 pb-24 pt-16 sm:px-8 sm:pt-24 lg:px-16 lg:pt-32">
        <div className="fade-up relative mx-auto max-w-7xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Lorem Ipsum
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-[5.5rem]">
              Lorem ipsum dolor
              <br />
              <em className="font-normal not-italic text-muted">sit amet,</em>
              <br />
              consectetur.
            </h1>
            <div className="mt-10 flex flex-col gap-6 border-t border-outline pt-8 sm:flex-row sm:items-start sm:gap-12">
              <p className="max-w-xs text-sm leading-relaxed text-muted">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="/connect"
                  className="inline-flex items-center justify-center rounded-md bg-ink px-7 py-3.5 text-sm font-semibold text-surface transition hover:opacity-80"
                >
                  Lorem Ipsum
                </a>
                <Link
                  href="/about"
                  className="text-center text-xs font-medium text-muted underline underline-offset-4 hover:text-ink"
                >
                  Dolor Sit →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services — full bleed, inner constraint */}
      <section className="w-full px-4 pb-24 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Lorem Ipsum
            </p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
              Lorem ipsum dolor sit amet.
            </h2>
          </div>
          <div className="divide-y divide-outline">
            {services.map((service, index) => (
              <div
                key={service.number}
                className="fade-up grid grid-cols-[3rem_1fr] items-baseline gap-6 py-8 sm:grid-cols-[4rem_1fr_1.5fr] sm:gap-10"
                style={{ animationDelay: `${120 + index * 60}ms` }}
              >
                <span className="font-display text-sm text-accent/70">
                  {service.number}
                </span>
                <h3 className="font-display text-xl text-ink sm:text-2xl">
                  {service.title}
                </h3>
                <p className="col-start-2 text-sm leading-relaxed text-muted sm:col-start-3">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three-image strip — bleeds edge to edge */}
      <section className="w-full px-4 pb-24 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-[1fr_1.4fr_1fr] gap-3 sm:gap-4">
            <ImagePlaceholder className="aspect-2/3 rounded-md" label="Lorem ipsum" />
            <ImagePlaceholder className="aspect-square self-end rounded-md" label="Dolor sit" />
            <ImagePlaceholder className="aspect-2/3 rounded-md" label="Amet" />
          </div>
        </div>
      </section>

      {/* About teaser — full-bleed warm background */}
      <section className="w-full pb-24">
        <div className="relative overflow-hidden bg-surface-warm lg:grid lg:grid-cols-[1.3fr_1fr]">
          <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            {/* Decorative oversized numeral */}
            <p className="font-display text-[8rem] font-bold leading-none text-ink/5 select-none -ml-2 -mt-8">
              01
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-ink/40">
              Lorem Ipsum
            </p>
            <h2 className="mt-4 font-display text-3xl leading-snug text-ink sm:text-4xl lg:text-5xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink/60">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <Link
              href="/who-am-i"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink underline underline-offset-4 hover:opacity-60"
            >
              Lorem Ipsum →
            </Link>
          </div>
          <ImagePlaceholder className="aspect-square w-full lg:aspect-auto lg:h-full" label="Consectetur" />
        </div>
      </section>

      {/* Pull quote — full bleed */}
      <section className="w-full px-4 pb-24 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <blockquote className="fade-up border-l-2 border-ink pl-8 lg:pl-16">
            <p className="font-display text-2xl leading-relaxed text-ink sm:text-3xl lg:text-5xl">
              &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.&rdquo;
            </p>
            <footer className="mt-8 flex items-center gap-4">
              <div className="h-px w-10 bg-outline" />
              <div>
                <p className="text-sm font-semibold text-ink">Lorem Ipsum</p>
                <p className="text-xs text-muted">Dolor sit amet</p>
              </div>
            </footer>
          </blockquote>
          <div className="mt-10 fade-up [animation-delay:100ms]">
            <Link
              href="/testimonials"
              className="text-sm font-semibold text-ink underline underline-offset-4 hover:opacity-60"
            >
              Read more stories →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

