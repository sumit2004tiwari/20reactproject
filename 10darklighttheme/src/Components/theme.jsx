import React, { useState } from 'react'
import "./style.css"

function Theme({onThemeChange}) {
   


  return (
   <>
   <button
   onClick={onThemeChange}
   className='dark light bg-red-500'
   >
    Change theme
   </button>
   </>
  )
}

export default Theme
