import Image from "next/image";
import React from "react";
import TypeWriter from "./Typewriter";
import { getGreetings } from "@/app/utils/getGreetings";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="flex items-center w-full min-h-screen bg-[var(--light-theme-primary)] custom-box ">
        <div className="flex flex-col gap-4 items-center justify-center w-full">
          <h3 className="lg:text-5xl text-3xl flex items-center">
            👋 <TypeWriter strings={getGreetings} />
          </h3>
          <h4 className="text-xl">Greetings from</h4>
          <Image
            src="/my-profile.png"
            alt="Rushabh Dave"
            width={300}
            height={300}
            className="rounded-xl shadow-2xl m-4"
            priority
          />
          <h1 className="text-4xl font-extrabold text-[var(--light-theme-accent)] tracking-wide">
            {"<Rushabh Dave />"}
          </h1>

          <div className="md:w-1/2 w-full flex justify-center gap-8 mt-16">
            <Link
              href={"#contact"}
              className="flex text-sm gap-2 bg-[var(--light-theme-accent)] text-white px-4 py-3 rounded-lg"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="m16.484 11.976 6.151-5.344v10.627zm-7.926.905 2.16 1.875c.339.288.781.462 1.264.462h.017-.001.014c.484 0 .926-.175 1.269-.465l-.003.002 2.16-1.875 6.566 5.639H1.995zM1.986 5.365h20.03l-9.621 8.356a.6.6 0 0 1-.38.132h-.014.001-.014a.6.6 0 0 1-.381-.133l.001.001zm-.621 1.266 6.15 5.344-6.15 5.28zm21.6-2.441c-.24-.12-.522-.19-.821-.19H1.859a1.9 1.9 0 0 0-.835.197l.011-.005A1.86 1.86 0 0 0 0 5.855v12.172a1.86 1.86 0 0 0 1.858 1.858h20.283a1.86 1.86 0 0 0 1.858-1.858V5.855c0-.727-.419-1.357-1.029-1.66l-.011-.005z" />
              </svg>
              Get in Touch
            </Link>
            <button className="flex text-sm gap-2 bg-[var(--light-theme-accent)] text-white px-4 py-3 rounded-lg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 15 15"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5 1.05a.45.45 0 0 1 .45.45v6.914l2.232-2.232a.45.45 0 1 1 .636.636l-3 3a.45.45 0 0 1-.636 0l-3-3a.45.45 0 1 1 .636-.636L7.05 8.414V1.5a.45.45 0 0 1 .45-.45M2.5 10a.5.5 0 0 1 .5.5V12c0 .554.446 1 .996 1h7.005A1 1 0 0 0 12 12v-1.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-1.999 2H3.996A1.997 1.997 0 0 1 2 12v-1.5a.5.5 0 0 1 .5-.5"
                  fill="currentColor"
                />
              </svg>
              Download CV
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
