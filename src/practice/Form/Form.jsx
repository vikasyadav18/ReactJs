import React,{useState} from 'react';
import './Form.css';
var fn="";
var ln="";
const Form=()=>{
   
   const [fname,setName]=useState();
   const [lname,setlast]=useState();
   
   const UpdateFname=(event)=>{
    //setName(event.target.value);
    fn=event.target.value;

   };
   
   const UpdateLname=(event)=>{
    //    setlast(event.target.value);
       ln=event.target.value
   };

   const Update=()=>{

    setName(fn);
    setlast(ln);
   };
   
   
   
   return(<>
    <div className="box">
        <h1>Hello {fname}{" "}{lname}</h1>
        <input type="text" placeholder="Enter First name" onChange={UpdateFname}/>
        <input type="text"  placeholder="Enter last name" onChange={UpdateLname}/>
        <input type="text" />
        <button onClick={Update}>submit</button>
        <i class="fa fa-plus" aria-hidden="true"></i>
        </div>
        </>
    );
}

export default Form;