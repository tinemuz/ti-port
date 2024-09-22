import { useState, type SetStateAction } from "react";
import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  const handleClick = (link: SetStateAction<string>) => {
    setActiveLink(link);
  };

  return (
    <nav className="flex h-[240px] flex-grow flex-col items-center justify-center text-skin-text sm:text-sm">
      <div className="h-full flex-grow"></div>

      <div className="flex w-full flex-row items-center justify-between sm:max-w-[812px]">
        <ThemeToggle />
        <div className="flex gap-8">
          <a
            href="/"
            onClick={() => handleClick("/")}
            className={`hover:text-skin-text-sub ${activeLink === "/" ? "font-bold" : ""}`}
          >
            Featured
          </a>
          <a
            href="/writing"
            onClick={() => handleClick("/writing")}
            className={`hover:text-skin-text-sub ${activeLink === "/writing" ? "font-bold" : ""}`}
          >
            Writing
          </a>
          <a
            href="/tags"
            onClick={() => handleClick("/tags")}
            className={`hover:text-skin-text-sub ${activeLink === "/tags" ? "font-bold" : ""}`}
          >
            Tags
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
