import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kredit.amli.group"),
  applicationName: "AMLI Kredit",
  title: "AMLI Kredit | Financing built on trust",
  description:
    "AMLI Kredit is a Shariah-compliant lender providing flexible, transparent personal and SME financing to underserved Malaysian segments — bridging financial gaps and funding disciplined growth.",
  openGraph: {
    title: "AMLI Kredit | Financing built on trust",
    description:
      "Shariah-compliant personal and SME financing — flexible, transparent, accessible.",
    images: [
      {
        url: "/images/kl-skyline-hero.jpg",
        width: 1600,
        height: 900,
        alt: "Golden-hour Kuala Lumpur skyline"
      }
    ],
    type: "website"
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml"
      }
    ],
    apple: "/apple-icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-MY">
      <body>{children}</body>
    </html>
  );
}
