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
            var newList = randArray.slice(0, 3);
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
      <h1 className="content xx-large midtitle">BOSS</h1>
      <h2 className="content x-large midtitle2">Buy Or Sell Stuff</h2>

      {/* <img src="/images/boss.png" /> */}
      <hr />
      <div className="containter middesc">
        <p>Buy or Sell Stuff App</p>
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book. It usually begins with
        </p>
      </div>
      <List>
                <div className="columns is-multiline">
                    {listings.map(listing => (
                        <div className="column is-narrow is-one-quarter-desktop is-half-tablet">
                            <ListItem key={listing._id}>
                                <Link to={"/listings/" + listing._id}>
                                    <h1 className="content is-large "><strong>{listing.title}</strong></h1>
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image is-3by2">
                                                <img src={(require = listing.img)} alt="Placeholder image" />
                                            </figure>
                                        </div>
                                        <footer className="card-footer">
                                            <a className="card-footer-item">
                                            <strong>BUY</strong></a>
                                            <a className="card-footer-item">
                                            <strong>BID</strong></a>

                                        </footer>
                                    </div>
                                </Link>
                            </ListItem>
                        </div>

                    ))}
                </div>
            </List>

    </>
  );
}

export default Landing;