import React, { useState } from 'react'

function SpreadTask1() {
    const [first, setfirst] = useState({
        name:"iphone 13",
        color:"Blue"
    },
    
   
   
    )
    const obj={name : "Iphone 12", color : "Red"}




   const click=()=>{
    setfirst((prevob)=>{
        return{...prevob,obj

        }})}

  return (
    <div>  
        

        
        
        <h3> {first.name},{first.color}    </h3>
        

          
          <button className='bg-primary' onClick={click}>CHANGE</button>
        
        
          </div>
  )
}

export default SpreadTask1