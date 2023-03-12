import React, {useState}  from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function NewSubmit() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
        console.log(otp, password)
        axios.post('http://localhost:3001/users/new-password',
            {
                otp: otp,
                password: password,
            })
            .then(res => {
                console.log(res.data)
                if (res.data.code === 200) {
                    navigate('/signIn');
                    alert('Password Updated.');
                } else {
                    alert('server err / wrong OTP')
                }
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <>
    <div className="row justify-content-center mt-7">
            <div className="col-lg-5 text-center">
                   
                <div className="card mt-5">
                    <div className="card-body py-5 px-lg-5">
                         <div>
                             <img className="smaller-image" src={require("../../assets/images/icons/lock.png")}/>
                        </div>
                        <h3 className=" fw-normal text-dark text-black mt-4">
                            2-step verification
                        </h3>
                        <p className="text-black mt-4 mb-1">
                            We sent a verification code to your email.
                        </p>
                         <p className="text-black ">
                             Please enter the code in the field below.
                        </p>
                        
                        <div className="row mt-4 pt-2">
                            <div className="col">
                            <input type="text" className="form-control form-control-lg text-center py-4" maxLength="1" autoFocus=""/>
                            </div>
                            <div className="col">
                            <input type="text" className="form-control form-control-lg text-center py-4" maxLength="1"/>
                            </div>
                            <div className="col">
                            <input type="text" className="form-control form-control-lg text-center py-4" maxLength="1"/>
                            </div>
                            <div className="col">
                            <input type="text" className="form-control form-control-lg text-center py-4" maxLength="1"/>
                            </div>
                        </div>
                        <label className='label1 lead'>OTP</label>
						<input className="lead input1 form-control form-control-lg" value={otp} onChange={(e) => {setOtp(e.target.value)}} type="text"  placeholder="OTP"/>
                        
                        <label className='label1 lead h2'>Password</label>
						<input className="lead input1 form-control form-control-lg" value={password} onChange={(e) => {setPassword(e.target.value)}} type="text"  placeholder="Enter your new password"/>

                        <a onClick={handleSubmit}className=" btn btn-purple btn-lg w-100 hover-lift-light mt-4">
                            Verify my account
                        </a>
                   </div>
             </div>

                <p className="lead text-center text-muted mt-4">
                    Didn't receive it? 
                    <a  className=" ms-2">
                    Resend code
                    </a>
                </p>
        </div>
  </div>
        </>
      );
}

export default NewSubmit;