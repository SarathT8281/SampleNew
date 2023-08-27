import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const handleUsername = (event) => {
        setusername (event.target.value);
    };
    const handlePassword = (event) => {
        setpassword (event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Username :", username );
        console.log("Password :", password);
    }
    



  return (
    <div>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsername} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePassword}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>




    </div>
  )
}

export default Login