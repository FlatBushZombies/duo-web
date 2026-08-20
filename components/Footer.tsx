"use client"

import Image from "next/image"

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function XGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  )
}

function YoutubeGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Footer() {
  const productLinks = [
    ["How It Works", "#how-it-works"],
    ["Features", "#features"],
    ["Pricing", "#pricing"],
    ["FAQ", "#faq"],
  ]

  const companyLinks = [
    ["Privacy Policy", "/privacy"],
    ["Terms of Service", "#"],
    ["Contact", "#"],
  ]

  const socials = [
    { icon: <InstagramGlyph />, label: "Instagram" },
    { icon: <XGlyph />, label: "X" },
    { icon: <YoutubeGlyph />, label: "YouTube" },
  ]

  return (
    <footer className="py-12 px-6 bg-[#f6f7f9]">

      <div className="max-w-6xl mx-auto">

        <div className="reveal p-8 md:p-10 bg-white border-2 border-black rounded-2xl shadow-[5px_7px_0px_black]">

          {/* Top: brand + link columns */}
          <div className="grid md:grid-cols-[1.3fr_1fr_1fr] gap-10 pb-8">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4 group">
                <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center border-2 border-black shadow-[2px_3px_0px_black] transition-all group-hover:scale-105">
                  <Image src="/duo-icon.png" width={20} height={20} alt="logo" className="object-cover" />
                </div>
                <span className="font-serif font-bold text-lg text-black">
                  Duo<span className="text-primary">App</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                The swipe-to-match app that ends movie night arguments for good.
              </p>
            </div>

            {/* Product links */}
            <div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-black mb-4">
                Product
              </div>
              <ul className="space-y-3">
                {productLinks.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-muted-foreground hover:text-black transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-black mb-4">
                Company
              </div>
              <ul className="space-y-3">
                {companyLinks.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-muted-foreground hover:text-black transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom bar: copyright + socials */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t-2 border-black/10">

            <p className="text-xs text-muted-foreground text-center md:text-left">
              © 2026 DuoApp. Made with{" "}
              <span className="text-primary inline-block animate-pulse">♥</span>{" "}
              for couples everywhere.
            </p>

            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center text-black bg-white border-2 border-black rounded-xl transition-all hover:bg-black hover:text-white hover:scale-105 hover:shadow-[2px_3px_0px_black]"
                >
                  {s.icon}
                </a>
              ))}
            </div>

          </div>

        </div>

      </div>

    </footer>
  )
}
