import React from 'react';
import './NavBar.css';
import {NavLink} from 'react-router-dom';

const NavBar=()=>{
return(
    <>
    

    <div className="Nav">
    <NavLink exact activeClassName="active_class" to="/">
    About Page
    </NavLink>
    
    <NavLink exact activeClassName="active_class" to="/contact">
    Contact page
    </NavLink>
    </div> 

    <a href="/">About Page</a>
    <a href="/contact">Contact</a> 
    <span style={{color:"red"}}> &#8592;  this is using anchor tag : this will reload the whole page  </span>

    </>
    );
};
export default NavBar;
