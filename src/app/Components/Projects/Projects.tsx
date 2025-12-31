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
    title: "Next.js Portfolio",
    technologies: "Next.js, React Hook Form, Node Mailer",
    smallDescription: "A clean and elegant developer portfolio website.",
    longDescription:
      "A well-designed portfolio website built using Next.js with seamless page transitions, dark/light theme support, modular components, and optimized performance. Integrated React Hook Form with Node Mailer to enable functional contact form. Includes smooth framer-motion animations and a responsive UI across all devices.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Chirag1905/Next-Portfolio.git",
    previewUrl: "/",
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    title: "Attendance Tracker",
    technologies: "React.js, LocalStorage / Firebase",
    smallDescription: "A complete attendance management system.",
    longDescription:
      "Designed and developed an attendance tracker with user login, student listing, attendance marking, reporting dashboard, and data persistence using LocalStorage/Firebase. Clean UI for teachers to manage and track student attendance efficiently in real time.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Next.js Blog App",
    technologies: "Next.js, MongoDB, JWT Authentication",
    smallDescription: "Blog platform with authentication and CRUD.",
    longDescription:
      "A full-featured blog platform where users can register, log in, create, edit, and delete posts securely. Built using Next.js App Router, MongoDB for storage, and JWT-based authentication. Implemented server-side rendering to improve SEO and optimized blog loading.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
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
    <section className="border border-black/10 dark:border-white/10 rounded-4xl shadow-2xl bg-[#F6F6F6] dark:bg-[#151515] text-center text-black dark:text-white my-7 py-4 sm:my-20 px-4" id="projects">
      <h2 className="text-2xl sm:text-4xl font-bold pb-6 sm:py-6">
        My Projects
      </h2>

      {/* Tags */}
      <div className="flex justify-center items-center pt-8 pb-10">
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
