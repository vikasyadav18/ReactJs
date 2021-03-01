import React, { Component } from 'react'
import './Counter.css';
class Counter extends Component {
    
    constructor(){
        super();
        this.state={
            count:0,
            
        };
       
    }

    Increase=()=>{
         this.setState({
            count:this.state.count+1
         });
     };

    Reset=()=>{
        this.setState({
            count:0,
        });
    };


    Decrease=()=>{
        this.setState({
            count:this.state.count-1
        });
    };


    render() {
        return (
            <div className="parent">
                <div className="child">
                    <h1>{this.state.count}</h1>
                    <button onClick={this.Increase}>Increase</button>
                    <button onClick={this.Reset}>Reset</button>
                    <button onClick={this.Decrease}>Decrease</button>
                </div>
            </div>
        )
    }
}
export default Counter;