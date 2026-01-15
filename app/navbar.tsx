"use client";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const activePath = usePathname();
  return (
    <>
      <div className="flex justify-between items-end">
        <div>
          <h1 className="font-semibold text-nowrap text-3xl leading-none">
            Joshua Silva
          </h1>
          <p className="text-xl text-nowrap text-slate-300/85">
            Software Engineer
          </p>
        </div>
        <div className="flex gap-x-2 items-baseline">
          <Link
            className="hover:underline underline-offset-2 decoration-1 flex items-end gap-1"
            href="https://www.linkedin.com/in/joshuasilva414/"
            target="_blank"
          >
            <Linkedin size={24} />
            <p className="hidden sm:block">Linkedin: joshuasilva414</p>
          </Link>
          <Link
            className="hover:underline underline-offset-2 decoration-1 flex items-end gap-1"
            href="https://github.com/joshuasilva414"
            target="_blank"
          >
            <Github size={24} />
            <p className="hidden sm:block">Github: joshuasilva414</p>
          </Link>
        </div>
      </div>
      <div className="*:hover:underline *:underline-offset-2 *:decoration-1 flex w-full justify-between items-end *:text-xl">
        <Link
          href="/"
          className={`${activePath === "/" && "underline text-slate-300/95"}`}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={`${
            activePath === "/projects" && "underline text-slate-300/95"
          }`}
        >
          Projects
        </Link>
        <Link
          href="/roles"
          className={`${
            activePath === "/roles" && "underline text-slate-300/95"
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
