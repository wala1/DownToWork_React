import React , {useState} from 'react';
import { useNavigate , useSearchParams } from 'react-router-dom';
import axios from 'axios';
function ResetPassword() {
	const [searchParams , setSearchParams] = useSearchParams();
    const [password,setPassword] = useState('');
	const navigate = useNavigate();
	const tokenPass=searchParams.get('token');
	const handleSubmitReset = () =>{
		console.log(searchParams.get('token'));
		console.log(password);
		axios.post('http://localhost:3001/users/reset-password' , {
			password : password,
			tokenPass : ''
        
		}).then(res => {
			console.log(res.data);
			if(res.data.code === 200){
				navigate('/signIn');
			}
		}).catch(err => {
			console.log(err);
			console.log(tokenPass);
		})

	};
    return (
         <>
<h1>Hello</h1>  
<div className="full-screen">
        <div className=" bodyFroget container h-100">
    		<div className="row h-100">
				<div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">

						<div className="text-center mt-4">
							<h1 className="h9 ">Reset password</h1>
							<p className="lead">
								Enter your new password.
							</p>
						</div>

						<div className="card">
							<div className="card-body">
								<div className="m-sm-4">
									<form className='form1'>
										<div className="form-group">
											<label className='label1 lead h2'>Password</label>
											<input className="lead input1 form-control form-control-lg" value={password} onChange={(e) => {setPassword(e.target.value)}} type="text"  placeholder="Enter your new password"/>
										</div>
										<div className="text-center mt-3">
											<a onClick={handleSubmitReset} className=" lead posButton btn btn-lg btn-primary">Reset password</a>
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

export default ResetPassword;