"use client";
import { FC } from "react";

interface Props {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const TabButton: FC<Props> = ({ active, selectTab, children }) => (
  <button
    onClick={selectTab}
    className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all
      ${active
        ? "bg-blue-500 text-white"
        : "bg-gray-100 text-gray-700 hover:text-blue-500 dark:bg-[#0D1524] dark:text-gray-300 dark:hover:text-blue-400"
      }`}
  >
    {children}
  </button>
);

export default TabButton;