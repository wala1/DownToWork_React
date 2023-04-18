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
import Cards from './components/games/Cards';
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
import Products from './components/Shop/Products';
import ProductPage from './components/Shop/ProductPage';
import Cart from './components/Shop/Cart';
import AddProduct from './components/Shop/AddProduct';
import {Provider} from "react-redux";
import store from "./redux/store";
import SalesDashboard from './components/BusinessDashboard/SalesDashboard';
import Dashboard from './components/Dashboard/MainDash';
import Success from './components/Shop/Success';
import Fail from './components/Shop/Fail';

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
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
      <Route path="/addProduct" element={<AddProduct/>}></Route>
      <Route path="/productPage" element={<ProductPage/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        {/* <Route path="/profile" element={<Profile />}></Route> */}
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
        <Route path="/delete-account" element={<DeleteAccount/>}></Route>
        <Route path="/game" element={<Cards/>}></Route>
        <Route path="/delete-account" element={<DeleteAccount />}></Route>
        <Route path="/test" element={<LevelTest />}></Route>

        <Route path="/" element={<Main />}>
          
          <Route path="" element={<Home />}></Route>
          
          <Route path="/diagnostic/*" element={<Diagnostic />}></Route>
          <Route path="/diagnostic/quizzes/:id" element={<Quizzes />}></Route>
          <Route path="/specialist" element={<Specialist />}></Route>

          <Route path="/business" element={<SalesDashboard/>}></Route>
          <Route path="/success" element={<Success />} />
          <Route path="/fail" element={<Fail />} />
          <Route path="/cart" element={<Cart/>}></Route>


        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/orders" element={<SalesDashboard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
