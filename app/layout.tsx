import type { Metadata } from "next";
import { ViewTransition } from "react";
import Navbar from "./navbar";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: "./fonts/satoshi/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "700",
  display: "swap",
});

const erode = localFont({
  src: "./fonts/erode/Erode-Variable.woff2",
  variable: "--font-erode",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joshua Silva | Software Engineer",
  description: "Joshua Silva's Portfolio Website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${erode.variable} antialiased`}>
        <div className="w-screen h-screen px-10 py-10 md:px-20 md:py-20 lg:px-60 lg:py-40">
          <main className="w-full space-y-4">
            <Navbar />
            <ViewTransition enter="slide-in">{children}</ViewTransition>
          </main>
        </div>
      </body>
    </html>
  );
}
