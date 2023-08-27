import React, { useEffect, useState } from 'react'

function Useeffect2() {

    const [first, setfirst] = useState("nice")
    useEffect(() => {
        alert ("hello");
    },[first])
      
    
     
    
  return (
    <div> <h1>{first}</h1>
         <button onClick={()=>setfirst("hope")}>Click</button>
    </div>
   
  )
}

export default Useeffect2