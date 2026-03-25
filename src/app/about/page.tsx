"use client";

import Image from "next/image";
import { useState } from "react";
import { SharedInquirySection } from "@/components/shared-inquiry-section";

const coachingTypes = [
  {
    title: "Life & Relationship",
    paragraphs: [
      "I will support you and counsel you as an individual and help you to unpack the various components of your life and the relationships that inform your reality.",
    ],
    outcomes: [
      "Are you struggling with a narcissistic parent or old wounds?",
      "Are you into a partnership but feel you are taken for granted or not being truly seen?",
      "Are you truly seen? Acknowledged? Accepted? Cherished?",
      "Do you wish to have a better life work balance?",
      "Are you able to self-care? Express yourself creatively?",
    ],
    closing: [
      "You can make key shifts in your lifestyle. You can have healthier relationships. You can let go of self-limiting voices and overcome fear-based inertia. It starts with you.",
      "I offer you tools, approaches, and perspective that can get you out of the feedback loop. I help you gain clarity, find your own truth, and work your way forward so you can be proactive and thrive. And if you are working through painful confusion I will support you however you need for however long you need it.",
      "Tell me your story. Be heard. Direct the change.",
    ],
  },
  {
    title: "Business, Start-up & Non-Profit",
    paragraphs: [
      "Let's break things down. What is it you want to accomplish? Who is it for? Why do you want to bring it about? What will it take?",
      "Whether it's for-profit or not-for-profit – many principles of success are the same.",
      "Together we will:",
    ],
    outcomes: [
      "Explore and clarify your vision.",
      "Develop a strategy.",
      "Identify a tactical plan.",
      "Monitor that plan and course-correct as needed.",
    ],
    closing: [
      "Together we identify your market/audience, develop your brand and communicate your uniqueness. Demonstrate benefits and efficacy.",
      "Let's bring it to life!",
    ],
  },
  {
    title: "Career",
    paragraphs: [
      "If you are job searching and are in need of a career coach, I will help you identify where you are and where you want to be. We will review your experience, talents, and skills and explore how you can move forward and leverage up in your current career or stage a shift to a new direction.",
      "I will help prepare your interviewing skills, assist with utilizing LinkedIn and help you research any industry or field and determine if you need additional training or experience. I will review and help you edit your resume and cover letters, and advise you on how to get on an employers radar and expand your network.",
      "I will also help you identify your passions. People tend to be happier and have better outcomes when they pursue things that they care about. If you feel stuck and can't see how to get from where you are to somewhere else, I can help get out of the stuckness. I'm really good at helping find new possibilities you haven't considered and supporting you through that.",
    ],
    outcomes: [],
    closing: [],
  },
  {
    title: "Creative Integration Coaching™",
    paragraphs: [
      "I work with a lot of artists and creatives — people who are involved with spiritual development, health and wellness, academics, creative entrepreneurs – from yogini's to urban gardeners, from avante garde digital artists to singer-songwriters, from spiritual guides to PhD candidates.",
      "People who create original work, and form a life composite that focuses on more autonomy, living on their own terms grapple with a unique set of challenges.",
      "\u201CAre What They Do\u201D people seek and require a particular kind of, and emphasis on \u2013 integration. Figuring out how to be self-generative, to create the work or experience or development \u2013 and generate the resources.",
      "If you are an artist I will help you figure out where you are with your work and professional and artistic life \u2013 how to expand your audience reach or generate resources \u2013 I can help you edit your polemic, find a patron or launch a new social strategy.",
      "If you are working on a dissertation, or starting a school of some kind, or creating a community resource for organic food or herbal remedies, or a healer creating transformative experiences for others \u2013 I will assist you forming a fully integrated life while working on your authentic voice and body of work.",
      "You can be fully integrated.",
    ],
    outcomes: [],
    closing: [],
  },
];

const process = [
  {
    step: "01",
    title: "Collaborative",
    description:
      "I become \u201CTeam-You\u201D. My role is to help you figure out what you need to figure out \u2013 and then go from there.",
  },
  {
    step: "02",
    title: "Safe Space",
    description:
      "I provide a safe container for you to share. I am non-judgmental. I ask a lot of questions and am an active listener. I will be proactive and fully engaged with you. It\u2019s your time and you are always in charge.",
  },
  {
    step: "03",
    title: "Whole Being",
    description:
      "While it is useful at times to compartmentalize aspects of your life, I will always see you as a whole being. Wherever you go, there you are.",
  },
  {
    step: "04",
    title: "Ongoing",
    description:
      "I provide that place where you can go to be heard and to explore any aspect of your life \u2014 for a specific focus area, or for everything. I have gotten people through grief, divorces, PhD dissertations and so much more.",
  },
];

const sessionDetails = [
  {
    label: "Scheduling",
    value: "Flexible",
    detail:
      "I do scheduled times and can offer a regular slot. I\u2019m also very flexible and can often be available on short notice.",
  },
  {
    label: "Duration",
    value: "As needed",
    detail:
      "Sessions typically run 1\u20132 hours. But sometimes you just need 17 minutes to get realigned \u2014 I track time and bill at the end of the month.",
  },
  {
    label: "Format",
    value: "Phone or in person",
    detail:
      "Just hop on the phone or meet in person \u2014 whatever works for you and the moment.",
  },
  {
    label: "Availability",
    value: "Short notice welcome",
    detail:
      "I\u2019m a bit like an old fashioned \u2018country doc\u2019 with his black bag down the road. I know you, and I\u2019m here when you need me.",
  },
  {
    label: "Commitment",
    value: "Your pace",
    detail:
      "Some people work with me for a specific focus area. Others for their entire life stream. You set the pace and scope.",
  },
  {
    label: "Billing",
    value: "End of month",
    detail:
      "I track time across all interactions \u2014 long sessions, short check-ins \u2014 and bill at the end of the month.",
  },
];

function AccordionItem({
  title,
  paragraphs,
  outcomes,
  closing,
  index,
}: {
  title: string;
  paragraphs: string[];
  outcomes: string[];
  closing: string[];
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className={index === 0 ? "" : "border-t border-outline"}>
      <button
        className="group flex w-full cursor-pointer items-center justify-between gap-8 py-6 text-left"
        onClick={() => setOpen((p) => !p)}
      >
        <h3
          className={`font-display text-xl transition-colors sm:text-2xl ${
            open ? "text-accent" : "text-ink"
          }`}
        >
          {title}
        </h3>
        <span
          className="shrink-0 font-display text-2xl text-muted transition-transform duration-400"
          style={{ transform: open ? "rotate(45deg)" : "none" }}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? "1200px" : "0",
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 900ms cubic-bezier(0.16,1,0.3,1), opacity 700ms ease",
        }}
      >
        <div className="pb-8 pt-2 space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="max-w-2xl text-sm leading-relaxed text-muted">{p}</p>
          ))}
          {outcomes.length > 0 && (
            <ul className="space-y-2">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-0.5 text-accent">—</span>
                  {o}
                </li>
              ))}
            </ul>
          )}
          {closing.map((p, i) => (
            <p key={i} className="max-w-2xl text-sm leading-relaxed text-muted">{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="w-full px-4 pb-10 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">About</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            My practice is called Life is Change because we are temporal creatures &ndash; we experience time.
          </h1>
          <p className="mt-6 max-w-2xl border-t border-outline pt-6 text-base leading-relaxed text-muted sm:text-lg">
            Life is always happening and change is always taking place whether we remain aware of it or not. I help you to set your intentions and direct the change in your life.
          </p>
        </div>
      </section>

      <section className="w-full px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative aspect-[16/9] min-h-[300px] overflow-hidden rounded-2xl border border-outline sm:min-h-[340px]">
            <Image
              src="/sailboat.jpg"
              alt="Sailboat on open water"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-r from-ink/35 via-transparent to-ink/20" />
          </div>
        </div>
      </section>
      {/* Intro copy */}
      <section className="w-full px-4 pb-16 pt-0 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-t border-outline pt-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-4 text-sm leading-relaxed text-muted">
              <p>
                Life is always happening and change is always taking place whether we remain aware of it or not. I help you to set your intentions and direct the change in your life.
              </p>
              <p>
                I have worked effectively with and counseled a wide range of persons, including people of all genders, of varying ethnic and cultural backgrounds, ranging in age, and with a diverse set of interests and circumstances living all over the world.
              </p>
              <p>
                As human beings we are often extreme creatures of habit – and often continue to do that which is most familiar over that which is most beneficial. Many of us are imbued with contradictions – however those contradictions are also part of what make us interesting and reflect the richness of our individuality.
              </p>
            </div>
            <div>
              <ul className="space-y-3 text-sm text-muted">
                {[
                  "You can live with purpose.",
                  "You can bring things from your imagination to life.",
                  "You can overcome inertia.",
                  "You can let go of self-limiting beliefs.",
                  "You are more than your story.",
                  "You are more than all the things you are attached to and that are attached to you. You are a unique being capable of letting go of that which does not serve you and opening space for your true self to emerge.",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 text-accent">—</span>
                    {line}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                It is possible to attain health and balance with mind, body and soul, to develop positive relationships and to spend your time doing things that matter to you. You can thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Kinds of Coaching — accordion */}
      <section id="4-kinds-of-coaching" className="w-full scroll-mt-24 bg-surface-warm px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink/40">What I offer</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
              I Offer 4 Kinds of Coaching:
            </h2>
          </div>
          <div className="rounded-lg bg-surface-strong px-6 py-2 shadow-sm shadow-ink/5 sm:px-10">
            {coachingTypes.map((ct, i) => (
              <AccordionItem key={ct.title} {...ct} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* How I Work — numbered steps grid */}
      <section id="how-i-work" className="w-full scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">How I Work</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
              There are many modalities that involve counseling, personal dialog and one-on-one interaction.
            </h2>
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

      {/* Why Coaching — full-bleed dark split */}
      <section id="why-coaching" className="w-full scroll-mt-24 pb-0">
        <div className="bg-ink text-white lg:grid lg:grid-cols-[1fr_1.5fr]">
          <div className="relative aspect-4/3 w-full lg:aspect-auto lg:h-full">
            <Image
              src="/team-putting-hands-together-faded-b&w.jpg"
              alt="Team hands joined together"
              fill
              className="object-cover opacity-45"
            />
          </div>
          <div className="px-8 py-16 sm:px-16 lg:px-20 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">Why Coaching</p>
            <h2 className="mt-4 font-display text-3xl leading-snug sm:text-4xl lg:text-5xl">
              Coaching is just one label for a broad range of one-on-one dialog.
            </h2>
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-white/60">
              <p>
                Most people benefit from some form of one-on-one counseling. Our lives are filled with different relationships and those dynamics can be provocative. It&rsquo;s hard sometimes even for well-intended friends and family to be objective. They have their own baggage and pre-existing views of how they already see you.
              </p>
              <p>
                A good one-on-one dialog offers a safe space where you can tell your story without judgment and be acknowledged. It provides a layer of objectivity while also being able to grasp the unique conditions of your life.
              </p>
              <p className="font-medium text-white/90">
                Coaching is also useful for practical things like career, business and non-profit aspirations. An effective coach has a lot of experience and information and can help you create a strategic plan. The best practitioners possess a deep understanding of the human condition and offer empathy, compassion, and a belief in your capacity to thrive.
              </p>
            </div>
            <a
              href="/connect"
              className="mt-10 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-surface"
            >
              Start the conversation
            </a>
          </div>
        </div>
      </section>

      {/* Session Details — labeled rows */}
      <section id="session-details" className="w-full scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Session Details</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">I offer maximum flexibility.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              I&rsquo;m a bit like an old fashioned &lsquo;country doc&rsquo; with his black bag down the road. I know you, I&rsquo;m very flexible and can often be on short notice, or just jump on the phone for however long you need. I have a great 1-2 hour session with someone on a Monday and they are charged up and after a few days they get wobbly and need a &lsquo;booster&rsquo;, so we just hop on the phone for 17 minutes and get realigned. I track time and bill at the end of the month.
            </p>
          </div>
          <div className="divide-y divide-outline">
            {sessionDetails.map((detail) => (
              <div key={detail.label} className="grid items-baseline gap-6 py-5 sm:grid-cols-[12rem_16rem_1fr]">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{detail.label}</p>
                <p className="font-display text-lg text-ink">{detail.value}</p>
                <p className="text-sm text-muted">{detail.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SharedInquirySection />
    </>
  );
}
