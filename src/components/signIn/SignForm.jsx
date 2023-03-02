import React from 'react'
import { Form } from 'react-bootstrap'
import './SignIn.scss'


function SignForm() {
  return (
<Form className='formInputs'>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label className='label'>E-Mail :</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" />
      <Form.Label className='label' htmlFor="inputPassword5">Password :</Form.Label>
      <Form.Control
        
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
    </Form.Group>
  </Form> 
    )
}

export default SignForm