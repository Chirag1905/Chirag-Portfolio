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
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGraphql,
  SiDocker,
  SiKubernetes,
  SiOpenai,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbBrandZulip } from "react-icons/tb";

/* ---------------- Types ---------------- */
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
  const Wrapper: any = link ? "a" : "div";

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
        <Card name="HTML" icon={<SiHtml5 />} link="https://developer.mozilla.org/en-US/docs/Web/HTML" />
        <Card name="CSS" icon={<SiCss3 />} link="https://developer.mozilla.org/en-US/docs/Web/CSS" />
        <Card name="SCSS" icon={<SiSass />} link="https://sass-lang.com" />
        <Card name="LESS" icon={<SiLess />} link="https://lesscss.org" />
        <Card name="Bootstrap" icon={<SiBootstrap />} link="https://getbootstrap.com" />
        <Card name="Tailwind CSS" icon={<SiTailwindcss />} link="https://tailwindcss.com" />
        <Card name="JavaScript" icon={<SiJavascript />} link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
        <Card name="TypeScript" icon={<SiTypescript />} link="https://www.typescriptlang.org" />
        <Card name="React.js" icon={<SiReact />} link="https://react.dev" />
        <Card name="Next.js" icon={<SiNextdotjs />} link="https://nextjs.org" />
        <Card name="Node.js" icon={<SiNodedotjs />} link="https://nodejs.org" />
        <Card name="Express.js" icon={<SiExpress />} link="https://expressjs.com" />
      </div>
    ),
  },

  {
    title: "Technologies & Tools",
    id: "tools",
    content: (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card name="Git" icon={<SiGit />} link="https://git-scm.com" />
        <Card name="GitHub" icon={<SiGithub />} link="https://github.com" />
        <Card name="Redux Toolkit" icon={<SiRedux />} link="https://redux-toolkit.js.org" />
        <Card name="Zustand" icon={<TbBrandZulip />} link="https://zustand.dev" />
        <Card name="Context API" icon={<SiReact />} link="https://react.dev/reference/react/useContext" />
        <Card name="Firebase" icon={<SiFirebase />} link="https://firebase.google.com" />
        <Card name="Jira" icon={<SiJira />} link="https://www.atlassian.com/software/jira" />
        <Card name="Postman" icon={<SiPostman />} link="https://www.postman.com" />
        <Card name="Insomnia" icon={<SiInsomnia />} link="https://insomnia.rest" />
        <Card name="Axios" icon={<SiAxios />} link="https://axios-http.com" />
      </div>
    ),
  },

  {
    title: "Cloud & DevOps",
    id: "cloud",
    content: (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card name="AWS (Lambda, S3, Route53)" icon={<FaAws />} link="https://aws.amazon.com" />
        <Card name="Docker" icon={<SiDocker />} link="https://www.docker.com" />
        <Card name="Kubernetes" icon={<SiKubernetes />} link="https://kubernetes.io" />
        <Card name="CI/CD Pipelines" icon={<SiGithub />} link="https://docs.github.com/en/actions" />
        <Card name="Automation Scripts" icon={<SiGithub />} link="https://github.com/features/actions" />
      </div>
    ),
  },

  {
    title: "Databases & APIs",
    id: "db",
    content: (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card name="MongoDB" icon={<SiMongodb />} link="https://www.mongodb.com" />
        <Card name="MySQL" icon={<SiMysql />} link="https://www.mysql.com" />
        <Card name="PostgreSQL" icon={<SiPostgresql />} link="https://www.postgresql.org" />
        <Card name="REST APIs" icon={<SiExpress />} link="https://restfulapi.net" />
        <Card name="GraphQL" icon={<SiGraphql />} link="https://graphql.org" />
      </div>
    ),
  },

  {
    title: "AI & Automation",
    id: "ai",
    content: (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card name="OpenAI / Gemini APIs" icon={<SiOpenai />} link="https://platform.openai.com" />
        <Card name="GitHub Copilot" icon={<SiGithub />} link="https://github.com/features/copilot" />
        <Card name="Cursor AI" icon={<SiGithub />} link="https://cursor.sh" />
        <Card name="Antigravity AI" icon={<SiGithub />} link="https://antigravity.ai" />
        <Card name="Ollama (Local LLMs)" icon={<SiGithub />} link="https://ollama.com" />
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
        <Card
          name="ChatGPT Workshop – BrainyBeams"
          icon={<SiOpenai />}
        // link="https://brainybeams.com"
        />
        <Card
          name="JavaScript Algorithms & Data Structures – freeCodeCamp"
          icon={<SiJavascript />}
        // link="https://www.freecodecamp.org"
        />
        <Card
          name="PHP Programming Certification"
          icon={<SiGithub />}
        // link="https://www.php.net"
        />
      </div>
    ),
  },
];

/* ---------------- Component ---------------- */
const About: FC = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  return (
    <section
      id="about"
      className="mx-auto px-6 py-10 rounded-4xl bg-white border border-gray-200 dark:bg-[#151515] dark:border-white/10"
    >
      <Reveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">
          About Me
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-14 mb-20 items-center">
        <Reveal>
          <Image
            src="/images/about-image.png"
            width={520}
            height={520}
            alt="About"
            className="rounded-3xl w-full max-w-[520px] mx-auto border border-gray-200 dark:border-white/10"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="max-w-xl space-y-4 text-gray-700 dark:text-[#c7d7f5]">
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