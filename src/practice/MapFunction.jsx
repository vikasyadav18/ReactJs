//map use ----
import React, { useState } from "react";

const MapFunction=()=>{

const arr=[{name:'vikas1',class:'10'},
{name:'vikas2',class:'11'},
{name:'vikas3',class:'12'}];

const FunctionName=(e)=>{
    return(
        <>
        <h1>{e.name}</h1>

        </>
    );
}

    return(
        <>
            <h1>Map Function</h1>        
            {arr.map(FunctionName)}

        </>
    );
}
export default MapFunction;
