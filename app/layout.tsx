import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import {ReactLenis} from "lenis/react"

import Navbar from "@/components/home/Navbar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aquila Studios",
  description: "Digital agency website",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${playfair.variable} scroll-smooth`}>
      <body
        className={`
          ${spaceGrotesk.variable}
          ${playfair.variable}
          font-sans 
          antialiased 
          bg-[#f8f8f8]
          text-black
        `}
      >
        <ReactLenis root />
        <div className="fixed top-0 left-0 w-full z-50 bg-[#faedcd]">
          <Navbar />
        </div>
        <main className="mt-16" >
          {children}
        </main>
      </body>
    </html>
  );
}
