import Image from "next/image";
import SkillsList from "@/components/skills-list";

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
          <SkillsList />
        </div>
      </div>
    </div>
  );
}
