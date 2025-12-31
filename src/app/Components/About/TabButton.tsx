"use client";
import { FC } from "react";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const TabButton: FC<TabButtonProps> = ({ active, selectTab, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`px-5 py-3 text-sm sm:text-base font-semibold transition-all duration-200 
        ${active
          ? "text-blue-500 bg-[#b9b9b114] dark:bg-[#101722] rounded-t-xl border-b-2 border-blue-500"
          : "text-gray-600 hover:text-gray-700 dark:hover:text-gray-200 rounded-t-xl border-b-2 border-transparent"
        }
      `}
    >
      {children}
    </button>
  );
};

export default TabButton;
