import React from 'react';
import './Style.css';
import { useEffect } from 'react';
import { useState } from 'react';

var val="";

const Temp=()=>
{
    const [data,setData]=useState([]);
    const [cityName,setName]=useState([]);
    const [citySearch,setSearch]=useState("mathura");


    const [visibility,setVisibility]=useState([]);
    const [weather,setWeather]=useState([]);
    const [wind,setWind]=useState([]);


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
            setVisibility(json.visibility)
            setWeather(json.weather[0])
            setWind(json.wind)
        })

    };

    
    Api();
},[citySearch])

    return(

        <>
        <div className="box"> 
            <div className="inputData">


        {!data ?(
                <p>No data found</p>
                ):
                (
                <div>
      
                     {/* <input type="search" onChange={(e)=>{setSearch(e.target.value)}}/> */}
                    <input type="search" placeholder="enter place name " onChange={(e)=>val=e.target.value}/>

                     <button className="btn" onClick={Update}>Search</button>
                     <br />
                     {/* <pre>{JSON.stringify(data,null,1)}</pre> */}
                     <h1>{cityName} || {data.temp}°cel🌡️</h1> <br />
                     <div className="ExtraData">
                        <h6>min:{data.temp_min}°cel || max:{data.temp_max}°cel</h6>
                        <h6>humidity:{data.humidity} || wind-Speed:{wind.speed}</h6>
                        <h6>feels_like:{data.feels_like} || sky_description:{weather.description}</h6>
                        <h6>pressure:{data.pressure} || visibility:{visibility}</h6>
                     </div>
                     {/* {data.map((FunctionCall))} */}

                </div>
                )
        }

                

            </div>
        </div>
       
        </>
    );
}
export default Temp;