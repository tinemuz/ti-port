//import avatar from "/avatar.png"
import { motion } from 'framer-motion'
import { useState } from "react"

export default function Nav() {
    const [toggled, setToggled] = useState(false)
    return (
        <header className='flex flex-wrap w-full py-4 px-4'>
            <nav className='w-full mx-auto flex items-center justify-between'>
                <span className='flex-none w-[25px] h-[25px] bg-stone-800 rounded-full'></span>
                <div className='flex flex-row items-center gap-3 mt-0 ps-5'>
                    <span className='right-20 w-[16px] h-[16px] bg-blue-700 rounded-full'></span>
                    <span className='right-12 w-[16px] h-[16px] bg-red-500 rounded-full'></span>
                    <span className='right-0 w-[40px] h-[16px] bg-stone-800 rounded-full'></span>
                </div>

            </nav>
        </header>

    )
}