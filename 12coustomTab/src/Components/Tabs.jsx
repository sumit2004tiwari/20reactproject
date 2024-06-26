import React, { useState } from "react";

function Tabs({ pet }) {
  const [currentTab , setCurrrentTab] = useState(0)

  const handleOnClick = (getIndex)=>{
  
    setCurrrentTab(getIndex)
   
  }
  
  return (
    <>
      <div className="wrapper">
        <div className="heading flex justify-between bg-slate-300 p-1 rounded-sm">
          {
            pet.map((item, index)=> <div key={item.label} onClick={()=>handleOnClick(index)} className="hover:bg-slate-600 hover:text-white rounded-lg p-3 cursor-pointer"> 
             <span className="label">{item.label}</span>
            </div>)
          }
        </div>
        <div className="content">
                {
                  true && pet[currentTab].content
                }
        </div>
      </div>
    </>
  );
}

export default Tabs;
