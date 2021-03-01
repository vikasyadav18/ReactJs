import React ,{useState} from 'react';

const Event=()=>{

var [bg,setbg]=useState('purple');
var [name,setname]=useState("Click  😄  me !");
const SingleClick=()=>{
    setbg('skyblue');
    setname("Don't click twice 🤕");
};
const DoubleClick=()=>{
    setname("Ouchhh !! 😠  you are bad");
    setbg('yellow');
};

const MouseOver=()=>{
    setname("Click  😄  me !");
    setbg('purple');
};
return(
<>
<div style={{display:'flex', backgroundColor:bg ,height:'100vh',width:'100vw'}}> 
    <button style={{display:'block', width:'100px',height:'50px', margin:'auto' ,cursor:'pointer'}} onClick={SingleClick} onDoubleClick={DoubleClick} onMouseOver={MouseOver}>{name}</button>
    
    </div>
</>
);
}
export default Event;