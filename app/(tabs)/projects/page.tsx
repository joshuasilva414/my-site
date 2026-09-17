import ProjectCard from "@/components/project-card";

const projects = [
  {
    title: "Bonsai",
    tagline: "Grow what you want to know",
    image: "/images/projects/bonsai-home.jpg",
    imageFit: "contain" as const,
    description:
      "Bonsai is an AI learning workspace that turns learning goals into structured courses. Explore connected concepts, work through an adaptive textbook, and practice with an AI tutor on an interactive whiteboard.",
    skills: [
      "TanStack Start",
      "TypeScript",
      "Cloudflare Workflows",
      "Durable Objects",
      "D1",
      "tldraw",
    ],
    features: [
      "AI-generated course outlines",
      "Visual curriculum graphs",
      "Adaptive textbook sessions",
      "Persistent AI whiteboard tutoring",
    ],
    link: "https://github.com/joshuasilva414/bonsai",
  },
  {
    title: "River",
    tagline: "From scattered experience to a story that flows",
    image: "/images/projects/river-workspace.jpg",
    imageFit: "contain" as const,
    description:
      "River is a résumé builder that connects your experience to the requirements of a job posting. Organize supporting evidence, tailor résumé drafts with AI assistance, and review the final PDF before exporting.",
    skills: [
      "TanStack Start",
      "TypeScript",
      "Effect",
      "Drizzle",
      "Cloudflare Workflows",
      "D1",
      "R2",
    ],
    features: [
      "Evidence-backed résumé tailoring",
      "Job requirement analysis",
      "Bring-your-own-key AI assistance",
      "LaTeX templates and PDF export",
    ],
    link: "https://river.jilva.dev",
  },
  {
    title: "Mythic AI",
    tagline: "The Infinite D&D Experience driven by Artificial Intelligence",
    image: "/images/projects/mythic-ai.png",
    description:
      "Mythic AI is a Dungeons & Dragons experience where an AI dungeon master guides you through a world as vast as your imagination. ",
    skills: [
      "Cloudflare Durable Objects",
      "AI Inference",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "PostgreSQL",
    ],
    features: [
      "Realtime AI Dungeon Master",
      "AI World Generation",
      "User Voice Interruptions",
      "Highly scalable D&D sessions via Durable Objects",
    ],
    link: "https://github.com/joshuasilva414/mythic-ai",
  },
  {
    title: "ClubKit",
    tagline: "ACM's In-House Membership Portal",
    image: "/images/projects/clubkit.jpg",
    description:
      "ClubKit is a membership portal for ACM UTSA, providing a seamless experience for both officers and members, making club management easier to manage and more enjoyable.",
    skills: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL"],
    features: [
      "Event Management",
      "Membership Registration",
      "Attendance Tracking",
      "Officer Admin Dashboard",
      "Club Stats Overview",
    ],
    link: "https://github.com/acmutsa/clubkit",
  },
  {
    title: "HackKit",
    tagline: "All-in-one hackathon management software that just works",
    image: "/images/projects/hackkit.png",
    description:
      "HackKit is a hackathon management platform that streamlines the hackathon experience for both organizers and participants. It allows organizers to manage registrations, check-in, side events, and more. Hackers get clean dashboard to view the event information and access their hacker pass.",
    skills: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL"],
    features: [
      "Live Schedule Management",
      "Dynamic Roles & Permissions System",
      "QR Code Check-in System",
      "Organizer Stats Dashboard",
    ],
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
