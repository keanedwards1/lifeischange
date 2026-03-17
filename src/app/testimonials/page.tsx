import { PageHero } from "@/components/page-hero";
import { TestimonialRow } from "@/components/testimonial-row";
import { AnimatedDivider } from "@/components/animated-divider";

const featured = {
  quote:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
  name: "Lorem A.",
  role: "Ipsum dolor",
  context: "Consectetur Adipiscing",
  duration: "6 months",
};

const testimonials = [
  {
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Dolor B.", role: "Amet", context: "Consectetur", duration: "6 months",
  },
  {
    quote: "Duis aute irure dolor in reprehenderit.",
    name: "Consectetur C.", role: "Adipiscing", context: "Elit", duration: "5 months",
  },
  {
    quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    name: "Elit D.", role: "Sed", context: "Eiusmod", duration: "3 months",
  },
  {
    quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "Tempor E.", role: "Labore", context: "Magna", duration: "6 months",
  },
  {
    quote: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    name: "Aliqua F.", role: "Veniam", context: "Nostrud", duration: "4 months",
  },
  {
    quote: "At vero eos et accusamus.",
    name: "Veniam G.", role: "Exercitation", context: "Ullamco", duration: "5 months",
  },
  {
    quote: "Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda est omnis dolor repellendus temporibus autem quibusdam.",
    name: "Laboris H.", role: "Aliquip", context: "Commodo", duration: "4 months",
  },
  {
    quote: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.",
    name: "Consequat I.", role: "Cillum", context: "Dolore", duration: "7 months",
  },
  {
    quote: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    name: "Fugiat J.", role: "Nulla", context: "Pariatur", duration: "3 months",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Lorem Ipsum"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      {/* Featured testimonial — full-bleed ink */}
      <section className="w-full pb-0">
        <div className="bg-ink px-8 py-20 text-white sm:px-16 lg:px-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              {featured.context}
            </p>
            <blockquote className="mt-6 font-display text-3xl leading-relaxed sm:text-4xl lg:text-5xl lg:leading-[1.2]">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <footer className="mt-10 flex items-center gap-5">
              <div className="h-px w-10 bg-white/20" />
              <div>
                <p className="text-sm font-semibold">{featured.name}</p>
                <p className="text-xs text-white/50">{featured.role} &middot; {featured.duration}</p>
              </div>
            </footer>
          </div>
        </div>
      </section>

      {/* Testimonials — editorial stacked list */}
      <section className="w-full px-4 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {testimonials.map((item, index) => (
            <div key={item.name}>
              <AnimatedDivider index={index} />
              <TestimonialRow {...item} index={index} />
            </div>
          ))}
          <AnimatedDivider index={testimonials.length} />
        </div>
      </section>

      {/* Warm CTA band */}
      <section className="w-full pb-0">
        <div className="bg-surface-warm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl fade-up flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-2xl text-ink sm:text-3xl">Lorem ipsum dolor sit amet?</h2>
              <p className="mt-2 text-sm text-ink/60">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
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
