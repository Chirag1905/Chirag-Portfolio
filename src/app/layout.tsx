import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Chirag Vadhavana | Mern Stack Developer",
  description: "Created by Chirag",
  icons: {
    icon: "/images/hero-image2-removebg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased relative`}
      >
        <div className="bg-noise fixed inset-0 z-50 pointer-events-none" />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
