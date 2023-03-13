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
import Login from "../src/components/login";
import Profile from "../src/components/profile/profile";

function App() {
  

  return (
    // <div className="App">
    //       <Home/>

    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/signIn" element={<SignIn/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/forget-password" element={<ForgetPassword/>}></Route>
        <Route path="/reset-password" element={<ResetPassword/>}></Route>
        <Route path="/new-submit" element={<NewSubmit/>}></Route>

        <Route path="/" element={<Main/>}>
              <Route path="" element={<Home/>}></Route>
              
        </Route>  
        <Route path="/dashboard" element={<Dashboard/>}></Route>    
      </Routes>
    </BrowserRouter>
  );
}

export default App;