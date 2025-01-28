import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {

  const [count,setCount] = useState(0);

  function decreaseHandler(){
    setCount(count-1)
  }

  function increaseHandler(){
    setCount(count+1)
  }

  function resetHandler(){
    setCount(0)
  }

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center flex-col bg-[#344151] gap-10'>
      <div className='text-2xl text-[#0398d4] font-sans font-semibold'>Increment && Decrement</div>
      <div className='flex justify-evenly items-center bg-gray-300 gap-5 rounded-sm'>
        <button onClick={decreaseHandler} className='cursor-pointer text-4xl text-center border-2 w-20 border-[#bfbfbf]'>
          -
        </button>
        <div className='text-4xl font-semibold text-center w-20'>
          {count}
        </div>
        <button onClick={increaseHandler} className='cursor-pointer text-4xl text-center border-2 w-20 border-[#bfbfbf]'>
          +
        </button>
      </div>
      <button onClick={resetHandler} className='cursor-pointer text-white font-sans bg-[#0398d4] text-lg px-4 rounded-sm'>
        Reset
      </button>
    </div>
  );
}

export default App
