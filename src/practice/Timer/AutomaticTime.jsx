import React, { useState } from 'react';
import './Timer.css';


var today=new Date().toLocaleTimeString();
var Da=new Date().toLocaleDateString();

const AutomaticTime=()=>
{
   const [time,fucntionName]=useState(today);
   const [date,DateName]=useState(Da);

   const UpdateTime=()=>
   {
    today=new Date().toLocaleTimeString();

    var Da=new Date().toLocaleDateString();

    fucntionName(today); 
    DateName(Da);

   } ;
   

   setInterval(UpdateTime,1000);
    return(
            <h1>{time}{date}</h1>
    );
}

export default AutomaticTime;
