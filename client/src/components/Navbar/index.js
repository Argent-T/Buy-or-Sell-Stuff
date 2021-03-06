import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './style.css';
import axios from 'axios';
import UserContext from "../../utils/UserContext";

function Navbar() {
  
  document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }

  });

// logout/////////////////////////////////////////////
  function logout(){
    console.log("logging out");
    axios.post('api/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
        console.log(error)
    })
  }


//////////////////////////////////////////////////////////////////
  const user = useContext(UserContext);
  const [button, setButton] = useState()
  useEffect(()=>{
    const login =  document.getElementById("login")
    const signup = document.getElementById("signup")
    const logout = document.getElementById("logout")
    const profile = document.getElementById("profile")

if(user.loggedIn === true){
  login.style.display = "none"
  signup.style.display = "none"
  logout.style.display = "block"
  profile.style.display = "block"
}
else{
  login.style.display = "block"
  signup.style.display = "block"
  logout.style.display = "none"
  profile.style.display = "none"
}

  }, [button])

  return (
    <nav className="navbar is-size-3" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link to="/">
            <h1 className="navBoss"><strong>BOSS</strong></h1>
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
          {/* <div className="navbar-item">
            <Link to="/" className="links">Home</Link>

          </div> */}
          <div className="navbar-item" id="profile">
            <Link to="/profile" className="links"> Profile</Link>
          </div>
          <div className="navbar-item">
            <Link to="/buy" className="links">Buy</Link>

          </div>

          <div className="navbar-item">
            <Link to="/sell" className="links">Sell</Link>

          </div>
          {/* <div className="navbar-item">
            <Link to="/contact" className="links">Contact</Link>

          </div> */}

        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <div>
                <Link  to="/signup"><button className="button navBtn" id="signup"><strong>Sign up</strong></button></Link>
              </div>
              <div>
                <Link  to="/login"><button className="button navBtn" id="login"><strong>Log in</strong></button></Link>
              </div>
              <div>
              <a href="/" ><button id="logout" onClick={logout} className="button navBtn"><strong>Log out</strong></button></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </nav>
  )
};


export default Navbar;