import React, { useState } from 'react'

function Task4() {
    const [first, setfirst] = useState(0)
    if(first>=0){
   
    }
  return (
    <div>
   <h1>The Number is {first}</h1>
   <button onClick={()=>setfirst(first+1)}>+</button>
    <button onClick={()=>setfirst(first-1)}>-</button>
    
   
   




    </div>
  )
}

export default Task4