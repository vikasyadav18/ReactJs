import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../App';
import reportWebVitals from '../reportWebVitals';



ReactDOM.render(
  // <React.StrictMode>
  //   <App /> 
  // </React.StrictMode>
  
  //1. ------ using div -----
  
  // <div>
  // <h1>Hello world vikas!!yadav ##</h1>
  // <p>helloooooooo</p>
  // </div>

  
  //2.------- this will consume less memory than div --------

//   <React.Fragment>
//    <h1>Hello world vikas!!yadav ##</h1>
//    <p>helloooooooo</p>
//  </React.Fragment>

// 3. ----using array [element , element] --------

//  [
//    <h1>Hello world vikas!!yadav ##</h1>,
//    <p>helloooooooo</p>
  
//    ]
// 3. -------using <> </> ' tick sugar form '--------
<>
  <h1>VIKAS TECHNICAL </h1>
  <p>list of netflix series</p>
  <ol>
    <li>DARK</li>
    <li>STRANGER THINGS</li>
    <li>CHERNOBYL</li>
    <li>SWEET HOME **</li>
    <li>etc. </li>
  </ol>

</>

  ,
/*#__PURE__*/
// React.createElement(
//   "h1", null, "Hello world vikas!!yadav");

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
