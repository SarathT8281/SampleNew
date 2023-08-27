import axios from 'axios'
import React, { useState } from 'react'

function ReactConnect() {
    const [name, setname] = useState("")
    const [contact, setcontact] = useState("")

    const handleName =(event)=>{
        setname(event.target.value)
    }
    const handleContact= (event)=>{
        setcontact(event.target.value)
    }
    const handleSubmit=async (event) => {
        event.preventDefault();
        const display=await axios.post('http://localhost:5010/trial',{name,contact})
        console.log(display.data);
        localStorage.setItem('userinfo',JSON.stringify(display.data))
        console.log("Name :",name);
        console.log("Contact :",contact);
        
    }

  return (
    <div>
      <form action="">
     <label htmlFor="">Name</label>
    <input type="text" value={name}  placeholder='Enter your name' onClick={handleName} />
    <label htmlFor="">Contact</label>
    <input type="number" placeholder='Enter contact number' onClick={handleContact} />

    <button onClick={handleSubmit}>Submit</button>

    


    </form>
    </div>
  )
}

export default ReactConnect