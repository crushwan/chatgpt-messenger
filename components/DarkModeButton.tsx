"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <div
          onClick={() => setTheme("light")}
          className="flex items-center justify-start px-5 py-3 md:space-x-7 mb-2 
          rounded-lg hover:bg-gray-700/70 cursor-pointer transition-all duration-200 ease-out"
        >
          <SunIcon className="h-8 w-8 cursor-pointer text-[#5f5ff5]" />
          <p className="flex-1 hidden md:inline text-gray-300 text-base font-semibold">
            Light Mode
          </p>
        </div>
      ) : (
        <div
          onClick={() => setTheme("dark")}
          className="flex items-center justify-start px-5 py-3 md:space-x-7 mb-2 
        rounded-lg hover:bg-gray-700/70 cursor-pointer transition-all duration-200 ease-out"
        >
          <MoonIcon className="h-8 w-8 cursor-pointer text-[#5f5ff5]" />
          <p className="flex-1 hidden md:inline text-gray-300 text-base font-semibold">
            Dark Mode
          </p>
        </div>
      )}
    </div>
  );
}

export default DarkModeButton;
