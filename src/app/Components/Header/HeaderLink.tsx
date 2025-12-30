import Link from "next/link";
import { FC } from "react";

interface HeaderLinkProps {
  href: string;
  title: string;
}

const HeaderLink: FC<HeaderLinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#314f61] dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-black dark:hover:text-white items-center"
    >
      {title}
    </Link>
  );
};

export default HeaderLink;
