export default function Footer() {
  return (
    <footer className=" flex h-[300px] md:h-[220px] justify-center pb-4 pt-12">
      <div className=" flex w-full flex-col border-t border-t-mgray pt-6 text-xs md:max-w-[812px]">
        <div className="grid h-full w-full grid-cols-2 md:grid-cols-3 gap-y-8">
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
        <p className="pt-4 text-left text-xs">
          © MMXXIV TINETARIRO MUZUNZANDARE
        </p>
      </div>
    </footer>
  );
}
