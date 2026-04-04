"use client"

import Image from "next/image"

// Inline SVG logos for Apple App Store and Google Play Store
function AppleLogo() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function GooglePlayLogo() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gp-grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00C6FF" />
          <stop offset="100%" stopColor="#0072FF" />
        </linearGradient>
        <linearGradient id="gp-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FF8C00" />
        </linearGradient>
        <linearGradient id="gp-grad3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF3D00" />
          <stop offset="100%" stopColor="#FF0058" />
        </linearGradient>
        <linearGradient id="gp-grad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E676" />
          <stop offset="100%" stopColor="#00BFA5" />
        </linearGradient>
      </defs>
      {/* Play arrow made of 4 colored segments */}
      <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" fill="none" />
      <path d="M3 3.5L13.29 12 3 20.5V3.5z" fill="url(#gp-grad1)" />
      <path d="M3 3.5l10.29 8.5L17.6 8 6.04 1.7C4.78 1.02 3 1.84 3 3.5z" fill="url(#gp-grad2)" />
      <path d="M3 20.5l10.29-8.5 4.31 4-11.56 6.3C4.78 22.98 3 22.16 3 20.5z" fill="url(#gp-grad3)" />
      <path d="M13.29 12l4.31-4 2.01 1.22c1.07.65 1.07 2.21 0 2.86L17.6 13.31 13.29 12z" fill="url(#gp-grad4)" />
    </svg>
  )
}

export function CTA() {
  return (
    <section id="download" className="py-24 px-6 bg-[#f6f7f9]">
      <div className="max-w-5xl mx-auto">

        <div className="relative rounded-3xl border-2 border-black overflow-hidden shadow-[6px_8px_0px_black]">

          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&h=800&fit=crop"
              alt="Cinema"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center py-20 lg:py-24 px-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 bg-white/10 border border-white/20 px-4 py-2 rounded-xl backdrop-blur-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-white/80 font-medium">
                Free to Download
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 max-w-2xl mx-auto">
              Start your first{" "}
              <span className="text-primary">
                movie match tonight.
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-lg text-white/70 max-w-md mx-auto mb-10">
              Free to download. Just two people and a love of movies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">

              {/* App Store */}
              <a
                href="#"
                className="flex items-center gap-3 bg-white text-black px-6 py-4 rounded-xl border-2 border-black shadow-[3px_4px_0px_black] transition-all hover:scale-105 hover:shadow-[5px_6px_0px_black] active:scale-[0.98]"
              >
                <AppleLogo />
                <div className="text-left leading-none">
                  <div className="text-[10px] text-black/50 font-medium mb-0.5 uppercase tracking-wide">
                    Download on the
                  </div>
                  <div className="text-sm font-bold tracking-tight">
                    App Store
                  </div>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="#"
                className="flex items-center gap-3 bg-white/10 text-white px-6 py-4 rounded-xl border-2 border-white/30 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/15 active:scale-[0.98]"
              >
                <GooglePlayLogo />
                <div className="text-left leading-none">
                  <div className="text-[10px] text-white/60 font-medium mb-0.5 uppercase tracking-wide">
                    Get it on
                  </div>
                  <div className="text-sm font-bold tracking-tight">
                    Google Play
                  </div>
                </div>
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}