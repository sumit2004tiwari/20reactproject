import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10);

  function add(){
   if(count == 20){
    console.log("can not up more than 20");

   }else{
    setCount(count +2)
   }
  }
  function remove(){
    if(count ==0){
      console.log("reach the limit")
    }else{
      setCount(count -2)
    }
  }

  return (
    <>
      <h1>My Counter : {count}</h1>
      <button onClick={add}>increase</button>
      <button onClick={remove}>decrease</button>

    </>
  )
}

export default App
