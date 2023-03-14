import React , {useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import useStore from '../../store/store';




function ForgetPassword() {
	const [email,setEmail] = useState('');
	const [emailError, setEmailError] = useState(''); // state to keep track of email validation error message
	const [validated, setValidated] = useState(false);
	const error = useStore((state) => state.err);


	const navigate = useNavigate();
	const handleSubmit = () =>{
		console.log(email);
		axios.post('http://localhost:3001/users/forget-password' , {
			email : email,
		}).then(res => {
			console.log(res.data);
			console.log(res.data.code);
			if(res.data.code === 200){
				navigate('/new-submit');
			}
		}).catch(err => {
			console.log(err);
		})
		setValidated(true);

	};
	const handleCancel = () => {
		navigate('/signup2');
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
    return ( 
	<>
		
		<div className="posBlock row justify-content-center mt-7">
            <div className="col-lg-5 text-center">
                   
                <div className="card mt-5">
                    <div className="card-body py-5 px-lg-5">
                         <div>
                             <img className="smaller-image" src={require("../../assets/images/icons/lockBlue.png")}/>
                        </div>
                        <h3 className=" fw-normal text-dark text-black mt-4">
                            Find your account
                        </h3>
                        <p className="text-black mt-4 mb-1">
						Please enter your email adress to search 
                        </p>
						<p className="text-black ">
						for your account .
                        </p>
						<Form  noValidate validated={validated} >
							<Form.Control className="lead input1 form-control form-control-lg" value={email} onChange={handleEmailChange}  type="email" name="email" placeholder="Email" required  isInvalid={emailError !== ''}/>
							<Form.Control.Feedback  type="invalid"> {emailError || 'Please enter a valid email address.'} </Form.Control.Feedback>
								
								{/* {error && <p style={{ color: 'red' }}>{error}</p>} */}

						</Form>
						<div className="buttonSideBySide">
									<button onClick={handleCancel} className=" btn btn-cancel btn-lg  hover-lift-light mt-4">
										cancel 
									</button>	
									<button onClick={handleSubmit} className=" btn btn-search btn-lg  hover-lift-light mt-4">
										search 
									</button>
						</div>
                   </div>
             </div>

        </div>
  </div>
    
    </> );
}

export default ForgetPassword;