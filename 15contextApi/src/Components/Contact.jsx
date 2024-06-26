import React, { useContext } from 'react'
import { UserContext } from '../context/MyContext'

function Contact() {
    const {handleClick,count}=useContext(UserContext)
  return (
    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
  )
}

export default Contact
