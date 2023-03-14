import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function ForgetPassword() {
	const [email,setEmail] = useState('');
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

	};
	const handleCancel = () => {
		navigate('/signup2');
	}
    return ( 
	<>
		<div className="row justify-content-center mt-7">
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
						<input className="lead input1 form-control form-control-lg" value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" name="email" placeholder="Email"/>
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