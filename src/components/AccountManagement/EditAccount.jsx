import NavBar from "../shared/NavBar"
import { React, useState , useEffect , useRef} from 'react'
import './EditAccount.css'
//import the react-hook-form library
import {useForm , useController, Controller  } from "react-hook-form"
import { useHistory } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';
//import the validation library yup 
import * as yup from 'yup'
import axios from 'axios';
import {yupResolver} from '@hookform/resolvers/yup'
import moment from "moment";
import { Placeholder } from "react-bootstrap";
import bcrypt from "bcryptjs-react";



export const EditAccount = () => {


  //*********************************** Navigation******************************************** 
  
  const navigate = useNavigate();
  const  redirectToHome = () => { navigate('/main') ; }

   //********************************disable account *****************************************

   const logout = () => {
   localStorage.clear();
    // Rediriger l'utilisateur vers la page de connexion
   navigate('/signIn') ; 
   };

   const urldesable = 'http://localhost:3001/users/desactivate/';
   const disactivateAccount = async () => {
    try {
      // Cela désactive le compte utilisateur cotè serveur
      await axios.put(urldesable + currentuserRef.current._id);
      logout(); // appeler la fonction logout pour déconnecter automatiquement l'utilisateur
    } catch (error) {
      console.error(error);
    }
  };

  //******************************** useEffect configuration ***********************************

    const url = 'http://localhost:3001/users/getById/';
    const urlupdate = 'http://localhost:3001/users/update/';
    // var currentuser1 = {name : "Ons Diweni"  , email:"Ons.diweni@esprit.tn" , birthdate: new Date('1990-01-01')}
    const currentuserRef = useRef({});

    useEffect(() => {
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);
    axios.get(url + user._id).then(response => {
    const data = JSON.stringify(response.data);
    var parsedData  = JSON.parse(data);
    console.log(parsedData)
    currentuserRef.current = parsedData;
    //    console.log(currentuser)
    }).catch(error => {
      console.log(error);
    });

  }, []);


    var modal = document.querySelector(".modal");
    
 //*******************************  onSubmit  **************************************** */
    const onSubmit = async (data) => {  
       // console.log(data.currentpassword)
       //console.log(typeof parsedData.password);
      //const isPasswordCorrect = checkCurrentPassword(data.currentpassword); // checkCurrentPassword est une fonction qui vérifie si le currentpassword entré correspond au mot de passe actuel de l'utilisateur
      //console.log (isPasswordCorrect)
     //const userUpdated  = {"name" : ""   , "email" : "" , "password" : "", "DateOfBirth" : "" } 
     if (data.currentpassword)

        {
        if (!bcrypt.compareSync(data.currentpassword, currentuserRef.current.password)) {
          //alert("Incorrect current password. Please try again.");
          modal.style.display = "block";
          setTimeout(function() {
            modal.style.display = "none";
          }, 1500);
          
        /*   event.preventDefault() //used to prevent the form from being submitted if the current password was incorrect.
         */

          return;
        } else 
        
        {console.log('yesss correct mdp successss') ; 

        /* const date = data.dateOfBirth;
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const reformattedDate = day + "-" + month + "-" + year; */
        
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(data.newpassword, salt)
        
        const userUpdated = {
          name: (data.fullName)? data.fullName : currentuserRef.current.name,
          email: (data.email)? data.email : currentuserRef.current.email,
          password: hashedPassword,
          DateOfBirth: (data.dateOfBirth)? data.dateOfBirth : currentuserRef.current.DateOfBirth
        };
        
        console.log(userUpdated);
        axios.put(urlupdate + currentuserRef.current._id , userUpdated).then(response => {
          console.log(response.data)
          }).catch(error => {
            console.log(error);
          });
          
        } 
      }
      else {console.log(data)

        const userUpdated = {
          name: (data.fullName)? data.fullName : currentuserRef.current.name,
          email: (data.email)? data.email : currentuserRef.current.email,
          DateOfBirth: (data.dateOfBirth)? data.dateOfBirth : currentuserRef.current.DateOfBirth
        };
        
        console.log(userUpdated);
        axios.put(urlupdate + currentuserRef.current._id , userUpdated).then(response => {
          console.log(response.data)
          }).catch(error => {
            console.log(error);
          });
      
       }

      }
      
      //************************************Schema validation************************************* 
      const schema = yup.object().shape({
        //FullName validation
         fullName :  yup
          .string()
          .matches(/^[a-zA-Z\s]*$/, { message: 'Please enter a valid full name', excludeEmptyString: true }),
             //dateOfBirth validation
         dateOfBirth:yup.date().required()
         .nullable()
         .transform(v => (v instanceof Date && !isNaN(v) ? v : null)).max(moment().subtract(18, "years").toDate(), "You must be at least 18 years old")
         .min(moment().subtract(120, "years").toDate(), "You must enter a valid date of birth"),
         //email validation
         email : yup.string().email('Please enter a valid email address '),
         //newpassword validation
         newpassword : yup.string().min(8 , 'Your password should be at least 8 characters long').max(100)
        /* .notOneOf([yup.ref("currentpassword"), null] ,"Please choose a new password that you have not used before") */, 
         //currentpassword validation
        currentpassword: yup.string()
        /* .when('newpassword', (newpassword, field) =>
          newpassword ? field.required('Current Password is required to confirm you new password') : field
          ) */, 
         //confirmpassword validation
        confirmpassword:yup.string().oneOf([yup.ref("newpassword") , null] , "Passwords do not match"), 
      /*    currentpassword : yup.string() */ 
      
      })
      
  
     //errors is an object contains each of the fields in the form and their errors
     const {register , handleSubmit , formState : {errors} , setError  } = useForm ({resolver : yupResolver(schema) });

    

    //*******************************For the part of password updating ******************** 

    const [isOpen, setIsOpen] = useState(false);
    const handleOpenSecurite = () => {  setIsOpen(true);}

    //Toggle management 
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => { setShowPassword(true);}
    const [showPassword1, setShowPassword1] = useState(false);
    const toggleShowPassword1 = () => { setShowPassword1(true);}
    const [showPassword2, setShowPassword2] = useState(false);
    const toggleShowPassword2 = () => { setShowPassword2(true);}

  //*******************************  Ui   ***************************************************/

    return (

<div>
        {/*   <NavBar/>  */}
        <section className="text-center" >
         
          <div className="p-5 bg-image" style={{backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')", height: '300px'}}> </div>
          <div className="card mx-8 mx-md-5 shadow-5-strong"  style={{ marginTop: '50px' , background: 'hsla(0, 0%, 100%, 2.8)',backdropFilter: 'blur(100px)'}}>
            <div className="card-body py-5 px-md-5">
        
              <div className="row d-flex justify-content-center">
                <div className="col-lg-18">
                  <h2 className="fw-bold mb-5">Edit your profile</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <br/>
                    <div className="row mr-4">
                     
                      <div className="col-md-12 mb-4" >
                        <div className="form-outline">
                          <input type="text" id="form3Example1" className="form-control form-control-lg"  {...register("fullName" , { defaultValue: currentuserRef.current.name })} autoComplete="fullname" /* defaultValue={currentuserRef.current.name} */ />
                          <label className="form-label" htmlFor="form3Example1"> username *</label>
                          <div className="error-container">
                          {errors.fullName && <span className="error-message">{errors.fullName.message}</span>}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <input type="date" id="form3Example2" className="form-control form-control-lg"  {...register("dateOfBirth" , { defaultValue: currentuserRef.current.DateOfBirth })} autoComplete="dateofbirth" />
                          <label className="form-label" htmlFor="form3Example2"> Date Of Birth * </label>
                          <div className="error-container">
                          {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth.message}</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-outline mb-4 w-50">
                      <input type="email" id="form3Example3" className="form-control"  name="email" {...register("email" , { defaultValue: currentuserRef.current.email })} autoComplete="email" />
                      <label className="form-label" htmlFor="form3Example3">Email address *</label>
                      <div className="error-container">
                          {errors.email && <span className="error-message">{errors.email.message}</span>}
                          </div>
                    </div>
                  
					<div id="Securite" className="col-xxl-6">
                 {/*   <button  type="button" className=" px-10 py-2 " onClick={disactivateAccount}> desactivate account  </button> */}
                    <button  type="button" className=" px-10 py-2 " onClick={handleOpenSecurite}> Change Password  </button>
                       
						 { isOpen && (  <div className="bg-secondary-soft px-4 py-5 rounded">
							<div className="row g-3">
								{/* <h4 class="my-4">Change Password</h4> */}
								<div className="col-md-6">
									<label htmlFor="exampleInputPassword1" className="form-label"> Old password *</label>
									<div className="password-container">
                                    <input type={showPassword ? 'text' : 'password'} className="form-control" id="exampleInputPassword1"  {...register("currentpassword")} name="currentpassword" autoComplete="current-password" />
                                    <span className="password-toggle-icon"  id="toggle-password" onClick={toggleShowPassword}>👁️‍🗨️</span>
                                   </div>
                                   <div className="error-container">
                                   {errors.currentpassword && <span className="error-message">{errors.currentpassword.message}</span>}
                                  </div>
								</div>
							
								<div className="col-md-6">
									<label htmlFor="exampleInputPassword2" className="form-label"> New password *</label>
									<div className="password-container">
                                    <input type={showPassword1 ? 'text' : 'password'} className="form-control"  {...register("newpassword")} id="newpassword" name="newpassword" autoComplete="new-password"/>
                                    <span className="password-toggle-icon" id="toggle-password" onClick={toggleShowPassword1}>👁️‍🗨️</span>
                                    </div>
                                   <div className="error-container">
                                   {errors.newpassword && <span className="error-message">{errors.newpassword.message}</span>}
                                  </div>
                                   
								</div>
								
								<div className="col-md-12"> 
									<label htmlFor="exampleInputPassword3" className="form-label"> Confirm Password *</label>
									<div className="password-container">
                                    <input type={showPassword2 ? 'text' : 'password'} className="form-control"  {...register("confirmpassword")} id="confirmpassword" name="confirmpassword" autoComplete="confirm-password"/>
                                    <span className="password-toggle-icon " onClick={toggleShowPassword2}> 👁️‍🗨️ </span>
                                    </div>
                                    <div className="error-container">
                                    {errors.confirmpassword && <span className="error-message">{errors.confirmpassword.message}</span>}
                                    </div>
								</div>
							</div>
						</div> )}
					</div>
          <br/><br/>
                    <div className="form-check d-flex justify-content-center mb-6">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" ,  gap: "5px" }} >
					<button type="button" className="px-2 py-2 btn-jaune " onClick={redirectToHome}>Back to profile</button> 
					<button type="submit" className="px-2 py-2 btn-primary ">Confirm update</button>
{/*           <button type="button" className="px-2 py-2 btn-danger " onClick={disactivateAccount}>desactivate profile</button>
 */}         {/*  <button type="button" className="btn btn-jaune btn-lg" onClick={disactivateAccount}>desactivate profile</button> */}
          
				    </div>
            <div className="modal">
            <div className="modal-content">
             <p>Incorrect password !</p>
             <button id="reset-password-btn"  >Please try again</button>
           </div>
            </div>
            </div>
                   
                </form>
                </div>
              </div>
            </div>
         
          </div>
         
        </section>
        </div>
      




    )
}

