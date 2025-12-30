import { FC } from "react";
import { motion } from "framer-motion";

interface ProjectTagProps {
  name: string;
  isSelected: boolean;
  onClick: (tag: string) => void;
}

const ProjectTag: FC<ProjectTagProps> = ({ name, isSelected, onClick }) => {
  return (
    <motion.button
      onClick={() => onClick(name)}
      whileTap={{ scale: 0.95 }}
      className={`
        relative px-6 py-2.5 text-sm md:text-base font-semibold rounded-full 
        transition-all duration-300

        ${isSelected
          ? "text-white dark:text-white"
          : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
        }
      `}
    >
      {isSelected && (
        <motion.div
          layoutId="active-pill"
          className="absolute inset-0 rounded-full bg-blue-600 dark:bg-blue-500 shadow-[0_0_12px_rgba(37,99,235,0.6)]"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      )}

      <span className="relative z-10">{name}</span>
    </motion.button>
  );
};

export default ProjectTag;
