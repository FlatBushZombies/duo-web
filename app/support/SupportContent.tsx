"use client";

import { useState, type FormEvent } from "react";
import { Mail, Star, Send, CheckCircle2, AlertCircle } from "lucide-react";
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

const CATEGORIES = ["Bug report", "Billing", "Account", "General question", "Other"];

const inputClass =
  "w-full px-4 py-3 text-sm bg-white border-2 border-[var(--line)] rounded-xl outline-none transition-all placeholder:text-muted-foreground focus:shadow-[3px_4px_0px_rgba(30,29,25,0.98)] focus:-translate-y-0.5";

const labelClass = "block text-xs font-bold tracking-[0.15em] uppercase text-black mb-2";

type Mode = "support" | "feedback";
type Status = "idle" | "submitting" | "success" | "error";

function StarPicker({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center gap-1.5" role="radiogroup" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={value === n}
          aria-label={`${n} star${n > 1 ? "s" : ""}`}
          onClick={() => onChange(n)}
          className="p-1 transition-transform hover:scale-110"
        >
          <Star
            className={`w-7 h-7 ${n <= value ? "fill-amber-400 text-amber-400" : "fill-transparent text-black/30"}`}
            strokeWidth={2}
          />
        </button>
      ))}
    </div>
  );
}

export default function SupportContent() {
  useScrollReveal();

  const [mode, setMode] = useState<Mode>("support");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [rating, setRating] = useState(5);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      type: mode,
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      category: mode === "support" ? String(data.get("category") || "") : undefined,
      subject: mode === "support" ? String(data.get("subject") || "") : `Feedback (${rating}/5 stars)`,
      message: String(data.get("message") || ""),
      website: String(data.get("website") || ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong. Please try again or email us directly.");
        return;
      }

      setStatus("success");
      form.reset();
      setRating(5);
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Nav links={NAV_LINKS} ctaHref="/#download" />

      <section className="pt-32 px-6">
        <div className="max-w-2xl mx-auto">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Support" }]} />
        </div>
      </section>

      <section className="pt-8 pb-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal hero-badge inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white border-2 border-[var(--line)] rounded-full text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            SUPPORT
          </div>
          <h1 className="reveal hero-h1 font-serif text-4xl md:text-5xl font-bold text-black mb-4">
            We&rsquo;re here to help.
          </h1>
          <p className="reveal hero-sub text-muted-foreground text-base md:text-lg max-w-md mx-auto">
            Got a bug, a billing question, or an idea for Duo? Send it our way &mdash; we read every message.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto">

          {/* Mode toggle */}
          <div className="reveal flex justify-center mb-8">
            <div className="inline-flex bg-white border-2 border-[var(--line)] rounded-xl p-1 shadow-[3px_4px_0px_rgba(30,29,25,0.98)]">
              {([
                ["support", "Get Support"],
                ["feedback", "Share Feedback"],
              ] as const).map(([val, label]) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => {
                    setMode(val);
                    setStatus("idle");
                  }}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    mode === val ? "bg-primary text-white" : "text-black hover:bg-black/5"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Form card */}
          <div className="reveal p-6 md:p-10 bg-white border-[3px] border-[var(--line)] rounded-[26px] shadow-[7px_8px_0px_rgba(30,29,25,0.98)]">

            {status === "success" ? (
              <div className="text-center py-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-[var(--line)] mb-5">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-black mb-2">
                  {mode === "support" ? "Got it — we're on it." : "Thanks for the feedback!"}
                </h2>
                <p className="text-muted-foreground max-w-sm mx-auto mb-6">
                  {mode === "support"
                    ? "We'll get back to you at the email you provided within 1–2 business days."
                    : "It genuinely helps us make Duo better for every couple using it."}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="px-5 py-2.5 rounded-xl bg-black text-white text-sm font-semibold border-2 border-[var(--line)] shadow-[3px_4px_0px_rgba(30,29,25,0.98)] transition-all hover:-translate-y-0.5"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} key={mode} className="space-y-5">
                {/* Honeypot — hidden from real users, catches bots */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Leave this field empty</label>
                  <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name {mode === "feedback" && <span className="normal-case font-normal text-muted-foreground">(optional)</span>}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required={mode === "support"}
                      placeholder="Jane Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email {mode === "feedback" && <span className="normal-case font-normal text-muted-foreground">(optional)</span>}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required={mode === "support"}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                {mode === "support" ? (
                  <>
                    <div>
                      <label htmlFor="category" className={labelClass}>
                        Category
                      </label>
                      <select id="category" name="category" defaultValue={CATEGORIES[0]} className={inputClass}>
                        {CATEGORIES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="subject" className={labelClass}>
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        placeholder="Brief summary of the issue"
                        className={inputClass}
                      />
                    </div>
                  </>
                ) : (
                  <div>
                    <label className={labelClass}>How would you rate Duo?</label>
                    <StarPicker value={rating} onChange={setRating} />
                  </div>
                )}

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={5000}
                    placeholder={
                      mode === "support"
                        ? "Tell us what's happening — the more detail, the faster we can help."
                        : "What's working well? What would make Duo better?"
                    }
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-start gap-2.5 px-4 py-3 bg-primary/5 border-2 border-primary/30 rounded-xl text-sm text-primary">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-black text-white text-sm font-bold border-2 border-[var(--line)] shadow-[3px_4px_0px_rgba(30,29,25,0.98)] transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none"
                >
                  {status === "submitting" ? (
                    "Sending…"
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {mode === "support" ? "Send message" : "Send feedback"}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Direct email fallback */}
          <div className="reveal flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground">
            <Mail className="w-4 h-4" />
            <span>
              Prefer email? Reach us directly at{" "}
              <a href="mailto:support@duoapp.com" className="text-primary font-medium hover:underline">
                support@duoapp.com
              </a>
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
