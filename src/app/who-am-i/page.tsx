import { ImagePlaceholder } from "@/components/image-placeholder";
import { PageHero } from "@/components/page-hero";

const values = [
  { title: "Lorem ipsum dolor.", description: "Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore." },
  { title: "Ut enim ad minim.", description: "Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo." },
  { title: "Duis aute irure.", description: "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla." },
  { title: "Excepteur sint occaecat.", description: "Cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est." },
];

const credentials = ["Lorem ipsum", "Dolor sit amet", "Consectetur elit", "Sed do eiusmod"];

export default function WhoAmIPage() {
  return (
    <>
      <PageHero
        eyebrow="Lorem Ipsum"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      {/* Bio — sticky photo column, full bleed */}
      <section className="w-full px-4 pb-0 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-[1fr_1.8fr] lg:gap-20">
            {/* Sticky photo */}
            <div className="mb-16 lg:mb-0">
              <ImagePlaceholder className="sticky top-28 aspect-3/4 w-full rounded-lg ring-4 ring-surface" label="Lorem ipsum" />
            </div>

            {/* Text content */}
            <div className="pb-24">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Lorem Ipsum</p>
              <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
                Consectetur adipiscing elit sed do.
              </h2>
              <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p className="font-medium text-ink">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>

              {/* Values */}
              <div className="mt-16 border-t border-outline pt-12">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Lorem Ipsum</p>
                <h3 className="mt-3 font-display text-2xl text-ink">Dolor sit amet consectetur.</h3>
                <div className="mt-10 space-y-10">
                  {values.map((value, i) => (
                    <div key={value.title} className="grid gap-2 sm:grid-cols-[auto_1fr] sm:gap-8">
                      <span className="font-display text-4xl font-bold text-ink/8 select-none leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="font-display text-lg italic text-ink">{value.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Credentials — full-bleed warm band */}
              <div className="mt-16 -mx-8 sm:-mx-16 lg:-mx-20">
                <div className="bg-surface-warm px-8 py-12 sm:px-16 lg:px-20">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink/40">Lorem Ipsum</p>
                  <h3 className="mt-3 font-display text-2xl text-ink">Lorem ipsum dolor sit amet.</h3>
                  <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink/60">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {credentials.map((badge) => (
                      <span key={badge} className="rounded-full border border-ink/15 bg-white/60 px-4 py-1.5 text-xs font-medium text-ink/70">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
