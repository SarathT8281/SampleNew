import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

function DummyapiBrw() {
    const [first, setfirst] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products/').then((display)=>{
            setfirst(display.data.products)
        })
            // console.log(display);
        }),[]
 
    
  return (
    
    <div>

        {first.map((display)=>(
            <h1>{display.title}</h1>
        ))}
    </div>
  )
}

export default DummyapiBrw