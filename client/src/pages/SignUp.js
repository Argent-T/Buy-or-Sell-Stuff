import React from 'react';
import Navbar from '../components/Navbar';

function Signup(){
    return(
        <>
        <Navbar />
      <div className="container signupContent">
        <h1 className="signUp is-large">Sign Up</h1>
        <hr />
        <div className="field">
          <div className="columns">
            <div className="column">
              <p class="control">
                <input
                  className="input inputname"
                  type="text"
                  placeholder="First Name"
                />
              </p>
            </div>
            <div className="column">
              <p class="control">
                <input
                  className="input inputname"
                  type="text"
                  placeholder="Last Name"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="field">
              <p class="control">
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
              <p class="control">
                <input
                  className="input inputname"
                  type="text"
                  placeholder="City"
                />
              </p>
            </div>
            <div className="column">
              <p class="control">
                <input
                  className="input inputname"
                  type="text"
                  placeholder="State"
                />
              </p>
            </div>
            <div className="column">
              <p class="control">
                <input
                  className="input inputname"
                  type="text"
                  placeholder="Zip"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="field">
          <p className="control">
            <input
              className="input inputbox"
              type="email"
              placeholder="Email"
            />
          </p>
        </div>

        <div className="field">
          <p className="control">
            <input
              className="input inputbox"
              type="password"
              placeholder="Password"
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-link loginbtn">Submit</button>
          </p>
        </div>
      </div>

        </>
    )
}

export default Signup;