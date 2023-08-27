import React, { useState } from 'react'

function SpreadTest() {
    const [mobile, setColor] = useState({mobile:"Iphone 13",color:"Blue"})
    const onChange=()=>{
       setColor((obj)=>{
        return{...obj,mobile:"Iphone 14",color:"Red"}
       })
    }
  return (
    <div>
        <h1>My Phone Is {mobile.mobile}   , {mobile.color} Varient</h1>
        <button onClick={onChange} >Change</button>



    </div>
  )
}

export default SpreadTest