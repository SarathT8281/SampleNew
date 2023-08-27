import React, { useState } from 'react'
import Task11Ternary from './Task11Ternary'

function Task11() {
  const [hide, sethide] = useState(false)
    const click=()=>{
        sethide ((display)=> ! display)}
  return (
    <div>{hide ?<Task11Ternary/>:""}
    <button onClick={click}>{hide? "Hide":"Show"}</button>
 </div>
  )
}

export default Task11