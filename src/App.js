import './components/signIn/SignIn'
import './App.css';
import SignIn from './components/signIn/SignIn';
import Home from './components/home';
import Main from './components/Main';
import {BrowserRouter , Route,Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
<<<<<<< HEAD
    <Fragment>
      <div className="body_wrap">
        <div className="page_wrap">
          <Home />
          {/* <NavBar></NavBar> */}
      {/*     <NavBar/> */}
        </div>
      </div>

    </Fragment>


=======
    // <div className="App">
    //       <Home/>
>>>>>>> taher

    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/signIn" element={<SignIn/>}></Route>
        <Route path="/" element={<Main/>}>
              <Route path="" element={<Home/>}></Route>
        </Route>  
        <Route path="/dashboard" element={<Dashboard/>}></Route>    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
