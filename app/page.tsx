"use client";

import React, { useEffect, useRef, useState } from "react";

/* ══════════════════════════════════════════════════════════════════════════════
   HOOKS
══════════════════════════════════════════════════════════════════════════════ */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("revealed");
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ══════════════════════════════════════════════════════════════════════════════
   REVEAL WRAPPER
══════════════════════════════════════════════════════════════════════════════ */
function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   ICONS - Apple & Google Play SVGs
══════════════════════════════════════════════════════════════════════════════ */
function AppleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GooglePlayIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a2.372 2.372 0 01-.473-.399A2.52 2.52 0 012.5 20.13V3.87c0-.637.232-1.24.636-1.657.151-.156.315-.29.473-.399zm.848-.548l11.35 6.545-2.873 2.873L3.61 1.36c.282-.11.567-.137.847-.094zm11.35 13.28L4.457 21.09c-.28.043-.565.016-.847-.094l9.324-9.324 2.873 2.873zM16.96 7.11l3.545 2.045a2.503 2.503 0 010 4.33L16.96 15.53l-3.168-3.168v-.724L16.96 7.11z" />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   NAV
══════════════════════════════════════════════════════════════════════════════ */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links: [string, string][] = [
    ["How It Works", "#how-it-works"],
    ["Features", "#features"],
    ["Pricing", "#pricing"],
    ["FAQ", "#faq"],
  ];

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--background)]/90 backdrop-blur-xl border-b border-[var(--border)] shadow-[0_1px_12px_rgba(15,23,41,0.04)]"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 lg:px-10 h-[72px]">
        <span className="text-[22px] font-bold tracking-tight text-[var(--text-primary)] font-serif">
          Duo<span className="text-[var(--brand)]">App</span>
        </span>

        <div className="hidden md:flex items-center gap-10">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[14px] font-medium text-[var(--text-secondary)] no-underline hover:text-[var(--text-primary)] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#download"
            className="flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-6 py-2.5 text-[13px] font-semibold
                       text-white no-underline hover:bg-[var(--text-primary)]/90 transition-all duration-200
                       shadow-[0_2px_12px_rgba(15,23,41,0.12)]"
          >
            <AppleIcon className="w-4 h-4" />
            Download
          </a>
          <a
            href="#download"
            className="flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-6 py-2.5 text-[13px] font-semibold
                       text-white no-underline hover:bg-[var(--text-primary)]/90 transition-all duration-200
                       shadow-[0_2px_12px_rgba(15,23,41,0.12)]"
          >
            <GooglePlayIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-transform duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--background)] border-b border-[var(--border)] px-6 pb-6">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-[15px] font-medium text-[var(--text-secondary)] no-underline hover:text-[var(--text-primary)]"
            >
              {label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[var(--text-primary)] px-6 py-3 text-sm font-semibold
                       text-white no-underline"
          >
            Download Free
          </a>
        </div>
      )}
    </nav>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   PHONE MOCKUP
══════════════════════════════════════════════════════════════════════════════ */
function PhoneMockup() {
  return (
    <div className="relative inline-block">
      {/* Floating chips */}
      <div
        className="float-a absolute top-6 -right-32 lg:-right-40 z-10 flex items-center gap-2.5 whitespace-nowrap
                    bg-white border border-[var(--border)] rounded-2xl px-5 py-3
                    text-[13px] font-semibold text-[var(--text-primary)] shadow-[0_16px_48px_rgba(15,23,41,0.1)]"
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--brand-light)]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--brand)"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </span>
        {"It's a Match!"}
      </div>
      <div
        className="float-b absolute bottom-36 -right-32 lg:-right-40 z-10 flex items-center gap-2.5 whitespace-nowrap
                    bg-white border border-[var(--border)] rounded-2xl px-5 py-3
                    text-[13px] font-semibold text-[var(--text-primary)] shadow-[0_16px_48px_rgba(15,23,41,0.1)]"
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-50 text-amber-500">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        </span>
        847 matched
      </div>
      <div
        className="float-c absolute bottom-[70px] -left-32 lg:-left-40 z-10 flex items-center gap-2.5 whitespace-nowrap
                    bg-white border border-[var(--border)] rounded-2xl px-5 py-3
                    text-[13px] font-semibold text-[var(--text-primary)] shadow-[0_16px_48px_rgba(15,23,41,0.1)]"
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-500">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
        </span>
        2.1M Couples
      </div>

      {/* Shell */}
      <div
        className="relative w-[260px] h-[540px] overflow-hidden rounded-[44px]
                   border-2 border-white/20 bg-gradient-to-br from-[#1e2133] to-[#151826]"
        style={{
          boxShadow:
            "0 48px 120px rgba(15,23,41,.25), 0 0 0 1px rgba(255,255,255,.06), inset 0 1px 0 rgba(255,255,255,.12)",
        }}
      >
        <div className="absolute inset-0 flex flex-col p-5 bg-gradient-to-br from-[#0f1220] to-[#1a0c10]">
          {/* Notch */}
          <div className="w-20 h-[22px] rounded-b-2xl bg-[#0f1220] mx-auto mb-3.5 shrink-0" />
          {/* App header */}
          <div className="flex items-center justify-between mb-3.5">
            <span className="text-base font-bold text-[#f5f5f7] font-serif">
              Date<span className="text-[var(--brand)]">Flix</span>
            </span>
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--brand)] to-[#ff8c00]" />
          </div>
          {/* Movie card */}
          <div
            className="relative shrink-0 h-[200px] mb-3 overflow-hidden rounded-[20px]
                        border border-white/[.08] bg-gradient-to-br from-[#1e1020] to-[#0e1a1e]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/15 to-[#ff8c00]/[.08]" />
            <span
              className="absolute top-3 left-3 rounded-full bg-[var(--brand)]/90 px-2.5 py-[3px]
                         text-[10px] font-bold uppercase tracking-[0.5px] text-white"
            >
              Thriller
            </span>
            <span className="absolute bottom-3.5 left-3.5 right-3.5 text-[18px] font-bold text-[#f5f5f7]">
              Inception
            </span>
            <div
              className="match-flash absolute inset-0 flex items-center justify-center
                          bg-[var(--brand)]/90 text-[28px] font-black text-white"
            >
              MATCH!
            </div>
          </div>
          {/* Swipe row */}
          <div className="mb-3 flex items-center justify-center gap-3.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[.08] text-[18px] text-[#ccc]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </div>
            <div className="text-center text-[11px] leading-relaxed text-white/40">
              Swipe to<br />decide
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand)] text-[18px] text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
          </div>
          {/* Match bar */}
          <div className="flex items-center gap-2.5 rounded-xl border border-[var(--brand)]/20 bg-white/[.05] px-3.5 py-2.5">
            <div className="pulse-dot h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
            <span className="text-[11px] font-medium text-[#ccc]">
              <strong className="text-[#ff6b6b]">Alex</strong> also liked this!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-hero-gradient px-6 pb-20 pt-[120px] text-center">
      {/* Soft radial overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(229,9,20,0.04), transparent 60%)",
        }}
      />

      {/* Badge */}
      <div
        className="hero-badge mb-8 inline-flex items-center gap-2.5 rounded-full border border-[var(--brand)]/15
                    bg-white pl-3 pr-5 py-2 text-[13px] font-medium text-[var(--brand)]
                    shadow-[0_2px_12px_rgba(229,9,20,0.06)]"
      >
        <span className="pulse-dot h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
        Now available on iOS & Android
      </div>

      {/* H1 */}
      <h1
        className="hero-h1 mb-6 max-w-[820px] font-serif font-black leading-[1.02] tracking-tight text-[var(--text-primary)]"
        style={{ fontSize: "clamp(48px, 7.5vw, 88px)" }}
      >
        <span className="text-balance">
          Watch Together,{" "}
          <span className="text-[var(--brand)]">Choose Together.</span>
        </span>
      </h1>

      {/* Subtitle */}
      <p className="hero-sub mb-12 max-w-[520px] text-lg leading-relaxed text-[var(--text-secondary)]">
        Duo matches you and your partner on movies you&apos;ll both love —
        swipe, match, and enjoy the perfect movie night, every time.
      </p>

      {/* Store Buttons */}
      <div className="hero-btns mb-20 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#download"
          className="store-btn flex items-center gap-3 rounded-2xl bg-[var(--text-primary)] px-7 py-4
                     text-white no-underline shadow-[0_12px_40px_rgba(15,23,41,0.2)]"
        >
          <AppleIcon className="w-6 h-6" />
          <div className="text-left">
            <div className="text-[10px] font-normal opacity-70 leading-tight">Download on the</div>
            <div className="text-[15px] font-semibold leading-tight">App Store</div>
          </div>
        </a>
        <a
          href="#download"
          className="store-btn flex items-center gap-3 rounded-2xl bg-[var(--text-primary)] px-7 py-4
                     text-white no-underline shadow-[0_12px_40px_rgba(15,23,41,0.2)]"
        >
          <GooglePlayIcon className="w-6 h-6" />
          <div className="text-left">
            <div className="text-[10px] font-normal opacity-70 leading-tight">Get it on</div>
            <div className="text-[15px] font-semibold leading-tight">Google Play</div>
          </div>
        </a>
      </div>

      <div className="hero-visual">
        <PhoneMockup />
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   TICKER
══════════════════════════════════════════════════════════════════════════════ */
function Ticker() {
  const items = [
    "Swipe to Match",
    "Couples Movie Nights",
    "AI Recommendations",
    "Real-Time Partner Sync",
    "Every Genre, Every Mood",
    "2.1M Happy Couples",
  ];
  return (
    <div className="overflow-hidden border-t border-b border-[var(--border)] bg-white py-5">
      <div className="ticker-track flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-8 text-[15px] font-medium text-[var(--text-secondary)]"
          >
            {item}{" "}
            <span className="text-[var(--brand)] text-xs">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6L12 2z"/></svg>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   HOW IT WORKS
══════════════════════════════════════════════════════════════════════════════ */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="var(--brand)"/>
        </svg>
      ),
      title: "Connect with Your Partner",
      body: "Create your couple profile and link with your partner in seconds. No friction — just fun from day one.",
    },
    {
      n: "02",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" fill="none"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/>
        </svg>
      ),
      title: "Swipe Movies Independently",
      body: "Each of you swipes through a curated movie feed built around your individual tastes and streaming services.",
    },
    {
      n: "03",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--brand)">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      title: "Watch What You Both Love",
      body: "When you both swipe right on the same film — it's a match! Get notified instantly, then press play.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-section-soft">
      <div className="mx-auto max-w-[1100px] px-6 py-28 lg:py-36 text-center">
        <Reveal>
          <span className="mb-3 block text-xs font-bold uppercase tracking-[4px] text-[var(--brand)] font-sans">
            How It Works
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="mb-5 font-serif font-black leading-[1.05] tracking-tight text-[var(--text-primary)]"
            style={{ fontSize: "clamp(34px, 4.5vw, 56px)" }}
          >
            Three swipes to your{" "}
            <span className="text-[var(--brand)]">next favourite night.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mb-16 max-w-[480px] text-[16px] leading-relaxed text-[var(--text-secondary)]">
            No more scrolling for 45 minutes. DateFlix makes the decision
            delightfully simple.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <div
                className="step-card relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white text-left p-10
                           shadow-[0_2px_16px_rgba(15,23,41,0.03)]"
              >
                <div
                  className="step-topline absolute left-0 right-0 top-0 h-[3px] opacity-0 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, var(--brand), transparent)",
                  }}
                />
                <div className="mb-5 text-[64px] font-black leading-none tracking-[-3px] text-[var(--brand)] opacity-[0.08] font-serif">
                  {s.n}
                </div>
                <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--brand-light)]">
                  {s.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold tracking-tight text-[var(--text-primary)]">
                  {s.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   STATS
══════════════════════════════════════════════════════════════════════════════ */
function StatsBand() {
  const stats = [
    { num: "2.1M", label: "Couples using DateFlix" },
    { num: "18M+", label: "Movies matched & watched" },
    { num: "4.9", label: "Average App Store rating", suffix: "★" },
  ];
  return (
    <div className="mx-auto max-w-[1100px] px-6 -mt-1">
      <Reveal>
        <div className="rounded-[32px] border border-[var(--border)] bg-white px-10 lg:px-16 py-16 lg:py-20 text-center shadow-[0_4px_32px_rgba(15,23,41,0.04)]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {stats.map((s, i) => (
              <div key={i}>
                <div
                  className="font-serif font-black leading-none tracking-tight text-[var(--text-primary)]"
                  style={{ fontSize: "clamp(40px, 5.5vw, 68px)" }}
                >
                  {s.num}
                  {s.suffix && <span className="text-[var(--brand)]">{s.suffix}</span>}
                </div>
                <div className="mt-3 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   FEATURES
══════════════════════════════════════════════════════════════════════════════ */
type FeatureDef = {
  label: string;
  title: React.ReactNode;
  body: string;
  tags: string[];
  visual: React.ReactNode;
};

function Features() {
  const features: FeatureDef[] = [
    {
      label: "Smart Matching",
      title: (
        <>
          <span className="text-[var(--brand)]">Swipe, match,</span>
          <br />never argue again.
        </>
      ),
      body: "Our Tinder-style swiping experience means both of you decide what to watch — without the endless scrolling or guilty compromises.",
      tags: ["Real-time sync", "Instant notifications", "Match history"],
      visual: (
        <div className="flex h-full items-center justify-center">
          <div className="flex items-center">
            {(
              [
                {
                  bg: "linear-gradient(135deg,#e8edf8,#dce3f4)",
                  title: "Dune",
                  deg: -4,
                  scale: 0.92,
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#5f6d87"><path d="M12 3v18l-5-3V6l5-3zm2 0v18l5-3V6l-5-3z" /></svg>
                  ),
                },
                {
                  bg: "linear-gradient(135deg,#ffe8e8,#ffd4d4)",
                  title: "Oppenheimer",
                  deg: 0,
                  scale: 1.1,
                  match: true,
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--brand)"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ),
                },
                {
                  bg: "linear-gradient(135deg,#e8f0ff,#d4e4f0)",
                  title: "Batman",
                  deg: 4,
                  scale: 0.92,
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#5f6d87"><path d="M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2s.9 2 2 2v3c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3c1.1 0 2-.9 2-2z"/></svg>
                  ),
                },
              ] as {
                bg: string;
                title: string;
                deg: number;
                scale: number;
                match?: boolean;
                icon: React.ReactNode;
              }[]
            ).map((c, i) => (
              <div
                key={i}
                className="relative flex flex-col justify-end overflow-hidden rounded-2xl border border-[var(--border)] p-2.5"
                style={{
                  width: 92,
                  height: 130,
                  background: c.bg,
                  transform: `rotate(${c.deg}deg) scale(${c.scale})`,
                  boxShadow: c.match
                    ? "0 24px 64px rgba(229,9,20,.15)"
                    : "0 8px 24px rgba(15,23,41,.06)",
                  zIndex: c.match ? 2 : 1,
                  marginLeft: i > 0 ? -14 : 0,
                }}
              >
                <span className="absolute left-2.5 top-2.5">{c.icon}</span>
                <span className="text-[10px] font-bold leading-tight text-[var(--text-primary)]">
                  {c.title}
                </span>
                {c.match && (
                  <div className="match-flash2 absolute inset-0 flex items-center justify-center bg-[var(--brand)]/90 text-[13px] font-black text-white">
                    MATCH!
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "AI Recommendations",
      title: (
        <>
          <span className="text-[var(--brand)]">Learns your</span>
          <br />{"couple's taste."}
        </>
      ),
      body: "The more you swipe, the smarter DateFlix gets. Our AI builds a shared taste profile for your relationship and serves up movies you'll both love.",
      tags: ["Machine learning", "Genre analysis", "Mood-based picks"],
      visual: (
        <div className="flex h-full flex-col justify-center gap-3.5 p-9">
          <div className="mb-1 text-lg font-medium text-[var(--text-primary)]">
            &ldquo;Based on your taste&hellip;&rdquo;
          </div>
          {(
            [
              ["Sci-Fi", "88%"],
              ["Thriller", "82%"],
              ["Romance", "71%"],
              ["Drama", "65%"],
            ] as [string, string][]
          ).map(([genre, pct]) => (
            <div key={genre} className="flex items-center gap-3.5">
              <span className="w-[68px] shrink-0 text-[13px] font-medium text-[var(--text-primary)]">
                {genre}
              </span>
              <div
                className="flex-1 overflow-hidden rounded-full bg-[var(--surface)]"
                style={{ height: 8 }}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--brand)] to-[#ff6b6b]"
                  style={{ width: pct }}
                />
              </div>
              <span className="w-9 text-right text-xs font-semibold text-[var(--brand)]">
                {pct}
              </span>
            </div>
          ))}
          <div className="mt-2 flex items-center gap-2.5 rounded-2xl border border-[var(--brand)]/15 bg-[var(--brand-light)] px-4 py-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--brand)"><circle cx="12" cy="12" r="10" fill="none" stroke="var(--brand)" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round"/></svg>
            <span className="text-[13px] text-[var(--text-primary)]">
              We recommend <strong>Interstellar</strong> for tonight
            </span>
          </div>
        </div>
      ),
    },
    {
      label: "Cross-Platform",
      title: (
        <>
          <span className="text-[var(--brand)]">Always in sync,</span>
          <br />wherever you are.
        </>
      ),
      body: "Long distance or side by side — DateFlix keeps your movies and matches perfectly synced across every device in real time.",
      tags: ["iCloud Sync", "Cross-device", "Offline mode"],
      visual: (
        <div className="flex h-full flex-col items-center justify-center gap-5">
          <div className="flex flex-wrap justify-center gap-4">
            {(
              [
                [
                  <svg key="ios" width="28" height="28" viewBox="0 0 24 24" fill="#5f6d87"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>,
                  "iOS",
                ],
                [
                  <svg key="android" width="28" height="28" viewBox="0 0 24 24" fill="#5f6d87"><path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24C14.93 8.29 13.5 8 12 8s-2.93.29-4.47.91L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/></svg>,
                  "Android",
                ],
                [
                  <svg key="web" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5f6d87" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
                  "Web",
                ],
              ] as [React.ReactNode, string][]
            ).map(([icon, label]) => (
              <div
                key={label}
                className="flex min-w-[88px] flex-col items-center gap-2.5 rounded-2xl border
                           border-[var(--border)] bg-white px-6 py-5 shadow-[0_4px_16px_rgba(15,23,41,0.04)]"
              >
                {icon}
                <span className="text-[13px] font-semibold text-[var(--text-primary)]">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
            <span className="text-[13px] text-[var(--text-secondary)]">
              Syncs instantly across all devices
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="mx-auto max-w-[1100px] px-6 py-28 lg:py-36">
      <Reveal>
        <span className="mb-3 block text-xs font-bold uppercase tracking-[4px] text-[var(--brand)] font-sans">
          Features
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className="mb-16 lg:mb-20 font-serif font-black leading-[1.05] tracking-tight text-[var(--text-primary)]"
          style={{ fontSize: "clamp(34px, 4.5vw, 56px)" }}
        >
          Built for couples{" "}
          <span className="text-[var(--brand)]">who love cinema.</span>
        </h2>
      </Reveal>

      <div className="flex flex-col gap-20 lg:gap-28">
        {features.map((f, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={i}
              className="grid grid-cols-1 items-center gap-10 lg:gap-16 md:grid-cols-2"
              style={
                { direction: reverse ? "rtl" : "ltr" } as React.CSSProperties
              }
            >
              <div
                className={[
                  reverse ? "reveal-right" : "reveal-left",
                  "relative h-[360px] overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-[0_4px_32px_rgba(15,23,41,0.04)]",
                ].join(" ")}
                style={{ direction: "ltr" } as React.CSSProperties}
              >
                {f.visual}
              </div>
              <div
                className={reverse ? "reveal-left" : "reveal-right"}
                style={{ direction: "ltr" } as React.CSSProperties}
              >
                <span className="mb-4 block text-xs font-bold uppercase tracking-[3px] text-[var(--brand)]">
                  {f.label}
                </span>
                <h3
                  className="mb-5 font-serif font-black leading-[1.1] tracking-tight text-[var(--text-primary)]"
                  style={{ fontSize: "clamp(26px, 3.2vw, 42px)" }}
                >
                  {f.title}
                </h3>
                <p className="mb-7 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                  {f.body}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {f.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--brand)]/15 bg-[var(--brand-light)] px-4 py-1.5
                                 text-[13px] font-medium text-[var(--brand)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   TESTIMONIALS
══════════════════════════════════════════════════════════════════════════════ */
function Testimonials() {
  const reviews = [
    {
      stars: 5,
      quote:
        "We used to spend 45 minutes arguing about what to watch. DateFlix solved that completely. Now it's the best part of our Friday night.",
      name: "Sarah & Jake",
      meta: "Together 3 years \u00b7 214 movies matched",
      initials: "SJ",
      color: "bg-blue-50 text-blue-600",
    },
    {
      stars: 5,
      quote:
        "Long-distance and DateFlix is what keeps our movie nights alive. We swipe from different countries and enjoy films together.",
      name: "Marcus & L\u00e9a",
      meta: "Long distance \u00b7 89 movies matched",
      initials: "ML",
      color: "bg-amber-50 text-amber-600",
    },
    {
      stars: 5,
      quote:
        "The AI learned we both secretly love terrible horror movies. No judgment, just matches. We're completely obsessed.",
      name: "Priya & Daniel",
      meta: "Newlyweds \u00b7 56 movies matched",
      initials: "PD",
      color: "bg-rose-50 text-rose-600",
    },
  ];

  return (
    <section className="bg-section-soft">
      <div className="mx-auto max-w-[1100px] px-6 py-28 lg:py-36 text-center">
        <Reveal>
          <span className="mb-3 block text-xs font-bold uppercase tracking-[4px] text-[var(--brand)] font-sans">
            Couples Love It
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="mb-14 lg:mb-16 font-serif font-black leading-[1.05] tracking-tight text-[var(--text-primary)]"
            style={{ fontSize: "clamp(34px, 4.5vw, 56px)" }}
          >
            Real reviews from{" "}
            <span className="text-[var(--brand)]">real movie nights.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div className="testi-card rounded-3xl border border-[var(--border)] bg-white p-9 text-left shadow-[0_2px_16px_rgba(15,23,41,0.03)]">
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="var(--brand)">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-7 text-[15px] leading-relaxed text-[var(--text-primary)]">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${r.color}`}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--text-primary)]">
                      {r.name}
                    </div>
                    <div className="text-xs text-[var(--text-secondary)]">
                      {r.meta}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   PRICING
══════════════════════════════════════════════════════════════════════════════ */
type PlanFeature = { text: string; ok: boolean };
type Plan = {
  name: string;
  price: { monthly: number; annual: number };
  desc: string;
  cta: string;
  featured: boolean;
  badge: string | null;
  features: PlanFeature[];
};

const PLANS: Plan[] = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    desc: "Everything you need to start matching movies with your partner.",
    cta: "Get Started Free",
    featured: false,
    badge: null,
    features: [
      { text: "Up to 20 swipes per day", ok: true },
      { text: "Basic movie matching", ok: true },
      { text: "Match history (last 10)", ok: true },
      { text: "iOS & Android app", ok: true },
      { text: "AI recommendations", ok: false },
      { text: "Unlimited swipes", ok: false },
      { text: "Streaming availability", ok: false },
      { text: "Priority support", ok: false },
    ],
  },
  {
    name: "Couple",
    price: { monthly: 4.99, annual: 3.99 },
    desc: "The full DateFlix experience for couples who love movies.",
    cta: "Start Free Trial",
    featured: true,
    badge: "Most Popular",
    features: [
      { text: "Unlimited swipes", ok: true },
      { text: "Advanced movie matching", ok: true },
      { text: "Full match history", ok: true },
      { text: "iOS, Android & Web", ok: true },
      { text: "AI recommendations", ok: true },
      { text: "Streaming availability", ok: true },
      { text: "Mood-based picks", ok: true },
      { text: "Priority support", ok: true },
    ],
  },
  {
    name: "Cinephile",
    price: { monthly: 9.99, annual: 7.99 },
    desc: "For couples who take their movie nights seriously.",
    cta: "Go Cinephile",
    featured: false,
    badge: null,
    features: [
      { text: "Everything in Couple", ok: true },
      { text: "Curated watchlists", ok: true },
      { text: "Director & actor filters", ok: true },
      { text: "Date night planner", ok: true },
      { text: "Early access to features", ok: true },
      { text: "Exclusive film content", ok: true },
      { text: "Annual film report", ok: true },
      { text: "Dedicated support", ok: true },
    ],
  },
];

function PricingCard({
  plan,
  annual,
  delay,
}: {
  plan: Plan;
  annual: boolean;
  delay: number;
}) {
  const price = annual ? plan.price.annual : plan.price.monthly;

  return (
    <Reveal delay={delay}>
      <div
        className={[
          "relative overflow-hidden rounded-3xl p-10",
          plan.featured
            ? "bg-[var(--text-primary)] shadow-[0_32px_80px_rgba(15,23,41,0.2)] scale-[1.03]"
            : "pricing-plain bg-white border border-[var(--border)] shadow-[0_2px_16px_rgba(15,23,41,0.03)]",
        ].join(" ")}
      >
        {plan.featured && (
          <div
            className="absolute left-0 right-0 top-0 h-[3px]"
            style={{
              background: "linear-gradient(90deg, var(--brand), #ff6b6b)",
            }}
          />
        )}

        {plan.badge && (
          <div className="absolute right-5 top-5 rounded-full bg-[var(--brand)] px-3.5 py-1 text-[11px] font-bold tracking-wide text-white">
            {plan.badge}
          </div>
        )}

        <div
          className={[
            "mb-3 text-[13px] font-bold uppercase tracking-[3px]",
            plan.featured ? "text-white/50" : "text-[var(--text-secondary)]",
          ].join(" ")}
        >
          {plan.name}
        </div>

        <div className="mb-2 flex items-end gap-1">
          <span
            className={[
              "text-[52px] font-serif font-black leading-none tracking-tight",
              plan.featured ? "text-white" : "text-[var(--text-primary)]",
            ].join(" ")}
          >
            {price === 0 ? "Free" : `$${price}`}
          </span>
          {price > 0 && (
            <span
              className={[
                "mb-2.5 text-sm",
                plan.featured ? "text-white/45" : "text-[var(--text-secondary)]",
              ].join(" ")}
            >
              / mo
            </span>
          )}
        </div>

        {annual && price > 0 && (
          <div
            className={[
              "mb-2 text-xs",
              plan.featured ? "text-white/40" : "text-[var(--text-secondary)]",
            ].join(" ")}
          >
            {"Billed as $" + (price * 12).toFixed(0) + "/year"}
          </div>
        )}

        <p
          className={[
            "mb-7 min-h-[48px] text-sm leading-relaxed",
            plan.featured ? "text-white/55" : "text-[var(--text-secondary)]",
          ].join(" ")}
        >
          {plan.desc}
        </p>

        <div
          className={[
            "mb-6 h-px",
            plan.featured ? "bg-white/10" : "bg-[var(--border)]",
          ].join(" ")}
        />

        <ul className="mb-8 flex list-none flex-col gap-3 p-0">
          {plan.features.map((f) => (
            <li key={f.text} className="flex items-center gap-3">
              <span
                className={[
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
                  f.ok
                    ? plan.featured
                      ? "bg-[var(--brand)] text-white"
                      : "bg-[var(--brand)]/10 text-[var(--brand)]"
                    : plan.featured
                    ? "bg-white/[.08] text-white/25"
                    : "bg-[var(--surface)] text-[var(--text-muted)]",
                ].join(" ")}
              >
                {f.ok ? "\u2713" : "\u2013"}
              </span>
              <span
                className={[
                  "text-sm",
                  f.ok
                    ? plan.featured
                      ? "font-medium text-white"
                      : "font-medium text-[var(--text-primary)]"
                    : plan.featured
                    ? "text-white/30"
                    : "text-[var(--text-muted)]",
                ].join(" ")}
              >
                {f.text}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="#download"
          className={[
            "block rounded-full px-6 py-3.5 text-center text-[15px] font-bold no-underline transition-all duration-200",
            plan.featured
              ? "bg-[var(--brand)] text-white shadow-[0_8px_28px_rgba(229,9,20,0.35)] hover:shadow-[0_12px_36px_rgba(229,9,20,0.45)] hover:-translate-y-px"
              : "border border-[var(--border)] bg-transparent text-[var(--text-primary)] hover:border-[var(--text-primary)] hover:bg-[var(--surface)]",
          ].join(" ")}
        >
          {plan.cta}
        </a>
      </div>
    </Reveal>
  );
}

function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="mx-auto max-w-[1100px] px-6 py-28 lg:py-36">
      <div className="mb-16 text-center">
        <Reveal>
          <span className="mb-3 block text-xs font-bold uppercase tracking-[4px] text-[var(--brand)] font-sans">
            Pricing
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="mb-5 font-serif font-black leading-[1.05] tracking-tight text-[var(--text-primary)]"
            style={{ fontSize: "clamp(34px, 4.5vw, 56px)" }}
          >
            Simple pricing,{" "}
            <span className="text-[var(--brand)]">start for free.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mb-9 max-w-[440px] text-[16px] leading-relaxed text-[var(--text-secondary)]">
            No hidden fees. Cancel anytime. Your first movie night is on us.
          </p>
        </Reveal>

        {/* Toggle */}
        <Reveal delay={0.2}>
          <div className="inline-flex items-center rounded-full border border-[var(--border)] bg-white p-1.5 shadow-[0_2px_8px_rgba(15,23,41,0.04)]">
            <button
              onClick={() => setAnnual(false)}
              className={[
                "rounded-full border-none px-5 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer",
                !annual
                  ? "bg-[var(--text-primary)] text-white shadow-[0_2px_8px_rgba(15,23,41,0.15)]"
                  : "bg-transparent text-[var(--text-secondary)]",
              ].join(" ")}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={[
                "flex items-center gap-2 rounded-full border-none px-5 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer",
                annual
                  ? "bg-[var(--text-primary)] text-white shadow-[0_2px_8px_rgba(15,23,41,0.15)]"
                  : "bg-transparent text-[var(--text-secondary)]",
              ].join(" ")}
            >
              Annual
              <span className="rounded-full bg-[var(--brand)] px-2 py-[2px] text-[11px] font-bold text-white">
                Save 20%
              </span>
            </button>
          </div>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
        {PLANS.map((plan, i) => (
          <PricingCard
            key={plan.name}
            plan={plan}
            annual={annual}
            delay={i * 0.12}
          />
        ))}
      </div>

      <Reveal delay={0.3}>
        <p className="mt-10 text-center text-[13px] leading-relaxed text-[var(--text-secondary)]">
          All paid plans include a 7-day free trial. No credit card required to
          start. Cancel anytime.
        </p>
      </Reveal>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   FAQ
══════════════════════════════════════════════════════════════════════════════ */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const items = [
    {
      q: "Is DateFlix free to use?",
      a: "Yes! DateFlix is free to download and use. We offer a premium plan with unlimited swipes, advanced AI recommendations, and exclusive couple features for $4.99/month.",
    },
    {
      q: "How does movie matching work?",
      a: 'Both partners swipe through movies independently. When you both swipe right on the same movie, you get an instant "It\'s a Match!" notification. No coordination needed — it\'s delightfully simple.',
    },
    {
      q: "Which streaming services does DateFlix support?",
      a: "DateFlix shows you where each matched movie is available — Netflix, Disney+, Prime Video, Apple TV+, and more. We work with what you already have.",
    },
    {
      q: "Does it work for long-distance couples?",
      a: "Absolutely. DateFlix was designed with long-distance couples in mind. You can swipe from anywhere in the world and your matches sync instantly.",
    },
  ];

  return (
    <section id="faq" className="bg-section-soft">
      <div className="mx-auto max-w-[720px] px-6 py-28 lg:py-36">
        <Reveal>
          <span className="mb-3 block text-xs font-bold uppercase tracking-[4px] text-[var(--brand)] font-sans">
            FAQ
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="mb-12 font-serif font-black leading-[1.05] tracking-tight text-[var(--text-primary)]"
            style={{ fontSize: "clamp(34px, 4.5vw, 52px)" }}
          >
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="rounded-3xl border border-[var(--border)] bg-white overflow-hidden shadow-[0_2px_16px_rgba(15,23,41,0.03)]">
          {items.map((item, i) => (
            <div
              key={i}
              className={i < items.length - 1 ? "border-b border-[var(--border)]" : ""}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent px-8 py-6 text-left"
              >
                <span className="text-[16px] font-bold tracking-tight text-[var(--text-primary)]">
                  {item.q}
                </span>
                <span
                  className="ml-4 flex shrink-0 items-center justify-center w-8 h-8 rounded-full bg-[var(--surface)] text-[var(--brand)] transition-transform duration-300 text-lg font-light"
                  style={{
                    transform: open === i ? "rotate(45deg)" : "none",
                  }}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: open === i ? 200 : 0,
                  paddingBottom: open === i ? 24 : 0,
                }}
              >
                <p className="px-8 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   CTA BAND
══════════════════════════════════════════════════════════════════════════════ */
function CTABand() {
  return (
    <div id="download" className="mx-auto mb-28 max-w-[1100px] px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-[40px] border border-[var(--border)] bg-cta-gradient px-8 lg:px-16 py-20 lg:py-24 text-center shadow-[0_4px_32px_rgba(15,23,41,0.04)]">
          <div
            className="pointer-events-none absolute -top-[120px] left-1/2 h-[400px] w-[600px] -translate-x-1/2"
            style={{
              background:
                "radial-gradient(ellipse, rgba(229,9,20,0.06), transparent 70%)",
            }}
          />
          <h2
            className="relative mb-5 font-serif font-black leading-[1.05] tracking-tight text-[var(--text-primary)]"
            style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}
          >
            Start your first{" "}
            <span className="text-[var(--brand)]">movie match tonight.</span>
          </h2>
          <p className="relative mb-11 text-lg text-[var(--text-secondary)]">
            Free to download. No credit card required. Just two people and a love
            of movies.
          </p>
          <div className="relative flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="store-btn flex items-center gap-3.5 rounded-2xl bg-[var(--text-primary)] px-7 py-4
                         text-white no-underline shadow-[0_8px_32px_rgba(15,23,41,0.18)]"
            >
              <AppleIcon className="w-7 h-7" />
              <div className="text-left">
                <div className="mb-0.5 text-[11px] font-normal opacity-70 leading-tight">
                  Download on the
                </div>
                <div className="text-[15px] font-semibold leading-tight">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="store-btn flex items-center gap-3.5 rounded-2xl bg-[var(--text-primary)] px-7 py-4
                         text-white no-underline shadow-[0_8px_32px_rgba(15,23,41,0.18)]"
            >
              <GooglePlayIcon className="w-7 h-7" />
              <div className="text-left">
                <div className="mb-0.5 text-[11px] font-normal opacity-70 leading-tight">
                  Get it on
                </div>
                <div className="text-[15px] font-semibold leading-tight">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-5 px-6 lg:px-10 py-10">
        <span className="text-xl font-bold text-[var(--text-primary)] font-serif">
          Date<span className="text-[var(--brand)]">Flix</span>
        </span>
        <div className="flex flex-wrap gap-8">
          {["Privacy Policy", "Terms of Service", "Contact", "Blog"].map(
            (l) => (
              <a
                key={l}
                href="#"
                className="text-[13px] font-medium text-[var(--text-secondary)] no-underline transition-colors hover:text-[var(--text-primary)]"
              >
                {l}
              </a>
            )
          )}
        </div>
        <div className="mt-4 w-full text-center text-xs text-[var(--text-muted)]">
          {"© 2025 DateFlix. Made with love for couples everywhere."}
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   ROOT
══════════════════════════════════════════════════════════════════════════════ */
export default function DateFlixLanding() {
  useScrollReveal();
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Nav />
      <Hero />
      <Ticker />
      <HowItWorks />
      <StatsBand />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTABand />
      <Footer />
    </div>
  );
}
