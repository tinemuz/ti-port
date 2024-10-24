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
        href="/words"
        className={`hover:text-skin-text-sub ${activeLink.includes("/words") ? "font-bold text-skin-text/100" : ""}`}
      >
        words
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
