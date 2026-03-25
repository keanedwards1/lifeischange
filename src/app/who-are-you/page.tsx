import Image from "next/image";
import { SharedInquirySection } from "@/components/shared-inquiry-section";

const prompts = [
  "Are you grappling with relationship matters: family, friends, work-place or romance?",
  "Do you have a lot of reasons why you can\u2019t\u2026?",
  "Are you one of those people who did what you were supposed to do but feel there is a creative muse needing to be nourished inside you?",
  "Are you using dualistic thought and value paradigms? (success/failure, good/bad, worthy/unworthy?)",
  "Do you say the words \u201Csupposed to\u201D and \u201Cshould\u201D a lot?",
];

export default function WhoAreYouPage() {
  return (
    <>
      <section className="relative h-[68vh] min-h-[460px] w-full overflow-hidden">
        <Image
          src="/sailboat-from-crowsnest.jpg"
          alt="Sailboat seen from above at sea"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/35 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 pb-14 sm:px-10 sm:pb-18 lg:px-16">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Who Are You?
            </h1>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-outline bg-surface-strong p-8 shadow-sm shadow-ink/5 sm:p-10 space-y-4">
            <h2 className="font-display text-4xl text-ink">It&rsquo;s never too late.</h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted">
              For some people &ndash; actively working on yourself and addressing issues and struggles can be terrifying.
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-muted">
              While we are all responsible for creating our own lives, we are not however, all in the same circumstances.
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-muted">
              My role is to help invoke in you a deep sense of adventure and demonstrate the fertile possibilities. Yes, sometimes life gets messy and our vision gets blurry — but life can also be fantastic and rewarding. It&rsquo;s never too late.
            </p>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-outline">
            <Image
              src="/compass.jpg"
              alt="Compass on wooden surface"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/55 to-transparent" />
          </div>
        </div>
      </section>

      <section className="w-full bg-ink px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="mb-12 text-xs font-semibold uppercase tracking-[0.25em] text-white/35">Questions to Consider</p>
          <div className="space-y-0 divide-y divide-white/10">
            {prompts.map((line) => (
              <p
                key={line}
                className="font-display py-6 text-2xl leading-snug text-white/70 transition-colors duration-200 hover:text-white sm:text-3xl"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-outline">
            <Image
              src="/rowboat.jpg"
              alt="Small rowboat on calm water"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/65 to-transparent" />
          </div>
          <div className="rounded-2xl border border-outline bg-white/70 p-8 shadow-sm shadow-ink/5 sm:p-10 space-y-4 text-base leading-relaxed text-ink/85">
            <p>
              We all know deep down that we can&rsquo;t control everything and everyone around us. What we can do is identify patterns &ndash; we can aim ourselves in a direction and take hold of our lives. We can put a stone down, then another and another, and build a path forwards.
            </p>
            <p>
              After a time, we discover that we are no longer in the same place we started. We can measure a distance traveled. We can see new things on the horizon drawing us toward them.
            </p>
            <p>
              You can deepen your truth and live a conscious life. We are forever recalibrating and making adjustments. You can experience more joy.
            </p>
          </div>
        </div>
      </section>

      <SharedInquirySection />
    </>
  );
}
