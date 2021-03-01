import React, { Component } from 'react';
import './Counter.css';
var f=0;
class Read extends Component
{
    constructor()
    {
        super();
        this.state={
            para:"",
            btn:"Read More"
        };
    };


    ShowMore=()=>{
        if(f==0){
        this.setState({
            para:"React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. ... React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple."
            ,btn:"Show Less"
            
        });
    f=1;    
    }
    else if(f==1)
    {
        this.setState({
            para:""
            ,btn:"Read More"
            
        });
        f=0;
    }
    };


    render()
    {
        return(
         <div className="parent">
                <div className="child">
            <h1>Welcome to the BetaLabs..!!</h1>
            <p>Click on Button to See More|Less</p>
            <p id="paraClass">{this.state.para}</p>
            <button onClick={this.ShowMore} style={{display:'block', margin:'auto'}}>{this.state.btn}</button>
           
            </div>
            </div>
        )
    }

} 

export default Read;