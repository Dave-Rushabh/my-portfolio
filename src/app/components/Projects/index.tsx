"use client";
import { PROJECT, PROJECTS } from "@/app/utils/getProjects";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Projects = () => {
  const generateSlide = (slide: PROJECT) => {
    const { name, about, gitHubLink, hostedProjectLink, linkedInLink } = slide;

    return (
      <SwiperSlide key={name}>
        <div className="bg-[var(--light-theme-primary)] text-white border rounded-lg p-6 flex flex-col h-full relative">
          {/* Title */}
          <h3 className="text-xl font-semibold mb-3 text-[var(--light-theme-accent)] line-clamp-2 min-h-[60px]">
            {name}
          </h3>

          {/* About */}
          <ul className="list-disc pl-6 line-clamp-15 mb-12">
            {about.map((point, i) => (
              <li key={i} className="text-md text-gray-600">
                {point}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="mt-4 flex flex-wrap gap-2 absolute bottom-4 items-center">
            {gitHubLink && (
              <Link
                href={gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xs rounded-md flex items-center justify-center"
              >
                <svg
                  width={36}
                  height={36}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  fill="var(--light-theme-accent)"
                >
                  <path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025 2.137 2.137 0 0 0 2.912.825 2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688 3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65 3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75 0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247" />
                </svg>
              </Link>
            )}
            {hostedProjectLink && (
              <Link
                href={hostedProjectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xs rounded-md flex items-center justify-center"
              >
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="var(--light-theme-accent)"
                >
                  <path d="m10 17.55-1.77 1.72a2.47 2.47 0 0 1-3.5-3.5l4.54-4.55a2.46 2.46 0 0 1 3.39-.09l.12.1a1 1 0 0 0 1.4-1.43 3 3 0 0 0-.18-.21 4.46 4.46 0 0 0-6.09.22l-4.6 4.55a4.48 4.48 0 0 0 6.33 6.33L11.37 19A1 1 0 0 0 10 17.55M20.69 3.31a4.49 4.49 0 0 0-6.33 0L12.63 5A1 1 0 0 0 14 6.45l1.73-1.72a2.47 2.47 0 0 1 3.5 3.5l-4.54 4.55a2.46 2.46 0 0 1-3.39.09l-.12-.1a1 1 0 0 0-1.4 1.43 3 3 0 0 0 .23.21 4.47 4.47 0 0 0 6.09-.22l4.55-4.55a4.49 4.49 0 0 0 .04-6.33" />
                </svg>{" "}
              </Link>
            )}
            {linkedInLink && (
              <Link
                href={linkedInLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xs rounded-md flex items-center justify-center"
              >
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="var(--light-theme-accent)"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm1.102 4.297a1.195 1.195 0 1 0 0-2.39 1.195 1.195 0 0 0 0 2.39m1 7.516V6.234h-2v6.579zM6.43 6.234h2v.881c.295-.462.943-1.084 2.148-1.084 1.438 0 2.219.953 2.219 2.766 0 .087.008.484.008.484v3.531h-2v-3.53c0-.485-.102-1.438-1.18-1.438-1.079 0-1.17 1.198-1.195 1.982v2.986h-2z"
                  />
                </svg>{" "}
              </Link>
            )}
          </div>
        </div>
      </SwiperSlide>
    );
  };

  return (
    <div id="projects" className="min-h-screen custom-box">
      <div className="md:text-3xl text-2xl font-bold md:pt-20 pt-10">
        Projects
      </div>

      <div className="h-3/5">
        <Swiper
          className="mt-8"
          spaceBetween={30}
          breakpoints={{
            1280: { slidesPerView: 4, spaceBetween: 32 },
            1024: { slidesPerView: 3, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 12 },
            0: { slidesPerView: 1.1, spaceBetween: 8 },
          }}
          loop={false}
          pagination={{
            type: "progressbar",
          }}
          modules={[Pagination]}
        >
          {PROJECTS.map((slide: PROJECT) => generateSlide(slide))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
