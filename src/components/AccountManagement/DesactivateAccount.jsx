import {React, useState, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs-react';
import NavBar from '../shared/NavBar';
import CusmNav from '../shared/CusmNav';

function DesactivateAccount () {
  const [password, setPassword] = useState ('');

  const logout = () => {
    localStorage.clear ();
    // Rediriger l'utilisateur vers la page de connexion
    navigate ('/signup2');
  };

  const url = 'http://localhost:3001/users/getById/';
  const urldesable = 'http://localhost:3001/users/desactivate/';
  const disactivateAccount = async () => {
    try {
      if (bcrypt.compareSync (password, currentuserRef.current.password)) {
        // Cela désactive le compte utilisateur cotè serveur
        await axios.put (urldesable + currentuserRef.current._id);
        logout (); // appeler la fonction logout pour déconnecter automatiquement l'utilisateur
      } else {
        alert ('Incorrect password , try again');
      }
    } catch (error) {
      console.error (error);
    }
  };

  // var currentuser1 = {name : "Ons Diweni"  , email:"Ons.diweni@esprit.tn" , birthdate: new Date('1990-01-01')}
  const currentuserRef = useRef ({});

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

  return (
    <div>
      <CusmNav/>
    <div className="posBlock row justify-content-center mt-10">
      <div className="col-lg-5 text-center">

        <div className="card mt-5">
          <div className="card-body py-5 px-lg-5">
            <div>
              <img src="https://img.icons8.com/?size=1x&id=3f9xDzIfRaE3&format=png" />
            </div>
            <h3 className=" fw-normal text-dark text-black mt-4">
              Desactivate Account
            </h3>
            <p className="text-black mt-4 mb-1">
              Please enter your password  to confirm
            </p>

            {/* <label className='label1 lead'>OTP</label> */}
            {/* <input className="lead input1 form-control form-control-lg" value={otp}  disabled={true} type="number"  placeholder="OTP"/>  */}
            <br />
            {/* <label className='label1 lead h2'>Password</label> */}
            <input
              className="lead input1 form-control form-control-lg"
              value={password}
              onChange={e => {
                setPassword (e.target.value);
              }}
              type="password"
              placeholder="password"
            />
            <div className="buttonSideBySide">
              <button
                onClick={handleCancel}
                className=" btn btn-cancel btn-lg  hover-lift-light mt-4"
              >
                cancel{' '}
              </button>
              <button
                onClick={disactivateAccount}
                className=" btn btn-lg  hover-lift-light mt-4"
                style={{backgroundColor:'#3aaf85'}}
              >
                desactivate
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default DesactivateAccount;
