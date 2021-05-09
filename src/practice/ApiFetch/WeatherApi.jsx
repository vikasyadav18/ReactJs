import React from 'react';
import { useState } from 'react';

const WeatherApi=()=>{
    const [data,setData]=useState([]);
    const [cityName,setName]=useState([]);

    const Api=()=>{
        
        fetch('http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=69e539a25566ef5c0b2523a880d4dc27')
        .then(response => response.json())
        .then(json => {
            console.log(json.main);
            
            setData(json.main);
            setName(json.name);
        })

    }
// const FunctionCall=(item)=>{
//     return(<>
//         <li>{item}</li>
//         </>
//     )
// }

    return(
        <>
      <h1> My API</h1>
      
       
        <button className="btn" onClick={Api}>Fetch </button>
        <pre>{JSON.stringify(data,null,1)}</pre>
        <h1>{cityName}</h1>
        {/* {data.map((FunctionCall))} */}
        </>);
};

export default WeatherApi;

