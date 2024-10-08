import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  technologies,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-[#dfdfdf] dark:bg-[#1e1e1e]">
      <div
        className="h-52 md:h-72 relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#dddddd] dark:bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#45494d] dark:border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#45494d] dark:text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#45494d] dark:border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#45494d] dark:text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-black dark:text-white py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#45494d] dark:text-[#ADB7BE] mb-4">
          <span className="text-black dark:text-white text-sm font-semibold">
            Technologies:{" "}
          </span>
          <span className="ml-2">{technologies}</span>
        </p>
        <p className="text-[#45494d] dark:text-[#ADB7BE] ">
          <span className="text-black dark:text-white text-sm font-semibold">
            Description:{" "}
          </span>
          <span className="ml-2">{description}</span>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
