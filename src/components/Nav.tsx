import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  const activeLink = window.location.pathname;

  return (
    <nav className="flex h-[240px] flex-grow flex-col items-center justify-center text-skin-text/65 sm:text-sm">
      <div className="h-full flex-grow"></div>

      <div className="flex w-full flex-row items-center justify-between sm:max-w-[812px]">
        <ThemeToggle />
        <div className="flex gap-8">
          <a
            href="/"
            className={`hover:text-skin-text-sub ${activeLink === "/" ? "font-bold text-skin-text/100" : ""}`}
          >
            Featured
          </a>
          <a
            href="/writing"
            className={`hover:text-skin-text-sub ${activeLink.includes("/writing") ? "font-bold text-skin-text/100" : ""}`}
          >
            Writing
          </a>
          <a
            href="/tags"
            className={`hover:text-skin-text-sub ${activeLink.includes("/tags") ? "font-bold text-skin-text/100" : ""}`}
          >
            Tags
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
