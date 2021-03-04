// Here we are learning the context state { i.e= App------------->CompC } 

//Note===>>  Actually we send data as "value" from "App.jsx"   to   "CompC.jsx"   

// -------Steps are--------
// 1--> Make a context -->> createContext();  Also import it.
// 2--> there is one Provider()
// 3--> And other is Consumer()
// 4--> export the Created context --->> FirstName
// 5--> also it must be import at the  "consumer side"
// 6--> Every function has its own 'return' 

import React, { createContext } from 'react';
import CompA from './CompA';

const FirstName=createContext();
const LastName=createContext();
const App=()=>{

    return(
        <>
        <FirstName.Provider value={"kamnu"}>
            <LastName.Provider value={"Yadav"}>
                <CompA/>
            </LastName.Provider>      
        </FirstName.Provider>
        
        </>
    );
}
export default App;
export {FirstName,LastName};