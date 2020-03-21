import React from 'react';
import {Link} from 'react-router-dom'
import './style.css';


function Navbar (){
    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <div className="navbar-item">
    <Link to="/">
    <h1>BOSS</h1>

      <img src="../images/screenshot.png" width="112" height="28" alt="logo"/>
    </Link>
    </div>
     <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </div>
  </div>
  <div id="navbarBasicExample" className="navbar-menu">
  <div className="navbar-start">
  <div className="navbar-item">
      <Link to="/">Home</Link>
        
  </div>
  <div className="navbar-item">
       <Link to="/profile"> Profile</Link>
  </div>
  <div className="navbar-item has-dropdown is-hoverable">
  <div className="navbar-link">
          More
        </div>
        <div className="navbar-dropdown">
          <div className="navbar-item">
           <Link to="/buy">Buy</Link> 
          </div>
          <div className="navbar-item">
          <Link to="/sell">Sell</Link>
          </div>
          <div className="navbar-item">
            Contact
          </div>
          <hr className="navbar-divider"/>
          <div className="navbar-item">
            Report an issue
          </div>
        </div>

  </div>
  </div>
  <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <div className="button is-primary">
            <Link to="/signup"><strong>Sign up</strong></Link> 
          </div>
          <div className="button is-light">
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</nav>
    )
};


export default Navbar;