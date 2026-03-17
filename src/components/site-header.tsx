"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "@/lib/navigation";

function itemIsActive(href: string, pathname: string) {
  if (href.startsWith("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number } | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setMobileOpen(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Animated active indicator
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const activeHref = NAV_ITEMS.find((i) => itemIsActive(i.href, pathname))?.href ?? null;
    const activeEl = activeHref ? linkRefs.current.get(activeHref) : null;
    if (!activeEl) { setIndicatorStyle(null); return; }
    const navRect = nav.getBoundingClientRect();
    const elRect = activeEl.getBoundingClientRect();
    setIndicatorStyle({ left: elRect.left - navRect.left, width: elRect.width });
  }, [pathname]);

  const navItems = NAV_ITEMS.filter((i) => i.href !== "/connect");

  return (
    <>
      <header
        className={`sticky top-0 z-50 flex justify-center transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-4 flex w-full max-w-3xl items-center justify-between gap-2 rounded-2xl px-5 transition-all duration-500 ${
            scrolled
              ? "bg-surface-strong/90 py-3 shadow-lg shadow-ink/8 ring-1 ring-ink/6 backdrop-blur-xl"
              : "bg-surface-strong/70 py-3.5 shadow-sm shadow-ink/4 ring-1 ring-ink/4 backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 font-display text-base text-ink"
            onClick={() => setMobileOpen(false)}
          >
            Life Is Change
          </Link>

          {/* Desktop nav */}
          <nav
            ref={navRef}
            aria-label="Primary"
            className="relative hidden items-center gap-0.5 md:flex"
          >
            {/* Sliding active indicator */}
            {indicatorStyle && (
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 rounded-lg bg-ink/7"
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                  transition: "left 300ms cubic-bezier(0.16,1,0.3,1), width 300ms cubic-bezier(0.16,1,0.3,1)",
                }}
              />
            )}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                ref={(el) => {
                  if (el) linkRefs.current.set(item.href, el);
                }}
                className={`relative rounded-lg px-3.5 py-2 text-sm transition-colors duration-200 ${
                  itemIsActive(item.href, pathname) ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-2">
            <a
              href="/connect"
              className="hidden items-center justify-center rounded-md bg-ink px-4 py-2 text-sm font-semibold text-surface transition-all duration-200 hover:opacity-80 md:inline-flex"
            >
              Connect
            </a>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((p) => !p)}
              className="relative flex h-9 w-9 items-center justify-center rounded-lg text-ink transition-colors hover:bg-ink/5 md:hidden"
            >
              <span className="relative block h-3 w-4" aria-hidden>
                <span
                  className="absolute left-0 h-[1.5px] w-full origin-center bg-current transition-transform duration-300 ease-in-out"
                  style={{ top: 0, transform: mobileOpen ? "translateY(5.25px) rotate(45deg)" : "none" }}
                />
                <span
                  className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current transition-opacity duration-300 ease-in-out"
                  style={{ opacity: mobileOpen ? 0 : 1 }}
                />
                <span
                  className="absolute left-0 h-[1.5px] w-full origin-center bg-current transition-transform duration-300 ease-in-out"
                  style={{ bottom: 0, transform: mobileOpen ? "translateY(-5.25px) rotate(-45deg)" : "none" }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <div
        aria-hidden={!mobileOpen}
        className="fixed inset-0 z-40 bg-surface-strong md:hidden"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 350ms ease",
        }}
      >
        <nav
          aria-label="Mobile Primary"
          className="flex h-full flex-col items-start justify-center px-8"
        >
          <ul className="w-full space-y-1">
            {navItems.map((item, i) => (
              <li
                key={item.href}
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "none" : "translateY(14px)",
                  transition: `opacity 400ms ${80 + i * 60}ms ease, transform 400ms ${80 + i * 60}ms ease`,
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 font-display text-4xl leading-tight transition-colors ${
                    itemIsActive(item.href, pathname) ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "none" : "translateY(14px)",
                transition: `opacity 400ms ${80 + navItems.length * 60}ms ease, transform 400ms ${80 + navItems.length * 60}ms ease`,
              }}
              className="pt-8"
            >
              <a
                href="/connect"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-md bg-ink px-8 py-4 text-sm font-semibold text-surface"
              >
                Connect
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
