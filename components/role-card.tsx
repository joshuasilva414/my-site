import { Link as LucideLink, MapPin, Calendar } from "lucide-react";
import Link from "next/link";

interface RoleCardProps {
  company: string;
  title: string;
  location: string;
  locationType: "Remote" | "Hybrid" | "On-site";
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  skills: string[];
  link?: string;
}

export default function RoleCard({
  company,
  title,
  location,
  locationType,
  startDate,
  endDate,
  description,
  achievements,
  skills,
  link,
}: RoleCardProps) {
  return (
    <div className="border border-foreground/10 rounded-sm block bg-slate-800/10">
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="italic text-lg">{company}</p>
          </div>
          {link && (
            <Link
              href={link}
              target="_blank"
              className="hover:opacity-70 transition-opacity"
            >
              <LucideLink size={16} />
            </Link>
          )}
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-slate-300/80">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>
              {startDate} — {endDate}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>
              {location} · {locationType}
            </span>
          </div>
        </div>

        <hr className="border-foreground/10 my-3" />

        {/* Description */}
        <p className="text-pretty mb-3">{description}</p>

        {/* Achievements */}
        {achievements.length > 0 && (
          <ul className="list-disc list-inside space-y-1 mb-3 text-slate-200/90">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-pretty">
                {achievement}
              </li>
            ))}
          </ul>
        )}

        {/* Skills */}
        <div className="flex flex-wrap gap-x-2">
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
