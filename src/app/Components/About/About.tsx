"use client";
import { useTransition, useState, JSX, FC } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiBootstrap,
  SiChakraui,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

interface TabData {
  title: string;
  id: string;
  content: JSX.Element;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap gap-3">
        {[
          { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
          { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
          { name: "React.js", icon: <SiReact className="text-[#61DBFB]" /> },
          { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
          { name: "Node.js", icon: <SiNodedotjs className="text-[#68A063]" /> },
          { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
          { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
          { name: "MySQL", icon: <SiMysql className="text-[#00758F]" /> },
          { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
          { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
          { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
          { name: "Chakra UI", icon: <SiChakraui className="text-[#319795]" /> },
        ].map((item) => (
          <span
            key={item.name}
            className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg
              bg-[#b9b9b114] dark:bg-[#0D1524]
              border border-[#1e2a3e] dark:border-[#1e2a3e]
              text-gray-700 dark:text-[#c7d7f5]
              hover:bg-blue-100 dark:hover:bg-[#11203a]
              hover:border-blue-500 transition-all duration-300"
          >
            <span className="text-base">{item.icon}</span>
            {item.name}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-4">
        {[
          {
            title: "Bachelor of Engineering",
            inst: "Hasmukh Goswami College of Engineering (GTU)",
            score: "7.45 CGPA",
          },
          {
            title: "Diploma Engineering",
            inst: "R.C Technical Institute (GTU)",
            score: "7.01 CGPA",
          },
          {
            title: "SSC",
            inst: "Shriji Vidhyalaya (GSHSEB)",
            score: "69%",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-[#0D1524] p-4 rounded-xl border border-[#1e2a3e] 
              text-[#c7d7f5] hover:border-blue-500 hover:shadow-[0_0_10px_rgba(29,78,216,0.5)]
              transition-all duration-300"
          >
            <p className="font-semibold text-white text-sm md:text-base">{item.title}</p>
            <p className="text-xs md:text-sm opacity-80">{item.inst}</p>
            <p className="text-blue-400 font-medium mt-1 text-sm">{item.score}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="space-y-3">
        {[
          "ChatGPT Workshop",
          "BrainyBeams Technology",
          "JavaScript Algorithms & Data Structures - freeCodeCamp",
          "PHP Programming Course",
        ].map((cert) => (
          <li
            key={cert}
            className="bg-[#0D1524] p-3 text-sm rounded-lg border border-[#1e2a3e]
              hover:border-blue-500 hover:shadow-[0_0_10px_rgba(29,78,216,0.5)]
              transition-all duration-300"
          >
            {cert}
          </li>
        ))}
      </ul>
    ),
  },
];

const About: FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const activeTabContent = TAB_DATA.find((t) => t.id === tab)?.content;

  return (
    <section className="border border-black/10 dark:border-white/10 rounded-4xl shadow-2xl bg-[#F6F6F6] dark:bg-[#151515] text-center text-black dark:text-white my-7 py-4 sm:my-20 px-4" id="about">
      <h2 className="text-2xl sm:text-4xl font-bold pb-6 sm:py-6">
        About Me
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10 sm:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Image
            src="/images/about-image.png"
            width={450}
            height={450}
            className="rounded-4xl w-full hover:shadow-[0_0_15px_rgba(29,78,216,0.35)] transition"
            alt="About Me"
          />
        </motion.div>
        <div className="text-left flex flex-col h-full">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#1a2a48] dark:text-[#c7d7f5]">
            I am a passionate MERN Stack Developer focused on creating fast,
            accessible, and visually engaging web applications. I specialize in
            building pixel-perfect UI with clean, scalable code — combining
            <b className="text-black dark:text-white font-semibold"> JavaScript, TypeScript, Next.js,
              React, Node.js, Express, MongoDB</b> and modern styling frameworks.
            <br /><br />
            I continuously explore new technologies, optimize performance, and love
            collaborating with teams to turn ideas into successful real-world digital
            products.
          </p>
          <div className="flex flex-row justify-start mt-10 p-1">
            {TAB_DATA.map((t) => (
              <TabButton
                key={t.id}
                selectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mt-8"
            >
              {activeTabContent}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default About;
