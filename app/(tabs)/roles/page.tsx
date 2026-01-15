import RoleCard from "@/components/role-card";

const roles = [
  {
    company: "Paycom",
    title: "Software Development Intern",
    location: "Irving, TX",
    locationType: "On-site" as const,
    startDate: "May 2025",
    endDate: "Aug 2025",
    description:
      "Devised proprietary system for extracting tabular data from PDFs with high accuracy and flexibility. Developed web application using advanced web development techniques. Participated in daily standup meetings and aided in technical documentation.",
    achievements: [
      "Reduced client onboarding time and improved accuracy via data extraction automation from complex PDF forms",
      "Analyzed samples to identify parsing challenges and designed system for developing tabular data extraction templates",
    ],
    skills: [
      "Debugging",
      "AI Developer Tools",
      "Large Scale Distributed Systems",
      "Security & Compliance",
    ],
    link: "https://paycom.com",
  },
  {
    company: "ACM UTSA",
    title: "Projects Officer",
    location: "San Antonio, TX",
    locationType: "Hybrid" as const,
    startDate: "May 2025",
    endDate: "Present",
    description:
      "Provide administrative and logistical support for open-source software projects. Coordinate meetings, manage documentation, monitor progress, and communicate with stakeholders. Ensure project success and adherence to deadlines.",
    achievements: [
      "Scaled team to 20 members and organized smaller, project-specific teams to progress simultaneous projects",
      "Leveraged workflows to increase efficiency in review of PRs and improved developer experience via curated documentation",
      "Increased ease of learning for new members through improved onboarding resources",
    ],
    skills: [
      "TypeScript",
      "Git-Based Collaboration",
      "Testing Strategies",
      "Developer Advocacy",
    ],
    link: "https://acmutsa.org",
  },
  {
    company: "UTSA Virtual and Immersive Realities Lab",
    title: "Undergraduate Research Assistant",
    location: "San Antonio, TX",
    locationType: "On-site" as const,
    startDate: "Jun 2023",
    endDate: "May 2024",
    description:
      "Researched relevant machine learning approaches for semantic image segmentation. Wrote paper on subject matter. Assisted with data collection, literature reviews, data entry, and report preparation.",
    achievements: [
      "Achieved 97% pixel-wise prediction accuracy and authored methodology on ResNet architecture",
      "Trained CNNs with hyperparameter tuning to evaluate performance of established models",
      "Trained machine learning model to detect traumatic brain injury from brain scan images with high accuracy",
    ],
    skills: [
      "AI Inference",
      "Data Analysis",
      "ML Workloads",
      "AI Training",
      "TypeScript",
    ],
  },
  {
    company: "ACM UTSA",
    title: "Vice President",
    location: "San Antonio, TX",
    locationType: "Hybrid" as const,
    startDate: "May 2024",
    endDate: "May 2025",
    description:
      "Demonstrated proficient leadership while providing vision and motivation for ACM UTSA, among the largest student organizations on campus. Established sustainable leadership pipeline.",
    achievements: [
      "Rebuilt mentorship program for leadership development, resulting in 20+ mentees successfully onboarded to leadership roles",
      "Conducted assessment of previous mentorship gaps and designed structured curriculum",
      "Implemented mentoring framework with milestones, training modules, and project assignments",
    ],
    skills: [
      "CI/CD Platforms",
      "Problem Solving",
      "Networking",
      "Logistics and Coordination",
    ],
    link: "https://acmutsa.org",
  },
  {
    company: "ACM UTSA",
    title: "President",
    location: "San Antonio, TX",
    locationType: "Hybrid" as const,
    startDate: "Nov 2023",
    endDate: "May 2024",
    description:
      "Acted as representative, leader, and liaison for student body. Led initiative to reorganize leadership to handle rapid growth through new systems and constitutional revisions. Managed communications and fostered engagement.",
    achievements: [
      "Created initiatives system framework to collaborate across foci, raised productivity, and facilitated massive organizational growth",
      "Analyzed existing structure for interdepartmental barriers and enacted clear collaboration protocols",
      "Drove collaboration and capacity for simultaneous projects through shared accountability structures",
    ],
    skills: ["Public Speaking", "Ownership & Adaptability", "Bias for Action"],
    link: "https://acmutsa.org",
  },
  {
    company: "ACM UTSA",
    title: "Tech Lead — HackKit",
    location: "San Antonio, TX",
    locationType: "Hybrid" as const,
    startDate: "May 2024",
    endDate: "Present",
    description:
      "Define project scope, create technical designs, and manage team tasks. Monitor progress by communicating with team members, identifying and resolving technical issues. Foster collaborative team environment.",
    achievements: [
      "Built and launched HackKit hackathon resource platform, enhancing participant experience for 500+ hackers",
      "Conducted user research to identify key pain points and requirements",
      "Developed core features including registration, check-in, admin-side event management, and user management",
      "Increased satisfaction and reduced organizer workload",
    ],
    skills: [
      "TypeScript",
      "Event-Driven Architecture",
      "Testing Strategies",
      "AI Deployment",
    ],
    link: "https://github.com/acmutsa/hackkit",
  },
  {
    company: "ACM UTSA",
    title: "Technical Project Lead — ClubKit",
    location: "San Antonio, TX",
    locationType: "Hybrid" as const,
    startDate: "Jan 2024",
    endDate: "Present",
    description:
      "Oversaw development and rollout of custom features for usability and scalability. Provided technical leadership and guidance to team while ensuring alignment with project goals, deadlines, and quality standards.",
    achievements: [
      "Designed and launched ClubKit portal to manage events and membership for 1K+ students",
      "Identified pain points and oversaw dev and rollout of features for better usability and scalability",
      "Improved efficiency and interorganizational engagement",
    ],
    skills: [
      "Data Analytics",
      "AI Development",
      "Mentorship",
      "Problem Solving",
    ],
    link: "https://github.com/acmutsa/clubkit",
  },
  {
    company: "ACM UTSA",
    title: "Tech Officer",
    location: "San Antonio, TX",
    locationType: "Hybrid" as const,
    startDate: "May 2023",
    endDate: "Nov 2023",
    description:
      "Created new framework to break down silos between different officer focus areas and enabled cross-functional collaboration for greater organizational impact.",
    achievements: [
      "Enabled cross-functional collaboration across officer teams for greater organizational impact",
    ],
    skills: ["TypeScript", "Collaboration", "Technical Leadership"],
    link: "https://acmutsa.org",
  },
  {
    company: "iCode",
    title: "Technical Lead / Coding Instructor",
    location: "Austin, TX",
    locationType: "On-site" as const,
    startDate: "Aug 2021",
    endDate: "Aug 2024",
    description:
      "Mentored and supported new instructors through onboarding. Taught students through professional, project-based curriculum. Maintained high student engagement and smooth instructor onboarding transitions.",
    achievements: [
      "Ensured consistent instructional quality and allowed for program growth",
      "Developed onboarding checklists and taught core lessons to new hires",
      "Offered hands-on feedback and facilitated collaborative classroom projects",
    ],
    skills: [
      "System Optimization",
      "Clear Communication",
      "Collaboration & Teamwork",
      "Mentorship",
    ],
    link: "https://icode.com",
  },
];

export default function Roles() {
  return (
    <div className="gap-8 grid grid-cols-1 2xl:grid-cols-2 min-h-0 overflow-y-scroll">
      {roles.map((role) => (
        <RoleCard key={`${role.company}-${role.title}`} {...role} />
      ))}
    </div>
  );
}
