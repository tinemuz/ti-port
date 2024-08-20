export default function Nav() {
  return (
    <nav className="flex h-[240px] flex-grow flex-col items-center justify-center md:text-sm text-mtext">
      <div className="h-full flex-grow"></div>

      <div className="w-full flex flex-row justify-between md:max-w-[812px] items-center">
        <div className="size-5 rounded-full bg-mred"></div>

        <div className="flex gap-6">
          <a href="/">Featured</a>
          <a href="/writing">Writing</a>
          <a href="/projects">Side Quests</a>
        </div>
      </div>
    </nav>
  );
}
