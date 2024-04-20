import { motion } from "framer-motion";
import { useState } from "react";

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  return (
    <header className="flex flex-wrap w-full py-5 px-6">
      <nav className="w-full flex items-center justify-between">
        <span className="flex-none size-8 bg-stone-800 rounded-full"></span>
        <div
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className={`flex flex-row gap-[5px] pl-2 py-2 cursor-pointer sm:gap-3  sm:pointer-events-none z-50 ${toggled && 'gap-3'}`}
        >
          <span className={`size-[6px] sm:size-[16px] bg-blue-700  rounded-full ${toggled && 'size-[16px]'}`}></span>
          <span className={`size-[6px] sm:size-[16px] bg-red-500  rounded-full ${toggled && 'size-[16px]'}`}></span>
          <span className={`size-[6px] sm:w-[40px] sm:h-[16px] bg-stone-800  rounded-full ${toggled && 'w-[40px] h-[16px]'}`}></span>
        </div>
        {toggled && (
          <div className="fixed flex bg-stone-200 bottom-0 left-0 w-full h-screen items-center justify-center">
            <div className="flex flex-col gap-12">
              <a href="/">Home</a>
              <a href="/writing">Writing</a>
              <a href="/projects">Projects</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
