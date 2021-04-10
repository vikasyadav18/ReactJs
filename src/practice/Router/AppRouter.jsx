import react from 'react';
import {Route,Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';

const AppRouter=()=>{

const Error=()=>{
    return(
        <h1>💦 OOps! page not found</h1>
    );
}

    return(
            <>
            <NavBar/>
           <Switch>
               <Route exact path="/" component={About} />
               <Route path="/contact" component={Contact}/>
               <Route path="" component={Error}/>
           </Switch>
                

            </>
    );
}

export default AppRouter;