import React, {useState}  from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import useStore from './../../store/store';

function NewSubmit() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');
    const setNum = useStore((state) => state.setNum);
    const num = useStore((state) => state.num);
    const [OTPinput, setOTPinput] = useState([0, 0, 0, 0 ]);

    const handleSubmit = () => {
        console.log(otp)
        setNum(parseInt(OTPinput.join("")));
        axios.post('http://localhost:3001/users/verification-code',
            {
                otp:parseInt(OTPinput.join(""))
            })
            .then(res => {
                console.log(res.data)
                if (res.data.code === 200) {

                    navigate('/change-password');
                } else {
                    alert('Code is invalid ')
                }
            }).catch(err => {
                console.log(err)
            })
    };
    const handleCancel = () => {
		navigate('/signup2');
	}
    const handleInput = () => {
        const code = parseInt(OTPinput.join(""));
        console.log(code);
    }
    return (
        <>
    <div className="posBlock row justify-content-center mt-7">
            <div className="col-lg-5 text-center">
                   
                <div className="card mt-5">
                    <div className="card-body py-5 px-lg-5">
                         <div>
                             <img className="bigger-image" src={require("../../assets/images/icons/blueMail.png")}/>
                        </div>
                        <h3 className=" fw-normal text-dark text-black mt-4">
                            Email verification
                        </h3>
                        <p className="text-black mt-4 mb-1">
                            We sent a verification code to your email.
                        </p>
                         <p className="text-black ">
                             Please enter the code in the field below.
                        </p>
                        {/* <label className='text-black'>CODE</label> */}

                        <div className="row mt-4 pt-2">
                            <div className="col">
                                <input type="text" className=" square form-control form-control1 form-control-lg text-center py-4" maxLength="1" autoFocus=""
                                    onChange={(e) =>
                                        setOTPinput([
                                        e.target.value,
                                        OTPinput[1],
                                        OTPinput[2],
                                        OTPinput[3]
                                       
                                        ])
                                    }
                                />
                            </div>
                            <div className="col">
                                <input type="text" className=" square form-control form-control1 form-control-lg text-center py-4" maxLength="1" autoFocus=""
                                    onChange={(e) =>
                                        setOTPinput([
                                        OTPinput[0],
                                        e.target.value,
                                        OTPinput[2],
                                        OTPinput[3]
                                        ])
                                    }
                                />
                            </div>
                            <div className="col">
                                <input type="text" className="square form-control form-control1 form-control-lg text-center py-4" maxLength="1" autoFocus=""
                                    onChange={(e) =>
                                        setOTPinput([
                                        OTPinput[0],
                                        OTPinput[1],
                                        e.target.value,
                                        OTPinput[3]
                                        ])
                                    }
                                />
                            </div>
                            <div className="col">
                                <input type="text" className="square form-control form-control1 form-control-lg text-center py-4" maxLength="1" autoFocus=""
                                    onChange={(e) =>
                                        setOTPinput([
                                        OTPinput[0],
                                        OTPinput[1],
                                        OTPinput[2],
                                        e.target.value
                                        ])
                                    }
                                />
                            </div>
                           
                            
                        </div>

						{/* <input className="lead input1 form-control form-control-lg" value={otp} onChange={(e) => {setOtp(e.target.value)}} type="number"  placeholder="OTP"/> */}
                        <div className="buttonSideBySide">
							<button onClick={handleCancel} className=" btn btn-cancel btn-lg  hover-lift-light mt-4">
								cancel 
							</button>	
							<button onClick={handleSubmit} className=" btn btn-search btn-lg  hover-lift-light mt-4">
								continue 
							</button>
						</div>
                       
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