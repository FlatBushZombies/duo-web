"use client";

import React from "react";
import Nav from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useScrollReveal } from "@/lib/useScrollReveal";

const NAV_LINKS: [string, string][] = [
  ["How It Works", "/#how-it-works"],
  ["Features", "/#features"],
  ["Pricing", "/#pricing"],
  ["FAQ", "/#faq"],
];

export type LegalSection = {
  id: string;
  title: string;
  body: React.ReactNode;
};

export function LegalLayout({
  badge,
  title,
  lastUpdated,
  crumbLabel,
  sections,
}: {
  badge: string;
  title: string;
  lastUpdated: string;
  crumbLabel: string;
  sections: LegalSection[];
}) {
  useScrollReveal();

  return (
    <main className="min-h-screen bg-background">
      <Nav links={NAV_LINKS} ctaHref="/#download" />

      <section className="pt-32 px-6">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: crumbLabel }]} />
        </div>
      </section>

      <section className="pt-8 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal hero-badge inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white border-2 border-[var(--line)] rounded-full text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {badge}
          </div>
          <h1 className="reveal hero-h1 font-serif text-4xl md:text-5xl font-bold text-black mb-4">
            {title}
          </h1>
          <p className="reveal hero-sub text-muted-foreground text-base md:text-lg">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="reveal grid md:grid-cols-[220px_1fr] gap-10">
            <aside className="hidden md:block">
              <div className="sticky top-28 p-5 bg-white border-[3px] border-[var(--line)] rounded-[26px] shadow-[6px_7px_0px_rgba(30,29,25,0.98)]">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-black mb-4">
                  On this page
                </p>
                <nav className="space-y-2.5">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {s.title.replace(/^\d+\.\s*/, "")}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="p-6 md:p-10 bg-white border-[3px] border-[var(--line)] rounded-[26px] shadow-[7px_8px_0px_rgba(30,29,25,0.98)] space-y-10">
              {sections.map((s) => (
                <div key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-black mb-3">
                    {s.title}
                  </h2>
                  <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {s.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
