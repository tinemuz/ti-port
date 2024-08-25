// src/components/ThemeToggle.jsx

import React, { useEffect } from "react";

// Define the list of themes
const themes = [
  "theme-base",
  "theme-darkstar",
  "theme-oceanic",
  "theme-sunset-glow",
  "theme-forest-mist",
  "theme-solar-flare",
  "theme-arctic-chill",
];

const ThemeToggle = () => {
  useEffect(() => {
    // Get the saved theme or default to the first theme in the list
    const savedTheme = localStorage.getItem("theme") || themes[0];
    document.documentElement.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    // Get the current theme from the class list
    const currentTheme = themes.find((theme) =>
      document.documentElement.classList.contains(theme),
    );

    // Remove the current theme if found
    if (currentTheme) {
      document.documentElement.classList.remove(currentTheme);
    }

    // Find the next theme
    const currentIndex = currentTheme ? themes.indexOf(currentTheme) : -1;
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];

    // Apply the next theme
    document.documentElement.classList.add(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <div
      onClick={toggleTheme}
      className="size-5 cursor-pointer rounded-full bg-skin-acent   transition-all
             duration-300 ease-in-out hover:scale-110"
    ></div>
  );
};

export default ThemeToggle;
