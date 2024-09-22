import ThemeToggle from "./ThemeToggle";
import NavLink from "./NavLink";

const Nav = () => {
  return (
    <nav className="flex h-[240px] flex-grow flex-col items-center justify-center text-skin-text sm:text-sm">
      <div className="h-full flex-grow"></div>

      <div className="flex w-full flex-row items-center justify-between sm:max-w-[812px]">
        <ThemeToggle />
        <NavLink />
      </div>
    </nav>
  );
};

export default Nav;
