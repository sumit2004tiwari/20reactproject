import { useState } from 'react'
import './App.css'
import Theme from './Components/theme'

function App() {
  const [changeTheme , setChangeTheme] = useState("light");
  const handleTheme = ()=>{ setChangeTheme((prevTheme)=>prevTheme === "light" ? "dark" :"light")
 
}

  return (
    
    <div className={`${changeTheme} h-screen overflow-y-hidden overflow-x-hidden scroll-m-1`}>
    <h1 className='text-xl border-lime-300 text-bold uppercase gap text-black-500 font-extrabold from-neutral-600 text-3xl underline'>Dark Light Theme</h1>
    <Theme onThemeChange={handleTheme}/>
    </div>
    
  )
}

export default App
