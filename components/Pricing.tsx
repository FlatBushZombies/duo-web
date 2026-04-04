"use client"

import { useState } from "react"
import { Check } from "lucide-react"

export function Pricing() {
  const [annual, setAnnual] = useState(false)

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
      desc: "The full Duo experience for couples who love movies.",
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
  ]

  return (
    <section id="pricing" className="py-28 lg:py-36 bg-[#f6f7f9]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-xs font-bold tracking-[0.25em] uppercase text-black bg-white border border-black/80 rounded-xl mb-6 shadow-[2px_3px_0px_black] rotate-[-2deg]">
            Pricing
          </span>

          <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-tight mb-6">
            Simple pricing,{" "}
            <span className="text-primary inline-block -rotate-2">
              start for free.
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-md mx-auto mb-10">
            No hidden fees. Cancel anytime. Your first movie night is on us.
          </p>

          {/* Toggle */}
          <div className="inline-flex bg-white border-2 border-black rounded-xl p-1 shadow-[3px_4px_0px_black]">
            {[
              { label: "Monthly", val: false },
              { label: "Annual", val: true, badge: "Save 20%" },
            ].map(({ label, val, badge }) => (
              <button
                key={label}
                onClick={() => setAnnual(val)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  annual === val
                    ? "bg-primary text-white"
                    : "text-black hover:bg-black/5"
                }`}
              >
                {label}
                {badge && (
                  <span className="ml-2 text-[10px] px-2 py-0.5 bg-primary text-white rounded-full">
                    {badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 items-start">

          {PLANS.map((plan) => {
            const price = annual ? plan.price.yr : plan.price.mo

            return (
              <div
                key={plan.name}
                className={`relative p-7 rounded-2xl border-2 border-black bg-white shadow-[6px_8px_0px_black] ${
                  plan.featured ? "border-primary" : ""
                }`}
              >

                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-lg border-2 border-black shadow-[2px_3px_0px_black]">
                    {plan.badge}
                  </div>
                )}

                {/* Name */}
                <div className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-muted-foreground">
                  {plan.name}
                </div>

                {/* Price */}
                <div className="font-serif font-bold text-5xl mb-2">
                  {price === 0 ? "Free" : `$${price}`}
                </div>

                {/* Desc */}
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.desc}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f.t} className="flex items-center gap-3">
                      <span className={`w-5 h-5 flex items-center justify-center rounded-full border border-black flex-shrink-0 ${
                        f.ok ? "bg-primary text-white" : "bg-muted"
                      }`}>
                        {f.ok ? <Check className="w-3 h-3" /> : null}
                      </span>
                      <span className="text-sm">{f.t}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#download"
                  className="block text-center py-3 rounded-xl bg-black text-white font-semibold shadow-[3px_4px_0px_black] hover:bg-black/80 transition-colors"
                >
                  {plan.cta}
                </a>

              </div>
            )
          })}

        </div>

        <p className="text-center text-xs text-muted-foreground mt-10">
          All paid plans include a 7-day free trial. No credit card required.
        </p>
      </div>
    </section>
  )
}