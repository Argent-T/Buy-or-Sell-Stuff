import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import API from "../utils/API";

import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";


function Landing() {
  const [listings, setListings] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
      loadListings();
  }, []);

  function loadListings() {
      API.getListings()
          .then(res => {
            const randArray = res.data;
            randArray.sort(function(a, b){return 0.5 - Math.random()});
            var newList = randArray.slice(0, 6);
            setListings(newList)
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
      <section className="hero">
        <img className="landingImg" src="/images/Best-sites-to-sell-stuff-online.jpg" />
       </section>
       <Navbar />

      <div className="contFill">
      <h1 className="content xx-large midtitle">BOSS</h1>
      <h2 className="content x-large midtitle2">Buy Or Sell Stuff</h2>
      
      <p className="appMess"><strong>
          This app allows you to Buy items that you are in need of or Sell things you no longer desire to have. 
          </strong></p>
          <p className="appMess"><strong>
          Sign up today and become a member of BOSS.
          </strong></p>
          <p className="appMess"><strong>
          Bid on an item or just choose to buy it at the asking price.
          </strong></p>


</div>
      {/* /////////////// */}
      {/* <div className="columns"> */}
      {/* <div className="column">
      <div className="containter middesc">
      </div>
      </div> */}

      <List>
          <section className="section">
              <div className="container">
                  <p className="featured"><strong>Featured Items</strong></p>
              
              <div className="column col-10">
                <div className="columns is-multiline">
                    {listings.map(listing => (
                        <div className="column is-narrow is-one-quarter-desktop is-half-tablet">
                            <ListItem key={listing._id}>
                                <Link to={"/listings/" + listing._id}>
                                    <h1 className="content card cardtitle">{listing.title}</h1>
                                    <div className="card card-size">
                                        <div className="card-image card">
                                            <figure className="image is-3by2">
                                                <img className="card-Img"
                                                src={(require = listing.img)} alt="Placeholder image" />
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
                </div>
                </div>
                </section>
            </List>
            {/* </div> */}
    </>
  );
}

export default Landing;