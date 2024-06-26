import { useState } from 'react'
import './App.css'
import ScrollIndicator from './components/ScrollIndicator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ScrollIndicator/>
    </>
  )
}

export default App
