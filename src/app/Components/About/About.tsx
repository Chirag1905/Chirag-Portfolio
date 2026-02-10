"use client";

import { FC, JSX, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/app/utils/Reveal";

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
  SiGooglegemini,
  SiJfrogpipelines,
  SiOllama,
  SiFastify,
  SiNestjs,
  SiBun,
  SiDeno,
  SiPrisma,
  SiSequelize,
  SiClaude,
} from "react-icons/si";
import { FaAws, FaRocket } from "react-icons/fa";
import { TbBrandZulip } from "react-icons/tb";

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
  const content = (
    <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-black/20 dark:border-white/20 bg-white/60 dark:bg-black/30 hover:scale-105 transition-transform cursor-pointer">
      <span className="text-lg shrink-0">{icon}</span>
      <span className="text-sm font-medium truncate">{name}</span>
    </div>
  );

  return link ? (
    <Link href={link} target="_blank">
      {content}
    </Link>
  ) : (
    content
  );
};

/* ---------------- Skill Group ---------------- */
const SkillGroup = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element | JSX.Element[];
}) => (
  <div className="rounded-3xl border border-black/20 dark:border-white/20 bg-white/60 dark:bg-black/30 p-4 sm:p-6 space-y-4">
    <h3 className="text-lg font-semibold">{title}</h3>
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
      {children}
    </div>
  </div>
);

/* ---------------- Timeline ---------------- */
const TimelineItem = ({
  title,
  place,
  location,
  year,
  badge,
  align = "left",
}: {
  title: string;
  place: string;
  location?: string;
  year: string;
  badge?: string;
  align?: "left" | "right";
}) => {
  const isLeft = align === "left";

  return (
    <li className="relative flex justify-center md:justify-start w-full">
      {/* Dot */}
      <span className="absolute left-1/2 top-2 -translate-x-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 ring-4 sm:ring-8 ring-white/60 dark:ring-black/40 z-10">
        <span className="h-2.5 w-2.5 rounded-full bg-white" />
      </span>

      {/* Card - Full width on mobile, half width on desktop */}
      <div
        className={`w-full md:w-[calc(50%-2rem)] rounded-2xl border border-black/20 dark:border-white/20 bg-white/60 dark:bg-black/40 p-4 ${isLeft ? "md:mr-auto" : "md:ml-auto"
          }`}
      >
        <time className="inline-block mb-2 rounded border border-black/20 dark:border-white/20 bg-white/60 dark:bg-black/40 px-2 py-0.5 text-xs font-medium">
          {year}
        </time>

        <h3 className="flex flex-wrap items-center gap-2 text-base sm:text-lg font-semibold mb-1">
          {title}
          {badge && (
            <span className="rounded bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-500 border border-blue-500/30">
              {badge}
            </span>
          )}
        </h3>

        <p className="text-sm opacity-70">
          {place}
          <br />
          {location && <span className="opacity-75">{location}</span>}
        </p>
      </div>
    </li>
  );
};

/* ---------------- Component ---------------- */
const tabs = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
] as const;

const About: FC = () => {
  const [activeTab, setActiveTab] =
    useState<"skills" | "experience" | "education" | "certifications">("skills");

  return (
    <section
      id="about"
      className="glass border border-black/10 dark:border-white/10 rounded-4xl shadow-2xl bg-[#F6F6F6] dark:bg-[#151515] text-black dark:text-white my-10 px-4 sm:px-6 py-6 sm:py-8"
    >
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">About Me</h2>
      </Reveal>

      {/* IMAGE + DESCRIPTION */}
      <div className="grid md:grid-cols-2 gap-8 sm:gap-14 mb-12 sm:mb-16 items-center border-t border-black/10 dark:border-white/10 pt-8 sm:pt-10">
        <Reveal>
          <Image
            src="/images/about-image.png"
            width={520}
            height={520}
            alt="About"
            className="rounded-3xl w-full max-w-[520px] mx-auto border border-black/20 dark:border-white/10"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-4 text-sm sm:text-base text-gray-700 dark:text-[#c7d7f5]">
            <p>
              I&apos;m a <b>MERN Stack Developer</b> with strong experience in building
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

            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              My goal is to build software that is not only functional, but scalable,
              secure, and future-ready.
            </p>
          </div>
        </Reveal>
      </div>

      {/* CONNECTED TABS */}
      <div className="max-w-7xl mx-auto">
        {/* Tabs - Scrollable on mobile */}
        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex justify-start sm:justify-center gap-1.5 min-w-max sm:min-w-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-t-xl whitespace-nowrap
                  border-l border-r border-t border-black/20 dark:border-white/20 relative
                  ${activeTab === tab.id
                    ? "bg-white/60 dark:bg-black/15 text-blue-500 border-b-0 z-10"
                    : "bg-transparent opacity-70 hover:opacity-100 border-b"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT BOX */}
        <div className="rounded-b-3xl sm:rounded-tr-3xl sm:rounded-tl-3xl border border-black/20 dark:border-white/20 bg-white/60 dark:bg-black/15 backdrop-blur-xl p-4 sm:p-6 lg:p-8 -mt-px">
          {activeTab === "skills" && (
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              <SkillGroup title="Frontend">
                <Card
                  name="HTML"
                  icon={<SiHtml5 className="text-[#E34F26]" />}
                  link="https://developer.mozilla.org/en-US/docs/Web/HTML"
                />
                <Card
                  name="CSS"
                  icon={<SiCss3 className="text-[#1572B6]" />}
                  link="https://developer.mozilla.org/en-US/docs/Web/CSS"
                />
                <Card
                  name="SCSS"
                  icon={<SiSass className="text-[#CC6699]" />}
                  link="https://sass-lang.com/documentation/"
                />
                <Card
                  name="LESS"
                  icon={<SiLess className="text-[#1D365D]" />}
                  link="https://lesscss.org"
                />
                <Card
                  name="Bootstrap"
                  icon={<SiBootstrap className="text-[#7952B3]" />}
                  link="https://getbootstrap.com/docs"
                />
                <Card
                  name="Tailwind CSS"
                  icon={<SiTailwindcss className="text-[#38BDF8]" />}
                  link="https://tailwindcss.com/docs"
                />
                <Card
                  name="JavaScript"
                  icon={<SiJavascript className="text-[#F7DF1E]" />}
                  link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                />
                <Card
                  name="TypeScript"
                  icon={<SiTypescript className="text-[#3178C6]" />}
                  link="https://www.typescriptlang.org/docs/"
                />
                <Card
                  name="React.js"
                  icon={<SiReact className="text-[#61DBFB]" />}
                  link="https://react.dev"
                />
                <Card
                  name="Next.js"
                  icon={<SiNextdotjs className="text-black dark:text-white" />}
                  link="https://nextjs.org/docs"
                />
              </SkillGroup>

              <SkillGroup title="Backend & APIs">
                <Card
                  name="Node.js"
                  icon={<SiNodedotjs className="text-[#68A063]" />}
                  link="https://nodejs.org/en/docs/"
                />
                <Card
                  name="Deno"
                  icon={<SiDeno className="text-gray-600 dark:text-gray-300" />}
                  link="https://deno.land/"
                />
                <Card
                  name="Bun"
                  icon={<SiBun className="text-gray-600 dark:text-gray-300" />}
                  link="https://bun.sh/"
                />
                <Card
                  name="NestJS"
                  icon={<SiNestjs className="text-gray-600 dark:text-gray-300" />}
                  link="https://nestjs.com/"
                />
                <Card
                  name="Express.js"
                  icon={<SiExpress className="text-gray-600 dark:text-gray-300" />}
                  link="https://expressjs.com/"
                />
                <Card
                  name="Fastify"
                  icon={<SiFastify className="text-gray-600 dark:text-gray-300" />}
                  link="https://www.fastify.io/"
                />
                <Card
                  name="REST APIs"
                  icon={<SiExpress className="text-blue-500" />}
                  link="https://restfulapi.net/"
                />
                <Card
                  name="GraphQL"
                  icon={<SiGraphql className="text-[#E10098]" />}
                  link="https://graphql.org/learn/"
                />
              </SkillGroup>

              <SkillGroup title="State Management & Tools">
                <Card
                  name="Redux Toolkit"
                  icon={<SiRedux className="text-[#764ABC]" />}
                  link="https://redux-toolkit.js.org/introduction/getting-started"
                />
                <Card
                  name="Zustand"
                  icon={<TbBrandZulip className="text-[#2D8CFF]" />}
                  link="https://docs.pmnd.rs/zustand/getting-started/introduction"
                />
                <Card
                  name="Git"
                  icon={<SiGit className="text-[#F05032]" />}
                  link="https://git-scm.com/doc"
                />
                <Card
                  name="GitHub"
                  icon={<SiGithub className="text-black dark:text-white" />}
                  link="https://docs.github.com/en"
                />
                <Card
                  name="Jira"
                  icon={<SiJira className="text-[#0052CC]" />}
                  link="https://www.atlassian.com/software/jira"
                />
                <Card
                  name="Postman"
                  icon={<SiPostman className="text-[#FF6C37]" />}
                  link="https://learning.postman.com/docs/introduction/overview/"
                />
                <Card
                  name="Insomnia"
                  icon={<SiInsomnia className="text-[#5849BE]" />}
                  link="https://docs.insomnia.rest/"
                />
                <Card
                  name="Axios"
                  icon={<SiAxios className="text-[#5A29E4]" />}
                  link="https://axios-http.com/docs/intro"
                />
              </SkillGroup>

              <SkillGroup title="Databases & ORMs">
                <Card
                  name="MongoDB"
                  icon={<SiMongodb className="text-[#47A248]" />}
                  link="https://www.mongodb.com/docs/"
                />
                <Card
                  name="MySQL"
                  icon={<SiMysql className="text-[#00758F]" />}
                  link="https://dev.mysql.com/doc/"
                />
                <Card
                  name="PostgreSQL"
                  icon={<SiPostgresql className="text-[#336791]" />}
                  link="https://www.postgresql.org/docs/"
                />
                <Card
                  name="Firebase"
                  icon={<SiFirebase className="text-[#FFCA28]" />}
                  link="https://firebase.google.com/docs"
                />
                <Card
                  name="Prisma"
                  icon={<SiPrisma className="text-[#2D8CFF]" />}
                  link="https://prisma.io/docs"
                />
                <Card
                  name="Sequelize"
                  icon={<SiSequelize className="text-[#2D8CFF]" />}
                  link="https://sequelize.org/docs"
                />
              </SkillGroup>

              <SkillGroup title="Cloud & DevOps">
                <Card
                  name="AWS"
                  icon={<FaAws className="text-[#FF9900]" />}
                  link="https://docs.aws.amazon.com/"
                />
                <Card
                  name="Docker"
                  icon={<SiDocker className="text-[#2496ED]" />}
                  link="https://docs.docker.com/"
                />
                <Card
                  name="Kubernetes"
                  icon={<SiKubernetes className="text-[#326CE5]" />}
                  link="https://kubernetes.io/docs/home/"
                />
                <Card
                  name="CI/CD Pipelines"
                  icon={<SiJfrogpipelines className="text-[#40BE46]" />}
                  link="https://jfrog.com/help/r/jfrog-pipelines-documentation"
                />
              </SkillGroup>

              <SkillGroup title="AI & Automation">
                <Card
                  name="OpenAI/Codex"
                  icon={<SiOpenai className="text-[#10A37F]" />}
                  link="https://platform.openai.com/docs/introduction"
                />
                <Card
                  name="Gemini"
                  icon={<SiGooglegemini className="text-[#4285F4]" />}
                  link="https://ai.google.dev/docs"
                />
                <Card
                  name="Antigravity"
                  icon={<FaRocket className="text-black dark:text-white" />}
                  link="https://antigravity.ai/"
                />
                <Card
                  name="CursorAi"
                  icon={<FaRocket className="text-black dark:text-white" />}
                  link="https://cursor.sh/"
                />
                <Card
                  name="Claude"
                  icon={<SiClaude className="text-[#10A37F]" />}
                  link="https://docs.anthropic.com/en/"
                />
                <Card
                  name="GitHub Copilot"
                  icon={<SiGithub className="text-black dark:text-white" />}
                  link="https://docs.github.com/en/copilot"
                />
                <Card
                  name="Cursor AI"
                  icon={<SiGithub className="text-purple-400" />}
                  link="https://www.cursor.com/"
                />
                <Card
                  name="Ollama (Local LLMs)"
                  icon={<SiOllama className="text-emerald-400" />}
                  link="https://ollama.com/"
                />
              </SkillGroup>
            </div>
          )}

          {activeTab === "education" && (
            <div className="relative flex justify-center">
              {/* Center line - hidden on mobile */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-black/20 dark:bg-white/20 -translate-x-1/2 hidden md:block" />

              <ol className="relative w-full max-w-4xl space-y-12 sm:space-y-16">
                <TimelineItem
                  title="B.E Engineering(GTU)"
                  place="HashMukh Goswami College of Engineering"
                  location="Vehlal, Ahmedabad, Gujarat"
                  year="2019 – 2023"
                  badge="Passout"
                  align="left"
                />
                <TimelineItem
                  title="Diploma Engineering(GTU)"
                  place="R.C Technical Institute"
                  location="Sola, Ahmedabad, Gujarat"
                  year="2016 – 2019"
                  badge="Passout"
                  align="right"
                />
                <TimelineItem
                  title="SSC"
                  place="Shriji Vidhyalaya"
                  location="Bapunagar, Ahmedabad, Gujarat"
                  year="2016 | 69%"
                  badge="Passout"
                  align="left"
                />
              </ol>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="relative flex justify-center">
              {/* Center line - hidden on mobile */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-black/20 dark:bg-white/20 -translate-x-1/2 hidden md:block" />

              <ol className="relative w-full max-w-4xl space-y-12 sm:space-y-16">
                <TimelineItem
                  title="Mern Stack Developer - Onsite"
                  place="iFlair Web Technologies Pvt.Ltd"
                  location="Paladi, Ahmedabad, Gujarat"
                  year="Jan 2023 – Present"
                  badge="Current"
                  align="left"
                />
                <TimelineItem
                  title="JavaScript Internship - Onsite"
                  place="iFlair Web Technologies Pvt.Ltd"
                  location="Paladi, Ahmedabad, Gujarat"
                  year="Nov 2022 – Jan 2023"
                  badge="Past"
                  align="right"
                />
                <TimelineItem
                  title="JavaScript Developer - Remote"
                  place="Techvein IT Solution Pvt.Ltd"
                  location="Jaipur"
                  year="May 2022 – Nov 2022"
                  badge="Past"
                  align="left"
                />
              </ol>
            </div>
          )}

          {activeTab === "certifications" && (
            <div className="space-y-4 max-w-2xl mx-auto">
              <Card name="ChatGPT Workshop – BrainyBeams" icon={<SiOpenai className="text-[#10A37F]" />} />
              <Card name="JavaScript Algorithms – freeCodeCamp" icon={<SiJavascript className="text-[#F7DF1E]" />} />
              <Card name="PHP Programming Certification" icon={<SiGithub className="text-black dark:text-white" />} />
            </div>
          )}
        </div>
      </div>

      {/* Add this to your global CSS for hiding scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default About;