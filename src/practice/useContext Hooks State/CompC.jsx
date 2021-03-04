import React from 'react';
import {FirstName,LastName} from './App';
const CompC=()=>{
    return (
        <> 
        <FirstName.Consumer>
            {(Fname)=>{
                return (
                <LastName.Consumer>
                    {(lname)=>{
                        return <h1>Who am i ?? 👽 {Fname} {lname}👽</h1>;
                        
                    }}
                </LastName.Consumer>
                
                );
            }}
        </FirstName.Consumer>
        
       
        </>

    );
}
export default CompC;