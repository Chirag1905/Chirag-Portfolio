"use client";
import { FC } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  technologies: string;
  smallDescription: string;
  longDescription: string;
  gitUrl: string;
  previewUrl: string;
  onClickMore?: () => void;
}

const ProjectCard: FC<ProjectCardProps> = ({
  imgUrl,
  title,
  technologies,
  smallDescription,
  gitUrl,
  previewUrl,
  onClickMore,
}) => {
  const techBadges = technologies.split(",").map((tech) => tech.trim());

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="glass-card group relative rounded-[24px] overflow-hidden h-full flex flex-col"
    >
      {/* Ambient Hover Glow */}
      <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-violet-600 rounded-[24px] opacity-0 group-hover:opacity-20 blur transition duration-500" />

      {/* IMAGE AREA */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80" />

        {/* Hover Actions */}
        <div
          className="absolute inset-0 z-10 flex items-center justify-center gap-6
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
        >
          <Link href={gitUrl} target="_blank">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <CodeBracketIcon className="w-6 h-6 text-white" />
            </motion.div>
          </Link>

          <Link href={previewUrl} target="_blank">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <EyeIcon className="w-6 h-6 text-white" />
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 p-6 flex-1 flex flex-col justify-between space-y-4 bg-transparent">
        <div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-violet-400 transition-all duration-300">
            {title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full
                  bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 
                  border border-blue-100 dark:border-blue-800/50"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
            {smallDescription}
          </p>
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => onClickMore?.()}
          className="w-full mt-4 py-2.5 text-sm font-semibold rounded-2xl
            bg-gray-100 dark:bg-white/5 
            text-gray-900 dark:text-white
            hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600
            transition-all duration-300 ease-out
            border border-transparent shadow-sm"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
