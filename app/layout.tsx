import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kredit.amli.group"),
  applicationName: "AMLI Kredit",
  title: "AMLI Kredit | Financing built on trust",
  description:
    "AMLI Kredit is a licensed lender providing property-backed, personal and SME financing to underserved Malaysians — transparent rates regulated under the Moneylenders Act 1951, approval in 2–3 days, up to 96-month tenure, zero early-settlement fee.",
  openGraph: {
    title: "AMLI Kredit | Financing built on trust",
    description:
      "Licensed property-backed, personal and SME financing — fast, transparent, fair.",
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
