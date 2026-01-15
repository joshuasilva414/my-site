import ProjectCard from "@/components/project-card";

const projects = [
  {
    title: "ClubKit",
    tagline: "All-in-one club management software that just works",
    image: "/images/projects/clubkit.jpg",
    description:
      "ClubKit is a club management platform that streamlines the entire club lifecycle, from registration, events, and member management. It provides a seamless experience for both officers and members, making club management easier to manage and more enjoyable.",
    skills: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL"],
    link: "https://github.com/acmutsa/clubkit",
  },
  {
    title: "HackKit",
    tagline: "All-in-one hackathon management software that just works",
    image: "/images/projects/hackkit.png",
    description:
      "HackKit is a hackathon management platform that streamlines the entire hackathon lifecycle, from registration and team formation to project submission and judging. It provides a seamless experience for both organizers and participants, making hackathons easier to manage and more enjoyable to attend.",
    skills: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL"],
    link: "https://github.com/acmutsa/hackkit",
  },
];

export default function Projects() {
  return (
    <div className="gap-8 grid grid-cols-1 2xl:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}
