import React, { useState } from 'react';
import './Counter.css';
const Counter=()=>{
    
    const state=useState();
    //console.log(state);
    // using deStructuring concept---------
const [a,functionName]=useState(300);
    
     const Increase=()=>{

            functionName(a-1);
     };

    return(
        <>
        <h1 className="counter">{a}</h1>
        <img className="img" src={"https://picsum.photos/200/"+(a).toString()} alt=""/>
        
        <button className="btn" onMouseOverCapture={Increase}>Click Me</button>
       
        {/* {console.log(a)} */}
        </>
    );
}
export default Counter; 

