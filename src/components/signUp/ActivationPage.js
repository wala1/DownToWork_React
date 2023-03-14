import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {swal} from 'sweetalert';
import { useNavigate, useHistory } from 'react-router-dom';
// import _ from 'underscore';

import {jQuery,$} from "jquery";


function ActivationPage() {
  const navigate = useNavigate();
  const { activationCode } = useParams();
  console.log(activationCode);
  axios.post(`http://localhost:3001/users/verifyUser/${activationCode}`);
  
  
   const showSwal = function(type) {
      'use strict';
       if (type === 'success-message') {
        swal({
          title: 'Congratulations!',
          text: 'You entered the correct answer',
          type: 'success',
          button: {
            text: "Continue",
            value: true,
            visible: true,
            className: "btn btn-primary"
          }
        })
  
      }else{
          swal("Error occured !");
      } 
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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css"></link>
<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script>
<div className='card-body'>
                      <div className='wrapper text-center'>
                        <h4 className='card-title'>Congratulations your account has been activated successfully</h4>
                        <p className='card-description'>Click here to sign in</p>
                        <button className='btn btn-outline-success' id='congratsBtn' onClick={handleSubmit} >Click here!</button>
                      </div>
                    </div>
      </body>
    </html>
// 

  );
}
export default ActivationPage


