import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const TO_EMAIL = "support@duoapp.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const type = body.type === "feedback" ? "feedback" : body.type === "support" ? "support" : null;
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const category = typeof body.category === "string" ? body.category.trim() : "";
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.website ?? "").trim();

  // Honeypot: bots fill hidden fields. Pretend success without sending anything.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!type) {
    return NextResponse.json({ error: "Invalid form type." }, { status: 400 });
  }
  if (!message || message.length > 5000) {
    return NextResponse.json({ error: "Please enter a message (up to 5000 characters)." }, { status: 400 });
  }
  if (name.length > 200 || subject.length > 200 || category.length > 100) {
    return NextResponse.json({ error: "One of the fields is too long." }, { status: 400 });
  }
  // Support requests require name + a valid email so we can reply; feedback can be anonymous.
  if (type === "support") {
    if (!name) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    }
    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!subject) {
      return NextResponse.json({ error: "Please enter a subject." }, { status: 400 });
    }
  } else if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Duo Website <onboarding@resend.dev>";

  if (!RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY is not set — submission was not delivered.");
    return NextResponse.json(
      { error: "Our contact form isn't fully set up yet. Please email support@duoapp.com directly." },
      { status: 503 }
    );
  }

  const heading = type === "support" ? "New support request" : "New feedback submission";
  const html = `
    <h2>${heading}</h2>
    ${name ? `<p><strong>Name:</strong> ${escapeHtml(name)}</p>` : ""}
    ${email ? `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` : "<p><em>No email provided.</em></p>"}
    ${category ? `<p><strong>Category:</strong> ${escapeHtml(category)}</p>` : ""}
    ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        ...(email && EMAIL_RE.test(email) ? { reply_to: email } : {}),
        subject: `[Duo ${type === "support" ? "Support" : "Feedback"}] ${subject || name || "Website submission"}`,
        html,
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.error("[contact] Resend API error:", res.status, errText);
      return NextResponse.json(
        { error: "Something went wrong sending your message. Please email support@duoapp.com directly." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[contact] Failed to reach Resend:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please email support@duoapp.com directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
