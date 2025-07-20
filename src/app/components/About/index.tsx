import React from "react";

const About = () => {
  return (
    <div id="about" className="min-h-screen custom-box  bg-white">
      <div className="md:text-3xl text-2xl font-bold md:pt-20 pt-10">About</div>

      <ul className="md:text-lg text-base flex flex-col gap-3 mt-8 w-full">
        <li>Hello ! I&#39;m Rushabh Dave 👋</li>

        <li>
          A frontend-focused full-stack developer from India with{" "}
          <b>3.5+ years of hands-on experience</b> building web applications
          that are fast, scalable, and maintainable.
        </li>

        <li>
          I specialize in{" "}
          <b>JavaScript, React, TypeScript, Node.js, MongoDB, and Express</b>,
          and I&#39;m highly proficient with UI frameworks like{" "}
          <b>Chakra UI, Ant Design, and Material UI</b>.
        </li>

        <li>
          Over the years, I&#39;ve collaborated with cross-functional teams
          across continents and contributed to domains like:
          <ul className="list-disc ml-5 mt-1">
            <li>Non-Emergency Medical Transportation</li>
            <li>Internal HR & Employee Management Portals</li>
            <li>E-commerce & Dropshipping Platforms</li>
            <li>Enterprise-level softwares</li>
          </ul>
        </li>

        <li>
          I have also worked extensively with modern state management solutions
          such as <b>Redux</b> & <b>Redux Toolkit</b>. I'm comfortable working
          in large codebases and following scalable architecture patterns.
        </li>

        <li>
          Recently, I&#39;ve also been diving into backend technologies like{" "}
          <b>Supabase</b> and <b>PostgreSQL</b>, experimenting with real-time
          data and serverless deployments.
        </li>

        <li>
          Outside of work, I regularly build <b>hobby projects</b> to explore
          new tools, frameworks, and improve my problem-solving skills. I
          believe learning never stops, and I'm always curious about what&#39;s
          next in tech.
        </li>
      </ul>
    </div>
  );
};

export default About;
