import React from 'react';
import { useState } from 'react';

const FetchApi=()=>{
    const[data,setData]=useState([]);
    const Api=()=>{
        
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            console.log(json.main);
            
            setData(json);
        })

    }
const FunctionCall=(item)=>{
    return(<>
        <li>{item.title}</li>
        </>
    )
}

    return(
        <>
      <h1> My API</h1>
      
       
        <button className="btn" onClick={Api}>Fetch </button>
        {/* <pre>{JSON.stringify(data,null,1)}</pre> */}
        {data.map((FunctionCall))}
        </>);
};

export default FetchApi;

