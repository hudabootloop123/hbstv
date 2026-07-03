import type { Metadata } from "next";
import AboutView from "../components/AboutView";

export const metadata: Metadata = {
  title: "Tentang Pengembang — Huda Bootloop | IPTV Player",
  description:
    "Learn more about Huda Bootloop, the self-learned developer and reverse engineer behind this premium open-source IPTV web player. Get contact options and official GitHub links.",
  keywords: [
    "Huda Bootloop",
    "developer",
    "creator",
    "IPTV creator",
    "IPTV Web Player support",
    "Telegram HUDA",
    "open source IPTV",
    "HUDA101",
    "huda-dev",
    "huda github"
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    username: "hudabootloop123",
    firstName: "HUDA",
    lastName: "-101",
    url: "/about",
    title: " Developer — Huda Bootloop",
    description:
      "Self-learned developer and reverse engineer behind the premium open-source IPTV web streaming player.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Huda Bootloop - IPTV Player Developer",
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
