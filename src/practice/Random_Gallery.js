import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name="Art";
const im1="https://picsum.photos/200/300";
const im2="https://picsum.photos/250";
const im3="https://picsum.photos/260";
const im4="https://picsum.photos/269";

const PicsumLink="https://picsum.photos/";
ReactDOM.render(
<>
  <h1 contentEditable="true" >Random Lorem Picsum Gallery {name}</h1>
  <a href={PicsumLink}  target="_blank" >
  <img src={im1} alt="picsum Photo"/>
  <img src={im2} />
  <img src={im3} />
  <img src={im4} />
  
  <img src={im2} />
  <img src={im1} />
  <img src={im4} />
  <img src={im3} />
  </a>
</>
,document.getElementById('root')
);

