import { useEffect, useState } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (window) {
      setIsActive(window.location.pathname === href);
    }
  }, [href]);

  return (
    <a
      href={isActive ? undefined : href}
      className={`hover:text-skin-text-sub ${isActive ? "cursor-default font-bold" : ""}`}
    >
      {children}
    </a>
  );
};

export default NavLink;
