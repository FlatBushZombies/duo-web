"use client"

import Image from "next/image"
import MovieCard from "./MovieCard";

export function Features() {
  const features = [
    {
      label: "Smart Matching",
      title: "Swipe, match, never argue again.",
      body: "Our Tinder-style swiping experience means both of you decide what to watch — without endless scrolling or guilty compromises.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
      tags: ["Real-time sync", "Instant alerts", "Match history"],
    },
    {
      label: "AI Recommendations",
      title: "Learns your couple's unique taste.",
      body: "The more you swipe, the smarter DateFlix gets. Our AI builds a shared taste profile for your relationship.",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop",
      tags: ["Machine learning", "Genre analysis", "Mood-based picks"],
    },
    {
      label: "Cross-Platform",
      title: "Always in sync, wherever you are.",
      body: "Long distance or side by side — DateFlix keeps your movies and matches synced across every device in real time.",
      image: "https://images.unsplash.com/photo-1512070679279-8988d32161be?w=800&h=600&fit=crop",
      tags: ["iCloud Sync", "Cross-device", "Offline mode"],
    },
  ];

  return (
    <section id="features" className="py-28 lg:py-36 bg-[#f6f7f9]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-2 text-xs font-bold tracking-[0.25em] uppercase text-black bg-white border border-black/80 rounded-xl mb-6 shadow-[2px_3px_0px_black] rotate-[-2deg]">
            Features
          </span>

          <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
            Built for couples who{" "}
            <span className="text-primary inline-block -rotate-2">
              love cinema.
            </span>
          </h2>
        </div>

        {/* Features */}
        <div className="space-y-28">

          {features.map((f, i) => (
            <div
              key={i}
              className="grid lg:grid-cols-2 gap-14 items-center"
            >

              {/* IMAGE BLOCK */}
              <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div
                  className="relative rounded-2xl overflow-hidden border-2 border-black"
                  style={{ boxShadow: "6px 8px 0px black" }}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={f.image}
                      alt={f.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Floating Cards — only on first feature */}
                {i === 0 && (
                  <>
                    <div className="absolute -bottom-8 -left-8 hidden lg:block">
                      <MovieCard
                        title="Dune"
                        year="2021"
                        rating="8.0"
                        genre="Sci-Fi"
                        image="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop"
                        rotation={-6}
                        scale={0.7}
                      />
                    </div>
                    <div className="absolute -top-6 -right-6 hidden lg:block">
                      <MovieCard
                        title="Interstellar"
                        year="2014"
                        rating="8.6"
                        genre="Sci-Fi"
                        image="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=600&fit=crop"
                        rotation={8}
                        scale={0.65}
                        isMatch
                      />
                    </div>
                  </>
                )}
              </div>

              {/* CONTENT */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>

                {/* Label */}
                <span className="inline-block px-4 py-2 text-xs font-bold tracking-[0.2em] uppercase text-black bg-white border border-black/80 rounded-xl mb-6 shadow-[2px_3px_0px_black] rotate-[-2deg]">
                  {f.label}
                </span>

                {/* Title */}
                <h3 className="font-serif font-bold text-3xl md:text-4xl text-black leading-tight mb-5">
                  {f.title}
                </h3>

                {/* Body */}
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {f.body}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {f.tags.map(t => (
                    <span
                      key={t}
                      className="px-4 py-2 bg-white border border-black/80 rounded-xl text-sm font-medium shadow-[2px_3px_0px_black]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}