"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"
import Image from "next/image"

export default function Nav({
  links = [
    ["How It Works", "#how-it-works"],
    ["Features", "#features"],
    ["Pricing", "#pricing"],
    ["FAQ", "#faq"]
  ],
  brandName = "DuoApp",
  ctaText = "Download on App Store",
  ctaHref = "#download"
}) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 32)
    window.addEventListener("scroll", h)
    return () => window.removeEventListener("scroll", h)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">

      <div
        className={`max-w-6xl mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-[#f5f4f0]/90 backdrop-blur-md border-2 border-black rounded-2xl px-4 py-2.5 shadow-[4px_4px_0px_#000]"
            : ""
        }`}
      >

        {/* LEFT — hamburger + logo */}
        <div className="flex items-center gap-3">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-xl border-2 border-black bg-white transition-all duration-200 hover:scale-105 hover:-rotate-2 md:hidden"
            style={{ boxShadow: "2px 2px 0px #000" }}
          >
            <span className={`block w-4 h-[2px] bg-black rounded-full transition-all duration-200 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-4 h-[2px] bg-black rounded-full transition-all duration-200 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-4 h-[2px] bg-black rounded-full transition-all duration-200 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>

          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl border-2 border-black bg-white transition-all duration-200 hover:scale-[1.03] hover:rotate-1"
            style={{ boxShadow: "2px 2px 0px #000" }}
          >
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center border-2 border-black flex-shrink-0">
              <Image src="/duo-icon.png" width={20} height={20} alt="logo" className="object-cover" />
            </div>
            <span className="font-serif font-bold text-sm tracking-tight leading-none">
              {brandName.slice(0, -3)}
              <span className="text-primary">{brandName.slice(-3)}</span>
            </span>
          </a>

        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-2">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="px-4 py-2 text-sm font-medium rounded-xl border-2 border-black bg-white transition-all duration-200 hover:scale-[1.04] hover:rotate-1 text-zinc-700 hover:text-black"
              style={{ boxShadow: "2px 2px 0px #000" }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA — App Store with HD Apple SVG */}
        <div className="hidden md:flex items-center">
          <a
            href={ctaHref}
            className="flex items-center gap-2.5 px-5 py-2.5 text-sm font-bold rounded-xl border-2 border-black bg-black text-white transition-all duration-200 hover:scale-[1.04] hover:-rotate-1"
            style={{ boxShadow: "3px 3px 0px rgba(0,0,0,0.5)" }}
          >
            {/* HD Apple logo SVG */}
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 814 1000" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.6-49.1 189.2-49.1 30.4 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
            </svg>
            <span>{ctaText}</span>
          </a>
        </div>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="flex flex-col gap-2.5 bg-[#f5f4f0] border-2 border-black rounded-2xl p-4"
          style={{ boxShadow: "4px 4px 0px #000" }}
        >
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="w-full text-center px-5 py-3 text-sm font-semibold rounded-xl border-2 border-black bg-white text-zinc-700 transition-all duration-200 hover:scale-[1.02] hover:text-black"
              style={{ boxShadow: "2px 2px 0px #000" }}
            >
              {label}
            </a>
          ))}

          <a
            href={ctaHref}
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-bold rounded-xl border-2 border-black bg-black text-white transition-all duration-200 hover:scale-[1.02]"
            style={{ boxShadow: "2px 2px 0px rgba(0,0,0,0.5)" }}
          >
            {/* HD Apple logo SVG */}
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 814 1000" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.6-49.1 189.2-49.1 30.4 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
            </svg>
            {ctaText}
          </a>
        </div>
      </div>

    </nav>
  )
}