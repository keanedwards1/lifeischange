import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Who Are You?", href: "/who-are-you" },
  { label: "Who Am I?", href: "/who-am-i" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Connect", href: "/connect" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-strong text-white">
      <div className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <p className="font-display text-2xl font-semibold">Life Is Change</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              One-on-one coaching for life, relationships, business, and creative work. Based in Fairfax, CA — working with people everywhere.
            </p>
            <Link
              href="/connect"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-brand-strong transition hover:bg-white/90"
            >
              Begin the conversation
            </Link>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">Navigate</p>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/60 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-7xl mt-16 border-t border-white/10 pt-8 text-xs text-white/30">
          <p>© {year} Life Is Change. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
