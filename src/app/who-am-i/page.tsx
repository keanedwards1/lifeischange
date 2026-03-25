import Image from "next/image";
import { SharedInquirySection } from "@/components/shared-inquiry-section";

const values = [
  {
    title: "Team-You",
    description:
      "I become Team-You. My role is to help you figure out what you need to figure out, and then go from there.",
  },
  {
    title: "Safe container",
    description:
      "I create a safe container and bring empathy and compassion to everyone I greet. I am non-judgmental, discreet, and I listen closely.",
  },
  {
    title: "Not one-size-fits-all",
    description:
      "I am not a one-size-fits-all or systems person. I meet you where you are and work with the realities of your life.",
  },
  {
    title: "Practical movement",
    description:
      "I help you sort through complexity, get clear, and move forward in ways that are practical, grounded, and true to you.",
  },
];

const mainNarrative = [
  "Passion for this work comes from a real curiosity about people and how they experience life. One of the most useful things I bring is the ability to quickly understand what is actually going on beneath the surface.",
  "Counseling has been part of my life for a long time. The work is compassionate, non-judgmental and discreet, with a safe space where you can be honest.",
  "No one-size-fits-all method here. We work from where you are, sort through complexity, and identify what is most useful for your situation.",
  "My background includes a Masters in creative arts, 12 years as a tech start-up CEO, board leadership in arts and wellness nonprofits, and consulting across nonprofit and for-profit organizations.",
  "Years of coaching people from many walks of life, along with study in philosophy, religion, yoga, meditation, mindfulness and wellness, inform how I help people navigate emotions, relationships, purpose and change.",
];

export default function WhoAmIPage() {
  return (
    <>
      <section className="relative h-[44vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/rowboat.jpg"
          alt="Boat on still water"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 pb-10 sm:px-10 lg:px-16">
          <h1 className="font-display text-5xl text-white sm:text-6xl">Who Am I?</h1>
        </div>
      </section>

      <section className="w-full px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-[1fr_1.8fr] lg:gap-20">
            <div className="mb-16 lg:mb-0">
              <div className="sticky top-24 p-4 lg:p-6">
                <div className="overflow-hidden rounded-md">
                  <div className="relative aspect-3/4 w-full">
                    <Image
                      src="/group-walking-over-sunset-pass.jpg"
                      alt="Walking across a ridge at sunset"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pb-40">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Who Am I?</p>
              <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
                I have been helping people navigate all my life.
              </h2>
              <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
                {mainNarrative.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-16 border-t border-outline pt-12">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">How I Show Up</p>
                <h3 className="mt-3 font-display text-2xl text-ink">What you can expect from me.</h3>
                <div className="mt-10 space-y-10">
                  {values.map((value, i) => (
                    <div key={value.title} className="grid gap-2 sm:grid-cols-[auto_1fr] sm:gap-8">
                      <span className="select-none font-display text-4xl leading-none text-ink/8">
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

              <div className="mt-28">
                <div className="bg-surface-warm px-8 py-12 sm:px-12 lg:px-14">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink/40">My Name Is Richard.</p>
                  <h3 className="mt-3 font-display text-2xl text-ink">I believe you can thrive.</h3>
                  <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink/70">
                    <p>
                      Grew up in Philadelphia and spent most of life in cities including NYC, LA and SF. These days, home is a small town among redwoods about 20 miles from SF.
                    </p>
                    <p>
                      Compassionate, open-minded, analytical and creative, with practical experience that supports real change. Looking forward to helping you sort through complexity, harness your energy, and move through doubt, fear or inertia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SharedInquirySection />
    </>
  );
}
