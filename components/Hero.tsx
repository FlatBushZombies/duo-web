"use client"

import Image from "next/image"
import { Heart, Star, X } from "lucide-react"
import MovieCard from "./MovieCard"

export default function Hero({
  title = "Watch Together, Choose Together.",
  highlightText = "Choose Together.",
  subtitle = "The AI-powered app for couples who can't agree on a movie. Both swipe, Duo finds the match — no more 45 minutes of scrolling.",
  ctaPrimary = { text: "Download on the App Store", href: "#download" },
  ctaSecondary = { text: "Get it on Google Play", href: "#download" },
  socialProofText = "Loved by 2.1M couples",
  microTrust = "Free to download · Both partners need the app",
  statsText = "847 matches today",
  users = [
    "https://images.pexels.com/photos/8350774/pexels-photo-8350774.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
    "https://images.pexels.com/photos/16958110/pexels-photo-16958110.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
    "https://images.pexels.com/photos/2719500/pexels-photo-2719500.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
    "https://images.pexels.com/photos/31654010/pexels-photo-31654010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
  ]
}) {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden pt-36 pb-24 px-6 bg-[#f5f4f0]">

      {/* Subtle dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* ── Copy block — centered, product-led ── */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">

        {/* Social proof — avatars + rating, above the headline */}
        <div
          className="hero-badge inline-flex items-center gap-3 mb-8 pl-2.5 pr-4 py-2 rounded-full bg-white border-2 border-[var(--line)]"
          style={{ boxShadow: "3px 3px 0px rgba(30,29,25,0.98)" }}
        >
          <div className="flex -space-x-2.5">
            {users.map((src, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-white ring-1 ring-[var(--line)] overflow-hidden bg-zinc-200 flex-shrink-0"
              >
                <Image src={src} alt="" width={28} height={28} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
          <span className="w-px h-5 bg-black/10 flex-shrink-0" />
          <div className="flex items-center gap-1 flex-shrink-0">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-xs font-semibold text-zinc-600 whitespace-nowrap">{socialProofText}</span>
        </div>

        {/* Title */}
        <h1 className="hero-h1 font-serif font-bold text-[2.75rem] sm:text-6xl lg:text-[4.4rem] text-black leading-[1.04] tracking-tight mb-6">
          {title.replace(highlightText, "")}
          <span
            className="inline-block text-primary"
            style={{ transform: "rotate(-1.5deg)", display: "inline-block" }}
          >
            {highlightText}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-sub text-lg md:text-xl text-zinc-500 leading-relaxed mb-10 max-w-lg mx-auto">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="hero-btns flex flex-wrap gap-4 justify-center mb-4">

          {/* App Store */}
          <a
            href={ctaPrimary.href}
            className="btn-neo flex items-center gap-3 bg-black text-white px-5 py-3.5 rounded-xl"
          >
            {/* Apple logo SVG */}
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 814 1000" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.6-49.1 189.2-49.1 30.4 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
            </svg>
            <div className="text-left leading-tight">
              <div className="text-[9px] text-white/50 font-semibold uppercase tracking-wider">Download on the</div>
              <div className="text-sm font-bold">App Store</div>
            </div>
          </a>

          {/* Google Play */}
          <a
            href={ctaSecondary.href}
            className="btn-neo flex items-center gap-3 bg-white px-5 py-3.5 rounded-xl"
          >
            {/* Google Play logo SVG */}
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <linearGradient id="gp1" x1="91.577" y1="319.096" x2="256.985" y2="483.573" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#00a0ff"/>
                <stop offset=".007" stopColor="#00a1ff"/>
                <stop offset=".26" stopColor="#00beff"/>
                <stop offset=".512" stopColor="#00d2ff"/>
                <stop offset=".76" stopColor="#00dfff"/>
                <stop offset="1" stopColor="#00e3ff"/>
              </linearGradient>
              <linearGradient id="gp2" x1="273.826" y1="256" x2="513.886" y2="256" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ffe000"/>
                <stop offset=".409" stopColor="#ffbd00"/>
                <stop offset=".775" stopColor="orange"/>
                <stop offset="1" stopColor="#ff9c00"/>
              </linearGradient>
              <linearGradient id="gp3" x1="173.774" y1="226.492" x2="6.15" y2="57.396" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ff3a44"/>
                <stop offset="1" stopColor="#c31162"/>
              </linearGradient>
              <linearGradient id="gp4" x1="54.116" y1="464.379" x2="174.668" y2="342.552" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#32a071"/>
                <stop offset=".069" stopColor="#2da771"/>
                <stop offset=".476" stopColor="#15cf74"/>
                <stop offset=".801" stopColor="#06e775"/>
                <stop offset="1" stopColor="#00f076"/>
              </linearGradient>
              <path d="M27.452 0C12.28 8.652 2 25.218 2 44.938V467.06C2 486.782 12.28 503.346 27.452 512l241.912-256z" fill="url(#gp1)"/>
              <path d="M351.566 176.956L269.364 256l82.202 79.044 146.006-84.574c41.696-24.172 41.696-63.34 0-87.514z" fill="url(#gp2)"/>
              <path d="M351.566 335.044L269.364 256 27.452 512c13.732 14.628 36.386 16.4 62.164 1.828z" fill="url(#gp3)"/>
              <path d="M27.452 0l324.114 335.044-82.202-79.044L27.452 0z" fill="url(#gp4)" opacity=".5"/>
              <path d="M27.452 0C12.28 8.652 2 25.218 2 44.938V467.06C2 486.782 12.28 503.346 27.452 512L269.364 256z" fill="url(#gp1)"/>
            </svg>
            <div className="text-left leading-tight">
              <div className="text-[9px] text-zinc-400 font-semibold uppercase tracking-wider">Get it on</div>
              <div className="text-sm font-bold text-black">Google Play</div>
            </div>
          </a>

        </div>

        <p className="hero-btns text-xs text-zinc-400">{microTrust}</p>
      </div>

      {/* ── Product visual — the app itself, not a lifestyle photo ── */}
      <div className="hero-visual relative mt-16 z-10">
        <div className="relative w-[280px] mx-auto">

          {/* App mockup card */}
          <div
            className="relative rounded-[42px] border-[3px] border-[var(--line)] bg-white p-2.5 transition-transform duration-300 hover:-translate-y-1"
            style={{ boxShadow: "8px 9px 0px rgba(30,29,25,0.98)" }}
          >
            {/* Camera dot */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black/15 z-20" />

            <div className="relative rounded-[32px] overflow-hidden bg-[#f5f4f0]">

              {/* Mini app header */}
              <div className="relative z-10 flex items-center justify-between px-5 pt-8 pb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-primary flex items-center justify-center flex-shrink-0">
                    <Heart className="w-2.5 h-2.5 fill-white text-white" />
                  </div>
                  <span className="font-serif font-bold text-sm text-black leading-none">Duo</span>
                </div>
                <div className="flex items-center gap-1.5 pl-2 pr-2.5 py-1 rounded-full bg-white border border-[var(--line)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                  <span className="text-[9px] font-semibold text-zinc-600 whitespace-nowrap">Partner&nbsp;online</span>
                </div>
              </div>

              {/* Swipe card stack */}
              <div className="relative h-[280px] flex items-center justify-center">
                <div className="absolute" style={{ transform: "rotate(-9deg) translateY(8px) scale(0.9)" }}>
                  <MovieCard
                    title="Dune"
                    year="2021"
                    rating="8.0"
                    genre="Sci-Fi"
                    image="https://images.pexels.com/photos/7991231/pexels-photo-7991231.jpeg?auto=compress&cs=tinysrgb&w=400"
                    className="opacity-70"
                  />
                </div>
                <div className="absolute" style={{ transform: "rotate(6deg) translateY(4px) scale(0.95)" }}>
                  <MovieCard
                    title="Oppenheimer"
                    year="2023"
                    rating="8.9"
                    genre="Drama"
                    image="https://images.pexels.com/photos/4649221/pexels-photo-4649221.jpeg?auto=compress&cs=tinysrgb&w=400"
                    className="opacity-85"
                  />
                </div>
                <div className="relative z-10">
                  <MovieCard
                    title="La La Land"
                    year="2016"
                    rating="8.0"
                    genre="Romance"
                    image="https://images.pexels.com/photos/13352299/pexels-photo-13352299.jpeg?auto=compress&cs=tinysrgb&w=400"
                    isMatch
                  />
                </div>
              </div>

              {/* Swipe controls */}
              <div className="relative z-10 flex items-center justify-center gap-6 pb-6">
                <button
                  aria-label="Pass"
                  className="w-11 h-11 rounded-full bg-white border-2 border-[var(--line)] flex items-center justify-center flex-shrink-0"
                  style={{ boxShadow: "2px 2px 0px rgba(30,29,25,0.98)" }}
                >
                  <X className="w-5 h-5 text-zinc-400" strokeWidth={2.5} />
                </button>
                <button
                  aria-label="Like"
                  className="w-11 h-11 rounded-full bg-primary border-2 border-[var(--line)] flex items-center justify-center flex-shrink-0"
                  style={{ boxShadow: "2px 2px 0px rgba(30,29,25,0.98)" }}
                >
                  <Heart className="w-5 h-5 fill-white text-white" strokeWidth={2.5} />
                </button>
              </div>

            </div>
          </div>

          {/* Floating Match pill */}
          <div
            className="absolute -right-10 top-20 hidden sm:flex bg-white rounded-2xl border-2 border-[var(--line)] px-4 py-3 items-center gap-3 animate-float"
            style={{ boxShadow: "4px 4px 0px rgba(30,29,25,0.98)" }}
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-[var(--line)] flex-shrink-0">
              <Heart className="w-5 h-5 fill-primary text-primary" />
            </div>
            <div>
              <p className="font-bold text-black text-sm leading-tight">{"It's a Match!"}</p>
              <p className="text-[11px] text-zinc-500 mt-0.5">You both want to watch this!</p>
            </div>
          </div>

          {/* Stats pill */}
          <div
            className="absolute -left-10 bottom-16 hidden sm:flex bg-white rounded-2xl border-2 border-[var(--line)] px-4 py-2.5 items-center gap-2.5 animate-float-slow"
            style={{ boxShadow: "4px 4px 0px rgba(30,29,25,0.98)" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
            <span className="text-sm font-semibold text-black">{statsText}</span>
          </div>

        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(4deg); }
          50%       { transform: translateY(-12px) rotate(4deg); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50%       { transform: translateY(-16px) rotate(-3deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: floatSlow 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
