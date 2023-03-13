import './components/signIn/SignIn'
import './App.css';
import SignIn from './components/signIn/SignIn';
import Home from './components/home';
import Main from './components/Main';
import {BrowserRouter , Route,Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { EditAccount } from './components/AccountManagement/EditAccount';

function App() {
  return (
    // <div className="App">
    //       <Home/>

    // </div>
    <BrowserRouter>
      <Routes>
       {/*  <Route path="/home" element={<Home/>}></Route> */}
        <Route path="/signIn" element={<SignIn/>}></Route>
        <Route path="/" element={<Main/>}>
        <Route path="home" element={<Home/>}></Route>
        </Route>    
        <Route path="/Edit" element={<EditAccount/>}></Route>    
        <Route path="/dashboard" element={<Dashboard/>}></Route>    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
