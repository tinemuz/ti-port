export default function Nav() {
  return (
    <nav className="flex h-[240px] flex-grow flex-col items-center justify-center md:text-sm text-mtext">
      <div className="h-full flex-grow"></div>

      <div className="w-full flex flex-row justify-between md:max-w-[812px] items-center">
        <div className="size-5 rounded-full bg-mred"></div>

        <div className="flex gap-8">
          <a href="/">Featured</a>
          <a href="/writing">Writing</a>
          <a href="/tags">Tags</a>
        </div>
      </div>
    </nav>
  );
}
