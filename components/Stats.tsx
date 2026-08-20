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
          <div key={i} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
            <div
              className="bg-white px-8 py-6 rounded-[26px] border-[3px] border-[var(--line)] transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-[9px_11px_0px_rgba(30,29,25,0.98)]"
              style={{
                transform: `rotate(${i % 2 === 0 ? "-2deg" : "2deg"})`,
                boxShadow: "7px 8px 0px rgba(30,29,25,0.98)"
              }}
            >
              <div className="font-serif font-bold text-4xl lg:text-5xl text-black mb-2 text-center">
                {s.num}
              </div>
              <div className="text-sm font-medium text-muted-foreground text-center max-w-[160px]">
                {s.label}
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}