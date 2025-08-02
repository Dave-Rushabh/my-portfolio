import { SKILLS_ARRAY } from "@/app/utils/getSkills";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/autoplay";

const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen custom-box  bg-[var(--light-theme-primary)]"
    >
      <div className="md:text-3xl text-2xl font-bold md:pt-20 pt-10">
        Skills
      </div>

      <div className="md:text-lg text-base flex flex-col gap-3 mt-8 w-full text-[var(--light-theme-accent)] font-bold">
        <div className="flex flex-col gap-8 text-center mt-8">
          <div className="flex flex-col gap-4 p-4 bg-white rounded-xl md:w-10/11 w-full mx-auto">
            <div className="overflow-hidden whitespace-nowrap w-full py-8 bg-white">
              <div className="animate-marquee flex gap-4 w-max">
                {SKILLS_ARRAY.concat(SKILLS_ARRAY).map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 rounded-lg"
                  >
                    <div className="relative w-14 h-14">
                      <Image
                        src={skill.iconPath}
                        alt={skill.skillName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs text-gray-600 font-medium mt-2">
                      {skill.skillName}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-8 justify-between md:mt-16 mt-4 max-md:items-stat max-md:pl-4">
            <div className="flex flex-col items-start gap-4 max-w-fit md:mx-auto">
              <p>Things I am learning currently...</p>
              <ul className="text-gray-600 font-semibold md:text-base text-base text-left">
                <li className="list-disc">Frontend System Design</li>
                <li className="list-disc">Cloud Engineering</li>
              </ul>
            </div>

            <div className="flex flex-col items-start gap-4 max-w-fit md:mx-auto">
              <p>Certificates</p>
              <ul className="text-gray-600 font-semibold md:text-base text-base text-left">
                <li className="list-disc">
                  <Link
                    className="underline underline-offset-8"
                    href={"https://learn.mongodb.com/c/d3tloFVFT5GYzk4oQxF4tw"}
                  >
                    MongoDB
                  </Link>
                </li>
                <li className="list-disc">
                  <Link
                    className="underline underline-offset-8"
                    href={
                      "https://www.udemy.com/certificate/UC-92a775e8-3032-45f5-9961-6f12d85fddae/"
                    }
                  >
                    Next Js
                  </Link>
                </li>
                <li className="list-disc">
                  <Link
                    className="underline underline-offset-8"
                    href={
                      "https://www.hackerrank.com/certificates/8dba9d8f83bb"
                    }
                  >
                    Frontend Developer (React)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
