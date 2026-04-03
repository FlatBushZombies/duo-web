"use client"

import Image from "next/image"
import { Star } from "lucide-react"

export function Testimonials() {
  const reviews = [
    {
      stars: 5,
      quote: "We used to spend 45 minutes arguing about what to watch. DateFlix solved that completely. Now it's the best part of our Friday night.",
      name: "Sarah & Jake",
      meta: "Together 3 years · 214 movies matched",
      image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=200&h=200&fit=crop",
      rotation: "-rotate-2",
    },
    {
      stars: 5,
      quote: "Long-distance and DateFlix is what keeps our movie nights alive. We swipe from different countries and enjoy films together.",
      name: "Marcus & Léa",
      meta: "Long distance · 89 movies matched",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
      rotation: "rotate-2",
    },
    {
      stars: 5,
      quote: "The AI learned we both secretly love terrible horror movies. No judgment, just matches. We're completely obsessed.",
      name: "Priya & Daniel",
      meta: "Newlyweds · 56 movies matched",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      rotation: "-rotate-1",
    },
  ];

  return (
    <section className="py-28 lg:py-36 bg-[#f6f7f9]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 text-xs font-bold tracking-[0.25em] uppercase text-black bg-white border border-black/80 rounded-xl mb-6 shadow-[2px_3px_0px_black] rotate-[-2deg]">
            Couples Love It
          </span>

          <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
            Real reviews from{" "}
            <span className="text-primary inline-block -rotate-2">
              real movie nights.
            </span>
          </h2>
        </div>

        {/* Cards — pt-6 gives headroom for the protruding pin */}
        <div className="grid md:grid-cols-3 gap-10 items-start pt-6">

          {reviews.map((r, i) => (
            <div
              key={i}
              className={`relative bg-white p-7 rounded-2xl border-2 border-black shadow-[6px_8px_0px_black] ${r.rotation}`}
            >

              {/* Pin — protrudes above the card top-right corner */}
              <div className="absolute -top-8 right-4 z-10 w-14 h-14 pointer-events-none">
                <Image
                  src="/redpin.png"
                  alt=""
                  width={56}
                  height={56}
                  className="object-contain drop-shadow-lg"
                />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5 bg-black/5 px-3 py-2 rounded-lg w-fit border border-black/10">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-black leading-relaxed mb-7 text-lg">
                &ldquo;{r.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-black flex-shrink-0">
                  <Image src={r.image} alt={r.name} width={48} height={48} className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-black">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.meta}</div>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}