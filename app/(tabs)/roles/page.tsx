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
      "Reduced manual OCR template generation time from complex PDF forms via an automated template generation tool",
      "Analyzed samples to identify parsing challenges and designed system for developing tabular data extraction templates",
    ],
    skills: [
      "Debugging",
      "AI Developer Tools",
      "Software Automation",
      "Security & Compliance",
    ],
    link: "https://paycom.com",
  },

  {
    company: "UTSA Virtual and Immersive Realities Lab",
    title: "Undergraduate Research Assistant",
    location: "San Antonio, TX",
    locationType: "On-site" as const,
    startDate: "Jun 2023",
    endDate: "May 2024",
    description:
      "Researched relevant machine learning approaches for semantic image segmentation. Applied deep learning architectures to the problem of detecting astrocytes in brain scan images. Contributed to an academic paper on the subject.",
    achievements: [
      "Achieved 97% pixel-wise prediction accuracy and authored methodology on ResNet architecture",
      "Trained CNNs with hyperparameter tuning to evaluate performance of established models",
      "Trained machine learning model to detect traumatic brain injury from brain scan images with high accuracy",
    ],
    skills: [
      "Data Analysis",
      "ML Workloads",
      "PyTorch",
      "AI Training",
      "Hyperparameter Tuning",
      "Academic Literacy",
    ],
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
    title: "Projects Officer",
    location: "San Antonio, TX",
    locationType: "Hybrid" as const,
    startDate: "May 2025",
    endDate: "Present",
    description:
      "Provide administrative and logistical support for open-source software projects. Coordinate meetings, manage documentation, monitor progress, and communicate with stakeholders. Ensure project success and adherence to deadlines.",
    achievements: [
      "Scaled group to 20 members and organized smaller, project-specific teams to progress simultaneous projects",
      "Formed a team dedicated to improving developer experience through enhanced documentation and developer tooling",
      "Leveraged workflows to increase efficiency in review of PRs",
      "Increased ease of learning for new members through improved onboarding resources",
    ],
    skills: [
      "Documentation",
      "Git-Based Collaboration",
      "Testing Strategies",
      "Developer Advocacy",
    ],
    link: "https://acmutsa.org",
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
