import { useEffect, useState } from "react";

// Define the themes
const themes = {
  light: "theme-base",
  dark: "theme-dark",
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined" && window.sessionStorage) {
      // Check for saved theme in sessionStorage
      const savedTheme = sessionStorage.getItem("theme");
      if (savedTheme) return savedTheme;
    }

    // Deafult to light theme if no theme is stored ?
    return themes.light;
  });

  useEffect(() => {
    if (typeof window !== "undefined" && window.sessionStorage) {
      // Apply the current theme
      document.documentElement.classList.add(theme);

      // Clean up any other theme
      const otherTheme = theme === themes.light ? themes.dark : themes.light;
      document.documentElement.classList.remove(otherTheme);

      // Save the current theme to sessionStorage
      sessionStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    // Toggle between light and dark themes
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light,
    );
  };

  return (
    <div
      onClick={toggleTheme}
      className="size-5 cursor-pointer rounded-full bg-skin-accent transition-all
             duration-300 ease-in-out hover:scale-110"
    ></div>
  );
};

export default ThemeToggle;
