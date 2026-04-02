"use client"

import Image from "next/image"
import { Heart, Star } from "lucide-react"
import MovieCard from "./MovieCard"

export default function Hero({
  badgeText = "Now live on iOS & Android",
  badgeHighlight = "FREE",
  title = "Watch Together, Choose Together.",
  highlightText = "Choose Together.",
  subtitle = "Duo matches you and your partner on movies you'll both love — swipe, match, and enjoy the perfect movie night.",
  ctaPrimary = { text: "Download on the App Store", href: "#download" },
  ctaSecondary = { text: "Get it on Google Play", href: "#download" },
  statsText = "847 matches today",
  users = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  ]
}) {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden pt-32 pb-20 px-6 bg-[#f5f4f0]">

      {/* Subtle dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* LEFT */}
      <div className="flex-1 max-w-xl lg:max-w-lg text-center lg:text-left z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 mb-9 px-4 py-2 rounded-xl bg-white border-2 border-black transition-all hover:scale-[1.03] hover:rotate-1"
             style={{ boxShadow: "3px 3px 0px #000" }}>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
          <span className="text-sm text-zinc-500 font-medium">{badgeText}</span>
          <span className="bg-primary text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-black">
            {badgeHighlight}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif font-bold text-[3.4rem] md:text-6xl lg:text-[4.2rem] text-black leading-[1.04] tracking-tight mb-7">
          {title.replace(highlightText, "")}
          <span
            className="inline-block text-primary"
            style={{ transform: "rotate(-2deg)", display: "inline-block" }}
          >
            {highlightText}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-zinc-500 leading-relaxed mb-11 max-w-md mx-auto lg:mx-0">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">

          {/* App Store */}
          <a
            href={ctaPrimary.href}
            className="flex items-center gap-3 bg-black text-white px-5 py-3.5 rounded-xl border-2 border-black transition-all duration-200 hover:scale-[1.04] hover:-rotate-1"
            style={{ boxShadow: "3px 3px 0px rgba(0,0,0,0.6)" }}
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
            className="flex items-center gap-3 bg-white px-5 py-3.5 rounded-xl border-2 border-black transition-all duration-200 hover:scale-[1.04] hover:rotate-1"
            style={{ boxShadow: "3px 3px 0px #000" }}
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

        {/* Social Proof */}
        <div className="flex items-center gap-4 justify-center lg:justify-start">
          {/* Avatars */}
          <div className="flex -space-x-3">
            {users.map((src, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2 border-black overflow-hidden bg-white ring-2 ring-[#f5f4f0]"
              >
                <Image src={src} alt="User" width={36} height={36} className="object-cover" />
              </div>
            ))}
          </div>

          {/* Stars + copy */}
          <div>
            <div className="flex items-center gap-0.5 mb-0.5">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs text-zinc-500 leading-tight">
              <span className="font-bold text-black">2.1M+ couples</span> finding movies together
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex-1 relative mt-20 lg:mt-0 lg:ml-20 z-10">
        <div className="relative w-[320px] md:w-[400px] mx-auto">

          {/* Main Image */}
          <div
            className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-black"
            style={{ boxShadow: "7px 7px 0px #000" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1000&fit=crop"
              alt="Couple enjoying movie night"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Floating Movie Card — Left */}
          <div className="absolute -left-24 top-10 hidden lg:block animate-float-slow"
               style={{ transform: "rotate(-6deg)" }}>
            <MovieCard
              title="Oppenheimer"
              year="2023"
              rating="8.9"
              genre="Drama"
              image="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop"
            />
          </div>

          {/* Floating Movie Card — Right */}
          <div className="absolute -right-20 top-36 hidden lg:block animate-float"
               style={{ transform: "rotate(6deg)" }}>
            <MovieCard
              title="La La Land"
              year="2016"
              rating="8.0"
              genre="Romance"
              image="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop"
              isMatch={true}
            />
          </div>

          {/* Match pill */}
          <div
            className="absolute -right-6 lg:right-4 bottom-24 bg-white rounded-2xl border-2 border-black px-4 py-3 flex items-center gap-3 animate-float"
            style={{ boxShadow: "4px 4px 0px #000" }}
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-black flex-shrink-0">
              <Heart className="w-5 h-5 fill-primary text-primary" />
            </div>
            <div>
              <p className="font-bold text-black text-sm leading-tight">{"It's a Match!"}</p>
              <p className="text-[11px] text-zinc-500 mt-0.5">You both want to watch this!</p>
            </div>
          </div>

          {/* Stats pill */}
          <div
            className="absolute left-0 lg:-left-8 bottom-8 bg-white rounded-2xl border-2 border-black px-4 py-2.5 flex items-center gap-2.5 animate-float-slow"
            style={{ boxShadow: "4px 4px 0px #000" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
            <span className="text-sm font-semibold text-black">{statsText}</span>
          </div>

        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(6deg); }
          50%       { transform: translateY(-14px) rotate(6deg); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50%       { transform: translateY(-20px) rotate(-6deg); }
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