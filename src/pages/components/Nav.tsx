import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "../../util/useMediaQuery";

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 768px)");
  return (
    <header className="fixed z-[100] flex w-full flex-wrap">
      <div className="absolute w-full flex left- z-5 pointer-events-none h-24">
        <div className="absolute w-full mask1 h-full"></div>
        <div className="absolute w-full mask2 h-full"></div>
        <div className="absolute w-full mask3 h-full"></div>
        <div className="absolute w-full mask4 top-[-10px] h-full"></div>
      </div>
      <nav className="flex w-full items-center justify-between px-6 py-5">
        
        <span className="z-[100] size-8 flex-none rounded-full bg-stone-800"></span>

        {/* mobile menu dot icons*/}
        {!matches && (
          <div
            onClick={() => setToggled((prevToggle) => !prevToggle)}
            className={`z-[100] flex cursor-pointer flex-row py-2 pl-2 ${
              toggled ? "gap-5" : "gap-[5px]"
            } ${toggled && "pointer-events-none"}`}
          >
            <motion.span
              animate={{
                width: toggled ? "16px" : "6px",
                height: toggled ? "16px" : "6px",
              }}
              className={`size-[6px] rounded-full bg-blue-700  md:size-[16px] ${
                toggled && "size-[16px]"
              }`}
            ></motion.span>
            <motion.span
              animate={{
                width: toggled ? "16px" : "6px",
                height: toggled ? "16px" : "6px",
              }}
              className={`size-[6px] rounded-full bg-red-500  md:size-[16px] ${
                toggled && "size-[16px]"
              }`}
            ></motion.span>
            <motion.span
              animate={{
                width: toggled ? "40px" : "6px",
                height: toggled ? "16px" : "6px",
              }}
              className={`size-[6px] rounded-full bg-stone-800 md:h-[16px]  md:w-[40px] ${
                toggled && "h-[16px] w-[40px]"
              }`}
            ></motion.span>
          </div>
        )}

        {/* menu exit */}
        {!matches && toggled && (
          <div
            onClick={() => setToggled((prevToggle) => !prevToggle)}
            className={`fixed right-8 top-16 z-[100] size-6 cursor-pointer space-y-1.5`}
          >
            <motion.span
              animate={{
                rotateZ: toggled ? 45 : 0,
                y: toggled ? 8 : 0,
                x: toggled ? -4 : 0,
              }}
              className="block h-0.5 w-8 bg-black"
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: toggled ? -45 : 0,
                x: toggled ? -4 : 0,
              }}
              className="block h-0.5 w-8 bg-black"
            ></motion.span>
          </div>
        )}

        {!matches && toggled && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 12 }}
            className="fixed bottom-0 left-0 z-50 flex h-screen w-full flex-col items-center justify-between bg-stone-200 text-center"
          >
            <div className="mt-[28vh] flex flex-col gap-[10vh]">
              <a href="/">Home</a>
              <a href="/writing">Writing</a>
              <a href="/projects">Projects</a>
            </div>
            <div className="mb-[5vh] flex flex-col gap-[1.5vh]">
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
            className={`z-50 flex flex-row gap-3 py-2 pl-2 `}
          >
            <span className={`size-[16px] rounded-full bg-blue-700`}></span>
            <span className={`size-[16px] rounded-full bg-red-500`}></span>
            <span
              className={`h-[16px] w-[40px] rounded-full bg-stone-800`}
            ></span>
          </div>
        )}
      </nav>
    </header>
  );
}
