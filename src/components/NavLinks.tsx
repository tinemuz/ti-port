const NavLinks = () => {
  const activeLink = window.location.pathname;

  return (
    <div className="flex gap-8">
      <a
        href="/"
        className={`hover:text-skin-text-sub ${activeLink === "/" ? "text-skin-text/100 font-semibold" : ""}`}
      >
        featured
      </a>
      <a
        href="/posts"
        className={`hover:text-skin-text-sub ${activeLink.includes("/posts") ? "text-skin-text/100 font-semibold" : ""}`}
      >
        posts
      </a>
    </div>
  );
};

export default NavLinks;
