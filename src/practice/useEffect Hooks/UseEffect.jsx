import React, { useEffect, useState } from 'react';

const UseEffect=()=>{

    const [Num1, setNum1] = useState(0);
    const [Num2, setNum2] = useState(0);
    const [Num3, setNum3] = useState(0);

    useEffect(()=>{
        
        alert("i am clicked | take me as an Api");
        console.log("I am clicked");
        document.title=`You Click me 🚗 ${Num1}`;

    },[Num1,Num2]);

   const Test=()=>{
       alert("Hey 👽")
       setNum3(Num3+1);
   }


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

        <br/>
        <button onClick={Test} className="btn mt-4 ml-4">I will not Update = {Num3} </button>

        </>

    );
}

export default UseEffect;