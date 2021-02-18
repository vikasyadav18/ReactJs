import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';


let today=new Date();
let time=new Date().toLocaleTimeString();
 
//-------or-----

let hour=today.getHours();
let min=today.getMinutes();
let sec=today.getSeconds();
function ClockDate(){
return(
  <>
  <h1>Live Clock</h1>
    <h1>{`date is = ${today.toDateString()}`}</h1>         
   <h1>{`timing is = ${hour}:${min}:${sec}`}</h1>
   <h1>{`time from toLocaleTimeString(); function is : ${time}`}</h1>
    </>
);

}

export default ClockDate;

// ReactDOM.render(
// <>
//   <h1>Live Clock</h1>
//    <h1>{`date is = ${today.toDateString()}`}</h1>         
//   <h1>{`timing is = ${hour}:${min}:${sec}`}</h1>
//   <h1>{`time from toLocaleTimeString(); function is : ${time}`}</h1>
  
// </>
// ,document.getElementById('root')
// );

