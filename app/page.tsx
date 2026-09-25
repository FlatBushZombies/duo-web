"use client";

import { useEffect } from "react";
import Nav from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

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
            className="flex items-center gap-4 px-5 py-2.5 mx-3 rounded-xl border-2 border-[var(--line)] bg-white whitespace-nowrap shadow-[3px_4px_0px_rgba(30,29,25,0.98)]"
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
        <Stats />
        <Ticker />
        <HowItWorks/>
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA/>
        <Footer />
      </main>
    </>
  );
}
