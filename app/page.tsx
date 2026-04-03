"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Nav from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";

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
  const items = [
    "Swipe to Match",
    "Couples Movie Nights",
    "AI Recommendations",
    "Real-Time Sync",
    "Every Genre",
    "2.1M Couples",
    "No More Arguments",
    "Find Tonight's Film"
  ];

  return (
    <div className="py-10 overflow-hidden bg-[#f6f7f9]">

      <div className="flex animate-[ticker_35s_linear_infinite] items-center">

        {[...items, ...items, ...items, ...items].map((item, i) => (

          <div
            key={i}
            className="flex items-center gap-4 px-5 py-2.5 mx-3 rounded-xl border-2 border-black bg-white whitespace-nowrap shadow-[3px_4px_0px_black]"
          >
            <span className="text-sm font-medium text-black">
              {item}
            </span>

            {/* Diamond */}
            <span className="text-primary text-sm">◆</span>
          </div>

        ))}

      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}


/* ─── TESTIMONIALS ──────────────────────────────────────────────────────────── */

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
        <HowItWorks/>
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
