"use client";
import { FC, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
    title: string;
    image: string;
    longDescription: string;
    technologies?: string;
    gitUrl?: string;
    previewUrl?: string;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}

const ProjectModal: FC<ModalProps> = ({ isOpen, onClose, project }) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [isOpen]);

    if (!isOpen || !project) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 backdrop-blur-xl flex items-center justify-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0.9, opacity: 0, y: 40 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 40 }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    className="relative max-w-5xl w-full
          rounded-3xl overflow-hidden
          bg-white dark:bg-[#0A1224]
          shadow-2xl"
                >
                    {/* Close */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10
            h-10 w-10 rounded-full
            bg-black/40 text-white hover:bg-black/60 transition"
                    >
                        <XMarkIcon className="w-6 h-6 mx-auto" />
                    </button>

                    {/* HERO IMAGE */}
                    <div className="relative h-80">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                        <h2 className="absolute bottom-6 left-6 text-3xl font-bold text-white">
                            {project.title}
                        </h2>
                    </div>

                    {/* CONTENT */}
                    <div className="p-8 max-h-[50vh] overflow-y-auto space-y-6">
                        <p className="text-gray-700 text-justify text-base font-semibold dark:text-gray-300 leading-relaxed">
                            {project.longDescription}
                        </p>

                        {/* TECH */}
                        <div className="flex flex-wrap gap-2">
                            {project.technologies?.split(",").map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-1.5 rounded-full text-sm font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200"
                                >
                                    {tech.trim()}
                                </span>
                            ))}
                        </div>

                        {/* ACTIONS */}
                        <div className="flex gap-4 pt-4">
                            {project.gitUrl && (
                                <Link
                                    href={project.gitUrl}
                                    target="_blank"
                                    className="flex items-center gap-2 px-5 py-3 rounded-xl
                  bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition"
                                >
                                    <FaGithub /> GitHub
                                </Link>
                            )}
                            {project.previewUrl && (
                                <Link
                                    href={project.previewUrl}
                                    target="_blank"
                                    className="flex items-center gap-2 px-5 py-3 rounded-xl
                  bg-blue-600 text-white hover:bg-blue-700 transition"
                                >
                                    <FaExternalLinkAlt /> Live Preview
                                </Link>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;
