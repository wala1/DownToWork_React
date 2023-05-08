import {React, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs-react';
import CusmNav from '../shared/CusmNav';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

const ChangePwd = () => {
  const currentuserRef = useRef ({});

  const urlGetAllUsers = 'http://localhost:3001/users/getById/';
  const urlChangePwd = 'http://localhost:3001/users/changePwd/';

  const navigate = useNavigate ();
  const logout = () => {
    localStorage.clear();
     // Rediriger l'utilisateur vers la page de connexion
    navigate('/signup2') ; 
    };
  const handleCancel = () => {
    navigate ('/Profile');
  };

  //************************************Schema validation*************************************
  const schema = yup.object ().shape ({
    currentpassword: yup
      .string ()
      .required ('Please enter current password'), //confirmpassword validation
    /* .when('newpassword', (newpassword, field) =>
     newpassword ? field.required('Current Password is required to confirm you new password') : field
     ) */

    //newpassword validation
    newpassword: yup
      .string ()
      .required ('Please enter a new password')
      .min (8,'Your password should be at least 8 characters long')
      .max (100), //currentpassword validation
    /* .notOneOf([yup.ref("currentpassword"), null] ,"Please choose a new password that you have not used before") */

    confirmpassword: yup
      .string ()
      .required ('Please re-enter new password')
      .oneOf ([yup.ref ('newpassword'), null], 'Passwords do not match'),
    /*    currentpassword : yup.string() */
  });

  //errors is an object contains each of the fields in the form and their errors
  const {register, handleSubmit, formState: {errors}, setError} = useForm ({
    resolver: yupResolver (schema),
  });

  const onSubmit = async (data) => {
    try {
      if (
        bcrypt.compareSync (data.currentpassword, currentuserRef.current.password)
      ) {
        
        const { currentpassword, newpassword } = data;
        const passwordData = {
          oldPassword: currentpassword,
          newPassword: newpassword,
        };
        await axios.put (
          urlChangePwd + currentuserRef.current._id,
          passwordData
        );

        logout();
      } else {
        alert ('Incorrect password , try again');
      }
    } catch (error) {
      console.error (error);
    }
  };

  useEffect (() => {
    const userString = localStorage.getItem ('user');
    const user = JSON.parse (userString);
    axios
      .get (urlGetAllUsers + user._id)
      .then (response => {
        const data = JSON.stringify (response.data);
        var parsedData = JSON.parse (data);
        console.log (parsedData);
        currentuserRef.current = parsedData;
        //    console.log(currentuser)
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  return (
    <div>
      <CusmNav />
      <div className="posBlock row justify-content-center mt-12">
        <div className="col-lg-5 text-center">

          <div className="card mt-5">
            <div className="card-body py-5 px-lg-5">
              <div>
                <img src="https://img.icons8.com/?size=1x&id=Jsh8htEfGJx1&format=png" />
              </div>
              <h3 className=" fw-normal text-dark text-black mt-4">
                Change Password
              </h3>
              <p className="text-black mt-4 mb-1">
                Please enter your old and new password
              </p>

              {/* <label className='label1 lead'>OTP</label> */}
              {/* <input className="lead input1 form-control form-control-lg" value={otp}  disabled={true} type="number"  placeholder="OTP"/>  */}
              <br />
              {/* <label className='label1 lead h2'>Password</label> */}
              <form onSubmit={handleSubmit (onSubmit)}>
                <div className="Inputs">
                  <input
                    className="lead input1 form-control form-control-lg"
                    type="password"
                    id="password"
                    {...register ('currentpassword')}
                    name="currentpassword"
                    autoComplete="current-password"
                    placeholder="Old password"
                  />
                  <div className="error-container">
                    {errors.currentpassword &&
                      <span className="error-message">
                        {errors.currentpassword.message}
                      </span>}
                  </div>
                  <input
                    className="lead input1 form-control form-control-lg"
                    type="password"
                    {...register ('newpassword')}
                    id="newpassword"
                    name="newpassword"
                    autoComplete="new-password"
                    placeholder="New password"
                  />
                  <div className="error-container">
                    {errors.newpassword &&
                      <span className="error-message">
                        {errors.newpassword.message}
                      </span>}
                  </div>
                  <input
                    className="lead input1 form-control form-control-lg"
                    type="password"
                    {...register ('confirmpassword')}
                    id="confirmpassword"
                    name="confirmpassword"
                    autoComplete="confirm-password"
                    placeholder="Confirm new password"
                  />
                  <div className="error-container">
                    {errors.confirmpassword &&
                      <span className="error-message">
                        {errors.confirmpassword.message}
                      </span>}
                  </div>               {' '}
                </div>

                <div className="buttonSideBySide" style={{marginLeft: '20px'}}>
                  <button
                    onClick={handleCancel}
                    className=" btn btn-cancel btn-lg  hover-lift-light mt-4"
                  >
                    cancel{' '}
                  </button>
                  <button
                    type="submit"
                    className=" btn btn-lg  hover-lift-light mt-4"
                    style={{backgroundColor: '#3aaf85'}}
                  >
                    confirm
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePwd;
