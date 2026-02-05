"use client";
import { useState, useRef, FC } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import ProjectModal from "./ProjectModal";

interface ProjectItem {
  id: number;
  title: string;
  technologies?: string;
  smallDescription: string;
  longDescription: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Zuno AI",
    technologies: "Next.js, Ollama (Local LLM), React Hook Form, NodeMailer, Tailwind CSS",
    smallDescription: "An AI chat assistant powered by a local LLM using Ollama.",
    longDescription:
      "Zuno AI is a privacy-focused AI chat assistant built with Next.js and powered by a locally hosted Large Language Model using Ollama. The application enables real-time conversational AI without relying on third-party cloud APIs, ensuring better data control and low-latency responses. It features a clean, responsive UI, smooth animations with Framer Motion, and optimized client-side rendering. A secure contact system is implemented using React Hook Form and NodeMailer. Zuno AI is designed as a scalable foundation for future enhancements such as chat history, prompt presets, and multi-model LLM support.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Chirag1905/zuno-ai.git",
    previewUrl: "https://zuno-ten.vercel.app/",
  },
  {
    id: 2,
    title: "Meteri – Wine & Restaurant Management Portal",
    technologies: "React.js, Tailwind CSS, Axios, LocalStorage",
    smallDescription:
      "Role-based wine and restaurant management platform for menus, wines, and beverages.",
    longDescription:
      "Meteri is a comprehensive wine and restaurant management platform that enables restaurants to independently create, customize, and manage their dishes, menus, wine lists, and beverage offerings—making them fully self-reliant on the system.\n\nThe platform supports a robust role-based access control (RBAC) system with three user roles: Admin, Restaurant, and Client, ensuring secure and permission-driven access across all modules. As part of the core functionality, the WineList module allows restaurants to curate and group wine recommendations based on customer segments and dining preferences. The MenuList module organizes dishes into structured courses such as Starters, Mains, and Desserts for improved clarity and usability, while the Beverage module manages additional drink offerings including soft drinks and non-alcoholic beverages.\n\nMy role involved leading the frontend development from scratch, delivering three major interfaces: an Admin Panel for overall platform management, a Restaurant Panel for menu and wine administration, and a Client View for browsing offerings. The application was built using React.js with Tailwind CSS for a clean, modern UI and Axios for efficient API communication, with data persistence handled via LocalStorage and Firebase.",
    image: "/images/projects/meteri.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "The Experimental Brain",
    technologies: "React.js, Node.js, Express.js, MongoDB, JWT, OpenAI API, Less CSS, React Context API",
    smallDescription:
      "AI-powered learning platform for school students with chat, image-based learning, and secure authentication.",
    longDescription:
      "The Experimental Brain is an AI-powered educational platform designed for school students, enabling them to log in and interact with an intelligent chat system powered by the OpenAI (ChatGPT) API. The platform supports learning through text and images, offering an engaging and interactive knowledge experience across various subjects.\n\nMy role involved fixing critical production bugs, implementing stop-response functionality for AI chats, and building a complete student authentication system using Node.js. This included user registration, login, JWT-based token handling, and role-based access control. I also developed and managed student data modules, deployed both frontend and backend servers, and handled domain and hosting configurations to ensure smooth production availability.",
    image: "/images/projects/teb.png",
    tag: ["All", "Web", "AI"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Next.js Portfolio",
    technologies: "Next.js, React Hook Form, Node Mailer",
    smallDescription: "A clean and elegant developer portfolio website.",
    longDescription:
      "A well-designed portfolio website built using Next.js with seamless page transitions, dark/light theme support, modular components, and optimized performance. Integrated React Hook Form with Node Mailer to enable functional contact form. Includes smooth framer-motion animations and a responsive UI across all devices.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Chirag1905/Next-Portfolio.git",
    previewUrl: "https://chiragvadhavanaportfolio.vercel.app/",
  },
  {
    id: 5,
    title: "E-commerce Application",
    technologies: "React.js, Context API, LocalStorage",
    smallDescription: "A dynamic multi-page online shopping web app.",
    longDescription:
      "Developed a fully functional e-commerce application with product listings, filtering, product details page, cart management, and checkout workflow. Used global state management with Context API and real-time cart updates stored in LocalStorage. UI built with reusable responsive components and image previews.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "React Chat App",
    technologies: "React.js, Firebase, Firestore, Authentication",
    smallDescription: "A real-time chat application using Firebase.",
    longDescription:
      "Created a modern chat app supporting real-time messaging using Firebase Firestore. Integrated authentication with Google Sign-In. Optimized message rendering, typing indicators, online users list, and secure user-specific chat storage. UI styled for a smooth messaging experience.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Chirag1905/Chat-app.git",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Full-stack Application",
    technologies: "MERN Stack",
    smallDescription: "Complete full-stack app showing CRUD operations.",
    longDescription:
      "A production-grade full-stack MERN application showcasing authentication, role-based access control, protected routes, CRUD operations, form validation, and optimized API structure with MVC architecture. Designed scalable UI and secure backend with hashed passwords.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const Projects: FC = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => setTag(newTag);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };


  return (
    <section
      id="projects"
      className="glass-card border border-black/10 dark:border-white/10 rounded-4xl shadow-2xl bg-[#F6F6F6] dark:bg-[#151515] text-center text-black dark:text-white py-4 sm:my-10 px-4"
    >
      <h2 className="text-2xl sm:text-4xl font-bold pb-6 sm:py-6">
        My Projects
      </h2>

      {/* Tags */}
      <div className="flex justify-center items-center border-t border-black/10 dark:border-white/10 py-10">
        <div
          className="
    flex gap-2 px-3 py-2 rounded-full
    bg-gray-200 dark:bg-[#111827]
    border border-gray-300 dark:border-[#1e2a3e]
    shadow-sm dark:shadow-[0_0_10px_rgba(0,0,0,0.4)]
    transition"
        >
          {["All", "Web", "Mobile"].map((name) => (
            <ProjectTag
              key={name}
              onClick={() => handleTagChange(name)}
              name={name}
              isSelected={tag === name}
            />
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <motion.ul
        ref={ref}
        className="grid sm:grid-cols-3 gap-7"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        {filteredProjects.map((project) => (
          <motion.li
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <ProjectCard
              title={project.title}
              technologies={project.technologies || "N/A"}
              smallDescription={project.smallDescription}
              longDescription={project.longDescription}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              onClickMore={() => openModal(project)}
            />
            <ProjectModal
              isOpen={isModalOpen}
              onClose={closeModal}
              project={selectedProject}
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Projects;
