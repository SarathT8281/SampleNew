import React, { useState } from 'react'

function Components2() {
    const [obj, setobj] = useState({id : 1, Name : "Sarath"})
  return (
    <div>
        
        <h1> {obj.id} {obj.Name} </h1>
        
        </div>
  )
}

export default Components2