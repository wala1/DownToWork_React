import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SignIn.scss';
import useStore from '../../store/store';

function SignForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [emailError, setEmailError] = useState(''); // state to keep track of email validation error message
  const [passwordError, setPasswordError] = useState(''); // state to keep track of password validation error message
  const { login } = useStore();
  const navigate = useNavigate();
  const error = useStore((state) => state.err);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      await login(email, password);
      if (useStore.getState().user) {
        if (useStore.getState().user.isAdmin) {
          navigate('/dashboard');
        } else {
          navigate('/');
        }
      }
    }
    setValidated(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // validate email format
    if (!/^\S+@\S+\.\S+$/.test(e.target.value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6 && e.target.value!=="") {
      setPasswordError('Password must be at least 6 characters.');
    }
    else if (e.target.value==="") {
      setPasswordError('Password is required.');
    }
    else {
      setPasswordError('');
    }
  };


  return (
    <Form className="formInputs" noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label className="label">E-Mail :</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          onChange={handleEmailChange}
          required
          isInvalid={emailError !== ''}
        />
        <Form.Control.Feedback type="invalid">{emailError || 'Please enter a valid email address.'}</Form.Control.Feedback>
        <Form.Label className="label" htmlFor="inputPassword5">
          Password :
        </Form.Label>
        <Form.Control
          type="password"
          id="inputPassword5"
          placeholder='enter your password here'
          aria-describedby="passwordHelpBlock"
          onChange={handlePasswordChange}
          required
          isInvalid={passwordError !== ''}
        />
        <Form.Control.Feedback type="invalid">{passwordError||'enter a valid password'}</Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit" style={{ fontWeight: 'bold' }} className="bouton">
        Sign-in
      </Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Form>
  );
}

export default SignForm;
