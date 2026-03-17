type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden px-8 pb-16 pt-16 sm:px-16 sm:pt-24 lg:px-24 lg:pt-32">
      <div className="fade-up relative mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-5 font-display text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl border-t border-outline pt-7 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
