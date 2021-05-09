import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

var val="";
const Practice=()=>{
    const [data,setData]=useState([]);
    const [cityName,setName]=useState([]);
    const [citySearch,setSearch]=useState("karhal");

    const [msg,setMsg]=useState("");

const Update=()=>
{
    setSearch(val);
}


useEffect(()=>
{
    const Api=async ()=>{
        

        // const url=`http://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric&APPID=69e539a25566ef5c0b2523a880d4dc27`;
        // const response= await fetch(url);
        // const json=await response.json();
        // setData(json.main)
        // setName(json.name)


        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric&APPID=69e539a25566ef5c0b2523a880d4dc27`)
        .then(response => response.json())
        .then(json => {
            console.log(json.main)
            
            setData(json.main)
            setName(json.name)
        })

    };

    
    Api();
},[citySearch])




    return(
        <>
{!data ? (
    
    <p>no data found</p>
):(
    <div>
      <h1> My API</h1>
      
       {/* <input type="search" onChange={(e)=>{setSearch(e.target.value)}}/> */}
       <input type="search" onChange={(e)=>val=e.target.value}/>
      
        <button className="btn" onClick={Update}>Fetch </button>
        {/* <pre>{JSON.stringify(data,null,1)}</pre> */}
        <h1>Temperature:{data.temp}°cel 🌡️</h1>
        <h3>🌡️min:{data.temp_min}°cel || max:{data.temp_max}°cel</h3>
        <h1>{cityName}</h1>
        {/* {data.map((FunctionCall))} */}
        
        
        </div>
)
}
        </>);
};

export default Practice;

