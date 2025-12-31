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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "backdrop-blur-lg bg-white/70 dark:bg-[#1b1b1b]/70 shadow-md border-b border-gray-200 dark:border-gray-800"
        : "bg-transparent"
        }`}
    >
      <div className="flex container items-center justify-between mx-auto px-4 lg:py-4 py-2">

        {/* LOGO */}
        <Link
          href="#dashboard"
          className="text-2xl md:text-3xl text-black dark:text-white font-bold tracking-wide"
        >
          Chirag<span className="text-indigo-600 dark:text-indigo-400">.</span>Portfolio
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center p-2 text-gray-700 dark:text-gray-300"
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
            className="rounded-lg border border-indigo-600 px-4 py-2 font-medium text-indigo-600 dark:text-white dark:border-white hover:bg-indigo-600 hover:text-white transition-all"
          >
            Resume
          </Link>

          {/* Theme Toggle */}
          <Theme />
        </div>
      </div>

      {/* Mobile Overlay */}
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Header;
