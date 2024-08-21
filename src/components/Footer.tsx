export default function Footer() {
  return (
    <footer className=" flex h-[270px] justify-center pb-4 pt-12 md:h-[220px]">
      <div className=" flex w-full flex-col border-t border-t-mgray pt-6 text-xs md:max-w-[812px]">
        <div className="grid w-full grid-cols-2 gap-y-5 md:grid-cols-3">
          <div className="flex flex-col items-start space-y-1">
            <a href="mailto:tine@muzunza.com">tine@muzunza.com</a>
            <a href="https://www.linkedin.com">Linkedin</a>
            <a href="https://www.instagram.com">Instagram</a>
          </div>
          <div className="flex flex-col items-start space-y-1">
            <a href="/">Featured</a>
            <a href="/writing">Writing</a>
            <a href="/projects">Side Quests</a>
          </div>
          <div className="flex flex-col items-start space-y-1">
            <a href="https://github.com">GitHub</a>
            <div>UK . 2024</div>
            <div>18:55 BST - 19:55 WAN</div>
          </div>
        </div>
        <div className="h-full"></div>
        <p className="pt-4 text-left text-xs">
          © MMXXIV TINETARIRO MUZUNZANDARE
        </p>
      </div>
    </footer>
  );
}
