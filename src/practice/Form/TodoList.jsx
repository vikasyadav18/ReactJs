import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import './ToDoList.css'
var name="";



const TodoList=()=>{
//     var arr=['mango','apple','banana'];
//     console.log(...arr);
    const[itemVal,setVal]=useState([]);

const Content=(event)=>{
    name=event.target.value;
};
const Show=()=>{
    setVal((oldVal)=>{
        return [...oldVal,name];
    });
};
    return( 
        <>
    <div className="container">
        <div className="box">
            <h1>ToDO List</h1>
            <div className="plateform">
                <input type="text" onChange={Content}/>

                <Tooltip title="With the help of tool-tip ">
                    <Button onClick={Show} className="btn_green">
                        {/* <i className="fa fa-plus" aria-hidden="true" ></i> */}
                        <AddIcon />
                    </Button>
                </Tooltip>
                
            </div>
            <div className="list">
                <ol>
                    {itemVal.map((arrVal)=>{
                    return <li>{arrVal}</li>;
                    })}
                </ol>
            </div>
        </div>
    </div>
        </>
    );
}
export default TodoList;