import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [str, setStr] = useState("")
  // 處理 input 的變更事件
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStr(event.target.value)
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className="flex justify-center ">
        <a href="https://vitejs.dev" target="_blank" >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card grid justify-center ">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* 綁定 input 的值和 onChange 事件 */}
        <input
          type="text"
          value={str}
          onChange={handleChange}
          placeholder="Type something..."
        />
        <span>output: {str}</span>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
