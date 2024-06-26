/* eslint-disable react/jsx-key */
import { useState } from "react"
import data from "./Data"

function Accordian() {
    const [selected , setSelected] = useState("null");
    //const [toggle , setToggle] = useState(false)

     function handleSingleSelection(getCurrentId){
      console.log("data")
               console.log(getCurrentId )
              
                 setSelected( getCurrentId == selected ? null : getCurrentId )
                //setToggle(!toggle)
    }
   
  return (
    <>
    <div>
      <h1 className="text-red-500 text-4xl bg-slate-300 rounded-lg p-2 mb-9">Accordian</h1>
    </div>
    <div className="wrapper">
        <div className="accodian">
            {
                data && data.length > 0 ?
                data.map((item)=>
                    <div className="item bg-700-black">
                        <div onClick={()=>handleSingleSelection(item.id)} className="title cursor-pointer ">
                            <h2 className="bold text-4xl text-white-700" >{item.question}</h2>
                            <span>+</span>
                        </div> 
                        {
                          selected == item.id ? <div>
                            <h2 className="text-green-500 text-3xl bg-slate-200 rounded-lg">{ item.answer}</h2>
                           </div> : null

                        }
                   </div>
                )
                : <div>No Data found</div>
               
            }
           
        </div>
    </div>
    
    </>

  )
}

export default Accordian
