"use client";

import Link from "next/link";
import { LegalLayout, type LegalSection } from "@/components/LegalLayout";

const SECTIONS: LegalSection[] = [
  {
    id: "agreement",
    title: "1. Agreement to Terms",
    body: (
      <>
        <p>
          These Terms of Use (&ldquo;Terms&rdquo;) are a legal agreement between you and Duo
          (&ldquo;Duo&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) governing your access to
          and use of the Duo mobile app and the duoapp.com website (together, the &ldquo;Service&rdquo;).
        </p>
        <p>
          By creating an account or otherwise using the Service, you agree to be bound by these Terms and by
          our{" "}
          <Link href="/privacy" className="text-primary font-medium hover:underline">
            Privacy Policy
          </Link>
          . If you do not agree, please do not use the Service.
        </p>
      </>
    ),
  },
  {
    id: "the-service",
    title: "2. The Service",
    body: (
      <p>
        Duo helps two people &mdash; couples, friends, or family &mdash; agree on what to watch by swiping on
        movies independently, matching when you both like the same title, resolving disagreements with the
        AI-assisted Debate feature, and planning movie nights together. Streaming availability, artwork, and
        metadata are sourced from The Movie Database (TMDB) and may not always be complete or current.
      </p>
    ),
  },
  {
    id: "eligibility-accounts",
    title: "3. Eligibility &amp; Accounts",
    body: (
      <>
        <p>
          You must be at least 13 years old to use Duo. By using the Service, you represent that you meet this
          requirement and that any information you provide during sign-up is accurate.
        </p>
        <p>
          You&rsquo;re responsible for safeguarding your account credentials and for all activity that occurs
          under your account. Notify us immediately if you suspect unauthorized access. Duo authenticates
          accounts through our authentication provider (Clerk); you may sign in with email, Google, or Apple.
        </p>
      </>
    ),
  },
  {
    id: "subscriptions",
    title: "4. Subscriptions, Trials &amp; Billing",
    body: (
      <>
        <p>
          Duo is free to download and use with limited features (the &ldquo;Free&rdquo; plan). Paid plans
          (&ldquo;Couple&rdquo; and &ldquo;Cinephile&rdquo;) unlock unlimited swipes, AI recommendations, and
          additional features, billed monthly or annually as shown in the app and on{" "}
          <Link href="/#pricing" className="text-primary font-medium hover:underline">
            our pricing page
          </Link>{" "}
          at the time of purchase.
        </p>
        <p className="font-semibold text-black">Free trial</p>
        <p>
          Paid plans include a 7-day free trial. No payment method is required to start a trial. If you add a
          payment method and do not cancel before the trial ends, your subscription begins and you will be
          charged the plan price shown at checkout.
        </p>
        <p className="font-semibold text-black">Auto-renewal</p>
        <p>
          Subscriptions automatically renew for the same term (monthly or annual) at the then-current price
          unless you cancel at least 24 hours before the end of the current period. Your payment method will be
          charged automatically through the Apple App Store or Google Play account you used to subscribe.
        </p>
        <p className="font-semibold text-black">Managing &amp; canceling</p>
        <p>
          You can manage or cancel your subscription at any time in your Apple ID account settings or the
          Google Play Store subscriptions page &mdash; Duo does not process payments directly and cannot cancel
          a subscription on your behalf. Canceling stops future renewals but does not refund the current
          billing period. Refunds are handled by Apple or Google under their respective refund policies.
        </p>
        <p className="font-semibold text-black">Price changes</p>
        <p>
          We may change subscription pricing from time to time. We&rsquo;ll notify you of any price increase
          before it applies to your next renewal, giving you the opportunity to cancel.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "5. Acceptable Use",
    body: (
      <ul className="list-none space-y-2">
        {[
          "Impersonate another person or misrepresent your affiliation with anyone.",
          "Use the Service to harass, abuse, or harm your partner or any other user.",
          "Attempt to access another user's account or data without authorization.",
          "Reverse engineer, scrape, or interfere with the Service's normal operation.",
          "Use the Service for any unlawful purpose or in violation of these Terms.",
        ].map((t) => (
          <li key={t} className="flex gap-3">
            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            <span>You agree not to: {t}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "ai-features",
    title: "6. AI-Generated Recommendations",
    body: (
      <p>
        Debate resolutions and Movie Night Planner suggestions are generated using Google&rsquo;s Gemini AI
        based on the preferences and content you and your partner provide. AI-generated recommendations are
        offered for entertainment purposes, may occasionally be inaccurate or unexpected, and don&rsquo;t
        constitute professional advice of any kind.
      </p>
    ),
  },
  {
    id: "user-content",
    title: "7. Your Content",
    body: (
      <p>
        You retain ownership of any content you submit to Duo, such as debate prompts, preferences, or
        free-text input. By submitting content, you grant us a limited license to use, store, and process it
        solely to operate and improve the Service, including sending it to our AI and data providers as
        described in our{" "}
        <Link href="/privacy" className="text-primary font-medium hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "8. Intellectual Property",
    body: (
      <p>
        The Duo name, logo, app, and website &mdash; excluding third-party content like movie artwork and
        metadata licensed from TMDB &mdash; are owned by Duo and protected by intellectual property laws. You
        may not copy, modify, distribute, or create derivative works from the Service without our written
        permission.
      </p>
    ),
  },
  {
    id: "third-party-services",
    title: "9. Third-Party Services",
    body: (
      <p>
        The Service relies on third-party providers &mdash; including Clerk, Supabase, Google Gemini, TMDB,
        Resend, Expo, and Vercel &mdash; to function. We&rsquo;re not responsible for the availability or
        content of third-party services, and your use of any linked streaming platform is subject to that
        platform&rsquo;s own terms.
      </p>
    ),
  },
  {
    id: "termination",
    title: "10. Termination",
    body: (
      <p>
        You may stop using Duo and delete your account at any time from Profile &rarr; Account Settings, which
        permanently removes your data as described in our Privacy Policy. We may suspend or terminate your
        access if you violate these Terms or use the Service in a way that could harm Duo or other users.
      </p>
    ),
  },
  {
    id: "disclaimers",
    title: "11. Disclaimers",
    body: (
      <p>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any
        kind, express or implied, including warranties of merchantability, fitness for a particular purpose,
        or non-infringement. We don&rsquo;t guarantee that matches, recommendations, or streaming availability
        data will always be accurate, complete, or uninterrupted.
      </p>
    ),
  },
  {
    id: "liability",
    title: "12. Limitation of Liability",
    body: (
      <p>
        To the fullest extent permitted by law, Duo and its team won&rsquo;t be liable for any indirect,
        incidental, special, consequential, or punitive damages, or any loss of data or goodwill, arising from
        your use of the Service. Our total liability for any claim relating to the Service is limited to the
        amount you paid us, if any, in the 12 months before the claim arose.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "13. Governing Law",
    body: (
      <p>
        These Terms are governed by the laws of the jurisdiction in which Duo operates, without regard to
        conflict-of-law principles. Any dispute not resolved informally will be handled in the courts of that
        jurisdiction, unless applicable law gives you the right to bring a claim in your local courts.
      </p>
    ),
  },
  {
    id: "changes",
    title: "14. Changes to These Terms",
    body: (
      <p>
        We may update these Terms from time to time. If we make material changes, we&rsquo;ll notify you in the
        app or by email before the change takes effect. The &ldquo;Last updated&rdquo; date at the top of this
        page always reflects the current version. Continuing to use Duo after changes take effect means you
        accept the updated Terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "15. Contact Us",
    body: (
      <p>
        Questions about these Terms? Reach us at{" "}
        <a href="mailto:support@duoapp.com" className="text-primary font-medium hover:underline">
          support@duoapp.com
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

export default function TermsContent() {
  return (
    <LegalLayout
      badge="LEGAL"
      title="Terms of Use"
      lastUpdated="August 30, 2026"
      crumbLabel="Terms of Use"
      sections={SECTIONS}
    />
  );
}
