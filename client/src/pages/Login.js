import React from 'react';

import Navbar from "../components/Navbar";
import "../index.css";

export default function loginForm() {

  return (
  <>
      <Navbar />
      {/* <img src="/images/Best-sites-to-sell-stuff-online.jpg" /> */}

    <div className="container loginContent">
        <h1>Login</h1>
        <div className="field">
            <p class="control has-icons-left has-icons-right">
                <input className="input inputbox" type="email" placeholder="Email"/>
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                    </span>
            </p>
         </div>
            <div className="field">
                <p className="control has-icons-left">
                    <input className="input inputbox" type="password" placeholder="Password"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                </p>
            </div>
                <div className="field">
                    <p className="control">
                        <button className="button is-success loginbtn">
                            Login
                        </button>
                    </p>
                    <h5><a href="#">Forgot Password?</a></h5>
                </div>
    </div>
</>
    )
}