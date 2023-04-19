import './components/signIn/SignIn';
import './App.css';
import SignIn from './components/signIn/SignIn';
import Home from './components/home';
import Main from './components/Main';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
// import Dashboard from './components/Dashboard';
import ForgetPassword from './components/user/forgetPassword';
import ResetPassword from './components/user/resetPassword';
import NewSubmit from './components/user/newSubmit';
import Cards from './components/games/Cards';
// import Login from "../src/components/login";
import Profile from '../src/components/profile/profile';


// import signup from './components/signUp/SingUp'
import {EditAccount} from './components/AccountManagement/EditAccount';
import SignUp2 from './components/signUp/SignUp2';
import ChangePassword from './components/user/changePassword';
import DeleteAccount from '../src/components/user/deleteAccount';
import DesactivateAccount
  from './components/AccountManagement/DesactivateAccount';
import LevelTest from '../src/components/test/levelTest';
import Diagnostic from '../src/components/test/diagnostic';
import Specialist from '../src/components/test/specialist';
import Quizzes from '../src/components/test/quizzes';
import ActivationPage from './components/signUp/ActivationPage';
// import Products from './components/Shop/Products';
import ProductPage from './components/Shop/ProductPage';
import Cart from './components/Shop/Cart';
import AddProduct from './components/Shop/AddProduct';
import {Provider} from 'react-redux';
import store from './redux/store';
import SalesDashboard from './components/BusinessDashboard/SalesDashboard';
import Dashboard from './components/Dashboard/MainDash';
import ManageTest from "./components/test/admin/manageTest";
import ArrayTest from "./components/test/admin/arrayTest";
import UpdateTest from "./components/test/admin/UpdateTest";
import Joyride from 'react-joyride';
import { Steps } from "./components/Shop/steps"
import Success from './components/Shop/Success';
import Fail from './components/Shop/Fail';
import Topics from './components/Courses/topics';
import Courses from './components/Courses/Courses';
import Profilee from './components/ProfileManagement/profile';
import UserProfile from './components/ProfileManagement/profileTest';
import Team from './components/ProfileManagement/Team';
import Beam from './components/ProfileManagement/Beam';

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

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Joyride continuou hideCloseButton scrollToFirstStep showProgress showSkipButton steps={Steps} />
        <Routes>
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/productPage/:id" element={<ProductPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/p" element={<Profilee />} />
          <Route path="/t" element={<Team/>} />
          <Route path="/b" element={<Beam/>} />
          <Route path="/pp" element={<UserProfile />} />
          {/* <Route path="/profile" element={<Profile />}></Route> */}
          {/* <Route path="/desac" element={<DesactivateAccount/>}></Route> */}
          <Route path="/desac" element={<DesactivateAccount />} />
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/confirm/:activationCode" element={<ActivationPage />} />
          {/* <Route path="/signup2" element={<SignUp2 />} ></Route> */}
          {/* <Route path="/signup" Component={signup}></Route> */}
          {/* <Route path="/signIn" element={<SignIn />}></Route> */}
          <Route path="/Edit" element={<EditAccount />} />
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/signIn" element={<SignIn />} />
          {/* <Route path="/signup" component={signup}></Route> */}
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/new-submit" element={<NewSubmit />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/test" element={<LevelTest />} />
          <Route path="/game" element={<Cards/>}></Route>

          <Route path="/" element={<Main />}>
            <Route path="" element={<Home />} />
            <Route path="/diagnostic/*" element={<Diagnostic />} />
            <Route path="/diagnostic/quizzes/:id" element={<Quizzes />} />
            <Route path="/specialist" element={<Specialist />} />

            <Route path="/business" element={<SalesDashboard />} />
            <Route path="/success" element={<Success />} />
            <Route path="/fail" element={<Fail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/topics">
            <Route index element={<Topics/>}></Route>
            <Route path="courses/:name" element={<Courses/>}></Route>
          </Route>

        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/orders" element={<SalesDashboard />}></Route>
          <Route path="/dashboard/tests" element={<ManageTest/>}></Route>
          <Route path="/dashboard/arrayTest" element={<ArrayTest/>}></Route>
          <Route path="/dashboard/updateTest/:id" element={<UpdateTest/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
