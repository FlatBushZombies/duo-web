import type { Metadata } from "next";
import SupportContent from "./SupportContent";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Duo or share feedback. Contact our support team about bugs, billing, or your account, or tell us how we can make Duo better.",
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    title: "Support | Duo",
    description:
      "Get help with Duo or share feedback. Contact our support team about bugs, billing, or your account, or tell us how we can make Duo better.",
    url: "/support",
  },
};

export default function SupportPage() {
  return <SupportContent />;
}
