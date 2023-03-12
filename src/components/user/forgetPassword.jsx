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
			if(res.data.code === 200){
				navigate('/new-submit');
			}
		}).catch(err => {
			console.log(err);
		})

	};
    return ( <>
    <div className="full-screen">
        <div className=" bodyFroget container h-100">
    		<div className="row h-100">
				<div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">

						<div className="text-center mt-4">
							<h1 className="h9 ">Forget password ?</h1>
							<p className="lead">
								Enter your email to reset your password.
							</p>
						</div>

						<div className="card">
							<div className="card-body">
								<div className="m-sm-4">
									<form className='form1'>
										<div className="form-group">
											<label className='label1 lead h2'>Email</label>
											<input className="lead input1 form-control form-control-lg" value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" name="email" placeholder="Enter your email"/>
										</div>
										<div className="text-center mt-3">
											<a onClick={handleSubmit} className=" lead posButton btn btn-lg btn-primary">Reset password</a>
											{/* <!-- <button type="submit" className="btn btn-lg btn-primary">Reset password</button> --> */}
										</div>
									</form>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
    </div>
    </> );
}

export default ForgetPassword;