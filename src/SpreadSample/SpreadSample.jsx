import React, { useState } from 'react'

function SpreadSample() {
    const [car, setcar] = useState({
       name:"BMW",
       color:"NEXA BLUE"


    })
    const Change=()=>{
        setcar((prevobj)=>{
            return{...prevobj,color:"DELTA BLUE"}
        })
    }
  return (
    <div>
       <h1>MY CAR IS {car.name}, {car.color} IN COLOR </h1>
       <button className='bg-primary' onClick={Change}>CHANGE</button>
        
        
        </div>
  )
}

export default SpreadSample