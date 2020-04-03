import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


function Congrats() {

    return (
        <>
            <Navbar />
            <div class="columns is-mobile is-centered">
                <div class="column is-half">
                    <br></br>
                    <br></br>
                    <p class="bd-notification is-primary">
                    <p className="font is-size-2">Success!</p>
                    <br></br>
                    <p className="font is-size-3">Congratulations! You have successfully completed the creation of your listing. The item will now be available for sale on BOSS buy pages. </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className="font">Good luck!</p>
                    </p>
                </div>
            </div>
            <div className="is-pulled-right backBtn">
                <Link to="/buy">← Back</Link>
            </div>
        </>
    );
}

export default Congrats;