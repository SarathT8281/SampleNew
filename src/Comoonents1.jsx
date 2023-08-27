import React, { useState } from 'react'

function Comoonents1() {
    const [first, setfirst] = useState("Sarath")
  return (
    <div>
        
         <h1> My name is {first} </h1>  
    <button onClick={()=>setfirst("Sajid")}>Button</button>
    
    
    
    </div>
  )
}

export default Comoonents1