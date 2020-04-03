import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import { Link, useParams } from "react-router-dom";
import { List, ListItem } from "../components/List";


function Profile(props) {

    const [listings, setListings] = useState([]);
    const [results, setResults] = useState([]);

    // Load all books and store them with setBooks
    useEffect(() => {
        loadListings();
        
    }, []);

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

    function toggleFunction() {
        var x = document.getElementById("toggle");
        if (x.innerHTML === "Yes") {
          x.innerHTML = "No";
        } else {
          x.innerHTML = "Yes";
        }
      }

      function loadListings() {
        API.getListings()
            .then(res => {
                setListings(res.data)
                setResults(res.data)
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <Navbar />
            <br></br>
            <h1 className="center is-size-2"><strong>{user.username}'s Profile</strong></h1>
            <br></br>
            <div className="column center is-half is-size-4">
                <strong>Basic Information</strong>
            </div>
            <br></br>
            <div className="columns profileCard">
                <div className="column is-half">
                    <div className="card">
                        <div className="columns card-content">
                            <p className="column is-half"><strong>Full Name</strong></p><p className="column is-half">{user.first} {user.last}</p>
                        </div>

                    </div>
                    <div className="card">
                        <div className="columns card-content">
                            <p className="column is-half"><strong>Email Address</strong></p><p className="column is-half">{user.email}</p>
                        </div>

                    </div>
                    <div className="card">
                        <div className="columns card-content">
                            <p className="column is-half"><strong>Location</strong></p><p className="column is-half">{user.city}, {user.state}</p>
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
                            <p className="column is-half">Email Notifications</p><p className="column is-half" ><button id="toggle" onClick={toggleFunction}>Yes</button></p>
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
            {/* ////////////////would show listings////////////// */}
            {/* <div className="column center is-size-4"><strong>Listings for Sale</strong></div>
            <div className="columns profileCard">
                <div className="column center">
                    <div className="card">
                    <List>
                <div className="columns is-multiline">
                    {results.map(listing => (
                        <div className="column is-narrow is-one-quarter-desktop is-half-tablet">
                            <ListItem key={listing._id}>
                                <Link to={"/listings/" + listing._id}>
                                    <h1 className="content card cardtitle">{listing.title}</h1>
                                    <div className="card card-size">
                                        <div className="card-image">
                                            <figure className="image is-3by2">
                                                <img src={(require = listing.img)} alt="Placeholder image" />
                                            </figure>
                                        </div>
                                        <footer className="card-footer">
                                            <a className="card-footer-item cardFooter">
                                            <strong>${listing.price}</strong></a>
                                        </footer>
                                    </div>
                                </Link>
                            </ListItem>
                        </div>

                    ))}
                </div>
            </List>
                    </div>
                </div>
            </div>         */}
            <div className="is-pulled-right backBtn">
            <Link to="/">← Back</Link>
            </div>
        </>
    )
}

export default Profile;