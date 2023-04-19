import './components/signIn/SignIn';
import './App.css';
import SignIn from './components/signIn/SignIn';
import Home from './components/home';
import Main from './components/Main';
import { BrowserRouter, Route, Routes , Navigate } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
import ForgetPassword from './components/user/forgetPassword';
import ResetPassword from './components/user/resetPassword';
import NewSubmit from './components/user/newSubmit';
// import Login from "../src/components/login";
import Profile from "../src/components/profile/profile";
// import signup from './components/signUp/SingUp'
import { EditAccount } from './components/AccountManagement/EditAccount';
import SignUp2 from './components/signUp/SignUp2';
import ChangePassword from './components/user/changePassword';
import DeleteAccount from '../src/components/user/deleteAccount';
import DesactivateAccount from './components/AccountManagement/DesactivateAccount';
import LevelTest from '../src/components/test/levelTest';
import Diagnostic from '../src/components/test/diagnostic';
import Specialist from '../src/components/test/specialist';
import Quizzes from '../src/components/test/quizzes';
import ActivationPage from './components/signUp/ActivationPage';
import SalesDashboard from './components/BusinessDashboard/SalesDashboard';
import Dashboard from './components/Dashboard/MainDash';
import ManageTest from "./components/test/admin/manageTest";
import ArrayTest from "./components/test/admin/arrayTest";
import UpdateTest from "./components/test/admin/UpdateTest";

// function PrivateRoute({ element: Element, ...rest }) {
//   const userString = localStorage.getItem("user");
//   const user = JSON.parse(userString);

//   return (
//     <Route
//       {...rest}
//       element={
//         user ? <Navigate to="/" /> : <Element />
//       }
//     />
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile />}></Route>
        {/* <Route path="/desac" element={<DesactivateAccount/>}></Route> */}
        <Route path="/desac" element={<DesactivateAccount/>}></Route>
        <Route path="/signup2" element={<SignUp2 />} ></Route>
        <Route path="/confirm/:activationCode" element={<ActivationPage/>} ></Route>
        {/* <Route path="/signup2" element={<SignUp2 />} ></Route> */}
        {/* <Route path="/signup" Component={signup}></Route> */}
        {/* <Route path="/signIn" element={<SignIn />}></Route> */}
        <Route path="/Edit" element={<EditAccount />} ></Route>
        <Route path="/signup2" element={<SignUp2 />} ></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        {/* <Route path="/signup" component={signup}></Route> */}
        <Route path="/forget-password" element={<ForgetPassword />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="/new-submit" element={<NewSubmit />}></Route>
        <Route path="/change-password" element={<ChangePassword />}></Route>
        <Route path="/delete-account" element={<DeleteAccount />}></Route>
        <Route path="/test" element={<LevelTest />}></Route>

        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/diagnostic/*" element={<Diagnostic />}></Route>
          <Route path="/diagnostic/quizzes/:id" element={<Quizzes />}></Route>
          <Route path="/specialist" element={<Specialist />}></Route>

          <Route path="/business" element={<SalesDashboard/>}></Route>

        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/orders" element={<SalesDashboard />}></Route>
          <Route path="/dashboard/tests" element={<ManageTest/>}></Route>
          <Route path="/dashboard/arrayTest" element={<ArrayTest/>}></Route>
          <Route path="/dashboard/updateTest/:id" element={<UpdateTest/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
