"use client";
import { FC, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";

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

const ProjectModal: FC<ModalProps> = ({ isOpen, onClose, project }) => {
    // ESC to close
    useEffect(() => {
        if (!isOpen) return;
        const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    return (
        <AnimatePresence>
            {/* BACKDROP */}
            <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-md z-999 flex justify-center items-center p-4 overflow-y-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                {/* MODAL PANEL */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 25 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="
            relative w-full max-w-4xl
            bg-[#0F172A]/95 backdrop-blur-2xl
            rounded-3xl p-6
            border border-blue-700/60 
            shadow-[0_0_45px_rgba(29,78,216,0.45)]
            text-white
          "
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* CLOSE BUTTON */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/15 hover:bg-white/30 transition"
                    >
                        <XMarkIcon className="w-5 h-5 text-white" />
                    </button>

                    {/* TITLE */}
                    <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

                    {/* IMAGE */}
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={1200}
                            height={650}
                            className="object-cover"
                        />
                    </div>

                    {/* SCROLLABLE CONTENT */}
                    <div className="mt-6 max-h-[50vh] overflow-y-auto pr-3 custom-scrollbar">
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            {project.longDescription}
                        </p>

                        {/* TECHNOLOGY BADGES */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies?.split(",").map((tech: string) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-sm rounded-full bg-blue-900/40 border border-blue-800 text-blue-300"
                                >
                                    {tech.trim()}
                                </span>
                            ))}
                        </div>

                        {/* ACTION BUTTONS → INSIDE SCROLL AREA */}
                        <div className="flex justify-end gap-3 pb-3">
                            <Link
                                href={project.gitUrl}
                                target="_blank"
                                className="px-4 py-2 rounded-lg font-semibold text-sm bg-gray-800 border border-gray-700 hover:bg-gray-700 transition"
                            >
                                GitHub
                            </Link>

                            <Link
                                href={project.previewUrl}
                                target="_blank"
                                className="px-4 py-2 rounded-lg font-semibold text-sm bg-blue-600 hover:bg-blue-700 transition"
                            >
                                Live
                            </Link>

                            <button
                                onClick={onClose}
                                className="px-4 py-2 rounded-lg font-semibold text-sm bg-red-600 hover:bg-red-700 transition"
                            >
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
