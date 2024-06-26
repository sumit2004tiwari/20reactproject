import { useState } from 'react'
import './App.css'
import QrCode from './components/QrCode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <QrCode/>
    </>
  )
}

export default App
