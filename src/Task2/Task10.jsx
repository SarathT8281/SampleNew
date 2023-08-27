import React, { useState } from 'react'
import './Task10.css'
function Task10() {
    const [first, setfirst] = useState("")
    const [color, setcolor] = useState("black")
    function Green (){
      setcolor ("green");
    }
    function Red (){
      setcolor ("red");
    }
    function Blue (){
      setcolor ("blue");
    }
    function Yellow (){
      setcolor ("yellow");
    }


  return (
    <div>
        
         <h1 style={{color:color, fontFamily:'cursive' }} > <b> The Color is   {first} </b></h1> 
    <button  className='btn1' onClick={()=>{setfirst("Green");Green()}}> Green</button>
    <button className='btn2' onClick={()=>{setfirst("Red");Red()}}> Red</button>
    <button className='btn3' onClick={()=>{setfirst("Blue");Blue()}}> Blue</button>
    <button className='btn4' onClick={()=>{setfirst("Yellow");Yellow()}}> Yellow</button>

   
    
    
    
    </div>
  )
}

export default Task10