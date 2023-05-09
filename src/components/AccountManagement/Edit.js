import {React, useState, useEffect, useRef} from 'react';
import {useNavigate, useHistory} from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs-react';
import CusmNav from '../shared/CusmNav';
import NavBar from '../shared/NavBar';
import './EditAccount.css';
import {useForm, useController, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import moment from 'moment';
import {Placeholder} from 'react-bootstrap';

function Edit () {
  const logout = () => {
    localStorage.clear ();
    // Rediriger l'utilisateur vers la page de connexion
    navigate ('/signup2');
  };

  const url = 'http://localhost:3001/users/getById/';
  const urlupdate = 'http://localhost:3001/users/update/';
  // var currentuser1 = {name : "Ons Diweni"  , email:"Ons.diweni@esprit.tn" , birthdate: new Date('1990-01-01')}
  const currentuserRef = useRef ({});
  const [username, setUsername] = useState ('');
  const [email, setEmail] = useState ('');
  const [date, setDate] = useState ('');

  const [isConfirmClicked, setIsConfirmClicked] = useState (false);
  const [currentPassword, setCurrentPassword] = useState ('');
  const [userUpdated, setUserUpdated] = useState ({});
  const [returned, setreturned] = useState(false);

  useEffect (() => {
    const userString = localStorage.getItem ('user');
    const user = JSON.parse (userString);
    axios
      .get (url + user._id)
      .then (response => {
        const data = JSON.stringify (response.data);
        var parsedData = JSON.parse (data);
        console.log (parsedData);
        currentuserRef.current = parsedData;
        setEmail (currentuserRef.current.email);
        setUsername (currentuserRef.current.name);
        const formattedDate = moment (
          currentuserRef.current.DateOfBirth
        ).format ('YYYY-MM-DD');

        setDate (formattedDate);
        //    console.log(currentuser)
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  const navigate = useNavigate ();

  const handleCancel = () => {
    navigate ('/Profile');
  };
  const handleReturn = () => {
    setreturned(true)
  };

  const onSubmit = async data => {
    setreturned(false)
    console.log (data);
    setIsConfirmClicked (true);

    const userUpdated = {
      name: data.fullName ? data.fullName : currentuserRef.current.name,
      email: data.email ? data.email : currentuserRef.current.email,
      DateOfBirth: data.dateOfBirth
        ? data.dateOfBirth
        : currentuserRef.current.DateOfBirth,
    };

    console.log (userUpdated);
    setUserUpdated (userUpdated);
  };

  const submit = () => {
    if (
      !bcrypt.compareSync (currentPassword, currentuserRef.current.password)
    ) {
      alert ('Incorrect password , try again');
    } else {
      axios
        .put (urlupdate + currentuserRef.current._id, userUpdated)
        .then (response => {
          console.log('this is reponse data');
          console.log (response.data);
          delete response.data.password;
          console.log('this is reponse data apres suupp');
          console.log(response.data);
          localStorage.setItem('user', JSON.stringify(response.data));
        })
        .catch (error => {
          console.log (error);
        });

      navigate ('/profile');
    }
  };
  // Schema validation
  const schema = yup.object ().shape ({
    //FullName validation
    fullName: yup.string ().matches (/^[a-zA-Z\s]*$/, {
      message: 'Please enter a valid full name',
      excludeEmptyString: true,
    }),
    //dateOfBirth validation
    dateOfBirth: yup
      .date ()
      .required ()
      .nullable ()
      .transform (v => (v instanceof Date && !isNaN (v) ? v : null))
      .max (
        moment ().subtract (18, 'years').toDate (),
        'You must be at least 18 years old'
      )
      .min (
        moment ().subtract (120, 'years').toDate (),
        'You must enter a valid date of birth'
      ),
    //email validation
    email: yup.string ().email ('Please enter a valid email address '),
  });

  //errors is an object contains each of the fields in the form and their errors
  const {register, handleSubmit, formState: {errors}, setError} = useForm ({
    resolver: yupResolver (schema),
  });

  return (
    <div>
      <CusmNav />
      <div className="posBlock row justify-content-center mt-12">
        <div className="col-lg-5 text-center">

          <div className="card mt-5">
            <div className="card-body py-5 px-lg-5">
              {/* <div>
                <img src="https://img.icons8.com/?size=1x&id=nky7vXmUuw5J&format=png" />
              </div> */}
              <h3 className=" fw-normal text-dark text-black mt-4">
                Edit Account
              </h3>
              <p className="text-black mt-4 mb-1">
                {/* Please enter your password  to confirm */}
              </p>
              {/* <label className='label1 lead h2'>Password</label> */}
              {(!isConfirmClicked || returned)
                ? <form onSubmit={handleSubmit (onSubmit)}>
                    <div className="row mr-4">

                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="username"
                            className="form-control form-control-lg"
                            {...register ('fullName', {
                              defaultValue: currentuserRef.current.name,
                            })}
                            defaultValue={username}
                            autoComplete="fullname" /* defaultValue={currentuserRef.current.name} */
                          />
                          <label className="form-label" htmlFor="username">
                            {' '}
                            username
                            {' '}
                            <span style={{color: 'red'}}> * </span>
                          </label>
                          <div className="error-container">
                            {errors.fullName &&
                              <span className="error-message">
                                {errors.fullName.message}
                              </span>}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <input
                            type="Date"
                            id="form3Example2"
                            className="form-control form-control-lg"
                            {...register ('dateOfBirth', {
                              defaultValue: currentuserRef.current.dateOfBirth,
                            })}
                            defaultValue={date}
                          />
                          <label className="form-label" htmlFor="form3Example2">
                            {' '}
                            Date Of Birth
                            {' '}
                            <span style={{color: 'red'}}> * </span>
                            {' '}
                          </label>
                          <div className="error-container">
                            {errors.dateOfBirth &&
                              <span className="error-message">
                                {errors.dateOfBirth.message}
                              </span>}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <div className="form-outline">
                        <input
                          type="email"
                          id="form3Example3"
                          className="form-control"
                          name="email"
                          {...register ('email', {
                            defaultValue: currentuserRef.current.email,
                          })}
                          /* defaultValue={currentuserRef.current.email} */
                          autoComplete="email"
                          defaultValue={email}
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          Email address <span style={{color: 'red'}}> * </span>
                        </label>
                        <div className="error-container">
                          {errors.email &&
                            <span className="error-message">
                              {errors.email.message}
                            </span>}
                        </div>
                      </div>
                    </div>

                    <div
                      className="buttonSideBySide"
                      style={{marginLeft: '20px'}}
                    >
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
                        confim
                      </button>
                    </div>
                  </form>
                : <div className="">

                    <p className="text-black mt-4 mb-1">
                      Please enter your password  to confirm
                    </p>
                    <br />
                    <input
                      className="lead input1 form-control form-control-lg"
                      /*   value={password}
              onChange={e => {
                setPassword (e.target.value);
              }} */
                      onChange={e => {
                        setCurrentPassword (e.target.value);
                      }}
                      type="password"
                      placeholder="password"
                    />
                    <div
                      className="buttonSideBySide"
                      style={{marginLeft: '100px'}}
                    >
                      <button
                        onClick={handleReturn}
                        className=" btn btn-cancel btn-lg  hover-lift-light mt-4"
                      >
                        return{' '}
                      </button>
                      <button
                        /*      onClick={disactivateAccount} */
                        className=" btn btn-lg  hover-lift-light mt-4"
                        style={{backgroundColor: '#3aaf85'}}
                        onClick={submit}
                      >
                        confirm
                      </button>
                    </div>
                  </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
