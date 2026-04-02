"use client"

import Image from "next/image"
import { Heart, Star } from "lucide-react"

interface MovieCardProps {
  title: string
  year: string
  rating: string
  genre: string
  image: string
  isMatch?: boolean
  rotation?: number
  scale?: number
  className?: string
}

export default function MovieCard({
  title,
  year,
  rating,
  genre,
  image,
  isMatch = false,
  rotation = 0,
  scale = 1,
  className = ""
}: MovieCardProps) {
  return (
    <div
      className={`relative w-44 h-64 rounded-2xl overflow-hidden border-2 border-black bg-white transition-all duration-300 hover:scale-105 hover:rotate-0 ${className}`}
      style={{
        transform: `rotate(${rotation}deg) scale(${scale})`,
        boxShadow: "5px 5px 0px #000"
      }}
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />

      {/* Gradient overlay — richer at bottom for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" />

      {/* Genre pill — top-left so it doesn't crowd the title area */}
      <div className="absolute top-3 left-3">
        <span className="inline-block px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-black bg-white rounded-full border border-black/80">
          {genre}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-3.5">
        {/* Title */}
        <h4 className="font-serif font-bold text-white text-base leading-snug mb-1.5">
          {title}
        </h4>

        {/* Meta row */}
        <div className="flex items-center gap-1.5 text-white/70 text-[11px]">
          <span>{year}</span>
          <span className="opacity-50">·</span>
          <span className="flex items-center gap-0.5">
            <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
            <span className="text-white/90 font-medium">{rating}</span>
          </span>
        </div>
      </div>

      {/* MATCH STATE */}
      {isMatch && (
        <div className="absolute inset-0 bg-primary flex items-center justify-center animate-pulse">
          <div className="flex flex-col items-center justify-center gap-1 bg-black/20 backdrop-blur-sm px-5 py-4 rounded-xl border border-white/30"
               style={{ boxShadow: "2px 2px 0px rgba(0,0,0,0.4)" }}>
            <Heart className="w-9 h-9 fill-white text-white" />
            <span className="font-serif font-bold text-white text-base tracking-widest uppercase">
              Match!
            </span>
          </div>
        </div>
      )}
    </div>
  )
}