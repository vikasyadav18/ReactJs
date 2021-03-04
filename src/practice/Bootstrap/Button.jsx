import React from 'react';

const Button=()=>{
    return(
        <>
        <div className="container-fluid border-4 border-aqua">
         <div className="row text-center ">
            
                <div className="border border-primary col-md-4">
                    <h1 className="text-capitalize mt4 text-dark ">Welcome to bootstrap world</h1>
                    <p className="text-light bg-primary">i a am paragraph</p>
                    <button className="btn btn-success d-block mx-auto">Welcome to Bootstrap</button>        
                </div>
                <div className="border border-primary col-md-4 ">
                    <h1 className="text-capitalize mt4 text-success">Welcome to bootstrap world</h1>
                    <p className="text-light bg-primary">i a am paragraph</p>
                    <button className="btn btn-success d-block mx-auto">Welcome to Bootstrap</button>        
                 </div>
                <div className="border border-primary col-md-4">
                    <h1 className="text-capitalize mt4 text-success">Welcome to bootstrap world</h1>
                    <p className="text-light bg-primary">i a am paragraph</p>
                    <button className="btn btn-success d-block mx-auto">Welcome to Bootstrap</button>        
               </div>
         </div>
        
        </div>
        </>

    );
}
export default Button;
