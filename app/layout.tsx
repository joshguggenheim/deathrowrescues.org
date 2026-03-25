import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Death Row Rescues — Every Dog Deserves a Second Chance",
  description:
    "Death Row Rescues saves dogs on death row at shelters across America. Spotlight. Fund. Connect.",
  openGraph: {
    title: "Death Row Rescues",
    description:
      "Saving dogs on death row at shelters across America.",
    url: "https://deathrowrescues.org",
    siteName: "Death Row Rescues",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
