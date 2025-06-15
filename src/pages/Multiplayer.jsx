import React, { useEffect, useRef } from 'react'
import { motion } from "motion/react"
import { useState } from 'react'
import socket from '../socket/Socket';

function Multiplayer() {

    let [gameState, setGameState] = useState([]);
      let [showMark, setShowMark] = useState('X');
      let [player1, setPlayer1] = useState(0);
      let [player2, setPlayer2] = useState(0);
      let [count, setCount] = useState(0);
      let [aiResposnse, setAiResposnse] = useState();
    
    useEffect(()=>{
      socket.on('move',(data)=>{
        console.log('data received at client mark',data.showMark);
        console.log('data received at client state',data.gameState);    
      })
    })  

    useEffect(()=>{
      socket.emit('move', {'gameState': gameState, 'showMark':showMark})
    },[gameState, showMark])  

     function setTheMark(id)
     {
      setGameState((prevState) => ({
        ...prevState,
        [id]: showMark == 'X' ? 'X' : 'O'
      }))
      setShowMark((prev)=>prev == 'X' ? 'O' : 'X')
     } 
    
  
  return (
    <div className='flex flex-col items-center gap-2'>
      <h4 className='handjet-sps text-4xl text-center'>You know how to play, don't you ??</h4>
      <h2 className='handjet-sps text-4xl text-center'>Scores:</h2>
      <h2 className='black-ops-one-regular text-3xl p-2 text-center'>Player1:- 0 Player2:- 0</h2>
      <div className='h-[50vh] mt-3 mb-3 w-[40vw] flex flex-wrap'>
        <div className='h-1/3 w-1/3 border-r-2 border-b-2 border-blue-400'><motion.div id='0'  
          onClick={(e) => {
            setTheMark(e.target.id)
          }}
          whileTap={{ scale: 0.8, rotate: 2 }}
          className='permanent-marker-regular h-full w-full font-bold text-8xl flex justify-center items-center'>{gameState[0]}</motion.div></div>

        <div className='h-1/3 w-1/3 border-r-2 border-l-2 border-blue-400'><motion.div id='1'   onClick={(e) => setTheMark(e.target.id)} whileTap={{ scale: 0.8, rotate: 2 }}
          className='permanent-marker-regular h-full w-full font-bold text-8xl flex justify-center items-center'>{gameState[1]}</motion.div></div>

        <div className='h-1/3 w-1/3 border-l-2 border-b-2 border-blue-400'><motion.div id='2'   onClick={(e) => setTheMark(e.target.id)} whileTap={{ scale: 0.8, rotate: 2 }}
          className='permanent-marker-regular h-full w-full font-bold text-8xl flex justify-center items-center'>{gameState[2]}</motion.div></div>

        <div className='h-1/3 w-1/3 border-t-2 border-b-2 border-r-2 border-blue-400'><motion.div id='3'   onClick={(e) => setTheMark(e.target.id)} whileTap={{ scale: 0.8, rotate: 2 }}
          className='permanent-marker-regular h-full w-full font-bold text-8xl flex justify-center items-center'>{gameState[3]}</motion.div></div>

        <div className='h-1/3 w-1/3 border-2 border-blue-400'><motion.div id='4'   onClick={(e) => setTheMark(e.target.id)} whileTap={{ scale: 0.8, rotate: 2 }}
          className='permanent-marker-regular h-full w-full font-bold text-8xl flex justify-center items-center'>{gameState[4]}</motion.div></div>

        <div className='h-1/3 w-1/3 border-t-2 border-b-2 border-l-2 border-blue-400'><motion.div id='5'   onClick={(e) => setTheMark(e.target.id)} whileTap={{ scale: 0.8, rotate: 2 }}
          className='permanent-marker-regular h-full w-full font-bold text-8xl flex justify-center items-center'>{gameState[5]}</motion.div></div>

        <div className='h-1/3 w-1/3 border-r-2 border-t-2 border-blue-400'><motion.div id='6'   onClick={(e) => setTheMark(e.target.id)} whileTap={{ scale: 0.8, rotate: 2 }}
          className='permanent-marker-regular h-full w-full font-bold text-8xl flex justify-center items-center'>{gameState[6]}</motion.div></div>

        <div className='h-1/3 w-1/3 border-r-2 border-l-2 border-blue-400'><motion.div id='7'   onClick={(e) => setTheMark(e.target.id)} whileTap={{ scale: 0.8, rotate: 2 }}
          className='permanent-marker-regular h-full w-full font-bold text-8xl flex justify-center items-center'>{gameState[7]}</motion.div></div>

        <div className='h-1/3 w-1/3 border-t-2 border-l-2 border-blue-400'><motion.div id='8'   onClick={(e) => setTheMark(e.target.id)} whileTap={{ scale: 0.8, rotate: 2 }}
          className='permanent-marker-regular h-full w-full font-bold text-8xl flex justify-center items-center'>{gameState[8]}</motion.div></div>
      </div>
      <motion.button whileTap={{ scale: 0.8, rotate: 2 }}
        onClick={() => {
          setGameState([]); setShowMark(1); console.log("game reset");
        }}
        className='permanent-marker-regular text-blue-500 w-1/5 border-4 border-zinc-600 rounded-lg mt-4 mb-3 p-3'>Let's play again</motion.button>
    </div>
  )
}

export default Multiplayer