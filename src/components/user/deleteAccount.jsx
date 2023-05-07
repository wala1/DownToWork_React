import React , {useState} from 'react';
import { useNavigate , useSearchParams } from 'react-router-dom';
import axios from 'axios';
import useStore from './../../store/store';


function DeleteAccount() {

    
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);

	const [searchParams , setSearchParams] = useSearchParams();
    const [password,setPassword] = useState('');
	const navigate = useNavigate();
	const tokenPass=searchParams.get('token');

    const handleSubmit = () => {
        const url = 'http://localhost:3001/users/delete-account';
        axios
          .post(url, {
            email: user.email,
            password: password,
          })
          .then((res) => {
            console.log("here is the data:" + res.data);
            if (res.data.success) {
              // Redirect to the signup page or show a success message
              alert('Success to delete account');
              navigate("/signUp2");
            } else {
              alert('Failed to delete account');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
      
      
    const handleCancel = () => {
        navigate('/profile');
    }

    return (<>    
        <div className="posBlock row justify-content-center mt-7">
                <div className="col-lg-5 text-center">
                       
                    <div className="card mt-5">
                        <div className="card-body py-5 px-lg-5">
                             <div>
                             <img src="https://img.icons8.com/external-vectorslab-outline-color-vectorslab/53/null/external-Remove-Profile-social-media-vectorslab-outline-color-vectorslab.png"/>
                            </div>  
                            <h3 className=" fw-normal text-dark text-black mt-4">
                                Remove Account
                            </h3>
                            <p className="text-black mt-4 mb-1">
                                Enter your password  to remove
                            </p>
                             <p className="text-black ">
                                 your account
                            </p>
                            
                           
                             {/* <label className='label1 lead'>OTP</label> */}
                                        {/* <input className="lead input1 form-control form-control-lg" value={otp}  disabled={true} type="number"  placeholder="OTP"/>  */}
                            <br></br>
                            {/* <label className='label1 lead h2'>Password</label> */}
                                        <input className="lead input1 form-control form-control-lg" value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="password"/>
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

export default DeleteAccount;