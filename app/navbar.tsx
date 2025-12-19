"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const activePath = usePathname();
  return (
    <>
      <div className="flex justify-between items-end">
        <h1 className="font-sans text-3xl">Joshua Silva</h1>
        <p className="text-xl text-foreground/85">Software Engineer</p>
      </div>
      <div className="*:hover:underline *:underline-offset-2 *:decoration-1 flex w-full justify-between items-end *:text-xl">
        <Link
          href="/"
          className={`${activePath === "/" && "underline text-foreground/90"}`}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={`${
            activePath === "/projects" && "underline text-foreground/90"
          }`}
        >
          Projects
        </Link>
        <Link
          href="/roles"
          className={`${
            activePath === "/roles" && "underline text-foreground/90"
          }`}
        >
          Roles
        </Link>
        <Link href="https://tgc.bearblog.dev" target="_blank">
          Blog
        </Link>
        <Link
          href="https://static.joshuasilva.me/career/resume.pdf"
          target="_blank"
        >
          Resume
        </Link>
      </div>
    </>
  );
}
