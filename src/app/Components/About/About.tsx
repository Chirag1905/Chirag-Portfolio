// About.tsx
"use client";

import { FC, JSX, useState, useTransition } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/app/utils/Reveal";
import TabButton from "./TabButton";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiLess,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiRedux,
  SiGithub,
  SiGit,
  SiFirebase,
  SiJira,
  SiPostman,
  SiInsomnia,
  SiAxios,
  SiAmazon,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGraphql,
  SiDocker,
  SiKubernetes,
  SiOpenai,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

interface TabData {
  title: string;
  id: string;
  content: JSX.Element;
}

/* ---------------- Card ---------------- */
const Card = ({
  name,
  icon,
  link,
}: {
  name: string;
  icon: JSX.Element;
  link?: string;
}) => {
  const Wrapper = link ? "a" : "div";

  return (
    <Wrapper
      {...(link && {
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      className={`
        flex items-center gap-3 p-4 rounded-xl
        bg-white border border-gray-200 text-gray-800
        dark:bg-[#0D1524] dark:border-[#1e2a3e] dark:text-[#c7d7f5]
        transition-all duration-200
        ${link ? "cursor-pointer hover:scale-[1.03] hover:border-blue-500" : ""}
      `}
    >
      <span className="text-lg">{icon}</span>
      <span className="font-medium">{name}</span>
    </Wrapper>
  );
};

/* ---------------- Timeline Item ---------------- */
const TimelineItem = ({
  title,
  place,
  year,
}: {
  title: string;
  place: string;
  year: string;
}) => (
  <div className="relative pl-6">
    <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-blue-500" />
    <div className="bg-white dark:bg-[#0D1524] border border-gray-200 dark:border-[#1e2a3e] rounded-xl p-4">
      <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{place}</p>
      <p className="text-sm text-blue-500 mt-1">{year}</p>
    </div>
  </div>
);

/* ---------------- Tabs Data ---------------- */
const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card name="HTML" icon={<SiHtml5 />} />
        <Card name="CSS" icon={<SiCss3 />} />
        <Card name="SCSS" icon={<SiSass />} />
        <Card name="LESS" icon={<SiLess />} />
        <Card name="Bootstrap" icon={<SiBootstrap />} />
        <Card name="Tailwind CSS" icon={<SiTailwindcss />} />
        <Card name="JavaScript" icon={<SiJavascript />} />
        <Card name="TypeScript" icon={<SiTypescript />} />
        <Card name="React.js" icon={<SiReact />} />
        <Card name="Next.js" icon={<SiNextdotjs />} />
        <Card name="Node.js" icon={<SiNodedotjs />} />
        <Card name="Express.js" icon={<SiExpress />} />
      </div>
    ),
  },
  {
    title: "Technologies & Tools",
    id: "tools",
    content: (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card name="Git" icon={<SiGit />} />
        <Card name="GitHub" icon={<SiGithub />} />
        <Card name="Redux Toolkit" icon={<SiRedux />} />
        <Card name="Context API" icon={<SiReact />} />
        <Card name="Firebase" icon={<SiFirebase />} />
        <Card name="Jira" icon={<SiJira />} />
        <Card name="Postman" icon={<SiPostman />} />
        <Card name="Insomnia" icon={<SiInsomnia />} />
        <Card name="Axios" icon={<SiAxios />} />
      </div>
    ),
  },
  {
    title: "Cloud & DevOps",
    id: "cloud",
    content: (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card name="AWS (Lambda, S3, Route53)" icon={<FaAws />} />
        <Card name="Docker" icon={<SiDocker />} />
        <Card name="Kubernetes" icon={<SiKubernetes />} />
        <Card name="CI/CD Pipelines" icon={<SiGithub />} />
        <Card name="Automation Scripts" icon={<SiGithub />} />
      </div>
    ),
  },
  {
    title: "Databases & APIs",
    id: "db",
    content: (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card name="MongoDB" icon={<SiMongodb />} />
        <Card name="MySQL" icon={<SiMysql />} />
        <Card name="PostgreSQL" icon={<SiPostgresql />} />
        <Card name="REST APIs" icon={<SiExpress />} />
        <Card name="GraphQL" icon={<SiGraphql />} />
      </div>
    ),
  },
  {
    title: "AI & Automation",
    id: "ai",
    content: (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card name="OpenAI / Gemini APIs" icon={<SiOpenai />} />
        <Card name="GitHub Copilot" icon={<SiGithub />} />
        <Card name="Cursor AI" icon={<SiGithub />} />
        <Card name="Antigravity AI" icon={<SiGithub />} />
        <Card name="Ollama (Local LLMs)" icon={<SiGithub />} />
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="relative space-y-6 before:absolute before:left-[6px] before:top-0 before:h-full before:w-[2px] before:bg-gray-300 dark:before:bg-gray-700">
        <TimelineItem
          title="Bachelor of Engineering"
          place="Hasmukh Goswami College (GTU)"
          year="2019 – 2023 | 7.45 CGPA"
        />
        <TimelineItem
          title="Diploma Engineering"
          place="R.C Technical Institute (GTU)"
          year="2016 – 2019 | 7.01 CGPA"
        />
        <TimelineItem
          title="SSC"
          place="Shriji Vidhyalaya"
          year="2016 | 69%"
        />
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-4">
        <Card name="ChatGPT Workshop – BrainyBeams" icon={<SiOpenai />} />
        <Card
          name="JavaScript Algorithms & Data Structures – freeCodeCamp"
          icon={<SiJavascript />}
        />
        <Card name="PHP Programming Certification" icon={<SiGithub />} />
      </div>
    ),
  },
];

const About: FC = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  return (
    <section
      id="about"
      className=" mx-auto my-24 px-6 py-16 rounded-4xl bg-white border border-gray-200 dark:bg-[#151515] dark:border-white/10"
    >
      <Reveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">
          About Me
        </h2>
      </Reveal>

      {/* IMAGE + TEXT */}
      <div className="grid md:grid-cols-2 gap-14 mb-20 items-center">
        <Reveal>
          <Image
            src="/images/about-image.png"
            width={520}
            height={520}
            alt="About"
            className="rounded-3xl w-full max-w-[520px] mx-auto
              border border-gray-200 dark:border-white/10"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="max-w-xl space-y-4 leading-relaxed text-gray-700 dark:text-[#c7d7f5]">
            <p>
              I’m a <b>MERN Stack Developer</b> with strong experience in building
              scalable, AI-powered, cloud-ready applications for real-world use cases.
              I focus on writing clean, maintainable code and designing systems that
              scale efficiently in production environments.
            </p>

            <p>
              My expertise spans full-stack development, backend architecture,
              REST & GraphQL APIs, database design, and performance optimization.
              I actively work with modern frameworks like <b>React</b> and <b>Next.js</b>
              to deliver fast, accessible, and visually polished user experiences.
            </p>

            <p>
              Beyond traditional development, I integrate AI solutions, automate
              workflows, and leverage cloud & DevOps tools such as <b>AWS</b>, <b>Docker</b>,
              and CI/CD pipelines to improve system reliability and developer productivity.
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              My goal is to build software that is not only functional, but scalable,
              secure, and future-ready.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Tabs */}
      <Reveal>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {TAB_DATA.map((t) => (
            <TabButton
              key={t.id}
              active={tab === t.id}
              selectTab={() => startTransition(() => setTab(t.id))}
            >
              {t.title}
            </TabButton>
          ))}
        </div>
      </Reveal>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.3 }}
        >
          {TAB_DATA.find((t) => t.id === tab)?.content}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default About;