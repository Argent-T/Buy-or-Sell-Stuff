import React from "react";

import Navbar from "../components/Navbar";
import "../index.css";

export default function SignUp() {
  return (
    <>
      <Navbar />
      <div className="container signupContent">
        <h1>Sign Up</h1>
        <div className="field">
          <div className="columns">
            <div className="column">
              <p class="control has-icons-left has-icons-right">
                <input
                  className="input inputname"
                  type="text"
                  placeholder="First Name"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div className="column">
              <p class="control has-icons-left has-icons-right">
                <input
                  className="input inputname"
                  type="text"
                  placeholder="Last Name"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  className="input inputname"
                  type="text"
                  placeholder="Address"
                />
              </p>
            </div>
            

        <div className="field">
          <div className="columns">
            <div className="column">
              <p class="control has-icons-left has-icons-right">
                <input
                  className="input inputname"
                  type="text"
                  placeholder="City"
                />
                {/* <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span> */}
              </p>
            </div>
            <div className="column">
              <p class="control has-icons-left has-icons-right">
                <input
                  className="input inputname"
                  type="text"
                  placeholder="State"
                />
                {/* <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span> */}
              </p>
            </div>
            <div className="column">
              <p class="control has-icons-left has-icons-right">
                <input
                  className="input inputname"
                  type="text"
                  placeholder="Zip"
                />
                {/* <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span> */}
              </p>
            </div>
          </div>
        </div>

        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input inputbox"
              type="email"
              placeholder="Email"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input inputbox"
              type="password"
              placeholder="Password"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success loginbtn">Login</button>
          </p>
          <h5>
            <a href="#">Forgot Password?</a>
          </h5>
        </div>
      </div>
    </>
  );
}
