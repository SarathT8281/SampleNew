import React, { createContext, useState } from 'react'


const newContext=createContext()
function UseContext({children}) {
    const [first, setfirst] = useState("Enjoy")
    const [name, setname] = useState({Name : "Sarath", Age :18})
    const [car, setcar] = useState([{Name :"BMW",Color :"White"},{Name :"AUDI",Color :"Black"}])


  return (
    <div>
        
        <newContext.Provider value={{first,setfirst,name,car,setname,setcar}}>
            {children}
        </newContext.Provider>
        
        </div>
  )
}

export default UseContext
export {newContext} 