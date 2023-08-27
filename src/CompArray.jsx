import React, { useState } from 'react'

function CompArray() {
    const [first, setfirst] = useState([{id : 1 , Name : "Sarath"},{id : 2 , Name : "Sajid"}])

    
    
  return ( 
    first.map((display)=>
    <div>
     <h1> {display.Name} </h1>

    </div>
    )
  )
}

export default CompArray