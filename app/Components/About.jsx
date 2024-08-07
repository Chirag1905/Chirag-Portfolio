"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-3 gap-x-10 gap-y-2">
        <ul className="list-disc">
          <li>JavaScript/TypeScript</li>
          <li>React Js/Next Js</li>
          <li>Node Js/Express Js</li>
        </ul>
        <ul className="list-disc pl-4">
          <li>Bootstrap</li>
          <li>Tailwind</li>
          <li>Chakra UI</li>
        </ul>
        <ul className="list-disc pl-4">
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 w-full max-w-md">
        <li>
          Bachelor Of Engineering, Hashmukh Goswami College Of Engineering{" "}
          <b>(GTU) 7.45 CGPA</b>
        </li>
        <li>
          Diploma Engineering, R.C Technical Institute <b>(GTU) 7.01 CGPA</b>
        </li>
        <li>
          SSC, Shriji Vidhyalaya <b>(GSHSEB) 69%</b>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4 w-full max-w-md">
        <li>ChatGPT Workshop</li>
        <li>BrainyBeams Technology</li>
        <li>JavaScript Algorithms and Data Structures, freeCodeCamp</li>
        <li>PHP Programming Course</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-black dark:text-white pt-16" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="border border-[#b49999] rounded-xl"
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About Image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg text-justify">
            I am a Mern stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with{" "}
            <b>
              Next.js, JavaScript, NodeJS, React, Redux, Node.js, Express,
              MySQL, HTML, CSS, and Git/GitHub
            </b>
            . I am a <b>quick learner</b> and I am always looking to expand my
            knowledge and skill set. I am a team player and I am excited to work
            with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
