"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,

    title: "Next.js Portfolio",
    technologies: "Next.js,React Form Hook,Node Mailer",
    description:
      "I've crafted a clean and elegant portfolio website using Next.js, the powerful React framework. This website serves as a digital showcase of my work, skills, and experiences. Additionally, it features a contact form that allows anyone to easily get in touch with me via email. To ensure optimal performance and streamlined development, I've utilized Bun, the latest and most efficient package manager, for managing all project dependencies.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Chirag1905/Next-Portfolio.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "E-commerce Application",
    description:
      "I've developed a dynamic e-commerce website using React, offering a seamless and user-friendly online shopping experience. Explore a wide range of products, add them to your cart, and enjoy secure checkout.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React Chat App",
    description:
      "I've developed a real-time chat application using React.js and Firebase. This dynamic chat platform enables users to engage in instant messaging, providing a seamless and interactive communication experience.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Chirag1905/Chat-app.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Attendance Tracker",
    description:
      "I've designed and developed a comprehensive attendance tracker application that seamlessly combines a Node.js backend with React on the frontend. This powerful tool simplifies attendance management for schools, organizations, and businesses.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Next.js Blog App",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Application",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Full-stack Application",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Full-stack Application",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Full-stack Application",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="pt-16" id="projects">
      <h2 className="text-center text-4xl font-bold text-black dark:text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-black dark:text-white  flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul
        ref={ref}
        className="grid md:grid-cols-3 text-justify gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              technologies={project.technologies}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
