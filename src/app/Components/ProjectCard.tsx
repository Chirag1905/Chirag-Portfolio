import { FC, useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  technologies: string;
  smallDescription: string;
  longDescription: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  imgUrl,
  title,
  technologies,
  smallDescription,
  longDescription,
  gitUrl,
  previewUrl,
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-[#dfdfdf] dark:bg-[#1e1e1e]">
      <div
        className="h-52 md:h-72 relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full 
        bg-black/40 opacity-0 group-hover:opacity-100 
        flex transition-all duration-500">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#45494d] dark:border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#45494d] dark:text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#45494d] dark:border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#45494d] dark:text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      <div className="text-black dark:text-white pt-4 px-4 space-y-2">
        <h5 className="text-xl font-semibold hover:underline">{title}</h5>
        <p className="text-[#45494d] dark:text-[#ADB7BE]">
          <span className="text-black dark:text-white text-base font-semibold">
            Technologies:
          </span>
          <span className="text-sm ml-1">{technologies}</span>
        </p>
      </div>

      {/* Description with Show More / Less */}
      <div className="relative text-[#45494d] dark:text-[#ADB7BE] pb-4 px-4 space-y-2">
        <p className="mt-2 text-[#45494d] dark:text-[#ADB7BE]">
          <span className="text-black dark:text-white text-base font-semibold">Description: </span>
          <span className="text-sm ml-1">{showMore ? longDescription : smallDescription}</span>
        </p>

        <button
          onClick={() => setShowMore(!showMore)}
          // className="text-sm text-blue-600 dark:text-blue-400 hover:underline mt-2"
          className="absolute mt-3 bottom-2 right-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
