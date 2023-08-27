import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"


function RegisterForm() {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [address, setaddress] = useState("")
    const [phone, setphone] = useState("")

    const handleFirstname = (event)=>{
        setfirstname (event.target.value);
    };

    const handleSecondname = (event)=>{
        setlastname (event.target.value);
    };

    const handleaddres = (event)=>{
        setaddress (event.target.value);

    };

    const handlephone = (event)=>{
        setphone (event.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("First Name :", firstname );
        console.log("Last Name :", lastname);
        console.log("Address :", address);
        console.log('Phone :',phone);
        
        const display=await axios.post('http://localhost:5010/page',{firstname,lastname,address,phone})
        console.log(display.data);
        localStorage.setItem('userinfo',JSON.stringify(display.data))




    }
  return (
    <div>
        <Form  >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" value={firstname} onChange={handleFirstname} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" value={lastname} onChange={handleSecondname} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address </Form.Label>
        <Form.Control type="text" placeholder="Enter Your Address" value={address} onChange={handleaddres} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone Number </Form.Label>
        <Form.Control type="text" placeholder="Enter Phone Number" value={phone} onChange={handlephone} />
        </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        
       
        </div>
  )
}
export default RegisterForm