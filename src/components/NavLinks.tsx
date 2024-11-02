const NavLinks = () => {
  const activeLink = window.location.pathname;

  return (
    <div className="flex gap-8">
      <a
        href="/"
        className={`hover:text-skin-text-sub ${activeLink === "/" ? "font-bold text-skin-text/100" : ""}`}
      >
        featured
      </a>
      <a
        href="/posts"
        className={`hover:text-skin-text-sub ${activeLink.includes("/posts") ? "font-bold text-skin-text/100" : ""}`}
      >
        posts
      </a>
      <a
        href="/tags"
        className={`hover:text-skin-text-sub ${activeLink.includes("/tags") ? "font-bold text-skin-text/100" : ""}`}
      >
        tags
      </a>
    </div>
  );
};

export default NavLinks;
