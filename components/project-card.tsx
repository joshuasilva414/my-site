import { Link as LucideLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  tagline: string;
  image: string;
  description: string;
  skills: string[];
  features?: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  tagline,
  image,
  description,
  skills,
  features,
  link,
}: ProjectCardProps) {
  return (
    <div className="border border-foreground/10 rounded-sm block md:flex bg-slate-800/10">
      <div className="md:w-1/3 relative after:content-[''] after:absolute after:inset-0 after:pointer-events-none after:bg-black/30 after:bg-blend-overlay">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="object-cover hover:object-contain md:w-full md:h-full w-200 max-h-100"
        />
      </div>
      <div className="md:w-2/3 p-4">
        <div className="flex justify-between">
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="italic">{tagline}</p>
          </div>
          {link && (
            <Link href={link} target="_blank">
              <LucideLink size={16} />
            </Link>
          )}
        </div>
        <hr className="border-foreground/10 my-2" />
        <div>
          <p className="text-pretty">{description}</p>
        </div>

        {features && features.length > 0 && (
          <div className="mt-3">
            <h4 className="text-lg font-semibold text-slate-300 mb-1">
              Key Features
            </h4>
            <ul className="list-disc list-inside columns-1 md:columns-2 text-slate-300/90 text-sm space-y-0.5">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-x-2 mt-3">
          {skills.map((skill) => (
            <p
              key={skill}
              className="underline underline-offset-2 decoration-1 text-slate-300/90 px-1 py-0.5"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
