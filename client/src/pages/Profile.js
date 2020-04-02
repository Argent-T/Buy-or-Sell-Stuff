import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import { Link, useParams } from "react-router-dom";


function Profile(props) {
    const [user, setUser] = useState({})
    // When this component mounts, grab the book with the _id of props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    const { id } = useParams()
    useEffect(() => {
        console.log("test"+user)
        API.getUser(id)
            .then(res => setUser(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            <Navbar />
            <br></br>
            <h1 className="center is-size-2">"User Names Profile"{user.username}</h1>
            <br></br>
            <div className="column center is-half is-size-4">
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
                            <p className="column is-half">Language</p><p className="column is-half">English</p>
                        </div>

                    </div>
                    <div className="card">
                        <div className="columns card-content">
                            <p className="column is-half">Email Notifications</p><p className="column is-half" ><a>Yes</a></p>
                        </div>

                    </div>
                    <div className="card">
                        <div className="columns card-content">
                            <p className="column is-half">Account Status</p><p className="column is-half" >Live</p>
                        </div>

                    </div>
                </div>
            </div>
            <br></br>
            <div className="column center is-size-4">Current Bids</div>
            <div className="columns">
                <div className="column center">
                    <div className="card">
                        Loop through when we have user id
                    </div>
                </div>
            </div>        
            <Link to="/">← Back</Link>
        </>
    )
}

export default Profile;