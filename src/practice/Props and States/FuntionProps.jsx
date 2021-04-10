import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function PropsValue(Props)
{
    return(
  <>  
    <h1>{Props.name}</h1>
    <h2>{Props.classN}</h2> 
    <h3>{Props.school}</h3>
    </>
);
}



const FuntionProps=()=>{

    const[val,fun]=useState("click me !");

    const Go=()=>{
        fun("How dare you 😠 !!");
    };

return(
    <>
    <h1 style={{cursor:'pointer'}} onClick={Go}>{val}</h1>

    <PropsValue 
        name="vikas"
        classN={12}
        school="ss"/>

    <PropsValue
        name="vinod"
        classN={14}
        school="sx"/>

    <PropsValue
        name="vino"
        classN={18}
        school="hh"/>
    </>
);


}

export default FuntionProps;