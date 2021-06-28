import React,{ useContext } from 'react';
import {FirstName,LastName} from './App';

const CompC2pro=()=>{
    
    const fname= useContext(FirstName);
    const lname= useContext(LastName);

    return (
        <> 
         <h1>Who am i ??? 👽 {fname} {lname}👽</h1>;
        </>
    );
}

export default CompC2pro;
