// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

// class Navbar extends Component {
//   constructor() {
//     super()
//     this.logout = this.logout.bind(this)
//   }

//   logout(event) {
//     event.preventDefault()
//     console.log('logging out')
//     axios.post('api/user').then(response => {
//       console.log(response.data)
//       if (response.status === 200) {
//         this.props.updateUser({
//           loggedIn: false,
//           username: null
//         })
//       }
//     }).catch(error => {
//       console.log('Logout error')
//     })
//   }

//   render() {
//     const loggedIn = this.props.loggedIn;
//     console.log('navbar render, props: ')
//     console.log(this.props);

//     return (
//       <div>

//         <header className="navbar App-header" id="nav-container">
//           <div className="col-4" >
//             {loggedIn ? (
//               <section className="navbar-section">
//                 <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
//                   <span className="text-secondary">logout</span></Link>

//               </section>
//             ) : (
//                 <section className="navbar-section">
//                   <Link to="/" className="btn btn-link text-secondary">
//                     <span className="text-secondary">home</span>
//                   </Link>
//                   <Link to="/login" className="btn btn-link text-secondary">
//                     <span className="text-secondary">login</span>
//                   </Link>
//                   <Link to="/signup" className="btn btn-link">
//                     <span className="text-secondary">sign up</span>
//                   </Link>
//                 </section>
//               )}
//           </div>
//           <div className="col-4 col-mr-auto">
//             <div id="top-filler"></div>

//           </div>
//         </header>
//       </div>

//     );


//   }
// }

// export default Navbar


import React from 'react';
import {Link} from 'react-router-dom'
import './style.css';


function Navbar (){
  document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
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


    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
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
  <div className="navbar-item">
      <Link to="/" className="links">Home</Link>

  </div>
  <div className="navbar-item">
       <Link to="/profile" className="links"> Profile</Link>
  </div>
  <div className="navbar-item">
      <Link to="/buy" className="links">Buy</Link>

  </div>

  <div className="navbar-item">
      <Link to="/sell" className="links">Sell</Link>

  </div>
  <div className="navbar-item">
      <Link to="/contact" className="links">Contact</Link>

  </div>




  {/* <div className="navbar-item has-dropdown is-hoverable">
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

  </div> */}
  </div>
  <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <div className="button is-light">
            <Link to="/signup"><strong>Sign up</strong></Link> 
          </div>
          <div className="button is-light">
            <Link to="/login"><strong>Log in</strong></Link>
          </div>
        </div>
      </div>
    </div>
  </div>

</nav>
    )
};


export default Navbar;