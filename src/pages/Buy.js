import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";

function Buy() {
    // Setting our component's initial state
    const [listings, setListings] = useState([])

    // Load all books and store them with setBooks
    useEffect(() => {
        loadListings()
    }, [])


    function loadListings() {
        API.getListings()
            .then(res =>
                setListings(res.data)
            )
            .catch(err => console.log(err));
    };

    //   Deletes a book from the database with a given id, then reloads books from the db
    function deleteListing(id) {
        API.deleteListing(id)
            .then(res => loadListings())
            .catch(err => console.log(err));
    }
    return (
        <>
            <h1>Buy</h1>
            <List>
                {listings.map(listing => (
                    <ListItem key={listing._id}>
                        <Link to={"/listings/" + listing._id}>
                            <strong>
                                {listing.title} by ${listing.price} Photo: <img width= "200px" height= "200px" src={ require=(listing.img) }/>
                            </strong>
                        </Link>
                        <DeleteBtn onClick={() => deleteListing(listing._id)} />
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default Buy;