import { Fragment } from 'react';
import '../style/App.css';
import Home from './home';

function App() {
  return (
    <Fragment>
      <div className="body_wrap">
        <div className="page_wrap">
          <Home />
        </div>
      </div>

    </Fragment>



  );
}

export default App;
