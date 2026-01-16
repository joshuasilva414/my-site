import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <Image
          src="/images/photo.jpeg"
          width={150}
          height={150}
          alt="photo of me"
          className="mr-5 mask-radial-at-center object-cover aspect-square rounded-full float-start wrap-circle"
        />
        <div className="">
          <h3 className="text-2xl font-semibold text-right sm:text-center">
            About
          </h3>
          <p className="text-right text-lg text-pretty">
            Hello! I&apos;m Joshua Silva, a Master&apos;s student at UT San
            Antonio and an officer of ACM UTSA, the largest tech organization on
            campus. I love engaging with the tech communities around me and I
            believe in solving the world&apos;s most challenging problems
            through technology. I&apos;m eager to make the next step in my
            career and broaden my impact.
          </p>
        </div>
      </div>
      <div className="clear-both">
        <div className="">
          <h3 className="text-2xl font-semibold text-left sm:text-center">
            Skills
          </h3>
          <div className="flex flex-wrap max-sm:[&>p]:underline sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:justify-between sm:place-content-between text-lg gap-x-2 gap-y-1 [&>p]:w-fit lg:[&>p]:text-nowrap">
            <p>AI Developer Tools</p>
            <p>Relational Database Concepts</p>
            <p>Advanced Python</p> <p>Advanced Java</p>
            <p>HTML</p> <p>CSS</p> <p>JavaScript</p>
            <p>Enterprise Software Engineering</p>
            <p>Systems Programming</p>
            <p>TypeScript</p> <p>C</p> <p>C#</p> <p>Go</p>
            <p>PostgreSQL</p>
            <p>Web Technologies</p>
            <p>UI on Mobile Platforms</p>
            <p>Scikit-Learn</p> <p>Pandas</p> <p>NumPy</p>
            <p>Git-Based Collaboration</p>
            <p>Technical Documentation</p>
            <p>TensorFlow</p> <p>PyTorch</p>
            <p>Project Management</p>
            <p>Developer Advocacy Experience</p>
            <p>React.js</p> <p>Next.js</p> <p>FastAPI</p> <p>TailwindCSS</p>
            <p>CI/CD Platforms</p>
            <p>API Design</p>
            <p>Cloud Platforms / Containerization</p>
          </div>
        </div>
      </div>
    </div>
  );
}
