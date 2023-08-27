import React from 'react'
import axios, {} from 'axios'

function Dummyapi() {
    axios.get('https://dummyjson.com/products/').then((display)=>{
        console.log(display);
    })
    
  return (
    <div>Dummyapi</div>
  )
}

export default Dummyapi