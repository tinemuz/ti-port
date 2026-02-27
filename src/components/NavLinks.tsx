const NavLinks = () => {
  const activeLink = window.location.pathname;

  return (
    <div className="flex gap-8">
      <a
        href="/"
        className={`hover:text-skin-text-sub ${activeLink === "/" ? "text-skin-text/100 font-bold" : ""}`}
      >
        featured
      </a>
      <a
        href="/posts"
        className={`hover:text-skin-text-sub ${activeLink.includes("/posts") ? "text-skin-text/100 font-bold" : ""}`}
      >
        posts
      </a>
      <a
        href="/tags"
        className={`hover:text-skin-text-sub ${activeLink.includes("/tags") ? "text-skin-text/100 font-bold" : ""}`}
      >
        tags
      </a>
    </div>
  );
};

export default NavLinks;
