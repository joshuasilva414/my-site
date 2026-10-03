import { ViewTransition } from "react";
import Navbar from "../navbar";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen min-h-screen px-10 py-10 md:px-20 md:py-20 lg:px-60 lg:py-40">
      <main className="w-full space-y-4 max-w-7xl mx-auto">
        <Navbar />
        <ViewTransition enter="slide-in">{children}</ViewTransition>
      </main>
    </div>
  );
}
