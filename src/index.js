import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"; //always put before CSS imports
import './css/index.css';
// import App from './Css/App.css';
import App from './frontend/components/App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  
  </React.StrictMode>
);



