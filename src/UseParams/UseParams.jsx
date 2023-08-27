import React from 'react'
import { useParams } from 'react-router-dom'

function UseParams() {
    const {username} = useParams();



  return (
    <div>
        
   <h1>User Profile</h1>
   <h2>Usename : {username} </h2>
        
        
        </div>
  )
}

export default UseParams