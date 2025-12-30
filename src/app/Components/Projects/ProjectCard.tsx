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
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 180, damping: 15 }}
      className="
        group relative rounded-[28px] overflow-hidden
        bg-[#0F172A]/80 backdrop-blur-xl
        border border-[#1e2a3e]
        shadow-[0_0_35px_rgba(26,95,255,0.15)]
        transition-all duration-500
      "
    >

      {/* Ambient Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-linear-to-br from-blue-700 to-purple-700 blur-3xl transition duration-500" />

      {/* IMAGE AREA */}
      <div className="relative h-52 md:h-72 overflow-hidden">
        <Image src={imgUrl} alt={title} fill className="object-cover" />

        {/* HOVER ICONS ONLY ON IMAGE */}
        <div
          className="
    absolute inset-0 z-10 flex items-center justify-center gap-6
    bg-black/40 backdrop-blur-sm
    opacity-0 group-hover:opacity-100
    transition-all duration-500 ease-out
    pointer-events-auto"
        >
          <Link href={gitUrl} target="_blank">
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="h-14 w-14 rounded-full bg-white/25 border border-white/40 flex items-center justify-center backdrop-blur-md shadow-lg hover:bg-white/40 transition"
            >
              <CodeBracketIcon className="w-7 h-7 text-white" />
            </motion.div>
          </Link>

          <Link href={previewUrl} target="_blank">
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="h-14 w-14 rounded-full bg-white/25 border border-white/40 flex items-center justify-center backdrop-blur-md shadow-lg hover:bg-white/40 transition"
            >
              <EyeIcon className="w-7 h-7 text-white" />
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 p-6 space-y-4">
        <h3 className="text-2xl font-bold text-white mb-3 transition group-hover:text-blue-400">
          {title}
        </h3>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {techBadges.map((tech) => (
            <span
              key={tech}
              className="
                text-xs font-medium px-3 py-1 rounded-full
                bg-blue-950/50 text-blue-300 border border-blue-800
                shadow-[0_0_10px_rgba(29,78,216,0.25)]
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-[#d1d5db] leading-relaxed">
          {smallDescription}
        </p>

        {/* Details Button */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => onClickMore?.()}
          className="
            mt-5 px-5 py-2 text-sm font-semibold rounded-full
            bg-blue-600 text-white
            hover:bg-blue-700
            shadow-md hover:shadow-blue-500/30
            transition-all duration-300 cursor-pointer
          "
        >
          Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
