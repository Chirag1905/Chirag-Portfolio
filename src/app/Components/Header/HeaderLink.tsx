import Link from "next/link";
import { FC } from "react";

interface HeaderLinkProps {
  href: string;
  title: string;
  active?: boolean;
}

const HeaderLink: FC<HeaderLinkProps> = ({ href, title, active }) => {
  return (
    <Link
      href={href}
      className={`relative font-medium text-[17px] transition-all duration-300 px-2 py-1 group ${active
        ? "text-indigo-600 dark:text-white"
        : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white"
        }`}
    >
      {title}

      {/* Animated underline */}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-600 dark:bg-white transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"
          }`}
      />
    </Link>
  );
};

export default HeaderLink;
