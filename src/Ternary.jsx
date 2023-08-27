import React, { useState } from 'react'
import TernarySample from './TernarySample'


function Ternary() {
    const [hide, sethide] = useState(false)
    const click=()=>{
        sethide ((display)=> ! display)
    }
  return (
    <div>
   {hide ?<TernarySample/>:""}
   <button onClick={click}>{hide? "Hide":"Show"}</button>


    </div>
  )
}

export default Ternary