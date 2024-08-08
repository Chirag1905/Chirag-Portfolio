import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "bg-[#eee8e8] text-black dark:text-white border-primary-500"
    : "text-[#5d6266] border-slate-600 hover:border-black dark:hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full  border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
