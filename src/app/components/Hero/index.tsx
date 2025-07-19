import Image from "next/image";
import React from "react";
import TypeWriter from "./Typewriter";
import { getGreetings } from "@/app/utils/getGreetings";

const Hero = () => {
  return (
    <>
      <section className="flex items-center w-full h-screen bg-[var(--light-theme-primary)] custom-box">
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
            className="rounded-full shadow-2xl m-4"
            priority
          />
          <h1 className="text-4xl font-extrabold text-[var(--light-theme-accent)] tracking-wide">
            {"<Rushabh Dave />"}
          </h1>
        </div>
      </section>
    </>
  );
};

export default Hero;
