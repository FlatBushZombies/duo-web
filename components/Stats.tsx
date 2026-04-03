"use client"

export function Stats() {
  const stats = [
    { num: "2.1M", label: "Couples using DateFlix" },
    { num: "18M+", label: "Movies matched & watched" },
    { num: "4.9★", label: "Average App Store rating" },
  ];
  
  return (
    <div className="max-w-5xl mx-auto px-6 -mt-6">
      <div className="flex flex-wrap justify-center gap-8">

        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white px-8 py-6 rounded-2xl border-2 border-black transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-[5px_7px_0px_black]"
            style={{
              transform: `rotate(${i % 2 === 0 ? "-2deg" : "2deg"})`,
              boxShadow: "6px 8px 0px black"
            }}
          >
            <div className="font-serif font-bold text-4xl lg:text-5xl text-black mb-2 text-center">
              {s.num}
            </div>
            <div className="text-sm font-medium text-muted-foreground text-center max-w-[160px]">
              {s.label}
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}