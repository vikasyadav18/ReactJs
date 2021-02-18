import React from 'react';
import './index.css';


 let today=new Date();
 let hour=today.getHours();
 
// --color object--------


//  const Ncolor={
//    color:'yellow'
//  }
//  const Acolor={
//    color:'orange'
//  }
//  const Ecolor={
//    color:'blue'
//  }
//  const Ncolor={
//    color:'grey'
//  }

const csscolor={};

let greeting= '';
if((hour >=1 && hour<12) || hour==24)
{
  greeting='Good Morning';
  csscolor.color="green";
}
else if((hour >12 && hour<18 ) || hour==12)
{
  greeting='Good afternoon';
  csscolor.color="yellow";
}
else if(hour >= 18 && hour<20)
{
  greeting='Good evening';
  csscolor.color="orange";
}
else if(hour >= 20 && hour<24)
{
  csscolor.color="blue";
  greeting='Good night';
}


//heading.innerHTML="afternoon";
function Greeting()
{
  return (
    <>
    <div className="heading">
    <h1>'hey vikas' <span style={csscolor}>{greeting} {hour} </span></h1>
    </div>
    </>

  );
}

export default Greeting;