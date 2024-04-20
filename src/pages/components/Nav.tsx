import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "../../util/useMediaQuery";

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 640px)");
  return (
    <header className="flex flex-wrap w-full py-5 px-6">
      <nav className="w-full flex items-center justify-between">
        <span className="flex-none size-8 bg-stone-800 rounded-full z-50"></span>

        {/* mobile menu */}
        {!matches && (
          <div
            onClick={() => setToggled((prevToggle) => !prevToggle)}
            className={`flex flex-row pl-2 py-2 cursor-pointer z-50 ${
              toggled ? "gap-5": "gap-[5px]"} ${toggled && "pointer-events-none"}`}
          >
            <motion.span
              animate={{
                width: toggled ? "16px" : "6px",
                height: toggled ? "16px" : "6px",
              }}
              className={`size-[6px] sm:size-[16px] bg-blue-700  rounded-full ${
                toggled && "size-[16px]"
              }`}
            ></motion.span>
            <motion.span
              animate={{
                width: toggled ? "16px" : "6px",
                height: toggled ? "16px" : "6px",
              }}
              className={`size-[6px] sm:size-[16px] bg-red-500  rounded-full ${
                toggled && "size-[16px]"
              }`}
            ></motion.span>
            <motion.span
              animate={{
                width: toggled ? "40px" : "6px",
                height: toggled ? "16px" : "6px",
              }}
              className={`size-[6px] sm:w-[40px] sm:h-[16px] bg-stone-800  rounded-full ${
                toggled && "w-[40px] h-[16px]"
              }`}
            ></motion.span>
          </div>
        )}

        {/* menu exit */}
        {!matches && toggled && (
          <div
            onClick={() => setToggled((prevToggle) => !prevToggle)}
            className={`absolute right-8 top-16 size-6 z-50 cursor-pointer space-y-1.5`}
          >
            <motion.span
              animate={{
                rotateZ: toggled ? 45 : 0,
                y: toggled ? 8 : 0,
                x: toggled ? -4 :0
              }}
              className="block h-0.5 w-8 bg-black"
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: toggled ? -45 : 0,
                x: toggled ? -4 :0
              }}
              className="block h-0.5 w-8 bg-black"
            ></motion.span>
          </div>
        )}

        {!matches && toggled && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 12 }}
            className="fixed flex flex-col bg-stone-200 bottom-0 left-0 w-full h-screen items-center justify-center text-center justify-between"
          >
            <div className="flex flex-col mt-[30vh] gap-[10vh]">
              <a href="/">Home</a>
              <a href="/writing">Writing</a>
              <a href="/projects">Projects</a>
            </div>
            <div className="flex flex-col mb-[5vh] gap-[1.5vh]">
              <a href="/">tine@muzunza.com</a>
              <a href="/">Resume</a>
              <a href="/">Github</a>
              <a href="/">Linkedin</a>
            </div>
          </motion.div>
        )}

        {/* main menu */}
        {matches && (
          <div
            onClick={() => setToggled((prevToggle) => !prevToggle)}
            className={`flex flex-row pl-2 py-2 gap-3 z-50 `}
          >
            <span className={`size-[16px] bg-blue-700 rounded-full`}></span>
            <span className={`size-[16px] bg-red-500 rounded-full`}></span>
            <span
              className={`w-[40px] h-[16px] bg-stone-800 rounded-full`}
            ></span>
          </div>
        )}
      </nav>
    </header>
  );
}
