import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm"

function Buy() {
    // Setting our component's initial state
    const [listings, setListings] = useState([]);
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState("")
    // Load all books and store them with setBooks
    useEffect(() => {
        loadListings();
        
    }, []);

    useEffect(() =>{
        var text = search.toLocaleLowerCase();
        var filtered = listings.filter(function (data){
            return data.title.toLowerCase().includes(text)
        });
        setResults(filtered);
    },[search])

    const handleInputChange = event => {
        setSearch(event.target.value);
    };
    function loadListings() {
        API.getListings()
            .then(res => {
                setListings(res.data)
                setResults(res.data)
            })
            .catch(err => console.log(err));
    }

    //   Deletes a book from the database with a given id, then reloads books from the db
    function deleteListing(id) {
        API.deleteListing(id)
            .then(res => loadListings())
            .catch(err => console.log(err));
    }
    return (
        <>
            <Navbar />
            <h1>Buy</h1>
            <SearchForm
                            handleInputChange={handleInputChange}

                        />
            <List>
                <div className="columns">
                {results.map(listing => (
                    <ListItem key={listing._id}>
                        <Link to={"/listings/" + listing._id}>
                            <div className="container">
                            <div className="card listCard">
                            <div className="columns">
                            <div className="column">
                                <div className="card-image">
                                    <figure className="image cardImg">
                                        <img src={(require = listing.img)} alt="Placeholder image" />
                                    </figure>
                                </div>
                                </div>
                               
                                <div className="column">
                                <div className="card-content">
                                    <div class="media">
                                        <div class="media-left">
                                            <h2>{listing.title}</h2>
                                            <div class="media-content">
                                                <h3>${listing.price}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="content">
                                        <p>{listing.description}</p>
                                    </div>
                                    <div className="action-bar">
                                        <button className="btn btn-danger">Favorite</button>
                                        <button className="btn btn-success">Buy</button>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                            </div> 
                            {/* </div>
                                    </div> */}
                            {/* <strong>
                                {listing.title} by ${listing.price} Photo: <img width="200px" height="200px" src={require = (listing.img)} />
                            </strong> */}
                        </Link>
                    </ListItem>
                ))}
                </div>
            </List>
        </>
    );
}

export default Buy;
