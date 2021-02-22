import React, { useState } from 'react';
import './Timer.css';

var today=new Date().toLocaleTimeString();
const AutomaticTime=()=>{
    
   const [time,fucntionName]=useState(today);
   const UpdateTime=()=>
   {
    today=new Date().toLocaleTimeString();
    fucntionName(today);   
   } ;
   
   setInterval(UpdateTime,1000);
    return(
            <h1>{time}</h1>
    );
}

export default AutomaticTime;
