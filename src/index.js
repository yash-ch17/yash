/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();*/



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ReactDOM.render(
// <React.Fragment>
// <h1>List of Top Netflix Movies</h1>
// <p>Here are some of our top picks:</p>
// <ol>
//   <li>Stranger Things</li>
//   <li>Money heist</li>
//   <li>Dark</li>
//   <li>Kota Factory</li>
//   <li>Delhi Crime</li>
// </ol>
// </React.Fragment>
// ,document.getElementById('root')
// );

 //other than DIV we can use square bracket of arrays ([,]) iss tarike se in version 16.
  
 const date=new Date().toLocaleDateString();
 const time=new Date().toLocaleTimeString();

 ReactDOM.render(
  <React.Fragment>
    <h1 className="heading">Hello My name is yash</h1>
    <p>Current date is ={date} </p>
    <p>Current Time is ={time} </p>
  
    </React.Fragment>,
  document.getElementById('root')
 );
 


