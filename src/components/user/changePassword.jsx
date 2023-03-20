import React, {useState , useContext}  from 'react';
import axios from 'axios'
import { useNavigate , useLocation } from "react-router-dom"
import MyContext from '../../MyContext';
import useStore from './../../store/store';
import { Form, Button, Alert } from 'react-bootstrap';



function ChangePassword(props) {
      const [password, setPassword] = useState('');
      const num = useStore((state) => state.num);
      const [otp, setOtp] = useState(num);
      const navigate = useNavigate();
      const [validated, setValidated] = useState(false);
      const [passwordError, setPasswordError] = useState(''); // state to keep track of password validation error message
      const handleSubmit = () => {
            // setOtp(num);
            console.log("num "+ num + "otp " + otp+"pass " +password);
            axios.post('http://localhost:3001/users/change-password',
                  {
                      otp: otp,
                      password: password,
                  })
                  .then(res => {
                      console.log(res.data)
                      if (res.data.code === 200) {

                          navigate('/signup2');
                      } else {
                          alert('check your code')
                      }
                  }).catch(err => {
                      console.log(err)
              })
              setValidated(true);

    };
    const handleCancel = () => {
		navigate('/signup2');
	}
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

   

    return ( <>    
    <div className="posBlock row justify-content-center mt-7">
            <div className="col-lg-5 text-center">
                   
                <div className="card mt-5">
                    <div className="card-body py-5 px-lg-5">
                         <div>
                             <img className="smaller-image" src={require("../../assets/images/icons/lockBlue.png")}/>
                        </div>
                        <h3 className=" fw-normal text-dark text-black mt-4">
                            Change password
                        </h3>
                        <p className="text-black mt-4 mb-1">
                            Enter a new password  to reset
                        </p>
                         <p className="text-black ">
                             your account
                        </p>
                        
                       
                         {/* <label className='label1 lead'>OTP</label> */}
						            {/* <input className="lead input1 form-control form-control-lg" value={otp}  disabled={true} type="number"  placeholder="OTP"/>  */}
                        <br></br>
                        {/* <label className='label1 lead h2'>Password</label> */}
                        <Form  noValidate validated={validated}>
                            <Form.Control className="lead input1 form-control form-control-lg" value={password} onChange={handlePasswordChange} type="password" placeholder="password" required isInvalid={passwordError !== ''}/>
                            <Form.Control.Feedback type="invalid">{passwordError||'enter a valid password'}</Form.Control.Feedback>
                             
							
						            </Form>    
                         <div className="buttonSideBySide">
                                  <button onClick={handleCancel} className=" btn btn-cancel btn-lg  hover-lift-light mt-4">
                                    cancel 
                                  </button>	
                                  <button onClick={handleSubmit} className=" btn btn-search btn-lg  hover-lift-light mt-4">
                                    save 
                                  </button>
                              </div>   	
                                    
                                    
                                    {/* <input className="lead input1 form-control form-control-lg" value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="password"/>
                         <div className="buttonSideBySide">
                          <button onClick={handleCancel} className=" btn btn-cancel btn-lg  hover-lift-light mt-4">
                            cancel 
                          </button>	
                          <button onClick={handleSubmit} className=" btn btn-search btn-lg  hover-lift-light mt-4">
                            continue 
                          </button>
						            </div> */}
                       
                   </div>
             </div>
{/* 
                <p className="lead text-center text-muted mt-4">
                    Didn't receive it? 
                    <a  className=" ms-2">
                    Resend code
                    </a>
                </p> */}
        </div>
  </div>
    
    
    </> 
    );
}

export default ChangePassword;