import React, {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
// import '../SignIn.scss';
import useStore from '../../store/store';
import {register} from '../../services/userService';
// import { GoogleLogin } from "react-google-login";
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import {LoginSocialFacebook} from 'reactjs-social-login';
import {FacebookLoginButton} from 'react-social-login-buttons';
function SignUp2 () {
  const container = document.querySelector ('.containerhass');
  // //const [container,setContainer]=useState(container.classList.add("sign-up-mode"))
  //   // const [sign_in_btn,setSign_in_btn]=useState(document.getElementById("sign-in-btn"))
  //   // const[sign_up_btn,setSign_up_btn]=useState(document.getElementById("sign-up-btn"))
  //   //const container = document.querySelector(".containerhass");
  const sign_in_btn = document.querySelector ('#sign-in-btn');
  const sign_up_btn = document.querySelector ('#sign-up-btn');
  const [focused, setFocused] = useState ('false');
  const [focused1, setFocused1] = useState ('false');
  const [focused2, setFocused2] = useState ('false');
  const [focused3, setFocused3] = useState ('false');
  const [focused4, setFocused4] = useState ('false');
  const urlRegisFab = 'http://127.0.0.1:3001/users/signupFb/';
  const clickHandler1 = () => {
    console.log ('clicked');
    const container = document.querySelector ('.containerhass');
    container.classList.add ('sign-up-mode');
  };
  const clickHandler2 = () => {
    const container = document.querySelector ('.containerhass');
    container.classList.remove ('sign-up-mode');
    console.log ('clicked');
  };

  const handleFocus = e => {
    setFocused ('true');
  };

  // Later, when you want to remove the event listener:
  // sign_up_btn.removeEventListener("click", clickHandler1);
  // sign_in_btn.removeEventListener("click", clickHandler2);

  // useEffect(()=> {
  //   if(sign_up_btn){
  //   sign_up_btn.addEventListener("click", clickHandler1);
  //   console.log("clicked");
  //   }

  //   if(sign_in_btn){
  //     console.log("clicked");

  //     sign_in_btn.addEventListener("click", clickHandler2);
  //   }
  //   return()=>{
  //     if(sign_up_btn){sign_up_btn.removeEventListener("click", clickHandler1);
  //     console.log("clicked");}
  //     if(sign_in_btn){ sign_in_btn.removeEventListener("click", clickHandler2);
  //     console.log("clicked");}

  //   }
  // },[])

  const userString = localStorage.getItem ('user');
  const user = JSON.parse (userString);

  //if user is logged in, redirect to home page
  useEffect (
    () => {
      if (user) {
        navigate ('/');
      }
    },
    [user]
  );

  const navigate = useNavigate ();

  const handleGoogleLoginSuccess = async response => {
    const {accessToken, profileObj} = response;
    // Send user data to the server to be saved in the database
    const url = 'http://localhost:3001/users/signin';
    try {
      const response = await axios.post (url, {
        googleAccessToken: accessToken,
        name: profileObj.name,
        email: profileObj.email,
        picture: profileObj.imageUrl,
        // add any other fields you want to save for the user
      });

      localStorage.setItem ('user', JSON.stringify (response.data.result));
      localStorage.setItem ('token', JSON.stringify (response.data.token));

      console.log ('googleAccessToken : ' + accessToken);
      console.log (response.data);
      navigate ('/');
    } catch (error) {
      console.error (error);
    }
  };

  const handleGoogleLoginFailure = response => {
    // handle failure response
  };

  const handleGoogleSignupSuccess = async response => {
    console.log ('Signed up with Google successfully: ', response);
    const url = 'http://localhost:3001/users/signup';
    try {
      const {tokenId, profileObj} = response;
      const data = await axios.post (url, {
        googleAccessToken: tokenId,
        name: profileObj.name,
        email: profileObj.email,
        picture: profileObj.imageUrl,
      });

      localStorage.setItem ('user', JSON.stringify (data.result));
      localStorage.setItem ('token', JSON.stringify (data.token));
      navigate ('/');
    } catch (error) {
      console.error (error);
    }
  };

  const handleGoogleSignupFailure = response => {
    // handle failed signup with Google
  };

  const notify = () => toast ('Wow so easy!');

  const [passwordReg, setpasswordReg] = useState ('');
  const [nameReg, setNameReg] = useState ('');
  const [emailReg, setEmailReg] = useState ('');
  //const [dateOfBirth, setDateOfBirth] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState (null);

  ///////
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [validated, setValidated] = useState (false);
  const [emailError, setEmailError] = useState (''); // state to keep track of email validation error message
  const [passwordError, setPasswordError] = useState (''); // state to keep track of password validation error message
  const {login} = useStore ();
  const error = useStore (state => state.err);
  const loading = useStore (state => state.loading);

  const handleSubmit = async e => {
    e.preventDefault ();
    console.log ('clicked');
    const form = e.currentTarget;
    if (form.checkValidity () === false) {
      e.stopPropagation ();
    } else {
      await login (email, password);
      if (useStore.getState ().user) {
        if (useStore.getState ().user.isAdmin) {
          navigate ('/dashboard');
        } else {
          navigate ('/');
        }
      }
    }
    setValidated (true);
  };

  const handleRegister = async e => {
    e.preventDefault ();

    console.log (dateOfBirth);
    // output the formatted date value
    console.log (nameReg, emailReg, dateOfBirth, passwordReg);

    try {
      await register (nameReg, emailReg, dateOfBirth, passwordReg);
    } catch (err) {
      console.log (err);
    }

    window.location.reload ();
  };

  const handleEmailChange = e => {
    setEmail (e.target.value);
    // validate email format
    if (!/^\S+@\S+\.\S+$/.test (e.target.value)) {
      setEmailError ('Please enter a valid email address.');
    } else {
      setEmailError ('');
    }
  };

  const handlePasswordChange = e => {
    setPassword (e.target.value);
    if (e.target.value.length < 6 && e.target.value !== '') {
      setPasswordError ('Password must be at least 6 characters.');
    } else if (e.target.value === '') {
      setPasswordError ('Password is required.');
    } else {
      setPasswordError ('');
    }
  };

  return (
    <div className="containerhass">

      {/* <img src="./assets/signup/img/logdwt.png" style={{width:'120px'}}  alt="" /> */}
      <div className="forms-containerhass">
        <div className="signin-signuphass">

          <Form
            className="sign-in-formhass"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <h2
              style={{
                fontsize: '2.2rem',
                color: '#444',
                marginBottom: '10px',
                fontFamily: 'fantasy bald',
                fontWeight: 'bold',
              }}
            >
              Sign in
            </h2>
            <Form.Group className="hass" style={{width: 300}}>
              <Form.Label className="label">E-Mail :</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={handleEmailChange}
                required
                isInvalid={emailError !== ''}
              />
              <Form.Control.Feedback type="invalid">
                {emailError || 'Please enter a valid email address.'}
              </Form.Control.Feedback>
              <Form.Label className="label" htmlFor="inputPassword5">
                Password :
              </Form.Label>
              <Form.Control
                type="password"
                id="inputPassword5"
                placeholder="enter your password here"
                aria-describedby="passwordHelpBlock"
                onChange={handlePasswordChange}
                required
                isInvalid={passwordError !== ''}
              />
              <Form.Control.Feedback type="invalid">
                {passwordError || 'enter a valid password'}
              </Form.Control.Feedback>
            </Form.Group>
            <a href="/forget-password">Forgot your password ?</a>
            {/* <Button variant="primary" type="submit"  className="btnhass solid" >
        Sign-in
      </Button> */}
            <input type="submit" className="btnhass" value="Sign in" />
            {/* <button type='submit' >hello</button> */}
            {error && <p style={{color: 'red'}}>{error}</p>}
            {
              <div className="social-mediahass">
                {/* <a href="#" className="social-iconhass">
               {<i className="fab fa-facebook-f"></i>}
             </a> */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  {/* 
             <GoogleLogin
                    clientId="1075754340245-lvt55d4eg0jvi5608u9eg6af8ur1f9fr.apps.googleusercontent.com"
                    onSuccess={handleGoogleLoginSuccess}
                    onFailure={handleGoogleLoginFailure}
                    cookiePolicy={"single_host_origin"}
                    buttonText="Sign in with Google"
                  /> */}

                  {/* <LoginSocialFacebook
                    appId="599043218440870"
                    onResolve={response => {
                      console.log (response);
                      console.log (response.data.name);

                      localStorage.setItem ('token', response.data.accessToken);
                      localStorage.setItem (
                        'user',
                        JSON.stringify (response.data.name)
                      );

                      navigate ('/');
                    }}
                    onReject={error => {
                      console.log (error);
                    }}
                  >
                    <FacebookLoginButton />
                  </LoginSocialFacebook> */}
                </div>

              </div>
            }
          </Form>

          {/* <ToastContainer id="messageSuccess" style={{top:-200,left:-1}}/> */}
          <form
            action="#"
            className="sign-up-formhass"
            onSubmit={handleRegister}
          >
            {/* <i class="bi bi-person"></i>
         <img src="./assets/signup/img/person.svg" style={{width:'100px'}} alt="" /> */}
            <h2
              style={{
                fontsize: '2.2rem',
                color: '#444',
                marginBottom: '10px',
                fontFamily: 'fantasy bald',
                fontWeight: 'bold',
              }}
            >
              Sign up
            </h2>
            <div className="input-fieldhass">
              <i className="fas fa-user" />
              <input
                type="text"
                placeholder="Username"
                name="nameReg"
                required
                pattern="^[A-Za-z0-9]{3,16}$"
                onChange={e => setNameReg (e.target.value)}
                onBlur={e => setFocused1 ('true')}
                focused={focused1}
              />
              <span>Enter at least 3 characters!</span>
            </div>

            <div className="input-fieldhass">
              <i className="fas fa-envelope" />
              <input
                type="email"
                placeholder="Email"
                name="emailReg"
                required
                pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                onChange={e => setEmailReg (e.target.value)}
                onBlur={e => setFocused2 ('true')}
                focused={focused2}
              />
              <span>Email adress should be valid! </span>
            </div>
            <div className="input-fieldhass d-flex align-items-center">
              <i className="fas fa-calendar" />
              {/* <input type="text" placeholder="date of birth" name="DateOfBirth" onChange={(e)=>setDateOfBirth(e.target.value)}/> */}
              <DatePicker
                placeholderText="date of birth"
                dateFormat="yyyy-MM-dd"
                required
                selected={dateOfBirth}
                onChange={date => setDateOfBirth (date)}
                onBlur={e => setFocused4 ('true')}
                focused={focused4}
              />
              <span>Enter your date of birth! </span>
            </div>

            <div className="input-fieldhass">
              <i className="fas fa-lock" />
              <input
                type="password"
                placeholder="Password"
                name="passwordReg"
                required
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                onChange={e => setpasswordReg (e.target.value)}
                onBlur={e => setFocused3 ('true')}
                focused={focused3}
              />
              <span>
                Minimum eight characters at least 1 letter and 1 number!
              </span>
            </div>
            <input type="submit" className="btnhass" value="Sign up"/>

            <p className="">Or Sign up with Facebook</p>
            <div className="social-mediahass">
              {/*    <a href="#" className="social-iconhass">
               <i className="fab fa-facebook-f"></i>
             </a>
             <a href="#" className="social-iconhass">
               <i className="fab fa-twitter"></i>
             </a>
             <a href="#" className="social-iconhass">
               <i className="fab fa-linkedin-in"></i>
             </a> */}
              <LoginSocialFacebook
                appId="599043218440870"
                onResolve={response => {
                  console.log (response.data);
                  console.log(response.data.picture.data.url);
                 /*  axios.post('').then((response)=> {

                  }) */
                 const name = response.data.name ;
                 const email = response.data.email;
                 const imagePath= response.data.picture.data.url;

                 const user = {name ,email, imagePath}
                 console.log(user);
                 
                axios.post(urlRegisFab, user).then((response)=> {
                localStorage.setItem('user', JSON.stringify(response.data));
                localStorage.setItem('token', response.data.token);
                navigate ('/');
                 }).catch((err)=>{alert('Email already exists');})
                }}

                onReject={error => {
                  console.log (error);
                }}
              >
                <FacebookLoginButton  style={{with:'55px' , height : '50px'}}  />
              </LoginSocialFacebook>

              {/* <GoogleLogin
                clientId="1075754340245-lvt55d4eg0jvi5608u9eg6af8ur1f9fr.apps.googleusercontent.com"
                buttonText="Sign up with Google"
                onSuccess={handleGoogleSignupSuccess}
                onFailure={handleGoogleSignupFailure}
                cookiePolicy={'single_host_origin'}
              /> */}
            </div>
          </form>

        </div>
      </div>

      <div className="panels-containerhass">
        <div className="panelhass left-panelhass">
          <div className="contenthass">
            <h2
              style={{
                fontsize: '1.2rem',
                fontWeight: 'bold',
                color: 'whitesmoke',
              }}
            >
              New here ?
            </h2>

            <button
              className="btnhass transparenthass"
              onClick={clickHandler1}
              id="sign-up-btn"
            >
              Sign up
            </button>
          </div>
          <img src="./assets/signup/img/log.svg" className="imagehass" alt="" />
        </div>
        <div className="panelhass right-panelhass">
          <div className="contenthass">
            <h2
              style={{
                fontsize: '1.2rem',
                fontWeight: 'bold',
                color: 'whitesmoke',
              }}
            >
              One of us ?
            </h2>

            <button
              className="btnhass transparenthass "
              onClick={clickHandler2}
              id="sign-in-btn"
            >
              Sign in
            </button>
          </div>
          <img
            src="./assets/signup/img/register.svg"
            className="imagehass"
            alt=""
          />
        </div>
      </div>

    </div>
  );
}

export default SignUp2;
