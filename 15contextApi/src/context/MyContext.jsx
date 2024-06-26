import React, { createContext, useState } from 'react'


export  const UserContext = createContext();
function MyContext({children}) {
    const [count , setCount] = useState(1)

    const handleClick = ()=>{ setCount(count + 1);}
    console.log(count)
  return (
    <UserContext.Provider value={{handleClick , count}}>
      {children}
    </UserContext.Provider>
  )
}

export default MyContext
