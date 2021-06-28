import React, { useState,useEffect } from 'react';

const UseEffectDemo=()=>{
    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(0);
    const [num3,setNum3]=useState(0);

    useEffect(()=>{
        if(num1==3){
        alert("hello man");
        document.title='title bar';
        }
    },[num1,num2]);

    const Update=()=>{
        setNum1(num1+1);
        setNum2(num2+2);

    }
    const Update3=()=>{
        setNum3(num3+1);
        alert("i am different :)")
    }

    return(<>

    <h1>value of num1 : {num1}</h1>
    <h1>value of num2 : {num2}</h1>
    <h1>value of num3 : {num3}</h1>
    <button onClick={Update}>click for num1 and num2</button>
    <button onClick={Update3}>click for num3</button>
    </>);
}
export default UseEffectDemo;