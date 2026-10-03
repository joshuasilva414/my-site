import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";

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
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/favicon_io/apple-touch-icon.png"
          type="image/png"
          sizes="any"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>
      <body className={`${satoshi.variable} ${erode.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
