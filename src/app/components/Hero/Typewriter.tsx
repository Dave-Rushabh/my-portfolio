"use client";

import Typewriter from "typewriter-effect";

type TypeWriterProps = {
  strings: string[];
};

const TypeWriter = ({ strings }: TypeWriterProps) => {
  return (
    <Typewriter
      options={{
        delay: 150,
        strings: strings,
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypeWriter;
