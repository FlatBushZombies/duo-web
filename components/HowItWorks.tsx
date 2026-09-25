"use client"

import Image from "next/image"
import { UserPlus, SlidersHorizontal, PlayCircle, Clapperboard } from "lucide-react"

const STEP_ICONS = [
  <UserPlus key="connect" size={20} strokeWidth={2} />,
  <SlidersHorizontal key="swipe" size={20} strokeWidth={2} />,
  <PlayCircle key="watch" size={20} strokeWidth={2} />,
]



export default function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Connect Your Partner",
      body: "Create your couple profile and link in seconds. A shared code — zero friction.",
      image: "https://images.pexels.com/photos/6303546/pexels-photo-6303546.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      n: "02",
      title: "Swipe Independently",
      body: "Each partner swipes through a curated feed built around your individual taste.",
      image: "https://images.pexels.com/photos/215367/pexels-photo-215367.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      n: "03",
      title: "Watch What You Love",
      body: "Both swipe right on the same film — instant match notification. Press play.",
      image: "https://images.pexels.com/photos/7234244/pexels-photo-7234244.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]

  return (
    <section id="how-it-works" className="py-28 lg:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="reveal text-center mb-20">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold tracking-[0.25em] uppercase text-black bg-[#f6f7f9] border-2 border-[var(--line)] rounded-xl mb-6 shadow-[2px_3px_0px_rgba(30,29,25,0.98)]">
            <Clapperboard size={12} />
            How It Works
          </span>

          <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-tight mb-6">
            Three steps to your{" "}
            <span className="text-primary inline-block">
              perfect night in.
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            No more scrolling for 45 minutes. Duo makes the decision delightfully simple.
          </p>
        </div>

        {/* ── Steps grid ── */}
        <div className="relative grid md:grid-cols-3 gap-10 items-start">

          {/* Connector line — visible on md+ between cards */}
          <div
            aria-hidden
            className="hidden md:block absolute top-[104px] left-[calc(33.333%+20px)] right-[calc(33.333%+20px)] h-[2px] border-t-2 border-dashed border-black/20 z-0 pointer-events-none"
          />

          {steps.map((step, i) => (
            <div
              key={step.n}
              className="reveal step-card relative z-10 bg-white rounded-[26px] border-[3px] border-[var(--line)] shadow-[7px_8px_0px_rgba(30,29,25,0.98)] flex flex-col overflow-hidden"
              style={{ transitionDelay: `${i * 120}ms` }}
            >

              {/* Image */}
              <div className="relative h-52 overflow-hidden border-b-[3px] border-[var(--line)] shrink-0">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">

                {/* Step badge — icon + number */}
                <div
                  className={`inline-flex items-center gap-2 self-start px-4 py-2 mb-5 bg-primary text-white font-serif font-bold rounded-xl border-2 border-[var(--line)] shadow-[2px_3px_0px_rgba(30,29,25,0.98)]`}
                >
                  {STEP_ICONS[i]}
                  <span className="text-sm tracking-wider">{step.n}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-xl text-black mb-3">
                  {step.title}
                </h3>

                {/* Body */}
                <p className="text-muted-foreground leading-relaxed">
                  {step.body}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}