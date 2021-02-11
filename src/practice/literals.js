import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


var name="vikas yadav";
var add="karhal";
ReactDOM.render(
<>
  <h1>{name} TECHNICAL 8+5 = {8+5} {document.write("hey ")}  </h1>
  {/* ----------- comment inside of react-----  */}
   {/* ----- without using string concatination -----  */}
  <p>{`list of netflix series ${name}`}</p>
  <p>{`list of netflix series ${name} ${add}`}</p>

  <ol>
    <li>DARK</li>
    <li>STRANGER THINGS</li>
    <li>CHERNOBYL</li>
    <li>SWEET HOME **</li>
    <li>etc. </li>
  </ol>
</>
,document.getElementById('root')
);

reportWebVitals();
