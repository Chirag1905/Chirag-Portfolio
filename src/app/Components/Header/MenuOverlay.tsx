import { FC } from "react";
import HeaderLink from "./HeaderLink";

interface NavLinkItem {
  title: string;
  path: string;
}

interface MenuOverlayProps {
  links: NavLinkItem[];
}

const MenuOverlay: FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col gap-8 py-8 text-xl bg-white dark:bg-[#1b1b1b] shadow-md rounded-b-lg items-center animate-slideDown">
      {links.map((link, index) => (
        <li key={index}>
          <HeaderLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
