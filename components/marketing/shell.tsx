import Link from "next/link";
import { ArrowUpRight, ArrowRight, Waves, Sprout, Dices } from "lucide-react";

const products = [
  { slug: "river", name: "River", icon: Waves },
  { slug: "bonsai", name: "Bonsai", icon: Sprout },
  { slug: "mythic-ai", name: "Mythic AI", icon: Dices },
] as const;

type ProductSlug = (typeof products)[number]["slug"];

export function Action({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <a className={`product-action${secondary ? " secondary" : ""}`} href={href}>
      {children}
      {href.startsWith("#") ? (
        <ArrowRight size={18} aria-hidden="true" />
      ) : (
        <ArrowUpRight size={18} aria-hidden="true" />
      )}
    </a>
  );
}

export function ProductShell({
  product,
  action,
  children,
}: {
  product: ProductSlug;
  action: { href: string; label: string };
  children: React.ReactNode;
}) {
  const current = products.find((item) => item.slug === product)!;
  const Mark = current.icon;
  return (
    <div className={`product-page ${product}`}>
      <a className="product-skip" href="#content">
        Skip to content
      </a>
      <header className="product-header">
        <Link className="product-brand" href={`/${product}`}>
          <Mark size={27} strokeWidth={1.7} aria-hidden="true" />
          {current.name}
        </Link>
        <nav aria-label="Product navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#questions">Questions</a>
        </nav>
        <a className="header-action" href={action.href}>
          {action.label}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </header>
      <main id="content">{children}</main>
      <footer className="product-footer">
        <div>
          <Link href="/">Joshua Silva</Link>
          <p>Independent software, built with care.</p>
        </div>
        <nav aria-label="More projects">
          {products.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              aria-current={item.slug === product ? "page" : undefined}
            >
              {item.name}
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  );
}

export function Questions({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <section className="product-questions product-section" id="questions">
      <h2>A few things to know.</h2>
      <div>
        {items.map(({ question, answer }) => (
          <details key={question}>
            <summary>
              {question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
