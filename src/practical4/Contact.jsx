import React from 'react';
import './Style.css';
const Contact=()=>{

const fun=()=>{
    
    console.log("click");
}

    return(<>
    <div className="container">
    <h1>Contact</h1>
    <form action="">
    <label htmlFor="">Email address</label><br/>
    <input type="email" placeholder="Enter email"/>
    <br/>
    <label htmlFor="">Password</label><br/>
    <input type="password" placeholder="password"/><br/>
    <div className="checked">
    <input type="checkbox" name="" id=""/> <label htmlFor="">Check me Out</label><br/>
    </div>
    <button type="submit" className="btn bg-primary" onSubmit={fun}>Submit</button>
    </form>
    </div>
    </>);

}

export default Contact;