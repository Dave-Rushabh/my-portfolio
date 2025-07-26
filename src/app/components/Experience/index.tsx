import { EXPERIENCES } from "@/app/utils/getExperience";
import Link from "next/link";
import React from "react";

const Experience = () => {
  return (
    <div
      id="experience"
      className="min-h-screen custom-box  bg-[var(--light-theme-primary)]"
    >
      <div className="md:text-3xl text-2xl font-bold md:pt-20 pt-10">
        Experience
      </div>

      <div className="relative border-l-2 border-gray-700 pl-6 ml-3 mt-8 ">
        {EXPERIENCES.map((exp, idx) => {
          const {
            company,
            companyLink,
            duration,
            description,
            location,
            title,
          } = exp;
          return (
            <div
              key={idx}
              className="mb-12 relative bg-white p-8 md:w-3/4 w-full max-w-[1280px] rounded-xl"
            >
              <div className="absolute top-0 -left-[32px] w-4 h-4 bg-[var(--light-theme-accent)] rounded-full border-4 border-white" />
              <h3 className="text-xl font-semibold text-[var(--light-theme-accent)]">
                {title}
              </h3>
              <span className="text-sm text-black">
                <Link
                  href={companyLink}
                  className="underline underline-offset-6"
                >
                  {company}
                </Link>
                &nbsp;•&nbsp;{duration}
              </span>
              <p className="text-sm italic text-gray-400 mt-1">{location}</p>
              <ul className="mt-2 space-y-1 text-gray-600">
                {description.map((info, idx) => {
                  const { data, link } = info;

                  return (
                    <li key={idx}>
                      <p className="">
                        <span className="">
                          󠁯•󠁏󠁏 {data}
                          {link ? (
                            <Link
                              href={link}
                              target="_blank"
                              className="inline-block w-fit align-middle ml-1"
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="gray"
                              >
                                <path d="m10 17.55-1.77 1.72a2.47 2.47 0 0 1-3.5-3.5l4.54-4.55a2.46 2.46 0 0 1 3.39-.09l.12.1a1 1 0 0 0 1.4-1.43 3 3 0 0 0-.18-.21 4.46 4.46 0 0 0-6.09.22l-4.6 4.55a4.48 4.48 0 0 0 6.33 6.33L11.37 19A1 1 0 0 0 10 17.55M20.69 3.31a4.49 4.49 0 0 0-6.33 0L12.63 5A1 1 0 0 0 14 6.45l1.73-1.72a2.47 2.47 0 0 1 3.5 3.5l-4.54 4.55a2.46 2.46 0 0 1-3.39.09l-.12-.1a1 1 0 0 0-1.4 1.43 3 3 0 0 0 .23.21 4.47 4.47 0 0 0 6.09-.22l4.55-4.55a4.49 4.49 0 0 0 .04-6.33" />
                              </svg>
                            </Link>
                          ) : null}
                        </span>
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
