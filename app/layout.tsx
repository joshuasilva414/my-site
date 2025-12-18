import type { Metadata } from "next";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${erode.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
