import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarosh Hussain | Frontend Developer & UI/UX Designer",
  description:
    "Creative Frontend Developer and UI/UX Designer specializing in React, Next.js, and modern web experiences. Building responsive, user-friendly digital products.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "UI/UX Designer",
    "Web Developer",
    "Sarosh Hussain",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Sarosh Hussain" }],
  openGraph: {
    title: "Sarosh Hussain | Frontend Developer & UI/UX Designer",
    description:
      "Creative Frontend Developer and UI/UX Designer specializing in React, Next.js, and modern web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark`}
    >
      <body className="bg-[#0a0a0f] text-[#f0f0f5] min-h-screen antialiased">
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
