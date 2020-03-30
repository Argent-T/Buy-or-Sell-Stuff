import React from 'react';
import Navbar from '../components/Navbar';

function Login(){
    return(
        <>
        <Navbar />
      {/* <img src="/images/Best-sites-to-sell-stuff-online.jpg" /> */}

    <div className="container loginContent">
        <h1 className="content loginIn is-large"><strong>Login</strong></h1>
        <hr />
        <div className="field">
            <p class="control">
                <input className="input inputbox" type="email" placeholder="Email"/>
            </p>
         </div>
            <div className="field">
                <p className="control">
                    <input className="input inputbox" type="password" placeholder="Password"/>
                </p>
            </div>
                <div className="field">
                    <p className="control">
                        <button className="button is-link">
                            <strong className="loginbtn">Submit</strong>
                        </button>
                    </p>
                </div>
    </div>

        </>
    )
}

export default Login;