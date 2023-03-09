import { Fragment } from 'react';
import './style/App.css';
import Home from './components/home';
import NavBar from './components/shared/NavBar';

function App() {
  return (
    <Fragment>
      <div className="body_wrap">
        <div className="page_wrap">
          <Home />
          {/* <NavBar></NavBar> */}
        </div>
      </div>

    </Fragment>



  );
}

export default App;
