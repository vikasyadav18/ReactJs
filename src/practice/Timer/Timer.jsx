import React, { useState } from 'react';
import './Timer.css';
var today=new Date().toLocaleTimeString();
const Timer=()=>{
    // ---------Hooks ---------
   
    //console.log(today);
const state=useState();

const [time,functionName]=useState(today);
const UpdateTime=()=>{
   
    today=new Date().toLocaleTimeString();
    functionName(today);
   
}

return(
    <>
  
    <h1 className="">{time}</h1>
    <button className="btn" onClick={UpdateTime}>refresh</button>
    
    </>
);
}

export default Timer;