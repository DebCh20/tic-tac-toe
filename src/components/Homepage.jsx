import React from 'react'
import { FaArrowDown } from "react-icons/fa6"
import { motion } from "motion/react"
import { useNavigate } from "react-router";


function Homepage() {

    let navigate = useNavigate();   

    return (
        <>
            Your childhood tic-tac-toe game reimagined :)
            <div className='handjet-sps flex flex-col items-center justify-center p-10 gap-4'>
                <span>Click one of these options to begin the game</span>
                <motion.button onClick={()=>setTimeout(()=>navigate("/single"),200)} whileTap={{ scale: 0.8, rotate: 2 }} className='border-4 border-zinc-600 rounded-lg mt-12 p-6'>I am a lone wolf</motion.button>
                <motion.button whileTap={{ scale: 0.8, rotate: 2 }} className='border-4 border-zinc-600 rounded-lg p-6'>Lets defeat my bestie</motion.button>
            </div>
        </>
    )
}

export default Homepage