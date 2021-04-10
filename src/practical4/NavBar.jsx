import React from 'react';
import './NavBar.css';
import {NavLink} from 'react-router-dom';

const NavBar=()=>{
return(
    <>


<nav className="navbar navbar-expand-lg navbar-light bg-light border border-4 border-primary rounded-3">
  <div className="container-fluid">
   
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <NavLink exact activeClassName="active_class" to="/">
    About Page
    </NavLink>
       
    <NavLink exact activeClassName="active_class" to="/contact">
    Contact page
    </NavLink>

      </ul>
     
    </div>
  </div>
</nav>



   

    </>
    );
};
export default NavBar;
