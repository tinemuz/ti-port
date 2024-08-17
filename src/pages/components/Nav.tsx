export default function Nav() {
  return (
    <header className="flex flex-grow flex-col items-center justify-center z-[100] text-sm text-mtext">

          <div className="w-full md:max-w-[812px]">
            <div className="flex justify-end gap-12 pt-60">
              <a href="/">Featured</a>
              <a href="/writing">Writing</a>
              <a href="/projects">Side Quests</a>
            </div>
          </div>

    </header>
  );
}
