import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import './SignIn.scss';
import useStore from '../../store/store';
// import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';

function SignForm(){
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = async (response) => {
    const { accessToken, profileObj } = response;
  
    // Send user data to the server to be saved in the database
    try {
      const response = await axios.post("http://localhost:3001/users/signin", {
        googleAccessToken: accessToken,
        name: profileObj.name,
        email: profileObj.email,
        // add any other fields you want to save for the user
      });
      const user = response.data.result;
      const token = response.data.token;
  
      // Save user data and token to local storage
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
  
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  
  
  const handleGoogleLoginFailure = (response) => {
    // handle failure response
    console.log("here the user doesn't saved in the local storage");
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [emailError, setEmailError] = useState(''); // state to keep track of email validation error message
  const [passwordError, setPasswordError] = useState(''); // state to keep track of password validation error message
  const { login } = useStore();
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
      
                  {/* <GoogleLogin
                    clientId="1075754340245-lvt55d4eg0jvi5608u9eg6af8ur1f9fr.apps.googleusercontent.com"
                    onSuccess={handleGoogleLoginSuccess}
                    onFailure={handleGoogleLoginFailure}
                    cookiePolicy={"single_host_origin"}
                    buttonText="Sign in with Google"
                  /> */}
    </Form>
  );
}

export default SignForm;
