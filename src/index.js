import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./global.css"
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import {GoogleOAuthProvider} from "@react-oauth/google";
import "./global.css";
import { reducers } from "./redux/reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose} from "redux";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
    <GoogleOAuthProvider
              clientId={`1075754340245-9uddfgn78s5sult6mmcfuvugr4s4v7fh.apps.googleusercontent.com`}>
     <App />
     </GoogleOAuthProvider>
    </BrowserRouter>
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
