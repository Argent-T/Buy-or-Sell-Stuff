import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm"
import {Select} from "../components/Form"

function Buy() {
    // Setting our component's initial state
    const [listings, setListings] = useState([]);
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const categories = ["Select a Category","Clothes","Cars","Sports","Books","Computers", "Electronics","Toys","Other"]

    // Load all books and store them with setBooks
    useEffect(() => {
        loadListings();
        
    }, []);

    // SEARCH BAR FUNCTION/////////////////
    useEffect(() =>{

        if(search === ""){
            setResults(listings)
            console.log("test")
        }
        else{
            var text = search.toLocaleLowerCase();
            var filtered = results.filter(function (data){
                return data.title.toLowerCase().includes(text)
            });
            setResults(filtered);
        }
       
    },[search])
    ////////////////////////////////////////////////


    useEffect(()=>{
        if(category === "Select a Category"){
            console.log(listings)
            setResults(listings)
        }
        else{
            var cat = category
            var filtered = listings.filter(function(data){
                console.log(data)
                return data.category.includes(cat)
            });
            setResults(filtered)
        }
      
    }, [category])




    
    const handleInputChange = event => {
        setSearch(event.target.value);
    };
    const categorySearch = event => {
        setCategory(event.target.value);
    }

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
            {/* <div className="container"> */}
            <div className="content is-large">
                <h1 className="viewHeading">View Items</h1>
            </div>
        <div className="columns">
        <div className="column">

            <SearchForm 
             handleInputChange={handleInputChange}
            />
            </div>
            <div className="column">

             <Select className="buyCategory"
                id="category"
                name = "category"
                onChange = {categorySearch}
                categories = {categories}
                />
                </div>
                </div>
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
            {/* </div> */}
        </>
    );
}

export default Buy;
