"use client"

import { Heart } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#f6f7f9]">

      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 md:p-8 bg-white border-2 border-black rounded-2xl shadow-[5px_7px_0px_black]">

          {/* Logo */}
          <div className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center border-2 border-black shadow-[2px_3px_0px_black] transition-all group-hover:scale-105">
              <Image src="/duo-icon.png" width={20} height={20} alt="logo" className="object-cover" />
            </div>

            <span className="font-serif font-bold text-lg text-black">
              Duo<span className="text-primary">App</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-3">

            {["Privacy Policy", "Terms of Service", "Contact"].map((l) => (
              <a
                key={l}
                href="#"
                className="px-4 py-2 text-sm font-medium text-black bg-white border-2 border-black rounded-xl transition-all hover:bg-black hover:text-white hover:scale-105 hover:shadow-[2px_3px_0px_black]"
              >
                {l}
              </a>
            ))}

          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground text-center md:text-right">
            © 2026 DuoApp. Made with{" "}
            <span className="text-primary inline-block animate-pulse">♥</span>{" "}
            for couples everywhere.
          </p>

        </div>

      </div>
    </footer>
  )
}