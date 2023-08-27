import React, { useState } from 'react'
import Props2 from './Props2'

function Props() {
    const [first, setfirst] = useState([
        {no:1 , name : "Rahul"},
        {no:2 , name : "Rajesh"},
        {no:3 , name : "Rohith"}]);
  return (
    <div>
<Props2 first1={first}/>

    </div>
  )
}

export default Props