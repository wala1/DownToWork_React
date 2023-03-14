import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import '../SignIn.scss';
import useStore from '../../store/store';
import { register } from '../../services/userService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignUp2() {

  const notify = () => toast("Wow so easy!");
  
  const [passwordReg, setpasswordReg] = useState('');
  const [nameReg, setNameReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  ///////
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [emailError, setEmailError] = useState(''); // state to keep track of email validation error message
  const [passwordError, setPasswordError] = useState(''); // state to keep track of password validation error message
  const { login } = useStore();
  const navigate = useNavigate();
  const error = useStore((state) => state.err);

  const handleSubmit = async (e) => {
    console.log("clicked");
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
const testreg=false;

  const handleRegister=async(e)=>{
    e.preventDefault();

    console.log(nameReg,emailReg,passwordReg);
    await register(nameReg,emailReg,passwordReg);
    // testreg=true;
    // if (testreg) {
    //   document.getElementById("messageSuccess").style.display = "block";
    //   testreg=false;
    // } else {
    //   document.getElementById("messageSuccess").style.display = "none";
    // }


  }
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
<div className="containerhass" >
     <div className="forms-containerhass">
       <div className="signin-signuphass">
       <Form className="sign-in-formhass" noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="hass" style={{width:300}}>
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
      <a href="/forget-password">Forgot your password ?</a>
      <Button variant="primary" type="submit"  className="btnhass solid" >
        Sign-in
      </Button>
      {/* <button type='submit' >hello</button> */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="social-mediahass">
             <a href="#" className="social-iconhass">
               <i className="fab fa-facebook-f"></i>
             </a>
            
             <a href="#" className="social-iconhass">
               <i className="fab fa-google"></i>
             </a>
            
           </div>
    </Form>
   
    {/* <ToastContainer id="messageSuccess" style={{top:-200,left:-1}}/> */}
         <form action="#" className="sign-up-formhass" onSubmit={handleRegister}>
           <h2 className="titlehass">Sign up</h2>
           <div className="input-fieldhass">
             <i className="fas fa-user"></i>
             <input type="text" placeholder="Username" name="nameReg"onChange={(e)=>setNameReg(e.target.value)} />
           </div>
           <div className="input-fieldhass">
             <i className="fas fa-envelope"></i>
             <input type="email" placeholder="Email" name="emailReg" onChange={(e)=>setEmailReg(e.target.value)}/>
           </div>
           <div className="input-fieldhass">
             <i className="fas fa-lock"></i>
             <input type="password" placeholder="Password" name="passwordReg" onChange={(e)=>setpasswordReg(e.target.value)}/>
           </div>
           <input type="submit" className="btnhass" value="Sign up" onClick={notify} />
           
           <p className="social-texthass">Or Sign up with social platforms</p>
           <div className="social-mediahass">
             <a href="#" className="social-iconhass">
               <i className="fab fa-facebook-f"></i>
             </a>
             <a href="#" className="social-iconhass">
               <i className="fab fa-twitter"></i>
             </a>
             <a href="#" className="social-iconhass">
               <i className="fab fa-google"></i>
             </a>
             <a href="#" className="social-iconhass">
               <i className="fab fa-linkedin-in"></i>
             </a>
           </div>
         </form>
       </div>
     </div>

     <div className="panels-containerhass" >
       <div className="panelhass left-panelhass">
         <div className="contenthass">
           <h3>New here ?</h3>
           <p>
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
             ex ratione. Aliquid!
           </p>
           <button className="btnhass transparenthass" id="sign-up-btn">
             Sign up
           </button>
         </div>
         <img src="./assets/signup/img/log.svg" className="imagehass" alt="" />
       </div>
       <div className="panelhass right-panelhass">
         <div className="contenthass">
           <h3>One of us ?</h3>
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
             laboriosam ad deleniti.
           </p>
           <button className="btnhass transparenthass" id="sign-in-btn">
             Sign in
           </button>
         </div>
         <img src="./assets/signup/img/register.svg" className="imagehass" alt="" />
       </div>
     </div>
     
   </div>
  )
}

export default SignUp2