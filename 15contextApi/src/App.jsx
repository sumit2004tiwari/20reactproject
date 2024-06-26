import { useState  , createContext} from 'react'
import './App.css'
import Home from './Components/Home'
import Abou from './Components/Abou'
import Contact from './Components/Contact'
import Login from './Components/Login'
function App() {
 

  return (
  <>
    <Home/>
    <Abou/>
    <Contact/>
    <Login />
    </> 
  )
}

export default App
