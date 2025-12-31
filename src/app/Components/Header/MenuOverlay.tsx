"use client";
import Link from "next/link";
import { FC } from "react";

interface MenuOverlayProps {
  links: { title: string; path: string }[];
  children?: React.ReactNode; // <- Support children (Theme)
}

const MenuOverlay: FC<MenuOverlayProps> = ({ links, children }) => {
  return (
    <div className="md:hidden absolute top-16 left-0 w-full bg-white/90 dark:bg-[#1b1b1b]/90 backdrop-blur-xl shadow-lg border-b border-gray-300 dark:border-gray-800 transition-all duration-300">
      <ul className="flex flex-col items-center gap-6 py-6">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.path}
              className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
            >
              {link.title}
            </Link>
          </li>
        ))}

        {/* Resume button also in mobile menu */}
        <Link
          href="/Resume_Chirag.pdf"
          download
          className="rounded-lg border border-indigo-600 px-4 py-2 text-indigo-600 dark:text-white dark:border-white hover:bg-indigo-600 hover:text-white transition-all"
        >
          Resume
        </Link>

        {/* 🔥 Theme toggle now visible */}
        {children}
      </ul>
    </div>
  );
};

export default MenuOverlay;
