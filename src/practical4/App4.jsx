import React from 'react';
import {Switch , Route, NavLink} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './Style.css';
import Page from './image/Page.png';
const App4=()=>{
    const Error=()=>{
        return(<>
     
      <img src={Page} alt="mypic" />

        </>);
    };

    return(<>
<nav className="navbar navbar-expand-lg navbar-light bg-secondary ">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">React Navigation</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>

      </div>
    </div>
  </div>
</nav>

   <Switch>

        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/about" component={About}/>
        <Route path="" component={()=><Error/>}/>

   </Switch>
    </>);
}

export default App4;
