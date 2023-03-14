import './components/signIn/SignIn'
import './App.css';
import SignIn from './components/signIn/SignIn';
import Home from './components/home';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ForgetPassword from './components/user/forgetPassword';
import ResetPassword from './components/user/resetPassword';
import NewSubmit from './components/user/newSubmit';
import Login from "../src/components/login";
import Profile from "../src/components/profile/profile";
import signup from './components/signUp/SingUp'
import { EditAccount } from './components/AccountManagement/EditAccount';
import SignUp2 from './components/signUp/SignUp2';
import ChangePassword from './components/user/changePassword';



function App() {
  

  return (
    // <div className="App">
    //       <Home/>

    // </div>
   
   <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile/>}></Route>
        {/* <Route path="/signIn" element={<SignIn />}></Route> */}
        <Route path="/Edit" element={<EditAccount/>} ></Route>
        <Route path="/signup2" element={<SignUp2 />} ></Route>
        <Route path="/signup" Component={signup}></Route>
        <Route path="/forget-password" element={<ForgetPassword />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="/new-submit" element={<NewSubmit />}></Route>
        <Route path="/change-password" element={<ChangePassword />}></Route>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />}></Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter> 




  );
}

export default App;