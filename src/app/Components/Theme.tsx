"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

const Theme: FC = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Ensure component only renders theme after mounting on client
  useEffect(() => {
    setMounted(true);

    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(systemDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // prevent hydration mismatch: don't render until mounted
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-3 border border-none rounded-full bg-[#b9b9b114] hover:bg-[#85857814] dark:hover:bg-[#383030]"
      aria-label="Toggle Theme"
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <Image
        src={theme === "dark" ? "/images/light.svg" : "/images/dark.svg"}
        alt="Theme Icon"
        width={35}
        height={35}
        style={{
          filter:
            theme === "dark"
              ? "invert(1) sepia(1) saturate(10) hue-rotate(180deg)"
              : "none",
        }}
        priority
      />
    </button>
  );
};

export default Theme;
