import React from "react";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";


function Profile(){
    return(
        <div>
        <Navbar />
        <h1>Profile</h1>
        <Link to="/">← Back</Link>
        </div>
    )
}

export default Profile;