"use client"

import { useState } from "react"

export function FAQ() {
  const [open, setOpen] = useState(0)

  const items = [
    { q: "Is Duo free to use?", a: "Yes! Duo is free to download and use. We offer a premium plan with unlimited swipes, advanced AI recommendations, and exclusive couple features for $4.99/month." },
    { q: "How does movie matching work?", a: "Both partners swipe through movies independently. When you both swipe right on the same movie, you get an instant \"It's a Match!\" notification. No coordination needed — it's delightfully simple." },
    { q: "Which streaming services does Duo support?", a: "Duo shows you where each matched movie is available — Netflix, Disney+, Prime Video, Apple TV+, and more. We work with what you already have." },
    { q: "Does it work for long-distance couples?", a: "Absolutely. Duo was designed with long-distance couples in mind. You can swipe from anywhere in the world and your matches sync instantly." },
    { q: "How accurate are the AI recommendations?", a: "Our AI analyzes both partners' swipe patterns, genre preferences, and watch history to surface films you'll both likely enjoy. Most couples report finding their match within the first 5 swipes." },
  ]

  return (
    <section id="faq" className="py-28 lg:py-36 bg-[#f6f7f9]">
      <div className="max-w-2xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-xs font-bold tracking-[0.25em] uppercase text-black bg-white border-2 border-black rounded-xl mb-6 shadow-[3px_4px_0px_black]">
            FAQ
          </span>

          <h2 className="font-serif font-bold text-4xl md:text-5xl text-black leading-tight">
            Frequently Asked{" "}
            <span className="text-primary">Questions.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">

          {items.map((item, i) => (
            <div
              key={i}
              className={`bg-white border-2 border-black rounded-2xl overflow-hidden transition-shadow duration-200 ${
                open === i
                  ? "shadow-[6px_8px_0px_black]"
                  : "shadow-[4px_6px_0px_black] hover:shadow-[5px_7px_0px_black]"
              }`}
            >

              {/* Question */}
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-black/[0.03] active:bg-black/[0.06]"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-black text-[15px] leading-snug">
                  {item.q}
                </span>

                <div
                  className={`w-8 h-8 shrink-0 flex items-center justify-center rounded-lg border-2 border-black font-bold text-lg leading-none transition-all duration-200 ${
                    open === i
                      ? "bg-black text-white rotate-0"
                      : "bg-white text-black"
                  }`}
                >
                  {open === i ? "−" : "+"}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  open === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-[15px] text-black/55 leading-relaxed">
                  {item.a}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}