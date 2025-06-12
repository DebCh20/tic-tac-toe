import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='permanent-marker-regular font-semibold p-4 text-zinc-600 text-center text-5xl h-screen w-full'>
          <Homepage/>         
      </div>
    </>
  )
}

export default App
