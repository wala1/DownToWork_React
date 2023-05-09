import "./components/signIn/SignIn";
import "./App.css";
import SignIn from "./components/signIn/SignIn";
import Home from "./components/home";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React from 'react';

import './components/signIn/SignIn';
import './App.css';
import SignIn from './components/signIn/SignIn';
import Home from './components/home';
import Main from './components/Main';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
// import Dashboard from './components/Dashboard';
import ForgetPassword from "./components/user/forgetPassword";
import ResetPassword from "./components/user/resetPassword";
import NewSubmit from "./components/user/newSubmit";
import Cards from "./components/games/Cards";
// import Login from "../src/components/login";
/* import Profile from '../src/components/profile/profile'; */
// import signup from './components/signUp/SingUp'
import { EditAccount } from "./components/AccountManagement/EditAccount";
import SignUp2 from "./components/signUp/SignUp2";
import ChangePassword from "./components/user/changePassword";
import DeleteAccount from "../src/components/user/deleteAccount";
import DesactivateAccount from "./components/AccountManagement/DesactivateAccount";

// here my import
import LevelTest from "../src/components/test/levelTest";
import Diagnostic from "../src/components/test/diagnostic";
import Specialist from "../src/components/test/specialist";
import Quizzes from "../src/components/test/quizzes";
import Trial from "./components/test/Trial";
import ManageTest from "./components/test/admin/manageTest";
import ArrayTest from "./components/test/admin/arrayTest";
import UpdateTest from "./components/test/admin/UpdateTest";
import UpdateQuiz from "./components/test/admin/UpdateQuiz";
import UpdateQuestion from "./components/test/admin/UpdateQuestion";
import JoinRoom from './onboard/joinroom';
import { ColorContext } from './context/colorcontext';
import Onboard from './onboard/onboard';
import JoinGame from './onboard/joingame';
import ChessGame from './components/games/chess/ui/chessgame';
// here my import
// here my import 

// import ActivationPage from './components/signUp/ActivationPage';
//  import Products from './components/Shop/Products';
// import ProductPage from './components/Shop/ProductPage';
// import Cart from './components/Shop/Cart';
// import AddProduct from './components/Shop/AddProduct';
// import {Provider} from 'react-redux';
// import store from './redux/store';
// import SalesDashboard from './components/BusinessDashboard/SalesDashboard';
// import Dashboard from './components/Dashboard/MainDash';
// import Joyride from 'react-joyride';
// import { Steps } from "./components/Shop/steps"
// import Success from './components/Shop/Success';
// import Fail from './components/Shop/Fail';
// import Topics from './components/Courses/topics';
// import Profile from './components/ProfileManagement/Profile';
// import Side from './components/ProfileManagement/Side';
// import Courses from './components/Courses/courses';
// import MyProducts from './components/Shop/MyProducts';
// import ChatGPT from './components/chat/ChatGpt';
// import Test from './components/Courses/test';
// import TopicsList from './components/Courses/Admin/TopicsList';
// import Form from './components/Courses/Admin/Form';
// import UpdateForm from './components/Courses/Admin/UpdateForm';
// import CoursesList from './components/Courses/Admin/CoursesList';
// import FormAdd from './components/Courses/Admin/FormAdd';
// import GameList from './components/Courses/GameList';
// import Tic from './components/games/TicTac/Tic';
// import Post from './components/ProfileManagement/Post';
// import Members from './components/ProfileManagement/Members';
// import ChangePwd from './components/AccountManagement/ChangePwd';
// import Edit from './components/AccountManagement/Edit';
// import Feed from './components/ProfileManagement/Feed';

import ActivationPage from "./components/signUp/ActivationPage";
import Products from "./components/Shop/Products";
import ProductPage from "./components/Shop/ProductPage";
import Cart from "./components/Shop/Cart";
import AddProduct from "./components/Shop/AddProduct";
import { Provider } from "react-redux";
import store from "./redux/store";
import SalesDashboard from "./components/BusinessDashboard/SalesDashboard";
import Dashboard from "./components/Dashboard/MainDash";
import Joyride from "react-joyride";
import { Steps } from "./components/Shop/steps";
import Success from "./components/Shop/Success";
import Fail from "./components/Shop/Fail";
import Topics from "./components/Courses/topics";
import Profile from "./components/ProfileManagement/Profile";
import Side from "./components/ProfileManagement/Side";
import Courses from "./components/Courses/courses";
import MyProducts from "./components/Shop/MyProducts";
import ChatGPT from "./components/chat/ChatGpt";
import Test from "./components/Courses/test";
import TopicsList from "./components/Courses/Admin/TopicsList";
import Form from "./components/Courses/Admin/Form";
import UpdateForm from "./components/Courses/Admin/UpdateForm";
import CoursesList from "./components/Courses/Admin/CoursesList";
import FormAdd from "./components/Courses/Admin/FormAdd";
import GameList from "./components/Courses/GameList";
import Tic from "./components/games/TicTac/Tic";
import Post from "./components/ProfileManagement/Post";
import Members from "./components/ProfileManagement/Members";
import ChangePwd from "./components/AccountManagement/ChangePwd";
import Edit from "./components/AccountManagement/Edit";
import Feed from './components/ProfileManagement/Feed';


import Joyride from 'react-joyride';
import { Steps } from "./components/Shop/steps"
import Success from './components/Shop/Success';
import Fail from './components/Shop/Fail';
import Topics from './components/Courses/topics';
import Courses from './components/Courses/courses';
import UserProfile from './components/ProfileManagement/profileTest';
import Team from './components/ProfileManagement/Team';
import Beam from './components/ProfileManagement/Beam';
import Test from './components/Courses/test';
import TopicsList from './components/Courses/Admin/TopicsList';
import Form from './components/Courses/Admin/Form';
import UpdateForm from './components/Courses/Admin/UpdateForm';
import CoursesList from './components/Courses/Admin/CoursesList';
import FormAdd from './components/Courses/Admin/FormAdd';
import GameList from './components/Courses/GameList';
import Tic from './components/games/TicTac/Tic';
import FileUpload from './components/FileUpload';
import Videos from './components/Courses/videos';
import VideoList from './components/Courses/Admin/videoList';
import VideoAdd from './components/Courses/Admin/videoAdd';
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


function App () {
   const [didRedirect, setDidRedirect] = React.useState(false)

  const playerDidRedirect = React.useCallback(() => {
    setDidRedirect(true)
  }, [])

  const playerDidNotRedirect = React.useCallback(() => {
    setDidRedirect(false)
  }, [])

  const [userName, setUserName] = React.useState('')
  return (
    <ColorContext.Provider value = {{didRedirect: didRedirect, playerDidRedirect: playerDidRedirect, playerDidNotRedirect: playerDidNotRedirect}}>
    <Provider store={store}>
      <BrowserRouter>
        <Joyride
          continuou
          hideCloseButton
          scrollToFirstStep
          showProgress
          showSkipButton
          steps={Steps}
        />
        <Routes>
          <Route path="/chat/*" element={<ChatGPT />} />
          {/* chess */}
          
                <Route path="/join-game" element={<Onboard setUserName = {setUserName} />} />
              <Route path = "/game/:gameid" element={didRedirect ? 
               <React.Fragment>
                     <JoinGame userName = {userName} isCreator = {true} />
                     <ChessGame myUserName = {userName} />
               </React.Fragment> 
               :
               <JoinRoom />}/>
         {/* <Route path = "/join-game" >
            <Onboard setUserName = {setUserName}/>
          </Route>
          <Route path = "/game/:gameid" exact>
             {didRedirect ? 
               <React.Fragment>
                     <JoinGame userName = {userName} isCreator = {true} />
                     <ChessGame myUserName = {userName} />
               </React.Fragment> 
               :
               <JoinRoom />}
           </Route>
           <Navigate to = "/" /> */}
          {/* /*chess */ }
          <Route path="/upload" element={<FileUpload/>}></Route>
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/productPage/:id" element={<ProductPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/side" element={<Side />} />
          <Route path="/desac" element={<DesactivateAccount />} />
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/confirm/:activationCode" element={<ActivationPage />} />
          {/* <Route path="/signup2" element={<SignUp2 />} ></Route> */}
          {/* <Route path="/signup" Component={signup}></Route> */}
          {/* <Route path="/signIn" element={<SignIn />}></Route> */}
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/signIn" element={<SignIn />} />
          {/* <Route path="/signup" component={signup}></Route> */}
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/new-submit" element={<NewSubmit />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/test" element={<LevelTest />} />
          <Route path="/game" element={<Cards />}></Route>
          <Route path="/p" element={<Post />}></Route>
          <Route path="/feed" element={<Feed/>}></Route>

          <Route path="/trial" element={<Trial />} />

          <Route path="/Profile" element={<Profile />} />
          <Route path="profile/:id" element={<Profile />}></Route>
          <Route path="p" element={<Post />}></Route>
          <Route path="team" element={<Members />}></Route>
          <Route path="changePwd" element={<ChangePwd />}></Route>
          <Route path="edit" element={<Edit />}></Route>

          <Route path="/" element={<Main />}>
          <Route path="/videos/:name" element={<Videos/>}></Route>            

            <Route path="" element={<Home />} />
            <Route path="/memoryGame" element={<Cards />}></Route>
            <Route path="/ticGame" element={<Tic />}></Route>
            </Route>

            {/* <Route path="/gamesList" element={<Jeux/>}></Route> */}

            <Route path="/test1" element={<Test />} />

            <Route path="/" element={<Main />}>
              <Route path="" element={<Home />} />
              <Route path="/diagnostic" element={<Diagnostic />} />
              <Route path="/diagnostic/quizzes/:id" element={<Quizzes />} />
              <Route path="/gamesList" element={<GameList />} />
              <Route path="/specialist" element={<Specialist />} />
              <Route path="/business" element={<SalesDashboard />} />
              <Route path="/success" element={<Success />} />
              <Route path="/fail" element={<Fail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/myProducts" element={<MyProducts />} />

              <Route path="/topics">
                <Route index element={<Topics />}></Route>
                <Route path="courses/:name" element={<Courses />}></Route>
              </Route>
              <Route path="/topics">
                <Route index element={<Topics />}></Route>
                <Route path="courses/:name" element={<Courses />}></Route>
              </Route>
            </Route>

            <Route path="/dashboard" element={<Dashboard />}>
              <Route
                path="/dashboard/orders"
                element={<SalesDashboard />}
              ></Route>
              <Route path="/dashboard/tests" element={<ManageTest />}></Route>
              <Route
                path="/dashboard/arrayTest"
                element={<ArrayTest />}
              ></Route>
              <Route
                path="/dashboard/updateTest/:id"
                element={<UpdateTest />}
              ></Route>
              <Route
                path="/dashboard/updateQuiz/:id"
                element={<UpdateQuiz />}
              ></Route>
              <Route
                path="/dashboard/updateQuestions/:id"
                element={<UpdateQuestion />}
              ></Route>
              <Route path="/dashboard/topics" element={<TopicsList />} />
              <Route path="/dashboard/topics/add" element={<Form />} />
              <Route
                path="/dashboard/topics/update/:id"
                element={<UpdateForm />}
              />
              <Route path="/dashboard/courses" element={<CoursesList />} />
              <Route path="/dashboard/courses/add" element={<FormAdd />} />
            </Route>
         
        
      
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/orders" element={<SalesDashboard />}></Route>
          <Route path="/dashboard/tests" element={<ManageTest/>}></Route>
          <Route path="/dashboard/arrayTest" element={<ArrayTest/>}></Route>
          <Route path="/dashboard/updateTest/:id" element={<UpdateTest/>}></Route>
          <Route path="/dashboard/topics" element={<TopicsList/>}/>
          <Route path="/dashboard/topics/add" element={<Form/>}/>
          <Route path="/dashboard/topics/update/:id" element={<UpdateForm/>}/>
          <Route path="/dashboard/courses" element={<CoursesList/>}/>
          <Route path="/dashboard/courses/add" element={<FormAdd/>}/>
          <Route path="/dashboard/videos" element={<VideoList/>}/>
          <Route path="/dashboard/videos/add" element={<VideoAdd/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    </ColorContext.Provider>
  );
}
}
export default App 
