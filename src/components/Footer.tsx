import { BSTTimeDisplay, LocalTimeDisplay } from "./TimeDisplay";

export default function Footer() {
  return (
    <footer className=" flex h-[320px] justify-center pb-4 pt-10 md:h-[220px]">
      <div className=" flex w-full flex-col border-t border-t-mgray pt-10 text-xs md:max-w-[812px]">
        <div className="grid w-full grid-cols-2 gap-y-5 md:grid-cols-3">
          <div className="flex flex-col items-start space-y-2">
            <a href="mailto:tine@muzunza.com">tine@muzunza.com</a>
            <a
              href="https://www.linkedin.com/in/tinetariro-muzunzandare"
              target="_blank"
            >
              Linkedin
            </a>
            <a href="https://www.instagram.com/ti.drw/" target="_blank">
              Instagram
            </a>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <a href="/">Featured</a>
            <a href="/writing">Writing</a>
            <a href="/tags">Tags</a>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <a href="https://github.com/tinemuz" target="_blank">
              GitHub
            </a>
            <BSTTimeDisplay/>
            <LocalTimeDisplay />
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
