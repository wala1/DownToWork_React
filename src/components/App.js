import { Fragment } from 'react';
import '../style/App.css';
import Home from './home';
import NavBar from './NavBar';

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
