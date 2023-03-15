import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { swal } from 'sweetalert';
import { useNavigate, useHistory } from 'react-router-dom';
// import _ from 'underscore';
import ReCAPTCHA from 'react-google-recaptcha';




function ActivationPage() {
  const navigate = useNavigate();
  const { activationCode } = useParams();
  console.log(activationCode);
  axios.post(`http://localhost:3001/users/verifyUser/${activationCode}`);

const[verified,setVerified]=useState(false);
  function onChange() {
    setVerified(true);

  }

  function handleSubmit(event) {
    event.preventDefault();

    window.location.href = '/signup2';
  }
  

  return (

    //       <div className="text-center" >
    // 	<h1>Please wait you are being directed to Sign in page</h1>
    // 	<i className="fa fa-cog fa-spin fa-3x fa-fw"></i>
    // </div>
    <html>
      <head>

      </head>
      <body>


        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css"></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script>
       
        <div className='d-flex flex-column justify-content-center align-items-center card-body mb-3'>
          <div className='wrapper text-center'>
            <h4 className='card-title'>Congratulations your account has been activated successfully</h4>
            <p className='card-description'>Please check the box and click the button below to sign in</p>

 <form>
  <div >
            <ReCAPTCHA
              sitekey="6Lc9mv8kAAAAAPkNtY2o33Jif3Vuuu3bpZ8GiDuL"
              onChange={onChange}
            />
</div>



            <button className='btn btn-outline-success' id='congratsBtn' onClick={handleSubmit} disabled={!verified} >Click here!</button>
            </form>
          </div>
        </div>
        */}

  <div className='card border-success mb-0  d-flex align-items-center  justify-content-center' style={{maxwidth: '10rem',marginTop:'150px'}}>
  <div className='card-header bg-transparent border-success '><i className='fa fa-check-circle' style={{fontSize:'100px',color:'green'}}></i></div>
  <div className='card-body text-success'>
    <h5 className='card-title d-flex align-items-center'>Congratulations your account has been activated successfully!!</h5>
    <p className='card-text d-flex align-items-center'>Please check the box and click the button below to sign in</p>
    <ReCAPTCHA
              sitekey="6Lc9mv8kAAAAAPkNtY2o33Jif3Vuuu3bpZ8GiDuL"
              onChange={onChange}
            />
  </div>
  <button className='btn btn-outline-success' id='congratsBtn' onClick={handleSubmit} disabled={!verified} style={{width:'200px'}} >Click here!</button>
</div>

      
      </body>
      
    </html>
    // 
    

  );
}
export default ActivationPage


