"use client"

import Image from "next/image"

export default function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Connect Your Partner",
      body: "Create your couple profile and link in seconds. A shared code — zero friction.",
      image: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=600&h=400&fit=crop",
    },
    {
      n: "02",
      title: "Swipe Independently",
      body: "Each partner swipes through a curated feed built around your individual taste.",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop",
    },
    {
      n: "03",
      title: "Watch What You Love",
      body: "Both swipe right on the same film — instant match notification. Press play.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=400&fit=crop",
    },
  ]

  return (
    <section id="how-it-works" className="py-28 lg:py-36 bg-[#f6f7f9]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 text-xs font-bold tracking-[0.25em] uppercase text-black bg-white border border-black/80 rounded-xl mb-6 shadow-[2px_3px_0px_black] rotate-[-2deg]">
            How It Works
          </span>

          <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-tight mb-6">
            Three steps to your{" "}
            <span className="text-primary inline-block -rotate-2">
              perfect night in.
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            No more scrolling for 45 minutes. DateFlix makes the decision delightfully simple.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 items-start">

          {steps.map((step) => (
            <div
              key={step.n}
              className="relative bg-white rounded-2xl border-2 border-black shadow-[6px_8px_0px_black]"
            >

              {/* Image */}
              <div className="relative h-52 overflow-hidden border-b-2 border-black rounded-t-2xl">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-7">

                {/* Step Number */}
                <div className="inline-flex items-center justify-center px-4 py-2 mb-5 bg-primary text-white font-serif font-bold rounded-xl border-2 border-black shadow-[2px_3px_0px_black] -rotate-2">
                  {step.n}
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