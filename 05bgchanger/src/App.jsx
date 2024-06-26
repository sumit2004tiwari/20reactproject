import { useState } from 'react'
import './App.css'
import Bgchanger from './components/Bgchanger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Bgchanger/>
    </>
   
  )
}

export default App
