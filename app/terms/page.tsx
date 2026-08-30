import type { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms governing your use of the Duo mobile app and duoapp.com, including subscription billing, auto-renewal, and cancellation.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Use | Duo",
    description:
      "The terms governing your use of the Duo mobile app and duoapp.com, including subscription billing, auto-renewal, and cancellation.",
    url: "/terms",
  },
};

export default function TermsOfUsePage() {
  return <TermsContent />;
}
