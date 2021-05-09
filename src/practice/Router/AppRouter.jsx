import React from 'react';
import {Route,Switch, useHistory} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
import Url from "./Url";
const AppRouter=()=>{

const Error=()=>{
    return(
        <h1>💦 OOps! page not found</h1>
    );
}

const history=useHistory();

    return(
            <>

            <NavBar/>
           {true?(<button onClick={()=>history.push("/")}>Home</button>):(null)}
           <Switch>
               <Route 
               exact 
               path="/" 
               component={()=><About name="ABOUT"/>} />

               <Route 
               path="/contact" 
               render={()=><Contact name="CONTACT"/>}/>
           
                {/*--------- useParams---------- */}

                <Route 
                path="/url/:fname/:lname" 
                component={Url}/>
            
            <Route component={Error}/>

           </Switch>
                

            </>
    );
}

export default AppRouter;