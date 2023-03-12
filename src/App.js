import { Fragment } from 'react';
import './style/App.css';
import Nav from "../src/components/nav";
import LoginWithGoogle from "../src/components/login";
import SignupWithGoogle from "../src/components/signup";
import './components/signIn/SignIn'
import './App.css';
import SignIn from './components/signIn/SignIn';
import Home from './components/home';
import Main from './components/Main';
import {BrowserRouter , Route,Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ForgetPassword from './components/user/forgetPassword';
import ResetPassword from './components/user/resetPassword';
import NewSubmit from './components/user/newSubmit';


function App() {

  return (
    // <div className="App">
    //       <Home/>

    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/signIn" element={<SignIn/>}></Route>
        <Route path="/forget-password" element={<ForgetPassword/>}></Route>
        <Route path="/reset-password" element={<ResetPassword/>}></Route>
        <Route path="/new-submit" element={<NewSubmit/>}></Route>

        <Route path="/account/login" element={<LoginWithGoogle/>}/>
        <Route path="/account/signup" element={<SignupWithGoogle/>}/>
        
        <Route path="/" element={<Main/>}>
              <Route path="" element={<Home/>}></Route>
              
        </Route>  
        <Route path="/dashboard" element={<Dashboard/>}></Route>    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
