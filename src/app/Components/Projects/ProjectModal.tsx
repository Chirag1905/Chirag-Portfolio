"use client";
import { FC, JSX, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaTimes,
    FaReact,
    FaNodeJs,
    FaDatabase,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiMongodb,
    SiExpress,
    SiMysql,
    SiPostgresql,
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiBootstrap,
    SiChakraui,
} from "react-icons/si";

interface Project {
    title: string;
    image: string;
    longDescription: string;
    technologies?: string;
    gitUrl: string;
    previewUrl: string;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}

const techIconMap: Record<string, JSX.Element> = {
    "React.js": <FaReact size={18} className="text-cyan-500" />,
    React: <FaReact size={18} className="text-cyan-500" />,
    "Next.js": <SiNextdotjs size={18} className="text-black dark:text-white" />,
    "Node.js": <FaNodeJs size={18} className="text-green-500" />,
    Express: <SiExpress size={18} className="text-black dark:text-white" />,
    MongoDB: <SiMongodb size={18} className="text-green-500" />,
    MySQL: <SiMysql size={18} className="text-blue-600" />,
    PostgreSQL: <SiPostgresql size={18} className="text-blue-600" />,
    Tailwind: <SiTailwindcss size={18} className="text-cyan-400" />,
    JavaScript: <SiJavascript size={18} className="text-yellow-400" />,
    TypeScript: <SiTypescript size={18} className="text-blue-500" />,
    Bootstrap: <SiBootstrap size={18} className="text-purple-500" />,
    "Chakra UI": <SiChakraui size={18} className="text-teal-400" />,
    SQL: <FaDatabase size={18} className="text-gray-600 dark:text-gray-300" />,
};

const ProjectModal: FC<ModalProps> = ({ isOpen, onClose, project }) => {
    useEffect(() => {
        if (!isOpen) return;

        document.body.style.overflow = "hidden";
        const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", handleKey);

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKey);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    return (
        <AnimatePresence>
            {/* BACKDROP */}
            <motion.div
                className="fixed inset-0 bg-black/10 dark:bg-black/70 backdrop-blur-xl flex items-center justify-center z-9999"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                {/* MODAL */}
                <motion.div
                    className="relative max-w-5xl w-full
            bg-white text-black
            dark:bg-[#0A1224]/90 dark:text-white
            border border-gray-300 dark:border-blue-500/40
            shadow-2xl rounded-3xl p-6 backdrop-blur-2xl"
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: 20 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* CLOSE BUTTON */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 
              bg-gray-200 dark:bg-white/20 
              p-2 rounded-full hover:bg-gray-300 dark:hover:bg-white/30 
              transition"
                    >
                        <XMarkIcon className="w-6 h-6 text-black dark:text-white" />
                    </button>

                    {/* TITLE */}
                    <h2 className="text-3xl font-bold text-center bg-linear-to-r from-blue-500 to-blue-700 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent mb-5">
                        {project.title}
                    </h2>

                    {/* IMAGE */}
                    <div className="rounded-xl overflow-hidden shadow-lg mb-6 border border-gray-300 dark:border-white/10 w-full h-75 sm:h-112.5">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={1400}
                            height={800}
                            className="object-cover w-full"
                        />
                    </div>

                    {/* CONTENT SCROLL */}
                    <div className="max-h-[45vh] overflow-y-auto custom-scrollbar pr-2">
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center mb-6">
                            {project.longDescription}
                        </p>

                        {/* TECH TAGS */}
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                            {project.technologies?.split(",").map((tech) => (
                                <span
                                    key={tech}
                                    className="flex items-center gap-2 px-4 py-1.5 text-sm
                    bg-gray-200 text-gray-700 border border-gray-300 
                    dark:bg-blue-900/40 dark:text-blue-200 dark:border-blue-800
                    rounded-full"
                                >
                                    {techIconMap[tech.trim()] ?? "⚙"}
                                    {tech.trim()}
                                </span>
                            ))}
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="flex justify-center gap-4 pb-3">
                            <Link
                                href={project.gitUrl}
                                target="_blank"
                                className="px-5 py-2.5 text-sm font-semibold 
                bg-gray-100 text-gray-900 border border-gray-300
                hover:bg-gray-200
                dark:bg-gray-900 dark:text-white dark:border-gray-700 
                rounded-lg transition flex items-center gap-2"
                            >
                                <FaGithub className="w-5 h-5" />
                                GitHub
                            </Link>

                            <Link
                                href={project.previewUrl}
                                target="_blank"
                                className="px-5 py-2.5 text-sm font-semibold 
                bg-blue-600 text-white hover:bg-blue-700 
                rounded-lg transition flex items-center gap-2"
                            >
                                <FaExternalLinkAlt className="w-4 h-4" />
                                Live Preview
                            </Link>

                            <button
                                onClick={onClose}
                                className="px-5 py-2.5 text-sm font-semibold 
                bg-red-600 text-white hover:bg-red-700
                rounded-lg transition flex items-center gap-2"
                            >
                                <FaTimes className="w-4 h-4" />
                                Close
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;
