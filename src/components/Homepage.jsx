import React from 'react'
import { FaArrowDown } from "react-icons/fa6"
import { motion } from "motion/react"
import { useNavigate } from "react-router";


function Homepage() {

    let navigate = useNavigate();   

    return (
        <>
            <span className='cabin-sketch-regular text-6xl font-semibold text-blue-700'>Your childhood tic-tac-toe game reimagined :)</span>
            <div className='gochi-hand-regular font-bold text-zinc-800 flex flex-col items-center justify-center p-10 gap-4'>
                <span>Click one of these options to begin the game</span>
                <motion.button onClick={()=>setTimeout(()=>navigate("/single"),200)} whileTap={{ scale: 0.8, rotate: 2 }} className='border-4 border-zinc-600 rounded-lg mt-12 p-6'>I am a lone wolf</motion.button>
                <motion.button onClick={()=>setTimeout(()=>navigate("/multi"),200)} whileTap={{ scale: 0.8, rotate: 2 }} className='border-4 border-zinc-600 rounded-lg p-6'>Lets defeat my bestie</motion.button>
            </div>
        </>
    )
}

export default Homepage