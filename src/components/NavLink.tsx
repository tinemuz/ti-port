import React from "react";

const NavLink: React.FC = () => {
  
  const links = [
    { path: "/", label: "Featured" },
    { path: "/writing", label: "Writing" },
    { path: "/tags", label: "Tags" },
  ];

  return (
    <div className="flex gap-8">
      {links.map((link) => (
        <span key={link.path}>
          {location.pathname === link.path ? (
            <span className="cursor-default font-bold">{link.label}</span>
          ) : (
            <a href={link.path} className="hover:text-skin-text-sub">
              {link.label}
            </a>
          )}
        </span>
      ))}
    </div>
  );
};

export default NavLink;
