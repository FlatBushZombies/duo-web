"use client";

import Link from "next/link";
import { LegalLayout, type LegalSection } from "@/components/LegalLayout";

const SECTIONS: LegalSection[] = [
  {
    id: "overview",
    title: "1. Overview",
    body: (
      <>
        <p>
          Duo (&ldquo;Duo&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a mobile app that
          helps couples and friends agree on what to watch by swiping, matching, and debating on movies together.
          This Privacy Policy explains what information we collect through the Duo mobile app and the
          duoapp.com website, how we use and share it, and the choices you have &mdash; including how to
          permanently delete your data.
        </p>
        <p>
          By creating an account or using Duo, you agree to the collection and use of information as
          described in this policy. If you do not agree, please do not use the app.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    body: (
      <>
        <p className="font-semibold text-black">Account &amp; profile information</p>
        <p>
          When you sign up, our authentication provider (Clerk) collects your email address, name, and
          profile photo, and, if you sign in with Google or Apple, basic profile details from that provider.
          We use this to create and secure your account and to identify you to your partner.
        </p>

        <p className="font-semibold text-black">Movie &amp; matching activity</p>
        <p>
          We store the movies you swipe on, your matches, your watchlist, invitations you send or accept to
          pair with a partner, and your session and streak history. This is the core data that makes matching
          work and is stored in our Supabase database.
        </p>

        <p className="font-semibold text-black">Debate &amp; movie-night planner content</p>
        <p>
          When you use the Movie Night Planner or start a Debate, we collect the preferences you provide
          &mdash; such as mood, genre, streaming services, available time, and occasion &mdash; along with any
          free-text input you or your partner enter. This content is sent to Google&rsquo;s Gemini AI to
          generate recommendations or settle a debate, and the resulting recommendation is stored with your
          session so you can revisit it.
        </p>

        <p className="font-semibold text-black">Notifications</p>
        <p>
          If you enable push notifications, we store a device push token (issued by Expo) so we can deliver
          match, streak, and debate alerts. If you invite a partner by email, we use that email solely to send
          the invitation.
        </p>

        <p className="font-semibold text-black">Device &amp; usage data</p>
        <p>
          We automatically collect limited technical data such as app version, device type, and operating
          system to keep the app stable and diagnose crashes. On our website, we use privacy-respecting
          analytics (Vercel Analytics) that do not use tracking cookies or sell data to third parties.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    body: (
      <ul className="list-none space-y-2">
        {[
          "Create, secure, and let you sign in to your account.",
          "Match you with your partner and show you movies you'll both enjoy.",
          "Generate AI-assisted recommendations and resolve debates via Gemini.",
          "Fetch movie titles, posters, and streaming availability from The Movie Database (TMDB).",
          "Track and reward streaks, and send notifications you've opted into.",
          "Diagnose bugs, improve performance, and keep the service secure.",
          "Respond to support requests you send us.",
        ].map((t) => (
          <li key={t} className="flex gap-3">
            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "how-we-share",
    title: "4. How We Share Your Information",
    body: (
      <>
        <p>
          We do not sell your personal information. We share data only with the service providers
          (&ldquo;sub-processors&rdquo;) that help us run Duo, and only to the extent needed for them to
          perform their function:
        </p>
        <div className="overflow-x-auto mt-4 mb-2">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="text-left py-2 pr-4 font-serif text-black">Provider</th>
                <th className="text-left py-2 font-serif text-black">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Clerk", "Authentication and account management"],
                ["Supabase", "Database hosting and backend functions"],
                ["Google Gemini", "AI-generated movie recommendations and debate resolution"],
                ["TMDB", "Movie titles, artwork, and streaming availability data"],
                ["Resend", "Delivering partner invitation emails and website contact forms"],
                ["Expo", "Delivering push notifications to your device"],
                ["Vercel", "Hosting duoapp.com and privacy-respecting site analytics"],
              ].map(([name, purpose]) => (
                <tr key={name}>
                  <td className="py-2 pr-4 font-medium text-black whitespace-nowrap">{name}</td>
                  <td className="py-2 text-muted-foreground">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Each provider is contractually restricted to using your data only to provide services to us. We may
          also disclose information if required by law, to protect the rights and safety of Duo or our users,
          or in connection with a merger, acquisition, or sale of assets, in which case we will notify you.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    body: (
      <p>
        We keep your account and activity data for as long as your account is active, so we can keep
        matching, syncing streaks, and showing your history. If you delete your account, we permanently
        delete your profile, swipes, matches, watchlist, streaks, and debate sessions from our active
        database, other than records we&rsquo;re legally required to retain (for example, for fraud
        prevention or tax purposes), which are kept only as long as necessary.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "6. Your Rights &amp; Choices",
    body: (
      <>
        <p className="font-semibold text-black">Delete your account, anytime</p>
        <p>
          Duo has a built-in account deletion feature under Profile &rarr; Account Settings. Deleting your
          account permanently removes your profile, swipe history, matches, watchlist, streak data, and
          debate sessions &mdash; no support ticket required.
        </p>
        <p className="font-semibold text-black">Access, correction, and portability</p>
        <p>
          You can review and edit most of your profile information directly in the app. To request a copy of
          your data or ask us to correct it, contact us using the details below.
        </p>
        <p className="font-semibold text-black">Notifications</p>
        <p>
          You can disable push notifications at any time from your device settings or in-app notification
          preferences.
        </p>
        <p>
          Depending on where you live (for example, the EEA, UK, or California), you may have additional
          rights under laws like the GDPR or CCPA, including the right to object to or restrict certain
          processing. Contact us to exercise any of these rights.
        </p>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    title: "7. Children's Privacy",
    body: (
      <p>
        Duo is not directed to children under 13, and we do not knowingly collect information from anyone
        under 13. If you believe a child has provided us with personal information, contact us and we will
        delete it.
      </p>
    ),
  },
  {
    id: "security",
    title: "8. Data Security",
    body: (
      <p>
        We rely on industry-standard safeguards from our providers &mdash; including encryption in transit,
        access controls, and row-level security on our database &mdash; to protect your information. No
        method of transmission or storage is 100% secure, so we can&rsquo;t guarantee absolute security, but
        we work to protect your data at every layer we control.
      </p>
    ),
  },
  {
    id: "international-transfers",
    title: "9. International Data Transfers",
    body: (
      <p>
        Our service providers may process and store data in countries other than your own, including the
        United States. Where required, we rely on appropriate safeguards, such as standard contractual
        clauses, to protect data transferred internationally.
      </p>
    ),
  },
  {
    id: "changes",
    title: "10. Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. If we make material changes, we&rsquo;ll notify
        you in the app or by email before the change takes effect. The &ldquo;Last updated&rdquo; date at the
        top of this page always reflects the current version.
      </p>
    ),
  },
  {
    id: "contact",
    title: "11. Contact Us",
    body: (
      <p>
        Questions about this policy or your data? Reach us at{" "}
        <a href="mailto:privacy@duoapp.com" className="text-primary font-medium hover:underline">
          privacy@duoapp.com
        </a>{" "}
        or through our{" "}
        <Link href="/support" className="text-primary font-medium hover:underline">
          Support page
        </Link>
        .
      </p>
    ),
  },
];

export default function PrivacyContent() {
  return (
    <LegalLayout
      badge="LEGAL"
      title="Privacy Policy"
      lastUpdated="August 20, 2026"
      crumbLabel="Privacy Policy"
      sections={SECTIONS}
    />
  );
}
