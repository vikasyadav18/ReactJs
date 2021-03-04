import React, { useEffect, useState } from 'react';

const UseEffect=()=>{

    const [Num1, setNum1] = useState(0);
    const [Num2, setNum2] = useState(0);

    useEffect(()=>{
        if(Num1==1)
        alert("i am clicked | take me as an Api");
        console.log("I am clicked");

    },[Num1]);

    return(
        <>
        <button className="btn ml-4 mt-4" 

        onClick={()=>{
            setNum1(Num1+1);
        }}
        >click me 1 {Num1} 🥇</button>
{/* ----------------------------------------------------------------- */}
        <br/><br/>

        <button className="btn mt-4 ml-4"
        onClick={()=>{
            setNum2(Num2+1);
        }}
        >Click me 2 {Num2} 🥈</button>

        </>
    );
}

export default UseEffect;