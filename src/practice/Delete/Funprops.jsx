import React, { useState } from 'react';

const Funprops=(props)=>{
   const [{name,age},setname]=useState({name:'vikas yadav',age:22});
   
   const Update=()=>{
       setname({name:"akshat pandey",age:20 });
   }
    return (
    <>
        <h1>my name is {props.name}</h1>
        <h2>name : {name} age:{age}</h2>
        <button onClick={Update}>click me!</button>




    </>);

}
export default Funprops;
