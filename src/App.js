import { Fragment } from 'react';
import './style/App.css';
import Nav from "../src/components/nav";
import Login from "../src/components/login";
import Signup from "../src/components/signup";
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Fragment>
      <div className="body_wrap">
        <div className="page_wrap">
        <Nav/>
        <Routes>
          <Route path="/account/login" element={<Login/>}/>
          <Route path="/account/signup" element={<Signup/>}/>
        </Routes>
          {/* <Home /> */}
          {/* <NavBar></NavBar> */}
      {/*     <NavBar/> */}
        </div>
      </div>

    </Fragment>



  );
}

export default App;
