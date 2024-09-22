import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  return (
    <nav className="flex h-[240px] flex-grow flex-col items-center justify-center text-skin-text sm:text-sm">
      <div className="h-full flex-grow"></div>

      <div className="flex w-full flex-row items-center justify-between sm:max-w-[812px]">
        <ThemeToggle />
        <div className="flex gap-8">
          <a href="/" className="hover:text-skin-text-sub">
            Featured
          </a>
          <a href="/writing" className="hover:text-skin-text-sub">
            Writing
          </a>
          <a href="/tags" className="hover:text-skin-text-sub">
            Tags
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
