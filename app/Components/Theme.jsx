"use client";
import { useEffect, useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.theme) {
      document.documentElement.classList.add(localStorage.theme);
      setTheme(localStorage.theme);
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === "dark"}
          value=""
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-black dark:bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-black dark:text-white">
          Theme
        </span>
      </label>
    </>
  );
};

export default Theme;
