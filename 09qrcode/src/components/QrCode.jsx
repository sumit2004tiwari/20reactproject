import React, { useState } from 'react'
import QRCode from 'react-qr-code';

function QrCode() {
  const [input , setInput] = useState("");

  const handleClick = (event)=>{
    setInput(event.target.value)
   
  }
  

 
  return (
    <>
    <div className='flex justify-center items-center'>
      <h1>Qr Code Generator</h1>
      <input type="text"
      placeholder='enter input value'
      value={input}
      onChange={handleClick}
     
       />
       <button
       className='hwllo mb-12' 
       onClick={handleClick}
       value={input}>Generate</button>
    </div>
    <div>
      <QRCode
       value={input}/>
    </div>
    </>
  )
}

export default QrCode
