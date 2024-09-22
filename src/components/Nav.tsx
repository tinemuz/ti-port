import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  const currentPath = window.location.pathname;
  
  return (
    <nav className="flex h-[240px] flex-grow flex-col items-center justify-center text-skin-text sm:text-sm">
      <div className="h-full flex-grow"></div>

      <div className="flex w-full flex-row items-center justify-between sm:max-w-[812px]">
        <ThemeToggle />
        <div className="flex gap-8">
          <a
            href="/"
            className={`hover:text-skin-text-sub ${currentPath === "/" ? "font-bold" : ""}`}
          >
            Featured
          </a>
          <a
            href="/writing"
            className={`hover:text-skin-text-sub ${currentPath === "/writing" ? "font-bold" : ""}`}
          >
            Writing
          </a>
          <a
            href="/tags"
            className={`hover:text-skin-text-sub ${currentPath === "/tags" ? "font-bold" : ""}`}
          >
            Tags
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
