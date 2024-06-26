import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchAutomation from './components/SearchAutomation'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <SearchAutomation/>
   </>
  )
}

export default App
