// import React from "react";
// import { render } from "react-dom";
// import "./index.css";
// import App from "./App";
// const root = document.getElementById("root");

// render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   root
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginContext from './Login/Context/LoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <LoginContext subPages ={(<App />)} />
</React.StrictMode>,
);