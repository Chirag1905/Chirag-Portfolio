"use client";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Theme from "../Theme";
import HeaderLink from "./HeaderLink";

interface HeaderLinkItem {
  title: string;
  path: string;
}

const navLinks: HeaderLinkItem[] = [
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Header: FC = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("#dashboard");
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.querySelector(link.path)
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled
          ? "glass border-white/10 dark:border-white/5 py-3"
          : "bg-transparent border-transparent py-5"
        }`}
    >
      <div className="flex container items-center justify-between mx-auto px-4">
        {/* LOGO */}
        <Link
          href="#dashboard"
          className="text-2xl md:text-3xl font-bold tracking-wide relative group"
        >
          <span className="text-black dark:text-white transition-colors">Chirag</span>
          <span className="text-indigo-600 dark:text-indigo-400 group-hover:text-purple-500 transition-colors duration-300">.</span>
          <span className="text-black dark:text-white transition-colors">Portfolio</span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center p-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            {!navbarOpen ? (
              <Bars3Icon className="h-7 w-7" />
            ) : (
              <XMarkIcon className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, index) => (
            <HeaderLink
              key={index}
              href={link.path}
              title={link.title}
              active={activeSection === link.path}
            />
          ))}

          {/* Resume Button */}
          <Link
            href="/Resume_Chirag.pdf"
            download
            className="neon-border relative overflow-hidden rounded-lg px-6 py-2.5 font-medium text-indigo-600 dark:text-white group bg-transparent hover:bg-indigo-50 dark:hover:bg-white/5 transition-all duration-300"
          >
            <span className="relative z-10 transition-colors group-hover:text-indigo-700 dark:group-hover:text-white">Resume</span>
          </Link>

          {/* Theme Toggle visible in Desktop */}
          <Theme />
        </div>
      </div>

      {/* Mobile Overlay with Theme */}
      {navbarOpen && (
        <MenuOverlay links={navLinks}>
          <div className="flex justify-center mt-6">
            <Theme />
          </div>
        </MenuOverlay>
      )}
    </nav>
  );
};

export default Header;
