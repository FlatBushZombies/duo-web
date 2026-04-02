"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Nav from "@/components/Navbar";
import Hero from "@/components/Hero";

/* ─── SCROLL REVEAL HOOK ───────────────────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── ICONS ──────────────────────────────────────────────────────────────────── */
const Apple = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const GooglePlay = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.372 2.372 0 01-.473-.399A2.52 2.52 0 012.5 20.13V3.87c0-.637.232-1.24.636-1.657.151-.156.315-.29.473-.399zm.848-.548l11.35 6.545-2.873 2.873L3.61 1.36c.282-.11.567-.137.847-.094zm11.35 13.28L4.457 21.09c-.28.043-.565.016-.847-.094l9.324-9.324 2.873 2.873zM16.96 7.11l3.545 2.045a2.503 2.503 0 010 4.33L16.96 15.53l-3.168-3.168v-.724L16.96 7.11z"/>
  </svg>
);

const Heart = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const Star = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
    <path d="M3 8l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Play = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

/* ─── MOVIE CARD COMPONENT ──────────────────────────────────────────────────── */
function MovieCard({ 
  title, 
  year, 
  rating, 
  genre, 
  image,
  isMatch = false,
  rotation = 0,
  scale = 1,
  className = ""
}: { 
  title: string;
  year: string;
  rating: string;
  genre: string;
  image: string;
  isMatch?: boolean;
  rotation?: number;
  scale?: number;
  className?: string;
}) {
  return (
    <div 
      className={`relative w-44 h-64 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 ${className}`}
      style={{ transform: `rotate(${rotation}deg) scale(${scale})` }}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/90 bg-white/20 backdrop-blur-sm rounded-full mb-2">
          {genre}
        </span>
        <h4 className="font-serif font-bold text-white text-lg leading-tight mb-1">{title}</h4>
        <div className="flex items-center gap-2 text-white/70 text-xs">
          <span>{year}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-400" />
            {rating}
          </span>
        </div>
      </div>

      {/* Match Overlay */}
      {isMatch && (
        <div className="absolute inset-0 bg-primary/95 flex flex-col items-center justify-center animate-pulse">
          <Heart className="w-10 h-10 text-white mb-2" />
          <span className="font-serif font-bold text-white text-xl tracking-wide">MATCH!</span>
        </div>
      )}
    </div>
  );
}





/* ─── BRANDS TICKER ──────────────────────────────────────────────────────────── */
function Ticker() {
  const items = ["Swipe to Match", "Couples Movie Nights", "AI Recommendations", "Real-Time Sync", "Every Genre", "2.1M Couples", "No More Arguments", "Find Tonight&apos;s Film"];
  
  return (
    <div className="py-6 border-y border-border bg-muted/30 overflow-hidden">
      <div className="flex animate-[ticker_30s_linear_infinite]">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-4 px-8 text-sm font-medium text-muted-foreground whitespace-nowrap">
            {item.replace("&apos;", "'")}
            <span className="text-primary/40">◆</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* ─── HOW IT WORKS ───────────────────────────────────────────────────────────── */
function HowItWorks() {
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
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="reveal inline-block text-xs font-bold tracking-[0.25em] uppercase text-primary mb-4">
            How It Works
          </span>
          <h2 className="reveal font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 text-balance">
            Three steps to your{" "}
            <em className="text-primary not-italic">perfect night in.</em>
          </h2>
          <p className="reveal text-lg text-muted-foreground max-w-md mx-auto">
            No more scrolling for 45 minutes. DateFlix makes the decision delightfully simple.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div 
              key={step.n} 
              className="reveal group relative bg-muted/30 rounded-3xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-8 -mt-12">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white font-serif font-bold text-lg mb-6 shadow-lg">
                  {step.n}
                </div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── STATS ───────────────────────────────────────────────────────────────────── */
function Stats() {
  const stats = [
    { num: "2.1M", label: "Couples using DateFlix" },
    { num: "18M+", label: "Movies matched & watched" },
    { num: "4.9★", label: "Average App Store rating" },
  ];
  
  return (
    <div className="max-w-5xl mx-auto px-6 -mt-1">
      <div className="reveal bg-foreground rounded-3xl p-10 lg:p-14">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="font-serif font-bold text-5xl lg:text-6xl text-white mb-2">
                {s.num}
              </div>
              <div className="text-white/60 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── FEATURES ──────────────────────────────────────────────────────────────── */
function Features() {
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
      title: "Learns your couple&apos;s unique taste.",
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
    <section id="features" className="py-24 lg:py-32 bg-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="reveal inline-block text-xs font-bold tracking-[0.25em] uppercase text-primary mb-4">
            Features
          </span>
          <h2 className="reveal font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
            Built for couples who{" "}
            <em className="text-primary not-italic">love cinema.</em>
          </h2>
        </div>

        <div className="space-y-24">
          {features.map((f, i) => (
            <div 
              key={i} 
              className={`reveal grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Floating movie cards for first feature */}
                {i === 0 && (
                  <>
                    <div className="absolute -bottom-6 -left-6 hidden lg:block">
                      <MovieCard
                        title="Dune"
                        year="2021"
                        rating="8.0"
                        genre="Sci-Fi"
                        image="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop"
                        rotation={-5}
                        scale={0.7}
                      />
                    </div>
                    <div className="absolute -top-4 -right-4 hidden lg:block">
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

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
                  {f.label}
                </span>
                <h3 className="font-serif font-bold text-3xl md:text-4xl text-foreground leading-tight mb-5">
                  {f.title.replace("&apos;", "'")}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {f.body}
                </p>
                <div className="flex flex-wrap gap-3">
                  {f.tags.map(t => (
                    <span key={t} className="px-4 py-2 bg-white border border-border rounded-full text-sm font-medium text-muted-foreground">
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
  );
}

/* ─── TESTIMONIALS ──────────────────────────────────────────────────────────── */
function Testimonials() {
  const reviews = [
    {
      stars: 5,
      quote: "We used to spend 45 minutes arguing about what to watch. DateFlix solved that completely. Now it's the best part of our Friday night.",
      name: "Sarah & Jake",
      meta: "Together 3 years · 214 movies matched",
      image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=200&h=200&fit=crop",
    },
    {
      stars: 5,
      quote: "Long-distance and DateFlix is what keeps our movie nights alive. We swipe from different countries and enjoy films together.",
      name: "Marcus & Léa",
      meta: "Long distance · 89 movies matched",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    },
    {
      stars: 5,
      quote: "The AI learned we both secretly love terrible horror movies. No judgment, just matches. We're completely obsessed.",
      name: "Priya & Daniel",
      meta: "Newlyweds · 56 movies matched",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="reveal inline-block text-xs font-bold tracking-[0.25em] uppercase text-primary mb-4">
            Couples Love It
          </span>
          <h2 className="reveal font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
            Real reviews from{" "}
            <em className="text-primary not-italic">real movie nights.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div 
              key={i} 
              className="reveal bg-muted/30 rounded-3xl p-8 border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-8 text-lg">
                &ldquo;{r.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image src={r.image} alt={r.name} width={48} height={48} className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING ──────────────────────────────────────────────────────────────── */
const PLANS = [
  {
    name: "Free",
    price: { mo: 0, yr: 0 },
    desc: "Everything you need to start matching movies with your partner.",
    cta: "Get Started Free",
    featured: false,
    features: [
      { t: "Up to 20 swipes/day", ok: true },
      { t: "Basic movie matching", ok: true },
      { t: "Match history (last 10)", ok: true },
      { t: "iOS & Android app", ok: true },
      { t: "AI recommendations", ok: false },
      { t: "Unlimited swipes", ok: false },
    ],
  },
  {
    name: "Couple",
    price: { mo: 4.99, yr: 3.99 },
    desc: "The full DateFlix experience for couples who love movies.",
    cta: "Start Free Trial",
    featured: true,
    badge: "Most Popular",
    features: [
      { t: "Unlimited swipes", ok: true },
      { t: "Advanced matching", ok: true },
      { t: "Full match history", ok: true },
      { t: "AI recommendations", ok: true },
      { t: "Streaming availability", ok: true },
      { t: "Priority support", ok: true },
    ],
  },
  {
    name: "Cinephile",
    price: { mo: 9.99, yr: 7.99 },
    desc: "For couples who take their movie nights seriously.",
    cta: "Go Cinephile",
    featured: false,
    features: [
      { t: "Everything in Couple", ok: true },
      { t: "Curated watchlists", ok: true },
      { t: "Director & actor filters", ok: true },
      { t: "Date night planner", ok: true },
      { t: "Early access features", ok: true },
      { t: "Dedicated support", ok: true },
    ],
  },
];

function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-muted/20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="reveal inline-block text-xs font-bold tracking-[0.25em] uppercase text-primary mb-4">
            Pricing
          </span>
          <h2 className="reveal font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-5 text-balance">
            Simple pricing,{" "}
            <em className="text-primary not-italic">start for free.</em>
          </h2>
          <p className="reveal text-lg text-muted-foreground max-w-md mx-auto mb-8">
            No hidden fees. Cancel anytime. Your first movie night is on us.
          </p>

          {/* Toggle */}
          <div className="reveal inline-flex bg-white border border-border rounded-full p-1">
            {[
              { label: "Monthly", val: false },
              { label: "Annual", val: true, badge: "Save 20%" },
            ].map(({ label, val, badge }) => (
              <button
                key={label}
                onClick={() => setAnnual(val)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  annual === val 
                    ? "bg-primary text-white" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
                {badge && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    annual === val ? "bg-white/20 text-white" : "bg-primary text-white"
                  }`}>
                    {badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan, i) => {
            const price = annual ? plan.price.yr : plan.price.mo;
            return (
              <div
                key={plan.name}
                className={`reveal relative rounded-3xl overflow-hidden ${
                  plan.featured
                    ? "bg-foreground text-white scale-105 shadow-2xl z-10"
                    : "bg-white border border-border"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {plan.badge && (
                  <div className="absolute top-6 right-6 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {plan.badge}
                  </div>
                )}

                <div className="p-8">
                  <div className={`text-xs font-bold tracking-[0.2em] uppercase mb-3 ${
                    plan.featured ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {plan.name}
                  </div>

                  <div className="flex items-end gap-1 mb-2">
                    <span className="font-serif font-bold text-5xl">
                      {price === 0 ? "Free" : `$${price}`}
                    </span>
                    {price > 0 && (
                      <span className={`text-sm mb-2 ${plan.featured ? "text-white/60" : "text-muted-foreground"}`}>
                        /mo
                      </span>
                    )}
                  </div>
                  {annual && price > 0 && (
                    <div className={`text-xs mb-4 ${plan.featured ? "text-white/50" : "text-muted-foreground"}`}>
                      Billed ${(price * 12).toFixed(0)}/year
                    </div>
                  )}

                  <p className={`text-sm leading-relaxed mb-6 ${
                    plan.featured ? "text-white/70" : "text-muted-foreground"
                  }`}>
                    {plan.desc}
                  </p>

                  <div className={`h-px mb-6 ${plan.featured ? "bg-white/10" : "bg-border"}`} />

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f.t} className="flex items-center gap-3">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          f.ok
                            ? plan.featured
                              ? "bg-primary text-white"
                              : "bg-primary/10 text-primary"
                            : plan.featured
                              ? "bg-white/10 text-white/30"
                              : "bg-muted text-muted-foreground/50"
                        }`}>
                          {f.ok ? <Check /> : <span className="w-2 h-0.5 bg-current rounded" />}
                        </span>
                        <span className={`text-sm ${
                          f.ok
                            ? plan.featured ? "text-white" : "text-foreground"
                            : plan.featured ? "text-white/40" : "text-muted-foreground"
                        }`}>
                          {f.t}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#download"
                    className={`block text-center py-3.5 rounded-full text-sm font-semibold transition-all hover:scale-105 ${
                      plan.featured
                        ? "bg-white text-foreground hover:shadow-lg"
                        : "bg-foreground text-white hover:bg-foreground/90"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="reveal text-center text-xs text-muted-foreground mt-10">
          All paid plans include a 7-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}

/* ─── FAQ ────────────────────────────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(0);
  const items = [
    { q: "Is DateFlix free to use?", a: "Yes! DateFlix is free to download and use. We offer a premium plan with unlimited swipes, advanced AI recommendations, and exclusive couple features for $4.99/month." },
    { q: "How does movie matching work?", a: "Both partners swipe through movies independently. When you both swipe right on the same movie, you get an instant \"It's a Match!\" notification. No coordination needed — it's delightfully simple." },
    { q: "Which streaming services does DateFlix support?", a: "DateFlix shows you where each matched movie is available — Netflix, Disney+, Prime Video, Apple TV+, and more. We work with what you already have." },
    { q: "Does it work for long-distance couples?", a: "Absolutely. DateFlix was designed with long-distance couples in mind. You can swipe from anywhere in the world and your matches sync instantly." },
    { q: "How accurate are the AI recommendations?", a: "Our AI analyzes both partners' swipe patterns, genre preferences, and watch history to surface films you'll both likely enjoy. Most couples report finding their match within the first 5 swipes." },
  ];

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="reveal inline-block text-xs font-bold tracking-[0.25em] uppercase text-primary mb-4">
            FAQ
          </span>
          <h2 className="reveal font-serif font-bold text-4xl md:text-5xl text-foreground leading-tight">
            Frequently Asked{" "}
            <em className="text-primary not-italic">Questions.</em>
          </h2>
        </div>

        <div className="reveal bg-muted/30 rounded-3xl overflow-hidden border border-border">
          {items.map((item, i) => (
            <div key={i} className={`${i < items.length - 1 ? "border-b border-border" : ""}`}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-foreground">{item.q}</span>
                <span className={`w-7 h-7 rounded-full bg-white border border-border flex items-center justify-center text-primary text-lg flex-shrink-0 transition-transform ${
                  open === i ? "rotate-45" : ""
                }`}>
                  +
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                open === i ? "max-h-48 pb-6" : "max-h-0"
              }`}>
                <p className="px-6 text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ────────────────────────────────────────────────────────────────────── */
function CTA() {
  return (
    <section id="download" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="reveal relative rounded-[2.5rem] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&h=800&fit=crop"
              alt="Cinema"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-foreground/85" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center py-20 lg:py-28 px-8">
            <div className="inline-flex items-center gap-2 mb-8 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-white/80 font-medium">Free to Download</span>
            </div>

            <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 max-w-2xl mx-auto text-balance">
              Start your first{" "}
              <em className="text-primary not-italic">movie match tonight.</em>
            </h2>

            <p className="text-lg text-white/70 max-w-md mx-auto mb-10">
              Free to download. Just two people and a love of movies.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#"
                className="flex items-center gap-4 bg-white text-foreground px-7 py-4 rounded-2xl hover:bg-white/95 transition-all hover:scale-105 hover:shadow-2xl"
              >
                <Apple />
                <div className="text-left">
                  <div className="text-[10px] text-muted-foreground font-medium">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-7 py-4 rounded-2xl hover:bg-white/20 transition-all hover:scale-105"
              >
                <GooglePlay />
                <div className="text-left">
                  <div className="text-[10px] text-white/60 font-medium">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Heart className="w-4 h-4 text-white" />
          </div>
          <span className="font-serif font-bold text-lg text-foreground">
            Duo<span className="text-primary">App</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-8">
          {["Privacy Policy", "Terms of Service", "Contact"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © 2026 DuoApp. Made with <span className="text-primary">♥</span> for couples everywhere.
        </p>
      </div>
    </footer>
  );
}

/* ─── MAIN PAGE ──────────────────────────────────────────────────────────────── */
export default function DateFlixLanding() {
  useScrollReveal();

  return (
    <>
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(0.22, 0.68, 0, 1.2), transform 0.7s cubic-bezier(0.22, 0.68, 0, 1.2);
        }
        .reveal.in {
          opacity: 1;
          transform: none;
        }
      `}</style>
      
      <main className="min-h-screen bg-background">
        <Nav />
        <Hero />
        <Ticker />
        <HowItWorks />
        <Stats />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
