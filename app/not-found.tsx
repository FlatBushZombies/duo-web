import type { Metadata } from "next";
import Link from "next/link";
import { Clapperboard, ArrowLeft } from "lucide-react";
import Nav from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: true },
};

const QUICK_LINKS: [string, string][] = [
  ["Home", "/"],
  ["Support", "/support"],
  ["Privacy Policy", "/privacy"],
  ["Terms of Use", "/terms"],
];

const NAV_LINKS: [string, string][] = [
  ["How It Works", "/#how-it-works"],
  ["Features", "/#features"],
  ["Pricing", "/#pricing"],
  ["FAQ", "/#faq"],
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Nav links={NAV_LINKS} ctaHref="/#download" />

      <section className="flex-1 flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-lg mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-white border-2 border-[var(--line)] rounded-full text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            404
          </div>

          <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-white border-[3px] border-[var(--line)] rounded-[26px] shadow-[7px_8px_0px_rgba(30,29,25,0.98)] rotate-[-3deg]">
            <Clapperboard className="w-9 h-9 text-primary" strokeWidth={2} />
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
            This scene got cut.
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-sm mx-auto">
            The page you&rsquo;re looking for isn&rsquo;t in our library &mdash; but there&rsquo;s plenty to
            watch back home.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-black text-white text-sm font-bold border-2 border-[var(--line)] shadow-[3px_4px_0px_rgba(30,29,25,0.98)] transition-all hover:-translate-y-0.5 mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {QUICK_LINKS.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 text-sm font-medium rounded-xl border-2 border-[var(--line)] bg-white transition-all duration-200 hover:scale-[1.04] hover:rotate-1 text-zinc-700 hover:text-black"
                style={{ boxShadow: "2px 2px 0px rgba(30,29,25,0.98)" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
