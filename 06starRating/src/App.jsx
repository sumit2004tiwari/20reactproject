import { useState } from 'react'
import './App.css'
import StarRating from './components/StarRating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-5xl text-green-700 underline flex justify-center mt-10'> Rating to a Product</h1>
    <StarRating noOfStar={10} />
    
    </>
  )
}

export default App
