import type { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Duo collects, uses, and protects your data across the mobile app and duoapp.com — including how to permanently delete your account and information.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Duo",
    description:
      "How Duo collects, uses, and protects your data across the mobile app and duoapp.com — including how to permanently delete your account and information.",
    url: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}
