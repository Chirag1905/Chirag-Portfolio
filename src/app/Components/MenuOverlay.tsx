import { FC } from "react";
import NavLink from "./NavLink";

interface NavLinkItem {
  title: string;
  path: string;
}

interface MenuOverlayProps {
  links: NavLinkItem[];
}

const MenuOverlay: FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
