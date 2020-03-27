import React from "react";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";


function Profile() {
    return (
        <>
            <Navbar />
            <h1 className="center">User Names Profile</h1>
            <br></br>
            <div>
            Basic Information
            </div>
            <br></br>
            <div className="columns">
                <div className="column is-half">
                    <div className="card">
                        <div className="columns card-content">
                            <p className="column is-half">Full Name</p><p className="column is-half">"NAME HERE"</p>
                        </div>

                    </div>
                    <div className="card">
                        <div className="columns card-content">
                            <p className="column is-half">Email Address</p><p className="column is-half">"EMAIL HERE"</p>
                        </div>

                    </div>
                    <div className="card">
                        <div className="columns card-content">
                            <p className="column is-half">User Name</p><p className="column is-half">"USERNAME HERE"</p>
                        </div>

                    </div>
                    <div className="card">
                        <div className="columns card-content">
                            <p className="column is-half">Password</p><p className="column is-half">"Click to Change Password"</p>
                        </div>

                    </div>
                </div>
                <div className="column is-half">
                    <div className="card">
                        <div className="columns card-content">
                            <p className="column is-half">Full Name</p><p className="column is-half">"NAME HERE"</p>
                        </div>

                    </div>
                </div>
            </div>
            <Link to="/">← Back</Link>
        </>
    )
}

export default Profile;